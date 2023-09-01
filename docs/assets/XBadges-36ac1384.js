import{s as l,n as o,j as e}from"./styled-components.browser.esm-18f716b2.js";const g=({primary:r})=>r&&o`
  --border-bg-color: var(--color-primary);
  color: var(--color-white);
`,v=({success:r})=>r&&o`
  --border-bg-color: var(--color-success);
  color: var(--color-white);
`,m=({warning:r})=>r&&o`
  --border-bg-color: var(--color-warning);
  color: var(--color-black);
`,p=({error:r})=>r&&o`
  --border-bg-color: var(--color-error);
  color: var(--color-white);
`,h=({disabled:r})=>r&&o`
  --border-bg-color: var(--color-disabled);
  color: var(--color-white);
`,w=l.dt`
  box-sizing: border-box;
  display: inline-flex; 
  justify-content: center;
  align-items: center;
  font-weight: bold;
  min-width: 6rem;
  color: var(--border-bg-color);
  text-align: center;
  padding: 0 var(--gap-small) 0.3rem;
  background-color: var(--color-black-dark);
  box-shadow: 0 var(--border-width) var(--color-black-dark),0 calc(var(--border-width) * -1) var(--color-black-dark),0 0 var(--color-black-dark),calc(var(--border-width) * -1) 0 var(--color-black-dark);
`,f=({label:r})=>r&&o`
  box-shadow: 0 var(--border-width) var(--border-bg-color),0 calc(var(--border-width) * -1) var(--border-bg-color),var(--border-width) 0 var(--border-bg-color),0 0 var(--border-bg-color);
  min-width: auto;
`,y=l.dd`
  --border-bg-color: var(--color-white);

  box-sizing: border-box;
  display: inline-flex; 
  justify-content: center;
  align-items: center;
  font-weight: bold;
  min-width: 6rem;
  color: var(--color-black);
  text-align: center;
  padding: 0 var(--gap-small) 0.3rem;
  background-color: var(--border-bg-color);
  box-shadow: 0 var(--border-width) var(--border-bg-color),0 calc(var(--border-width) * -1) var(--border-bg-color), var(--border-width) 0 var(--border-bg-color), calc(var(--border-width) * -1) 0 var(--border-bg-color);

  ${g};
  ${v};
  ${m};
  ${p};
  ${h};
  ${f};
`,x=l.dl``,a={XBadges:x,Label:w,Content:y},c=({label:r,content:d,primary:n,success:t,warning:i,error:s,disabled:b,onClick:u})=>e.jsxs(a.XBadges,{onClick:u,children:[r&&e.jsx(a.Label,{children:r}),e.jsx(a.Content,{primary:n,success:t,warning:i,error:s,disabled:b,label:r,children:d})]});try{c.displayName="XBadges",c.__docgenInfo={description:"",displayName:"XBadges",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}}}}}catch{}export{c as X,x as a};
//# sourceMappingURL=XBadges-36ac1384.js.map
