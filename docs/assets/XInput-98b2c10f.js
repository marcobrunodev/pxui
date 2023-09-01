import{s,n as o,j as i}from"./styled-components.browser.esm-18f716b2.js";const l=({disabled:r,simple:e})=>r&&!e&&o`
    border-image-source: var(--simple-border-image-source-disabled);
    color: var(--color-disabled);
  `||r&&e&&o`
    border-color: var(--color-disabled);
    color: var(--color-disabled);
  `,n=({error:r,simple:e})=>r&&!e&&o`
    border-image-source: var(--simple-border-image-source-error);
  `||r&&e&&o`
    border-color: var(--color-error);
  `,d=({warning:r,simple:e})=>r&&!e&&o`
    border-image-source: var(--simple-border-image-source-warning);
  `||r&&e&&o`
    border-color: var(--color-warning);
  `,t=({success:r,simple:e})=>r&&!e&&o`
    border-image-source: var(--simple-border-image-source-success);
  `||r&&e&&o`
    border-color: var(--color-success);
  `,c=({primary:r,simple:e})=>r&&!e&&o`
    border-image-source: var(--simple-border-image-source-primary);
  `||r&&e&&o`
    border-color: var(--color-primary);
  `,u=({simple:r})=>r&&o`
  border-image-slice: fill;
  border-image-width: none;
  border-image-repeat: stretch;
  border-image-source: none;
  border-image-outset: 0;
  border-style: solid;
  border-color: var(--color-white);
`,m=s.input`
  background-color: transparent;
  border-image-slice: 2;
  border-image-width: 2;
  border-image-repeat: stretch;
  border-image-source: var(--simple-border-image-source-white);
  border-image-outset: 1;
  border-style: solid;
  border-width: var(--border-width);
  font-family: 'FontPxRegular', sans-serif;
  color: var(--colo-white);
  padding: var(--gap-small);
  transition: 100ms transform ease-in-out;
  box-sizing: border-box;
  width: 100%;

  &:focus {
    outline: none;
    transform: scale(1.02);
  }
  
  ${u};
  ${c};
  ${t};
  ${d};
  ${n};
  ${l};
`,b={XInput:m},a=r=>i.jsx(b.XInput,{...r});try{a.displayName="XInput",a.__docgenInfo={description:"",displayName:"XInput",props:{simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{a as X};
//# sourceMappingURL=XInput-98b2c10f.js.map
