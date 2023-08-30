import{c as m,s as t,j as e}from"./styled-components.browser.esm-f3162c9c.js";import{a as o,X as u}from"./XArrow-8761d75b.js";const y=m`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,f=t.span`
  padding-bottom: 0.2em;
`,r=t.p`
  display: inline-flex;
  position: relative;
  align-items: center;
  gap: var(--gap-small);
  color: var(--color-white);

  & > ${o} {
    height: 1.3em;
    opacity: 0;
  }
`,s=t.input.attrs({type:"radio"})`
  display: none;
`,h=t.label`
  display: inline-flex;
  cursor: var(--cursor-pointer);

  & > ${s}:checked + ${r} > ${o} {
    opacity: 1;
    animation: ${y} 1000ms ease-in-out 3;
  }
`,a={XRadio:h,RadioHtml:s,Content:r,Children:f},n=({name:i,value:l,children:d,checked:c=!1,onClick:p})=>e.jsxs(a.XRadio,{onClick:p,children:[e.jsx(a.RadioHtml,{value:l,name:i,checked:c}),e.jsxs(a.Content,{children:[e.jsx(u,{}),e.jsx(a.Children,{children:d})]})]});try{n.displayName="XRadio",n.__docgenInfo={description:"",displayName:"XRadio",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler"}}}}}catch{}export{n as X};
//# sourceMappingURL=XRadio-8afd8ce7.js.map
