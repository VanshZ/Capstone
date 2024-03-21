(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[714],{8073:function(e,t,r){Promise.resolve().then(r.bind(r,8978))},5639:function(e,t,r){"use strict";r.d(t,{z:function(){return g}});var a=r(7437),o=r(1396),i=r.n(o),s=r(2265),n=r(4949),l=r(6061),d=r(1657);let c=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=s.forwardRef((e,t)=>{let{className:r,variant:o,size:i,asChild:s=!1,...l}=e,u=s?n.g7:"button";return(0,a.jsx)(u,{className:(0,d.cn)(c({variant:o,size:i,className:r})),ref:t,...l})});u.displayName="Button";var p=r(7605),f=r(2173),m=r(4033);let g=[{accessorKey:"address",header:"Address",cell:e=>{var t;let{row:r}=e;return(0,a.jsx)(i(),{className:"underline",href:"/property-details/".concat(null!==(t=r.original.zpid)&&void 0!==t?t:""),target:"_blank",children:r.original.address})}},{accessorKey:"propertyType",header:"Type"},{accessorKey:"listingStatus",header:"Status"},{accessorKey:"price",header:"Price"},{id:"actions",cell:e=>{let{row:t,column:r,table:o}=e,i=t.original.isFavorite,n=(0,m.usePathname)();(0,m.useRouter)();let[l,d]=(0,s.useState)(i);(0,s.useEffect)(()=>{d(i)},[i]);let c=async()=>{var e,a;"/items"===n?null===(e=o.options.meta)||void 0===e||e.deleteData(t.index):(d(!l),null===(a=o.options.meta)||void 0===a||a.updateData(t.index,r.id,!l));try{t.original.isFavorite=!l,await f.Z.post("/api/properties",t.original)}catch(e){console.error("something went wrong")}};return(0,a.jsx)(u,{variant:"outline",size:"icon",className:"h-8 w-8 p-0",onClick:()=>c(),children:l?(0,a.jsx)(p.Z,{fill:"red",strokeWidth:0}):(0,a.jsx)(p.Z,{})})}}]},8978:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(7437),o=r(2265),i=r(2173),s=r(5925),n=r(1657),l=r(5639),d=r(7934),c=r(3212);let u=e=>{let{data:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex items-center justify-between pt-5",children:(0,a.jsx)("h2",{className:"font-bold",children:"Total Results (".concat(t.length,")")})}),(0,a.jsx)(d.Z,{}),(0,a.jsx)("div",{className:"pt-5 overflow-auto max-h-96",children:(0,a.jsx)(c.w,{columns:l.z,sourcedata:t,searchKey:""})})]})};var p=r(6691),f=r.n(p),m=r(5601);r.n(m)();var g=()=>{let[e,t]=(0,o.useState)(!1),[r,l]=(0,o.useState)(""),[d,c]=(0,o.useState)([]),[p,m]=(0,o.useState)([]),g=(0,o.useRef)(null),h=async()=>{try{let e=(await i.Z.request({method:"GET",url:"https://zillow-com1.p.rapidapi.com/propertyExtendedSearch",params:{location:r,home_type:"Houses"},headers:{"X-RapidAPI-Key":"c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90","X-RapidAPI-Host":"zillow-com1.p.rapidapi.com"}})).data.props.map(e=>({zpid:e.zpid,propertyType:"SINGLE_FAMILY"===e.propertyType?"Single Family":e.listingStatus,address:e.address,price:n.z.format(e.price||0),listingStatus:e.listingStatus,livingArea:e.livingArea?e.livingArea.toString():"",isFavorite:!!p.includes(e.zpid)}));c(e),e.length>0&&g.current&&g.current.scrollIntoView({behavior:"smooth"})}catch(e){s.ZP.error("No Results Found!")}},b=async()=>{let e=await fetch("/api/properties");if(!e.ok){console.error("Failed to fetch");return}m((await e.json()).map(e=>e.zpid))};return((0,o.useEffect)(()=>{t(!0),b()},[]),e)?(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{backgroundColor:"#b24c43",padding:"50px 20px",textAlign:"center"},children:[(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,a.jsx)(f(),{src:"/images/banner.png",alt:"ROIPro Banner",width:400,height:60,layout:"intrinsic"})}),(0,a.jsxs)("div",{style:{position:"relative",maxWidth:"500px",margin:"20px auto"},children:[(0,a.jsx)("input",{type:"text",placeholder:"Search location",style:{width:"100%",padding:"10px",borderRadius:"5px",border:"1px solid #ddd",color:"#000",marginBottom:"10px"},value:r,onChange:e=>l(e.target.value),onKeyDown:e=>"Enter"===e.key&&h()}),(0,a.jsx)("button",{onClick:h,style:{position:"absolute",top:"0",right:"0",padding:"10px",border:"none",borderRadius:"0 5px 5px 0",backgroundColor:"white",color:"#b24c43",cursor:"pointer"},children:"\uD83D\uDD0D"})]})]}),(0,a.jsxs)("div",{ref:g,style:{padding:"40px 20px",backgroundColor:"white",color:"black",textAlign:"center",fontFamily:"Optima, sans-serif"},children:[(0,a.jsx)("h2",{style:{fontSize:"2rem",marginBottom:"10px"},children:"The smartest way to invest in real estate"}),(0,a.jsx)("p",{style:{fontSize:"1rem"},children:"Access all of your property information at the click of a button."})]}),(0,a.jsx)(u,{data:d})]}):null}},3212:function(e,t,r){"use strict";r.d(t,{w:function(){return m}});var a=r(7437),o=r(2265),i=r(3216),s=r(7660),n=r(1657);let l=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,n.cn)("w-full caption-bottom text-sm",r),...o})})});l.displayName="Table";let d=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("thead",{ref:t,className:(0,n.cn)("[&_tr]:border-b",r),...o})});d.displayName="TableHeader";let c=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,n.cn)("[&_tr:last-child]:border-0",r),...o})});c.displayName="TableBody",o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...o})}).displayName="TableFooter";let u=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("tr",{ref:t,className:(0,n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...o})});u.displayName="TableRow";let p=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("th",{ref:t,className:(0,n.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...o})});p.displayName="TableHead";let f=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("td",{ref:t,className:(0,n.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...o})});function m(e){var t;let{columns:r,sourcedata:n,searchKey:m}=e,[g,h]=o.useState(n);o.useEffect(()=>{h(n)},[n]);let b=(0,i.b7)({data:g,columns:r,getCoreRowModel:(0,s.sC)(),getFilteredRowModel:(0,s.vL)(),meta:{updateData:(e,t,r)=>{h(a=>a.map((o,i)=>i===e?{...a[e],[t]:r}:o))},deleteData:(e,t,r)=>{h(t=>t.filter((t,r)=>e!=r))}}});return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"rounded-md border bg-background",children:(0,a.jsxs)(l,{children:[(0,a.jsx)(d,{children:b.getHeaderGroups().map(e=>(0,a.jsx)(u,{children:e.headers.map(e=>(0,a.jsx)(p,{children:e.isPlaceholder?null:(0,i.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,a.jsx)(c,{children:(null===(t=b.getRowModel().rows)||void 0===t?void 0:t.length)?b.getRowModel().rows.map(e=>(0,a.jsx)(u,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,a.jsx)(f,{children:(0,i.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,a.jsx)(u,{children:(0,a.jsx)(f,{colSpan:r.length,className:"h-24 text-center",children:"No results."})})})]})})})}f.displayName="TableCell",o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("caption",{ref:t,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",r),...o})}).displayName="TableCaption"},7934:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(7437),o=r(2265),i=r(2158),s=r(1657);let n=o.forwardRef((e,t)=>{let{className:r,orientation:o="horizontal",decorative:n=!0,...l}=e;return(0,a.jsx)(i.f,{ref:t,decorative:n,orientation:o,className:(0,s.cn)("shrink-0 bg-border","horizontal"===o?"h-[1px] w-full":"h-full w-[1px]",r),...l})});n.displayName=i.f.displayName},1657:function(e,t,r){"use strict";r.d(t,{cn:function(){return i},z:function(){return s}});var a=r(7042),o=r(4769);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,a.W)(t))}let s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})},5601:function(e,t){"use strict";function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return l},default:function(){return d}});let a=r(1024),o=r(8630),i=r(6184),s=r(1749),n=a._(r(536)),l=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},d=s.Image},6691:function(e,t,r){e.exports=r(7447)},5925:function(e,t,r){"use strict";let a,o;r.d(t,{x7:function(){return eu},ZP:function(){return ep}});var i,s=r(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":a+="f"==i[1]?p(s,i):i+"{"+p(s,"k"==i[1]?"":t)+"}":"object"==typeof s?a+=p(s,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(i,s):i+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+a},f={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},g=(e,t,r,a,o)=>{var i;let s=m(e),n=f[s]||(f[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!f[n]){let t=s!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);f[n]=p(o?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&f.g?f.g:null;return r&&(f.g=f[n]),i=f[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},h=(e,t,r)=>e.reduce((e,a,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let y,x,v,w=b.bind({k:1});function j(e,t){let r=this||{};return function(){let a=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;r.p=Object.assign({theme:x&&x()},n),r.o=/ *go\d+/.test(l),n.className=b.apply(r,a)+(l?" "+l:""),t&&(n.ref=s);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),y(d,n)}return t?t(o):o}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,E=(a=0,()=>(++a).toString()),z=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},S=new Map,C=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),D({type:4,toastId:e})},1e3);S.set(e,t)},_=e=>{let t=S.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&_(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?O(e,{type:1,toast:r}):O(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?C(a):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},P=[],R={toasts:[],pausedAt:void 0},D=e=>{R=O(R,e),P.forEach(e=>{e(R)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},T=(e={})=>{let[t,r]=(0,s.useState)(R);(0,s.useEffect)(()=>(P.push(r),()=>{let e=P.indexOf(r);e>-1&&P.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},I=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),$=e=>(t,r)=>{let a=I(t,e,r);return D({type:2,toast:a}),a.id},F=(e,t)=>$("blank")(e,t);F.error=$("error"),F.success=$("success"),F.loading=$("loading"),F.custom=$("custom"),F.dismiss=e=>{D({type:3,toastId:e})},F.remove=e=>D({type:4,toastId:e}),F.promise=(e,t,r)=>{let a=F.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(F.success(k(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{F.error(k(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var M=(e,t)=>{D({type:1,toast:{id:e,height:t}})},H=()=>{D({type:5,time:Date.now()})},Z=e=>{let{toasts:t,pausedAt:r}=T(e);(0,s.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,s.useCallback)(()=>{r&&D({type:6,time:Date.now()})},[r]),o=(0,s.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:i}=r||{},s=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:H,endPause:a,calculateOffset:o}}},L=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,K=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${K} 0.15s ease-out forwards;
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
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,G=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${G} 1s linear infinite;
`,W=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,q=w`
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
}`,X=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${q} 0.2s ease-out forwards;
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
`,Y=j("div")`
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
`,et=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?s.createElement(ee,null,t):t:"blank"===r?null:s.createElement(J,null,s.createElement(V,{...a}),"loading"!==r&&s.createElement(Y,null,"error"===r?s.createElement(U,{...a}):s.createElement(X,{...a})))},er=e=>`
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
`,ei=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,es=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=z()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(r),ea(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=s.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?es(e.position||t||"top-center",e.visible):{opacity:0},i=s.createElement(et,{toast:e}),n=s.createElement(ei,{...e.ariaProps},k(e.message,e));return s.createElement(eo,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:i,message:n}):s.createElement(s.Fragment,null,i,n))});i=s.createElement,p.p=void 0,y=i,x=void 0,v=void 0;var el=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let i=s.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return s.createElement("div",{ref:i,className:t,style:r},o)},ed=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ec=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:d}=Z(r);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(r=>{let i=r.position||t,n=ed(i,d.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return s.createElement(el,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?ec:"",style:n},"custom"===r.type?k(r.message,r):o?o(r):s.createElement(en,{toast:r,position:i}))}))},ep=F}},function(e){e.O(0,[603,173,142,749,971,938,744],function(){return e(e.s=8073)}),_N_E=e.O()}]);