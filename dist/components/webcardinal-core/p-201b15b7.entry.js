import{r as t,c as i,h as s,H as a}from"./p-62bd51c0.js";import{U as e}from"./p-f5c9fd96.js";import{H as o}from"./p-3e8e1274.js";import{g as n}from"./p-8d1ed174.js";import{p as h}from"./p-f8a2682a.js";import"./p-e506992e.js";const r=class{constructor(s){t(this,s),this.getIdentityConfigEvent=i(this,"webcardinal:config:getIdentity",7)}async componentWillLoad(){try{const t=await h(this.getIdentityConfigEvent);this.avatar=t.avatar,this.email=t.email,this.name=t.name}catch(t){console.error(t)}}render(){const t={class:{"has-avatar":!!this.avatar}},i=n(),o=e.join(i.routing.baseURL).pathname;return s(a,Object.assign({},t),this.avatar?s("img",{src:this.avatar,alt:this.name}):null,s("a",{href:o,class:"name"},this.name),this.email?s("a",{href:"mailto:"+this.email,class:"email"},this.email):null)}};r.style={default:":host{display:grid;row-gap:var(--row-gap);place-content:center;justify-content:stretch}:host a{color:var(--color);text-decoration:none}:host>img{border-radius:var(--avatar-radius)}:host>.name{font-size:var(--name-font-size)}:host>.email{font-size:var(--email-font-size)}:host(.has-avatar){grid-template-columns:var(--avatar-width) 1fr;column-gap:var(--column-gap)}:host(.has-avatar)>img{width:100%;grid-column:1/2;grid-row:1/3;align-self:center}:host(.has-avatar)>.email,:host(.has-avatar)>.name{grid-column:2/3}:host(.has-avatar)>.name{align-self:end}"};const{join:c}=e,l=class{constructor(i){t(this,i),this.menuElement=null,this.url=null,this.basePath="",this.item={path:"",children:null},this.level=0,this.name=""}async activate(){if(["vertical","horizontal","mobile"].includes(this.mode)){const t=this.host.getAttribute("url")||"",{pathname:i}=window.location;if(t===i){let t=this.host;for(t.setAttribute("active","");"webc-app-menu"!==t.tagName.toLowerCase();)t.classList.contains("dropdown")&&t.setAttribute("active",""),t=t.parentElement;"mobile"===this.mode&&(t.removeAttribute("visible"),t.removeAttribute("active"))}}}async deactivate(){this.menuElement.querySelectorAll("webc-app-menu-item").forEach((t=>{t.removeAttribute("active"),"horizontal"===this.mode&&"number"==typeof t.level&&0===t.level&&t.firstElementChild.removeAttribute("active")}))}async handleDropdownClick(t){if(t.preventDefault(),t.stopImmediatePropagation(),"vertical"===this.mode){const i=t.currentTarget.parentElement;return await this.deactivate(),void i.toggleAttribute("active")}if("horizontal"!==this.mode){if("mobile"===this.mode){const i=t.currentTarget.parentElement;return await this.deactivate(),void i.toggleAttribute("active")}}else{const i=t.currentTarget.parentElement,s=i.parentElement;"number"==typeof s.level&&0!==s.level&&i.toggleAttribute("active")}}async componentWillLoad(){if(this.url||(this.url=c(this.basePath,this.item.path).pathname),""===this.url&&(this.url="/"),this.item.children){this.children=[];const t={basePath:this.basePath,menuElement:this.menuElement,mode:this.mode,level:this.level+1};this.item.children.forEach((i=>{t.name=i.name,t.item={path:c("",this.item.path,i.path).pathname},i.children&&(t.item.children=i.children),this.children.push(s("webc-app-menu-item",Object.assign({},t)))}))}}async componentDidLoad(){await this.activate()}render(){return this.children?s("div",{class:"dropdown"},s("div",{class:"item",onClick:this.handleDropdownClick.bind(this)},this.name),s("div",{class:"items"},this.children)):s(a,{url:this.url},s("stencil-route-link",{class:"item",url:this.url},this.name))}};!function(t,i,s,a){var e,o=arguments.length,n=o<3?i:null===a?a=Object.getOwnPropertyDescriptor(i,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,s,a);else for(var h=t.length-1;h>=0;h--)(e=t[h])&&(n=(o<3?e(n):o>3?e(i,s,n):e(i,s))||n);o>3&&n&&Object.defineProperty(i,s,n)}([o()],l.prototype,"host",void 0);export{r as webc_app_identity,l as webc_app_menu_item}