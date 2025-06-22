// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//       },
//       colors: {
//         primary: {
//           300: '#64ffda',
//           400: '#14e8c4',
//           500: '#06b6d4',
//           600: '#0891b2',
//         },
//         dark: {
//           900: '#111827',
//           800: '#1f2937',
//         },
//       },
//       animation: {
//         gradient: 'gradient-bg 10s ease-in-out infinite',
//         'fade-in': 'fade-in 0.8s ease-out forwards',
//         'slide-up': 'slide-up 0.6s ease-out forwards',
//       },
//       keyframes: {
//         'gradient-bg': {
//           '0%, 100%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//         },
//         'fade-in': {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         'slide-up': {
//           '0%': { opacity: '0', transform: 'translateY(10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//       },
//       boxShadow: {
//         'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
//         'button-hover': '0 0 20px rgba(6, 182, 212, 0.3)',
//       },
//       backdropBlur: {
//         xs: '2px',
//         sm: '4px',
//       },
//     },
//   },
//   plugins: [
//     // Safely require the plugin with fallback
//     (function() {
//       try {
//         return require('tailwindcss-animate');
//       } catch (e) {
//         return function() {}; // Return empty plugin if not installed
//       }
//     })(),
//   ],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        secondary: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        dark: {
          900: '#0a0a0a',
          800: '#1e1e1e',
          700: '#2d2d2d',
        },
        light: {
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e5e5e5',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-down': 'slide-down 0.6s ease-out forwards',
        'gradient-x': 'gradient-x 8s ease infinite',
        'gradient-y': 'gradient-y 8s ease infinite',
        'gradient-xy': 'gradient-xy 8s ease infinite',
        'pulse-slow': 'pulse 6s infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'text-shine': 'text-shine 3s ease-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'text-shine': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
      },
      boxShadow: {
        'glow-primary': '0 0 15px rgba(45, 212, 191, 0.5)',
        'glow-secondary': '0 0 15px rgba(129, 140, 248, 0.5)',
        'inner-glow': 'inset 0 0 10px rgba(255, 255, 255, 0.1)',
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #2dd4bf, 0 0 20px #2dd4bf',
        'btn-primary': '0 4px 14px 0 rgba(20, 184, 166, 0.4)',
        'btn-hover': '0 6px 20px rgba(20, 184, 166, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'linear-gradient(90deg, #2dd4bf 0%, #818cf8 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-3d': {
          'text-shadow': '1px 1px 0 #999, 2px 2px 0 #888, 3px 3px 0 #777',
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'border-radius': '12px',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-sm': {
          'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 8px 16px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-glow': {
          'text-shadow': '0 0 8px rgba(45, 212, 191, 0.8)',
        },
        '.scrollbar-custom': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        },
        '.scrollbar-dark': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1e1e1e',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#444',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}