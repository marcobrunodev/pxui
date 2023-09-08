import{s as a,n as r}from"./styled-components.browser.esm-18f716b2.js";const e=({full:o})=>o&&r`
  width: calc(100% - (var(--border-width) * 2));

  &:active {
    transform: translate(0.2rem) scale(0.9999);

    &:after {
      box-shadow: inset 0.5rem 0.5rem var(--box-shadow-color);
    }
  }
`,s=({primary:o})=>o&&r`
  --bg-color: var(--color-primary);
  --box-shadow-color: var(--color-primary-shadow);
  --hover-bg-color: var(--color-primary-dark);
  --color-focus: var(--color-primary-light);
`,c=({success:o})=>o&&r`
  --bg-color: var(--color-success);
  --box-shadow-color: var(--color-success-shadow);
  --hover-bg-color: var(--color-success-dark);
  --color-focus: var(--color-success-light);
`,l=({warning:o})=>o&&r`
  --bg-color: var(--color-warning);
  --box-shadow-color: var(--color-warning-shadow);
  --hover-bg-color: var(--color-warning-dark);
  --color: var(--color-black-light);
  --color-focus: var(--color-warning-light);
`,t=({error:o})=>o&&r`
  --bg-color: var(--color-error);
  --box-shadow-color: var(--color-error-shadow);
  --hover-bg-color: var(--color-error-dark);
  --color-focus: var(--color-error-light);
`,n=({disabled:o})=>o&&r`
  --bg-color: var(--color-disabled);
  --box-shadow-color: var(--color-disabled-shadow);
  --hover-bg-color: var(--color-disabled);

  color: var(--color-disabled-font);
  cursor: var(--cursor-default);

  &:hover,  &:active {
    transform: none;
  }

  &:after, &:hover:after {
    box-shadow: inset -0.3rem -0.3rem var(--box-shadow-color);
  }
`,i=a.button`
  --color: var(--color-white);
  --bg-color: var(--color-black);
  --box-shadow-color: var(--color-black-shadow);
  --hover-bg-color: var(--color-black-dark);
  --color-focus: var(--color-white-light);

  border-image-slice: 2;
  border-image-width: 2;
  border-image-repeat: stretch;
  border-image-source: var(--simple-border-image-source-white);
  border-image-outset: 2;
  border-style: solid;
  border-width: var(--border-width);
  position: relative;
  display: inline-block;
  padding: 0.6rem 1rem 1rem;
  margin: 0.4rem;
  text-align: center;
  text-decoration: none;
  font-family: 'FontPxBold', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.15em;
  vertical-align: middle;
  text-transform: uppercase;
  cursor: var(--cursor-pointer);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: var(--color);
  background-color: var(--bg-color);
  transition: 30ms transform ease-in-out, 100ms box-shadow ease-in-out;

  &:after {  
    position: absolute;
    top: -0.3rem;
    right: -0.3rem;
    bottom: -0.3rem;
    left: -0.3rem;
    content: "";
    box-shadow: inset -0.2rem -0.2rem var(--box-shadow-color);
    transition: 30ms box-shadow ease-in-out;
  }

  &:hover {
    text-decoration: none;
    background-color: var(--hover-bg-color);
    transform: translate(-0.2rem);

    &:after {
      box-shadow: inset -0.3rem -0.3rem var(--box-shadow-color);
    }
  }

  &:active {
    transform: translate(0.2rem) scale(0.98);

    &:after {
      box-shadow: inset 0.3rem 0.3rem var(--box-shadow-color);
    }
  }

  &:focus {
    box-shadow: 0 0 0 0.8rem var(--color-focus);
    outline: none;
  }

  ${e};
  ${s};
  ${c};
  ${l};
  ${t};
  ${n};
`,b={XButton:i};export{b as S,i as X};
//# sourceMappingURL=XButton.styles-503ae093.js.map
