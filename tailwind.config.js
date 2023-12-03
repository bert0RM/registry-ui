const { blackA, violet } = require('@radix-ui/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...violet,
      },
    },
  },
  plugins: [require('daisyui')],
};
