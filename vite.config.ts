// vite.config.ts
import Unocss from 'unocss/vite'
import { presetIcons, presetUno } from 'unocss'

export default {
  plugins: [
    Unocss({
      presets: [
        presetIcons({ /* options */ }),
        presetUno(),
        // ...custom presets
      ],
    }),
  ],
}
