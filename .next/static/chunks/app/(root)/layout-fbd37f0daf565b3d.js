(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{8085:function(e,n,r){"use strict";r.r(n),r.d(n,{ClientClerkProvider:function(){return f}});var t=r(9887),i=r(4033),o=r(2265),u=r(5791);let s="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;var c=r(2601);let a=e=>({...e,frontendApi:e.frontendApi||c.env.NEXT_PUBLIC_CLERK_FRONTEND_API||"",publishableKey:e.publishableKey||"pk_test_YmVsb3ZlZC1tdXNrcmF0LTUyLmNsZXJrLmFjY291bnRzLmRldiQ",clerkJSUrl:e.clerkJSUrl||c.env.NEXT_PUBLIC_CLERK_JS,clerkJSVersion:e.clerkJSVersion||c.env.NEXT_PUBLIC_CLERK_JS_VERSION,proxyUrl:e.proxyUrl||c.env.NEXT_PUBLIC_CLERK_PROXY_URL||"",domain:e.domain||c.env.NEXT_PUBLIC_CLERK_DOMAIN||"",isSatellite:e.isSatellite||"true"===c.env.NEXT_PUBLIC_CLERK_IS_SATELLITE,signInUrl:e.signInUrl||"/sign-in",signUpUrl:e.signUpUrl||"/sign-up",afterSignInUrl:e.afterSignInUrl||"/",afterSignUpUrl:e.afterSignUpUrl||"/",sdkMetadata:{name:"@clerk/nextjs",version:"4.27.6"}}),l=()=>{let{push:e}=(0,i.useRouter)(),n=(0,i.usePathname)()+(0,i.useSearchParams)().toString();return(0,o.useEffect)(()=>{window.__clerk_nav_ref=n=>n===window.location.href.replace(window.location.origin,"")?(e(n),Promise.resolve()):new Promise(r=>{window.__clerk_nav_resolves_ref?window.__clerk_nav_resolves_ref.push(r):window.__clerk_nav_resolves_ref=[r],e(n)})},[n]),(0,o.useEffect)(()=>{window.__clerk_nav_resolves_ref&&window.__clerk_nav_resolves_ref.length&&window.__clerk_nav_resolves_ref.forEach(e=>e()),window.__clerk_nav_resolves_ref=[]}),(0,o.useCallback)(e=>window.__clerk_nav_ref(e),[])},f=e=>{let{__unstable_invokeMiddlewareOnAuthStateChange:n=!0}=e,r=(0,i.useRouter)(),c=l();s(()=>{window.__unstable__onBeforeSetActive=()=>{n&&(r.refresh(),r.push(window.location.href))},window.__unstable__onAfterSetActive=()=>{r.refresh()}},[]);let f=a({...e,navigate:c});return o.createElement(u.f,{options:f},o.createElement(t.El,{...f}))}},3530:function(e,n,r){"use strict";r.r(n),r.d(n,{AuthenticateWithRedirectCallback:function(){return t.vn},ClerkLoaded:function(){return t.a7},ClerkLoading:function(){return t.qI},Experimental__Gate:function(){return t.Pg},MultisessionAppSupport:function(){return t.KM},RedirectToCreateOrganization:function(){return t.gM},RedirectToOrganizationProfile:function(){return t.yB},RedirectToSignIn:function(){return t.N1},RedirectToSignUp:function(){return t.C2},RedirectToUserProfile:function(){return t.sO},SignedIn:function(){return t.CH},SignedOut:function(){return t.tj}});var t=r(9887)},1507:function(e,n,r){"use strict";r.r(n),r.d(n,{EmailLinkErrorCode:function(){return t._L},MagicLinkErrorCode:function(){return t.X1},WithClerk:function(){return t._E},WithSession:function(){return t.CJ},WithUser:function(){return t.Gi},isClerkAPIResponseError:function(){return t.kD},isEmailLinkError:function(){return t.G1},isKnownError:function(){return t.sZ},isMagicLinkError:function(){return t.V9},isMetamaskError:function(){return t.ZC},useAuth:function(){return t.aC},useClerk:function(){return t.ll},useEmailLink:function(){return t.E2},useMagicLink:function(){return t.jS},useOrganization:function(){return t.o8},useOrganizationList:function(){return t.eW},useOrganizations:function(){return t.qi},useSession:function(){return t.kP},useSessionList:function(){return t.xo},useSignIn:function(){return t.zq},useSignUp:function(){return t.QS},useUser:function(){return t.aF},withClerk:function(){return t.r0},withSession:function(){return t.NA},withUser:function(){return t.ns}});var t=r(9887)},6606:function(e,n,r){Promise.resolve().then(r.bind(r,7186)),Promise.resolve().then(r.bind(r,8085)),Promise.resolve().then(r.bind(r,3530)),Promise.resolve().then(r.bind(r,1507)),Promise.resolve().then(r.bind(r,1726))},7186:function(e,n,r){"use strict";r.r(n),r.d(n,{MainNav:function(){return c}});var t=r(7437),i=r(1657),o=r(1396),u=r.n(o),s=r(4033);function c(e){let{className:n,...r}=e,o=(0,s.usePathname)();return(0,t.jsxs)("nav",{className:(0,i.cn)("flex items-center space-x-4 lg:space-x-30",n),...r,children:[(0,t.jsx)("img",{src:"/images/ifslogo.png",alt:"Logo",className:"h-8 mr-5"})," ",(0,t.jsx)("div",{className:"flex-grow",children:[{href:"/",label:"ROIPro",active:"/"===o},{href:"/items",label:"Portfolio",active:"/items"===o},{href:"/dashboard",label:"Dashboard",active:"/dashboard"===o},{href:"/contact",label:"Contact Us",active:"/contact"===o}].map(e=>(0,t.jsx)(u(),{href:e.href,className:(0,i.cn)("text-sm font-medium transition-colors hover:text-primary ml-4",e.active?"text-black dark:text-white":"text-muted-foreground"),children:e.label},e.href))})]})}r(2265)},1657:function(e,n,r){"use strict";r.d(n,{cn:function(){return o},z:function(){return u}});var t=r(7042),i=r(4769);function o(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,i.m6)((0,t.W)(n))}let u=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}},function(e){e.O(0,[791,932,971,938,744],function(){return e(e.s=6606)}),_N_E=e.O()}]);