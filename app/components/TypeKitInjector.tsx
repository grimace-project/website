import React, { useEffect } from 'react'

function injectTypeKit() {
  const config = {
    kitId: 'ohp3hwf',
    scriptTimeout: 3000,
  }
  const h = document.getElementsByTagName('html')[0]
  h.className += ' wf-loading'
  const t = setTimeout(function () {
    h.className = h.className.replace(/(\s|^)wf-loading(\s|$)/g, ' ')
    h.className += ' wf-inactive'
  }, config.scriptTimeout)
  const tk = document.createElement('script')
  let d = false
  tk.src = '//use.typekit.net/' + config.kitId + '.js'
  tk.type = 'text/javascript'
  tk.async = true
  tk.onload = tk.onreadystatechange = function () {
    const a = this.readyState
    if (d || (a && a != 'complete' && a != 'loaded')) return
    d = true
    clearTimeout(t)
    try {
      Typekit.load(config)
    } catch (b) {}
  }
  const s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(tk, s)
}

export default function TypeKitInjector() {
  useEffect(injectTypeKit, [])
  return <></>
}
