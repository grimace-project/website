import { useEffect, useState } from 'react'
import ReactSlider from 'react-slider'
import * as TWEEN from '@tweenjs/tween.js'

type Props = {
  emotion: string
  label: string
  onChange: (value: number, duration?: number) => void
  value: number | undefined
}

export default function Slider(props: Props) {
  // const sliderValue = 100 * (props.value || 0)

  const [value, setValue] = useState<number>(0)
  const [restoreValue, setRestoreValue] = useState<number>(0.75)
  const [isDragging, setIsDragging] = useState(false)
  const isActive = props.value !== undefined && props.value > 0

  useEffect(() => {
    if (isDragging) {
      return
    }

    const tweenValues = { value: value }

    const tween = new TWEEN.Tween(tweenValues, false)
      .to({ value: 100 * (props.value || 0) }, 150)
      .easing(TWEEN.Easing.Cubic.Out)
      .onUpdate(() => {
        setValue(tweenValues.value)
      })
      .start()

    // Setup the animation loop.
    function animate(time) {
      tween.update(time)
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [props.value])

  const handleLabelClick = () => {
    if (props.value !== undefined && props.value > 0) {
      setRestoreValue(props.value)
      props.onChange(0, 150)
    } else {
      props.onChange(restoreValue, 150)
    }
  }

  const labelImage = `/images/${props.emotion}${isActive ? '-active' : ''}@2x.png`

  return (
    <li className="flex items-center gap-[4%] aspect-[20/1] sm:aspect-[10/1] w-[230px] sm:w-full">
      <button className="h-[90%] flex flex-col justify-center" onClick={handleLabelClick}>
        <img src={labelImage} alt={props.label} className="max-h-full" />
      </button>
      <ReactSlider
        className="w-full h-full bg-slider bg-no-repeat bg-center bg-contain"
        thumbClassName="bg-knob w-[15%] h-full bg-contain bg-no-repeat bg-center"
        trackClassName=""
        value={value}
        onChange={(value) => props.onChange(value / 100)}
        onBeforeChange={() => setIsDragging(true)}
        onAfterChange={() => {
          console.log(value, props.value)
          setIsDragging(false)
          setValue(100 * (props.value || 0))
        }}
      />
    </li>
  )
}
