import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{a as l,T as m}from"./index-CE7WiA4r.js";import"./index-BBkUAzwr.js";import{H as h}from"./index-C9ly0t0J.js";import{h as i}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-DRm9wAVr.js";import"./iframe-B9CRT55Y.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";function t(){const[s,a]=l(),e=n=>()=>{a(n).then(()=>{console.log("Copied!",{text:n})}).catch(d=>{console.error("Failed to copy!",d)})};return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Click to copy:"}),o.jsxs("div",{style:{display:"flex"},children:[o.jsx("button",{onClick:e("A"),children:"A"}),o.jsx("button",{onClick:e("B"),children:"B"}),o.jsx("button",{onClick:e("C"),children:"C"})]}),o.jsxs("p",{children:["Copied value: ",s??"Nothing is copied yet!"]})]})}const B={title:"Hooks/useCopyToClipboard",component:t,tags:["autodocs"],parameters:{docs:{page:()=>o.jsx(h,{args:{description:"Copies text to the clipboard."},apiDescription:"Custom hook that copies text to the clipboard with a utility function.",returnDs:{type:o.jsx(m,{color:"purple",children:"[CopiedValue, CopyFn]"}),description:"An array containing the copied text and the function to copy text to the clipboard.",ds:[{name:"copiedText",type:i("string | null"),description:"The copied text."},{name:"copy",type:i("(text: string) => Promise<boolean>"),description:"Function to copy text to the clipboard."}]}})}}};t.__docgenInfo={description:"",methods:[],displayName:"Demo"};var r,p,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`function Demo() {
  // import { useCopyToClipboard } from '@darwish/hooks-core'
  const [copiedText, copy] = useCopyToClipboard();
  const handleCopy = (text: string) => () => {
    copy(text).then(() => {
      console.log('Copied!', {
        text
      });
    }).catch((error: unknown) => {
      console.error('Failed to copy!', error);
    });
  };
  return <>
      <h1>Click to copy:</h1>
      <div style={{
      display: 'flex'
    }}>
        <button onClick={handleCopy('A')}>A</button>
        <button onClick={handleCopy('B')}>B</button>
        <button onClick={handleCopy('C')}>C</button>
      </div>
      <p>Copied value: {copiedText ?? 'Nothing is copied yet!'}</p>
    </>;
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const _=["Demo"];export{t as Demo,_ as __namedExportsOrder,B as default};
