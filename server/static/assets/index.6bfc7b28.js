var O=Object.defineProperty;var y=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var v=(t,s,e)=>s in t?O(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,g=(t,s)=>{for(var e in s||(s={}))P.call(s,e)&&v(t,e,s[e]);if(y)for(var e of y(s))U.call(s,e)&&v(t,e,s[e]);return t};import{d as C,a as T,c as A,w as x,_ as S,o as i,b as r,t as h,e as $,f as V,g as l,v as m,h as a,r as b,i as E,j,k as R,R as k,l as J,H as w,p as H,m as W,n as I,q as L}from"./vendor.52f3aea5.js";const M=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}};M();var N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABICAYAAABLJIP0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATcSURBVHgB7ZyxbhtHEIZn9o4GHDVMkSJAinORWhQgCTSQxGTHkupSJDD1BM4bSOxSWg8QmEIewKwCBgjgU2LEB9GAz70BnYEgSMnOCXncyeyRYiSZinaPFMHb9QcYPEvHk/bXzu7szC8h3BLVF9Ug9UtND2GTJNYIoYwAZVgBBDDgr5XwVSIBTtJ01I3vR4nJMxCWzM7ply1+6kMErMF6ERPRUX/3t47OzUsTZrv/RU2QeMJPDGCdQUhIUvsmgRYWpvKqVi6l8oAf9B0UCA63xyNftOOtcDDv8wsJU3lRC+748qm6hCLCs2c4GtbnrT+5hclE8eSztQ+dm7hGnFzCqPC5M5KvCi/Kf8RDX9QvhpWAHKg1xSJRFJVsTBcwnjFqO0bEJ2AhEmT95c7zUF0bzxjOTw7AUgSK2Q/cSJhp8haArRAE2RjBUBgOoUdgO5y1T140meYsZ+AAvpcG2jPGx3ETHGE89Pa0hfE88QBcwYdNbWEIKABHIK4MGAhj8W50FYKytjCrKjKtCeVcRwIXMAmlAbjDQD+UCJ0RhidBYhBKdAKOgBLeagsjJcXgCEgU6me+5HXBEZBGXW1hovthgkAhWA6vL3HEZU6j7VoSHIPtcO9JvRhX8HZPvzqztibDhfHT7V/vqUvjBE+i3AdLUY2482tjYVRNlPvQR2AZakwXu5O5jgQjTxzyiz3bN4fQxmRMM3IJo/ovIhV7vIQnUHRYFMENt/BKqzb3IVJt32Is6gUXJ1aiRHNatAudrpU4w5LYKuKao77nj7j7GF3jm1maDSRrxKmeUwFsIJLk/nlj7frblsy0U6naLGvlgCCVtXOCunLj0FWq3G5J/XGTY5WL6Bio0uhKrWbE/wSFY4LXfjrqRrdtNas2vg5SKjURxSb/t0ZcH0Vc0YCzwULCZYGE+8wnKXrduNdJ4BbQFman8W2L12rVpavBOoGcT5E86vd+7MASuVGY7cY3NQRPNbsDWG8SPrC0lyXQtcJUaq1y6S4dcMAWylvHI3o8eoftOOwsVIqdK0yl0QpKSE9ZlGJ663j2jADri6w/7wmTiQL0DIrfYFtInEuZbxY+doiiyGa9GhPk4JIw2ZpiUyuWl4LpmIyZhdJ0O7bSW8dN+vrLXic0ec+FGSOs9dZxEd/4B54JM5ktVrsZgukYtcmEIRL2e+smWbs2ON2enfDWlYQf/P7TD2917hU+ueOtG9JwT/deDiV3vHVIWUVAC7XGBOAONd0bBbokjEHdSAA65K0jE2E+MBfBKrrjrUP9sQqTmwuP1G8OCqe8dUBayZ1CELnjrZNC3xEmfHTHW2fiIxQRl/64QRWC7RDEkUGZM9uuuedsv7cO0ch4MKvg7TYentn6GybqL4Oc9o7vmbxnluBJQHu9dYBt0/d45xd/vomTTz/f/JjDqgo2QXjU/7nzPRhy6UgwficO1SIFlqBCaOMfOIQcXBJGtTU9xL3JX+spNpj9BgnWw5yt2vcOkWpLUw8ssjiIEKsxRAu0aL15H/zjTTz45LOtYyzR3cKtObymbPyN+89/6fwFC3CjDWSn0WrxGeNg3bdyNcPVzmraWPuf5+mhBOJz1SOepmvmrYNQJaj9XqcDSySH1awVpARNPn4+4OQnyEqjq6oCqtrRpEwSEuFrH6Eb3ZLV7F+WksYYPlQxdgAAAABJRU5ErkJggg==";var d=(t,s)=>{const e=t.__vccOpts||t;for(const[c,o]of s)e[c]=o;return e};const Q=C({inject:["streamsync"],setup(){return{darkTheme:T}},mounted:function(){this.streamsync.mountComponents(this.$refs.container),document.title=this.title},computed:{title:function(){var t;return(t=this.streamsync.state.title)!=null?t:"Streamsync App"}}}),Y={class:"App"},D=r("div",{class:"topLine"},null,-1),G=r("img",{src:N,alt:"Streamsync"},null,-1),K={ref:"container"};function X(t,s,e,c,o,n){const u=V,p=S;return i(),A(p,{theme:t.darkTheme},{default:x(()=>[r("div",Y,[D,r("header",null,[G,r("h1",null,h(t.title),1)]),r("main",null,[r("div",K,null,512)])]),$(u)]),_:1},8,["theme"])}var q=d(Q,[["render",X]]);const z={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},F=["data-streamsync-id"];function Z(t,s,e,c,o,n){return l((i(),a("div",{class:"CoreText component","data-streamsync-id":e.componentId},[b(t.$slots,"default",{},()=>[E(h(n.text),1)])],8,F)),[[m,!n.isPlaceholder]])}var tt=d(z,[["render",Z]]);const et={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},nt=["data-streamsync-id"];function st(t,s,e,c,o,n){return l((i(),a("button",{class:"CoreButton component","data-streamsync-id":e.componentId},[b(t.$slots,"default",{},()=>[E(h(n.text),1)])],8,nt)),[[m,!n.isPlaceholder]])}var ot=d(et,[["render",st]]);const ct={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el),this.streamsync.mountComponents(this.$refs.container,this.componentId)},computed:{title:function(){return this.streamsync.getContentValue(this.componentId,"title")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},rt=["data-streamsync-id"],it={key:0},at={ref:"container"};function dt(t,s,e,c,o,n){return l((i(),a("div",{class:"CoreSection component","data-streamsync-id":e.componentId},[n.title?(i(),a("h2",it,h(n.title),1)):j("",!0),r("div",at,null,512)],8,rt)),[[m,!n.isPlaceholder]])}var lt=d(ct,[["render",dt]]);const mt={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el),this.streamsync.mountComponents(this.$refs.container,this.componentId)},computed:{isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},ut=["data-streamsync-id"],ht={ref:"container"};function pt(t,s,e,c,o,n){return l((i(),a("div",{class:"CoreWhen component","data-streamsync-id":e.componentId},[r("div",ht,null,512)],8,ut)),[[m,!n.isPlaceholder]])}var _t=d(mt,[["render",pt]]);const ft={inject:["streamsync"],emit:["change"],data:function(){return{value:0}},props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},methods:{handleChange:function(t){this.value=t.target.value,this.$emit("change",t)}},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},min:function(){const t=this.streamsync.getContentValue(this.componentId,"min");return t===null?0:t},max:function(){const t=this.streamsync.getContentValue(this.componentId,"max");return t===null?0:t},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},yt=["data-streamsync-id"],vt={class:"main"},gt={class:"inputContainer"},It=["min","max","value"],Ct={class:"rangeLabelContainer"},At={class:"min"},xt={class:"max"},St={class:"label"};function $t(t,s,e,c,o,n){return l((i(),a("div",{class:"CoreSlider component","data-streamsync-id":e.componentId},[r("div",vt,[r("div",gt,[r("input",{type:"range",min:n.min,max:n.max,value:t.value,onChange:s[0]||(s[0]=R(u=>n.handleChange(u),["prevent"]))},null,40,It)]),r("div",Ct,[r("div",At,h(n.min),1),r("div",xt,h(n.max),1)])]),r("div",St,[r("h2",null,h(t.value),1)])],8,yt)),[[m,!n.isPlaceholder]])}var bt=d(ft,[["render",$t],["__scopeId","data-v-0b805eaa"]]);const Et={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{figure:function(){return this.streamsync.getContentValue(this.componentId,"figure")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},jt=["data-streamsync-id"],wt=["src"];function Lt(t,s,e,c,o,n){return l((i(),a("div",{class:"CorePyplot component","data-streamsync-id":e.componentId},[n.figure?(i(),a("img",{key:0,src:n.figure},null,8,wt)):j("",!0)],8,jt)),[[m,!n.isPlaceholder]])}var Bt=d(Et,[["render",Lt]]);const Ot={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},Pt=["data-streamsync-id"];function Ut(t,s,e,c,o,n){return l((i(),a("div",{class:"CoreHeading component","data-streamsync-id":e.componentId},[r("h1",null,h(n.text),1)],8,Pt)),[[m,!n.isPlaceholder]])}var Tt=d(Ot,[["render",Ut],["__scopeId","data-v-5eb8ae2c"]]),Vt=new k("commonmark");const Rt={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){let t=this.streamsync.getContentValue(this.componentId,"text");return Vt.render(t)},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},kt=["data-streamsync-id"],Jt=["innerHTML"];function Ht(t,s,e,c,o,n){return l((i(),a("div",{class:"component","data-streamsync-id":e.componentId},[r("div",{innerHTML:n.text},null,8,Jt)],8,kt)),[[m,!n.isPlaceholder]])}var Wt=d(Rt,[["render",Ht]]);const Mt={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){let t=this.streamsync.getContentValue(this.componentId,"text");return J.renderToString(t,{throwOnError:!1,displayMode:!0,output:"html"})},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},Nt=["data-streamsync-id"],Qt=["innerHTML"];function Yt(t,s,e,c,o,n){return l((i(),a("div",{class:"component","data-streamsync-id":e.componentId},[r("div",{innerHTML:n.text},null,8,Qt)],8,Nt)),[[m,!n.isPlaceholder]])}var Dt=d(Mt,[["render",Yt]]);const Gt={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},Kt=["data-streamsync-id"],Xt=["innerHTML"];function qt(t,s,e,c,o,n){return l((i(),a("div",{class:"component","data-streamsync-id":e.componentId},[r("div",{innerHTML:n.text},null,8,Xt)],8,Kt)),[[m,!n.isPlaceholder]])}var zt=d(Gt,[["render",qt]]);w.registerLanguage("python",H);const Ft=C({inject:["streamsync"],setup(){return{hljs:w}},props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}}),Zt=["data-streamsync-id"];function te(t,s,e,c,o,n){const u=W,p=S;return i(),A(p,{hljs:t.hljs},{default:x(()=>[l(r("div",{class:"component","data-streamsync-id":t.componentId},[$(u,{code:t.text,language:"python"},null,8,["code"])],8,Zt),[[m,!t.isPlaceholder]])]),_:1},8,["hljs"])}var ee=d(Ft,[["render",te]]),ne={button:ot,text:tt,section:lt,when:_t,slider:bt,pyplot:Bt,heading:Tt,markdown:Wt,latex:Dt,simple_table:zt,code:ee},f={components:null,initialState:null,state:null,webSocket:null,startTime:null,init:async function(){const s=await(await fetch("/api/init")).json();console.log(s),this.components=I(s.components),this.initialState=g({},s.state),this.state=I(s.state)},startSync:function(){const t=new URL("/api/stream",window.location.href);t.protocol=t.protocol.replace("http","ws"),this.webSocket=new WebSocket(t.href),this.webSocket.onmessage=s=>{const e=JSON.parse(s.data),c=e.mutations,o=e.components;Object.assign(this.state,c),Object.keys(this.components).forEach(n=>{o[n]===void 0&&delete this.components[n]}),Object.assign(this.components,o)},this.webSocket.onclose=()=>{this.reconnect()}},reconnect:async function(){this.webSocket=null,console.log("Disconnected... Will atempt to reconnect");try{Object.assign(this.state,this.initialState),this.startSync()}catch{console.log("Reconnect failed... Will try again"),setTimeout(()=>{this.reconnect()},1e3)}},getContentValue:function(t,s){const e=this.components[t];if(!e.content)return null;const c=e.content[s];if(c==null)return null;if(isNaN(c)===!1)return c;let o;const n=c.replace(/[\\]?@([\w]*)/g,(p,_)=>{if(p.charAt(0)=="\\")return p.substring(1);if(!(!_||this.state[_]===void 0)){if(c===p){o=this.state[_];return}return this.state[_]}});return o===void 0?n:o},forward:function(t){var e,c;if(!this.webSocket)return;const s={type:t.type,targetId:(e=t.target)==null?void 0:e.closest("[data-streamsync-id]").dataset.streamsyncId,value:((c=t.target)==null?void 0:c.value)||null};this.webSocket.send(JSON.stringify(s))},addEventListeners:function(t,s){const e=this.components[t];!e.handlers||Object.keys(e.handlers).forEach(c=>{s.addEventListener(c,o=>{this.forward(o)})})},mountComponents:function(t,s=null){Object.entries(this.components).forEach(([e,c])=>{if(c.container!==s)return;const o=this.renderComponent(e,c);!o||t.appendChild(o)})},renderComponent:function(t,s){const e=ne[s.type];if(!e)return;const c=document.createElement("span"),o=L(e,{componentId:t,isPlaceholder:s.placeholder});return o.provide("streamsync",this),o.mount(c),c}};const B=L(q);B.provide("streamsync",f);f.init().then(()=>{f.startSync(),B.mount("#app")});
