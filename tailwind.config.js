module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx,mdx}',
    './src/components/**/*.{ts,tsx,js,jsx,mdx}',
    './src/data/**/*.{ts,tsx,js,jsx}',
    './src/app/globals.css'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          900: '#07090b',
          800: '#0b0f12'
        },
        accent: '#00c8ff'
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        geistMono: ['var(--font-geist-mono)'],
        poppins: ['var(--font-poppins)']
      },
      boxShadow: {
        glow: '0 12px 40px rgba(11,61,145,0.16)'
      }
    }
  },
  plugins: []
};