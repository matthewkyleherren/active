import{E as p,i as v,g as R,h as C,m as h,s as M,k as g,l as y,n as E,o as S,p as b,r as o,q as F,R as P,t as k,v as D,w as z,j as H}from"./components-SUEAusaj.js";import{c as L}from"./client-BNJkvL7O.js";/**
 * @remix-run/react v2.16.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O(u){if(!u)return null;let m=Object.entries(u),s={};for(let[a,e]of m)if(e&&e.__type==="RouteErrorResponse")s[a]=new p(e.status,e.statusText,e.data,e.internal===!0);else if(e&&e.__type==="Error"){if(e.__subType){let i=window[e.__subType];if(typeof i=="function")try{let r=new i(e.message);r.stack=e.stack,s[a]=r}catch{}}if(s[a]==null){let i=new Error(e.message);i.stack=e.stack,s[a]=i}}else s[a]=e;return s}/**
 * @remix-run/react v2.16.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let n,t,c=!1,f;new Promise(u=>{f=u}).catch(()=>{});function T(u){if(!t){if(window.__remixContext.future.v3_singleFetch){if(!n){let l=window.__remixContext.stream;v(l,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,n=R(l,window).then(d=>{window.__remixContext.state=d.value,n.value=!0}).catch(d=>{n.error=d})}if(n.error)throw n.error;if(!n.value)throw n}let i=C(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),r;if(!window.__remixContext.isSpaMode){r={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let l=h(i,window.location,window.__remixContext.basename);if(l)for(let d of l){let _=d.route.id,x=window.__remixRouteModules[_],w=window.__remixManifest.routes[_];x&&M(w,x,window.__remixContext.isSpaMode)&&(x.HydrateFallback||!w.hasLoader)?r.loaderData[_]=void 0:w&&!w.hasLoader&&(r.loaderData[_]=null)}r&&r.errors&&(r.errors=O(r.errors))}t=g({routes:i,history:S(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,v7_skipActionErrorRevalidation:window.__remixContext.future.v3_singleFetch===!0},hydrationData:r,mapRouteProperties:z,dataStrategy:window.__remixContext.future.v3_singleFetch&&!window.__remixContext.isSpaMode?E(window.__remixManifest,window.__remixRouteModules,()=>t):void 0,patchRoutesOnNavigation:y(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename)}),t.state.initialized&&(c=!0,t.initialize()),t.createRoutesForHMR=b,window.__remixRouter=t,f&&f(t)}let[m,s]=o.useState(void 0),[a,e]=o.useState(t.state.location);return o.useLayoutEffect(()=>{c||(c=!0,t.initialize())},[]),o.useLayoutEffect(()=>t.subscribe(i=>{i.location!==a&&e(i.location)}),[a]),F(t,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),o.createElement(o.Fragment,null,o.createElement(P.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:m,isSpaMode:window.__remixContext.isSpaMode}},o.createElement(k,{location:a},o.createElement(D,{router:t,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.v3_singleFetch?o.createElement(o.Fragment,null):null)}window.location.origin.includes("webcache.googleusercontent.com")||o.startTransition(()=>{L.hydrateRoot(document,H.jsx(T,{}))});
