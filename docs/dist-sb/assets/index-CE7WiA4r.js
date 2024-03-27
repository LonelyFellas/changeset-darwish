import{R as h,r as u}from"./index-BBkUAzwr.js";import"./jsx-runtime-DRTy3Uxn.js";import{p as oe,C as W,g as ae,r as se,u as L,m as ce,T as ie,a as q,c as X,b as G,d as le,i as ue,e as fe,W as de}from"./colors-oHcgSm9O.js";var I=function(){return I=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++){r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)},Ne=function(e){var r=h.useState(!!e),o=r[0],t=r[1],n=u.useMemo(function(){var a=function(){return t(!0)},s=function(){return t(!1)},i=function(l){t(function(c){return typeof l=="boolean"?l:!c})};return{setTrue:a,setFalse:s,toggle:i}},[o]);return I({value:o},n)};/*! js-cookie v3.0.5 | MIT */function C(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)e[t]=o[t]}return e}var ge={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function P(e,r){function o(n,a,s){if(!(typeof document>"u")){s=C({},r,s),typeof s.expires=="number"&&(s.expires=new Date(Date.now()+s.expires*864e5)),s.expires&&(s.expires=s.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var l in s)s[l]&&(i+="; "+l,s[l]!==!0&&(i+="="+s[l].split(";")[0]));return document.cookie=n+"="+e.write(a,n)+i}}function t(n){if(!(typeof document>"u"||arguments.length&&!n)){for(var a=document.cookie?document.cookie.split("; "):[],s={},i=0;i<a.length;i++){var l=a[i].split("="),c=l.slice(1).join("=");try{var f=decodeURIComponent(l[0]);if(s[f]=e.read(c,f),n===f)break}catch{}}return n?s[n]:s}}return Object.create({set:o,get:t,remove:function(n,a){o(n,"",C({},a,{expires:-1}))},withAttributes:function(n){return P(this.converter,C({},this.attributes,n))},withConverter:function(n){return P(C({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(e)}})}var Me=P(ge,{path:"/"}),He=function(e){return _(e,"date")},De=function(e){return _(e,"object")},Ue=function(e){return _(e,"set")},We=function(e){return _(e,"map")},pe=function(e){return Array.isArray(e)},ve=function(e){return typeof e=="function"},_=function(e,r){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()===r},ye=function(e){var r=u.useState(e),o=r[0],t=r[1];u.useEffect(function(){},[o]);var n=u.useCallback(function(a){return t(typeof a>"u"?e:a)},[]);return n},he=function(e){return(e+1)%1e6};function be(){var e=u.useReducer(he,0),r=e[1];return r}var T=function(e,r,o){if(o||arguments.length===2)for(var t=0,n=r.length,a;t<n;t++)(a||!(t in r))&&(a||(a=Array.prototype.slice.call(r,0,t)),a[t]=r[t]);return e.concat(a||Array.prototype.slice.call(r))},D=function(e,r){return ve(e)?e.length?e(r):e([]):e};function Le(e){var r=u.useRef(D(e,[])),o=be(),t=u.useMemo(function(){return{set:function(n){r.current=D(n,r.current),o()},push:function(n){t.set(T(T([],r.current,!0),[n],!1))},updateAt:function(n,a){t.set(r.current.map(function(s,i){return i===n?a:s}))},insertAt:function(n,a){t.set(function(s){var i=[];return s.forEach(function(l,c){c===n&&i.push(a),i.push(l)}),i})},update:function(n,a){t.set(function(s){return s.map(function(i){return n(i,a)?a:i})})},updateFirst:function(n,a){var s=r.current.findIndex(function(i){return n(i,a)});s>=0&&t.updateAt(1,a)},upsert:function(n,a){var s=r.current.findIndex(function(i){return n(i,a)});s>=0?t.updateAt(1,a):t.push(a)},sort:function(n){t.set(T([],r.current,!0).sort(n))},filter:function(n,a){t.set(function(s){return s.slice().filter(n,a)})},removeAt:function(n){t.set(function(a){var s=a.slice();return s.splice(n,1),s})},clear:function(){t.set([])},reset:function(){t.set(e)}}},[]);return[r.current,t]}var S=function(){return S=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++){r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)};function qe(e){var r=u.useState(e),o=r[0],t=r[1],n=u.useCallback(function(a){t(function(s){return S(S({},s),typeof a=="function"?a(s):a)})},[]);return[o,n]}var A=function(){return A=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++){r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)},U=function(e,r,o){if(o||arguments.length===2)for(var t=0,n=r.length,a;t<n;t++)(a||!(t in r))&&(a||(a=Array.prototype.slice.call(r,0,t)),a[t]=r[t]);return e.concat(a||Array.prototype.slice.call(r))};function Xe(e){var r=u.useCallback(function(){return pe(e)?new Set(e):new Set(e)},[e]),o=u.useState(r),t=o[0],n=o[1],a=u.useCallback(function(l){return t.has(l)},[e,t]),s=u.useMemo(function(){return{add:function(l){n(function(c){return new Set(U(U([],Array.from(c),!0),[l],!1))})},remove:function(l){n(function(c){return new Set(Array.from(c).filter(function(f){return f!==l}))})},toggle:function(l){a(l)?s.remove(l):s.add(l)},reset:function(){n(r)}}},[n,t]),i=A({has:a},s);return[t,i]}var O=function(){return O=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++){r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},O.apply(this,arguments)},Ge=function(e){var r=u.useState(e),o=r[0],t=r[1],n=ye(),a=u.useMemo(function(){return new Proxy(o,{set:function(s,i,l){try{return s[i]=l,t(function(c){return O(O({},c),{prop:o})}),!0}catch(c){return n(c),!1}}})},[]);return a},E=function(){return E=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++){r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(this,arguments)};function Qe(e,r){e===void 0&&(e=!1);var o=u.useState(e),t=o[0],n=o[1],a=u.useMemo(function(){var s=r==="undefined"?!e:r,i=function(f){n(function(d){return typeof f=="boolean"?f:d===e?s:e})},l=function(){n(e)},c=function(){n(s)};return{toggle:i,setLeft:l,setRight:c}},[]);return E({value:t},a)}var Ce=function(e,r,o,t){function n(a){return a instanceof o?a:new o(function(s){s(a)})}return new(o||(o=Promise))(function(a,s){function i(f){try{c(t.next(f))}catch(d){s(d)}}function l(f){try{c(t.throw(f))}catch(d){s(d)}}function c(f){f.done?a(f.value):n(f.value).then(i,l)}c((t=t.apply(e,r||[])).next())})},me=function(e,r){var o={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,n,a,s;return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(c){return function(f){return l([c,f])}}function l(c){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(o=0)),o;)try{if(t=1,n&&(a=c[0]&2?n.return:c[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,c[1])).done)return a;switch(n=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){o=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(c[0]===6&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=r.call(e,o)}catch(f){c=[6,f],n=0}finally{t=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};function Je(){var e=this,r=u.useState(null),o=r[0],t=r[1],n=u.useCallback(function(a){return Ce(e,void 0,void 0,function(){var s;return me(this,function(i){switch(i.label){case 0:if(!(navigator!=null&&navigator.clipboard))return console.warn("Clipboard not supported"),[2,!1];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,navigator.clipboard.writeText(a)];case 2:return i.sent(),t(a),[2,!0];case 3:return s=i.sent(),console.warn("Copy failed",s),t(null),[2,!1];case 4:return[2]}})})},[]);return[o,n]}var Se=h.createContext({isAuth:!1}),Ke=function(){var e=h.useContext(Se).isAuth;return e},Oe=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};function _e(e,r,o){return typeof e=="boolean"?e:typeof e=="object"?!0:r===void 0?!!o:r!==!1&&r!==null}function xe(e){let{closable:r,closeIcon:o,customCloseIconRender:t,defaultCloseIcon:n=h.createElement(W,null),defaultClosable:a=!1}=e;if(!_e(r,o,a))return[!1,null];const i=typeof r=="object"?r:{},{closeIcon:l}=i,c=Oe(i,["closeIcon"]),f=typeof r=="object"&&l!==void 0?l:typeof o=="boolean"||o===void 0||o===null?n:o,d=oe(c,!0),v=t?t(f):f;return[!0,h.isValidElement(v)?h.cloneElement(v,d):h.createElement("span",Object.assign({},d),v)]}const we=e=>{const{paddingXXS:r,lineWidth:o,tagPaddingHorizontal:t,componentCls:n,calc:a}=e,s=a(t).sub(o).equal(),i=a(r).sub(o).equal();return{[n]:Object.assign(Object.assign({},se(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:s,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${L(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${n}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${n}-close-icon`]:{marginInlineStart:i,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${n}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${n}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:s}}),[`${n}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},k=e=>{const{lineWidth:r,fontSizeIcon:o,calc:t}=e,n=e.fontSizeSM;return ce(e,{tagFontSize:n,tagLineHeight:L(t(e.lineHeightSM).mul(n).equal()),tagIconSize:t(o).sub(t(r).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},B=e=>({defaultBg:new ie(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),Q=ae("Tag",e=>{const r=k(e);return we(r)},B);var je=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const $e=u.forwardRef((e,r)=>{const{prefixCls:o,style:t,className:n,checked:a,onChange:s,onClick:i}=e,l=je(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:c,tag:f}=u.useContext(q),d=j=>{s==null||s(!a),i==null||i(j)},v=c("tag",o),[y,x,w]=Q(v),g=X(v,`${v}-checkable`,{[`${v}-checkable-checked`]:a},f==null?void 0:f.className,n,x,w);return y(u.createElement("span",Object.assign({},l,{ref:r,style:Object.assign(Object.assign({},t),f==null?void 0:f.style),className:g,onClick:d})))}),Te=$e,Ie=e=>le(e,(r,o)=>{let{textColor:t,lightBorderColor:n,lightColor:a,darkColor:s}=o;return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:t,background:a,borderColor:n,"&-inverse":{color:e.colorTextLightSolid,background:s,borderColor:s},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),Pe=G(["Tag","preset"],e=>{const r=k(e);return Ie(r)},B);function Ae(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const m=(e,r,o)=>{const t=Ae(o);return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:e[`color${o}`],background:e[`color${t}Bg`],borderColor:e[`color${t}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},Ee=G(["Tag","status"],e=>{const r=k(e);return[m(r,"success","Success"),m(r,"processing","Info"),m(r,"error","Error"),m(r,"warning","Warning")]},B);var ke=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const Be=(e,r)=>{const{prefixCls:o,className:t,rootClassName:n,style:a,children:s,icon:i,color:l,onClose:c,closeIcon:f,closable:d,bordered:v=!0}=e,y=ke(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:x,direction:w,tag:g}=u.useContext(q),[j,R]=u.useState(!0);u.useEffect(()=>{"visible"in y&&R(y.visible)},[y.visible]);const z=ue(l),F=fe(l),$=z||F,K=Object.assign(Object.assign({backgroundColor:l&&!$?l:void 0},g==null?void 0:g.style),a),p=x("tag",o),[Y,Z,V]=Q(p),ee=X(p,g==null?void 0:g.className,{[`${p}-${l}`]:$,[`${p}-has-color`]:l&&!$,[`${p}-hidden`]:!j,[`${p}-rtl`]:w==="rtl",[`${p}-borderless`]:!v},t,n,Z,V),N=b=>{b.stopPropagation(),c==null||c(b),!b.defaultPrevented&&R(!1)},[,ne]=xe({closable:d,closeIcon:f??(g==null?void 0:g.closeIcon),customCloseIconRender:b=>b===null?u.createElement(W,{className:`${p}-close-icon`,onClick:N}):u.createElement("span",{className:`${p}-close-icon`,onClick:N},b),defaultCloseIcon:null,defaultClosable:!1}),re=typeof y.onClick=="function"||s&&s.type==="a",M=i||null,te=M?u.createElement(u.Fragment,null,M,s&&u.createElement("span",null,s)):s,H=u.createElement("span",Object.assign({},y,{ref:r,className:ee,style:K}),te,ne,z&&u.createElement(Pe,{key:"preset",prefixCls:p}),F&&u.createElement(Ee,{key:"status",prefixCls:p}));return Y(re?u.createElement(de,{component:"Tag"},H):H)},J=u.forwardRef(Be);J.CheckableTag=Te;const Ye=J;export{Ye as T,Je as a,Le as b,qe as c,Xe as d,Ge as e,Qe as f,be as g,Me as h,ve as i,pe as j,De as k,We as l,Ue as m,He as n,Ke as o,Ne as u};
