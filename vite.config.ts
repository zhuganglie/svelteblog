// vite.config.ts
import Unocss from 'unocss/vite'
import { presetIcons, presetUno, transformerDirectives } from 'unocss'


export default {
  plugins: [
    Unocss({
      presets: [
        presetIcons({ /* options */ }),
        presetUno(),
        // ...custom presets
      ],
      transformers: [
        transformerDirectives(),
      ],
    }),
  ],
}
