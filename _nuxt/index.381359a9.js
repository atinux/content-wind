import{r as _,a5 as W,u as R,a6 as $,a7 as D,a3 as F,f as J,a4 as U,Q as L,a1 as S}from"./entry.7d514228.js";var P;const h=typeof window<"u",j=e=>typeof e<"u",G=e=>typeof e=="function",H=e=>typeof e=="string",V=()=>{},q=h&&((P=window==null?void 0:window.navigator)==null?void 0:P.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function E(e){return typeof e=="function"?e():R(e)}function K(e){return e}function B(e){return $()?(D(e),!0):!1}function k(e,t=!0){F()?J(e):t?e():U(e)}function z(e,t,o={}){const{immediate:a=!0}=o,l=_(!1);let c=null;function m(){c&&(clearTimeout(c),c=null)}function r(){l.value=!1,m()}function p(...v){m(),l.value=!0,c=setTimeout(()=>{l.value=!1,c=null,e(...v)},E(t))}return a&&(l.value=!0,h&&p()),B(r),{isPending:W(l),start:p,stop:r}}function g(e){var t;const o=E(e);return(t=o==null?void 0:o.$el)!=null?t:o}const M=h?window:void 0,X=h?window.navigator:void 0;function b(...e){let t,o,a,l;if(H(e[0])||Array.isArray(e[0])?([o,a,l]=e,t=M):[t,o,a,l]=e,!t)return V;Array.isArray(o)||(o=[o]),Array.isArray(a)||(a=[a]);const c=[],m=()=>{c.forEach(d=>d()),c.length=0},r=(d,y,n,u)=>(d.addEventListener(y,n,u),()=>d.removeEventListener(y,n,u)),p=S(()=>[g(t),E(l)],([d,y])=>{m(),d&&c.push(...o.flatMap(n=>a.map(u=>r(d,n,u,y))))},{immediate:!0,flush:"post"}),v=()=>{p(),m()};return B(v),v}let C=!1;function re(e,t,o={}){const{window:a=M,ignore:l=[],capture:c=!0,detectIframe:m=!1}=o;if(!a)return;q&&!C&&(C=!0,Array.from(a.document.body.children).forEach(n=>n.addEventListener("click",V)));let r=!0;const p=n=>l.some(u=>{if(typeof u=="string")return Array.from(a.document.querySelectorAll(u)).some(f=>f===n.target||n.composedPath().includes(f));{const f=g(u);return f&&(n.target===f||n.composedPath().includes(f))}}),d=[b(a,"click",n=>{const u=g(e);if(!(!u||u===n.target||n.composedPath().includes(u))){if(n.detail===0&&(r=!p(n)),!r){r=!0;return}t(n)}},{passive:!0,capture:c}),b(a,"pointerdown",n=>{const u=g(e);u&&(r=!n.composedPath().includes(u)&&!p(n))},{passive:!0}),m&&b(a,"blur",n=>{var u;const f=g(e);((u=a.document.activeElement)==null?void 0:u.tagName)==="IFRAME"&&!(f!=null&&f.contains(a.document.activeElement))&&t(n)})].filter(Boolean);return()=>d.forEach(n=>n())}function Y(e,t=!1){const o=_(),a=()=>o.value=!!e();return a(),k(a,t),o}function se(e={}){const{navigator:t=X,read:o=!1,source:a,copiedDuring:l=1500,legacy:c=!1}=e,m=["copy","cut"],r=Y(()=>t&&"clipboard"in t),p=L(()=>r.value||c),v=_(""),d=_(!1),y=z(()=>d.value=!1,l);function n(){r.value?t.clipboard.readText().then(s=>{v.value=s}):v.value=w()}if(p.value&&o)for(const s of m)b(s,n);async function u(s=E(a)){p.value&&s!=null&&(r.value?await t.clipboard.writeText(s):f(s),v.value=s,d.value=!0,y.start())}function f(s){const i=document.createElement("textarea");i.value=s??"",i.style.position="absolute",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),i.remove()}function w(){var s,i,O;return(O=(i=(s=document==null?void 0:document.getSelection)==null?void 0:s.call(document))==null?void 0:i.toString())!=null?O:""}return{isSupported:p,text:v,copied:d,copy:u}}function Z(e){return JSON.parse(JSON.stringify(e))}const x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";x[T]=x[T]||{};var A;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(A||(A={}));var ee=Object.defineProperty,N=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,Q=(e,t,o)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,oe=(e,t)=>{for(var o in t||(t={}))te.call(t,o)&&Q(e,o,t[o]);if(N)for(var o of N(t))ne.call(t,o)&&Q(e,o,t[o]);return e};const ae={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};oe({linear:K},ae);function ie(e,t,o,a={}){var l,c,m;const{clone:r=!1,passive:p=!1,eventName:v,deep:d=!1,defaultValue:y}=a,n=F(),u=o||(n==null?void 0:n.emit)||((l=n==null?void 0:n.$emit)==null?void 0:l.bind(n))||((m=(c=n==null?void 0:n.proxy)==null?void 0:c.$emit)==null?void 0:m.bind(n==null?void 0:n.proxy));let f=v;t||(t="modelValue"),f=v||f||`update:${t.toString()}`;const w=i=>r?G(r)?r(i):Z(i):i,s=()=>j(e[t])?w(e[t]):y;if(p){const i=s(),O=_(i);return S(()=>e[t],I=>O.value=w(I)),S(O,I=>{(I!==e[t]||d)&&u(f,I)},{deep:d}),O}else return L({get(){return s()},set(i){u(f,i)}})}export{ie as a,re as o,se as u};
