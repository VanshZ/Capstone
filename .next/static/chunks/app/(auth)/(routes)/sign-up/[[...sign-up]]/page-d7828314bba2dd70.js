(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[824,658],{8085:function(n,e,r){"use strict";r.r(e),r.d(e,{ClientClerkProvider:function(){return f}});var t=r(9887),i=r(4033),o=r(2265),u=r(5791);let s="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;var c=r(2601);let l=n=>({...n,frontendApi:n.frontendApi||c.env.NEXT_PUBLIC_CLERK_FRONTEND_API||"",publishableKey:n.publishableKey||"pk_test_YmVsb3ZlZC1tdXNrcmF0LTUyLmNsZXJrLmFjY291bnRzLmRldiQ",clerkJSUrl:n.clerkJSUrl||c.env.NEXT_PUBLIC_CLERK_JS,clerkJSVersion:n.clerkJSVersion||c.env.NEXT_PUBLIC_CLERK_JS_VERSION,proxyUrl:n.proxyUrl||c.env.NEXT_PUBLIC_CLERK_PROXY_URL||"",domain:n.domain||c.env.NEXT_PUBLIC_CLERK_DOMAIN||"",isSatellite:n.isSatellite||"true"===c.env.NEXT_PUBLIC_CLERK_IS_SATELLITE,signInUrl:n.signInUrl||"/sign-in",signUpUrl:n.signUpUrl||"/sign-up",afterSignInUrl:n.afterSignInUrl||"/",afterSignUpUrl:n.afterSignUpUrl||"/",sdkMetadata:{name:"@clerk/nextjs",version:"4.27.6"}}),_=()=>{let{push:n}=(0,i.useRouter)(),e=(0,i.usePathname)()+(0,i.useSearchParams)().toString();return(0,o.useEffect)(()=>{window.__clerk_nav_ref=e=>e===window.location.href.replace(window.location.origin,"")?(n(e),Promise.resolve()):new Promise(r=>{window.__clerk_nav_resolves_ref?window.__clerk_nav_resolves_ref.push(r):window.__clerk_nav_resolves_ref=[r],n(e)})},[e]),(0,o.useEffect)(()=>{window.__clerk_nav_resolves_ref&&window.__clerk_nav_resolves_ref.length&&window.__clerk_nav_resolves_ref.forEach(n=>n()),window.__clerk_nav_resolves_ref=[]}),(0,o.useCallback)(n=>window.__clerk_nav_ref(n),[])},f=n=>{let{__unstable_invokeMiddlewareOnAuthStateChange:e=!0}=n,r=(0,i.useRouter)(),c=_();s(()=>{window.__unstable__onBeforeSetActive=()=>{e&&(r.refresh(),r.push(window.location.href))},window.__unstable__onAfterSetActive=()=>{r.refresh()}},[]);let f=l({...n,navigate:c});return o.createElement(u.f,{options:f},o.createElement(t.El,{...f}))}},3530:function(n,e,r){"use strict";r.r(e),r.d(e,{AuthenticateWithRedirectCallback:function(){return t.vn},ClerkLoaded:function(){return t.a7},ClerkLoading:function(){return t.qI},Experimental__Gate:function(){return t.Pg},MultisessionAppSupport:function(){return t.KM},RedirectToCreateOrganization:function(){return t.gM},RedirectToOrganizationProfile:function(){return t.yB},RedirectToSignIn:function(){return t.N1},RedirectToSignUp:function(){return t.C2},RedirectToUserProfile:function(){return t.sO},SignedIn:function(){return t.CH},SignedOut:function(){return t.tj}});var t=r(9887)},1507:function(n,e,r){"use strict";r.r(e),r.d(e,{EmailLinkErrorCode:function(){return t._L},MagicLinkErrorCode:function(){return t.X1},WithClerk:function(){return t._E},WithSession:function(){return t.CJ},WithUser:function(){return t.Gi},isClerkAPIResponseError:function(){return t.kD},isEmailLinkError:function(){return t.G1},isKnownError:function(){return t.sZ},isMagicLinkError:function(){return t.V9},isMetamaskError:function(){return t.ZC},useAuth:function(){return t.aC},useClerk:function(){return t.ll},useEmailLink:function(){return t.E2},useMagicLink:function(){return t.jS},useOrganization:function(){return t.o8},useOrganizationList:function(){return t.eW},useOrganizations:function(){return t.qi},useSession:function(){return t.kP},useSessionList:function(){return t.xo},useSignIn:function(){return t.zq},useSignUp:function(){return t.QS},useUser:function(){return t.aF},withClerk:function(){return t.r0},withSession:function(){return t.NA},withUser:function(){return t.ns}});var t=r(9887)},5201:function(n,e,r){Promise.resolve().then(r.bind(r,8085)),Promise.resolve().then(r.bind(r,3530)),Promise.resolve().then(r.bind(r,1507)),Promise.resolve().then(r.bind(r,1726))},4033:function(n,e,r){n.exports=r(5313)}},function(n){n.O(0,[791,971,938,744],function(){return n(n.s=5201)}),_N_E=n.O()}]);