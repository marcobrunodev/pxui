import{s as o,j as e}from"./styled-components.browser.esm-18f716b2.js";import{a as s,X as n}from"./XLabel-88a4e1f1.js";import{a as t,X as p}from"./index-35032aba.js";import{X as i}from"./XArrow.styles-a4068ec1.js";import{X as m}from"./XArrow-e66bc2cd.js";const d=o.div`
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
`,c={XFieldset:d},r=({label:a,input:l})=>e.jsxs(c.XFieldset,{children:[e.jsx(p,{...l}),e.jsx(n,{children:"",...a}),e.jsx(m,{})]});try{r.displayName="XFieldset",r.__docgenInfo={description:"",displayName:"XFieldset",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"XLabelTypes"}},input:{defaultValue:null,description:"",name:"input",required:!1,type:{name:"XInputTypes"}}}}}catch{}export{r as X};
//# sourceMappingURL=XFieldset-e7cb485e.js.map
