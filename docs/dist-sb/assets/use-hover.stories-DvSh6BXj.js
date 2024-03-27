import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{T as u}from"./index-CE7WiA4r.js";import{r as p}from"./index-BBkUAzwr.js";import{H as h}from"./index-Czzbevtp.js";import{h as i}from"./handleTypeView-iA29ZH8a.js";import"./colors-oHcgSm9O.js";import"./isNativeReflectConstruct-DrUKXTAA.js";import"./index-DUqwVN8i.js";import"./index-D1Mqnq_D.js";import"./iframe-CR6qtAh2.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";import"./Table-Jhx1de67.js";function f(r){var s=p.useState(!1),n=s[0],a=s[1],e=typeof r=="function"?r(n):r,v=function(){e.props&&"onMouseEnter"in e.props&&e.props.onMouseEnter(),a(!0)},l=function(){e.props&&"onMouseLeave"in e.props&&e.props.onMouseLeave(),a(!1)};return[p.cloneElement(e,{onMouseEnter:v,onMouseLeave:l}),n]}const o=()=>{const r=a=>t.jsxs("div",{children:["Hover me! ",a&&"Thanks!"]}),[s,n]=f(r);return t.jsxs("div",{children:[s,t.jsx("div",{children:n?"HOVERED":""})]})},V={title:"Hooks/useHover",component:o,tags:["autodocs"],parameters:{docs:{page:()=>t.jsx(h,{args:{description:"监听鼠标经过特定元素"},apiDescription:"React UI sensor hooks that track if some element is being hovered by a mouse.",paramDs:{ds:[{name:"element",type:i("hoveredView: JSX.Element | ((hovered: boolean) => JSX.Element)"),defaultValue:"",description:"需要监听的元素"}]},returnDs:{type:t.jsx(u,{children:"T"}),description:"该钩子的输入参数：",ds:[{name:"hoverable",type:i("JSX.Element"),description:"监听的元素"},{name:"hovered",type:i("boolean"),description:"是否经过"}]}})}}};o.__docgenInfo={description:"",methods:[],displayName:"Demo"};var m,d,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const element = (hovered: boolean) => <div>Hover me! {hovered && 'Thanks!'}</div>;
  const [hoverable, hovered] = useHover(element);
  return <div>
        {hoverable}
        <div>{hovered ? 'HOVERED' : ''}</div>
      </div>;
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const J=["Demo"];export{o as Demo,J as __namedExportsOrder,V as default};
