var b=Object.defineProperty;var y=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var v=(t,n,e)=>n in t?b(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,g=(t,n)=>{for(var e in n||(n={}))w.call(n,e)&&v(t,e,n[e]);if(y)for(var e of y(n))j.call(n,e)&&v(t,e,n[e]);return t};import{o as i,c as a,a as r,t as d,w as u,v as m,r as C,b as I,d as S,e as B,f as A,g as x}from"./vendor.9bcc3178.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}};O();var $="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABICAYAAABLJIP0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATcSURBVHgB7ZyxbhtHEIZn9o4GHDVMkSJAinORWhQgCTSQxGTHkupSJDD1BM4bSOxSWg8QmEIewKwCBgjgU2LEB9GAz70BnYEgSMnOCXncyeyRYiSZinaPFMHb9QcYPEvHk/bXzu7szC8h3BLVF9Ug9UtND2GTJNYIoYwAZVgBBDDgr5XwVSIBTtJ01I3vR4nJMxCWzM7ply1+6kMErMF6ERPRUX/3t47OzUsTZrv/RU2QeMJPDGCdQUhIUvsmgRYWpvKqVi6l8oAf9B0UCA63xyNftOOtcDDv8wsJU3lRC+748qm6hCLCs2c4GtbnrT+5hclE8eSztQ+dm7hGnFzCqPC5M5KvCi/Kf8RDX9QvhpWAHKg1xSJRFJVsTBcwnjFqO0bEJ2AhEmT95c7zUF0bzxjOTw7AUgSK2Q/cSJhp8haArRAE2RjBUBgOoUdgO5y1T140meYsZ+AAvpcG2jPGx3ETHGE89Pa0hfE88QBcwYdNbWEIKABHIK4MGAhj8W50FYKytjCrKjKtCeVcRwIXMAmlAbjDQD+UCJ0RhidBYhBKdAKOgBLeagsjJcXgCEgU6me+5HXBEZBGXW1hovthgkAhWA6vL3HEZU6j7VoSHIPtcO9JvRhX8HZPvzqztibDhfHT7V/vqUvjBE+i3AdLUY2482tjYVRNlPvQR2AZakwXu5O5jgQjTxzyiz3bN4fQxmRMM3IJo/ovIhV7vIQnUHRYFMENt/BKqzb3IVJt32Is6gUXJ1aiRHNatAudrpU4w5LYKuKao77nj7j7GF3jm1maDSRrxKmeUwFsIJLk/nlj7frblsy0U6naLGvlgCCVtXOCunLj0FWq3G5J/XGTY5WL6Bio0uhKrWbE/wSFY4LXfjrqRrdtNas2vg5SKjURxSb/t0ZcH0Vc0YCzwULCZYGE+8wnKXrduNdJ4BbQFman8W2L12rVpavBOoGcT5E86vd+7MASuVGY7cY3NQRPNbsDWG8SPrC0lyXQtcJUaq1y6S4dcMAWylvHI3o8eoftOOwsVIqdK0yl0QpKSE9ZlGJ663j2jADri6w/7wmTiQL0DIrfYFtInEuZbxY+doiiyGa9GhPk4JIw2ZpiUyuWl4LpmIyZhdJ0O7bSW8dN+vrLXic0ec+FGSOs9dZxEd/4B54JM5ktVrsZgukYtcmEIRL2e+smWbs2ON2enfDWlYQf/P7TD2917hU+ueOtG9JwT/deDiV3vHVIWUVAC7XGBOAONd0bBbokjEHdSAA65K0jE2E+MBfBKrrjrUP9sQqTmwuP1G8OCqe8dUBayZ1CELnjrZNC3xEmfHTHW2fiIxQRl/64QRWC7RDEkUGZM9uuuedsv7cO0ch4MKvg7TYentn6GybqL4Oc9o7vmbxnluBJQHu9dYBt0/d45xd/vomTTz/f/JjDqgo2QXjU/7nzPRhy6UgwficO1SIFlqBCaOMfOIQcXBJGtTU9xL3JX+spNpj9BgnWw5yt2vcOkWpLUw8ssjiIEKsxRAu0aL15H/zjTTz45LOtYyzR3cKtObymbPyN+89/6fwFC3CjDWSn0WrxGeNg3bdyNcPVzmraWPuf5+mhBOJz1SOepmvmrYNQJaj9XqcDSySH1awVpARNPn4+4OQnyEqjq6oCqtrRpEwSEuFrH6Eb3ZLV7F+WksYYPlQxdgAAAABJRU5ErkJggg==";var l=(t,n)=>{const e=t.__vccOpts||t;for(const[c,o]of n)e[c]=o;return e};const U={inject:["streamsync"],mounted:function(){this.streamsync.mountComponents(this.$refs.container),document.title=this.title},computed:{title:function(){var t;return(t=this.streamsync.state.title)!=null?t:"Streamsync App"}}},L={class:"App"},P=r("div",{class:"topLine"},null,-1),R=r("img",{src:$,alt:"Streamsync"},null,-1),J={ref:"container"};function V(t,n,e,c,o,s){return i(),a("div",L,[P,r("header",null,[R,r("h1",null,d(s.title),1)]),r("main",null,[r("div",J,null,512)])])}var W=l(U,[["render",V]]);const N={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},Q=["data-streamsync-id"];function T(t,n,e,c,o,s){return u((i(),a("div",{class:"CoreText component","data-streamsync-id":e.componentId},[C(t.$slots,"default",{},()=>[I(d(s.text),1)])],8,Q)),[[m,!s.isPlaceholder]])}var Y=l(N,[["render",T]]);const G={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},D=["data-streamsync-id"];function k(t,n,e,c,o,s){return u((i(),a("button",{class:"CoreButton component","data-streamsync-id":e.componentId},[C(t.$slots,"default",{},()=>[I(d(s.text),1)])],8,D)),[[m,!s.isPlaceholder]])}var H=l(G,[["render",k]]);const K={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el),this.streamsync.mountComponents(this.$refs.container,this.componentId)},computed:{title:function(){return this.streamsync.getContentValue(this.componentId,"title")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},M=["data-streamsync-id"],X={key:0},z={ref:"container"};function F(t,n,e,c,o,s){return u((i(),a("div",{class:"CoreSection component","data-streamsync-id":e.componentId},[s.title?(i(),a("h2",X,d(s.title),1)):S("",!0),r("div",z,null,512)],8,M)),[[m,!s.isPlaceholder]])}var Z=l(K,[["render",F]]);const q={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el),this.streamsync.mountComponents(this.$refs.container,this.componentId)},computed:{isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},tt=["data-streamsync-id"],et={ref:"container"};function nt(t,n,e,c,o,s){return u((i(),a("div",{class:"CoreWhen component","data-streamsync-id":e.componentId},[r("div",et,null,512)],8,tt)),[[m,!s.isPlaceholder]])}var st=l(q,[["render",nt]]);const ot={inject:["streamsync"],emit:["change"],data:function(){return{value:0}},props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},methods:{handleChange:function(t){this.value=t.target.value,this.$emit("change",t)}},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},min:function(){const t=this.streamsync.getContentValue(this.componentId,"min");return t===null?0:t},max:function(){const t=this.streamsync.getContentValue(this.componentId,"max");return t===null?0:t},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},ct=["data-streamsync-id"],rt={class:"main"},it={class:"inputContainer"},at=["min","max","value"],dt={class:"rangeLabelContainer"},lt={class:"min"},ut={class:"max"},mt={class:"label"};function ht(t,n,e,c,o,s){return u((i(),a("div",{class:"CoreSlider component","data-streamsync-id":e.componentId},[r("div",rt,[r("div",it,[r("input",{type:"range",min:s.min,max:s.max,value:t.value,onChange:n[0]||(n[0]=B(h=>s.handleChange(h),["prevent"]))},null,40,at)]),r("div",dt,[r("div",lt,d(s.min),1),r("div",ut,d(s.max),1)])]),r("div",mt,[r("h2",null,d(t.value),1)])],8,ct)),[[m,!s.isPlaceholder]])}var pt=l(ot,[["render",ht],["__scopeId","data-v-0b805eaa"]]);const ft={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{figure:function(){return this.streamsync.getContentValue(this.componentId,"figure")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},_t=["data-streamsync-id"],yt=["src"];function vt(t,n,e,c,o,s){return u((i(),a("div",{class:"CorePyplot component","data-streamsync-id":e.componentId},[s.figure?(i(),a("img",{key:0,src:s.figure},null,8,yt)):S("",!0)],8,_t)),[[m,!s.isPlaceholder]])}var gt=l(ft,[["render",vt]]);const At={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},Ct=["data-streamsync-id"];function It(t,n,e,c,o,s){return u((i(),a("div",{class:"CoreHeading component","data-streamsync-id":e.componentId},[r("h1",null,d(s.text),1)],8,Ct)),[[m,!s.isPlaceholder]])}var St=l(At,[["render",It],["__scopeId","data-v-5eb8ae2c"]]),xt={button:H,text:Y,section:Z,when:st,slider:pt,pyplot:gt,heading:St},_={components:null,initialState:null,state:null,webSocket:null,startTime:null,init:async function(){const n=await(await fetch("/api/init")).json();this.components=A(n.components),this.initialState=g({},n.state),this.state=A(n.state)},startSync:function(){const t=new URL("/api/stream",window.location.href);t.protocol=t.protocol.replace("http","ws"),this.webSocket=new WebSocket(t.href),this.webSocket.onmessage=n=>{const e=JSON.parse(n.data),c=e.mutations,o=e.components;Object.assign(this.state,c),Object.keys(this.components).forEach(s=>{o[s]===void 0&&delete this.components[s]}),Object.assign(this.components,o)},this.webSocket.onclose=()=>{this.reconnect()}},reconnect:async function(){this.webSocket=null,console.log("Disconnected... Will atempt to reconnect");try{Object.assign(this.state,this.initialState),this.startSync()}catch{console.log("Reconnect failed... Will try again"),setTimeout(()=>{this.reconnect()},1e3)}},getContentValue:function(t,n){const e=this.components[t];if(!e.content)return null;const c=e.content[n];if(c==null)return null;if(isNaN(c)===!1)return c;let o;const s=c.replace(/[\\]?@([\w]*)/g,(f,p)=>{if(f.charAt(0)=="\\")return f.substring(1);if(!(!p||this.state[p]===void 0)){if(c===f){o=this.state[p];return}return this.state[p]}});return o===void 0?s:o},forward:function(t){var e,c;if(!this.webSocket)return;const n={type:t.type,targetId:(e=t.target)==null?void 0:e.closest("[data-streamsync-id]").dataset.streamsyncId,value:((c=t.target)==null?void 0:c.value)||null};this.webSocket.send(JSON.stringify(n))},addEventListeners:function(t,n){const e=this.components[t];!e.handlers||Object.keys(e.handlers).forEach(c=>{n.addEventListener(c,o=>{this.forward(o)})})},mountComponents:function(t,n=null){Object.entries(this.components).forEach(([e,c])=>{if(c.container!==n)return;const o=this.renderComponent(e,c);!o||t.appendChild(o)})},renderComponent:function(t,n){const e=xt[n.type];if(!e)return;const c=document.createElement("span"),o=x(e,{componentId:t,isPlaceholder:n.placeholder});return o.provide("streamsync",this),o.mount(c),c}};const E=x(W);E.provide("streamsync",_);_.init().then(()=>{_.startSync(),E.mount("#app")});