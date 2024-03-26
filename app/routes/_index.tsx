import type { MetaFunction } from '@remix-run/node'
import { useEffect, useRef } from 'react'
import Grimace from 'grimace'

import '../main.scss'
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

  useEffect(() => {
    if (!grimaceRef.current && containerRef.current) {
      const grimace = new Grimace(containerRef.current)
      grimaceRef.current = grimace
    }
  }, [])

  return (
    <>
      <TypeKitInjector />
      {/* <header>
        <a id="logo" href="/">
          <div alt="Grimace" className="icon-grimace" style={{ maxWidth: '269.922px', height: '125.674px' }}></div>
        </a>
        <a
          id="downloadOnTheAppStore"
          href="https://web.archive.org/web/20220218170721/https://itunes.apple.com/us/app/grimace/id613228635?mt=8"
        >
          <div className="icon-download-on-the-app-store"></div>
        </a>

        <nav>
          <a className="nav_button home" href="/web/20220218170721/http://grimace-project.net/">
            Home
          </a>

          <a className="nav_button developer" href="/web/20220218170721/http://grimace-project.net/developer">
            Developer
          </a>

          <a className="nav_button help" href="/web/20220218170721/http://grimace-project.net/help">
            Help
          </a>

          <a className="nav_button about" href="/web/20220218170721/http://grimace-project.net/about">
            About
          </a>
        </nav>
      </header> */}
      <div id="wrapper" className="home">
        <div className="flex flex-col sm:flex-row">
          <div className="basis-5/12 aspect-square max-h-[45vh] sm:max-h-full" ref={containerRef}></div>
          <SliderBubble />
        </div>

        <h2 className="font-display text-2xl">Grimace shows you what emotions look like.</h2>
        <div className="centered">
          <a
            id="downloadOnTheAppStore"
            href="https://web.archive.org/web/20220218170721/https://itunes.apple.com/us/app/grimace/id613228635?mt=8"
          >
            <div className="icon-download-on-the-app-store"></div>
          </a>
        </div>
        <p>
          <a id="callToAction" href="/web/20220218170721/http://grimace-project.net/about">
            Find out more <em>&rarr;</em>
          </a>
        </p>
      </div>
      <div id="footer">
        <a href="https://web.archive.org/web/20220218170721/https://twitter.com/grimaceapp">Twitter</a> &bullet;{' '}
        <a href="https://web.archive.org/web/20220218170721/https://www.facebook.com/grimaceapp">Facebook</a>
        <br />
        &copy;2022 Thomas Fadrus, Oliver Spindler
      </div>
    </>
  )
}
