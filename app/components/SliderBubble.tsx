import React, { useEffect } from 'react'

import Slider from './Slider'
import ShuffleButton from './ShuffleButton'

type Props = {}

export default function SliderBubble(props: Props) {
  return (
    <div className="sm:bg-bubble sm:aspect-square flex-1 max-w-[768px] bg-no-repeat bg-contain">
      <ul className="sm:h-full sm:pt-[20%] sm:pb-[13%] sm:pl-[25%] sm:pr-[15%] flex flex-col justify-between items-center gap-2 sm:gap-0">
        <Slider emotion="joy" label="Joy" value={0} onChange={() => {}} />
        <Slider emotion="surprise" label="Surprise" value={0} onChange={() => {}} />
        <Slider emotion="fear" label="Fear" value={0} onChange={() => {}} />
        <Slider emotion="sadness" label="Sadness" value={0} onChange={() => {}} />
        <Slider emotion="disgust" label="Disgust" value={0} onChange={() => {}} />
        <Slider emotion="anger" label="Anger" value={0} onChange={() => {}} />
        <ShuffleButton />
      </ul>
    </div>
  )
}
