import{s as o,j as e}from"./styled-components.browser.esm-18f716b2.js";import{a,X as p}from"./XLabel-88a4e1f1.js";import{a as s,X as n}from"./index-2166a326.js";import{X as i}from"./XArrow.styles-a4068ec1.js";import{X as m}from"./XArrow-e66bc2cd.js";const d=o.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;

  gap: var(--gap-smaller);

  & > ${s}:focus + ${a} {
    margin-left: var(--gap-medium);
  }

  & > ${s}:focus ~ ${i} {
    opacity: 1;
  }

  & > ${a} {
    display: inline-flex;
    margin-left: var(--gap-smaller);
    transition: margin-left 100ms ease-in-out;
  }

  & > ${i} {
    position: absolute;
    top: 0.76rem;
    opacity: 0;
  }
`,u={XFieldset:d},r=({label:t,input:l})=>e.jsxs(u.XFieldset,{children:[e.jsx(n,{...l}),e.jsx(p,{...t}),e.jsx(m,{})]});try{r.displayName="XFieldset",r.__docgenInfo={description:"",displayName:"XFieldset",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"XLabelTypes"}},input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"XInputTypes"}}}}}catch{}export{r as X};
//# sourceMappingURL=XFieldset-df245c31.js.map
