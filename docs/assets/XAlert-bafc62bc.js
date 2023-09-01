import{s as i,n as t,j as r}from"./styled-components.browser.esm-f3162c9c.js";import{a as m,X as x}from"./XClose-60e7bdc0.js";import{X as c}from"./XContainer.styles-f66e9f64.js";const s=i(c)`
  color: var(--color-error);
  position: absolute;
  bottom: 0;
  transform: 0;
  opacity: 0;
  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out; 
  min-width: 30.2rem;
  text-align: center;
  font-size: 1.2rem;
`,v=({isOpen:e=!1})=>e&&t`
  opacity: 1;
  z-index: 60;
  transition: opacity 200ms 300ms ease-in-out;

  & > ${p} {
    transform: translateY(0rem);
    opacity: 1;
  }
`,X=({errorMessage:e})=>e&&t`
  & ${s} {
    opacity: 1;
    transform: translateY(calc(100% + var(--gap-small)));
  }
`,$=({simple:e})=>e&&t`
  & ${s} {
    transform: translateY(calc(100% + var(--gap-medium)));
  }
`,A=i.div`
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

  ${v};
  ${X};
  ${$};
`,q=({simple:e})=>e&&t`
  & > ${m} {
    top: -2.4rem;
  }
`,p=i(c)`
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

  & > ${m} {
    position: absolute;
    top: -2rem;
    right: -2rem;
    cursor: var(--cursor-pointer);
    height: 4.5rem;
    transition: transform 120ms ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transition: transform 90ms ease-in-out;
      transform: scale(0.9);
    }
  }

  ${q};
`,o={WrapperXAlert:A,Error:s,XAlert:p},V=({errorMessage:e,simple:a})=>e&&r.jsx(o.Error,{error:!0,simple:a,children:e}),w=({children:e,handleClose:a,isOpen:u,errorMessage:l,iconClose:d=!0,simple:n,primary:f,success:y,warning:h,error:g,disabled:b})=>r.jsx(o.WrapperXAlert,{isOpen:u,errorMessage:l,simple:n,children:r.jsxs(o.XAlert,{simple:n,primary:f,success:y,warning:h,error:g,disabled:b,children:[d&&r.jsx(x,{onClick:a}),e,V({errorMessage:l,simple:n})]})});try{XAlert.displayName="XAlert",XAlert.__docgenInfo={description:"",displayName:"XAlert",props:{handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"MouseEventHandler<HTMLImageElement>"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string | boolean"}},iconClose:{defaultValue:{value:"true"},description:"",name:"iconClose",required:!1,type:{name:"boolean"}},simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{w as A};
//# sourceMappingURL=XAlert-bafc62bc.js.map
