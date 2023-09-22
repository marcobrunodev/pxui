import{s as f,c as L,n as y,j as u}from"./styled-components.browser.esm-18f716b2.js";import{X as F}from"./XButton.styles-503ae093.js";import{X as H}from"./XArrow.styles-a4068ec1.js";import{X as _}from"./XClose.styles-90715167.js";import{X as O}from"./XContainer.styles-f2b40569.js";import{r as a}from"./index-8db94870.js";const C=f.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`,X=L`
  from {
    transform: translateX(0);
  }
  to {
    transform: translate(20%);
  }
`,j=f(_)`
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.98);
  }
`,x=({runningArrowAnimation:e})=>e?y`
  animation: 400ms ${X} ease-in-out 4 running;
`:y`
  animation: none;
`,M=f(H)`
  animation: none;

  ${x}
`,T=L`
  from {
    transform: translateX(0.6rem);
  }
  
  to {
    transform: translateX(var(--move)); 
  }
`,I=f.span`
  ${({moveAnimation:e})=>e>0&&y`
    --move: calc((${e}px + 0.5rem) * -1);
    --play-state: paused;
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    animation: calc(${e} * 25ms) ${T} infinite alternate linear var(--play-state);

    &:hover {
      --play-state: running;
    }
  `}
`,$=f.output`
  position: relative;
  padding-bottom: var(--gap-smaller);
  overflow: hidden;
  height: 2.5rem;
`,S=f(F).attrs({as:"label"})``,N=f.div`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  gap: var(--gap-small);
  align-items: center;
  padding-right: var(--gap-small);
`,k=f.div`
  display: inline-flex;
  flex-direction: column;
  gap: var(--gap-small);
`,v={WrapperXFile:k,WrapperInput:N,XFile:S,Arrow:M,ShowFiles:$,Carousel:I,Input:C,Close:j},W=({isDragLeave:e})=>e&&y`
  transform: scale(1);
`,z=({isDragEnter:e})=>e&&y`
  transform: scale(1.04);
`,B=L`
  from {
    transform: scale(1.02);
  }

  to {
    transform: scale(1.04);
  }
`,G=({isDragOver:e})=>e&&y`
  animation: ${B} 300ms ease-in-out infinite;
