import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{T as s}from"./index-CE7WiA4r.js";import{R as u}from"./index-BBkUAzwr.js";import{H as a}from"./index-Czzbevtp.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-D1Mqnq_D.js";import"./iframe-CR6qtAh2.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";function m(c){u.useEffect(c,[])}const e=()=>(m(()=>(console.log("Running effect once on mount"),()=>{console.log("Running clean-up of effect on unmount")})),o.jsx("h1",{children:"请查看控制台的日志信息:"})),k={title:"Hooks/useEffectOnce",component:e,tags:["autodocs"],parameters:{docs:{page:()=>o.jsx(a,{args:{description:"React lifecycle hook that runs an effect only once."},apiDescription:"apply an effect only once when the component mounts.",paramDs:{ds:[{name:"effect",type:o.jsx(s,{color:"red",children:"React.EffectCallback"}),defaultValue:"",description:"The effect to run only once."}]},returnDs:{ds:[]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  useEffectOnce(() => {
    console.log('Running effect once on mount');
    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });
  return <h1>请查看控制台的日志信息:</h1>;
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const O=["Demo"];export{e as Demo,O as __namedExportsOrder,k as default};
