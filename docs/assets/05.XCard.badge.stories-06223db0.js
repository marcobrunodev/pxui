import{j as l}from"./styled-components.browser.esm-18f716b2.js";import{X as T,C as S,i as e}from"./index-320d7db6.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./XContainer.styles-f2b40569.js";import"./XText-efcb0c58.js";import"./XText.styles-fae9fb9e.js";import"./XBadges-1331931c.js";import"./XContainer-76df1a0b.js";import"./XButton-9a314e50.js";const q={title:"02 - components/XCard/05 - With Badges",component:T,decorators:[N=>l.jsx(S,{children:l.jsx(N,{})})]},r={args:{titleContent:"Title here",image:e,alt:"Alt to image",description:"Description here",badges:{content:"New",primary:!1,success:!1,warning:!1,error:!1,disabled:!1},onClick:void 0,borderAnimation:!1,primary:!1,success:!1,warning:!1,error:!1,disabled:!1}},s={args:{titleContent:"Title here",image:e,alt:"Alt to image",description:"Description here",badges:{content:"New",primary:!0,success:!1,warning:!1,error:!1,disabled:!1},onClick:void 0,borderAnimation:!1,primary:!0,success:!1,warning:!1,error:!1,disabled:!1}},a={args:{titleContent:"Title here",image:e,alt:"Alt to image",description:"Description here",badges:{content:"New",primary:!1,success:!0,warning:!1,error:!1,disabled:!1},onClick:void 0,borderAnimation:!1,primary:!1,success:!0,warning:!1,error:!1,disabled:!1}},n={args:{titleContent:"Title here",image:e,alt:"Alt to image",description:"Description here",badges:{content:"New",primary:!1,success:!1,warning:!0,error:!1,disabled:!1},onClick:void 0,borderAnimation:!1,primary:!1,success:!1,warning:!0,error:!1,disabled:!1}},i={args:{titleContent:"Title here",image:e,alt:"Alt to image",description:"Description here",badges:{content:"New",primary:!1,success:!1,warning:!1,error:!0,disabled:!1},onClick:void 0,borderAnimation:!1,primary:!1,success:!1,warning:!1,error:!0,disabled:!1}},t={args:{titleContent:"Title here",image:e,alt:"Alt to image",description:"Description here",badges:{content:"New",primary:!1,success:!1,warning:!1,error:!1,disabled:!0},onClick:void 0,borderAnimation:!1,primary:!1,success:!1,warning:!1,error:!1,disabled:!0}};var o,c,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: false
    },
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var f,m,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: true,
      success: false,
      warning: false,
      error: false,
      disabled: false
    },
    onClick: undefined,
    borderAnimation: false,
    primary: true,
    success: false,
    warning: false,
    error: false,
    disabled: false
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: false,
      success: true,
      warning: false,
      error: false,
      disabled: false
    },
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: true,
    warning: false,
    error: false,
    disabled: false
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,w,C;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: false,
      success: false,
      warning: true,
      error: false,
      disabled: false
    },
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: true,
    error: false,
    disabled: false
  }
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var y,A,W;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: false,
      success: false,
      warning: false,
      error: true,
      disabled: false
    },
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: true,
    disabled: false
  }
}`,...(W=(A=i.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var D,B,k;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    titleContent: 'Title here',
    image,
    alt: 'Alt to image',
    description: 'Description here',
    badges: {
      content: 'New',
      primary: false,
      success: false,
      warning: false,
      error: false,
      disabled: true
    },
    onClick: undefined,
    borderAnimation: false,
    primary: false,
    success: false,
    warning: false,
    error: false,
    disabled: true
  }
}`,...(k=(B=t.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const z=["WithBadge","PrimaryWithBadge","SuccessWithBadge","WarningWithBadge","ErrorWithBadge","DisabledWithBadge"];export{t as DisabledWithBadge,i as ErrorWithBadge,s as PrimaryWithBadge,a as SuccessWithBadge,n as WarningWithBadge,r as WithBadge,z as __namedExportsOrder,q as default};
//# sourceMappingURL=05.XCard.badge.stories-06223db0.js.map
