const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-DmeoJBsd.js","assets/utils-Dj6Q6ZiA.js","assets/home-CI0eH8VR.js","assets/cards-BqsdUq2z.js","assets/modal-B-RRdsTv.js","assets/giftsPage-BTCx0eBm.js"])))=>i.map(i=>d[i]);
(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const E="modulepreload",h=function(d){return"/tanykos/christmas-shop/"+d},f={},s=function(c,l,a){let e=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),o=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));e=Promise.allSettled(l.map(n=>{if(n=h(n),n in f)return;f[n]=!0;const u=n.endsWith(".css"),_=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${_}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":E,u||(i.as="script"),i.crossOrigin="",i.href=n,o&&i.setAttribute("nonce",o),document.head.appendChild(i),u)return new Promise((m,p)=>{i.addEventListener("load",m),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})}))}function r(t){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t}return e.then(t=>{for(const o of t||[])o.status==="rejected"&&r(o.reason);return c().catch(r)})};s(()=>import("./api-DmeoJBsd.js"),__vite__mapDeps([0,1]));s(()=>import("./utils-Dj6Q6ZiA.js"),[]);s(()=>import("./navigation-Br5qTJz0.js"),[]);s(()=>import("./home-CI0eH8VR.js"),__vite__mapDeps([2,3,1,0,4]));s(()=>import("./slider-ChP_5bvI.js"),[]);s(()=>import("./timer-DQhPmQkc.js"),[]);s(()=>import("./giftsPage-BTCx0eBm.js"),__vite__mapDeps([5,3,1,0,4]));s(()=>import("./modal-B-RRdsTv.js"),__vite__mapDeps([4,0,1]));
//# sourceMappingURL=main-BPCCadrq.js.map