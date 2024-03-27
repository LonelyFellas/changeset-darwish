import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{T as l}from"./index-CE7WiA4r.js";import{r as m}from"./index-BBkUAzwr.js";import{u as p}from"./useLatest-BidcEhGI.js";import{H as d}from"./index-Czzbevtp.js";import{h as s}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-D1Mqnq_D.js";import"./iframe-CR6qtAh2.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";const e=()=>{const[o,i]=m.useState(0),c=p(o);function u(){setTimeout(()=>{alert(`Latest count value: ${c.current}`)},3e3)}return t.jsxs("div",{children:[t.jsxs("p",{children:["You clicked ",o," times"]}),t.jsx("button",{onClick:()=>i(o+1),children:"Click me"}),t.jsx("button",{onClick:u,children:"Show alert"})]})},V={title:"Hooks/useLatest",component:e,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(d,{args:{description:"This is mostly useful to get access to the latest value of some props or state inside an asynchronous callback, instead of that value at the time the callback was created from."},apiDescription:"useLatest 返回的永远是最新值",paramDs:{ds:[{name:"value",type:s("T"),defaultValue:"",description:"状态值"}]},returnDs:{type:t.jsx(l,{children:"T"}),description:"该钩子的输入参数：",ds:[{name:"value",type:s("T"),description:"最新的状态值"},{name:"setValue",type:s("React.Dispatch<React.SetStateAction<T>>"),description:"修改状态值的函数"}]}})}}};e.__docgenInfo={description:"",methods:[],displayName:"Demo"};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  const latestCount = useLatest(count);
  function handleAlertClick() {
    setTimeout(() => {
      alert(\`Latest count value: \${latestCount.current}\`);
    }, 3000);
  }
  return <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>;
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const _=["Demo"];export{e as Demo,_ as __namedExportsOrder,V as default};
