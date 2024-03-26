import ReactSlider from 'react-slider'
import React, { useEffect } from 'react'

type Props = {
  emotion: string
  label: string
  onChange: (value: number) => void
  value: number | undefined
}

export default function Slider(props: Props) {
  const sliderValue = 100 * (props.value || 0)
  const isActive = props.value > 0

  const labelImage = `/images/${props.emotion}${isActive ? '-active' : ''}@2x.png`
  return (
    <li className="flex items-center gap-[4%] aspect-[20/1] sm:aspect-[10/1] w-[230px] sm:w-full">
      <div className="h-[90%] flex flex-col justify-center">
        <img src={labelImage} alt={props.label} className="max-h-full" />
      </div>
      <ReactSlider
        className="w-full h-full bg-slider bg-no-repeat bg-center bg-contain"
        thumbClassName="bg-knob w-[15%] h-full bg-contain bg-no-repeat bg-center"
        trackClassName=""
      />
    </li>
  )
}
