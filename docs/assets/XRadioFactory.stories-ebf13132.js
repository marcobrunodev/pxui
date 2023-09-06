import{s as p,j as c}from"./styled-components.browser.esm-18f716b2.js";import{X as u}from"./XRadio-81809d80.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./XArrow-7d468ad2.js";const y=p.div`
  display: inline-flex;
  gap: var(--gap-medium);
`,k={XRadioFactory:y},o=({data:a})=>c.jsx(k.XRadioFactory,{children:a.map(({name:n,value:r,children:i,checked:l,onClick:m})=>c.jsx(u,{onClick:m,name:n,value:r,checked:l,children:i},`${n}_${r}`))});try{o.displayName="XRadioFactory",o.__docgenInfo={description:"",displayName:"XRadioFactory",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"XRadioTypes[]"}}}}}catch{}const C={title:"03 - Form Components/XRadioFactory",component:o},e={args:{data:[{children:"Yes",value:"yes",name:"answer",checked:!0,onClick:()=>console.log("Clicked")},{children:"No",value:"no",name:"answer",checked:!1,onClick:()=>console.log("Clicked")}]}};var s,t,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const f=["Normal"];export{e as Normal,f as __namedExportsOrder,C as default};
//# sourceMappingURL=XRadioFactory.stories-ebf13132.js.map
