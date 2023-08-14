import { createGlobalStyle } from 'styled-components'
import uni0553woff from '../../../assets/fonts/uni0553-webfont.woff'
import uni0563woff from '../../../assets/fonts/uni0563-webfont.woff'
import uni0553otf from '../../../assets/fonts/uni0553-webfont.otf'
import uni0563otf from '../../../assets/fonts/uni0563-webfont.otf'

const XBase = createGlobalStyle`
  @font-face {
    font-family: 'FontPxRegular';
    src: url(${uni0553woff}) format('woff'),
         url(${uni0553otf}) format('otf');
  }

  @font-face {
    font-family: 'FontPxBold';
    src: url(${uni0563woff}) format('woff'),
         url(${uni0563otf}) format('otf');
  }

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
    font-family: 'FontPxRegular', sans-serif;
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
