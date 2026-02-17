import{r as t,j as n,e as X}from"./components-SUEAusaj.js";import{a as Y,u as q,g as b}from"./ModelContext-CaCSmH9i.js";import{u as oe,S as H}from"./lenis-react-CoU1dRsv.js";import{c as ne}from"./clsx-B-dksMZM.js";import{u as V,a as D,T as L,b as N,W as se,H as ie,L as G,D as ae,F as ue,V as x,c as w,d as le,e as _,S as ce,O as de,P as fe,f as he,M as me,C as ve}from"./react-three-fiber.esm-BDVRc5o5.js";const A=r=>r===Object(r)&&!Array.isArray(r)&&typeof r!="function";function P(r,a){const i=V(e=>e.gl),o=D(L,A(r)?Object.values(r):r);return t.useLayoutEffect(()=>{a==null||a(o)},[a]),t.useEffect(()=>{if("initTexture"in i){let e=[];Array.isArray(o)?e=o:o instanceof N?e=[o]:A(o)&&(e=Object.values(o)),e.forEach(s=>{s instanceof N&&i.initTexture(s)})}},[i,o]),t.useMemo(()=>{if(A(r)){const e={};let s=0;for(const l in r)e[l]=o[s++];return e}else return o},[r,o])}P.preload=r=>D.preload(L,r);P.clear=r=>D.clear(L,r);function I(r,a,i){const o=V(u=>u.size),m=V(u=>u.viewport),e=r,s=typeof a=="number"?a:o.height*m.dpr,l={},{samples:f=0,depth:v,...c}=l,d=t.useMemo(()=>{const u=new se(e,s,{minFilter:G,magFilter:G,type:ie,...c});return v&&(u.depthTexture=new ae(e,s,ue)),u.samples=f,u},[]);return t.useLayoutEffect(()=>{d.setSize(e,s),f&&(d.samples=f)},[f,d,e,s]),t.useEffect(()=>()=>d.dispose(),[]),d}const pe=({imageUrl:r,maskData:a,debug:i=!1,trailColor:o=new w(1,.3,.1)})=>{const m=t.useRef(null),{size:e,viewport:s,gl:l}=V(),f=P(r),[v,c]=t.useState(new x(.5,.5)),[d,u]=t.useState(new x(0,0)),h=t.useRef(new x(.5,.5)),p=t.useRef(new x(0,0)),S=t.useRef(0),T=512,F=Math.round(T/(window.innerWidth/window.innerHeight)),j=I(T,F),W=I(T,F),[C,K]=t.useState(0),R=t.useMemo(()=>({tMap:{value:j.texture},uFalloff:{value:.3*.5},uAlpha:{value:1},uDissipation:{value:.98},uAspect:{value:1},uMouse:{value:v},uVelocity:{value:d}}),[]),y=t.useMemo(()=>({uTexture:{value:f},uFluidTexture:{value:j.texture},uResolution:{value:new x(e.width,e.height)},uStrength:{value:.4},uMaskBounds:{value:new le(0,0,1,1)},uBorderRadius:{value:20},uViewportSize:{value:new x(window.innerWidth,window.innerHeight)},uTrailColor:{value:o},uViewportAspect:{value:window.innerWidth/window.innerHeight}}),[f,j.texture,e.width,e.height,o]),Q=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,Z=`
    precision highp float;
    
    uniform sampler2D tMap;
    uniform float uFalloff;
    uniform float uAlpha;
    uniform float uDissipation;
    uniform float uAspect;
    uniform vec2 uMouse;
    uniform vec2 uVelocity;

    varying vec2 vUv;

    void main() {
      vec4 color = texture2D(tMap, vUv) * uDissipation;

      vec2 cursor = vUv - uMouse;
      cursor.x *= uAspect;

      vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
      float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;

      color.rgb = mix(color.rgb, stamp, vec3(falloff));

      gl_FragColor = color;
    }
  `,$=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,ee=`
    uniform sampler2D uTexture;
    uniform sampler2D uFluidTexture;
    uniform vec2 uResolution;
    uniform float uStrength;
    uniform vec4 uMaskBounds; // x, y, width, height
    uniform float uBorderRadius;
    uniform vec2 uViewportSize;
    uniform vec3 uTrailColor;
    uniform float uViewportAspect;

    varying vec2 vUv;

    // Rounded rectangle distance function
    float roundedBoxSDF(vec2 centerPos, vec2 size, float radius) {
      // Clamp radius to maximum possible for the size
      float maxRadius = min(size.x, size.y);
      radius = min(radius, maxRadius);
      return length(max(abs(centerPos) - size + radius, 0.0)) - radius;
    }

    void main() {
      // Convert UV to screen coordinates
      vec2 screenPos = vUv * uViewportSize;

      // Calculate mask bounds in screen coordinates
      vec2 maskPos = uMaskBounds.xy * uViewportSize;
      vec2 maskSize = uMaskBounds.zw * uViewportSize;

      // Center the position relative to mask
      vec2 centerPos = screenPos - (maskPos + maskSize * 0.5);

      // Calculate distance to rounded rectangle
      float dist = roundedBoxSDF(centerPos, maskSize * 0.5, uBorderRadius);

      // Create smooth mask
      float mask = 1.0 - smoothstep(-1.0, 1.0, dist);

      if (mask < 0.01) {
        discard;
      }

      vec2 uv = vUv;

      // Sample flow data (R,G = velocity from OGL flowmap)
      vec4 flow = texture2D(uFluidTexture, uv);
      vec2 velocity = flow.rg;

      // Create subtle distortion from flow velocity
      vec2 distortion = velocity * uStrength * 0.3;

      // Sample original texture with distortion
      vec4 color = texture2D(uTexture, uv + distortion);

      // Subtle chromatic aberration
      float aberration = length(velocity) * 0.002;
      color.r = texture2D(uTexture, uv + distortion + vec2(aberration, 0.0)).r;
      color.g = texture2D(uTexture, uv + distortion).g;
      color.b = texture2D(uTexture, uv + distortion - vec2(aberration, 0.0)).b;

      // Subtle colored trail
      float velocityMagnitude = length(velocity);
      float glow = velocityMagnitude * 2.0;
      color.rgb = mix(color.rgb, uTrailColor, glow * 0.08);

      // Apply mask with smooth edges
      color.a *= mask;

      gl_FragColor = color;
    }
  `;return t.useEffect(()=>{const M=g=>{const k=new x(g.clientX/window.innerWidth,1-g.clientY/window.innerHeight);c(k)};return window.addEventListener("mousemove",M),()=>window.removeEventListener("mousemove",M)},[]),_(()=>{const M=performance.now(),g=M-S.current;if(g>0&&g<100){const k=v.x-h.current.x,B=v.y-h.current.y,z=new x(k/(g*.001),B/(g*.001));p.current.lerp(z,.2),p.current.length()<.01&&p.current.set(0,0),p.current.clampLength(0,1),u(p.current.clone())}h.current.copy(v),S.current=M}),_(({clock:M,scene:g,camera:k})=>{if(!m.current)return;R.uMouse.value.copy(v),R.uVelocity.value.copy(d),R.uAspect.value=1;const B=C===0?j:W,z=C===0?W:j;R.tMap.value=B.texture;const E=new ce,U=new de(-1,1,1,-1,0,1),O=new fe(2,2),te=new he({uniforms:R,vertexShader:Q,fragmentShader:Z}),re=new me(O,te);E.add(re),l.setRenderTarget(z),l.clear(),l.render(E,U),l.setRenderTarget(null),y.uFluidTexture.value=z.texture,y.uMaskBounds.value.set(a.bounds.x,a.bounds.y,a.bounds.width,a.bounds.height),y.uBorderRadius.value=a.borderRadius,y.uViewportSize.value.set(window.innerWidth,window.innerHeight),y.uViewportAspect.value=window.innerWidth/window.innerHeight,K(1-C)}),n.jsxs(n.Fragment,{children:[n.jsxs("mesh",{ref:m,scale:[s.width,s.height,1],children:[n.jsx("planeGeometry",{args:[1,1]}),n.jsx("shaderMaterial",{uniforms:y,vertexShader:$,fragmentShader:ee,transparent:!0})]}),i&&n.jsxs("mesh",{position:[-s.width*.4,s.height*.4,.1],scale:[.15,.15,1],children:[n.jsx("planeGeometry",{args:[1,1]}),n.jsx("meshBasicMaterial",{map:y.uFluidTexture.value,transparent:!0})]})]})},J=({imageUrl:r,className:a,transformRef:i,debug:o=!1,trailColor:m})=>{const e=Y(),[s,l]=t.useState({bounds:{x:.4,y:0,width:.2,height:1},borderRadius:20});return t.useEffect(()=>{if(!(i!=null&&i.current))return;const f=()=>{const d=i.current;if(!d)return;const u=d.getBoundingClientRect(),h=window.innerWidth,p=window.innerHeight,S=getComputedStyle(d),T=parseFloat(S.borderRadius)||20,F={x:u.left/h,y:1-(u.top+u.height)/p,width:u.width/h,height:u.height/p};l({bounds:F,borderRadius:T})};f();const v=setInterval(f,16),c=()=>requestAnimationFrame(f);return window.addEventListener("scroll",c),window.addEventListener("resize",c),()=>{clearInterval(v),window.removeEventListener("scroll",c),window.removeEventListener("resize",c)}},[i]),n.jsxs("div",{className:a,style:{position:"relative",width:"100%",height:"100%",pointerEvents:"auto",overflow:"hidden"},children:[!e&&n.jsx(ve,{gl:{preserveDrawingBuffer:!0,antialias:!0,alpha:!0},dpr:[1,2],camera:{position:[0,0,1],fov:45},style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:1,pointerEvents:"none"},children:n.jsx(t.Suspense,{fallback:null,children:n.jsx(pe,{imageUrl:r,maskData:s,debug:o,trailColor:m})})}),n.jsx("img",{src:r,alt:"",className:"absolute inset-0 w-full h-full object-cover",style:{zIndex:e?1:0}})]})};typeof window<"u"&&b.registerPlugin(H);function Se({children:r,imageUrl:a="/hero.jpg"}){const i=X(),o=t.useRef(null),m=t.useRef(null),e=t.useRef(null),s=Y(),{model:l}=q(),f=oe();f==null||f.on("scroll",H.update);const v=t.useMemo(()=>{const c=i.pathname;return c.includes("/products/rad")?new w(.737,.8,.196):c.includes("/products/drop")?new w(.898,.91,.816):c.includes("/products/trail")?new w(.482,.384,.561):new w(.6,.6,.6)},[i.pathname]);return t.useEffect(()=>{if(typeof window>"u")return;const c=o.current,d=e.current;if(!c||!d)return;b.fromTo(d,{autoAlpha:0},{autoAlpha:1,duration:5});const u=b.timeline({scrollTrigger:{trigger:d,start:"top top",end:"bottom-=5% bottom",scrub:!0,invalidateOnRefresh:!0,refreshPriority:1}}),h=s?16:28,p=s?108:0;return u.fromTo(c,{borderRadius:"20px",width:()=>window.innerWidth-h,height:()=>window.innerHeight-h-p},{borderRadius:"999px",width:()=>s?(window.innerHeight-h)/3:(window.innerWidth-h)/3,height:()=>s?(window.innerHeight-h)/3:(window.innerWidth-h)/3,ease:"linear.none"}),()=>{H.getAll().forEach(S=>S.kill())}},[s]),t.useEffect(()=>{if(!l||!e.current||!i.pathname.includes("products"))return;b.timeline({scrollTrigger:{trigger:e.current,scrub:!0,markers:!1,onEnter:()=>{b.set(l.position,{y:0})},onEnterBack:()=>{b.set(l.position,{y:0})}}}).set(l.position,{y:0})},[l]),n.jsx("div",{className:"main-hero",children:n.jsxs("div",{ref:e,className:"h-[200vh]",children:[n.jsx("div",{ref:m,id:"main-hero",className:"sticky top-0 left-0 w-full h-screen z-1 flex items-center justify-center",children:n.jsxs("div",{ref:o,className:"overflow-hidden rounded-[20px] w-full h-full relative select-none",children:[n.jsx("div",{className:"absolute z-10 bottom-4 lg:bottom-0 uppercase left-0 right-0 text-center"}),n.jsx(J,{imageUrl:a,className:"overflow-hidden h-full w-full",transformRef:o,debug:!0,trailColor:v})]})}),n.jsx("div",{className:"relative z-10 lg:p-48 pointer-events-none p-2",children:r})]})})}const Me=({imageUrl:r="/hero.jpg"})=>{const{model:a}=q(),i=t.useRef(null),o=X(),m=t.useMemo(()=>{const e=o.pathname;return e.includes("/products/rad")?new w(.737,.8,.196):e.includes("/products/drop")?new w(.898,.91,.816):e.includes("/products/trail")?new w(.482,.384,.561):new w(.6,.6,.6)},[o.pathname]);return t.useEffect(()=>{if(!a||!i.current)return;const e=b.timeline({scrollTrigger:{markers:!1,id:"duplicator",trigger:i.current,start:"top bottom",end:"bottom bottom",scrub:!0}});return e.to(a.position,{y:0}),()=>{e.kill()}},[a,o.pathname]),n.jsx("div",{className:"h-svh w-full flex items-center justify-center z-1 select-none",children:n.jsx("div",{ref:i,className:ne("overflow-hidden rounded-[20px] ","w-[calc(100vw-16px)] h-[calc(100vh-16px-108px)]","lg:w-[calc(100vw-28px)] lg:h-[calc(100vh-28px)]"),children:n.jsx(J,{imageUrl:r,className:"overflow-hidden h-full w-full",transformRef:i,trailColor:m})})})};export{Se as H,Me as a};
