import { createGlobalStyle } from 'styled-components'

const XColors = createGlobalStyle`
  :root {
    --color-black: #212529;
    --color-black-light: rgba(33, 37, 41, 0.8);
    --color-black-shadow: #adafbc;
    --color-black-dark: rgba(51, 51, 51, 1);
    --color-gray: #797b7e;

    --color-white: #fff;
    --color-white-light: rgba(255, 255, 255, 0.4);

    --color-primary: #209cee;
    --color-primary-light: rgba(32, 156, 238, 0.4);
    --color-primary-dark: #108de0;
    --color-primary-shadow: #006bb3;

    --color-success: #92cc41;
    --color-success-light: rgba(146, 204, 65, 0.4);
    --color-success-dark: #76c442;
    --color-success-shadow: #4aa52e;

    --color-warning: #f7d51d;
    --color-warning-light: rgba(247, 213, 29, 0.4);
    --color-warning-dark: #f2c409;
    --color-warning-shadow: #e59400;

    --color-error: #e76e55;
    --color-error-light: rgba(231, 110, 85, 0.4);
    --color-error-dark: #ce372b;
    --color-error-shadow: #8c2022;

    --color-rose: #c87c86;
    --color-usdt: #009393;

    --color-disabled: #d3d3d3;
    --color-disabled-light: rgba(211, 211, 211, 0.4); 
    --color-disabled-font: #797b7e;
    --color-disabled-shadow: #adafbc;
  }
`

export default XColors
