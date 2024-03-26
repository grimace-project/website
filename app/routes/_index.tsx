import type { MetaFunction } from '@remix-run/node'
import { useCallback, useEffect, useRef, useState } from 'react'
import Grimace from 'grimace'

import TypeKitInjector from '~/components/TypeKitInjector'
import SliderBubble from '~/components/SliderBubble'

export const meta: MetaFunction = () => {
  return [
    { title: 'Grimace' },
    {
      name: 'description',
      content: 'Grimace shows you what emotions look like',
    },
  ]
}

export default function Index() {
  const containerRef = useRef<HTMLElement>()
  const grimaceRef = useRef<Grimace>()
  const [grimace, setGrimace] = useState<Grimace>()

  useEffect(() => {
    if (!grimaceRef.current && containerRef.current) {
      const grimace = new Grimace(containerRef.current)
      grimaceRef.current = grimace
      setGrimace(grimace)
    }
  }, [])

  return (
    <main>
      <TypeKitInjector />
      <header className="flex">
        <a
          href="/"
          aria-label="Grimace logo"
          className="block relative w-[50%] max-w-52 md:max-w-64 aspect-[270/126] -mb-5"
        >
          <div className="bg-logo  bg-contain bg-no-repeat absolute -top-2 -left-4 sm:-left-10 md:-left-14 bottom-0 right-0"></div>
        </a>

        <nav className="w-full text-xl sm:text-2xl md:text-3xl text-link font-display flex items-center justify-end gap-7">
          <a className="" href="https://github.com/grimace-project/grimace">
            <img src="/images/github-mark.svg" alt="GitHub logo" className="w-6 sm:w-10" />
          </a>
        </nav>
      </header>
      <div id="wrapper" className="bg-white px-4">
        <div className="flex flex-col sm:flex-row">
          <div className="basis-5/12 aspect-square max-h-[45vh] sm:max-h-full" ref={containerRef}></div>
          <SliderBubble grimace={grimace} />
        </div>

        <h2 className="font-display text-2xl text-grey text-3xl font-bold flex flex-col items-center text-center mt-10 mb-4 pb-4">
          Grimace shows you what emotions look like.
        </h2>
      </div>
      <div className="font-body text-link flex flex-col items-center">&copy;2024 Oliver Spindler, Thomas Fadrus</div>
    </main>
  )
}
