import type Grimace from 'grimace'

import Slider from './Slider'
import ShuffleButton from './ShuffleButton'
import { useEffect, useState } from 'react'
import { EmotionSet } from 'grimace'

type Props = {
  grimace?: Grimace
}

export default function SliderBubble({ grimace }: Props) {
  const [joy, setJoy] = useState<number>()
  const [surprise, setSurprise] = useState<number>()
  const [fear, setFear] = useState<number>()
  const [sadness, setSadness] = useState<number>()
  const [disgust, setDisgust] = useState<number>()
  const [anger, setAnger] = useState<number>()

  useEffect(() => {
    if (!grimace) {
      return
    }

    const handleEmotionChange = (emotions: EmotionSet) => {
      setJoy(emotions.joy)
      setSurprise(emotions.surprise)
      setFear(emotions.fear)
      setSadness(emotions.sadness)
      setDisgust(emotions.disgust)
      setAnger(emotions.anger)

      Object.entries(emotions).reduce((res, [id, value]) => {
        if (value !== undefined && value > 0) {
          res[id] = value
        }
        return res
      }, {} as { [key: string]: number })
    }
    grimace.addListener(handleEmotionChange)
  }, [grimace])

  const handleSliderChange = (emotion: string, value: number, duration?: number) => {
    if (!grimace) {
      return
    }

    grimace.setEmotion(emotion, value, duration)
  }

  return (
    <div className="sm:bg-bubble sm:aspect-square flex-1 max-w-[768px] bg-no-repeat bg-contain">
      <ul className="sm:h-full sm:pt-[20%] sm:pb-[13%] sm:pl-[25%] sm:pr-[15%] flex flex-col justify-between items-center gap-2 sm:gap-0">
        <Slider
          emotion="joy"
          label="Joy"
          value={joy}
          onChange={(value, duration?) => {
            handleSliderChange('joy', value, duration)
          }}
        />
        <Slider
          emotion="surprise"
          label="Surprise"
          value={surprise}
          onChange={(value, duration?) => {
            handleSliderChange('surprise', value, duration)
          }}
        />
        <Slider
          emotion="fear"
          label="Fear"
          value={fear}
          onChange={(value, duration?) => {
            handleSliderChange('fear', value, duration)
          }}
        />
        <Slider
          emotion="sadness"
          label="Sadness"
          value={sadness}
          onChange={(value, duration?) => {
            handleSliderChange('sadness', value, duration)
          }}
        />
        <Slider
          emotion="disgust"
          label="Disgust"
          value={disgust}
          onChange={(value, duration?) => {
            handleSliderChange('disgust', value, duration)
          }}
        />
        <Slider
          emotion="anger"
          label="Anger"
          value={anger}
          onChange={(value, duration?) => {
            handleSliderChange('anger', value, duration)
          }}
        />
        <ShuffleButton
          onClick={() => {
            grimace?.setRandomEmotionSet()
          }}
        />
      </ul>
    </div>
  )
}
