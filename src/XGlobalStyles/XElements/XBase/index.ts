import { createGlobalStyle } from 'styled-components'

const XBase = createGlobalStyle`
  :root {
    font-size: var(--font-size);
  }

  *::selection {
    background-color: var(--color-warning);
    color: var(--color-black);
  }

  html {
    min-height: 100vh;
    cursor: var(--cursor-default);
  }

  body {
    display: flex;
    justify-content: center;
    font-family: 'Press Start 2P', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    text-align: left;
    background-color: var(--color-black);
    color: var(--color-white);
    min-width: var(--min-width-body);

    @media (max-width: 680px) {
      padding-bottom: 5rem;
    }
  }

  #root {
    max-width: var(--max-width-body);
    width: 100%;
  }

  img {
    image-rendering: pixelated;
  }
`

export default XBase
