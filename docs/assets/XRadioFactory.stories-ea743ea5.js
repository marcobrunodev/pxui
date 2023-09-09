import{s as p,j as c}from"./styled-components.browser.esm-18f716b2.js";import{X as u}from"./XRadio-c30bd050.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./XArrow-e66bc2cd.js";import"./XArrow.styles-a4068ec1.js";const y=p.div`
  display: inline-flex;
  gap: var(--gap-medium);
`,k={XRadioFactory:y},o=({data:a})=>c.jsx(k.XRadioFactory,{children:a.map(({name:r,value:n,children:d,checked:l,onClick:m})=>c.jsx(u,{onClick:m,name:r,value:n,checked:l,children:d},`${r}_${n}`))});try{o.displayName="XRadioFactory",o.__docgenInfo={description:"",displayName:"XRadioFactory",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"XRadioTypes[]"}}}}}catch{}const f={title:"03 - Form Components/XRadioFactory",component:o},e={args:{data:[{children:"Yes",value:"yes",name:"answer",checked:!0,onClick:()=>console.log("Clicked")},{children:"No",value:"no",name:"answer",checked:!1,onClick:()=>console.log("Clicked")}]}};var s,t,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    data: [{
      children: 'Yes',
      value: 'yes',
      name: 'answer',
      checked: true,
      onClick: () => console.log('Clicked')
    }, {
      children: 'No',
      value: 'no',
      name: 'answer',
      checked: false,
      onClick: () => console.log('Clicked')
    }]
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const F=["Normal"];export{e as Normal,F as __namedExportsOrder,f as default};
//# sourceMappingURL=XRadioFactory.stories-ea743ea5.js.map
