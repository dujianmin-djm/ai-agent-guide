/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"PingFang SC"',
          '"Helvetica Neue"',
          '"Microsoft YaHei"',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        // Apple-style accent (refined blue)
        accent: {
          50: '#eaf4fd',
          100: '#d1e8fb',
          200: '#a3d1f6',
          300: '#6fb3ef',
          400: '#3893e6',
          500: '#0071e3',
          600: '#0058b8',
          700: '#004491',
          800: '#00306b',
          900: '#001f47',
        },
        // Neutral ink scale (Apple-style grays)
        ink: {
          50: '#fbfbfd',
          100: '#f5f5f7',
          200: '#e8e8ed',
          300: '#d2d2d7',
          400: '#a1a1a6',
          500: '#86868b',
          600: '#6e6e73',
          700: '#424245',
          800: '#1d1d1f',
          900: '#000000',
        },
      },
      fontSize: {
        // Apple-style display sizes
        'display-xl': ['clamp(2.75rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-lg': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['clamp(1.875rem, 3vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-sm': ['clamp(1.5rem, 2.2vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'apple-sm': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'apple': '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)',
        'apple-lg': '0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
        'apple-xl': '0 24px 60px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'apple': '1.25rem',
        'apple-lg': '1.75rem',
        'apple-xl': '2.25rem',
      },
    },
  },
  plugins: [],
}