`,J=f(O)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  transition: transform 100ms ease-in-out;

  ${W};
  ${z};
  ${G};
`,K={DragAndDrop:J},b=e=>u.jsx(K.DragAndDrop,{...e});try{b.displayName="DragAndDrop",b.__docgenInfo={description:"",displayName:"DragAndDrop",props:{overFeedbackContent:{defaultValue:null,description:"",name:"overFeedbackContent",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},isDragEnter:{defaultValue:null,description:"",name:"isDragEnter",required:!1,type:{name:"boolean"}},isDragOver:{defaultValue:null,description:"",name:"isDragOver",required:!1,type:{name:"boolean"}},isDragLeave:{defaultValue:null,description:"",name:"isDragLeave",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}}}}}catch{}const P=({children:e,overFeedbackContent:r,inputRef:l,multiple:d})=>{const[p,i]=a.useState(e),[o,t]=a.useState(!1),[m,c]=a.useState(!1),[h,g]=a.useState(!1);return{feedbackContent:p,isDragEnter:o,isDragLeave:m,isDragOver:h,handleDragEnter:s=>{s.preventDefault(),t(!0)},handleDragOver:s=>{s.preventDefault(),i(r),g(!0)},handleDragLeave:s=>{s.preventDefault(),i(e),t(!1),g(!1),c(!0)},handleDrop:s=>{var n;s.preventDefault(),i(e),t(!1),g(!1),c(!0);const R=(n=s.dataTransfer)==null?void 0:n.files;if(!d&&R.length>1)return!1;if(l&&l.current){l.current.files=R;const D=new Event("change",{bubbles:!0,cancelable:!1});l.current.dispatchEvent(D)}}}},Q=e=>{const{feedbackContent:r,isDragEnter:l,isDragOver:d,isDragLeave:p,handleDragEnter:i,handleDragOver:o,handleDragLeave:t,handleDrop:m}=P({children:e.children,overFeedbackContent:e.overFeedbackContent,inputRef:e.inputRef,multiple:e.multiple});return u.jsx(b,{...e,children:r,isDragEnter:l,isDragOver:d,isDragLeave:p,onDragEnter:i,onDragOver:o,onDragLeave:t,onDrop:m})};try{b.displayName="DragAndDrop",b.__docgenInfo={description:"",displayName:"DragAndDrop",props:{overFeedbackContent:{defaultValue:null,description:"",name:"overFeedbackContent",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},isDragEnter:{defaultValue:null,description:"",name:"isDragEnter",required:!1,type:{name:"boolean"}},isDragOver:{defaultValue:null,description:"",name:"isDragOver",required:!1,type:{name:"boolean"}},isDragLeave:{defaultValue:null,description:"",name:"isDragLeave",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}}}}}catch{}const q=({children:e,inputRef:r,showFilesRef:l,carouselRef:d,moveAnimation:p,files:i,multiple:o,dragAndDrop:t,primary:m,success:c,warning:h,error:g,disabled:E,runningArrowAnimation:V,clear:A,onChange:w,arrowOnAnimationend:s})=>u.jsxs(v.WrapperXFile,{children:[u.jsxs(v.WrapperInput,{children:[u.jsxs(v.XFile,{primary:m,success:c,warning:h,error:g,disabled:E,children:[e,u.jsx(v.Input,{type:"file",ref:r,disabled:E,multiple:o,onChange:w})]}),u.jsx(v.Arrow,{runningArrowAnimation:V,onAnimationEnd:s}),u.jsx(v.ShowFiles,{ref:l,children:u.jsx(v.Carousel,{ref:d,moveAnimation:p,children:i})}),u.jsx(v.Close,{onClick:A})]}),(t==null?void 0:t.children)&&u.jsx(Q,{...t,inputRef:r,multiple:o})]});try{q.displayName="XFile",q.__docgenInfo={description:"",displayName:"XFile",props:{inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},showFilesRef:{defaultValue:null,description:"",name:"showFilesRef",required:!0,type:{name:"RefObject<HTMLOutputElement>"}},carouselRef:{defaultValue:null,description:"",name:"carouselRef",required:!0,type:{name:"RefObject<HTMLSpanElement>"}},moveAnimation:{defaultValue:null,description:"",name:"moveAnimation",required:!0,type:{name:"number"}},files:{defaultValue:null,description:"",name:"files",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},runningArrowAnimation:{defaultValue:null,description:"",name:"runningArrowAnimation",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},dragAndDrop:{defaultValue:null,description:"",name:"dragAndDrop",required:!1,type:{name:"DragAndDropTypes"}},clear:{defaultValue:null,description:"",name:"clear",required:!1,type:{name:"MouseEventHandler<HTMLImageElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler"}},arrowOnAnimationend:{defaultValue:null,description:"",name:"arrowOnAnimationend",required:!1,type:{name:"AnimationEventHandler"}}}}}catch{}const U=({files:e})=>{const r=a.useRef(null),l=a.useRef(null),d=a.useRef(null),p=e||"",[i,o]=a.useState(p),[t,m]=a.useState(!1),[c,h]=a.useState(0),[g,E]=a.useState(0),[V,A]=a.useState(0),w=({target:{files:n}})=>{const D=n?n==null?void 0:n.length:0;n&&D===1?(m(!0),o(n[0].name)):n&&D>1&&(m(!0),o(`${D} files`))},s=()=>m(!1),R=()=>{r.current&&(o(p),r.current.value="",r.current.type="button",r.current.type="file")};return a.useEffect(()=>{const n=l.current;if(n){const D=n.offsetWidth;n.style.width=D+"px",h(D)}},[]),a.useEffect(()=>{var n;d.current&&E((n=d.current)==null?void 0:n.offsetWidth)},[i]),a.useEffect(()=>{A(g-c)},[c,g]),{inputRef:r,showFilesRef:l,carouselRef:d,filesName:i,runningArrowAnimation:t,moveAnimation:V,clear:R,handleChange:w,handleAnimationend:s}},te=e=>{const{inputRef:r,showFilesRef:l,carouselRef:d,filesName:p,runningArrowAnimation:i,moveAnimation:o,handleChange:t,clear:m,handleAnimationend:c}=U({files:e.files});return u.jsx(q,{...e,inputRef:r,showFilesRef:l,carouselRef:d,clear:m,files:p,runningArrowAnimation:i,onChange:t,arrowOnAnimationend:c,moveAnimation:o})};try{q.displayName="XFile",q.__docgenInfo={description:"",displayName:"XFile",props:{inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},showFilesRef:{defaultValue:null,description:"",name:"showFilesRef",required:!0,type:{name:"RefObject<HTMLOutputElement>"}},carouselRef:{defaultValue:null,description:"",name:"carouselRef",required:!0,type:{name:"RefObject<HTMLSpanElement>"}},moveAnimation:{defaultValue:null,description:"",name:"moveAnimation",required:!0,type:{name:"number"}},files:{defaultValue:null,description:"",name:"files",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},runningArrowAnimation:{defaultValue:null,description:"",name:"runningArrowAnimation",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},dragAndDrop:{defaultValue:null,description:"",name:"dragAndDrop",required:!1,type:{name:"DragAndDropTypes"}},clear:{defaultValue:null,description:"",name:"clear",required:!1,type:{name:"MouseEventHandler<HTMLImageElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler"}},arrowOnAnimationend:{defaultValue:null,description:"",name:"arrowOnAnimationend",required:!1,type:{name:"AnimationEventHandler"}}}}}catch{}export{te as X};
//# sourceMappingURL=index-1504dc5c.js.map
