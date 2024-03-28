import{j as b}from"./jsx-runtime-DRTy3Uxn.js";import{e as at,f as ct,h as dt}from"./index-DRm9wAVr.js";import{r as i,g as ut}from"./index-BBkUAzwr.js";import{g as De,m as pt,r as ft,u as V,a as me,c as G,A as ye,f as gt,h as mt,j as Me,k as oe,_ as yt}from"./colors-oHcgSm9O.js";import{T as fe}from"./index-CE7WiA4r.js";import{_ as be}from"./isNativeReflectConstruct-DrUKXTAA.js";import{K as ie,o as Ne,a as bt,b as he,C as ht,t as _e,u as vt,c as ze,d as xt,i as Te,R as Et,T as St}from"./Table-Jhx1de67.js";const Ct=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:r,colorSplit:n,lineWidth:o,textPaddingInline:c,orientationMargin:p,verticalMarginInline:s}=e;return{[t]:Object.assign(Object.assign({},ft(e)),{borderBlockStart:`${V(o)} solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:s,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${V(o)} solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${V(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${V(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${V(o)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${p} * 100%)`},"&::after":{width:`calc(100% - ${p} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${p} * 100%)`},"&::after":{width:`calc(${p} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:c},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${V(o)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:r}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:r}}})}},Ot=e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),wt=De("Divider",e=>{const t=pt(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[Ct(t)]},Ot,{unitless:{orientationMargin:!0}});var $t=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const jt=e=>{const{getPrefixCls:t,direction:r,divider:n}=i.useContext(me),{prefixCls:o,type:c="horizontal",orientation:p="center",orientationMargin:s,className:d,rootClassName:g,children:a,dashed:f,plain:v,style:E}=e,S=$t(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),y=t("divider",o),[T,C,I]=wt(y),x=p.length>0?`-${p}`:p,P=!!a,R=p==="left"&&s!=null,O=p==="right"&&s!=null,D=G(y,n==null?void 0:n.className,C,I,`${y}-${c}`,{[`${y}-with-text`]:P,[`${y}-with-text${x}`]:P,[`${y}-dashed`]:!!f,[`${y}-plain`]:!!v,[`${y}-rtl`]:r==="rtl",[`${y}-no-default-orientation-margin-left`]:R,[`${y}-no-default-orientation-margin-right`]:O},d,g),h=i.useMemo(()=>typeof s=="number"?s:/^\d+$/.test(s)?Number(s):s,[s]),m=Object.assign(Object.assign({},R&&{marginLeft:h}),O&&{marginRight:h});return T(i.createElement("div",Object.assign({className:D,style:Object.assign(Object.assign({},n==null?void 0:n.style),E)},S,{role:"separator"}),a&&c!=="vertical"&&i.createElement("span",{className:`${y}-inner-text`,style:m},a)))},Tt=jt;var It=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Rt={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},kt=i.forwardRef((e,t)=>{const r=g=>{const{keyCode:a}=g;a===ie.ENTER&&g.preventDefault()},n=g=>{const{keyCode:a}=g,{onClick:f}=e;a===ie.ENTER&&f&&f()},{style:o,noStyle:c,disabled:p}=e,s=It(e,["style","noStyle","disabled"]);let d={};return c||(d=Object.assign({},Rt)),p&&(d.pointerEvents="none"),d=Object.assign(Object.assign({},d),o),i.createElement("div",Object.assign({role:"button",tabIndex:0,ref:t},s,{onKeyDown:r,onKeyUp:n,style:d}))}),He=kt;var Pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const Dt=Pt;var Mt=function(t,r){return i.createElement(ye,be({},t,{ref:r,icon:Dt}))},Nt=i.forwardRef(Mt);const _t=Nt;var zt=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(o){e.addRange(o)}),t&&t.focus()}},Ht=zt,Ie={"text/plain":"Text","text/html":"Url",default:"Text"},Lt="Copy to clipboard: #{key}, Enter";function At(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Bt(e,t){var r,n,o,c,p,s,d=!1;t||(t={}),r=t.debug||!1;try{o=Ht(),c=document.createRange(),p=document.getSelection(),s=document.createElement("span"),s.textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),typeof a.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=Ie[t.format]||Ie.default;window.clipboardData.setData(f,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))}),document.body.appendChild(s),c.selectNodeContents(s),p.addRange(c);var g=document.execCommand("copy");if(!g)throw new Error("copy command was unsuccessful");d=!0}catch(a){r&&console.error("unable to copy using execCommand: ",a),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(f){r&&console.error("unable to copy using clipboardData: ",f),r&&console.error("falling back to prompt"),n=At("message"in t?t.message:Lt),window.prompt(n,e)}}finally{p&&(typeof p.removeRange=="function"?p.removeRange(c):p.removeAllRanges()),s&&document.body.removeChild(s),o()}return d}var Wt=Bt;const Ut=ut(Wt);var Vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const qt=Vt;var Kt=function(t,r){return i.createElement(ye,be({},t,{ref:r,icon:qt}))},Ft=i.forwardRef(Kt);const Gt=Ft,Xt=(e,t,r,n)=>{const{titleMarginBottom:o,fontWeightStrong:c}=n;return{marginBottom:o,color:r,fontWeight:c,fontSize:e,lineHeight:t}},Jt=e=>{const t=[1,2,3,4,5],r={};return t.forEach(n=>{r[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `]=Xt(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)}),r},Qt=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},Ne(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},Yt=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:gt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),Zt=e=>{const{componentCls:t,paddingSM:r}=e,n=r;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(n).mul(-1).equal(),marginBottom:`calc(1em - ${V(n)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},en=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),tn=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),nn=e=>{const{componentCls:t,titleMarginTop:r}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},Jt(e)),{[`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]:{marginTop:r},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:r}}}),Yt(e)),Qt(e)),{[`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]:Object.assign(Object.assign({},Ne(e)),{marginInlineStart:e.marginXXS})}),Zt(e)),en(e)),tn()),{"&-rtl":{direction:"rtl"}})}},rn=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}),Le=De("Typography",e=>[nn(e)],rn),on=e=>{const{prefixCls:t,"aria-label":r,className:n,style:o,direction:c,maxLength:p,autoSize:s=!0,value:d,onSave:g,onCancel:a,onEnd:f,component:v,enterIcon:E=i.createElement(Gt,null)}=e,S=i.useRef(null),y=i.useRef(!1),T=i.useRef(),[C,I]=i.useState(d);i.useEffect(()=>{I(d)},[d]),i.useEffect(()=>{if(S.current&&S.current.resizableTextArea){const{textArea:k}=S.current.resizableTextArea;k.focus();const{length:j}=k.value;k.setSelectionRange(j,j)}},[]);const x=k=>{let{target:j}=k;I(j.value.replace(/[\n\r]/g,""))},P=()=>{y.current=!0},R=()=>{y.current=!1},O=k=>{let{keyCode:j}=k;y.current||(T.current=j)},D=()=>{g(C.trim())},h=k=>{let{keyCode:j,ctrlKey:U,altKey:A,metaKey:J,shiftKey:Q}=k;T.current===j&&!y.current&&!U&&!A&&!J&&!Q&&(j===ie.ENTER?(D(),f==null||f()):j===ie.ESC&&a())},m=()=>{D()},$=v?`${t}-${v}`:"",[L,M,N]=Le(t),q=G(t,`${t}-edit-content`,{[`${t}-rtl`]:c==="rtl"},n,$,M,N);return L(i.createElement("div",{className:q,style:o},i.createElement(bt,{ref:S,maxLength:p,value:C,onChange:x,onKeyDown:O,onKeyUp:h,onCompositionStart:P,onCompositionEnd:R,onBlur:m,"aria-label":r,rows:1,autoSize:s}),E!==null?mt(E,{className:`${t}-edit-content-confirm`}):null))},ln=on;function ae(e,t){return i.useMemo(()=>{const r=!!e;return[r,Object.assign(Object.assign({},t),r&&typeof e=="object"?e:null)]},[e])}const sn=(e,t)=>{const r=i.useRef(!1);i.useEffect(()=>{r.current?e():r.current=!0},t)};var an=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const cn=i.forwardRef((e,t)=>{const{prefixCls:r,component:n="article",className:o,rootClassName:c,setContentRef:p,children:s,direction:d,style:g}=e,a=an(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:f,direction:v,typography:E}=i.useContext(me),S=d??v;let y=t;p&&(y=Me(t,p));const T=f("typography",r),[C,I,x]=Le(T),P=G(T,E==null?void 0:E.className,{[`${T}-rtl`]:S==="rtl"},o,c,I,x),R=Object.assign(Object.assign({},E==null?void 0:E.style),g);return C(i.createElement(n,Object.assign({className:P,style:R,ref:y},a),s))}),Ae=cn;var dn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const un=dn;var pn=function(t,r){return i.createElement(ye,be({},t,{ref:r,icon:un}))},fn=i.forwardRef(pn);const gn=fn;function Re(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}function te(e,t,r){return e===!0||e===void 0?t:e||r&&t}function mn(e){const{prefixCls:t,copied:r,locale:n={},onCopy:o,iconOnly:c,tooltips:p,icon:s}=e,d=Re(p),g=Re(s),{copied:a,copy:f}=n,v=r?te(d[1],a):te(d[0],f),S=typeof v=="string"?v:r?a:f;return i.createElement(he,{key:"copy",title:v},i.createElement(He,{className:G(`${t}-copy`,{[`${t}-copy-success`]:r,[`${t}-copy-icon-only`]:c}),onClick:o,"aria-label":S},r?te(g[1],i.createElement(ht,null),!0):te(g[0],i.createElement(gn,null),!0)))}const ne=i.forwardRef((e,t)=>{let{style:r,children:n}=e;const o=i.useRef(null);return i.useImperativeHandle(t,()=>({isExceed:()=>{const c=o.current;return c.scrollHeight>c.clientHeight},getHeight:()=>o.current.clientHeight})),i.createElement("span",{"aria-hidden":!0,ref:o,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},r)},n)});function Be(e){const t=typeof e;return t==="string"||t==="number"}function yn(e){let t=0;return e.forEach(r=>{Be(r)?t+=String(r).length:t+=1}),t}function ke(e,t){let r=0;const n=[];for(let o=0;o<e.length;o+=1){if(r===t)return n;const c=e[o],s=Be(c)?String(c).length:1,d=r+s;if(d>t){const g=t-r;return n.push(String(c).slice(0,g)),n}n.push(c),r=d}return e}const ce=0,de=1,ue=2,Pe=3,re={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function bn(e){const{enableMeasure:t,width:r,text:n,children:o,rows:c,miscDeps:p,onEllipsis:s}=e,d=i.useMemo(()=>_e(n),[n]),g=i.useMemo(()=>yn(d),[n]),a=i.useMemo(()=>o(d,!1,!1),[n]),[f,v]=i.useState(null),E=i.useRef(null),S=i.useRef(null),y=i.useRef(null),T=i.useRef(null),[C,I]=i.useState(ce),[x,P]=i.useState(0);oe(()=>{I(t&&r&&g?de:ce)},[r,n,c,t,d]),oe(()=>{var h,m,$,L;if(C===de){const M=!!(!((h=S.current)===null||h===void 0)&&h.isExceed());I(M?ue:Pe),v(M?[0,g]:null);const N=((m=S.current)===null||m===void 0?void 0:m.getHeight())||0,q=c===1?0:(($=y.current)===null||$===void 0?void 0:$.getHeight())||0,k=((L=T.current)===null||L===void 0?void 0:L.getHeight())||0,j=q+k,U=Math.max(N,j);P(U+1),s(M)}},[C]);const R=f?Math.ceil((f[0]+f[1])/2):0;oe(()=>{var h;const[m,$]=f||[0,0];if(m!==$){const M=(((h=E.current)===null||h===void 0?void 0:h.getHeight())||0)>x;let N=R;$-m===1&&(N=M?m:$),v(M?[m,N]:[N,$])}},[f,R]);const O=i.useMemo(()=>{if(C!==ue||!f||f[0]!==f[1]){const h=o(d,!1,!1);return C!==Pe&&C!==ce?i.createElement("span",{style:Object.assign(Object.assign({},re),{WebkitLineClamp:c})},h):h}return o(ke(d,f[0]),!0,!0)},[C,f,d].concat(yt(p))),D={width:r,whiteSpace:"normal",margin:0,padding:0};return i.createElement(i.Fragment,null,O,C===de&&i.createElement(i.Fragment,null,i.createElement(ne,{style:Object.assign(Object.assign(Object.assign({},D),re),{WebkitLineClamp:c}),ref:S},a),i.createElement(ne,{style:Object.assign(Object.assign(Object.assign({},D),re),{WebkitLineClamp:c-1}),ref:y},a),i.createElement(ne,{style:Object.assign(Object.assign(Object.assign({},D),re),{WebkitLineClamp:1}),ref:T},o([],!0,!0))),C===ue&&f&&f[0]!==f[1]&&i.createElement(ne,{style:Object.assign(Object.assign({},D),{top:400}),ref:E},o(ke(d,R),!0,!0)))}const hn=e=>{let{enableEllipsis:t,isEllipsis:r,children:n,tooltipProps:o}=e;return!(o!=null&&o.title)||!t?n:i.createElement(he,Object.assign({open:r?void 0:!1},o),n)},vn=hn;var xn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function En(e,t){let{mark:r,code:n,underline:o,delete:c,strong:p,keyboard:s,italic:d}=e,g=t;function a(f,v){v&&(g=i.createElement(f,{},g))}return a("strong",p),a("u",o),a("del",c),a("code",n),a("mark",r),a("kbd",s),a("i",d),g}const Sn="...",Cn=i.forwardRef((e,t)=>{var r,n,o;const{prefixCls:c,className:p,style:s,type:d,disabled:g,children:a,ellipsis:f,editable:v,copyable:E,component:S,title:y}=e,T=xn(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:C,direction:I}=i.useContext(me),[x]=vt("Text"),P=i.useRef(null),R=i.useRef(null),O=C("typography",c),D=ze(T,["mark","code","delete","underline","strong","keyboard","italic"]),[h,m]=ae(v),[$,L]=xt(!1,{value:m.editing}),{triggerType:M=["icon"]}=m,N=l=>{var u;l&&((u=m.onStart)===null||u===void 0||u.call(m)),L(l)};sn(()=>{var l;$||(l=R.current)===null||l===void 0||l.focus()},[$]);const q=l=>{l==null||l.preventDefault(),N(!0)},k=l=>{var u;(u=m.onChange)===null||u===void 0||u.call(m,l),N(!1)},j=()=>{var l;(l=m.onCancel)===null||l===void 0||l.call(m),N(!1)},[U,A]=ae(E),[J,Q]=i.useState(!1),se=i.useRef(null),ve={};A.format&&(ve.format=A.format);const xe=()=>{se.current&&clearTimeout(se.current)},Ve=l=>{var u;l==null||l.preventDefault(),l==null||l.stopPropagation(),Ut(A.text||String(a)||"",ve),Q(!0),xe(),se.current=setTimeout(()=>{Q(!1)},3e3),(u=A.onCopy)===null||u===void 0||u.call(A,l)};i.useEffect(()=>xe,[]);const[Ee,qe]=i.useState(!1),[Se,Ke]=i.useState(!1),[Ce,Fe]=i.useState(!1),[Oe,Ge]=i.useState(!1),[we,Xe]=i.useState(!1),[Je,Qe]=i.useState(!0),[B,w]=ae(f,{expandable:!1}),_=B&&!Ce,{rows:K=1}=w,Y=i.useMemo(()=>!_||w.suffix!==void 0||w.onEllipsis||w.expandable||h||U,[_,w,h,U]);oe(()=>{B&&!Y&&(qe(Te("webkitLineClamp")),Ke(Te("textOverflow")))},[Y,B]);const z=i.useMemo(()=>Y?!1:K===1?Se:Ee,[Y,Se,Ee]),$e=_&&(z?we:Oe),Ye=_&&K===1&&z,Z=_&&K>1&&z,Ze=l=>{var u;Fe(!0),(u=w.onExpand)===null||u===void 0||u.call(w,l)},[je,et]=i.useState(0),tt=l=>{let{offsetWidth:u}=l;et(u)},nt=l=>{var u;Ge(l),Oe!==l&&((u=w.onEllipsis)===null||u===void 0||u.call(w,l))};i.useEffect(()=>{const l=P.current;if(B&&z&&l){const u=Z?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;we!==u&&Xe(u)}},[B,z,a,Z,Je,je]),i.useEffect(()=>{const l=P.current;if(typeof IntersectionObserver>"u"||!l||!z||!_)return;const u=new IntersectionObserver(()=>{Qe(!!l.offsetParent)});return u.observe(l),()=>{u.disconnect()}},[z,_]);let W={};w.tooltip===!0?W={title:(r=m.text)!==null&&r!==void 0?r:a}:i.isValidElement(w.tooltip)?W={title:w.tooltip}:typeof w.tooltip=="object"?W=Object.assign({title:(n=m.text)!==null&&n!==void 0?n:a},w.tooltip):W={title:w.tooltip};const ee=i.useMemo(()=>{const l=u=>["string","number"].includes(typeof u);if(!(!B||z)){if(l(m.text))return m.text;if(l(a))return a;if(l(y))return y;if(l(W.title))return W.title}},[B,z,y,W.title,$e]);if($)return i.createElement(ln,{value:(o=m.text)!==null&&o!==void 0?o:typeof a=="string"?a:"",onSave:k,onCancel:j,onEnd:m.onEnd,prefixCls:O,className:p,style:s,direction:I,component:S,maxLength:m.maxLength,autoSize:m.autoSize,enterIcon:m.enterIcon});const rt=()=>{const{expandable:l,symbol:u}=w;if(!l)return null;let H;return u?H=u:H=x==null?void 0:x.expand,i.createElement("a",{key:"expand",className:`${O}-expand`,onClick:Ze,"aria-label":x==null?void 0:x.expand},H)},ot=()=>{if(!h)return;const{icon:l,tooltip:u}=m,H=_e(u)[0]||(x==null?void 0:x.edit),F=typeof H=="string"?H:"";return M.includes("icon")?i.createElement(he,{key:"edit",title:u===!1?"":H},i.createElement(He,{ref:R,className:`${O}-edit`,onClick:q,"aria-label":F},l||i.createElement(_t,{role:"button"}))):null},it=()=>U?i.createElement(mn,Object.assign({key:"copy"},A,{prefixCls:O,copied:J,locale:x,onCopy:Ve,iconOnly:a==null})):null,lt=l=>[l&&rt(),ot(),it()],st=l=>[l&&i.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Sn),w.suffix,lt(l)];return i.createElement(Et,{onResize:tt,disabled:!_},l=>i.createElement(vn,{tooltipProps:W,enableEllipsis:_,isEllipsis:$e},i.createElement(Ae,Object.assign({className:G({[`${O}-${d}`]:d,[`${O}-disabled`]:g,[`${O}-ellipsis`]:B,[`${O}-single-line`]:_&&K===1,[`${O}-ellipsis-single-line`]:Ye,[`${O}-ellipsis-multiple-line`]:Z},p),prefixCls:c,style:Object.assign(Object.assign({},s),{WebkitLineClamp:Z?K:void 0}),component:S,ref:Me(l,P,t),direction:I,onClick:M.includes("text")?q:void 0,"aria-label":ee==null?void 0:ee.toString(),title:y},D),i.createElement(bn,{enableMeasure:_&&!z,text:a,rows:K,width:je,onEllipsis:nt,miscDeps:[J,Ce]},(u,H)=>{let F=u;return u.length&&H&&ee&&(F=i.createElement("span",{key:"show-content","aria-hidden":!0},F)),En(e,i.createElement(i.Fragment,null,F,st(H)))}))))}),le=Cn;var On=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const wn=i.forwardRef((e,t)=>{var{ellipsis:r,rel:n}=e,o=On(e,["ellipsis","rel"]);const c=Object.assign(Object.assign({},o),{rel:n===void 0&&o.target==="_blank"?"noopener noreferrer":n});return delete c.navigate,i.createElement(le,Object.assign({},c,{ref:t,ellipsis:!!r,component:"a"}))}),$n=wn,jn=i.forwardRef((e,t)=>i.createElement(le,Object.assign({ref:t},e,{component:"div"}))),Tn=jn;var In=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Rn=(e,t)=>{var{ellipsis:r}=e,n=In(e,["ellipsis"]);const o=i.useMemo(()=>r&&typeof r=="object"?ze(r,["expandable","rows"]):r,[r]);return i.createElement(le,Object.assign({ref:t},n,{ellipsis:o,component:"span"}))},kn=i.forwardRef(Rn);var Pn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Dn=[1,2,3,4,5],Mn=i.forwardRef((e,t)=>{const{level:r=1}=e,n=Pn(e,["level"]);let o;return Dn.includes(r)?o=`h${r}`:o="h1",i.createElement(le,Object.assign({ref:t},n,{component:o}))}),Nn=Mn,X=Ae;X.Text=kn;X.Link=$n;X.Title=Nn;X.Paragraph=Tn;const We=X,{Title:_n}=We;function ge(e){const{dataSource:t}=e;return b.jsxs(b.Fragment,{children:[b.jsx(_n,{level:5,style:{marginTop:"10px"},children:t.title}),t!=null&&t.type?b.jsx("div",{style:{margin:"5px 0px"},children:t.type}):null,t!=null&&t.description?b.jsx("div",{style:Ue,children:t.description}):null,b.jsx(St,{size:"small",rowKey:r=>r.name||"",pagination:!1,columns:[{title:"Name",dataIndex:"name",key:"name",render:r=>b.jsx(fe,{color:"cyan",children:r})},{title:"Type",dataIndex:"type",key:"type"},{title:"DefaultValue",dataIndex:"defaultValue",key:"defaultValue",render:r=>b.jsx(fe,{color:"gray",children:r})},{title:"Description",dataIndex:"description",key:"description"}],dataSource:t.ds||[]})]})}ge.__docgenInfo={description:"",methods:[],displayName:"APITableProperty",props:{dataSource:{required:!0,tsType:{name:"intersection",raw:"DSProps & { title?: string }",elements:[{name:"DSProps"},{name:"signature",type:"object",raw:"{ title?: string }",signature:{properties:[{key:"title",value:{name:"string",required:!1}}]}}]},description:""}}};const Ue={margin:"5px 0px",fontWeight:"bold",color:"#797979"},{Title:pe}=We;function zn(e){const{paramDs:t,returnDs:r,apiDescription:n}=e,[o,c]=i.useState(null),{title:p,description:s="No description",beCare:d}=e.args||{};return i.useEffect(()=>{var g;c(((g=document.querySelector(".sbdocs-title.sb-unstyled"))==null?void 0:g.textContent)||"")},[]),b.jsxs(b.Fragment,{children:[b.jsx(at,{children:p}),b.jsx(Tt,{style:{margin:"10px"}}),b.jsx(pe,{level:4,children:"Install"}),b.jsx(ct,{code:`npm install @darwish/${o}`}),b.jsx(pe,{level:4,children:"Usage"}),b.jsx("div",{style:Ue,children:s}),d&&b.jsx(fe,{style:{color:"darkred",fontSize:"14px"},children:d}),b.jsx(dt,{additionalActions:[{title:"Source Code",onClick:()=>{var g;window.open(`https://github.com/LonelyFellas/Darwish-plus/blob/main/hooks/${(g=document.querySelector(".sbdocs-title.sb-unstyled"))==null?void 0:g.textContent}/index.ts`,"_blank")}}],sourceState:"shown"}),b.jsxs("div",{children:[b.jsx(pe,{level:4,children:"API"}),b.jsx("div",{style:{fontWeight:"bold",color:"#797979"},children:n}),b.jsx(ge,{dataSource:{...t,title:"Paramters"}},"param"),b.jsx(ge,{dataSource:{...r,title:"Returns"}},"return")]})]})}zn.__docgenInfo={description:"",methods:[],displayName:"HookDocsView",props:{args:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title?: string;
  beCare?: string;
  description?: string;
  sourceUrl?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"beCare",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"sourceUrl",value:{name:"string",required:!1}}]}},description:""},apiDescription:{required:!0,tsType:{name:"ReactNode"},description:""},paramDs:{required:!1,tsType:{name:"DSProps"},description:""},returnDs:{required:!1,tsType:{name:"DSProps"},description:""}}};export{zn as H};
