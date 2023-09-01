import{s as t,n as o,j as e}from"./styled-components.browser.esm-18f716b2.js";import{X as m}from"./XText-13e73c40.js";import{X as h}from"./XContainer.styles-01c46e77.js";const u=t(m)``,p=({full:r})=>r&&o`
  width: 100%;
`,v=({primary:r})=>r&&o`
  --border-color: var(--color-primary);
`,f=({success:r})=>r&&o`
  --border-color: var(--color-success);
`,w=({warning:r})=>r&&o`
  --border-color: var(--color-warning);
`,y=({error:r})=>r&&o`
  --border-color: var(--color-error);
`,g=({disabled:r})=>r&&o`
  --border-color: var(--color-disabled);
`,X=t(h)`
  --border-color: var(--color-white); 

  box-sizing: border-box;
  position: relative;
  margin-bottom: 1.8rem;
  line-height: 1.8em;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 2rem;
    background-color: var(--color-black);
    border-color: var(--border-color);
  }

  &::before {
    bottom: -1rem;
    width: 1.8rem;
    height: 1rem;
    border-right: var(--border-width) solid var(--border-color);
    border-left: var(--border-width) solid var(--border-color);
  }

  &::after {
    bottom: -1.3rem;
    width: 1.8rem;
    height: var(--border-width);
    color: var(--border-color);
    box-shadow: calc(var(--border-width) * -1) 0,var(--border-width) 0,calc(var(--border-width) * -1) var(--border-width) var(--color-black),0 var(--border-width),calc(var(--border-width) * -2) var(--border-width),calc(var(--border-width) * -1) calc(var(--border-width) * 2),calc(var(--border-width) * -2) calc(var(--border-width) * 2);
  }

  ${p};
  ${v};
  ${f};
  ${w};
  ${y};
  ${g};
`,a={XBallon:X,XContent:u},l=({children:r,full:d,primary:n,success:i,warning:c,error:s,disabled:b})=>e.jsx(a.XBallon,{full:d,primary:n,success:i,warning:c,error:s,disabled:b,children:e.jsx(a.XContent,{children:r})});try{l.displayName="XBallon",l.__docgenInfo={description:"",displayName:"XBallon",props:{full:{defaultValue:null,description:"",name:"full",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{l as X};
//# sourceMappingURL=XBallon-9c55aad2.js.map
