import styled, { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  ${props => props.theme.media.bellow750`
    font-size: 57%;
  `};
  ${props => props.theme.media.bellow450`
    font-size: 55%;
  `};
}

body {
  background: ${theme.colors.appBackgroundFallback}; /* fallback for old browsers */
  background: -webkit-${theme.colors.appBackground}; /* Chrome 10-25, Safari 5.1-6 */
  background: ${
    theme.colors.appBackground
  }; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-repeat: no-repeat;
  min-height: 100vh;
  margin: 0;
  font-family: ${theme.fonts.main};
  color: white;
  text-align: center;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${theme.colors.scrollbar.track};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${theme.colors.scrollbar.thumb};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${theme.colors.scrollbar.hover};
}
`
const AppWrapper = styled.div`
  width: 70%;
  min-width: 300px;
  max-width: 520px;
  margin: 0 auto;
  padding-bottom: 30px;
  position: relative;
  ${props => props.theme.media.bellow330`
    min-width: 270px;
  `};
`

export default GlobalStyle
export { AppWrapper }
