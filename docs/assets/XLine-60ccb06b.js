import{s as o,n as r,j as n}from"./styled-components.browser.esm-f3162c9c.js";const l=({disabled:e})=>e&&r`
  background-color: var(--color-disabled);
`,s=({error:e})=>e&&r`
  background-color: var(--color-error);
`,c=({warning:e})=>e&&r`
  background-color: var(--color-warning);
`,i=({success:e})=>e&&r`
  background-color: var(--color-success);
`,t=({primary:e})=>e&&r`
  background-color: var(--color-primary);
`,d=({margin:e})=>e&&r`
  margin: 0 var(--gap-small);
  width: calc(100% - (var(--gap-small) * 2));
`,u=o.hr`
  width: 100%;
  height: 0.3rem;
  margin: 0;
  border: none;
  background-color: var(--color-white);
  box-shadow: 0 0.1rem 0 var(--color-black); 

  ${t};
  ${i};
  ${c};
  ${s};
  ${l};
  ${d};
`,m={XLine:u},a=e=>n.jsx(m.XLine,{...e});try{a.displayName="XLine",a.__docgenInfo={description:"",displayName:"XLine",props:{margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{a as X};
//# sourceMappingURL=XLine-60ccb06b.js.map
