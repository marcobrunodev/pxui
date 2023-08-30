import{a as e,j as o}from"./styled-components.browser.esm-f3162c9c.js";import{t as i}from"./chunk-6P7RB4HF-0bed2682.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";const r={black:"rgba(33,37,41,1)",blackLight:"rgba(33, 37, 41, 0.8)",blackShadow:"rgba(173,175,188,1)",blackDark:"rgba(51, 51, 51, 1)",gray:"rgba(121,123,126,1)",white:"rgba(255,255,255,1)",whiteLight:"rgba(255, 255, 255, 0.4)",primary:"rgba(32,156,238,1)",primaryLight:"rgba(32, 156, 238, 0.4)",primaryDark:"rgba(16,141,224,1)",primaryShadow:"rgba(0,107,179,1.0)",success:"rgba(146,204,65,1.0)",successLight:"rgba(146, 204, 65, 0.4)",successDark:"rgba(118,196,66,1.0)",successShadow:"rgba(74,165,46,1.0)",warning:"rgba(247,213,29,1.0)",warningLight:"rgba(247, 213, 29, 0.4)",warningDark:"rgba(242,196,9,1.0)",warningShadow:"rgba(229,148,0,1.0)",error:"rgba(231,110,85,1.0)",errorLight:"rgba(231, 110, 85, 0.4)",errorDark:"rgba(206,55,43,1.0)",errorShadow:"rgba(140,32,34,1.0)",rose:"rgba(200,124,134,1.0)",usdt:"rgba(0,147,147,1.0)",disabled:"rgba(211,211,211,1.0)",disabledLight:"rgba(211, 211, 211, 0.4)",disabledFont:"rgba(121,123,126,1.0)",disabledShadow:"rgba(173,175,188,1.0)"},l=e`
  :root {
    --color-black: ${r.black};
    --color-black-light: ${r.blackLight};
    --color-black-shadow: ${r.blackShadow};
    --color-black-dark: ${r.blackDark};
    --color-gray: ${r.gray};

    --color-white: ${r.white};
    --color-white-light: ${r.whiteLight};

    --color-primary: ${r.primary};
    --color-primary-light: ${r.primaryLight};
    --color-primary-dark: ${r.primaryDark};
    --color-primary-shadow: ${r.primaryShadow};

    --color-success: ${r.success};
    --color-success-light: ${r.successLight};
    --color-success-dark: ${r.successDark};
    --color-success-shadow: ${r.successShadow};

    --color-warning: ${r.warning};
    --color-warning-light: ${r.warningLight};
    --color-warning-dark: ${r.warningDark};
    --color-warning-shadow: ${r.warningShadow};

    --color-error: ${r.error};
    --color-error-light: ${r.errorLight};
    --color-error-dark: ${r.errorDark};
    --color-error-shadow: ${r.errorShadow};

    --color-rose: ${r.rose};
    --color-usdt: ${r.usdt};

    --color-disabled: ${r.disabled};
    --color-disabled-light: ${r.disabledLight};
    --color-disabled-font: ${r.disabledFont};
    --color-disabled-shadow: ${r.disabledShadow};
  }
`,n=e`
  :root {
    --color-snoar-black: #16171a;
    --color-snoar-dark-red: #7f0622;
    --color-snoar-red: #d62411;
    --color-snoar-orange: #ff8426;
    --color-snoar-dark-yellow: #ffd100;
    --color-snoar-yellow: #bfff3c;
    --color-snoar-white: #fafdff;
    --color-snoar-: #ff80a4;
    --color-snoar-: #ff2674;
    --color-snoar-: #94216a;
    --color-snoar-purple: #430067;
    --color-snoar-dark-blue: #002859;
    --color-snoar-blue: #234975;
    --color-snoar-light-blue: #007899;
    --color-snoar-sea-blue: #68aed4;
    --color-snoar-green: #10d275;
  }
`,c=e`
  :root {
    --font-size: 10px;
    --min-width-body: 480px;
    --max-width-body: 2200px;
    --border-width: 0.4rem;
  }
`,g=e`
  :root {
    --cursor-default: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR9WXURLDIAhE6/0PbSdOtUpcd1Gnpv1KGpTHBpCE1/cXq+vrMph7dGvXZTtpfW10DCA5jrH1H0Jhs5E0hnZdCR+vb5S8Nn8mQCeS9BdSalYJqMBjAGzq59xAESN7VFVUgV8AZB/dZBR7QTFDCqGquvUBVVoEtgIwpQRzmANSFHgWQKExHdIrPeuMvQNDarXe6nC/AutgV3JW+6bgqQLeV8FekRtgV+ToDKEKnACYKsfZjjkam7a0ZpYTytwmgainpC3HvwBocgKOxqRjehoR9DFKNFYtOwCGYCszobeCbl26N6yyQ6g8X/Wex/rBPsNEV6qAMaJPMynIHQCoSqS9JSMmwef51LflTgCRszU7DvAGiV6mHWfsaVUAAAAASUVORK5CYII=),auto;
    --cursor-pointer: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0,pointer;
  }
`,d=e`
  :root {
    --gap-smaller: 0.4rem;
    --gap-small: 0.8rem;
    --gap-medium: 1.6rem;
    --gap-big: 2.4rem;
    --gap-bigger: 3.2rem;
  }
`,m=e`
  :root {
    --border-image-source-white: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(255, 255, 255)" /></svg>');
    --border-image-source-primary: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(32,156,238)" /></svg>');
    --border-image-source-success: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(146,204,65)" /></svg>');
    --border-image-source-warning: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(247,213,29)" /></svg>');
    --border-image-source-error: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(231,110,85)" /></svg>');
    --border-image-source-disabled: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgba(211,211,211)" /></svg>');
  }
`,t=()=>o.jsxs(o.Fragment,{children:[o.jsx(l,{}),o.jsx(n,{}),o.jsx(c,{}),o.jsx(g,{}),o.jsx(d,{}),o.jsx(m,{})]});try{t.displayName="XSettings",t.__docgenInfo={description:"",displayName:"XSettings",props:{}}}catch{}const v=e`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`,s=()=>o.jsx(v,{});try{s.displayName="XGeneric",s.__docgenInfo={description:"",displayName:"XGeneric",props:{}}}catch{}const b=""+new URL("uni0553-webfont-31f43599.woff",import.meta.url).href,f=""+new URL("uni0563-webfont-1a2d2107.woff",import.meta.url).href,w=""+new URL("uni0553-webfont-a935e4dc.otf",import.meta.url).href,p=""+new URL("uni0563-webfont-04aa5a16.otf",import.meta.url).href,u=e`
  @font-face {
    font-family: 'FontPxRegular';
    src: url(${b}) format('woff'),
         url(${w}) format('otf');
  }

  @font-face {
    font-family: 'FontPxBold';
    src: url(${f}) format('woff'),
         url(${p}) format('otf');
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
`,z=e`
  button, a {
    font: inherit;
    cursor: var(--cursor-pointer);
  }
`,h=()=>o.jsxs(o.Fragment,{children:[o.jsx(u,{}),o.jsx(z,{})]});try{h.displayName="XElements",h.__docgenInfo={description:"",displayName:"XElements",props:{}}}catch{}const M=()=>o.jsxs(o.Fragment,{children:[o.jsx(t,{}),o.jsx(s,{}),o.jsx(h,{})]}),$={parameters:{docs:{theme:i.dark},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},j=[a=>o.jsxs(o.Fragment,{children:[o.jsx(M,{}),o.jsx(a,{})]})];export{j as decorators,$ as default};
//# sourceMappingURL=preview-eee6c7c8.js.map
