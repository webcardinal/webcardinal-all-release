import{g as t}from"./p-425ef2b7.js";function n(t,n,e=!1,o=null){const s=new CustomEvent(t,n);e&&(o?o.dispatchEvent(s):document.dispatchEvent(s))}function e(t,n,e){let o=null;for(;t;){if(t.matches(n)){o=t;break}if(e&&t.matches(e))break;t=t.parentElement}return o}function o(t,n,e=1){let o=null;for(;t;){if(t.tagName.toLowerCase()===n&&0==--e){o=t;break}t=t.parentElement}return o}function s(t){let n=t.replace(/[^A-Za-z0-9_-]/g,"-").toLowerCase();return n=n.replace(/(-+){2}/gm,"-"),n=n.replace(/(-+)$/gm,""),n}function i(t,n){const e=s(t),o=n.querySelector("#"+e);if(!o)return;o.scrollIntoView();let i=window.location.href,c="?";-1!==i.indexOf("chapter=")?(i=window.location.href.split("chapter=")[0],i.length>0&&(c=i[i.length-1],i=i.substring(0,i.length-1))):c=i.indexOf("?")>0?"&":"?",window.history.pushState({},"",`${i}${c+"chapter="}${e}`)}function c(t){return t&&"string"==typeof t&&0!==t.length?t.split("").map((t=>t===t.toLowerCase()?t:"-"+t.toLowerCase())).join(""):""}function a(t){if("string"!=typeof t)throw new Error("Invalid model chain");return t.split("@").join("")}function l(t){return t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}))}function r(t,n){const e=document.createElement("style");e.innerHTML=n,t.appendChild(e)}window.cardinal=window.cardinal||{},window.cardinal.oldCustomTheme=window.cardinal.oldCustomTheme||{};const{oldCustomTheme:w}=window.cardinal;w.dependencies=w.dependencies||{},w.imports=w.imports||{},w.appTheme=w.appTheme||null;const{dependencies:u,imports:d}=w,m=/@import.*?["']([^"']+)["'].*?;/g;function f(t){return new Promise(((n,e)=>{fetch(t).then((t=>{if(t.ok)return n(t.text());e({url:t.url,status:t.status,statusText:t.statusText})}))}))}function b(t,n){return!!n&&(n.shadowRoot?t.parentNode===n.shadowRoot.host:b(n,n.parentElement))}function h(){let n=t=>{let n={};t.addEventListener("styleExists",(e=>{e.stopImmediatePropagation(),e.preventDefault();let o=e.detail.componentTag;(0,e.detail.callback)(void 0,n.hasOwnProperty(o),t),n[o]||(n[o]=!0)})),t.addEventListener("componentWasRemoved",(t=>{let e=t.detail.componentTag;n[e]&&delete n[e]}))};return n(document.querySelector("body")),e=>{const{componentWillLoad:o,disconnectedCallback:s}=e;e.componentWillLoad=function(){const e=t(this);if(e&&e.isConnected){let t=t=>{let s="";window&&(window.basePath?s=window.basePath:window.WebCardinal&&window.WebCardinal.basePath&&(s=window.WebCardinal.basePath));let i=e.tagName.toLowerCase(),c=n=>new Promise((e=>{let c=s+"/themes/"+t+"/components/"+i+"/"+i+".css";u[c]||(u[c]=new Promise(((t,n)=>{f(c).then((n=>{t(n)})).catch(n)}))),u[c].then((t=>{var e,o;(e=c,o=t,d[e]||(d[e]=new Promise(((t,n)=>{m.exec(o)?o.replace(m,((e,s)=>{u[s]||(u[s]=f(s)),u[s].then((n=>{t(o.replace(e,n))})).catch(n)})):t(o)}))),d[e]).then((t=>{let e=document.createElement("style");e.innerHTML=t,n.append(e)}))})).catch((t=>{console.log(`Request on resource ${t.url} ended with status: ${t.status} (${t.statusText})`)})).finally((()=>{e(o&&o.call(this))}))}));return e.shadowRoot?(n(e),c(e.shadowRoot)):new Promise(e.isConnected?t=>{let n=b(e,e.parentElement);e.isSlotted=n;let s=new CustomEvent("styleExists",{bubbles:!0,cancelable:!0,composed:!0,detail:{callback:(e,s,i)=>{e?console.log(e):s?t(o&&o.call(this)):(n||(i=i.shadowRoot),c(i).then((()=>{t()})))},componentTag:n?"SLOTTED:"+i:i}});e.dispatchEvent(s)}:t=>{t(o&&o.call(this))})};return w.appTheme?t(w.appTheme):new Promise((n=>{let o=new CustomEvent("getThemeConfig",{bubbles:!0,cancelable:!0,composed:!0,detail:(e,o)=>{if(e)return console.log(e);w.appTheme=o,t(w.appTheme).then((()=>{n()}))}});e.dispatchEvent(o)}))}return o&&o.call(this)},e.disconnectedCallback=function(){const n=t(this);let e=n.tagName.toLowerCase();n.isSlotted&&(e="SLOTTED:"+e);let o=new CustomEvent("componentWasRemoved",{bubbles:!0,cancelable:!0,composed:!0,detail:{componentTag:e}});n.dispatchEvent(o),s&&s.call(this)}}}window.cardinal=window.cardinal||{},window.cardinal.customTheme=window.cardinal.customTheme||{THEME:void 0,IMPORTS:{},EVENTS:{GET_THEME:"getThemeConfig",ADD_STYLE:"CustomTheme:add-style",REMOVE_STYLE:"CustomTheme:remove-style"}};const p=window.cardinal.customTheme;async function g(t){let n="";window&&(window.basePath?n=window.basePath:window.WebCardinal&&window.WebCardinal.basePath&&(n=window.WebCardinal.basePath));const e=t.tagName.toLowerCase(),o=t.mode||t.getAttribute("mode")||"default",s=`${n}/themes/${p.THEME}/components/${e}/${e+("default"!==o?"."+o:"")+".css"}`;if(!p.IMPORTS[s]){const[t,n]=await async function(t){try{const n=await function(t,n=null){let e=window.$$;return e&&e.SSAPP_CONTEXT&&e.SSAPP_CONTEXT.BASE_URL&&e.SSAPP_CONTEXT.SEED&&0!==t.indexOf(e.SSAPP_CONTEXT.BASE_URL)&&0!==t.indexOf("data:image")&&(t=`${e.SSAPP_CONTEXT.BASE_URL}${0===t.indexOf("/")?t.substr(1):t}`),fetch(t,n)}(t);return[!0,await n.text()]}catch(t){return console.log(t),[!1]}}(s);if(!t)return;p.IMPORTS[s]=n}const i=p.IMPORTS[s];t.shadowRoot?(function(t){const n=t.host,e={true:{},false:{}};n.addEventListener(p.EVENTS.ADD_STYLE,(o=>{o.preventDefault(),o.stopImmediatePropagation();const{data:{tag:s,slotted:i},callback:c}=o.detail;e[i][s]||(c(void 0,i?{target:n}:{target:t}),e[i][s]=!0)})),n.addEventListener(p.EVENTS.REMOVE_STYLE,(t=>{t.preventDefault(),t.stopImmediatePropagation();const{data:{tag:n,slotted:o}}=t.detail;e[o][n]=!1}))}(t.shadowRoot),r(t.shadowRoot,i)):(t.isSlotted=function(t){for(;t.parentElement;){if(t.parentElement.shadowRoot)return t.parentElement.shadowRoot.host===t.parentNode;t=t.parentElement}return!1}(t),t.dispatchEvent(new CustomEvent(p.EVENTS.ADD_STYLE,{bubbles:!0,cancelable:!0,composed:!0,detail:{data:{tag:e,slotted:t.isSlotted},callback:async(t,n)=>{if(t)return console.log(t);const{target:e}=n;r(e,i)}}})))}function E(){return n=>{const{componentWillLoad:e,disconnectedCallback:o}=n;n.componentWillLoad=async function(){const n=t(this);return(n||n.isConnected)&&(p.THEME?await g(n):await async function(t,n){t.dispatchEvent(new CustomEvent(p.EVENTS.GET_THEME,{bubbles:!0,cancelable:!0,composed:!0,detail:async(e,o)=>{if(e)return console.log(e);p.THEME=o,await n(t)}}))}(n,g)),e&&e.call(this)},n.disconnectedCallback=async function(){const n=t(this);return n.dispatchEvent(new CustomEvent(p.EVENTS.REMOVE_STYLE,{bubbles:!0,cancelable:!0,composed:!0,detail:{data:{tag:n.tagName.toLowerCase(),slotted:!!n.isSlotted}}})),o&&o.call(this)}}}window.cardinal=window.cardinal||{},window.cardinal.controllers=window.cardinal.controllers||{},window.cardinal.pendingControllerRequests=window.cardinal.pendingControllerRequests||{};export{h as C,E as a,c as b,n as c,l as d,s as e,o as f,e as g,a as n,i as s}