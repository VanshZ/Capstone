(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{1918:function(e,t,a){Promise.resolve().then(a.bind(a,97))},6864:function(e,t,a){"use strict";a.r(t);var r=a(7437),s=a(2265);a(8251);let o=e=>{let{name:t,label:a,value:s,onChange:o,placeholder:n,error:i}=e;return(0,r.jsxs)("div",{className:"input-field",children:[(0,r.jsx)("label",{htmlFor:t,children:a}),(0,r.jsx)("input",{id:t,name:t,type:"number",min:"0",value:s,placeholder:n,onChange:o,className:"input"}),i&&(0,r.jsx)("p",{className:"error",children:i})]})},n=e=>{let{title:t,children:a}=e,[o,n]=(0,s.useState)(!1);return(0,r.jsxs)("div",{className:"collapsible-section",children:[(0,r.jsxs)("button",{type:"button",onClick:()=>n(!o),className:"section-title",children:[(0,r.jsx)("span",{className:"section-title-text",children:t}),(0,r.jsx)("span",{className:"arrow ".concat(o?"down":"right"),children:">"})]}),(0,r.jsx)("div",{className:"section-content ".concat(o?"open":""),children:o&&a})]})};t.default=e=>{var t;let{property:a}=e,[i,l]=(0,s.useState)({downPaymentPercent:"",closingCost:"",interestRate:"",loanTerm:"",monthlyRent:"",otherIncome:"",propertyTax:"",insurance:"",purchasePrice:(null==a?void 0:null===(t=a.price)||void 0===t?void 0:t.toString())||""}),[c,d]=(0,s.useState)({}),[p,u]=(0,s.useState)({});(0,s.useEffect)(()=>{l(e=>{var t;return{...e,purchasePrice:(null==a?void 0:null===(t=a.price)||void 0===t?void 0:t.toString())||""}})},[a]);let m=e=>{let{name:t,value:a}=e.target;if(!a||isNaN(a)||0>parseFloat(a))d({...c,[t]:"Please enter a valid non-negative number."});else{let e={...c};delete e[t],d(e),l({...i,[t]:a})}};return(0,r.jsxs)("div",{className:"roi-calculator-container",style:{backgroundImage:'url("https://cdn.hero.page/wallpapers/18a03cd1-792b-4690-8278-6f4a026e89fb-hand-drawn-cityscape-monumental-emphasis-wallpaper-4.png")',backgroundSize:"cover",backgroundPosition:"center",minHeight:"100vh",minWidth:"200vh"},children:[(0,r.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),Object.keys(c).length>0){alert("Please correct the errors before submitting.");return}let{downPaymentPercent:t=0,closingCost:a=0,interestRate:r=0,loanTerm:s=0,monthlyRent:o=0,otherIncome:n=0,propertyTax:l=0,insurance:d=0,purchasePrice:p=0}=i,m=parseFloat(t)/100*parseFloat(p),h=parseFloat(p)-m,f=((e,t,a)=>{let r=t/100/12,s=Math.pow(1+r,12*a),o=e*s*r/(s-1);return isFinite(o)?o:0})(h,parseFloat(r),parseFloat(s)),g=(parseFloat(o)+parseFloat(n))*12,x=(parseFloat(l)+parseFloat(d))*12,b=g-x,y=parseFloat(p)>0?b/parseFloat(p)*100:0;u({downPayment:m,loanAmount:h,monthlyMortgage:f,grossOperatingIncome:g,totalOperatingExpenses:x,netOperatingIncome:b,cashFlowBeforeTaxes:b-12*f,capRate:y})},className:"form-container",children:[(0,r.jsxs)(n,{title:"Purchase Details",children:[(0,r.jsx)(o,{name:"purchasePrice",label:"Purchase Price ($)",placeholder:"0",value:i.purchasePrice,onChange:m,error:c.purchasePrice}),(0,r.jsx)(o,{name:"downPaymentPercent",label:"Down Payment (%)",placeholder:"25",value:i.downPaymentPercent,onChange:m,error:c.downPaymentPercent}),(0,r.jsx)(o,{name:"closingCost",label:"Closing Cost ($)",placeholder:"4000",value:i.closingCost,onChange:m,error:c.closingCost})]}),(0,r.jsxs)(n,{title:"Loan Details",children:[(0,r.jsx)(o,{name:"interestRate",label:"Interest Rate (%)",placeholder:"4.0",value:i.interestRate,onChange:m,error:c.interestRate}),(0,r.jsx)(o,{name:"loanTerm",label:"Loan Term (years)",placeholder:"30",value:i.loanTerm,onChange:m,error:c.loanTerm})]}),(0,r.jsxs)(n,{title:"Income",children:[(0,r.jsx)(o,{name:"monthlyRent",label:"Monthly Rent ($)",placeholder:"0",value:i.monthlyRent,onChange:m,error:c.monthlyRent}),(0,r.jsx)(o,{name:"otherIncome",label:"Other Income ($/month)",placeholder:"0",value:i.otherIncome,onChange:m,error:c.otherIncome})]}),(0,r.jsxs)(n,{title:"Expenses",children:[(0,r.jsx)(o,{name:"propertyTax",label:"Property Tax ($/month)",placeholder:"300",value:i.propertyTax,onChange:m,error:c.propertyTax}),(0,r.jsx)(o,{name:"insurance",label:"Insurance ($/month)",placeholder:"100",value:i.insurance,onChange:m,error:c.insurance})]}),(0,r.jsx)("button",{type:"submit",className:"submit-button",children:"Analyze"})]}),Object.keys(p).length>0&&(0,r.jsxs)("div",{className:"results-container",children:[(0,r.jsx)("h2",{children:"Results"}),(0,r.jsxs)("p",{children:["Down Payment: $",p.downPayment.toFixed(2)]}),(0,r.jsxs)("p",{children:["Loan Amount: $",p.loanAmount.toFixed(2)]}),(0,r.jsxs)("p",{children:["Monthly Mortgage: $",p.monthlyMortgage.toFixed(2)]}),(0,r.jsxs)("p",{children:["Gross Operating Income: $",p.grossOperatingIncome.toFixed(2)]}),(0,r.jsxs)("p",{children:["Total Operating Expenses: $",p.totalOperatingExpenses.toFixed(2)]}),(0,r.jsxs)("p",{children:["Net Operating Income: $",p.netOperatingIncome.toFixed(2)]}),(0,r.jsxs)("p",{children:["Cash Flow Before Taxes: $",p.cashFlowBeforeTaxes.toFixed(2)]}),(0,r.jsxs)("p",{children:["CAP Rate: ",p.capRate.toFixed(2),"%"]})]})]})}},97:function(e,t,a){"use strict";a.r(t);var r=a(7437),s=a(2265),o=a(2173),n=a(5925),i=a(4887);a(6531);var l=a(6864);let c=e=>{let{property:t,onClose:a}=e;return i.createPortal((0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50",children:(0,r.jsxs)("div",{className:"roi-calculator-container bg-white rounded-lg overflow-auto max-h-[85%] w-full max-w-[60%] mx-auto",children:[(0,r.jsx)("div",{className:"flex justify-end p-2",children:(0,r.jsx)("button",{onClick:a,className:"text-gray-400 hover:text-gray-500","aria-label":"Close",children:(0,r.jsx)("span",{className:"text-2xl",children:"\xd7"})})}),(0,r.jsx)("div",{className:"form-container p-4",children:(0,r.jsx)(l.default,{property:t})})]})}),document.body)};t.default=e=>{let{params:t}=e,[a,i]=(0,s.useState)(null),[l,d]=(0,s.useState)(0),[p,u]=(0,s.useState)(!1),[m,h]=(0,s.useState)(!1);(0,s.useEffect)(()=>{t.address&&f(t.address)},[t.address]);let f=async e=>{try{let t=await o.Z.request({method:"GET",url:"https://zillow-com1.p.rapidapi.com/property",params:{zpid:e},headers:{"X-RapidAPI-Key":"c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90","X-RapidAPI-Host":"zillow-com1.p.rapidapi.com"}}),a=(await o.Z.request({method:"GET",url:"https://zillow-com1.p.rapidapi.com/images",params:{zpid:e},headers:{"X-RapidAPI-Key":"c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90","X-RapidAPI-Host":"zillow-com1.p.rapidapi.com"}})).data.images||[];i({...t.data,images:a,url:t.data.url})}catch(e){n.ZP.error("Something went wrong!")}};return(0,r.jsx)("div",{className:"container mx-auto px-4 py-8",children:a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-wrap mt-2 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden",children:[(0,r.jsxs)("div",{className:"w-full md:w-3/4 relative",style:{height:"500px"},children:[" ",a.images&&a.images.length>0&&(0,r.jsx)("img",{src:a.images[l],alt:"Property ".concat(l),className:"w-full h-full object-cover rounded-lg"}),a.images&&a.images.length>1&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:()=>{d(e=>{var t;return e>0?e-1:((null==a?void 0:null===(t=a.images)||void 0===t?void 0:t.length)||1)-1})},className:"absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full","aria-label":"Previous image",children:"<"}),(0,r.jsx)("button",{onClick:()=>{d(e=>{var t;return e<((null==a?void 0:null===(t=a.images)||void 0===t?void 0:t.length)||1)-1?e+1:0})},className:"absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full","aria-label":"Next image",children:">"})]})]}),(0,r.jsx)("div",{className:"w-full md:w-3/4 p-4 flex flex-col justify-between",children:(0,r.jsxs)("div",{className:"w-full md:w-3/4 p-4 flex flex-col justify-between",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{className:"text-4xl font-bold",children:["$",a.price?new Intl.NumberFormat("en-US").format(a.price):"N/A"]}),(0,r.jsx)("p",{className:"text-lg mb-4",children:a.address?"".concat(a.address.streetAddress,", ").concat(a.address.city,", ").concat(a.address.state," ").concat(a.address.zipcode):"Address not available"}),a.url&&(0,r.jsx)("a",{href:"https://www.zillow.com/".concat(a.url),target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:text-blue-700",children:"More Info"})]}),(0,r.jsx)("button",{className:"py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700",onClick:()=>h(!0),children:"Analyze"})]}),(0,r.jsxs)("div",{className:"description ".concat(p?"":"line-clamp-15"),children:[" ",a.description||"Description not available"]}),a.description&&(0,r.jsx)("button",{onClick:()=>{u(!p)},className:"text-blue-500 hover:text-blue-700 mt-2",children:p?"Read Less":"Read More"})]})})]}),m&&(0,r.jsx)(c,{property:a,onClose:()=>h(!1)})]}):(0,r.jsx)("p",{children:"Loading property details..."})})}},8251:function(){},6531:function(){},622:function(e,t,a){"use strict";var r=a(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var r,o={},c=null,d=null;for(r in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)n.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},7437:function(e,t,a){"use strict";e.exports=a(622)},5925:function(e,t,a){"use strict";let r,s;a.d(t,{x7:function(){return ep},ZP:function(){return eu}});var o,n=a(2265);let i={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,u=(e,t)=>{let a="",r="",s="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+n+";":r+="f"==o[1]?u(n,o):o+"{"+u(n,"k"==o[1]?"":t)+"}":"object"==typeof n?r+=u(n,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=u.p?u.p(o,n):o+":"+n+";")}return a+(t&&s?t+"{"+s+"}":s)+r},m={},h=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+h(e[a]);return t}return e},f=(e,t,a,r,s)=>{var o;let n=h(e),i=m[n]||(m[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!m[i]){let t=n!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(p," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(p," ").trim();return r[0]})(e);m[i]=u(s?{["@keyframes "+i]:t}:t,a?"":"."+i)}let l=a&&m.g?m.g:null;return a&&(m.g=m[i]),o=m[i],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=r?o+t.data:t.data+o),i},g=(e,t,a)=>e.reduce((e,r,s)=>{let o=t[s];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function x(e){let t=this||{},a=e.call?e(t.p):e;return f(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let b,y,v,w=x.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function s(o,n){let i=Object.assign({},o),l=i.className||s.className;a.p=Object.assign({theme:y&&y()},i),a.o=/ *go\d+/.test(l),i.className=x.apply(a,r)+(l?" "+l:""),t&&(i.ref=n);let c=e;return e[0]&&(c=i.as||e,delete i.as),v&&c[0]&&v(i),b(c,i)}return t?t(s):s}}var N=e=>"function"==typeof e,P=(e,t)=>N(e)?e(t):e,C=(r=0,()=>(++r).toString()),E=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},k=new Map,F=e=>{if(k.has(e))return;let t=setTimeout(()=>{k.delete(e),R({type:4,toastId:e})},1e3);k.set(e,t)},$=e=>{let t=k.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&$(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?O(e,{type:1,toast:a}):O(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?F(r):e.toasts.forEach(e=>{F(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},I=[],_={toasts:[],pausedAt:void 0},R=e=>{_=O(_,e),I.forEach(e=>{e(_)})},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,a]=(0,n.useState)(_);(0,n.useEffect)(()=>(I.push(a),()=>{let e=I.indexOf(a);e>-1&&I.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||T[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},z=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||C()}),A=e=>(t,a)=>{let r=z(t,e,a);return R({type:2,toast:r}),r.id},D=(e,t)=>A("blank")(e,t);D.error=A("error"),D.success=A("success"),D.loading=A("loading"),D.custom=A("custom"),D.dismiss=e=>{R({type:3,toastId:e})},D.remove=e=>R({type:4,toastId:e}),D.promise=(e,t,a)=>{let r=D.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(D.success(P(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{D.error(P(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var M=(e,t)=>{R({type:1,toast:{id:e,height:t}})},L=()=>{R({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:a}=S(e);(0,n.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&D.dismiss(t.id);return}return setTimeout(()=>D.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,n.useCallback)(()=>{a&&R({type:6,time:Date.now()})},[a]),s=(0,n.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:o}=a||{},n=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),i=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<i&&e.visible).length;return n.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:L,endPause:r,calculateOffset:s}}},B=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,X=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
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
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${q} 1s linear infinite;
`,K=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,W=w`
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

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${W} 0.2s ease-out forwards;
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
`,J=j("div")`
  position: absolute;
`,Q=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=w`
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
  animation: ${V} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?n.createElement(ee,null,t):t:"blank"===a?null:n.createElement(Q,null,n.createElement(G,{...r}),"loading"!==a&&n.createElement(J,null,"error"===a?n.createElement(X,{...r}):n.createElement(Y,{...r})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,er=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,es=j("div")`
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
`,eo=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(a),er(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ei=n.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},o=n.createElement(et,{toast:e}),i=n.createElement(eo,{...e.ariaProps},P(e.message,e));return n.createElement(es,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:o,message:i}):n.createElement(n.Fragment,null,o,i))});o=n.createElement,u.p=void 0,b=o,y=void 0,v=void 0;var el=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let o=n.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return n.createElement("div",{ref:o,className:t,style:a},s)},ec=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},ed=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,containerStyle:o,containerClassName:i})=>{let{toasts:l,handlers:c}=H(a);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:i,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let o=a.position||t,i=ec(o,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return n.createElement(el,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?ed:"",style:i},"custom"===a.type?P(a.message,a):s?s(a):n.createElement(ei,{toast:a,position:o}))}))},eu=D}},function(e){e.O(0,[173,971,938,744],function(){return e(e.s=1918)}),_N_E=e.O()}]);