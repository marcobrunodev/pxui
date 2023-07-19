import { createGlobalStyle } from 'styled-components'

const XSizes = createGlobalStyle`
  :root {
    --font-size: 8px;
    --min-width-body: 480px;
    --max-width-body: 2200px;
  }
`

export default XSizes
