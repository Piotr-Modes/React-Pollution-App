import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;

  @media only screen and(max-width:750px) {
    font-size: 57%;
  }
  @media only screen and(max-width:450px) {
    font-size: 55%;
  }
}

body {
  background: #e6dada; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #274046, #e6dada); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #274046,
    #e6dada
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-repeat: no-repeat;
  min-height: 100vh;
  margin: 0;
  font-family: 'Fira Sans Condensed', arial;
  color: white;
  text-align: center;
}

.app {
  width: 70%;
  min-width: 300px;
  max-width: 520px;
  margin: 0 auto;
  padding-bottom: 30px;
  position: relative;
  @media (max-width: 330px) {
    min-width: 270px;
  }
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export default GlobalStyle
