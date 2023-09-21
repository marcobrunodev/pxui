import{s as m,n as a,j as o}from"./styled-components.browser.esm-18f716b2.js";import{a as f,X as y}from"./XEye-c7531249.js";import{a as g,X as b}from"./XEyeClose-7bebab01.js";import{r as p}from"./index-8db94870.js";const w=({disabled:e,simple:r})=>e&&!r&&a`
    border-image-source: var(--simple-border-image-source-disabled);
    color: var(--color-disabled);
  `||e&&r&&a`
    border-color: var(--color-disabled);
    color: var(--color-disabled);
  `,h=({error:e,simple:r})=>e&&!r&&a`
    border-image-source: var(--simple-border-image-source-error);
  `||e&&r&&a`
    border-color: var(--color-error);
  `,v=({warning:e,simple:r})=>e&&!r&&a`
    border-image-source: var(--simple-border-image-source-warning);
  `||e&&r&&a`
    border-color: var(--color-warning);
  `,_=({success:e,simple:r})=>e&&!r&&a`
    border-image-source: var(--simple-border-image-source-success);
  `||e&&r&&a`
    border-color: var(--color-success);
  `,q=({primary:e,simple:r})=>e&&!r&&a`
    border-image-source: var(--simple-border-image-source-primary);
  `||e&&r&&a`
    border-color: var(--color-primary);
  `,V=({simple:e})=>e&&a`
  border-image-slice: fill;
  border-image-width: none;
  border-image-repeat: stretch;
  border-image-source: none;
  border-image-outset: 0;
  border-style: solid;
  border-color: var(--color-white);
`,u=m.input`
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
  }
  
  ${V};
  ${q};
  ${_};
  ${v};
  ${h};
  ${w};
`,X=({isPassword:e=!1})=>e&&a`
  & > ${u} {
    font-family: "Press Start 2P", sans-serif;
    height: 4.1rem;
    padding-right: 4.8rem;
  } 

  & > ${f}, & > ${g} {
    position: absolute;
    right: var(--gap-medium);
    cursor: var(--cursor-pointer);
    transition: transform 100ms ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`,x=({isPassword:e,show:r})=>e&&r&&a`
  & > ${u} {
    font-family: 'FontPxRegular', sans-serif;
  }
`,P=m.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  ${X};
  ${x}
`,i={Password:P,XInput:u},d=({onClick:e,show:r})=>r?o.jsx(b,{onClick:e}):o.jsx(y,{onClick:e});try{d.displayName="XToggleEye",d.__docgenInfo={description:"",displayName:"XToggleEye",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}}}}}catch{}const s=e=>e.isPassword?o.jsxs(i.Password,{show:e.show,type:e.type,isPassword:e.isPassword,children:[o.jsx(i.XInput,{...e}),o.jsx(d,{onClick:e.toggleShow,show:e.show})]}):o.jsx(i.XInput,{...e});try{s.displayName="XInput",s.__docgenInfo={description:"",displayName:"XInput",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"HTMLInputTypeAttribute"}},isPassword:{defaultValue:null,description:"",name:"isPassword",required:!1,type:{name:"boolean"}},simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},toggleShow:{defaultValue:null,description:"",name:"toggleShow",required:!1,type:{name:"MouseEventHandler"}}}}}catch{}const I=e=>{const r=e==="password",[n,t]=p.useState(!1),[l,c]=p.useState(e);return{isPassword:r,show:n,type:l,toggleShow:()=>{l==="password"?(t(!0),c("text")):(t(!1),c("password"))}}},N=e=>{const{show:r,type:n,isPassword:t,toggleShow:l}=I(e.type);return o.jsx(s,{...e,show:r,type:n||"text",isPassword:t,toggleShow:l})};try{s.displayName="XInput",s.__docgenInfo={description:"",displayName:"XInput",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"HTMLInputTypeAttribute"}},isPassword:{defaultValue:null,description:"",name:"isPassword",required:!1,type:{name:"boolean"}},simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},toggleShow:{defaultValue:null,description:"",name:"toggleShow",required:!1,type:{name:"MouseEventHandler"}}}}}catch{}export{N as X,u as a};
//# sourceMappingURL=index-3741cbde.js.map
