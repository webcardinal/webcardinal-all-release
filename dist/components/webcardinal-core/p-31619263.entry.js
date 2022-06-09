import{r as t,h as s,g as e,a as o,c as i}from"./p-bb51835b.js";import{m as n,a,s as r,b as h,c,d as l,e as u,f as p,g as d,h as g,i as f,j as w,k as m,l as b,n as y,o as P,p as j}from"./p-9b6a9315.js";import{A as v}from"./p-3934984c.js";import{p as k}from"./p-c5d3a17a.js";import{g as O}from"./p-8d1ed174.js";import{U as T,P as R,G as S}from"./p-f5c9fd96.js";import{H as L}from"./p-5e0464e4.js";import{C as U}from"./p-0c675925.js";import{p as H}from"./p-f8a2682a.js";import"./p-e506992e.js";const M=class{constructor(s){t(this,s),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const s=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!s)return this.previousMatch=this.match,this.match=n(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!a(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?s(this.component,Object.assign({},t)):void 0}get el(){return e(this)}static get watchers(){return{location:["computeMatch"]}}};v.injectProps(M,["location","history","historyType","routeViewsUpdated"]),M.style="stencil-route.inactive{display:none}";const C=t=>"STENCIL-ROUTE"===t.tagName,A=class{constructor(s){t(this,s),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=o(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let s=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(C).map(((e,o)=>{const i=n(t.pathname,{path:e.url,exact:e.exact,strict:!0});return i&&-1===s&&(s=o),{el:e,match:i}})),-1===s)return;if(this.activeIndex===s)return void(this.subscribers[s].el.match=this.subscribers[s].match);this.activeIndex=s;const e=this.subscribers[this.activeIndex];this.scrollTopOffset&&(e.el.scrollTopOffset=this.scrollTopOffset),e.el.group=this.group,e.el.match=e.match,e.el.componentUpdated=t=>{this.queue.write((()=>{this.subscribers.forEach(((t,s)=>{if(t.el.componentUpdated=void 0,s===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"}))})),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return s("slot",null)}get el(){return e(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};v.injectProps(A,["location","routeViewsUpdated"]);const E=(t,...s)=>{t||console.warn(...s)},x=()=>{let t,s=[];return{setPrompt:s=>(E(null==t,"A history supports only one prompt at a time"),t=s,()=>{t===s&&(t=null)}),confirmTransitionTo:(s,e,o,i)=>{if(null!=t){const n="function"==typeof t?t(s,e):t;"string"==typeof n?"function"==typeof o?o(n,i):(E(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==n)}else i(!0)},appendListener:t=>{let e=!0;const o=(...s)=>{e&&t(...s)};return s.push(o),()=>{e=!1,s=s.filter((t=>t!==o))}},notifyListeners:(...t)=>{s.forEach((s=>s(...t)))}}},$=(t,s="scrollPositions")=>{let e=new Map;const o=(s,o)=>{if(e.set(s,o),r(t,"sessionStorage")){const s=[];e.forEach(((t,e)=>{s.push([e,t])})),t.sessionStorage.setItem("scrollPositions",JSON.stringify(s))}};if(r(t,"sessionStorage")){const o=t.sessionStorage.getItem(s);e=o?new Map(JSON.parse(o)):e}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:o,get:t=>e.get(t),has:t=>e.has(t),capture:s=>{o(s,[t.scrollX,t.scrollY])}}},_={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+P(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:P,decodePath:u},slash:{encodePath:u,decodePath:u}},B=(t,s)=>{const e=0==t.pathname.indexOf(s)?"/"+t.pathname.slice(s.length):t.pathname;return Object.assign({},t,{pathname:e})},F={browser:(t,s={})=>{let e=!1;const o=t.history,i=t.location,n=t.navigator,a=h(t),r=!c(n),y=$(t),P=null!=s.forceRefresh&&s.forceRefresh,j=null!=s.getUserConfirmation?s.getUserConfirmation:m,v=null!=s.keyLength?s.keyLength:6,k=s.basename?l(u(s.basename)):"",O=()=>{try{return t.history.state||{}}catch(t){return{}}},T=t=>{t=t||{};const{key:s,state:e}=t,{pathname:o,search:n,hash:a}=i;let r=o+n+a;return E(!k||g(r,k),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+r+'" to begin with "'+k+'".'),k&&(r=f(r,k)),p(r,e,s||d(v))},R=x(),S=t=>{y.capture(N.location.key),Object.assign(N,t),N.location.scrollPosition=y.get(N.location.key),N.length=o.length,R.notifyListeners(N.location,N.action)},L=t=>{b(n,t)||H(T(t.state))},U=()=>{H(T(O()))},H=t=>{if(e)e=!1,S();else{const s="POP";R.confirmTransitionTo(t,s,j,(e=>{e?S({action:s,location:t}):M(t)}))}},M=t=>{let s=A.indexOf(N.location.key),o=A.indexOf(t.key);-1===s&&(s=0),-1===o&&(o=0);const i=s-o;i&&(e=!0,W(i))},C=T(O());let A=[C.key],_=0,B=!1;const F=t=>k+w(t),W=t=>{o.go(t)},Y=s=>{_+=s,1===_?(t.addEventListener("popstate",L),r&&t.addEventListener("hashchange",U)):0===_&&(t.removeEventListener("popstate",L),r&&t.removeEventListener("hashchange",U))},N={length:o.length,action:"POP",location:C,createHref:F,push:(t,s)=>{E(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const e="PUSH",n=p(t,s,d(v),N.location);R.confirmTransitionTo(n,e,j,(t=>{if(!t)return;const s=F(n),{key:r,state:h}=n;if(a)if(o.pushState({key:r,state:h},"",s),P)i.href=s;else{const t=A.indexOf(N.location.key),s=A.slice(0,-1===t?0:t+1);s.push(n.key),A=s,S({action:e,location:n})}else E(void 0===h,"Browser history cannot push state in browsers that do not support HTML5 history"),i.href=s}))},replace:(t,s)=>{E(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const e="REPLACE",n=p(t,s,d(v),N.location);R.confirmTransitionTo(n,e,j,(t=>{if(!t)return;const s=F(n),{key:r,state:h}=n;if(a)if(o.replaceState({key:r,state:h},"",s),P)i.replace(s);else{const t=A.indexOf(N.location.key);-1!==t&&(A[t]=n.key),S({action:e,location:n})}else E(void 0===h,"Browser history cannot replace state in browsers that do not support HTML5 history"),i.replace(s)}))},go:W,goBack:()=>W(-1),goForward:()=>W(1),block:(t="")=>{const s=R.setPrompt(t);return B||(Y(1),B=!0),()=>(B&&(B=!1,Y(-1)),s())},listen:t=>{const s=R.appendListener(t);return Y(1),()=>{Y(-1),s()}},win:t};return N},hash:(t,s={})=>{let e=!1,o=null,i=0,n=!1;const a=t.location,r=t.history,h=y(t.navigator),c=null!=s.keyLength?s.keyLength:6,{getUserConfirmation:b=m,hashType:P="slash"}=s,v=s.basename?l(u(s.basename)):"",{encodePath:k,decodePath:O}=_[P],T=()=>{const t=a.href,s=t.indexOf("#");return-1===s?"":t.substring(s+1)},R=t=>{const s=a.href.indexOf("#");a.replace(a.href.slice(0,s>=0?s:0)+"#"+t)},S=()=>{let t=O(T());return E(!v||g(t,v),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+v+'".'),v&&(t=f(t,v)),p(t,void 0,d(c))},L=x(),U=t=>{Object.assign(N,t),N.length=r.length,L.notifyListeners(N.location,N.action)},H=()=>{const t=T(),s=k(t);if(t!==s)R(s);else{const t=S(),s=N.location;if(!e&&j(s,t))return;if(o===w(t))return;o=null,M(t)}},M=t=>{if(e)e=!1,U();else{const s="POP";L.confirmTransitionTo(t,s,b,(e=>{e?U({action:s,location:t}):C(t)}))}},C=t=>{let s=F.lastIndexOf(w(N.location)),o=F.lastIndexOf(w(t));-1===s&&(s=0),-1===o&&(o=0);const i=s-o;i&&(e=!0,W(i))},A=T(),$=k(A);A!==$&&R($);const B=S();let F=[w(B)];const W=t=>{E(h,"Hash history go(n) causes a full page reload in this browser"),r.go(t)},Y=(t,s)=>{i+=s,1===i?t.addEventListener("hashchange",H):0===i&&t.removeEventListener("hashchange",H)},N={length:r.length,action:"POP",location:B,createHref:t=>"#"+k(v+w(t)),push:(t,s)=>{E(void 0===s,"Hash history cannot push state; it is ignored");const e="PUSH",i=p(t,void 0,d(c),N.location);L.confirmTransitionTo(i,e,b,(t=>{if(!t)return;const s=w(i),n=k(v+s);if(T()!==n){o=s,(t=>{a.hash=t})(n);const t=F.lastIndexOf(w(N.location)),r=F.slice(0,-1===t?0:t+1);r.push(s),F=r,U({action:e,location:i})}else E(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),U()}))},replace:(t,s)=>{E(void 0===s,"Hash history cannot replace state; it is ignored");const e="REPLACE",i=p(t,void 0,d(c),N.location);L.confirmTransitionTo(i,e,b,(t=>{if(!t)return;const s=w(i),n=k(v+s);T()!==n&&(o=s,R(n));const a=F.indexOf(w(N.location));-1!==a&&(F[a]=s),U({action:e,location:i})}))},go:W,goBack:()=>W(-1),goForward:()=>W(1),block:(s="")=>{const e=L.setPrompt(s);return n||(Y(t,1),n=!0),()=>(n&&(n=!1,Y(t,-1)),e())},listen:s=>{const e=L.appendListener(s);return Y(t,1),()=>{Y(t,-1),e()}},win:t};return N}},W=class{constructor(s){t(this,s),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const s=this.history.win.document.getElementById(t.scrollToId);if(s)return s.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=o(this,"isServer"),this.queue=o(this,"queue")}componentWillLoad(){this.history=F[this.historyType](this.el.ownerDocument.defaultView),this.history.listen((t=>{t=B(t,this.root),this.location=t})),this.location=B(this.history.location,this.root)}scrollTo(t){const s=this.history;if(null!=t&&!this.isServer&&s)return"POP"===s.action&&Array.isArray(s.location.scrollPosition)?this.queue.write((()=>{s&&s.location&&Array.isArray(s.location.scrollPosition)&&s.win.scrollTo(s.location.scrollPosition[0],s.location.scrollPosition[1])})):this.queue.write((()=>{s.win.scrollTo(0,t)}))}render(){if(this.location&&this.history)return s(v.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},s("slot",null))}get el(){return e(this)}};const{join:Y,trimEnd:N}=T;function V(){return window.$$&&window.$$.SSAPP_CONTEXT&&window.$$.SSAPP_CONTEXT.BASE_URL}const q=class{constructor(e){t(this,e),this.getRoutingConfigEvent=i(this,"webcardinal:config:getRouting",7),this.landingPage=null,this.routes=[],this.basePath="",this.tags={},this.content=[],this.mapping={},this._renderRoute=({path:t,src:e,loader:o,skin:i,tag:n})=>{const a={url:Y(this.basePath,t).pathname,exact:!0,component:"webc-app-loader",componentProps:{src:e,loader:o,skin:i,basePath:this.basePath,saveState:!0}};if(n&&(a.componentProps.tag=n),V()){const t=O(),s=T.join(t.routing.baseURL).pathname;a.url===s&&window.history.replaceState(void 0,"SSApp-Webc Application",s)}return s("stencil-route",Object.assign({"data-type":"page"},a))},this._renderRoutes=(t=[],{path:s,src:e}={path:"",src:""},o=this._renderRoute)=>Array.isArray(t)&&0!==t.length?t.map((t=>{const i={path:Y("",s,t.path).pathname,src:Y("",e,t.src).pathname,skin:"none"};if(t.children)return this._renderRoutes(t.children,i);{""===i.path&&(i.path="/"),i.src=t.src.startsWith("http")?t.src:"."+Y(R,i.src).pathname;const s=Y(this.basePath,i.path).pathname;return this.mapping[s]=i.src.replace(this.pagesPathRegExp,""),t.tag&&(this.tags[t.tag]=i.path,i.tag=t.tag),t.loader&&(i.loader=t.loader),o(i)}})):null,this._renderFallback=t=>{if(!t||!t.src)return null;const e={component:"webc-app-loader",componentProps:{src:"."+Y(R,t.src).pathname,loader:t.loader||"default",skin:"none",basePath:this.basePath,saveState:!0,isFallbackPage:!0}};return t.tag&&(this.tags[t.tag]="#",e.componentProps.tag=t.tag),s("stencil-route",Object.assign({"data-type":"fallback"},e))},this.manageLandingPage=()=>{if(window&&window.frameElement&&window.frameElement.hasAttribute("landing-page")&&(this.landingPage=window.frameElement.getAttribute("landing-page")),this.landingPage){if(V()){const t=new URL(window.$$.SSAPP_CONTEXT.BASE_URL).pathname;this.landingPage=`${t}${0===this.landingPage.indexOf("/")?this.landingPage.substring(1):this.landingPage}`}const t={url:window.location.pathname,exact:!0,component:"webc-app-redirect",componentProps:{url:this.landingPage}};this.content.push(s("stencil-route",Object.assign({"data-type":"landing"},t)))}}}manageHooks(){if(!window.WebCardinal.hooks)return;const t=window.WebCardinal.hooks;for(const s of[S.BEFORE_PAGE,S.AFTER_PAGE])for(const e of Object.keys(t[s]||[]))this.tags[e]||(console.warn([`"addHook(tag: string, when: whenType, hook: Function)": tag "${e}" does not belong to any page`,"The hook can not be called for any page, the hook is removed!"].join("\n")),delete t[e])}async componentWillLoad(){if(this.host.isConnected)try{const t=await H(this.getRoutingConfigEvent);this.routes=t.pages,this.fallbackPage=t.pagesFallback,this.basePath=N(new URL(t.baseURL).pathname),this.pagesPathRegExp=new RegExp(`^(${R.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`),this.manageLandingPage(),this.content.push(this._renderRoutes(this.routes),this._renderFallback(this.fallbackPage)),this.manageHooks(),this.listeners=new U(this.host,{tags:this.tags,routing:{basePath:this.basePath,mapping:this.mapping},model:k({}),translationModel:k({}),chain:""});const{getModel:s,getTranslationModel:e,getTags:o,getRouting:i,getParentChain:n}=this.listeners;null==s||s.add(),null==e||e.add(),null==o||o.add(),null==i||i.add(),null==n||n.add()}catch(t){console.error(t)}}async connectedCallback(){if(this.listeners){const{getModel:t,getTranslationModel:s,getTags:e,getRouting:o,getParentChain:i}=this.listeners;null==t||t.add(),null==s||s.add(),null==e||e.add(),null==o||o.add(),null==i||i.add()}}async disconnectedCallback(){if(this.listeners){const{getModel:t,getTranslationModel:s,getTags:e,getRouting:o,getParentChain:i}=this.listeners;null==t||t.remove(),null==s||s.remove(),null==e||e.remove(),null==o||o.remove(),null==i||i.remove()}}render(){return s("stencil-router",{root:"/"},s("stencil-route-switch",{scrollTopOffset:0},...this.content))}};!function(t,s,e,o){var i,n=arguments.length,a=n<3?s:null===o?o=Object.getOwnPropertyDescriptor(s,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,s,e,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(a=(n<3?i(a):n>3?i(s,e,a):i(s,e))||a);n>3&&a&&Object.defineProperty(s,e,a)}([L()],q.prototype,"host",void 0);export{M as stencil_route,A as stencil_route_switch,W as stencil_router,q as webc_app_router}