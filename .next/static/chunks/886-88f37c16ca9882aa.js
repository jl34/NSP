"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[886],{86886:function(e,n,t){t.d(n,{ZP:function(){return Z}});var r=t(63366),i=t(87462),o=t(67294),a=t(86010),s=t(95408),c=t(39707),p=t(94780),u=t(90948),l=t(71657),m=t(2734);var d=o.createContext(),f=t(1588),g=t(34867);function w(e){return(0,g.Z)("MuiGrid",e)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var x=(0,f.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...h.map((e=>`grid-xs-${e}`)),...h.map((e=>`grid-sm-${e}`)),...h.map((e=>`grid-md-${e}`)),...h.map((e=>`grid-lg-${e}`)),...h.map((e=>`grid-xl-${e}`))]),b=t(85893);const $=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function k(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function S({breakpoints:e,values:n}){let t="";Object.keys(n).forEach((e=>{""===t&&0!==n[e]&&(t=e)}));const r=Object.keys(e).sort(((n,t)=>e[n]-e[t]));return r.slice(0,r.indexOf(t))}const v=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{container:r,direction:i,item:o,spacing:a,wrap:s,zeroMinWidth:c,breakpoints:p}=t;let u=[];r&&(u=function(e,n,t={}){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[t[`spacing-xs-${String(e)}`]];const r=[];return n.forEach((n=>{const i=e[n];Number(i)>0&&r.push(t[`spacing-${n}-${String(i)}`])})),r}(a,p,n));const l=[];return p.forEach((e=>{const r=t[e];r&&l.push(n[`grid-${e}-${String(r)}`])})),[n.root,r&&n.container,o&&n.item,c&&n.zeroMinWidth,...u,"row"!==i&&n[`direction-xs-${String(i)}`],"wrap"!==s&&n[`wrap-xs-${String(s)}`],...l]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:n}){const t=(0,s.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},t,(e=>{const n={flexDirection:e};return 0===e.indexOf("column")&&(n[`& > .${x.item}`]={maxWidth:"none"}),n}))}),(function({theme:e,ownerState:n}){const{container:t,rowSpacing:r}=n;let i={};if(t&&0!==r){const n=(0,s.P$)({values:r,breakpoints:e.breakpoints.values});let t;"object"===typeof n&&(t=S({breakpoints:e.breakpoints.values,values:n})),i=(0,s.k9)({theme:e},n,((n,r)=>{var i;const o=e.spacing(n);return"0px"!==o?{marginTop:`-${k(o)}`,[`& > .${x.item}`]:{paddingTop:k(o)}}:null!=(i=t)&&i.includes(r)?{}:{marginTop:0,[`& > .${x.item}`]:{paddingTop:0}}}))}return i}),(function({theme:e,ownerState:n}){const{container:t,columnSpacing:r}=n;let i={};if(t&&0!==r){const n=(0,s.P$)({values:r,breakpoints:e.breakpoints.values});let t;"object"===typeof n&&(t=S({breakpoints:e.breakpoints.values,values:n})),i=(0,s.k9)({theme:e},n,((n,r)=>{var i;const o=e.spacing(n);return"0px"!==o?{width:`calc(100% + ${k(o)})`,marginLeft:`-${k(o)}`,[`& > .${x.item}`]:{paddingLeft:k(o)}}:null!=(i=t)&&i.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${x.item}`]:{paddingLeft:0}}}))}return i}),(function({theme:e,ownerState:n}){let t;return e.breakpoints.keys.reduce(((r,o)=>{let a={};if(n[o]&&(t=n[o]),!t)return r;if(!0===t)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:n.columns,breakpoints:e.breakpoints.values}),p="object"===typeof c?c[o]:c;if(void 0===p||null===p)return r;const u=Math.round(t/p*1e8)/1e6+"%";let l={};if(n.container&&n.item&&0!==n.columnSpacing){const t=e.spacing(n.columnSpacing);if("0px"!==t){const e=`calc(${u} + ${k(t)})`;l={flexBasis:e,maxWidth:e}}}a=(0,i.Z)({flexBasis:u,flexGrow:0,maxWidth:u},l)}return 0===e.breakpoints.values[o]?Object.assign(r,a):r[e.breakpoints.up(o)]=a,r}),{})}));const W=e=>{const{classes:n,container:t,direction:r,item:i,spacing:o,wrap:a,zeroMinWidth:s,breakpoints:c}=e;let u=[];t&&(u=function(e,n){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[`spacing-xs-${String(e)}`];const t=[];return n.forEach((n=>{const r=e[n];if(Number(r)>0){const e=`spacing-${n}-${String(r)}`;t.push(e)}})),t}(o,c));const l=[];c.forEach((n=>{const t=e[n];t&&l.push(`grid-${n}-${String(t)}`)}));const m={root:["root",t&&"container",i&&"item",s&&"zeroMinWidth",...u,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...l]};return(0,p.Z)(m,w,n)},N=o.forwardRef((function(e,n){const t=(0,l.Z)({props:e,name:"MuiGrid"}),{breakpoints:s}=(0,m.Z)(),p=(0,c.Z)(t),{className:u,columns:f,columnSpacing:g,component:w="div",container:h=!1,direction:x="row",item:k=!1,rowSpacing:S,spacing:N=0,wrap:Z="wrap",zeroMinWidth:M=!1}=p,y=(0,r.Z)(p,$),z=S||N,j=g||N,E=o.useContext(d),G=h?f||12:E,P={},O=(0,i.Z)({},y);s.keys.forEach((e=>{null!=y[e]&&(P[e]=y[e],delete O[e])}));const B=(0,i.Z)({},p,{columns:G,container:h,direction:x,item:k,rowSpacing:z,columnSpacing:j,wrap:Z,zeroMinWidth:M,spacing:N},P,{breakpoints:s.keys}),C=W(B);return(0,b.jsx)(d.Provider,{value:G,children:(0,b.jsx)(v,(0,i.Z)({ownerState:B,className:(0,a.Z)(C.root,u),as:w,ref:n},O))})}));var Z=N}}]);