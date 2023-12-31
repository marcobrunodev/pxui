import{s as o,n as i,j as r}from"./styled-components.browser.esm-18f716b2.js";import{X as b}from"./XClose-07c69480.js";import{X as m}from"./XContainer.styles-f2b40569.js";import{X as x}from"./XClose.styles-90715167.js";const s=o(m)`
  color: var(--color-error);
  position: absolute;
  bottom: 0;
  transform: 0;
  opacity: 0;
  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out; 
  min-width: 30.2rem;
  text-align: center;
  font-size: 1.2rem;
`,X=({isOpen:e=!1})=>e&&i`
  opacity: 1;
  z-index: 60;
  transition: opacity 200ms 300ms ease-in-out;

  & > ${c} {
    transform: translateY(0rem);
    opacity: 1;
  }
`,v=({errorMessage:e})=>e&&i`
  & ${s} {
    opacity: 1;
    transform: translateY(calc(100% + var(--gap-small)));
  }
`,A=({simple:e})=>e&&i`
  & ${s} {
    transform: translateY(calc(100% + var(--gap-medium)));
  }
`,q=o.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: -1;
  align-items: center;
  justify-content: center;
  transition: opacity 200ms 300ms ease-in-out, z-index 10ms 600ms linear;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-black-light);
  }

  ${X};
  ${v};
  ${A};
`,c=o(m)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  min-width: 30.2rem;
  min-height: 20rem;
  padding: var(--gap-bigger);
  transform: translateY(-10rem) scale(0.8);
  opacity: 0;
  transition: all 200ms ease-in-out;

  & > ${x} {
    position: absolute;
    top: -1.85rem;
    right: -1.84rem;
    cursor: var(--cursor-pointer);
    height: 3.4rem;
    transition: transform 80ms ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transition: transform 90ms ease-in-out;
      transform: scale(0.98);
    }
  }
`,n={WrapperXAlert:q,Error:s,XAlert:c},V=({errorMessage:e,simple:t})=>e&&r.jsx(n.Error,{error:!0,simple:t,children:e}),w=({children:e,handleClose:t,isOpen:p,errorMessage:l,iconClose:u=!0,simple:a,primary:d,success:f,warning:y,error:h,disabled:g})=>r.jsx(n.WrapperXAlert,{isOpen:p,errorMessage:l,simple:a,children:r.jsxs(n.XAlert,{simple:a,primary:d,success:f,warning:y,error:h,disabled:g,children:[u&&r.jsx(b,{onClick:t}),e,V({errorMessage:l,simple:a})]})});try{XAlert.displayName="XAlert",XAlert.__docgenInfo={description:"",displayName:"XAlert",props:{handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"MouseEventHandler<HTMLImageElement>"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string | boolean"}},iconClose:{defaultValue:{value:"true"},description:"",name:"iconClose",required:!1,type:{name:"boolean"}},simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{w as A};
//# sourceMappingURL=XAlert-9a016eb8.js.map
