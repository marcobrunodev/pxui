import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: "rgba(33,37,41,1)",
  blackLight: "rgba(33, 37, 41, 0.8)",
  blackShadow: "rgba(173,175,188,1)",
  blackDark: "rgba(51, 51, 51, 1)",
  gray: "rgba(121,123,126,1)",

  white: "rgba(255,255,255,1)",
  whiteLight: "rgba(255, 255, 255, 0.4)",

  primary: "rgba(32,156,238,1)",
  primaryLight: "rgba(32, 156, 238, 0.4)",
  primaryDark: "rgba(16,141,224,1)",
  primaryShadow: "rgba(0,107,179,1.0)",

  success: "rgba(146,204,65,1.0)",
  successLight: "rgba(146, 204, 65, 0.4)",
  successDark: "rgba(118,196,66,1.0)",
  successShadow: "rgba(74,165,46,1.0)",

  warning: "rgba(247,213,29,1.0)",
  warningLight: "rgba(247, 213, 29, 0.4)",
  warningDark: "rgba(242,196,9,1.0)",
  warningShadow: "rgba(229,148,0,1.0)",

  error: "rgba(231,110,85,1.0)",
  errorLight: "rgba(231, 110, 85, 0.4)",
  errorDark: "rgba(206,55,43,1.0)",
  errorShadow: "rgba(140,32,34,1.0)",

  rose: "rgba(200,124,134,1.0)",
  usdt: "rgba(0,147,147,1.0)",

  disabled: "rgba(211,211,211,1.0)",
  disabledLight: "rgba(211, 211, 211, 0.4)",
  disabledFont: "rgba(121,123,126,1.0)",
  disabledShadow: "rgba(173,175,188,1.0)",
}

const XColors = createGlobalStyle`
  :root {
    --color-black: ${colors.black};
    --color-black-light: ${colors.blackLight};
    --color-black-shadow: ${colors.blackShadow};
    --color-black-dark: ${colors.blackDark};
    --color-gray: ${colors.gray};

    --color-white: ${colors.white};
    --color-white-light: ${colors.whiteLight};

    --color-primary: ${colors.primary};
    --color-primary-light: ${colors.primaryLight};
    --color-primary-dark: ${colors.primaryDark};
    --color-primary-shadow: ${colors.primaryShadow};

    --color-success: ${colors.success};
    --color-success-light: ${colors.successLight};
    --color-success-dark: ${colors.successDark};
    --color-success-shadow: ${colors.successShadow};

    --color-warning: ${colors.warning};
    --color-warning-light: ${colors.warningLight};
    --color-warning-dark: ${colors.warningDark};
    --color-warning-shadow: ${colors.warningShadow};

    --color-error: ${colors.error};
    --color-error-light: ${colors.errorLight};
    --color-error-dark: ${colors.errorDark};
    --color-error-shadow: ${colors.errorShadow};

    --color-rose: ${colors.rose};
    --color-usdt: ${colors.usdt};

    --color-disabled: ${colors.disabled};
    --color-disabled-light: ${colors.disabledLight};
    --color-disabled-font: ${colors.disabledFont};
    --color-disabled-shadow: ${colors.disabledShadow};
  }
`

export default XColors
