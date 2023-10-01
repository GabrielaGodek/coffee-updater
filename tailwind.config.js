/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f0c9ba8c',
        details_color: '#ca8f7ac9',
        cta: '#965858',
        text: '#333333',
        error: '#dc2626'
      }
    }
    // screens: {
    // 'lg_breakpoint': '800px',
    // 'md_breakpoint': '600px',
    // 'xs_breakpoint': '350px',
    // }
  },
  plugins: [forms, aspectRatio]
}
