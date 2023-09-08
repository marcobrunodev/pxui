import{s as t,n as r,j as A}from"./styled-components.browser.esm-18f716b2.js";import{X as y}from"./XContainer.styles-f2b40569.js";import{X as C}from"./XText-efcb0c58.js";import{a as k,X as J}from"./XBadges-36ac1384.js";import{B as S}from"./XContainer-76df1a0b.js";import{X as f}from"./XButton-ec7449b5.js";const w=t.img`
  width: 100%;
`,X=t.div`
  padding: var(--gap-small);
  display: flex;
  justify-content: center;
`,W=t(C)`
  font-size: 1.2rem;
  margin: var(--gap-small);
  padding-bottom: 0.6rem;
`,s=t(C)`
  border-top: 0.2rem solid var(--color-black-dark);
  font-family: FontPxBold, sans-serif;
  padding: var(--gap-small);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,L=({borderAnimation:e})=>e&&r`
  padding: var(--border-width);
`,Y=({primary:e})=>e&&r`
  & > ${s} {
    border-top-color: var(--color-primary-light);
  }
`,h=({success:e})=>e&&r`
  & > ${s} {
    border-top-color: var(--color-success-light);
  }
`,v=({warning:e})=>e&&r`
  & > ${s} {
    border-top-color: var(--color-warning-light);
  }
`,Z=({error:e})=>e&&r`
  & > ${s} {
    border-top-color: var(--color-error-light);
  }
`,b=({disabled:e})=>e&&r`
  & > ${s} {
    border-top-color: var(--color-disabled-light);
  }
`,x=({onClick:e})=>e!==void 0&&r`
  cursor: var(--cursor-pointer);

  &:hover {
    transform: scale(1.04);
  }
`,z=t(y).attrs({as:"article"})`
  position: relative;
  max-width: 32rem;
  padding: 0;
  transition: 200ms transform linear;
  
  ${L};

  & > ${k} {
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translate(-50%, -56%);
    will-change: transform;
  }

  ${Y};
  ${h};
  ${v};
  ${Z};
  ${b};
  ${x};
`,a={XCard:z,Title:s,Description:W,WrapperButton:X,Image:w},i=({titleContent:e,description:d,image:B,alt:E,onClick:c,borderAnimation:n,primary:p,success:Q,warning:m,error:I,disabled:u,buttonProps:l,badges:o})=>A.jsxs(a.XCard,{simple:!0,borderAnimation:n,primary:p,success:Q,warning:m,error:I,disabled:u,onClick:c,children:[o&&A.jsx(J,{...o}),A.jsx(a.Image,{src:B,alt:E}),A.jsx(a.Title,{children:e}),A.jsx(a.Description,{children:d}),l&&A.jsx(a.WrapperButton,{children:A.jsx(f,{...l})}),n&&A.jsx(S,{})]});try{i.displayName="XCard",i.__docgenInfo={description:"",displayName:"XCard",props:{titleContent:{defaultValue:null,description:"",name:"titleContent",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},borderAnimation:{defaultValue:null,description:"",name:"borderAnimation",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:"XButtonTypes"}},badges:{defaultValue:null,description:"",name:"badges",required:!1,type:{name:"XBadgesTypes"}}}}}catch{}const V="data:image/png;base64,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",g=({children:e})=>A.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",boxSizing:"border-box"},children:e});try{g.displayName="CenterXAndY",g.__docgenInfo={description:"",displayName:"CenterXAndY",props:{}}}catch{}export{g as C,i as X,V as i};
//# sourceMappingURL=index-a8ec036c.js.map
