import{s as o,j as e}from"./styled-components.browser.esm-18f716b2.js";import{a as s,X as n}from"./XLabel-88a4e1f1.js";import{a as t,X as p}from"./index-318bfd82.js";import{a as i,X as m}from"./XArrow-7d468ad2.js";const d=o.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;

  gap: var(--gap-smaller);

  & > ${t}:focus + ${s} {
    margin-left: var(--gap-medium);
  }

  & > ${t}:focus ~ ${i} {
    opacity: 1;
  }

  & > ${s} {
    display: inline-flex;
    margin-left: var(--gap-smaller);
    transition: margin-left 100ms ease-in-out;
  }

  & > ${i} {
    position: absolute;
    top: 0.76rem;
    opacity: 0;
  }
`,c={XFieldset:d},l=({label:a,input:r})=>e.jsxs(c.XFieldset,{children:[e.jsx(p,{...r}),e.jsx(n,{children:"",...a}),e.jsx(m,{})]});try{l.displayName="XFieldset",l.__docgenInfo={description:"",displayName:"XFieldset",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"XLabelTypes"}},input:{defaultValue:null,description:"",name:"input",required:!1,type:{name:"XInputTypes"}}}}}catch{}export{l as X};
//# sourceMappingURL=XFieldset-0b0920f2.js.map
