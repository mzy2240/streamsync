var J=Object.defineProperty;var b=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var x=(t,n,e)=>n in t?J(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,w=(t,n)=>{for(var e in n||(n={}))G.call(n,e)&&x(t,e,n[e]);if(b)for(var e of b(n))H.call(n,e)&&x(t,e,n[e]);return t};import{d as v,_,a as L,b as A,c as g,w as y,o as a,e as c,t as h,f as I,g as u,v as m,h as l,r as P,i as B,j as O,k as M,R as W,l as D,H as T,p as Q,m as V,n as R,q as N,s as U,u as Y,F as K,x as E,y as C}from"./vendor.22a24694.js";const X=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}};X();var F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABICAYAAABLJIP0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATcSURBVHgB7ZyxbhtHEIZn9o4GHDVMkSJAinORWhQgCTSQxGTHkupSJDD1BM4bSOxSWg8QmEIewKwCBgjgU2LEB9GAz70BnYEgSMnOCXncyeyRYiSZinaPFMHb9QcYPEvHk/bXzu7szC8h3BLVF9Ug9UtND2GTJNYIoYwAZVgBBDDgr5XwVSIBTtJ01I3vR4nJMxCWzM7ply1+6kMErMF6ERPRUX/3t47OzUsTZrv/RU2QeMJPDGCdQUhIUvsmgRYWpvKqVi6l8oAf9B0UCA63xyNftOOtcDDv8wsJU3lRC+748qm6hCLCs2c4GtbnrT+5hclE8eSztQ+dm7hGnFzCqPC5M5KvCi/Kf8RDX9QvhpWAHKg1xSJRFJVsTBcwnjFqO0bEJ2AhEmT95c7zUF0bzxjOTw7AUgSK2Q/cSJhp8haArRAE2RjBUBgOoUdgO5y1T140meYsZ+AAvpcG2jPGx3ETHGE89Pa0hfE88QBcwYdNbWEIKABHIK4MGAhj8W50FYKytjCrKjKtCeVcRwIXMAmlAbjDQD+UCJ0RhidBYhBKdAKOgBLeagsjJcXgCEgU6me+5HXBEZBGXW1hovthgkAhWA6vL3HEZU6j7VoSHIPtcO9JvRhX8HZPvzqztibDhfHT7V/vqUvjBE+i3AdLUY2482tjYVRNlPvQR2AZakwXu5O5jgQjTxzyiz3bN4fQxmRMM3IJo/ovIhV7vIQnUHRYFMENt/BKqzb3IVJt32Is6gUXJ1aiRHNatAudrpU4w5LYKuKao77nj7j7GF3jm1maDSRrxKmeUwFsIJLk/nlj7frblsy0U6naLGvlgCCVtXOCunLj0FWq3G5J/XGTY5WL6Bio0uhKrWbE/wSFY4LXfjrqRrdtNas2vg5SKjURxSb/t0ZcH0Vc0YCzwULCZYGE+8wnKXrduNdJ4BbQFman8W2L12rVpavBOoGcT5E86vd+7MASuVGY7cY3NQRPNbsDWG8SPrC0lyXQtcJUaq1y6S4dcMAWylvHI3o8eoftOOwsVIqdK0yl0QpKSE9ZlGJ663j2jADri6w/7wmTiQL0DIrfYFtInEuZbxY+doiiyGa9GhPk4JIw2ZpiUyuWl4LpmIyZhdJ0O7bSW8dN+vrLXic0ec+FGSOs9dZxEd/4B54JM5ktVrsZgukYtcmEIRL2e+smWbs2ON2enfDWlYQf/P7TD2917hU+ueOtG9JwT/deDiV3vHVIWUVAC7XGBOAONd0bBbokjEHdSAA65K0jE2E+MBfBKrrjrUP9sQqTmwuP1G8OCqe8dUBayZ1CELnjrZNC3xEmfHTHW2fiIxQRl/64QRWC7RDEkUGZM9uuuedsv7cO0ch4MKvg7TYentn6GybqL4Oc9o7vmbxnluBJQHu9dYBt0/d45xd/vomTTz/f/JjDqgo2QXjU/7nzPRhy6UgwficO1SIFlqBCaOMfOIQcXBJGtTU9xL3JX+spNpj9BgnWw5yt2vcOkWpLUw8ssjiIEKsxRAu0aL15H/zjTTz45LOtYyzR3cKtObymbPyN+89/6fwFC3CjDWSn0WrxGeNg3bdyNcPVzmraWPuf5+mhBOJz1SOepmvmrYNQJaj9XqcDSySH1awVpARNPn4+4OQnyEqjq6oCqtrRpEwSEuFrH6Eb3ZLV7F+WksYYPlQxdgAAAABJRU5ErkJggg==";var d=(t,n)=>{const e=t.__vccOpts||t;for(const[r,o]of n)e[r]=o;return e};const q=v({inject:["streamsync"],components:{NConfigProvider:_,NGlobalStyle:L},setup(){return{darkTheme:A}},mounted:function(){this.streamsync.mountComponents(this.$refs.container),document.title=this.title},computed:{title:function(){var t;return(t=this.streamsync.state.title)!=null?t:"Streamsync App"}}}),z={class:"App"},Z=c("div",{class:"topLine"},null,-1),tt=c("img",{src:F,alt:"Streamsync"},null,-1),et={ref:"container"};function nt(t,n,e,r,o,s){const i=L,p=_;return a(),g(p,{theme:t.darkTheme},{default:y(()=>[c("div",z,[Z,c("header",null,[tt,c("h1",null,h(t.title),1)]),c("main",null,[c("div",et,null,512)])]),I(i)]),_:1},8,["theme"])}var st=d(q,[["render",nt]]);const ot={inject:["streamsync"],props:{componentId:String,to:String,col:Number},data:function(){return{isMounted:!1}},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},rt=["data-streamsync-id"];function ct(t,n,e,r,o,s){return u((a(),l("div",{class:"CoreText component","data-streamsync-id":e.componentId},[P(t.$slots,"default",{},()=>[B(h(s.text),1)])],8,rt)),[[m,!s.isPlaceholder]])}var at=d(ot,[["render",ct]]);const it={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},dt=["data-streamsync-id"];function lt(t,n,e,r,o,s){return u((a(),l("button",{class:"CoreButton component","data-streamsync-id":e.componentId},[P(t.$slots,"default",{},()=>[B(h(s.text),1)])],8,dt)),[[m,!s.isPlaceholder]])}var ut=d(it,[["render",lt]]);const mt={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el),this.streamsync.mountComponents(this.$refs.container,this.componentId)},computed:{title:function(){return this.streamsync.getContentValue(this.componentId,"title")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},pt=["data-streamsync-id"],ht={key:0},_t={ref:"container"};function ft(t,n,e,r,o,s){return u((a(),l("div",{class:"CoreSection component","data-streamsync-id":e.componentId},[s.title?(a(),l("h2",ht,h(s.title),1)):O("",!0),c("div",_t,null,512)],8,pt)),[[m,!s.isPlaceholder]])}var yt=d(mt,[["render",ft]]);const gt={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el),this.streamsync.mountComponents(this.$refs.container,this.componentId)},computed:{isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},vt=["data-streamsync-id"],It={ref:"container"};function Ct(t,n,e,r,o,s){return u((a(),l("div",{class:"CoreWhen component","data-streamsync-id":e.componentId},[c("div",It,null,512)],8,vt)),[[m,!s.isPlaceholder]])}var $t=d(gt,[["render",Ct]]);const At={inject:["streamsync"],emit:["change"],data:function(){return{value:0}},props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},methods:{handleChange:function(t){this.value=t.target.value,this.$emit("change",t)}},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},min:function(){const t=this.streamsync.getContentValue(this.componentId,"min");return t===null?0:t},max:function(){const t=this.streamsync.getContentValue(this.componentId,"max");return t===null?0:t},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},St=["data-streamsync-id"],bt={class:"main"},xt={class:"inputContainer"},wt=["min","max","value"],Et={class:"rangeLabelContainer"},jt={class:"min"},Lt={class:"max"},Pt={class:"label"};function Bt(t,n,e,r,o,s){return u((a(),l("div",{class:"CoreSlider component","data-streamsync-id":e.componentId},[c("div",bt,[c("div",xt,[c("input",{type:"range",min:s.min,max:s.max,value:t.value,onChange:n[0]||(n[0]=M(i=>s.handleChange(i),["prevent"]))},null,40,wt)]),c("div",Et,[c("div",jt,h(s.min),1),c("div",Lt,h(s.max),1)])]),c("div",Pt,[c("h2",null,h(t.value),1)])],8,St)),[[m,!s.isPlaceholder]])}var Ot=d(At,[["render",Bt],["__scopeId","data-v-0b805eaa"]]);const Tt={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{figure:function(){return this.streamsync.getContentValue(this.componentId,"figure")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},Vt=["data-streamsync-id"],Rt=["src"];function Nt(t,n,e,r,o,s){return u((a(),l("div",{class:"CorePyplot component","data-streamsync-id":e.componentId},[s.figure?(a(),l("img",{key:0,src:s.figure},null,8,Rt)):O("",!0)],8,Vt)),[[m,!s.isPlaceholder]])}var Ut=d(Tt,[["render",Nt]]);const kt={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},Jt=["data-streamsync-id"];function Gt(t,n,e,r,o,s){return u((a(),l("div",{class:"CoreHeading component","data-streamsync-id":e.componentId},[c("h1",null,h(s.text),1)],8,Jt)),[[m,!s.isPlaceholder]])}var Ht=d(kt,[["render",Gt],["__scopeId","data-v-5eb8ae2c"]]),Mt=new W("commonmark");const Wt={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){let t=this.streamsync.getContentValue(this.componentId,"text");return Mt.render(t)},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},Dt=["data-streamsync-id"],Qt=["innerHTML"];function Yt(t,n,e,r,o,s){return u((a(),l("div",{class:"component","data-streamsync-id":e.componentId},[c("div",{innerHTML:s.text},null,8,Qt)],8,Dt)),[[m,!s.isPlaceholder]])}var Kt=d(Wt,[["render",Yt]]);const Xt={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){let t=this.streamsync.getContentValue(this.componentId,"text");return D.renderToString(t,{throwOnError:!1,displayMode:!0,output:"html"})},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},Ft=["data-streamsync-id"],qt=["innerHTML"];function zt(t,n,e,r,o,s){return u((a(),l("div",{class:"component","data-streamsync-id":e.componentId},[c("div",{innerHTML:s.text},null,8,qt)],8,Ft)),[[m,!s.isPlaceholder]])}var Zt=d(Xt,[["render",zt]]);const te={inject:["streamsync"],props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}},ee=["data-streamsync-id"],ne=["innerHTML"];function se(t,n,e,r,o,s){return u((a(),l("div",{class:"component","data-streamsync-id":e.componentId},[c("div",{innerHTML:s.text},null,8,ne)],8,ee)),[[m,!s.isPlaceholder]])}var oe=d(te,[["render",se]]);T.registerLanguage("python",Q);const re=v({inject:["streamsync"],components:{NConfigProvider:_,NCode:V},setup(){return{hljs:T}},props:{componentId:String},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{text:function(){return this.streamsync.getContentValue(this.componentId,"text")},isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}}),ce=["data-streamsync-id"];function ae(t,n,e,r,o,s){const i=V,p=_;return a(),g(p,{hljs:t.hljs},{default:y(()=>[u(c("div",{class:"component","data-streamsync-id":t.componentId},[I(i,{code:t.text,language:"python"},null,8,["code"])],8,ce),[[m,!t.isPlaceholder]])]),_:1},8,["hljs"])}var ie=d(re,[["render",ae]]);const de=v({components:{NConfigProvider:_,NDataTable:R},inject:["streamsync"],setup(){return{darkTheme:A}},props:{componentId:String},data:function(){return{data:[],columns:[]}},beforeMount(){this.data=this.streamsync.getRawValue(this.componentId,"data"),this.columns=this.streamsync.getRawValue(this.componentId,"columns")},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}}),le=["data-streamsync-id"];function ue(t,n,e,r,o,s){const i=R,p=_;return a(),g(p,{theme:t.darkTheme},{default:y(()=>[u(c("div",{class:"component","data-streamsync-id":t.componentId},[I(i,{data:t.data,columns:t.columns,bordered:!1,"max-height":400,"virtual-scroll":""},null,8,["data","columns"])],8,le),[[m,!t.isPlaceholder]])]),_:1},8,["theme"])}var me=d(de,[["render",ue]]);const pe=v({inject:["streamsync"],components:{NConfigProvider:_,NGrid:N,NGridItem:U},setup(){return{darkTheme:A}},props:{componentId:String},data:function(){return{cols:0}},created(){this.cols=this.streamsync.getRawValue(this.componentId,"cols")},mounted:function(){this.streamsync.addEventListeners(this.componentId,this.$el)},computed:{isPlaceholder:function(){return this.streamsync.components[this.componentId].placeholder}}}),he=["data-streamsync-id"],_e=["id"];function fe(t,n,e,r,o,s){const i=U,p=N,f=_;return a(),g(f,{theme:t.darkTheme},{default:y(()=>[u(c("div",{class:"component","data-streamsync-id":t.componentId},[I(p,{cols:t.cols,"x-gap":"12"},{default:y(()=>[(a(!0),l(K,null,Y(t.cols,S=>(a(),g(i,{key:S},{default:y(()=>[c("div",{id:`${t.componentId}-${S-1}`},null,8,_e)]),_:2},1024))),128))]),_:1},8,["cols"])],8,he),[[m,!t.isPlaceholder]])]),_:1},8,["theme"])}var ye=d(pe,[["render",fe]]),j={button:ut,text:at,section:yt,when:$t,slider:Ot,pyplot:Ut,heading:Ht,markdown:Kt,latex:Zt,simple_table:oe,code:ie,data_table:me,grid:ye},$={components:null,initialState:null,state:null,webSocket:null,startTime:null,init:async function(){const n=await(await fetch("/api/init")).json();console.log(n),this.components=E(n.components),this.initialState=w({},n.state),this.state=E(n.state)},startSync:function(){const t=new URL("/api/stream",window.location.href);t.protocol=t.protocol.replace("http","ws"),this.webSocket=new WebSocket(t.href),this.webSocket.onmessage=n=>{const e=JSON.parse(n.data),r=e.mutations,o=e.components;Object.assign(this.state,r),Object.keys(this.components).forEach(s=>{o[s]===void 0&&delete this.components[s]}),Object.assign(this.components,o)},this.webSocket.onclose=()=>{this.reconnect()}},reconnect:async function(){this.webSocket=null,console.log("Disconnected... Will atempt to reconnect");try{Object.assign(this.state,this.initialState),this.startSync()}catch{console.log("Reconnect failed... Will try again"),setTimeout(()=>{this.reconnect()},1e3)}},getContentValue:function(t,n){const e=this.components[t];if(!e.content)return null;const r=e.content[n];if(r==null)return null;if(isNaN(r)===!1)return r;let o;const s=r.replace(/[\\]?@([\w]*)/g,(p,f)=>{if(p.charAt(0)=="\\")return p.substring(1);if(!(!f||this.state[f]===void 0)){if(r===p){o=this.state[f];return}return this.state[f]}});return o===void 0?s:o},getRawValue:function(t,n){const e=this.components[t];if(!e.content)return null;const r=e.content[n];return r==null?null:r},forward:function(t){var e,r;if(!this.webSocket)return;const n={type:t.type,targetId:(e=t.target)==null?void 0:e.closest("[data-streamsync-id]").dataset.streamsyncId,value:((r=t.target)==null?void 0:r.value)||null};this.webSocket.send(JSON.stringify(n))},addEventListeners:function(t,n){const e=this.components[t];!e.handlers||Object.keys(e.handlers).forEach(r=>{n.addEventListener(r,o=>{this.forward(o)})})},mountComponents:function(t,n=null){Object.entries(this.components).forEach(([e,r])=>{if(r.container===n)if(r.to!==null){if(!this.renderComponentTeleport(e,r))return}else{const o=this.renderComponent(e,r);if(!o)return;t.appendChild(o)}})},renderComponent:function(t,n){const e=j[n.type];if(!e)return;const r=document.createElement("span"),o=C(e,{componentId:t});return o.provide("streamsync",this),o.mount(r),r},renderComponentTeleport:function(t,n){const e=j[n.type];if(!e)return;const r=C(e,{componentId:t});r.provide("streamsync",this);const o=document.getElementById(`${n.to}-${n.col}`);return r.mount(o),o},renderGrid:function(t,n,e){}};const k=C(st);k.provide("streamsync",$);$.init().then(()=>{$.startSync(),k.mount("#app")});
