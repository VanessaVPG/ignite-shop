import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': '#fff',
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-300': '#c4c4cc',
      'gray-100': '#e1e1e6',

      'green-500': '#00875f',
      'green-300': '#00b37e',
      'black': '#000',
    },
    fontSize: {
      'md': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '2rem', 
    },
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
