import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      background: '#F7F7F7',
      grey: '#242424',
      home: '#00c557',
      developer: '#628EFF',
      help: '#FFA91F',
      about: '#FB0B44',
    },
    fontFamily: {
      display: ['brandon-grotesque', 'sans-serif'],
      body: ['adelle-sans', 'sans-serif'],
    },
    backgroundImage: {
      bubble: "url('/images/bubble.svg')",
      slider: "url('/images/slider.svg')",
      knob: "url('/images/knob.svg')",
      shuffle: "url('/images/shuffle@2x.png')",
      shuffleActive: "url('/images/shuffle-active@2x.png')",
    },
  },
  plugins: [],
} satisfies Config
