import { createGlobalStyle } from 'styled-components'

const XSizes = createGlobalStyle`
  :root {
    --font-size: 10px;
    --min-width-body: 480px;
    --max-width-body: 2200px;
    --border-width: 0.4rem;
  }
`

export default XSizes
