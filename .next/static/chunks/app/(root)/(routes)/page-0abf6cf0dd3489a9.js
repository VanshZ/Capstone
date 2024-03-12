(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[714],{8459:function(e,t,r){Promise.resolve().then(r.bind(r,4941))},4941:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var a=r(7437),o=r(2265),s=r(2173),i=r(5925),n=r(7934),l=r(3212);let d=[{accessorKey:"address",header:"Address"},{accessorKey:"propertyType",header:"Type"},{accessorKey:"listingStatus",header:"Status"},{accessorKey:"price",header:"Price"}];var c=r(1657),u=()=>{let[e,t]=(0,o.useState)(!1),[r,u]=(0,o.useState)(""),[p,m]=(0,o.useState)([]),f=async()=>{try{let e=(await s.Z.request({method:"GET",url:"https://zillow-com1.p.rapidapi.com/propertyExtendedSearch",params:{location:r,home_type:"Houses"},headers:{"X-RapidAPI-Key":"c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90","X-RapidAPI-Host":"zillow-com1.p.rapidapi.com"}})).data.props.map(e=>({zpid:e.zpid,propertyType:e.propertyType,address:e.address,price:c.z.format(e.price||0),listingStatus:"SINGLE_FAMILY"===e.listingStatus?"Single Family":e.listingStatus,livingArea:e.livingArea}));m(e)}catch(e){i.ZP.error("No Results Found!")}};return((0,o.useEffect)(()=>{t(!0)},[]),e)?(0,a.jsx)("div",{style:{backgroundImage:"url(https://cdn.hero.page/wallpapers/950a7800-fdbe-456a-bdd0-f2a8491fb944-charcoal-cityscape-sketched-reality-wallpaper-1.png)",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",minHeight:"100vh"},children:(0,a.jsx)("div",{className:"pt-16 flex justify-center items-center max-h-screen",children:(0,a.jsxs)("div",{className:"flex justify-center items-center rounded-lg",style:{backgroundColor:"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(2px)",maxWidth:"800px",minWidth:"800px"},children:[" ",(0,a.jsxs)("div",{className:"w-full px-4 py-8 rounded-lg",children:[(0,a.jsx)("h1",{className:"text-center text-2xl font-bold mb-4",children:"Search ROIPro"}),(0,a.jsx)("input",{type:"text",placeholder:"Enter location",className:"w-full p-2 border border-gray-300 rounded mb-4",value:r,onChange:e=>u(e.target.value),onKeyPress:e=>"Enter"===e.key&&f()}),(0,a.jsx)("button",{onClick:f,className:"w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Search"}),(0,a.jsx)(n.Z,{}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h2",{className:"font-bold",children:"Total Results (".concat(p.length,")")}),(0,a.jsx)("div",{className:"overflow-x-auto mt-2 max-h-96",children:(0,a.jsx)(l.w,{data:p,columns:d,searchKey:"",detailPageUrl:""})})]})]})]})})}):null}},3212:function(e,t,r){"use strict";r.d(t,{w:function(){return b}});var a=r(7437),o=r(2265),s=r(1396),i=r.n(s),n=r(3216),l=r(7660),d=r(1657);let c=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,d.cn)("w-full caption-bottom text-sm",r),...o})})});c.displayName="Table";let u=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("thead",{ref:t,className:(0,d.cn)("[&_tr]:border-b",r),...o})});u.displayName="TableHeader";let p=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,d.cn)("[&_tr:last-child]:border-0",r),...o})});p.displayName="TableBody",o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,d.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...o})}).displayName="TableFooter";let m=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("tr",{ref:t,className:(0,d.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...o})});m.displayName="TableRow";let f=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("th",{ref:t,className:(0,d.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...o})});f.displayName="TableHead";let h=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("td",{ref:t,className:(0,d.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...o})});h.displayName="TableCell",o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("caption",{ref:t,className:(0,d.cn)("mt-4 text-sm text-muted-foreground",r),...o})}).displayName="TableCaption";var g=r(2173);function b(e){let{columns:t,data:r,searchKey:s,detailPageUrl:d}=e,[b,y]=(0,o.useState)([]),x=(0,n.b7)({data:r,columns:t,getCoreRowModel:(0,l.sC)()}),v=async e=>{y(t=>t.includes(e.zpid)?t.filter(t=>t!==e.zpid):[...t,e.zpid]);try{console.log(e),await g.Z.post("/api/properties",{isFavorited:b.includes(e.zpid),...e})}catch(e){console.error("something went wrong")}};return(0,a.jsx)("div",{children:(0,a.jsxs)(c,{children:[(0,a.jsx)(u,{children:x.getHeaderGroups().map(e=>(0,a.jsxs)(m,{children:[e.headers.map(e=>(0,a.jsx)(f,{children:(0,n.ie)(e.column.columnDef.header,e.getContext())},e.id)),(0,a.jsx)(f,{children:"Favorite"})]},e.id))}),(0,a.jsx)(p,{children:x.getRowModel().rows.map(e=>(0,a.jsxs)(m,{children:[e.getVisibleCells().map(t=>{var r;return(0,a.jsx)(h,{children:"address"===t.column.id?(0,a.jsx)(i(),{href:"/property-details/".concat(null!==(r=e.original.zpid)&&void 0!==r?r:""),passHref:!0,children:(0,n.ie)(t.column.columnDef.cell,t.getContext())}):(0,n.ie)(t.column.columnDef.cell,t.getContext())},t.id)}),(0,a.jsx)(h,{children:(0,a.jsx)("button",{className:"heart-button ".concat(b.includes(e.original.zpid)?"hearted":""),onClick:()=>v(e.original),children:b.includes(e.original.zpid)?"❤️":"\uD83D\uDDA4"})})]},e.id))})]})})}},7934:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(7437),o=r(2265),s=r(6280),i=r(1657);let n=o.forwardRef((e,t)=>{let{className:r,orientation:o="horizontal",decorative:n=!0,...l}=e;return(0,a.jsx)(s.f,{ref:t,decorative:n,orientation:o,className:(0,i.cn)("shrink-0 bg-border","horizontal"===o?"h-[1px] w-full":"h-full w-[1px]",r),...l})});n.displayName=s.f.displayName},1657:function(e,t,r){"use strict";r.d(t,{cn:function(){return s},z:function(){return i}});var a=r(7042),o=r(4769);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,a.W)(t))}let i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})},5925:function(e,t,r){"use strict";let a,o;r.d(t,{x7:function(){return eu},ZP:function(){return ep}});var s,i=r(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+i+";":a+="f"==s[1]?p(i,s):s+"{"+p(i,"k"==s[1]?"":t)+"}":"object"==typeof i?a+=p(i,t?t.replace(/([^,])+/g,e=>s.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(s,i):s+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},h=(e,t,r,a,o)=>{var s;let i=f(e),n=m[i]||(m[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(o?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),s=m[n],l?t.data=t.data.replace(l,s):-1===t.data.indexOf(s)&&(t.data=a?s+t.data:t.data+s),n},g=(e,t,r)=>e.reduce((e,a,o)=>{let s=t[o];if(s&&s.call){let e=s(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==s?"":s)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let y,x,v,w=b.bind({k:1});function j(e,t){let r=this||{};return function(){let a=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;r.p=Object.assign({theme:x&&x()},n),r.o=/ *go\d+/.test(l),n.className=b.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),y(d,n)}return t?t(o):o}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,E=(a=0,()=>(++a).toString()),z=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},C=new Map,S=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),R({type:4,toastId:e})},1e3);C.set(e,t)},T=e=>{let t=C.get(e);t&&clearTimeout(t)},$=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&T(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?$(e,{type:1,toast:r}):$(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?S(a):e.toasts.forEach(e=>{S(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},A=[],P={toasts:[],pausedAt:void 0},R=e=>{P=$(P,e),A.forEach(e=>{e(P)})},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=(e={})=>{let[t,r]=(0,i.useState)(P);(0,i.useEffect)(()=>(A.push(r),()=>{let e=A.indexOf(r);e>-1&&A.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},I=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),F=e=>(t,r)=>{let a=I(t,e,r);return R({type:2,toast:a}),a.id},_=(e,t)=>F("blank")(e,t);_.error=F("error"),_.success=F("success"),_.loading=F("loading"),_.custom=F("custom"),_.dismiss=e=>{R({type:3,toastId:e})},_.remove=e=>R({type:4,toastId:e}),_.promise=(e,t,r)=>{let a=_.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(_.success(k(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{_.error(k(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var H=(e,t)=>{R({type:1,toast:{id:e,height:t}})},M=()=>{R({type:5,time:Date.now()})},K=e=>{let{toasts:t,pausedAt:r}=O(e);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&_.dismiss(t.id);return}return setTimeout(()=>_.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,i.useCallback)(()=>{r&&R({type:6,time:Date.now()})},[r]),o=(0,i.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:s}=r||{},i=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:M,endPause:a,calculateOffset:o}}},Z=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,L=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,G=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,q=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,B=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,X=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Y=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${X} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=j("div")`
  position: absolute;
`,J=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ee=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(ee,null,t):t:"blank"===r?null:i.createElement(J,null,i.createElement(q,{...a}),"loading"!==r&&i.createElement(V,null,"error"===r?i.createElement(G,{...a}):i.createElement(Y,{...a})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,eo=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,es=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ei=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=z()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(r),ea(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=i.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?ei(e.position||t||"top-center",e.visible):{opacity:0},s=i.createElement(et,{toast:e}),n=i.createElement(es,{...e.ariaProps},k(e.message,e));return i.createElement(eo,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:s,message:n}):i.createElement(i.Fragment,null,s,n))});s=i.createElement,p.p=void 0,y=s,x=void 0,v=void 0;var el=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let s=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:s,className:t,style:r},o)},ed=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ec=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:d}=K(r);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(r=>{let s=r.position||t,n=ed(s,d.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(el,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?ec:"",style:n},"custom"===r.type?k(r.message,r):o?o(r):i.createElement(en,{toast:r,position:s}))}))},ep=_}},function(e){e.O(0,[603,173,876,971,938,744],function(){return e(e.s=8459)}),_N_E=e.O()}]);