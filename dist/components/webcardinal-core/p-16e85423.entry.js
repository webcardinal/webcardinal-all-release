import{r as t,c as o,h as e}from"./p-bb51835b.js";import{i as a}from"./p-9b22281c.js";import{W as i,N as s,X as n,M as r,U as l,V as d,d as c,R as h}from"./p-f5c9fd96.js";import{H as m}from"./p-5e0464e4.js";import{C as b}from"./p-0c675925.js";import{C as p}from"./p-c8e4972a.js";import"./p-e506992e.js";import{B as f}from"./p-3842b566.js";import"./p-3934984c.js";import"./p-8d1ed174.js";const u={},{join:w}=l;const g=class{constructor(e){t(this,e),this.initialised=o(this,"initialised",7),this.confirmed=o(this,"confirmed",7),this.closed=o(this,"closed",7),this.isLoading=!1,this.isVisible=!1,this.cancelButtonText="Close",this.confirmButtonText="Ok",this.expanded=!1,this.centered=!0,this.autoShow=!0,this.disableClosing=!1,this.disableBackdropClosing=!0,this.disableExpanding=!1,this.disableFooter=!1,this.disableCancelButton=!1}async componentWillLoad(){if(this.host.isConnected){if(this.autoShow&&(this.isVisible=!0),this.template&&(this.isLoading=!0,this.host.innerHTML=await(async t=>{const{basePath:o}=window.WebCardinal,e=i();if(u[e]||(u[e]={}),u[e][t])return u[e][t];let[a,l]=await s(w(o,n(),r,t).pathname);return a?"default"===e?"":(u.default||(u.default={}),u.default[t]?u.default[t]:([a,l]=await s(w(o,r,t).pathname),a?"":(u.default[t]=l,l))):(u[e][t]=l,l)})(this.template),this.isLoading=!1),this.controller){const t=await p.getController(this.controller);if(t)try{this.host.setAttribute(d,c),this.controllerInstance=new t(this.host,this.history,this.model,this.translationModel),this.model||(this.model=this.controllerInstance.model),this.translationModel||(this.translationModel=this.controllerInstance.translationModel)}catch(t){console.error(t)}}f.bindChildNodes(this.host,{model:this.model,translationModel:this.translationModel,recursive:!0,enableTranslations:h()}),this.listeners=new b(this.host,{model:this.model,translationModel:this.translationModel}),this.listeners.getModel.add(),this.listeners.getTranslationModel.add(),this.addDataListeners(),this.initialised.emit(this.host)}}async connectedCallback(){if(this.listeners){const{getModel:t,getTranslationModel:o}=this.listeners;null==t||t.add(),null==o||o.add()}}async disconnectedCallback(){var t;if(this.listeners){const{getModel:t,getTranslationModel:o}=this.listeners;null==t||t.remove(),null==o||o.remove()}null===(t=this.controllerInstance)||void 0===t||t.disconnectedCallback()}async show(){this.isVisible=!0}async hide(){this.isVisible=!1}async destroy(){this.host.remove()}handleBackdropClick(t){this.disableClosing||this.disableBackdropClosing||t.target!==t.currentTarget||(t.preventDefault(),t.stopImmediatePropagation(),this.closed.emit(!1))}handleClose(t){t.preventDefault(),t.stopImmediatePropagation(),this.closed.emit(!0)}handleConfirm(t){t.preventDefault(),t.stopImmediatePropagation(),this.confirmed.emit({modal:this.host,event:t})}handleExpand(t){t.preventDefault(),t.stopImmediatePropagation(),this.expanded=!this.expanded}hasSlot(t){return!!this.host.querySelector(`[slot="${t}"]`)}addDataListeners(){const t=this.host.querySelectorAll("[data-close]"),o=this.host.querySelectorAll("[data-confirm]");t&&t.forEach((t=>t.addEventListener("click",this.handleClose.bind(this)))),o&&o.forEach((t=>t.addEventListener("click",this.handleConfirm.bind(this))))}getTitleContent(){if(this.hasSlot("header"))return e("slot",{name:"header"});const t=[];return this.modalTitle&&t.push(e("h2",{class:"modal-title"},this.modalTitle)),this.modalDescription&&t.push(e("p",{class:"modal-description"},this.modalDescription)),t}getFooterContent(){return this.hasSlot("footer")?e("slot",{name:"footer"}):this.modalFooter?e("div",{innerHTML:this.modalFooter}):[!this.disableCancelButton&&e("button",{type:"button",class:"cancel",part:"cancel",onClick:this.handleClose.bind(this)},this.cancelButtonText),e("button",{type:"button",class:"confirm",part:"confirm",onClick:this.handleConfirm.bind(this)},this.confirmButtonText)]}render(){return this.isVisible?e("div",{part:"position",class:"webc-modal fade show",tabindex:"-1",role:"dialog",onClick:this.handleBackdropClick.bind(this)},e("div",{class:`webc-modal-dialog ${this.centered?"centered":""} `,role:"document",part:"dialog"},e("div",{class:"webc-modal-content",part:"content"},e("section",{class:"header",part:"header"},e("div",{class:"header-content"},this.getTitleContent()),e("div",{class:"header-actions"},!this.disableExpanding&&e("button",{type:"button",class:"expand",part:"expand","aria-label":"Expand",onClick:this.handleExpand.bind(this)}),!this.disableClosing&&e("button",{type:"button",class:"close",part:"close","data-dismiss":"modal","aria-label":"Close",onClick:this.handleClose.bind(this)}))),this.isLoading?e("section",{class:"body",part:"main"},e("webc-spinner",null)):[e("section",{class:"body",part:"main"},e("slot",null),this.modalContent?e("div",{class:"content"},this.modalContent):null),!this.disableFooter&&e("section",{class:"footer",part:"footer"},this.getFooterContent())]))):null}};(function(t,o,e,a){var i,s=arguments.length,n=s<3?o:null===a?a=Object.getOwnPropertyDescriptor(o,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,o,e,a);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(n=(s<3?i(n):s>3?i(o,e,n):i(o,e))||n);s>3&&n&&Object.defineProperty(o,e,n)})([m()],g.prototype,"host",void 0),a(g),g.style={default:'@charset "UTF-8";:host{display:block;visibility:visible}:host button{cursor:pointer}:host .webc-modal{position:fixed;overflow:hidden;top:0;left:0;outline:0;width:100%;height:100%;z-index:var(--z-index);background:var(--backdrop-background);filter:var(--backdrop-filter)}:host .webc-modal .webc-modal-dialog{position:relative;width:var(--width);margin:var(--margin);pointer-events:none}:host .webc-modal .webc-modal-dialog.centered{display:flex;align-items:center;min-height:calc(100% - var(--margin) * 2)}:host .webc-modal.fade .webc-modal-dialog{transition:transform 0.3s ease-out;transform:translate(0, -50px)}:host .webc-modal.show .webc-modal-dialog{transform:none}:host .webc-modal.modal-static .webc-modal-dialog{transform:scale(1.02)}:host .webc-modal-dialog-scrollable{height:calc(100% - var(--margin) * 2)}:host .webc-modal-dialog-scrollable .webc-modal-content{max-height:100%;overflow:hidden}:host .webc-modal-dialog-scrollable .webc-modal-body{overflow-y:auto}:host .webc-modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--margin) * 2)}:host .webc-modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--color);pointer-events:auto;background-color:var(--background);background-clip:padding-box;box-shadow:var(--shadow);outline:0;border-radius:var(--radius)}:host .webc-modal-content .header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:var(--padding);border-bottom:var(--header-border)}:host .webc-modal-content .header>.header-content{display:flex;flex-direction:column;gap:0.45rem}:host .webc-modal-content .header>.header-actions{display:flex;gap:0.3rem}:host .webc-modal-content .header>.header-actions button{font-size:1.05rem;width:1.8rem;height:1.8rem;display:flex;place-items:center;place-content:center;border:none;border-radius:var(--header-button-radius);color:var(--header-button-color);background:var(--header-button-background)}:host .webc-modal-content .header>.header-actions button.expand:after{content:"↕";display:inline-block;transform:rotateZ(45deg)}:host .webc-modal-content .header>.header-actions button.close:after{content:"✕";display:inline-block}:host .webc-modal-content .header .modal-title,:host .webc-modal-content .header .modal-description{margin:0;padding:0}:host .webc-modal-content .header .modal-title{color:var(--title-color)}:host .webc-modal-content .header .modal-description{color:var(--description-color)}:host .webc-modal-content .body{position:relative;flex:1 1 auto;padding:var(--padding);min-height:50px;color:var(--color)}:host .webc-modal-content .footer{display:flex;flex-wrap:wrap;flex-shrink:0;align-items:center;justify-content:var(--footer-align);padding:var(--padding);border-top:var(--footer-border);gap:0.75rem}:host .webc-modal-content .footer button{border-radius:var(--footer-button-radius);padding:0.5rem 1.1rem;border:none;font-size:1rem}:host .webc-modal-content .footer button.cancel{color:var(--cancel-button-color);background-color:var(--cancel-button-background)}:host .webc-modal-content .footer button.confirm{color:var(--confirm-button-color);background-color:var(--confirm-button-background)}@media (min-width: 500px){:host .webc-modal-dialog{max-width:var(--max-width);margin:1.75rem auto}}:host([expanded]) .webc-modal-dialog{display:grid !important;max-width:100%}:host([expanded]) .webc-modal-dialog .webc-modal-content{height:100%}'};export{g as webc_modal}