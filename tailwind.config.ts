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
        about: "url('../../assets/bg4.jpg')",
        partener: "url('../../assets/bgPrincipal.jpg')",        
        site: "url('../../assets/bgSecond.jpg')",
        dash:"#146ca4",        
      },
      
    },
  },
  plugins: [],
}
export default config
