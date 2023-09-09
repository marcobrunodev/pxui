import{s,n as E}from"./styled-components.browser.esm-18f716b2.js";const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAPklEQVQoU2P8DwQMSIARCJD5MDYj2QrhJqCZjGEiyQrRNeA0kWSFOH2NLWhAYtSzGhYBlAcPelSSH4W4EgUAwOU4B4ndBmUAAAAASUVORK5CYII=",n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAP0lEQVQoU2NUmPPuPwMSeJAixIjMh7EZyVYIMwHdZAwTSVaIrgGniSQrxOlrbEEDEqOe1bBgojx4CAY4xXENABiUNWFWGKa7AAAAAElFTkSuQmCC",e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAP0lEQVQoU2OcdMbxPwMSyDPZz4jMh7EZyVYIMwHdZAwTSVaIrgGniSQrxOlrbEEDEqOe1bBgojx4CAY4xXENAPQiNUsToHBEAAAAAElFTkSuQmCC",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAP0lEQVQoU2P8flX2PwMS4NR+zIjMh7EZyVYIMwHdZAwTSVaIrgGniSQrxOlrbEEDEqOe1bBgojx4CAY4xXENAPkhNd9vBaiyAAAAAElFTkSuQmCC",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAP0lEQVQoU2N8nhf6nwEJSE5azYjMh7EZyVYIMwHdZAwTSVaIrgGniSQrxOlrbEEDEqOe1bBgojx4CAY4xXENABtUNWE7eyOxAAAAAElFTkSuQmCC",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAP0lEQVQoU2O8fPnyfwYkoKury4jMh7EZyVYIMwHdZAwTSVaIrgGniSQrxOlrbEEDEqOe1bBgojx4CAY4xXENAPE7Nv/B8eXRAAAAAElFTkSuQmCC",o={right:i,primaryRight:n,successRight:e,warningRight:S,errorRight:h,disabledRight:w},O=i,U=({primary:A,success:r,warning:a,error:g,disabled:t})=>A&&o.primaryRight||r&&o.successRight||a&&o.warningRight||g&&o.errorRight||t&&o.disabledRight||O,Q=({down:A})=>A&&E`
  transform: rotate(90deg);
`,C=({left:A})=>A&&E`
  transform: rotate(180deg);
`,c=({up:A})=>A&&E`
  transform: rotate(270deg);
`,d=s.img.attrs(({primary:A,success:r,warning:a,error:g,disabled:t})=>({src:U({primary:A,success:r,warning:a,error:g,disabled:t}),alt:"Arrow icon"}))`
  ${Q};
  ${C};
  ${c};
`,l={XArrow:d};export{l as S,d as X};
//# sourceMappingURL=XArrow.styles-a4068ec1.js.map
