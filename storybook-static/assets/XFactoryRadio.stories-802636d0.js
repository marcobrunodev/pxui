import{s as p,j as c}from"./styled-components.browser.esm-f3162c9c.js";import{X as u}from"./XRadio-8afd8ce7.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./XArrow-8761d75b.js";const y=p.div`
  display: inline-flex;
  gap: var(--gap-medium);
`,k={XFactoryRadio:y},a=({data:o})=>c.jsx(k.XFactoryRadio,{children:o.map(({name:r,value:n,children:d,checked:l,onClick:m})=>c.jsx(u,{onClick:m,name:r,value:n,checked:l,children:d},`${r}_${n}`))});try{a.displayName="XFactoryRadio",a.__docgenInfo={description:"",displayName:"XFactoryRadio",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"XRadioTypes[]"}}}}}catch{}const f={title:"03 - Factories/XFactoryRadio",component:a},e={args:{data:[{children:"Yes",value:"yes",name:"answer",checked:!0,onClick:()=>console.log("Clicked")},{children:"No",value:"no",name:"answer",checked:!1,onClick:()=>console.log("Clicked")}]}};var s,t,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const C=["Normal"];export{e as Normal,C as __namedExportsOrder,f as default};
//# sourceMappingURL=XFactoryRadio.stories-802636d0.js.map
