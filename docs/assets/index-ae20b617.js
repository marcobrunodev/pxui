import{s as o,c as q,n as y,j as r}from"./styled-components.browser.esm-18f716b2.js";import{X as V}from"./XButton.styles-503ae093.js";import{X as w}from"./XArrow.styles-a4068ec1.js";import{X as b}from"./XClose.styles-90715167.js";import{r as f}from"./index-8db94870.js";const X=o.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`,F=q`
  from {
    transform: translateX(0);
  }
  to {
    transform: translate(20%);
  }
`,v=o(b)`
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.98);
  }
`,_=({runningArrowAnimation:e})=>e?y`
  animation: 400ms ${F} ease-in-out 4 running;
`:y`
  animation: none;
`,C=o(w)`
  animation: none;

  ${_}
`,x=o.output`
  padding-bottom: var(--gap-smaller);
`,E=o(V).attrs({as:"label"})``,R=o.div`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  gap: var(--gap-small);
  align-items: center;
  padding-right: var(--gap-small)
`,i={WrapperXFile:R,XFile:E,Arrow:C,ShowFiles:x,Input:X,Close:v},m=({children:e,inputRef:t,files:s,multiple:a,primary:u,success:l,warning:p,error:g,disabled:c,runningArrowAnimation:n,clear:d,onChange:A,arrowOnAnimationend:h})=>r.jsxs(i.WrapperXFile,{children:[r.jsxs(i.XFile,{primary:u,success:l,warning:p,error:g,disabled:c,children:[e,r.jsx(i.Input,{type:"file",ref:t,disabled:c,multiple:a,onChange:A})]}),r.jsx(i.Arrow,{runningArrowAnimation:n,onAnimationEnd:h}),r.jsx(i.ShowFiles,{children:s}),r.jsx(i.Close,{onClick:d})]});try{m.displayName="XFile",m.__docgenInfo={description:"",displayName:"XFile",props:{files:{defaultValue:null,description:"",name:"files",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},runningArrowAnimation:{defaultValue:null,description:"",name:"runningArrowAnimation",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},clear:{defaultValue:null,description:"",name:"clear",required:!1,type:{name:"MouseEventHandler<HTMLImageElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler"}},arrowOnAnimationend:{defaultValue:null,description:"",name:"arrowOnAnimationend",required:!1,type:{name:"AnimationEventHandler"}}}}}catch{}const H=()=>{const e=f.useRef(null),t="No files",[s,a]=f.useState(t),[u,l]=f.useState(!1);return{inputRef:e,filesName:s,runningArrowAnimation:u,clear:()=>{e.current&&(a(t),e.current.value="",e.current.type="button",e.current.type="file")},handleChange:({target:{files:n}})=>{const d=n?n==null?void 0:n.length:0;n&&d===1?(l(!0),a(n[0].name)):n&&d>1&&(l(!0),a(`${d} files`))},handleAnimationend:()=>{console.log("animationend"),l(!1)}}},S=e=>{const{inputRef:t,filesName:s,runningArrowAnimation:a,handleChange:u,clear:l,handleAnimationend:p}=H();return r.jsx(m,{...e,inputRef:t,clear:l,files:s,runningArrowAnimation:a,onChange:u,arrowOnAnimationend:p})};try{m.displayName="XFile",m.__docgenInfo={description:"",displayName:"XFile",props:{files:{defaultValue:null,description:"",name:"files",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},runningArrowAnimation:{defaultValue:null,description:"",name:"runningArrowAnimation",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},clear:{defaultValue:null,description:"",name:"clear",required:!1,type:{name:"MouseEventHandler<HTMLImageElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler"}},arrowOnAnimationend:{defaultValue:null,description:"",name:"arrowOnAnimationend",required:!1,type:{name:"AnimationEventHandler"}}}}}catch{}export{S as X};
//# sourceMappingURL=index-ae20b617.js.map
