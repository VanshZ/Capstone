(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8085:function(e,t,r){"use strict";r.r(t),r.d(t,{ClientClerkProvider:function(){return d}});var n=r(9887),i=r(4033),o=r(2265),a=r(5791);let s="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;var u=r(2601);let l=e=>({...e,frontendApi:e.frontendApi||u.env.NEXT_PUBLIC_CLERK_FRONTEND_API||"",publishableKey:e.publishableKey||"pk_test_YmVsb3ZlZC1tdXNrcmF0LTUyLmNsZXJrLmFjY291bnRzLmRldiQ",clerkJSUrl:e.clerkJSUrl||u.env.NEXT_PUBLIC_CLERK_JS,clerkJSVersion:e.clerkJSVersion||u.env.NEXT_PUBLIC_CLERK_JS_VERSION,proxyUrl:e.proxyUrl||u.env.NEXT_PUBLIC_CLERK_PROXY_URL||"",domain:e.domain||u.env.NEXT_PUBLIC_CLERK_DOMAIN||"",isSatellite:e.isSatellite||"true"===u.env.NEXT_PUBLIC_CLERK_IS_SATELLITE,signInUrl:e.signInUrl||"/sign-in",signUpUrl:e.signUpUrl||"/sign-up",afterSignInUrl:e.afterSignInUrl||"/",afterSignUpUrl:e.afterSignUpUrl||"/",sdkMetadata:{name:"@clerk/nextjs",version:"4.27.6"}}),c=()=>{let{push:e}=(0,i.useRouter)(),t=(0,i.usePathname)()+(0,i.useSearchParams)().toString();return(0,o.useEffect)(()=>{window.__clerk_nav_ref=t=>t===window.location.href.replace(window.location.origin,"")?(e(t),Promise.resolve()):new Promise(r=>{window.__clerk_nav_resolves_ref?window.__clerk_nav_resolves_ref.push(r):window.__clerk_nav_resolves_ref=[r],e(t)})},[t]),(0,o.useEffect)(()=>{window.__clerk_nav_resolves_ref&&window.__clerk_nav_resolves_ref.length&&window.__clerk_nav_resolves_ref.forEach(e=>e()),window.__clerk_nav_resolves_ref=[]}),(0,o.useCallback)(e=>window.__clerk_nav_ref(e),[])},d=e=>{let{__unstable_invokeMiddlewareOnAuthStateChange:t=!0}=e,r=(0,i.useRouter)(),u=c();s(()=>{window.__unstable__onBeforeSetActive=()=>{t&&(r.refresh(),r.push(window.location.href))},window.__unstable__onAfterSetActive=()=>{r.refresh()}},[]);let d=l({...e,navigate:u});return o.createElement(a.f,{options:d},o.createElement(n.El,{...d}))}},5791:function(e,t,r){"use strict";r.d(t,{f:function(){return a},k:function(){return o}});var n=r(2265);let i=n.createContext(void 0);i.displayName="ClerkNextOptionsCtx";let o=()=>n.useContext(i).value,a=e=>{let{children:t,options:r}=e;return n.createElement(i.Provider,{value:{value:r}},t)}},3530:function(e,t,r){"use strict";r.r(t),r.d(t,{AuthenticateWithRedirectCallback:function(){return n.vn},ClerkLoaded:function(){return n.a7},ClerkLoading:function(){return n.qI},Experimental__Gate:function(){return n.Pg},MultisessionAppSupport:function(){return n.KM},RedirectToCreateOrganization:function(){return n.gM},RedirectToOrganizationProfile:function(){return n.yB},RedirectToSignIn:function(){return n.N1},RedirectToSignUp:function(){return n.C2},RedirectToUserProfile:function(){return n.sO},SignedIn:function(){return n.CH},SignedOut:function(){return n.tj}});var n=r(9887)},1507:function(e,t,r){"use strict";r.r(t),r.d(t,{EmailLinkErrorCode:function(){return n._L},MagicLinkErrorCode:function(){return n.X1},WithClerk:function(){return n._E},WithSession:function(){return n.CJ},WithUser:function(){return n.Gi},isClerkAPIResponseError:function(){return n.kD},isEmailLinkError:function(){return n.G1},isKnownError:function(){return n.sZ},isMagicLinkError:function(){return n.V9},isMetamaskError:function(){return n.ZC},useAuth:function(){return n.aC},useClerk:function(){return n.ll},useEmailLink:function(){return n.E2},useMagicLink:function(){return n.jS},useOrganization:function(){return n.o8},useOrganizationList:function(){return n.eW},useOrganizations:function(){return n.qi},useSession:function(){return n.kP},useSessionList:function(){return n.xo},useSignIn:function(){return n.zq},useSignUp:function(){return n.QS},useUser:function(){return n.aF},withClerk:function(){return n.r0},withSession:function(){return n.NA},withUser:function(){return n.ns}});var n=r(9887)},1726:function(e,t,r){"use strict";r.r(t),r.d(t,{CreateOrganization:function(){return n.Gp},OrganizationList:function(){return n.Bg},OrganizationProfile:function(){return n.A},OrganizationSwitcher:function(){return n.Li},SignIn:function(){return a},SignInButton:function(){return n.$d},SignInWithMetamaskButton:function(){return n.qu},SignOutButton:function(){return n.AM},SignUp:function(){return s},SignUpButton:function(){return n.gX},UserButton:function(){return n.l8},UserProfile:function(){return n.Iw}});var n=r(9887),i=r(2265),o=r(5791);let a=e=>{let{signInUrl:t}=(0,o.k)();return t?i.createElement(n.cL,{routing:"path",path:t,...e}):i.createElement(n.cL,{...e})},s=e=>{let{signUpUrl:t}=(0,o.k)();return t?i.createElement(n.Mo,{routing:"path",path:t,...e}):i.createElement(n.Mo,{...e})}},2601:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(8960)},1344:function(e,t,r){Promise.resolve().then(r.t.bind(r,2445,23)),Promise.resolve().then(r.bind(r,8085)),Promise.resolve().then(r.bind(r,3530)),Promise.resolve().then(r.bind(r,1507)),Promise.resolve().then(r.bind(r,1726)),Promise.resolve().then(r.t.bind(r,6087,23)),Promise.resolve().then(r.bind(r,7402))},7402:function(e,t,r){"use strict";r.r(t),r.d(t,{ToasterProvider:function(){return o}});var n=r(7437),i=r(5925);let o=()=>(0,n.jsx)(i.x7,{})},2445:function(){},6087:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},8960:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u=[],l=!1,c=-1;function d(){l&&n&&(l=!1,n.length?u=n.concat(u):c=-1,u.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||l||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},a=!0;try{t[e](o,o.exports,n),a=!1}finally{a&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},622:function(e,t,r){"use strict";var n=r(2265),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:c,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(5313)},5925:function(e,t,r){"use strict";let n,i;r.d(t,{x7:function(){return ed},ZP:function(){return ef}});var o,a=r(2265);let s={data:""},u=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,f=(e,t)=>{let r="",n="",i="";for(let o in e){let a=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+a+";":n+="f"==o[1]?f(a,o):o+"{"+f(a,"k"==o[1]?"":t)+"}":"object"==typeof a?n+=f(a,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=a&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=f.p?f.p(o,a):o+":"+a+";")}return r+(t&&i?t+"{"+i+"}":i)+n},p={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},g=(e,t,r,n,i)=>{var o;let a=m(e),s=p[a]||(p[a]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(a));if(!p[s]){let t=a!==e?e:(e=>{let t,r,n=[{}];for(;t=l.exec(e.replace(c,""));)t[4]?n.shift():t[3]?(r=t[3].replace(d," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(d," ").trim();return n[0]})(e);p[s]=f(i?{["@keyframes "+s]:t}:t,r?"":"."+s)}let u=r&&p.g?p.g:null;return r&&(p.g=p[s]),o=p[s],u?t.data=t.data.replace(u,o):-1===t.data.indexOf(o)&&(t.data=n?o+t.data:t.data+o),s},h=(e,t,r)=>e.reduce((e,n,i)=>{let o=t[i];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+n+(null==o?"":o)},"");function v(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,u(t.target),t.g,t.o,t.k)}v.bind({g:1});let y,_,b,w=v.bind({k:1});function x(e,t){let r=this||{};return function(){let n=arguments;function i(o,a){let s=Object.assign({},o),u=s.className||i.className;r.p=Object.assign({theme:_&&_()},s),r.o=/ *go\d+/.test(u),s.className=v.apply(r,n)+(u?" "+u:""),t&&(s.ref=a);let l=e;return e[0]&&(l=s.as||e,delete s.as),b&&l[0]&&b(s),y(l,s)}return t?t(i):i}}var E=e=>"function"==typeof e,k=(e,t)=>E(e)?e(t):e,C=(n=0,()=>(++n).toString()),S=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},L=new Map,P=e=>{if(L.has(e))return;let t=setTimeout(()=>{L.delete(e),N({type:4,toastId:e})},1e3);L.set(e,t)},T=e=>{let t=L.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&T(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?O(e,{type:1,toast:r}):O(e,{type:0,toast:r});case 3:let{toastId:n}=t;return n?P(n):e.toasts.forEach(e=>{P(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},U=[],I={toasts:[],pausedAt:void 0},N=e=>{I=O(I,e),U.forEach(e=>{e(I)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(e={})=>{let[t,r]=(0,a.useState)(I);(0,a.useEffect)(()=>(U.push(r),()=>{let e=U.indexOf(r);e>-1&&U.splice(e,1)}),[t]);let n=t.toasts.map(t=>{var r,n;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}});return{...t,toasts:n}},$=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),j=e=>(t,r)=>{let n=$(t,e,r);return N({type:2,toast:n}),n.id},z=(e,t)=>j("blank")(e,t);z.error=j("error"),z.success=j("success"),z.loading=j("loading"),z.custom=j("custom"),z.dismiss=e=>{N({type:3,toastId:e})},z.remove=e=>N({type:4,toastId:e}),z.promise=(e,t,r)=>{let n=z.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(z.success(k(t.success,e),{id:n,...r,...null==r?void 0:r.success}),e)).catch(e=>{z.error(k(t.error,e),{id:n,...r,...null==r?void 0:r.error})}),e};var M=(e,t)=>{N({type:1,toast:{id:e,height:t}})},B=()=>{N({type:5,time:Date.now()})},D=e=>{let{toasts:t,pausedAt:r}=R(e);(0,a.useEffect)(()=>{if(r)return;let e=Date.now(),n=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&z.dismiss(t.id);return}return setTimeout(()=>z.dismiss(t.id),r)});return()=>{n.forEach(e=>e&&clearTimeout(e))}},[t,r]);let n=(0,a.useCallback)(()=>{r&&N({type:6,time:Date.now()})},[r]),i=(0,a.useCallback)((e,r)=>{let{reverseOrder:n=!1,gutter:i=8,defaultPosition:o}=r||{},a=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=a.findIndex(t=>t.id===e.id),u=a.filter((e,t)=>t<s&&e.visible).length;return a.filter(e=>e.visible).slice(...n?[u+1]:[0,u]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:B,endPause:n,calculateOffset:i}}},F=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,X=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,J=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${X} 0.15s ease-out forwards;
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
    animation: ${K} 0.15s ease-out forwards;
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
`,Z=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,H=w`
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
}`,V=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,Y=x("div")`
  position: absolute;
`,G=x("div")`
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
}`,ee=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?a.createElement(ee,null,t):t:"blank"===r?null:a.createElement(G,null,a.createElement(Z,{...n}),"loading"!==r&&a.createElement(Y,null,"error"===r?a.createElement(J,{...n}):a.createElement(V,{...n})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,en=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=x("div")`
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
`,eo=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ea=(e,t)=>{let r=e.includes("top")?1:-1,[n,i]=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(r),en(r)];return{animation:t?`${w(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},es=a.memo(({toast:e,position:t,style:r,children:n})=>{let i=e.height?ea(e.position||t||"top-center",e.visible):{opacity:0},o=a.createElement(et,{toast:e}),s=a.createElement(eo,{...e.ariaProps},k(e.message,e));return a.createElement(ei,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof n?n({icon:o,message:s}):a.createElement(a.Fragment,null,o,s))});o=a.createElement,f.p=void 0,y=o,_=void 0,b=void 0;var eu=({id:e,className:t,style:r,onHeightUpdate:n,children:i})=>{let o=a.useCallback(t=>{if(t){let r=()=>{n(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return a.createElement("div",{ref:o,className:t,style:r},i)},el=(e,t)=>{let r=e.includes("top"),n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...n}},ec=v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ed=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:u,handlers:l}=D(r);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},u.map(r=>{let o=r.position||t,s=el(o,l.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t}));return a.createElement(eu,{id:r.id,key:r.id,onHeightUpdate:l.updateHeight,className:r.visible?ec:"",style:s},"custom"===r.type?k(r.message,r):i?i(r):a.createElement(es,{toast:r,position:o}))}))},ef=z}},function(e){e.O(0,[887,971,938,744],function(){return e(e.s=1344)}),_N_E=e.O()}]);