import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: '',
      secondary: '',
      tertiary: ''
    },
    container: {
      padding: {
        DEFAULT: '15px',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      colors: {
        primary: '#fff000',
        accent: '#fff777'
      },
      backgroundImage: {
        site: "url('../assets/bg4.jpg')",
        about: "url('../assets/bgPrincipal.jpg')",        
        partener: "url('@/assets/bgSecond.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
