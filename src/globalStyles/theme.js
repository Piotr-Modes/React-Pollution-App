import { css } from 'styled-components'

const sizesForMediaQueries = [750, 450, 350, 330]

const theme = {
  colors: {
    appBackground: `linear-gradient(to bottom, #274046, #e6dada)`,
    appBackgroundFallback: '#e6dada',
    primary: 'rgba(15, 25, 27, 0.7)',
    positive: '#00ff00',
    negative: '#e60000',
    loader: 'white',
    scrollbar: {
      track: '#f1f1f1',
      thumb: '#888',
      hover: '#555',
    },
  },
  fonts: {
    main: 'Fira Sans Condensed, arial',
  },
  media: sizesForMediaQueries.reduce((acc, size) => {
    acc[`bellow${size}`] = (...args) => css`
      @media (max-width: ${size}px) {
        ${css(...args)};
      }
    `
    return acc
  }, {}),
}
console.log(theme.media)
export default theme
