import{g as e}from"./p-986eab93.js";import{c as t}from"./p-4c63894e.js";import{b as n,c as s,d as i,e as o}from"./p-44f1d892.js";function r(r){return function(c,l){const{connectedCallback:f,componentWillLoad:a,componentDidLoad:d,render:u}=c;let b="psk-send-events",p=i,m=n,j="definedEvents";c.componentWillLoad=function(){let t=e(this);if(!t.hasAttribute(n)&&!t.hasAttribute(s))return a&&a.call(this)},c.componentDidLoad=function(){let t=e(this);if(!t.hasAttribute(n)&&!t.hasAttribute(s))return d&&d.call(this)},c.connectedCallback=function(){let t=this,n=e(t);if(r.controllerInteraction&&(m=s,j="definedControllers",p=o,b="psk-send-controllers"),n.hasAttribute(m)){if(!t.componentDefinitions)return t.componentDefinitions={},t.componentDefinitions[j]=[Object.assign(Object.assign({},r),{eventName:String(l)})],f&&f.call(t);let e=t.componentDefinitions;const n=Object.assign(Object.assign({},r),{eventName:String(l)});if(e&&e.hasOwnProperty(p)){let t=[...e[p]];t.push(n),e[p]=[...t]}else e[p]=[n];t.componentDefinitions=Object.assign({},e)}return f&&f.call(t)},c.render=function(){let e=this;if(!e.componentDefinitions||!e.componentDefinitions||!e.componentDefinitions[p])return u&&u.call(e);let n=e.componentDefinitions[p];n&&(n=n.reverse()),t(b,{composed:!0,bubbles:!0,cancelable:!0,detail:n},!0)}}}export{r as T}