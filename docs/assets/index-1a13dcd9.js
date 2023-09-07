import{s as n,n as o,j as t}from"./styled-components.browser.esm-18f716b2.js";import{r as d}from"./index-8db94870.js";const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAASCAYAAABIB77kAAAAf0lEQVQ4T82VQRKAMAgD5f+P1nqoB5yYbR2pXEuSgQCNDcbe4ik1WhAqlHQSfS6YBVwFNF9WSAl6G2n+TbADXUXOL8WzTtBVpt5HcVeFo8DsnbIg84YTyl7R4VC4esHZ1szi6j2UvYa3Ue3j//bw7TTS6V1/S50n6p3e3vL/8ABst6gLPmB8kwAAAABJRU5ErkJggg==",c=({disabled:e,simple:r})=>e&&!r&&o`
    border-image-source: var(--simple-border-image-source-disabled);
    color: var(--color-disabled);
  `||e&&r&&o`
    border-color: var(--color-disabled);
    color: var(--color-disabled);
  `,p=({error:e,simple:r})=>e&&!r&&o`
    border-image-source: var(--simple-border-image-source-error);
  `||e&&r&&o`
    border-color: var(--color-error);
  `,m=({warning:e,simple:r})=>e&&!r&&o`
    border-image-source: var(--simple-border-image-source-warning);
  `||e&&r&&o`
    border-color: var(--color-warning);
  `,g=({success:e,simple:r})=>e&&!r&&o`
    border-image-source: var(--simple-border-image-source-success);
  `||e&&r&&o`
    border-color: var(--color-success);
  `,b=({primary:e,simple:r})=>e&&!r&&o`
    border-image-source: var(--simple-border-image-source-primary);
  `||e&&r&&o`
    border-color: var(--color-primary);
  `,f=({simple:e})=>e&&o`
  border-image-slice: fill;
  border-image-width: none;
  border-image-repeat: stretch;
  border-image-source: none;
  border-image-outset: 0;
  border-style: solid;
  border-color: var(--color-white);
`,y=({type:e})=>e==="password"&&o`
  font-family: "Press Start 2P", sans-serif;
  height: 4.1rem;
`,h=n.input`
  background-color: transparent;
  border-image-slice: 2;
  border-image-width: 2;
  border-image-repeat: stretch;
  border-image-source: var(--simple-border-image-source-white);
  border-image-outset: 1;
  border-style: solid;
  border-width: var(--border-width);
  font-family: 'FontPxRegular', sans-serif;
  color: var(--colo-white);
  padding: var(--gap-small);
  transition: 100ms transform ease-in-out;
  box-sizing: border-box;
  width: 100%;

  &:focus {
    outline: none;
  }
  
  ${f};
  ${b};
  ${g};
  ${m};
  ${p};
  ${c};
  ${y};
`,w=n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  &:after {
    display: inline-flex;
    content: url(${u});
    position: absolute;
    right: var(--gap-medium);
    cursor: pointer;
  }
`,s={Password:w,XInput:h},a=e=>e.type==="password"?t.jsx(s.Password,{show:e.show,onClick:e.toggleShow,children:t.jsx(s.XInput,{...e})}):t.jsx(s.XInput,{...e});try{a.displayName="XInput",a.__docgenInfo={description:"",displayName:"XInput",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"HTMLInputTypeAttribute"}},simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},toggleShow:{defaultValue:null,description:"",name:"toggleShow",required:!1,type:{name:"MouseEventHandler"}}}}}catch{}const A=()=>{const[e,r]=d.useState(!1);return{show:e,toggleShow:i=>{console.log(i.target)}}},S=e=>{const{show:r,toggleShow:l}=A();return t.jsx(a,{...e,show:r,toggleShow:l})};try{a.displayName="XInput",a.__docgenInfo={description:"",displayName:"XInput",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"HTMLInputTypeAttribute"}},simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},toggleShow:{defaultValue:null,description:"",name:"toggleShow",required:!1,type:{name:"MouseEventHandler"}}}}}catch{}export{S as X,h as a};
//# sourceMappingURL=index-1a13dcd9.js.map
