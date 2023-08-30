import{s as a,n as r,j as l}from"./styled-components.browser.esm-f3162c9c.js";const s=({full:o})=>o&&r`
  width: calc(100% - (var(--border-width) * 2));

  &:active {
    transform: translate(0.2rem) scale(0.9999);

    &:after {
      box-shadow: inset 0.5rem 0.5rem var(--box-shadow-color);
    }
  }
`,t=({primary:o=!0})=>o&&r`
  --bg-color: var(--color-primary);
  --box-shadow-color: var(--color-primary-shadow);
  --hover-bg-color: var(--color-primary-dark);
  --color-focus: var(--color-primary-light);
`,c=({success:o=!1})=>o&&r`
  --bg-color: var(--color-success);
  --box-shadow-color: var(--color-success-shadow);
  --hover-bg-color: var(--color-success-dark);
  --color-focus: var(--color-success-light);
`,n=({warning:o=!1})=>o&&r`
  --bg-color: var(--color-warning);
  --box-shadow-color: var(--color-warning-shadow);
  --hover-bg-color: var(--color-warning-dark);
  --color: var(--color-black-light);
  --color-focus: var(--color-warning-light);
`,i=({error:o=!1})=>o&&r`
  --bg-color: var(--color-error);
  --box-shadow-color: var(--color-error-shadow);
  --hover-bg-color: var(--color-error-dark);
  --color-focus: var(--color-error-light);
`,d=({disabled:o=!1})=>o&&r`
  --bg-color: var(--color-disabled);
  --box-shadow-color: var(--color-disabled-shadow);
  --hover-bg-color: var(--color-disabled);

  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(121, 123, 126)" /></svg>');
  color: var(--color-disabled-font);
  cursor: var(--cursor-default);

  &:hover,  &:active {
    transform: none;
  }

  &:after, &:hover:after {
    box-shadow: inset -0.6rem -0.6rem var(--box-shadow-color);
  }
`,h=a.button`
  --color: var(--color-white);
  --bg-color: var(--color-black);
  --box-shadow-color: var(--color-black-shadow);
  --hover-bg-color: var(--color-black-dark);
  --color-focus: var(--color-white-light);

  border-image-slice: 2;
  border-image-width: 2;
  border-image-repeat: stretch;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
  border-image-outset: 2;
  position: relative;
  display: inline-block;
  padding: 0.6rem 1rem 1.2rem;
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
  border-style: solid;
  border-width: var(--border-width);
  transition: 30ms transform ease-in-out, 100ms box-shadow ease-in-out;

  &:after {  
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    bottom: -0.4rem;
    left: -0.4rem;
    content: "";
    box-shadow: inset -0.4rem -0.4rem var(--box-shadow-color);
    transition: 30ms box-shadow ease-in-out;
  }

  &:hover {
    text-decoration: none;
    background-color: var(--hover-bg-color);
    transform: translate(-0.2rem);

    &:after {
      box-shadow: inset -0.6rem -0.6rem var(--box-shadow-color);
    }
  }

  &:active {
    transform: translate(0.2rem) scale(0.98);

    &:after {
      box-shadow: inset 0.5rem 0.5rem var(--box-shadow-color);
    }
  }

  &:focus {
    box-shadow: 0 0 0 0.8rem var(--color-focus);
    outline: none;
  }

  ${s};
  ${t};
  ${c};
  ${n};
  ${i};
  ${d};
`,m={XButton:h},e=o=>l.jsx(m.XButton,{...o});try{e.displayName="XButton",e.__docgenInfo={description:"",displayName:"XButton",props:{primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},full:{defaultValue:null,description:"",name:"full",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}}}}}catch{}export{e as X};
//# sourceMappingURL=XButton-823ca1ca.js.map
