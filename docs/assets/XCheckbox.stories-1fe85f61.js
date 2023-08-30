import{s as m,n as r,j as d}from"./styled-components.browser.esm-f3162c9c.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";const P=m.span`
  position: relative;
  display: flex;
  gap: var(--gap-small);
  align-items: center;

  &::before {
    content: '';
    height: 1.2rem;
    width: 1.2rem;
    border: 0.2rem solid var(--color-white);
  }

  &::after {
    content: '';
    height: 0.8rem;
    width: 0.8rem;
    background-color: var(--bullet-color);
    position: absolute;
    left: 0.4rem;
    transform-origin: center;
    transform: scale(0);
    transition: 80ms transform ease-in-out;
  }
`,W=m.input.attrs({type:"checkbox"})`
  display: none;
`,G=({primary:e})=>e&&r`
  --bullet-color: var(--color-primary);
`,J=({success:e})=>e&&r`
  --bullet-color: var(--color-success);
`,K=({warning:e})=>e&&r`
  --bullet-color: var(--color-warning);
`,L=({error:e})=>e&&r`
  --bullet-color: var(--color-error);
`,Q=({disabled:e})=>e&&r`
  --bullet-color: var(--color-disabled);
`,T=m.label`
  --bullet-color: var(--color-white);
  cursor: var(--cursor-pointer);

  & > ${W}:checked + ${P}::after {
    transform: scale(1);
  }

  ${G};
  ${J};
  ${K};
  ${L};
  ${Q};
`,i={XCheckbox:T,CheckboxHtml:W,Content:P},u=({name:e,children:I,value:M,checked:O=!1,onClick:p,primary:R,success:z,warning:A,error:B,disabled:F})=>d.jsxs(i.XCheckbox,{onClick:p,primary:R,success:z,warning:A,error:B,disabled:F,children:[d.jsx(i.CheckboxHtml,{name:e,value:M,checked:O}),d.jsx(i.Content,{onClick:p,children:I})]});try{u.displayName="XCheckbox",u.__docgenInfo={description:"",displayName:"XCheckbox",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!0,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!0,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}}}}}catch{}const ee={title:"02 - components/XCheckbox",component:u},a={args:{value:"dark",children:"Dark",name:"theme",checked:!1,primary:!1,success:!1,warning:!1,error:!1,disabled:!1}},s={args:{value:"dark",children:"Dark",name:"theme",checked:!0,primary:!1,success:!1,warning:!1,error:!1,disabled:!1}},n={args:{value:"dark",children:"Dark",name:"theme",checked:!0,primary:!0,success:!1,warning:!1,error:!1,disabled:!1}},l={args:{value:"dark",children:"Dark",name:"theme",checked:!0,primary:!1,success:!0,warning:!1,error:!1,disabled:!1}},c={args:{value:"dark",children:"Dark",name:"theme",checked:!0,primary:!1,success:!1,warning:!0,error:!1,disabled:!1}},o={args:{value:"dark",children:"Dark",name:"theme",checked:!0,primary:!1,success:!1,warning:!1,error:!0,disabled:!1}},t={args:{value:"dark",children:"Dark",name:"theme",checked:!0,primary:!1,success:!1,warning:!1,error:!1,disabled:!0}};var f,h,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,C,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}`,...(w=(C=n.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var x,D,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var _,q,V;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}`,...(V=(q=c.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var $,X,E;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}`,...(E=(X=o.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};var j,N,H;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 'dark',
    children: 'Dark',
    name: 'theme',
    checked: true,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}`,...(H=(N=t.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};const re=["Normal","Checked","PrimaryChecked","SuccessChecked","WarningChecked","ErrorChecked","DisabledChecked"];export{s as Checked,t as DisabledChecked,o as ErrorChecked,a as Normal,n as PrimaryChecked,l as SuccessChecked,c as WarningChecked,re as __namedExportsOrder,ee as default};
//# sourceMappingURL=XCheckbox.stories-1fe85f61.js.map
