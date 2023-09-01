import{c as d,s as i,n as o}from"./styled-components.browser.esm-f3162c9c.js";import{X as m}from"./XText-eb03185d.js";const g=d`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`,u=d`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
`,h=d`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`,f=d`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(-100%);
  }
`,s=i.span`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--size-border);
  height: var(--border-width);
  background-color: var(--color-white);
  transform: translateX(-100%);
  animation: 3s ${g} linear infinite;
`,n=i.span`
  position: absolute;
  top: 0;
  right: 0;
  width: var(--border-width);
  height: var(--size-border);
  background-color: var(--color-white);
  transform: translateY(-100%);
  animation: 3s 1.5s ${u} linear infinite;
`,c=i.span`
  position: absolute;
  bottom: 0;
  right: 0;
  width: var(--size-border);
  height: var(--border-width);
  background-color: var(--color-white);
  transform: translateX(100%);
  animation: 3s 3s ${h} linear infinite;
`,l=i.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: var(--border-width);
  height: var(--size-border);
  background-color: var(--color-white);
  transform: translateY(100%);
  animation: 3s 4.5s ${f} linear infinite;
`,v=({center:r})=>r&&o`
  left: 50%;
  transform: translateX(-50%);
  margin-left: 0;
`,b=i(m).attrs({as:"h2"})`
  position: absolute;
  margin-bottom: var(--gap-small);
  margin-left: var(--gap-smaller);
  background-color: var(--color-black);
  padding:  0 var(--gap-medium);
  font-size: 2rem;

  ${v};
`,$=({full:r})=>r&&o`
  box-sizing: border-box;
  width: 100%;
`,p=({titleAttr:r})=>r&&o`
  & > ${b} {
    top: -0.8em;
  }
`,w=({simple:r})=>r&&o`
  border: var(--border-width) solid var(--color-white);
`,X=({simple:r,titleAttr:a})=>r&&a&&o`
  & > ${b} {
    top: -1em;
  }
`,k=({borderAnimation:r,full:a})=>r&&!a&&o`
  border: 0;
  overflow: hidden;
  padding: var(--gap-medium) var(--gap-big);

  & > ${b} {
    display: none;
  }
`,z=({primary:r,simple:a,borderAnimation:t,full:e})=>{if(r&&a&&(!t||e))return o`
    border-color: var(--color-primary)
  `;if(r)return o`
    border-image-source: var(--border-image-source-primary);

    & > :is(${s}, ${n}, ${c}, ${l}) {
      background-color: var(--color-primary);
    }
  `},y=({success:r,simple:a,borderAnimation:t,full:e})=>{if(r&&a&&(!t||e))return o`
    border-color: var(--color-success);
  `;if(r)return o`
    border-image-source: var(--border-image-source-success);

    & > :is(${s}, ${n}, ${c}, ${l}) {
      background-color: var(--color-success);
    }
  `},Y=({warning:r,simple:a,borderAnimation:t,full:e})=>{if(r&&a&&(!t||e))return o`
    border-color: var(--color-warning);
  `;if(r)return o`
    border-image-source: var(--border-image-source-warning);

    & > :is(${s}, ${n}, ${c}, ${l}) {
      background-color: var(--color-warning);
    }
  `},T=({error:r,simple:a,borderAnimation:t,full:e})=>{if(r&&a&&(!t||e))return o`
    border-color: var(--color-error);
  `;if(r)return o`
    border-image-source: var(--border-image-source-error);

    & > :is(${s}, ${n}, ${c}, ${l}) {
      background-color: var(--color-error);
    }
  `},x=({disabled:r,simple:a,borderAnimation:t,full:e})=>{if(r&&a&&(!t||e))return o`
    border-color: var(--color-disabled);
  `;if(r)return o`
    border-image-source: var(--border-image-source-disabled);

    & > :is(${s}, ${n}, ${c}, ${l}) {
      background-color: var(--color-disabled);
    }
  `},S=i.article`
  --size-border: 100%;

  position: relative;
  display: inline-block;
  border-image-slice: 3;
  border-image-width: 3;
  border-image-repeat: stretch;
  border-image-source: var(--border-image-source-white);
  border-image-outset: 1;
  border-style: solid;
  border-width: var(--border-width);
  padding: var(--gap-medium) var(--gap-big);
  background-color: var(--color-black);

  ${$};
  ${p};
  ${w}
  ${k};
  ${X};
  ${z};
  ${y};
  ${Y};
  ${T};
  ${x};
`,C={XContainer:S,XTitle:b,XTop:s,XRight:n,XBottom:c,XLeft:l};export{C as S,S as X};
//# sourceMappingURL=XContainer.styles-f66e9f64.js.map
