module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 3s infinite linear',
        dash: "dash 1.5s ease-in-out alternate backwards infinite",
        dashneg: "dashneg 1.5s ease-in-out alternate forwards",
        dashnegtwo: "dashnegtwo 1.5s ease-in-out alternate forwards",
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },

        dash: {
          'from': {
            'stroke-dashoffset': '342.269775390625',
          },
          'to': {
            'stroke-dashoffset': '0',
          },
        },
        dashneg: {
          'from': {
            'stroke-dashoffset': '0',
          },
          'to': {
            'stroke-dashoffset': '342.269775390625',
          },
        },

        dashnegtwo: {
          
          'to': {
            'stroke-dashoffset': '0',
          },
        }
          
      },
    
      colors:{
        'specialgreen': '#8bbb4d',
      }
    },
  },
  plugins: [],
}