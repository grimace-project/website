import React, { useEffect } from 'react'

type Props = {}

export default function ShuffleButton(props: Props) {
  return (
    <button
      className="bg-shuffle active:bg-shuffleActive indent-96 aspect-[1/1] w-[63px] h-[32px] bg-contain"
      title="Set random emotion"
    ></button>
  )
}
