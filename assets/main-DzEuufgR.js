const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./level-goal-flowchart-GE83evRH.js","./level-goal-flowchart-60QBq8ny.css","./ui-iterations-BANuJ6i0.js","./ui-iterations-CzpnTjmn.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))i(x);new MutationObserver(x=>{for(const s of x)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(x){const s={};return x.integrity&&(s.integrity=x.integrity),x.referrerPolicy&&(s.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?s.credentials="include":x.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(x){if(x.ep)return;x.ep=!0;const s=o(x);fetch(x.href,s)}})();const he="modulepreload",ue=function(t,e){return new URL(t,e).href},Mt={},It=function(e,o,i){let x=Promise.resolve();if(o&&o.length>0){let a=function(f){return Promise.all(f.map(b=>Promise.resolve(b).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const d=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),c=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));x=a(o.map(f=>{if(f=ue(f,i),f in Mt)return;Mt[f]=!0;const b=f.endsWith(".css"),y=b?'[rel="stylesheet"]':"";if(!!i)for(let r=d.length-1;r>=0;r--){const l=d[r];if(l.href===f&&(!b||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${y}`))return;const w=document.createElement("link");if(w.rel=b?"stylesheet":he,b||(w.as="script"),w.crossOrigin="",w.href=f,c&&w.setAttribute("nonce",c),document.head.appendChild(w),b)return new Promise((r,l)=>{w.addEventListener("load",r),w.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return x.then(a=>{for(const d of a||[])d.status==="rejected"&&s(d.reason);return e().catch(s)})},be="",ge="",we="",kt=/\uE000([^\uE001]+)\uE001|\uE002/g,ve=new Set(["id","path","href","url","slug","filename","sourceSha256","hash","code","kind","format","preview","imageId","videoId","heroImageId","posterId","type","branch","poster","resumeUrl","demoUrl"]);function ye(t,e,o){let i=o;const x=e.map(s=>{let a=String(s);return Array.isArray(i)&&i[s]&&typeof i[s]=="object"&&typeof i[s].id=="string"&&(a="@"+i[s].id),i=i==null?void 0:i[s],encodeURIComponent(a).replaceAll(".","%2E")});return t.replace(":",".")+"."+x.join(".")}function ft(t){return String(t??"").replace(kt,"")}function $e(t){return String(t??"").replace(/^(\uE000[^\uE001]+\uE001)?\d+\s+/,(e,o)=>o||"")}function ke(t,e,o){const i=String(e.at(-1));return t==="site"&&e.length===2&&e[0]==="profile"&&i==="demoUrl"?typeof o=="string":typeof o!="string"||ve.has(i)||t==="retrospective"&&e.includes("compare")?!1:["media","videos"].includes(t)?i==="caption":!(i==="file"&&!t.startsWith("article:")||e[0]==="nav"&&e.at(-1)===0)}function Ee(t){const e=new Map;function o(x,s){function a(d,n){if(typeof d=="string"){if(!ke(x,n,d))return d;const c=ye(x,n,s);return e.set(c,{id:c,targetId:c,documentId:x,path:n,value:d}),be+c+ge+d+we}return Array.isArray(d)?d.map((c,f)=>a(c,[...n,f])):d&&typeof d=="object"?Object.fromEntries(Object.entries(d).map(([c,f])=>[c,a(f,[...n,c])])):d}return a(s,[])}const i={};for(const[x,s]of Object.entries(t))i[x]=x==="articles"?Object.fromEntries(Object.entries(s).map(([a,d])=>[a,o("article:"+a,d)])):o(x,s);return{model:i,fields:e}}function bt(t,e){if(!t||!e)return;const o=new Set((t.getAttribute("data-content-ids")||"").split(" ").filter(Boolean));o.add(e),t.setAttribute("data-content-ids",[...o].join(" ")),t.hasAttribute("data-content-id")||t.setAttribute("data-content-id",e)}function At(t){let e=t[0];for(;e&&!t.every(o=>e.contains(o));)e=e.parentElement;return e}function wt(t){const e=[...t.nodeType===1?[t]:[],...t.querySelectorAll("*")];for(const a of e)for(const d of[...a.attributes]){if(!/[\uE000-\uE002]/.test(d.value))continue;const n=[...d.value.matchAll(/\uE000([^\uE001]+)\uE001/g)].map(c=>c[1]);a.setAttribute(d.name,ft(d.value)),["alt","aria-label","title"].includes(d.name)&&n.forEach(c=>bt(a,c)),d.name==="href"&&n.filter(c=>c==="site.profile.demoUrl").forEach(c=>bt(a,c))}const o=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),i=[];let x;for(;x=o.nextNode();)i.push(x);const s=[];for(const a of i){const d=a.nodeValue;let n=0,c="";kt.lastIndex=0;let f;const b=y=>{c+=y,y&&s.forEach(m=>m.elements.push(a.parentElement))};for(;f=kt.exec(d);){if(b(d.slice(n,f.index)),f[1])s.push({id:f[1],elements:[]});else{const y=s.pop();y&&bt(At(y.elements)||a.parentElement,y.id)}n=f.index+f[0].length}b(d.slice(n)),a.nodeValue=c}for(const a of s)bt(At(a.elements),a.id);return t}function Jt(t){const e=document.createElement("template");return e.innerHTML=t,wt(e.content)}function Se(t,e){const o=new Map;for(const i of t.querySelectorAll("[data-content-ids]"))if(!i.closest("[hidden]")&&!(i.tagName!=="OPTION"&&!i.getClientRects().length&&!i.closest("details:not([open])")))for(const x of i.dataset.contentIds.split(" ")){if(!e.has(x))continue;const s={...e.get(x)};i.tagName==="OPTION"&&(s.state={control:i.parentElement.id,value:i.value}),o.set(x,s)}return[...o.values()]}let jt=0,Tt=0;async function Xt(t,{smooth:e=!0,announce:o=!0}={}){var y;const i=++Tt;let x=null;const s=new URLSearchParams(location.search).get("content-state");if(s)try{const{control:m,value:w,previewKey:r,scope:l}=JSON.parse(s);if(["cover","cases"].includes(l)&&(x=l),r&&!document.querySelector(".project-preview-lightbox[open]")){const P=[...document.querySelectorAll("[data-preview-open]")].find(A=>A.dataset.previewOpen===r);P==null||P.click()}const $=document.getElementById(m);$ instanceof HTMLSelectElement&&[...$.options].some(P=>P.value===String(w))&&($.value=String(w),$.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}const a=x?document.getElementById(x):null,d=[...document.querySelectorAll("[data-content-ids]")].filter(m=>m.dataset.contentIds.split(" ").includes(t)&&(!x||(a==null?void 0:a.contains(m))));let n=d.find(m=>m.tagName==="H1")||d.find(m=>m.matches("p,.about-intro,dd,figcaption,li,h2,h3"))||d.find(m=>m.tagName!=="OPTION")||d[0];if((n==null?void 0:n.tagName)==="OPTION"&&(n.parentElement.value=n.value,n.parentElement.dispatchEvent(new Event("change",{bubbles:!0})),n=n.parentElement),!n)return o&&Pe("该内容目前无法定位"),!1;for(let m=n.parentElement;m;m=m.parentElement)m.tagName==="DETAILS"&&(m.open=!0);if(n.matches(".skip")&&n.focus({preventScroll:!0}),await document.fonts.ready,i!==Tt)return!1;const c=n.getBoundingClientRect(),f=((y=document.querySelector(".header"))==null?void 0:y.getBoundingClientRect().height)||0,b=scrollY+c.top-Math.max(f+24,(innerHeight-Math.min(c.height,innerHeight-f-48))/2);return window.scrollTo({top:Math.max(0,b),behavior:e&&!matchMedia("(prefers-reduced-motion:reduce)").matches?"smooth":"instant"}),clearTimeout(jt),document.querySelectorAll(".content-locate-highlight").forEach(m=>m.classList.remove("content-locate-highlight")),n.classList.add("content-locate-highlight"),jt=setTimeout(()=>n.classList.remove("content-locate-highlight"),2e3),!0}function Pe(t){var o;(o=document.querySelector(".content-locate-status"))==null||o.remove();const e=document.createElement("div");e.className="content-locate-status",e.role="status",e.textContent=t,document.body.append(e),setTimeout(()=>e.remove(),2400)}function ze(){const t=new URLSearchParams(location.search).get("content");t&&requestAnimationFrame(()=>Xt(t))}const Z=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),mt=t=>ft(t).trim(),it=t=>{const e=mt(t).replace(/^\.\//,"");return!e.startsWith("documents/system-breakdowns/")||/[\u0000-\u001f\\?#:]/.test(e)||e.split("/").some(o=>!o||o==="."||o==="..")?"":/\.(?:pdf|png|jpe?g|webp)$/i.test(e)?"./"+e:""},Ct=t=>{const e=Math.round(Number(t==null?void 0:t.width)),o=Math.round(Number(t==null?void 0:t.height));return e>0&&o>0?' width="'+e+'" height="'+o+'"':""},Le=(t,e)=>/^[a-z][a-z0-9-]*$/.test(mt(t.id))?mt(t.id):"document-"+e;function Me(t){var o;if(!((o=t==null?void 0:t.items)!=null&&o.length))return"";const e=t.items.map((i,x)=>{var f,b,y,m;const s=Le(i,x),a=it(((f=i.pdf)==null?void 0:f.path)||((b=i.button)==null?void 0:b.href)),d=it((y=i.pdf)==null?void 0:y.preview),n=(i.mindmaps||[]).find(w=>it(w.path)),c=it((n==null?void 0:n.preview)||(n==null?void 0:n.path));return'<article class="system-breakdown" data-breakdown-id="'+s+'" aria-labelledby="breakdown-title-'+s+'"><h2 id="breakdown-title-'+s+'">'+Z(i.title)+'</h2><div class="system-breakdown-previews"><figure class="system-breakdown-pdf"><a class="system-breakdown-media" href="'+Z(a)+'" target="_blank" rel="noopener noreferrer" aria-label="新标签页查看完整PDF"><img src="'+Z(d)+'"'+Ct(i.pdf)+' alt="PDF首页预览" loading="lazy" decoding="async"></a><figcaption>PDF 文档预览</figcaption></figure><figure class="system-breakdown-mindmap"><button class="system-breakdown-media system-breakdown-enlarge" type="button" data-breakdown-open="'+x+'" aria-label="放大查看完整思维导图"><img src="'+Z(c)+'"'+Ct(n)+' alt="XMind完整思维导图预览" loading="lazy" decoding="async"><span class="system-breakdown-enlarge-hint" aria-hidden="true">点击放大</span></button><figcaption>XMind 思维导图 · 点击放大</figcaption></figure></div><p class="system-breakdown-intro">'+Z(i.intro).replace(/\r?\n/g,"<br>")+'</p><div class="actions"><a class="button" href="'+Z(a)+'" target="_blank" rel="noopener noreferrer">'+Z(((m=i.button)==null?void 0:m.label)||"查看完整文档")+'<span aria-hidden="true">↗</span></a></div></article>'}).join("");return'<section class="section section-tint home-analysis system-breakdowns" id="system-analysis" aria-labelledby="system-breakdowns-label"><div class="wrap system-breakdowns-wrap"><p class="eyebrow" id="system-breakdowns-label">'+Z(t.eyebrow)+'</p><div class="system-breakdowns-grid">'+e+"</div></div></section>"}function Ie(t,e,{catalog:o=!1}={}){var d;if(!t||!((d=e==null?void 0:e.items)!=null&&d.length)||o)return()=>{};let i=null,x=!1;const s=()=>{if(!i)return;const n=i;i=null,n.controller.abort(),n.dialog.remove();const c=document.body.style;n.overflow?c.setProperty("overflow",n.overflow,n.overflowPriority):c.removeProperty("overflow"),n.padding?c.setProperty("padding-right",n.padding,n.paddingPriority):c.removeProperty("padding-right"),(window.scrollY!==n.scrollY||window.scrollX!==n.scrollX)&&window.scrollTo({left:n.scrollX,top:n.scrollY,behavior:"instant"}),!x&&n.trigger.isConnected&&n.trigger.focus({preventScroll:!0})},a=n=>{var rt,st;const c=(st=(rt=n.target).closest)==null?void 0:st.call(rt,"[data-breakdown-open]");if(!c||!t.contains(c)||n.defaultPrevented||i)return;const f=Number(c.dataset.breakdownOpen),b=e.items[f],y=((b==null?void 0:b.mindmaps)||[]).filter(u=>it(u.path));if(!y.length)return;n.preventDefault();const m=new AbortController,w=m.signal,r=document.createElement("dialog");r.className="system-breakdown-lightbox",r.setAttribute("aria-labelledby","system-breakdown-viewer-title"),r.innerHTML='<header class="system-breakdown-viewer-header"><h2 id="system-breakdown-viewer-title"></h2><button class="system-breakdown-viewer-close" type="button" autofocus aria-label="关闭思维导图预览">关闭 <span aria-hidden="true">×</span></button></header><div class="system-breakdown-viewer-toolbar"><div class="system-breakdown-pages" hidden><button type="button" data-viewer-previous aria-label="上一张思维导图">上一张</button><span data-viewer-page></span><button type="button" data-viewer-next aria-label="下一张思维导图">下一张</button></div><div class="system-breakdown-zoom-controls"><button type="button" data-viewer-out aria-label="缩小思维导图">−</button><output data-viewer-zoom aria-label="当前缩放比例">100%</output><button type="button" data-viewer-in aria-label="放大思维导图">＋</button><button type="button" data-viewer-fit>完整显示</button></div><p>滚轮缩放 · 拖动查看</p></div><div class="system-breakdown-viewer-viewport" tabindex="0" role="region" aria-label="思维导图，可用滚轮缩放、拖动查看，方向键平移，加减键缩放，数字0完整显示"></div>',r.querySelector("h2").textContent=mt(b.title);const l=r.querySelector(".system-breakdown-viewer-viewport"),$=r.querySelector("[data-viewer-zoom]"),P=r.querySelector(".system-breakdown-pages");P.hidden=y.length<2;const A=document.body.style;i={dialog:r,controller:m,trigger:c,overflow:A.getPropertyValue("overflow"),overflowPriority:A.getPropertyPriority("overflow"),padding:A.getPropertyValue("padding-right"),paddingPriority:A.getPropertyPriority("padding-right"),scrollX:window.scrollX,scrollY:window.scrollY};const T=Math.max(0,window.innerWidth-document.documentElement.clientWidth);T&&(A.paddingRight=parseFloat(getComputedStyle(document.body).paddingRight)+T+"px"),A.overflow="hidden";let I,D=0,C=0,g=0,S=1,v=1,E=0,h=0,k=!0,M=null;const q=new Map;window.matchMedia("(pointer: coarse)").matches&&(r.querySelector(".system-breakdown-viewer-toolbar p").textContent="双指缩放 · 单指拖动",l.setAttribute("aria-label","思维导图，可双指缩放、单指拖动查看，也可使用缩放按钮"));const K=()=>({width:l.clientWidth,height:l.clientHeight}),U=()=>{if(!I||!C||!g)return;const u=K(),L=C*S,j=g*S;E=L<=u.width?(u.width-L)/2:Math.max(u.width-L,Math.min(0,E)),h=j<=u.height?(u.height-j)/2:Math.max(u.height-j,Math.min(0,h)),I.style.transform="translate("+E+"px,"+h+"px) scale("+S+")",$.textContent=Math.round(S*100)+"%",l.classList.toggle("is-zoomed",L>u.width+1||j>u.height+1),r.querySelector("[data-viewer-out]").disabled=S<=v*.5+1e-4,r.querySelector("[data-viewer-in]").disabled=S>=Math.max(4,v)-1e-4},N=()=>{if(!C||!g)return;const u=K();v=Math.min(u.width/C,u.height/g,1)*.96,S=v,E=(u.width-C*S)/2,h=(u.height-g*S)/2,k=!0,U()},X=(u,L)=>{if(!I||!C||!g)return;const j=K(),B=l.getBoundingClientRect(),Y=L?{x:L.clientX-B.left,y:L.clientY-B.top}:{x:j.width/2,y:j.height/2},xt=Math.max(v*.5,Math.min(Math.max(4,v),S*u));E=Y.x-(Y.x-E)*xt/S,h=Y.y-(Y.y-h)*xt/S,S=xt,k=!1,U()},ot=u=>{D=(u+y.length)%y.length,C=g=0,M=null,q.clear(),l.classList.remove("is-dragging");const L=new Image;L.className="system-breakdown-viewer-image",L.alt=mt(b.title)+" · 思维导图 "+(D+1),L.draggable=!1;const j=document.createElement("p");j.className="system-breakdown-viewer-status",j.setAttribute("role","status"),j.textContent="正在加载完整思维导图…",I=L,l.replaceChildren(I,j),I.addEventListener("load",()=>{I!==L||!i||(C=L.naturalWidth,g=L.naturalHeight,L.style.width=C+"px",L.style.height=g+"px",j.remove(),N())},{once:!0,signal:w}),I.addEventListener("error",()=>{I===L&&(j.textContent="思维导图暂时无法加载，请关闭后重试。")},{once:!0,signal:w}),I.src=it(y[D].path),r.querySelector("[data-viewer-page]").textContent=D+1+" / "+y.length};r.querySelector(".system-breakdown-viewer-close").addEventListener("click",()=>r.close(),{signal:w}),r.addEventListener("close",s,{signal:w}),r.addEventListener("click",u=>{if(u.target!==r)return;const L=r.getBoundingClientRect();(u.clientX<L.left||u.clientX>L.right||u.clientY<L.top||u.clientY>L.bottom)&&r.close()},{signal:w}),r.addEventListener("wheel",u=>{u.preventDefault(),u.stopPropagation()},{passive:!1,signal:w}),l.addEventListener("wheel",u=>{u.preventDefault(),u.stopPropagation();const L=u.deltaY*(u.deltaMode===1?16:u.deltaMode===2?l.clientHeight:1);X(Math.exp(Math.max(-.3,Math.min(.3,-L*.0015))),u)},{passive:!1,signal:w});const lt=()=>{const u=[...q.values()];if(!u.length)M=null,l.classList.remove("is-dragging");else if(u.length===1)M={kind:"pan",point:u[0],x:E,y:h},l.classList.add("is-dragging");else{const[L,j]=u,B=l.getBoundingClientRect(),Y=(L.x+j.x)/2-B.left,xt=(L.y+j.y)/2-B.top;M={kind:"pinch",distance:Math.max(1,Math.hypot(j.x-L.x,j.y-L.y)),scale:S,anchorX:(Y-E)/S,anchorY:(xt-h)/S},l.classList.add("is-dragging")}};l.addEventListener("pointerdown",u=>{u.button!==0||!C||q.size>=2||(u.preventDefault(),l.focus({preventScroll:!0}),q.set(u.pointerId,{x:u.clientX,y:u.clientY}),l.setPointerCapture(u.pointerId),lt())},{signal:w}),l.addEventListener("pointermove",u=>{if(!(!M||!q.has(u.pointerId))){if(u.preventDefault(),q.set(u.pointerId,{x:u.clientX,y:u.clientY}),M.kind==="pinch"&&q.size===2){const[L,j]=[...q.values()],B=l.getBoundingClientRect(),Y=Math.hypot(j.x-L.x,j.y-L.y);S=Math.max(v*.5,Math.min(Math.max(4,v),M.scale*Y/M.distance)),E=(L.x+j.x)/2-B.left-M.anchorX*S,h=(L.y+j.y)/2-B.top-M.anchorY*S}else E=M.x+u.clientX-M.point.x,h=M.y+u.clientY-M.point.y;k=!1,U()}},{signal:w});const nt=u=>{q.delete(u.pointerId)&&lt()};l.addEventListener("pointerup",nt,{signal:w}),l.addEventListener("pointercancel",nt,{signal:w}),l.addEventListener("lostpointercapture",nt,{signal:w}),l.addEventListener("keydown",u=>{if(!(u.ctrlKey||u.metaKey||u.altKey)){if(["+","="].includes(u.key))X(1.25);else if(["-","_"].includes(u.key))X(.8);else if(u.key==="0")N();else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(u.key))E+=u.key==="ArrowLeft"?60:u.key==="ArrowRight"?-60:0,h+=u.key==="ArrowUp"?60:u.key==="ArrowDown"?-60:0,k=!1,U();else return;u.preventDefault(),u.stopPropagation()}},{signal:w}),r.querySelector("[data-viewer-out]").addEventListener("click",()=>X(.8),{signal:w}),r.querySelector("[data-viewer-in]").addEventListener("click",()=>X(1.25),{signal:w}),r.querySelector("[data-viewer-fit]").addEventListener("click",N,{signal:w}),r.querySelector("[data-viewer-previous]").addEventListener("click",()=>ot(D-1),{signal:w}),r.querySelector("[data-viewer-next]").addEventListener("click",()=>ot(D+1),{signal:w}),window.addEventListener("resize",()=>{k?N():U()},{signal:w}),document.body.append(r);try{r.showModal(),ot(0)}catch{s()}};return t.addEventListener("click",a),()=>{x=!0,t.removeEventListener("click",a),s()}}function Ae(t){for(const e of t.querySelectorAll('img[loading="lazy"][src]'))e.dataset.lazySrc=e.getAttribute("src"),e.removeAttribute("src");for(const e of t.querySelectorAll("video[poster]"))e.dataset.lazyPoster=e.getAttribute("poster"),e.removeAttribute("poster");return t}function je(t=document){const e=new AbortController,o=e.signal,i=new Set;let x=!1;const s=l=>{if(x)return;const $=l.dataset.lazySrc;if($){const P=()=>{if(x||l.dataset.mediaRetry==="1")return;l.dataset.mediaRetry="1";const A=setTimeout(()=>{i.delete(A),!x&&l.isConnected&&(l.src=$)},1200);i.add(A)};l.addEventListener("error",P,{signal:o}),l.src=$,delete l.dataset.lazySrc}l.dataset.lazyPoster&&(l.poster=l.dataset.lazyPoster,delete l.dataset.lazyPoster)},a="IntersectionObserver"in window?new IntersectionObserver(l=>{for(const $ of l)$.isIntersecting&&(s($.target),a.unobserve($.target))},{rootMargin:"240px 0px",threshold:0}):null;for(const l of t.querySelectorAll("[data-lazy-src],[data-lazy-poster]"))a?a.observe(l):s(l);const d=[...t.querySelectorAll(".cover-art,.cover-blur-art,.cover-action-blur-art")];let n=!1;const c=()=>{if(x||n)return;n=!0;const l=setTimeout(()=>{i.delete(l),x||d.forEach($=>{$.isConnected&&!$.naturalWidth&&($.src=$.getAttribute("src"))})},1200);i.add(l)};d.forEach(l=>l.addEventListener("error",c,{signal:o}));const f=()=>t.querySelectorAll("img[src]").forEach(l=>{if(!l.complete||l.naturalWidth)return;const $=l.getBoundingClientRect();$.bottom>=-240&&$.top<=innerHeight+240&&(delete l.dataset.mediaRetry,l.src=l.getAttribute("src"))});window.addEventListener("online",f,{signal:o});const b=()=>{if(!document.body.hasAttribute("data-defer-atmosphere"))return;const l=document.getElementById("cover");(!l||scrollY>l.offsetHeight-innerHeight*.6)&&(document.body.classList.add("atmosphere-ready"),window.removeEventListener("scroll",b))};document.body.hasAttribute("data-defer-atmosphere")&&(window.addEventListener("scroll",b,{passive:!0,signal:o}),b());const y=document.getElementById("cover"),m=y&&"IntersectionObserver"in window?new IntersectionObserver(l=>{for(const $ of l)y.classList.toggle("is-offscreen",!$.isIntersecting)},{threshold:0}):null;m&&m.observe(y);const w=[...t.querySelectorAll("video:not([data-preview-video])")],r="IntersectionObserver"in window?new IntersectionObserver(l=>{for(const $ of l)$.isIntersecting||$.target.pause()},{threshold:0}):null;return w.forEach(l=>r==null?void 0:r.observe(l)),document.addEventListener("visibilitychange",()=>{document.hidden&&w.forEach(l=>l.pause())},{signal:o}),()=>{x=!0,e.abort(),a==null||a.disconnect(),m==null||m.disconnect(),r==null||r.disconnect(),i.forEach(clearTimeout),i.clear()}}function Vt(t){const e=String(t??"");if(e.length>2e3||!/^https:\/\/(?:www\.)?bilibili\.com\//i.test(e)||/[\s\\\u0000-\u001f\u007f]/.test(e))return"#";try{const o=new URL(e);return o.protocol==="https:"&&["www.bilibili.com","bilibili.com"].includes(o.hostname)&&!o.username&&!o.password&&!o.port&&/^\/video\/BV[0-9A-Za-z]{10}\/?$/.test(o.pathname)?o.href:"#"}catch{return"#"}}const W=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Te(){const t=[2,2.5,3,3.5,4,4.5,5],e=[18,22,26,30,24,20,28],o=[.5,.6,.7,.8,.85],i=[18,-30,24,-18,35,-22],x=[8,-12,10,-9,14,-11];return'<div class="cover-snow" aria-hidden="true">'+Array.from({length:84},(s,a)=>{const d=a%19===0,n=d?16:e[a%e.length],c=Math.sin((a+1)*78.233)*43758.5453,f=c-Math.floor(c);return'<span class="cover-snowflake" style="--snow-x:'+(2+a*.38196601125%1*96).toFixed(3)+"%;--snow-size:"+(d?5.5:t[a%t.length])+"px;--snow-duration:"+n+"s;--snow-delay:"+(-f*n).toFixed(3)+"s;--snow-opacity:"+o[a%o.length]+";--snow-drift:"+i[a%i.length]+"px;--snow-sway:"+x[a%x.length]+'px"></span>'}).join("")+"</div>"}function Ce(t,e={}){const o=t.image,i=/^media\/[a-z0-9_./-]+\.(?:webp|png|jpg)$/i.test(o.path)&&!o.path.includes("..")?"./"+o.path:"",x='<div class="cover-action-blur" aria-hidden="true"><img class="cover-action-blur-art" src="'+W(i)+'" width="'+Number(o.width)+'" height="'+Number(o.height)+'" alt="" decoding="async"></div>';return'<section class="immersive-cover is-loading" id="cover" aria-labelledby="cover-title"><div class="cover-art-stage"><div class="cover-visual"><img class="cover-art" src="'+W(i)+'" width="'+Number(o.width)+'" height="'+Number(o.height)+'" alt="'+W(o.alt)+'" fetchpriority="high" decoding="async"><div class="cover-blur" aria-hidden="true"><img class="cover-blur-art" src="'+W(i)+'" width="'+Number(o.width)+'" height="'+Number(o.height)+'" alt="" decoding="async"></div>'+x+Te()+'<div class="cover-shade" aria-hidden="true"></div></div><div class="cover-copy-parallax"><div class="cover-copy"><p class="cover-eyebrow">'+W(t.eyebrow)+'</p><h1 id="cover-title">'+W(t.title)+'</h1><p class="cover-subtitle">'+W(t.subtitle)+'</p><p class="cover-project">'+W(t.project)+'</p></div></div></div><div class="cover-primary-actions"><a class="cover-primary-action" href="'+W(Vt(e.playthroughURL))+'" target="_blank" rel="noopener noreferrer" data-content-ids="site.profile.demoUrl"><span>'+W(t.actions.playthrough.label)+'</span></a><a class="cover-primary-action" href="#ending" data-cover-contact><span>'+W(t.actions.contact.label)+"</span></a></div></section>"}function Ne(t,e){if(!t)return()=>{};const o=matchMedia("(prefers-reduced-motion: reduce)"),i=new URLSearchParams(location.search).has("editor_preview")||new URLSearchParams(location.search).has("editorPreview");let x=!1,s=0;const a=[...document.querySelectorAll("#about-me>.wrap,#cases>.wrap,#system-analysis>.wrap,#ending>.wrap")];document.body.classList.toggle("cover-preview-static",i),document.body.classList.toggle("home-motion-enabled",!o.matches&&!i);const d=()=>{s=0,!x&&(t.style.setProperty("--cover-drift",(o.matches||i?0:Math.min(12,Math.max(0,scrollY)*.018))+"px"),e==null||e.classList.toggle("cover-header-solid",scrollY>40))},n=()=>{s||(s=requestAnimationFrame(d))},c=()=>{x||(t.classList.remove("is-loading"),t.classList.add("is-ready"),document.body.classList.add("cover-ready"))};i?c():t.querySelector("img.cover-art").decode().catch(()=>{}).then(c);const f=new IntersectionObserver(m=>{m.forEach(w=>{w.isIntersecting&&(w.target.classList.add("is-visible"),f.unobserve(w.target))})},{threshold:.08,rootMargin:"0px 0px -50px 0px"});a.forEach(m=>{m.classList.add("cover-reveal"),i||o.matches?m.classList.add("is-visible"):f.observe(m)});const b=()=>{document.body.classList.toggle("home-motion-enabled",!o.matches&&!i),o.matches&&a.forEach(m=>m.classList.add("is-visible")),d()},y=m=>{const w=m.target.closest("[data-cover-contact]");if(!w||m.defaultPrevented||m.button!==0||m.metaKey||m.ctrlKey||m.shiftKey||m.altKey)return;const r=document.getElementById("ending");r&&(m.preventDefault(),history.pushState(null,"",w.href),r.scrollIntoView({block:"start",behavior:o.matches?"instant":"smooth"}))};return t.addEventListener("click",y),window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n,{passive:!0}),o.addEventListener("change",b),d(),()=>{x=!0,cancelAnimationFrame(s),f.disconnect(),t.removeEventListener("click",y),window.removeEventListener("scroll",n),window.removeEventListener("resize",n),o.removeEventListener("change",b),document.body.classList.remove("cover-ready","home-motion-enabled","cover-preview-static")}}function qe(){const t=new URLSearchParams(location.search);if(!document.body.classList.contains("immersive-home")||window.parent!==window||["editor_preview","editorPreview","content_catalog"].some(g=>t.has(g)))return()=>{};const e=[...document.querySelectorAll("main > section")],o=new Set(["cover","about-me","ending"]),i=e.filter(g=>o.has(g.id)),x=document.getElementById("cases"),s=document.querySelector(".cover-header"),a=[...i,...s?[s]:[]],d=matchMedia("(prefers-reduced-motion: reduce)"),n=matchMedia("(min-width: 1024px)"),c=g=>window.scrollY+g.getBoundingClientRect().top,f=g=>Math.max(0,Math.min(g,document.documentElement.scrollHeight-innerHeight)),b=g=>g.getBoundingClientRect().height<=innerHeight+2;let y=null,m=0,w=-1/0,r=!1;const l=()=>{cancelAnimationFrame(m),m=0,y=null},$=()=>{l(),w=-1/0},P=(g,S=null)=>{l();const v=f(g);if(d.matches){window.scrollTo({top:v,behavior:"instant"});return}const E={source:S,start:scrollY,end:v,written:scrollY,time:performance.now(),duration:760};y=E;const h=k=>{if(m=0,r||y!==E)return;if(Math.abs(scrollY-E.written)>3){l();return}const M=Math.min(1,(k-E.time)/E.duration),q=M<.5?4*M**3:1-(-2*M+2)**3/2;window.scrollTo({top:E.start+(E.end-E.start)*q,behavior:"instant"}),E.written=scrollY,M<1?m=requestAnimationFrame(h):y=null};m=requestAnimationFrame(h)},A=(g,S)=>{if(!(g instanceof Element)||g.closest('input,textarea,select,video,audio,[contenteditable]:not([contenteditable="false"]),dialog'))return!0;for(let v=g;v&&v!==S;v=v.parentElement)if(v.scrollHeight>v.clientHeight+1&&/^(auto|scroll)$/.test(getComputedStyle(v).overflowY))return!0;return!1},T=g=>{const S=g.currentTarget===s?(y==null?void 0:y.source)||i.find(M=>Math.abs(scrollY-c(M))<=2):g.currentTarget;if(!S||!n.matches||d.matches||g.defaultPrevented||!g.cancelable||g.ctrlKey||g.metaKey||g.altKey||g.shiftKey||!g.deltaY||Math.abs(g.deltaX)>=Math.abs(g.deltaY)||document.querySelector("dialog[open]")||document.body.style.overflow==="hidden"||A(g.target,S)){l();return}const v=x?c(x):1/0;if(x&&scrollY>=v-2&&scrollY<v+x.offsetHeight-2){l();return}const E=performance.now();if(y){g.preventDefault(),w=E;return}if(!b(S)||Math.abs(scrollY-c(S))>2)return;if(E-w<180){g.preventDefault(),w=E;return}const h=Math.sign(g.deltaY),k=e[e.indexOf(S)+h];k&&(!o.has(k.id)&&!(S.id==="about-me"&&k===x&&h>0)||o.has(k.id)&&!b(k)||(g.preventDefault(),w=E,P(c(k),S)))},I=g=>{["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," ","Escape"].includes(g.key)&&$()},D=g=>{var S,v;(v=(S=g.target).closest)!=null&&v.call(S,"a[href]")&&$()},C=g=>{var S;g.origin===location.origin&&["portfolio:locate","portfolio:preview"].includes((S=g.data)==null?void 0:S.type)&&$()};return a.forEach(g=>g.addEventListener("wheel",T,{passive:!1})),document.addEventListener("click",D,!0),window.addEventListener("pointerdown",$,{passive:!0}),window.addEventListener("keydown",I),window.addEventListener("resize",$,{passive:!0}),window.addEventListener("popstate",$),window.addEventListener("hashchange",$),window.addEventListener("message",C),d.addEventListener("change",$),n.addEventListener("change",$),()=>{r=!0,$(),a.forEach(g=>g.removeEventListener("wheel",T)),document.removeEventListener("click",D,!0),window.removeEventListener("pointerdown",$),window.removeEventListener("keydown",I),window.removeEventListener("resize",$),window.removeEventListener("popstate",$),window.removeEventListener("hashchange",$),window.removeEventListener("message",C),d.removeEventListener("change",$),n.removeEventListener("change",$)}}const z=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),tt=t=>/^media\/[a-z0-9_./-]+\.(?:webp|png|jpg|jpeg|mp4)$/i.test(t??"")&&!t.includes("..")?"./"+t:"",De=t=>/^\.\/[a-z0-9-]+\.html(?:#[a-z0-9-]+)?$/i.test(t??"")?t:"#";function Fe(t,e){if(!t)return"";const o=z(Vt(e));return'<div class="project-full-playthrough" id="full-playthrough"><a class="project-full-playthrough-cover" href="'+o+'" target="_blank" rel="noopener noreferrer" aria-label="'+z(t.title)+'"><img src="'+z(tt(t.preview||t.path))+'" width="'+Number(t.width)+'" height="'+Number(t.height)+'" alt="'+z(t.title)+'" loading="lazy" decoding="async"></a><div><h3>'+z(t.title)+"</h3><p>"+z(t.intro)+'</p><a class="text-link" href="'+o+'" target="_blank" rel="noopener noreferrer" data-content-ids="site.profile.demoUrl">'+z(t.label)+' <span aria-hidden="true">↗</span></a></div></div>'}function Zt(t,e={}){var x;if(!((x=t==null?void 0:t.groups)!=null&&x.length))return"";const o=t.labels||{},i=t.groups.map((s,a)=>{if(Number.isInteger(e.onlyGroup)&&e.onlyGroup!==a)return"";const d=(r,l,$=!1)=>(r||[]).map((P,A)=>{const T=tt(P.path),I=tt(P.preview)||T,D=tt(P.videoPoster||P.poster),C=P.type==="video",g=T?C?'<video data-preview-video data-src="'+z(T)+'"'+(D?' poster="'+z(D)+'"':"")+' width="'+Number(P.width||1280)+'" height="'+Number(P.height||720)+'" muted loop playsinline preload="none" aria-label="'+z(P.alt)+'">'+z(o.videoFallback)+"</video>":'<img src="'+z(I)+'" width="'+Number(P.width||1280)+'" height="'+Number(P.height||720)+'" alt="'+z(P.alt)+'" loading="lazy" decoding="async">':'<span class="project-preview-empty">'+z(P.pendingLabel||o.pending)+"</span>",S=a+":"+(l===void 0?"":l+":")+A;return'<figure class="project-preview-item">'+(T?'<button class="project-preview-open" type="button" '+($?"data-preview-comparison":"data-preview-open")+'="'+S+'" aria-label="'+z(o.open+P.title)+'">'+g+"</button>":'<div class="project-preview-open project-preview-placeholder" role="img" aria-label="'+z(P.pendingLabel||o.pending)+'">'+g+"</div>")+"<figcaption><strong>"+z(P.title)+"</strong><span>"+z(P.kindLabel)+(T?" · "+z(o.enlarge):"")+"</span></figcaption>"+(l!==void 0&&P.description?'<p class="system-showcase-description">'+z(P.description)+"</p>":"")+(l!==void 0&&T&&P.pendingLabel?'<p class="system-showcase-pending">'+z(P.pendingLabel)+"</p>":"")+(l!==void 0&&P.note?'<p class="system-showcase-note">'+z(P.note)+"</p>":"")+"</figure>"}).join(""),n=["combat-design","system-design","level-design"][a]||"project-preview-"+a,c=e.standalone?"":'<div class="project-preview-heading"><'+(t.title?"h3":"h2")+' id="preview-group-'+a+'">'+(s.number?'<span class="project-preview-number">'+z(s.number)+"</span> ":"")+z(s.title)+"</"+(t.title?"h3":"h2")+"></div>",f=e.standalone?"h2":"h3",b=e.chapterLabels||{},y=e.standalone&&Array.isArray(s.modules)?s.modules.map((r,l)=>{var D,C,g;const $=/^[a-z][a-z0-9-]*$/.test(r.id||"")?r.id:"system-chapter-"+l,P=r.goal?'<h3 class="system-detail-label">'+z(b.goal)+'</h3><p class="system-detail-text">'+z(r.goal)+"</p>":"",A=(D=r.rules)!=null&&D.length?'<h3 class="system-detail-label">'+z(b.rules)+'</h3><ul class="system-detail-rules">'+r.rules.map(S=>"<li>"+z(S)+"</li>").join("")+"</ul>":"",T=r.audio&&/^media\/[a-z0-9_./-]+\.wav$/i.test(r.audio.path||"")&&!r.audio.path.includes("..")?'<figure class="system-detail-audio"><figcaption>'+z(r.audio.label)+'</figcaption><audio data-system-audio controls preload="none" src="./'+z(r.audio.path)+'" aria-label="'+z(r.audio.label)+'"></audio></figure>':"",I=(C=r.optimisation)!=null&&C.length?'<h3 class="system-detail-label">'+z(b.optimisation)+"</h3>"+r.optimisation.map(S=>'<p class="system-detail-text">'+z(S)+"</p>").join(""):"";return'<section class="system-showcase-module" id="'+$+'" aria-labelledby="system-module-'+l+'"><'+f+' id="system-module-'+l+'">'+(r.number?'<span class="project-preview-number">'+z(r.number)+"</span> ":"")+z(r.title)+"</"+f+">"+P+(b.media?'<h3 class="system-detail-label">'+z(b.media)+"</h3>":"")+'<div class="project-preview-grid">'+d(r.items,l)+"</div>"+A+T+I+((g=r.comparison)!=null&&g.length?'<div class="system-detail-comparison">'+d(r.comparison,l,!0)+"</div>":"")+"</section>"}).join(""):"",m=!e.standalone&&s.detail?'<p class="project-preview-detail"><a class="text-link" href="'+z(De(s.detail.href))+'">'+z(s.detail.label)+' <span aria-hidden="true">↗</span></a></p>':"",w=y||'<div class="project-preview-grid">'+d(s.items)+'</div><p class="project-preview-description">'+z(s.intro)+"</p>"+m;return'<section class="project-preview-group'+(y?" system-showcase":"")+'" id="'+n+'"'+(e.standalone?' aria-label="'+z(s.title)+'"':' aria-labelledby="preview-group-'+a+'"')+">"+c+w+"</section>"}).join("");return'<section class="section home-project-previews'+(e.standalone?" system-showcase-page":"")+'" id="cases"><div class="wrap">'+(!e.standalone&&t.eyebrow?'<header class="home-project-lead"><p class="eyebrow">'+z(t.eyebrow)+"</p>"+(t.title?"<h2>"+z(t.title)+"</h2>":"")+Fe(t.playthrough,e.playthroughURL)+"</header>":"")+i+(e.endContent||"")+"</div></section>"}function Re(t){const e=(t.chapters||[]).filter(o=>/^[a-z][a-z0-9-]*$/.test(o.id||"")).map(o=>'<a href="#'+z(o.id)+'">'+z(o.number+" "+o.title)+"</a>").join("");return'<div class="system-detail-navigation"><div class="wrap"><nav aria-label="'+z(t.navigationLabel)+'">'+e+"</nav></div></div>"}function Ue(t,e,{catalog:o=!1}={}){if(!t||!e)return()=>{};const i=e.labels||{},x=[...t.querySelectorAll("audio[data-system-audio]")];x.forEach(h=>{h.volume=.126});const s=[...t.querySelectorAll("video[data-preview-video]")],a=new Map,d=new Set;let n=!1,c=!1,f,b,y,m,w=!1,r=null,l=0;const $=h=>!o&&!n&&!document.hidden&&!c&&h===r&&a.has(h),P=()=>{if(o||n||document.hidden||c)return null;const h=window.innerWidth||document.documentElement.clientWidth,k=window.innerHeight||document.documentElement.clientHeight,M=U=>{const N=U.getBoundingClientRect(),X=Math.abs(N.top+N.height/2-k/2)/k+Math.abs(N.left+N.width/2-h/2)/h;return a.get(U)*2-X};let q=null,K=-1/0;for(const U of a.keys()){const N=M(U);N>K&&(q=U,K=N)}return r&&a.has(r)&&M(r)>=K-.1?r:q},A=h=>{if(!$(h)){h.pause();return}d.has(h)||!h.paused&&h.getAttribute("src")||(h.muted=h.defaultMuted=!0,h.getAttribute("src")||(h.src=h.dataset.src),d.add(h),Promise.resolve(h.play()).then(()=>{var k;(k=h.closest(".project-preview-open"))==null||k.classList.remove("is-play-blocked")}).catch(()=>{var k;(k=h.closest(".project-preview-open"))==null||k.classList.add("is-play-blocked")}).finally(()=>{d.delete(h),$(h)||h.pause()}))},T=()=>{r=P(),s.forEach(A)},I=()=>{!l&&a.size&&(l=requestAnimationFrame(()=>{l=0,T()}))},D=new IntersectionObserver(h=>{h.forEach(k=>{k.isIntersecting&&k.intersectionRatio>=.2?a.set(k.target,k.intersectionRatio):a.delete(k.target)}),T()},{threshold:[0,.2,.5,.75,1]});s.forEach(h=>D.observe(h));const C=()=>{b instanceof HTMLVideoElement&&(b.pause(),b.removeAttribute("src"),b.load()),b=null},g=()=>{c&&(c=!1,document.body.style.overflow=m,C(),f.querySelector(".project-preview-lightbox-content").replaceChildren(),T(),y!=null&&y.isConnected&&y.focus({preventScroll:!0}))},S=()=>{f||(f=document.createElement("dialog"),f.className="project-preview-lightbox",f.setAttribute("aria-labelledby","project-preview-lightbox-title"),f.innerHTML='<div class="project-preview-lightbox-header"><h2 id="project-preview-lightbox-title"></h2><button class="project-preview-close" type="button" autofocus data-content-id="home.previews.labels.close" data-content-ids="home.previews.labels.close">'+z(i.close)+'</button></div><div class="project-preview-lightbox-content"></div>',f.querySelector(".project-preview-close").addEventListener("click",()=>f.close()),f.addEventListener("close",g),f.addEventListener("click",h=>{const k=f.getBoundingClientRect();h.target===f&&(h.clientX<k.left||h.clientX>k.right||h.clientY<k.top||h.clientY>k.bottom)&&f.close()}),document.body.append(f))},v=h=>{var ot,lt,nt,rt,st,u,L,j,B,Y;const k=h.target.closest("[data-preview-open],[data-preview-comparison]");if(!k||!t.contains(k))return;const M=(k.dataset.previewComparison||k.dataset.previewOpen).split(":").map(Number),[q,K,U]=M,N=k.dataset.previewComparison?(rt=(nt=(lt=(ot=e.groups[q])==null?void 0:ot.modules)==null?void 0:lt[K])==null?void 0:nt.comparison)==null?void 0:rt[U]:M.length===3?(j=(L=(u=(st=e.groups[q])==null?void 0:st.modules)==null?void 0:u[K])==null?void 0:L.items)==null?void 0:j[U]:(Y=(B=e.groups[q])==null?void 0:B.items)==null?void 0:Y[K],X=tt(N==null?void 0:N.path);X&&(S(),C(),y=k,c||(m=document.body.style.overflow),c=!0,T(),f.querySelector("#project-preview-lightbox-title").textContent=N.title+" · "+N.kindLabel,b=document.createElement(N.type==="video"?"video":"img"),N.type==="video"?(b.controls=b.loop=b.playsInline=!0,b.muted=b.defaultMuted=!0,b.setAttribute("data-preview-video",""),b.setAttribute("aria-label",N.alt),tt(N.videoPoster||N.poster)&&(b.poster=tt(N.videoPoster||N.poster))):b.alt=N.alt,b.src=X,f.querySelector(".project-preview-lightbox-content").replaceChildren(b),document.body.style.overflow="hidden",f.showModal(),b instanceof HTMLVideoElement&&!o&&b.play().catch(()=>{}))},E=()=>{T(),b instanceof HTMLVideoElement&&(document.hidden?(w=!b.paused,b.pause()):w&&(b.play().catch(()=>{}),w=!1))};return t.addEventListener("click",v),document.addEventListener("visibilitychange",E),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),()=>{n=!0,D.disconnect(),cancelAnimationFrame(l),t.removeEventListener("click",v),document.removeEventListener("visibilitychange",E),window.removeEventListener("scroll",I),window.removeEventListener("resize",I),s.forEach(h=>h.pause()),x.forEach(h=>h.pause()),c&&(c=!1,document.body.style.overflow=m),C(),f==null||f.remove()}}function Oe(t){const e=t==null?void 0:t.querySelector(".nav");if(!e)return()=>{};const o=[...e.querySelectorAll("a[href]")],i=t.querySelector(".menu-toggle"),x=()=>location.pathname.split("/").pop()||"index.html",s=x()==="index.html",a=new URL(location.href),d=["editor_preview","editorPreview","content_catalog","content"].some(v=>a.searchParams.has(v)),n=s&&window.parent===window&&!d&&a.searchParams.get("detail-return")==="1"&&["#about-me","#cases"].includes(a.hash)?a.hash:"";n&&(a.searchParams.delete("detail-return"),a.hash="",history.replaceState(history.state,"",a.href),window.scrollTo({top:0,behavior:"instant"}));const c=v=>{try{return decodeURIComponent(v.replace(/^#/,""))}catch{return""}},f=v=>new URL(v.href,location.href),b=v=>o.find(E=>f(E).hash===v),y=o.find(v=>f(v).pathname.endsWith("/index.html")&&!f(v).hash),m=s?o.flatMap(v=>{const E=f(v),h=E.pathname.endsWith("/index.html")&&E.hash?document.getElementById(c(E.hash)):null;return h?[{link:v,element:h}]:[]}):[];let w=0,r=0,l=0,$=0,P=!1;const A=v=>o.forEach(E=>{E===v?E.setAttribute("aria-current","page"):E.removeAttribute("aria-current")}),T=()=>{if(w=0,P)return;if(!s){const M={"combat.html":"#cases","systems.html":"#cases","levels.html":"#cases","case.html":"#cases","retrospective.html":"#cases"}[x()]||(x()==="about.html"?location.hash==="#contact"?"#ending":"#about-me":"");A(M?b(M):null);return}const v=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0,E=Math.max(v+1,t.getBoundingClientRect().height+26);let h=y;for(const k of m)k.element.getBoundingClientRect().top<=E&&(h=k.link);if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-3){const k=m.at(-1);k&&k.element.getBoundingClientRect().top<window.innerHeight&&(h=k.link)}A(h)},I=()=>{w||(w=requestAnimationFrame(T))},D=()=>{i==null||i.setAttribute("aria-expanded","false"),e.classList.remove("open")},C=(v="instant")=>{const E=document.getElementById(c(location.hash));E&&E.scrollIntoView({block:"start",behavior:v}),I()},g=()=>{cancelAnimationFrame(l),cancelAnimationFrame($),l=requestAnimationFrame(()=>{l=0,$=requestAnimationFrame(()=>{$=0,P||C()})})},S=v=>{const E=v.target.closest("a[href]");if(!E||!e.contains(E)||v.defaultPrevented||v.button!==0||v.metaKey||v.ctrlKey||v.shiftKey||v.altKey)return;D();const h=f(E);if(!(h.pathname===location.pathname||s&&h.pathname.endsWith("/index.html"))||h.origin!==location.origin)return;const M=h.hash?document.getElementById(c(h.hash)):null;if(h.hash&&!M)return;v.preventDefault(),location.href!==h.href&&history.pushState(null,"",h.href);const q=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth";M?M.scrollIntoView({block:"start",behavior:q}):window.scrollTo({top:0,behavior:q}),A(E),I()};return e.addEventListener("click",S),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),window.addEventListener("hashchange",g),window.addEventListener("popstate",g),T(),r=requestAnimationFrame(()=>{if(!P)if(n){const v=new URL(location.href);v.hash=n,history.replaceState(history.state,"",v.href),C(window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth")}else location.hash&&C()}),()=>{P=!0,cancelAnimationFrame(w),cancelAnimationFrame(r),cancelAnimationFrame(l),cancelAnimationFrame($),e.removeEventListener("click",S),window.removeEventListener("scroll",I),window.removeEventListener("resize",I),window.removeEventListener("hashchange",g),window.removeEventListener("popstate",g)}}const He=`# 策划案例内容

> 建议使用本地文字编辑器修改。正文保存在本文件，隐藏标记用于映射页面字段。
> 手动编辑时请保留每段前后的 portfolio:text 标记；不要修改字段编号。

## 标题

### 标题

<!-- portfolio:text text_0001 -->
武侠战斗设计
<!-- /portfolio:text text_0001 -->

## 副标题

### 副标题

<!-- portfolio:text text_0002 -->
输入承诺、动作节奏与命中时序
<!-- /portfolio:text text_0002 -->

## 简介

### 简介

<!-- portfolio:text text_0003 -->
《江湖人生》目前包含主角的普通J攻击、白发无双J攻击与独立K秘籍武学三条攻击分支。案例重点是把真实按键、连击缓冲、收招和位移放入同一条可验证的动作时间线。以下目标依据已有需求与实现归纳，原始策划动机。
<!-- /portfolio:text text_0003 -->

## 开发状态

### 开发状态

<!-- portfolio:text text_0004 -->
该作品集内容都已接入游戏原型demo
<!-- /portfolio:text text_0004 -->

## 设计目标

### 设计目标 / 1

<!-- portfolio:text text_0005 -->
首先确认攻击键与攻击内容，确认攻击为j键攻击。每次真实按键只承诺下一刀，一共为三连击。避免单击或按住自动释放整套连击。
<!-- /portfolio:text text_0005 -->

### 设计目标 / 2

<!-- portfolio:text text_0006 -->
制作k键进行秘籍攻击，让玩家可以使出多种角色攻击让玩家不感到只有一套攻击乏味。
<!-- /portfolio:text text_0006 -->

### 设计目标 / 3

<!-- portfolio:text text_0007 -->
无双攻击需要区别游戏中普通攻击和秘籍攻击内容，需要带特效设想是带有黄色闪电展示无双状态攻击。
<!-- /portfolio:text text_0007 -->

## 玩家体验

### 玩家体验 / 1

<!-- portfolio:text text_0008 -->
玩家能够选择一刀、两刀或三刀，而不是被动等待固定演出。
<!-- /portfolio:text text_0008 -->

### 玩家体验 / 2

<!-- portfolio:text text_0009 -->
保留起手与蓄势的可读性，同时让真正突刺阶段集中爆发。
<!-- /portfolio:text text_0009 -->

### 玩家体验 / 3

<!-- portfolio:text text_0010 -->
秘籍形成“获得物品—使用学习—永久解锁”的明确系统反馈。
<!-- /portfolio:text text_0010 -->

## 机制与规则

### 机制与规则 / 1 / 标题

<!-- portfolio:text text_0011 -->
普通J：三段攻击，共享收招
<!-- /portfolio:text text_0011 -->

### 机制与规则 / 1 / 正文

<!-- portfolio:text text_0012 -->
按J键进行普通攻击；是角色的基础战斗方式。
<!-- /portfolio:text text_0012 -->

### 机制与规则 / 2 / 标题

<!-- portfolio:text text_0013 -->
秘籍武学
<!-- /portfolio:text text_0013 -->

### 机制与规则 / 2 / 正文

<!-- portfolio:text text_0014 -->
在背包中使用武林秘籍，学习后解锁 K 键武学攻击。
<!-- /portfolio:text text_0014 -->

### 机制与规则 / 3 / 标题

<!-- portfolio:text text_0015 -->
三段连击
<!-- /portfolio:text text_0015 -->

### 机制与规则 / 3 / 正文

<!-- portfolio:text text_0016 -->
连续按 K 键依次衔接三招：横挥、上挑、蓄力突刺。
<!-- /portfolio:text text_0016 -->

### 机制与规则 / 4 / 标题

<!-- portfolio:text text_0017 -->
收招与受击反馈
<!-- /portfolio:text text_0017 -->

### 机制与规则 / 4 / 正文

<!-- portfolio:text text_0018 -->
停止连击后，角色收招恢复待机；攻击命中时触发敌人受击表现。
<!-- /portfolio:text text_0018 -->

## 关键参数

### 关键参数 / 表头 / 1

<!-- portfolio:text text_0025 -->
攻击分支 / 阶段
<!-- /portfolio:text text_0025 -->

### 关键参数 / 表头 / 2

<!-- portfolio:text text_0026 -->
帧与速度
<!-- /portfolio:text text_0026 -->

### 关键参数 / 表头 / 3

<!-- portfolio:text text_0027 -->
时长 / 关键规则
<!-- /portfolio:text text_0027 -->

### 关键参数 / 表格行 / 1 / 1

<!-- portfolio:text text_0028 -->
普通J 第1/2/3段
<!-- /portfolio:text text_0028 -->

### 关键参数 / 表格行 / 1 / 2

<!-- portfolio:text text_0029 -->
36 / 15 / 10帧；24FPS源 ×1.75 / 1.50 / 1.40
<!-- /portfolio:text text_0029 -->

### 关键参数 / 表格行 / 1 / 3

<!-- portfolio:text text_0030 -->
0.857143 / 0.416667 / 0.297619秒
<!-- /portfolio:text text_0030 -->

### 关键参数 / 表格行 / 2 / 1

<!-- portfolio:text text_0031 -->
普通J 共享收招
<!-- /portfolio:text text_0031 -->

### 关键参数 / 表格行 / 2 / 2

<!-- portfolio:text text_0032 -->
28帧；24FPS源 ×1.95
<!-- /portfolio:text text_0032 -->

### 关键参数 / 表格行 / 2 / 3

<!-- portfolio:text text_0033 -->
0.598291秒；三连主体＋最后收招合计2.169719秒
<!-- /portfolio:text text_0033 -->

### 关键参数 / 表格行 / 3 / 1

<!-- portfolio:text text_0034 -->
无双J 前两刀主体
<!-- /portfolio:text text_0034 -->

### 关键参数 / 表格行 / 3 / 2

<!-- portfolio:text text_0035 -->
25 / 35帧；阶段变速＋2帧倍率过渡
<!-- /portfolio:text text_0035 -->

### 关键参数 / 表格行 / 3 / 3

<!-- portfolio:text text_0036 -->
0.744747 / 1.096195秒（按当前代码累计）
<!-- /portfolio:text text_0036 -->

### 关键参数 / 表格行 / 4 / 1

<!-- portfolio:text text_0037 -->
无双J 第1/2段收招
<!-- /portfolio:text text_0037 -->

### 关键参数 / 表格行 / 4 / 2

<!-- portfolio:text text_0038 -->
原38→14帧 / 原29→13帧；1.1×
<!-- /portfolio:text text_0038 -->

### 关键参数 / 表格行 / 4 / 3

<!-- portfolio:text text_0039 -->
1.439394→0.530303秒 / 1.098485→0.492424秒
<!-- /portfolio:text text_0039 -->

### 关键参数 / 表格行 / 5 / 1

<!-- portfolio:text text_0040 -->
无双J 第3段主体
<!-- /portfolio:text text_0040 -->

### 关键参数 / 表格行 / 5 / 2

<!-- portfolio:text text_0041 -->
73帧；起手1.8×、蓄势2.0×、突刺2.0×、金雷3.0×
<!-- /portfolio:text text_0041 -->

### 关键参数 / 表格行 / 5 / 3

<!-- portfolio:text text_0042 -->
1.303241秒；倍率均相对24FPS源帧
<!-- /portfolio:text text_0042 -->

### 关键参数 / 表格行 / 6 / 1

<!-- portfolio:text text_0043 -->
无双J 第3段专属收招
<!-- /portfolio:text text_0043 -->

### 关键参数 / 表格行 / 6 / 2

<!-- portfolio:text text_0044 -->
28帧；回拉1.8×、提刀2.1×、下甩2.4×
<!-- /portfolio:text text_0044 -->

### 关键参数 / 表格行 / 6 / 3

<!-- portfolio:text text_0045 -->
0.542328秒
<!-- /portfolio:text text_0045 -->

### 关键参数 / 表格行 / 7 / 1

<!-- portfolio:text text_0046 -->
无双J 第3段突进
<!-- /portfolio:text text_0046 -->

### 关键参数 / 表格行 / 7 / 2

<!-- portfolio:text text_0047 -->
120→168像素；0.220→0.125秒
<!-- /portfolio:text text_0047 -->

### 关键参数 / 表格行 / 7 / 3

<!-- portfolio:text text_0048 -->
仅屏幕X轴；有效命中本地帧33–72
<!-- /portfolio:text text_0048 -->

### 关键参数 / 表格行 / 8 / 1

<!-- portfolio:text text_0049 -->
K 第1/2/3段
<!-- /portfolio:text text_0049 -->

### 关键参数 / 表格行 / 8 / 2

<!-- portfolio:text text_0050 -->
28 / 28 / 52帧；原速24FPS
<!-- /portfolio:text text_0050 -->

### 关键参数 / 表格行 / 8 / 3

<!-- portfolio:text text_0051 -->
1.166667 / 1.166667 / 2.166667秒
<!-- /portfolio:text text_0051 -->

### 关键参数 / 表格行 / 9 / 1

<!-- portfolio:text text_0052 -->
K 第1/3段收招
<!-- /portfolio:text text_0052 -->

### 关键参数 / 表格行 / 9 / 2

<!-- portfolio:text text_0053 -->
11 / 5帧；原速24FPS
<!-- /portfolio:text text_0053 -->

### 关键参数 / 表格行 / 9 / 3

<!-- portfolio:text text_0054 -->
0.458333 / 0.208333秒；第2段直接idle
<!-- /portfolio:text text_0054 -->

### 关键参数 / 表格行 / 10 / 1

<!-- portfolio:text text_0055 -->
K 输入缓冲 / 命中
<!-- /portfolio:text text_0055 -->

### 关键参数 / 表格行 / 10 / 2

<!-- portfolio:text text_0056 -->
缓冲：16–27 / 15–27；命中：15–27 / 14–27 / 6–12
<!-- /portfolio:text text_0056 -->

### 关键参数 / 表格行 / 10 / 3

<!-- portfolio:text text_0057 -->
均为0起算、含首尾的段内帧号
<!-- /portfolio:text text_0057 -->

## 流程

### 流程 / 1 / 标题

<!-- portfolio:text text_0058 -->
判断攻击条件
<!-- /portfolio:text text_0058 -->

### 流程 / 1 / 说明

<!-- portfolio:text text_0059 -->
形态、持剑、学习状态、剧情/菜单、是否已有攻击；拒绝互相覆盖。
<!-- /portfolio:text text_0059 -->

### 流程 / 2 / 标题

<!-- portfolio:text text_0060 -->
第一次真实按键，按键开始攻击
<!-- /portfolio:text text_0060 -->

### 流程 / 2 / 说明

<!-- portfolio:text text_0061 -->
玩家按下攻击键，角色播放第一段攻击动作。播放第1段；初始缓冲为空。键盘echo不触发新段。
<!-- /portfolio:text text_0061 -->

### 流程 / 3 / 标题

<!-- portfolio:text text_0062 -->
连击输入，当前段输入窗口
<!-- /portfolio:text text_0062 -->

### 流程 / 3 / 说明

<!-- portfolio:text text_0063 -->
攻击过程中再次按键，准备衔接下一段攻击。接受一次新的攻击按键，缓存下一段；当前核心动作继续播放。
<!-- /portfolio:text text_0063 -->

### 流程 / 4 / 标题

<!-- portfolio:text text_0064 -->
判断是否继续连击
<!-- /portfolio:text text_0064 -->

### 流程 / 4 / 说明

<!-- portfolio:text text_0065 -->
有后续输入则衔接下一招，没有则播放收招动作。
<!-- /portfolio:text text_0065 -->

### 流程 / 5 / 标题

<!-- portfolio:text text_0066 -->
收招 / 恢复待机动作
<!-- /portfolio:text text_0066 -->

### 流程 / 5 / 说明

<!-- portfolio:text text_0067 -->
结束攻击判定和音效，角色恢复待机状态。关闭Hitbox、停止本段专用音频、重置攻击与连击状态，恢复本形态待机。
<!-- /portfolio:text text_0067 -->

## 实现方式

### 实现方式 / 1 / 标题

<!-- portfolio:text text_0068 -->
动画时间驱动规则
<!-- /portfolio:text text_0068 -->

### 实现方式 / 1 / 正文

<!-- portfolio:text text_0069 -->
普通与K动画在指定帧写入命中方法事件；无双通过frame_time累计局部变速后的时刻。同一时间表决定命中、收刀及原声重定时，AnimationPlayer与Engine全局速度保持1。
<!-- /portfolio:text text_0069 -->

### 实现方式 / 2 / 标题

<!-- portfolio:text text_0070 -->
数据分支共享命中底层
<!-- /portfolio:text text_0070 -->

### 实现方式 / 2 / 正文

<!-- portfolio:text text_0071 -->
hero_normal_attack_animations.gd、hero_wushuang_attack_animations.gd、hero_manual_combo.gd分别维护帧、窗口和声音；Hero负责段状态；Game负责目标距离、伤害和场景运动解析。
<!-- /portfolio:text text_0071 -->

### 实现方式 / 3 / 标题

<!-- portfolio:text text_0072 -->
原声与暂停
<!-- /portfolio:text text_0072 -->

### 实现方式 / 3 / 正文

<!-- portfolio:text text_0073 -->
三条分支使用各自原视频切分音轨，专用播放器避免叠加旧挥刀声。K音效在暂停、地图、背包冻结动画时同步暂停，取消或死亡停止；既有回归报告对此有专门检查。
<!-- /portfolio:text text_0073 -->

### 实现方式 / 4 / 标题

<!-- portfolio:text text_0074 -->
学习状态持久化
<!-- /portfolio:text text_0074 -->

### 实现方式 / 4 / 正文

<!-- portfolio:text text_0075 -->
秘籍使用成功消耗一本并标记已学，重复学习拒绝。技能写入原user://journey.json的learned_skills；旧存档缺失字段保持未学，未知或非法值不授予技能，死亡重试保留已学。
<!-- /portfolio:text text_0075 -->

## 问题与迭代

### 问题与迭代 / 1 / 发现问题

<!-- portfolio:text text_0076 -->
无双前两刀收招过长
<!-- /portfolio:text text_0076 -->

### 问题与迭代 / 1 / 原因分析

<!-- portfolio:text text_0077 -->
 前两段攻击存在多余的待机帧，导致收招时间过长，影响连击流畅度。
<!-- /portfolio:text text_0077 -->

### 问题与迭代 / 1 / 修改方案

<!-- portfolio:text text_0078 -->
精简多余帧数，保留必要的收招动作，使连续攻击能够自然衔接。
<!-- /portfolio:text text_0078 -->

### 问题与迭代 / 1 / 结果

<!-- portfolio:text text_0079 -->
两段收招时间分别缩短至约0.5秒，改善战斗节奏。
<!-- /portfolio:text text_0079 -->

### 问题与迭代 / 1 / 开发状态

<!-- portfolio:text text_0080 -->
已接入；有原生回归记录
<!-- /portfolio:text text_0080 -->

### 问题与迭代 / 1 / 依据

<!-- portfolio:text text_0081 -->

<!-- /portfolio:text text_0081 -->

### 问题与迭代 / 2 / 发现问题

<!-- portfolio:text text_0082 -->
无双状态在制作动画过程中动画出现位移
<!-- /portfolio:text text_0082 -->

### 问题与迭代 / 2 / 原因分析

<!-- portfolio:text text_0083 -->
AI生成攻击动画时，角色容易从2D像素风变成3D风格，同时出现人物位置偏移，导致动作前后不一致。
<!-- /portfolio:text text_0083 -->

### 问题与迭代 / 2 / 修改方案

<!-- portfolio:text text_0084 -->
统一角色参考图，明确限制2D像素风、固定镜头和人物位置，对异常动作帧重新生成与调整。
<!-- /portfolio:text text_0084 -->

### 问题与迭代 / 2 / 结果

<!-- portfolio:text text_0085 -->
 改善角色风格不一致和位置偏移的问题，使动画更适合逐帧制作并应用到游戏中。
<!-- /portfolio:text text_0085 -->

### 问题与迭代 / 2 / 开发状态

<!-- portfolio:text text_0086 -->
已接入；有原生回归记录
<!-- /portfolio:text text_0086 -->

### 问题与迭代 / 2 / 依据

<!-- portfolio:text text_0087 -->

<!-- /portfolio:text text_0087 -->

### 问题与迭代 / 3 / 发现问题

<!-- portfolio:text text_0088 -->
普通攻击在实际制作中出现多次废稿情况
<!-- /portfolio:text text_0088 -->

### 问题与迭代 / 3 / 原因分析

<!-- portfolio:text text_0089 -->
AI生成的攻击动作经常不符合预期，出现挥剑方向错误、剑与手分离等问题，导致多次制作废稿。
<!-- /portfolio:text text_0089 -->

### 问题与迭代 / 3 / 修改方案

<!-- portfolio:text text_0090 -->
明确每段攻击的动作顺序和挥剑方向，要求角色始终右手持剑，并通过关键帧参考和反复调整优化动作。
<!-- /portfolio:text text_0090 -->

### 问题与迭代 / 3 / 结果

<!-- portfolio:text text_0091 -->
筛选并重新制作了更符合设计要求的攻击动作，改善挥剑方向和武器脱手问题，使连击表现更加连贯。
<!-- /portfolio:text text_0091 -->

### 问题与迭代 / 3 / 开发状态

<!-- portfolio:text text_0092 -->
重复制作
<!-- /portfolio:text text_0092 -->

### 问题与迭代 / 3 / 依据

<!-- portfolio:text text_0093 -->

<!-- /portfolio:text text_0093 -->

### 问题与迭代 / 4 / 发现问题

<!-- portfolio:text text_0094 -->
攻击动作无法衔接恢复待机动作
<!-- /portfolio:text text_0094 -->

### 问题与迭代 / 4 / 原因分析

<!-- portfolio:text text_0095 -->
 攻击结束后的角色姿势与待机动作不一致，直接切换时出现动作跳变，缺少自然的过渡。
<!-- /portfolio:text text_0095 -->

### 问题与迭代 / 4 / 修改方案

<!-- portfolio:text text_0096 -->
尝试补充攻击后的过渡动作，并调整人物重心、持剑姿势与动作衔接，筛除不自然的动画帧。
<!-- /portfolio:text text_0096 -->

### 问题与迭代 / 4 / 结果

<!-- portfolio:text text_0097 -->
 排除了存在人物漂移、剑身变形的补帧方案，避免将不合格动作加入游戏。
<!-- /portfolio:text text_0097 -->

### 问题与迭代 / 4 / 开发状态

<!-- portfolio:text text_0098 -->
恢复待机动作
<!-- /portfolio:text text_0098 -->

### 问题与迭代 / 4 / 依据

<!-- portfolio:text text_0099 -->

<!-- /portfolio:text text_0099 -->

## 验证结果

### 验证结果 / 1 / 名称

<!-- portfolio:text text_0100 -->
无双节奏原生回归
<!-- /portfolio:text text_0100 -->

### 验证结果 / 1 / 结果

<!-- portfolio:text text_0101 -->
留存Godot 4.6.2 Windows原生记录：523项通过、0失败。覆盖单/双/三次真实输入、左右168像素、窄墙/地图边界、长帧、木桩去重与收招关闭判定。本次网站制作读取既有结果，没有重新运行游戏。
<!-- /portfolio:text text_0101 -->

### 验证结果 / 1 / 依据

<!-- portfolio:text text_0102 -->
youxitu/wushuang_pace_v2/tests/summary.json；tests/test_results.json
<!-- /portfolio:text text_0102 -->

### 验证结果 / 2 / 名称

<!-- portfolio:text text_0103 -->
K秘籍原生回归
<!-- /portfolio:text text_0103 -->

### 验证结果 / 2 / 结果

<!-- portfolio:text text_0104 -->
留存原生结果：273项检查、failures为空。覆盖未学习、学习消耗、重复保护、存档兼容、J/K互斥、左右三段及暂停音画同步；测试夹具获取秘籍不代表正式场景已投放。
<!-- /portfolio:text text_0104 -->

### 验证结果 / 2 / 依据

<!-- portfolio:text text_0105 -->
youxitu/manual_combo_1344333025_v1/tests/native_results.json
<!-- /portfolio:text text_0105 -->

### 验证结果 / 3 / 名称

<!-- portfolio:text text_0106 -->
普通三连击回归
<!-- /portfolio:text text_0106 -->

### 验证结果 / 3 / 结果

<!-- portfolio:text text_0107 -->
留存普通FX GPU检查796项与跨场景GPU检查313项均通过；普通速度/原声两个独立测试退出0。不同报告不合并成独立用户测试人数或总完成度。
<!-- /portfolio:text text_0107 -->

### 验证结果 / 3 / 依据

<!-- portfolio:text text_0108 -->
youxitu/normal_attack_fx_repair_v1/tests/final_test_summary.json
<!-- /portfolio:text text_0108 -->

### 验证结果 / 4 / 名称

<!-- portfolio:text text_0109 -->
验证边界
<!-- /portfolio:text text_0109 -->

### 验证结果 / 4 / 结果

<!-- portfolio:text text_0110 -->
这些是原型回归与素材检查记录，不等于招聘前的完整人工游玩验收；尚无可核实的外部玩家样本、满意度或战斗平衡结论。
<!-- /portfolio:text text_0110 -->

### 验证结果 / 4 / 依据

<!-- portfolio:text text_0111 -->
当前项目可追溯测试资料范围
<!-- /portfolio:text text_0111 -->

## 尚存问题

### 尚存问题 / 1

<!-- portfolio:text text_0112 -->
K秘籍目录与学习入口已完成，但未添加生产场景掉落/奖励/拾取位置；普通首次游玩尚不能自然获得。
<!-- /portfolio:text text_0112 -->

### 尚存问题 / 2

<!-- portfolio:text text_0113 -->
K源48→78、105→134，以及第一刀收招56→57存在原姿势接缝；第二刀直接待机是已接受的功能方案，不是自然过渡修复。
<!-- /portfolio:text text_0113 -->

### 尚存问题 / 3

<!-- portfolio:text text_0114 -->
K第二刀源94–105的顶部剑光在原视频中已缺失；当前保留全部已有像素，没有声称补全画外特效。
<!-- /portfolio:text text_0114 -->

### 尚存问题 / 4

<!-- portfolio:text text_0115 -->
K第三刀52帧含较长持势，当前原速2.166667秒；不能用无双第三刀1.303241秒或168像素位移描述它。
<!-- /portfolio:text text_0115 -->

### 尚存问题 / 5

<!-- portfolio:text text_0116 -->
无双部分接缝使用短透明度交接；原始素材并非已全部逐帧重画。
<!-- /portfolio:text text_0116 -->

### 尚存问题 / 6

<!-- portfolio:text text_0117 -->
展示素材及部分实现含AI辅助；个人策划、需求、决策、整合与验收分工及素材授权需要本人进一步确认。
<!-- /portfolio:text text_0117 -->

## 项目依据

### 项目依据 / 1 / 文件路径

<!-- portfolio:text text_0118 -->
scripts/game.gd
<!-- /portfolio:text text_0118 -->

### 项目依据 / 1 / 行号

<!-- portfolio:text text_0119 -->
509–535,548–625
<!-- /portfolio:text text_0119 -->

### 项目依据 / 1 / 支持的结论

<!-- portfolio:text text_0120 -->
J/K真实按键入口；键盘echo排除；梦境与现实分别门控。
<!-- /portfolio:text text_0120 -->

### 项目依据 / 2 / 文件路径

<!-- portfolio:text text_0121 -->
scripts/game.gd
<!-- /portfolio:text text_0121 -->

### 项目依据 / 2 / 行号

<!-- portfolio:text text_0122 -->
679–747
<!-- /portfolio:text text_0122 -->

### 项目依据 / 2 / 支持的结论

<!-- portfolio:text text_0123 -->
秘籍存档、K学习/形态/持剑门槛及J/K互斥。
<!-- /portfolio:text text_0123 -->

### 项目依据 / 3 / 文件路径

<!-- portfolio:text text_0124 -->
scripts/game.gd
<!-- /portfolio:text text_0124 -->

### 项目依据 / 3 / 行号

<!-- portfolio:text text_0125 -->
758–792
<!-- /portfolio:text text_0125 -->

### 项目依据 / 3 / 支持的结论

<!-- portfolio:text text_0126 -->
既有目标距离、同段去重、现实伤害及梦境木桩规则。
<!-- /portfolio:text text_0126 -->

### 项目依据 / 4 / 文件路径

<!-- portfolio:text text_0127 -->
scripts/game.gd
<!-- /portfolio:text text_0127 -->

### 项目依据 / 4 / 行号

<!-- portfolio:text text_0128 -->
2064–2077
<!-- /portfolio:text text_0128 -->

### 项目依据 / 4 / 支持的结论

<!-- portfolio:text text_0129 -->
无双水平突进4像素子步，原场景碰撞/边界解析。
<!-- /portfolio:text text_0129 -->

### 项目依据 / 5 / 文件路径

<!-- portfolio:text text_0130 -->
scripts/hero.gd
<!-- /portfolio:text text_0130 -->

### 项目依据 / 5 / 行号

<!-- portfolio:text text_0131 -->
746–844
<!-- /portfolio:text text_0131 -->

### 项目依据 / 5 / 支持的结论

<!-- portfolio:text text_0132 -->
独立K序列、缓冲、第二刀直接idle和命中接入。
<!-- /portfolio:text text_0132 -->

### 项目依据 / 6 / 文件路径

<!-- portfolio:text text_0133 -->
scripts/hero.gd
<!-- /portfolio:text text_0133 -->

### 项目依据 / 6 / 行号

<!-- portfolio:text text_0134 -->
858–866,1140–1153
<!-- /portfolio:text text_0134 -->

### 项目依据 / 6 / 支持的结论

<!-- portfolio:text text_0135 -->
K音频暂停同步；Hitbox开闭及目标去重。
<!-- /portfolio:text text_0135 -->

### 项目依据 / 7 / 文件路径

<!-- portfolio:text text_0136 -->
scripts/hero.gd
<!-- /portfolio:text text_0136 -->

### 项目依据 / 7 / 行号

<!-- portfolio:text text_0137 -->
980–1047,1078–1101,1231–1257
<!-- /portfolio:text text_0137 -->

### 项目依据 / 7 / 支持的结论

<!-- portfolio:text text_0138 -->
无双收招/姿态融合、普通与无双连击段末分流。
<!-- /portfolio:text text_0138 -->

### 项目依据 / 8 / 文件路径

<!-- portfolio:text text_0139 -->
scripts/hero.gd
<!-- /portfolio:text text_0139 -->

### 项目依据 / 8 / 行号

<!-- portfolio:text text_0140 -->
33–34,1717–1733
<!-- /portfolio:text text_0140 -->

### 项目依据 / 8 / 支持的结论

<!-- portfolio:text text_0141 -->
可调168像素位移，与第三刀突刺时间段交集积分。
<!-- /portfolio:text text_0141 -->

### 项目依据 / 9 / 文件路径

<!-- portfolio:text text_0142 -->
scripts/hero_normal_attack_animations.gd
<!-- /portfolio:text text_0142 -->

### 项目依据 / 9 / 行号

<!-- portfolio:text text_0143 -->
2–17,123–159
<!-- /portfolio:text text_0143 -->

### 项目依据 / 9 / 支持的结论

<!-- portfolio:text text_0144 -->
普通三段速度、帧数时间计算、窗口及音频方法事件。
<!-- /portfolio:text text_0144 -->

### 项目依据 / 10 / 文件路径

<!-- portfolio:text text_0145 -->
scripts/hero_wushuang_attack_animations.gd
<!-- /portfolio:text text_0145 -->

### 项目依据 / 10 / 行号

<!-- portfolio:text text_0146 -->
5–57,170–226,240–265
<!-- /portfolio:text text_0146 -->

### 项目依据 / 10 / 支持的结论

<!-- portfolio:text text_0147 -->
无双收招选帧、窗口、分段倍率过渡和累计时间表。
<!-- /portfolio:text text_0147 -->

### 项目依据 / 11 / 文件路径

<!-- portfolio:text text_0148 -->
scripts/hero_wushuang_third_animation.gd
<!-- /portfolio:text text_0148 -->

### 项目依据 / 11 / 行号

<!-- portfolio:text text_0149 -->
6–25,139–153
<!-- /portfolio:text text_0149 -->

### 项目依据 / 11 / 支持的结论

<!-- portfolio:text text_0150 -->
第三刀源24FPS、分阶段绝对倍率、位移时间段。
<!-- /portfolio:text text_0150 -->

### 项目依据 / 12 / 文件路径

<!-- portfolio:text text_0151 -->
scripts/hero_manual_combo.gd
<!-- /portfolio:text text_0151 -->

### 项目依据 / 12 / 行号

<!-- portfolio:text text_0152 -->
2–19,155–202
<!-- /portfolio:text text_0152 -->

### 项目依据 / 12 / 支持的结论

<!-- portfolio:text text_0153 -->
K五段原帧、24FPS、有效/缓冲窗口及第2段无收招。
<!-- /portfolio:text text_0153 -->

### 项目依据 / 13 / 文件路径

<!-- portfolio:text text_0154 -->
scripts/inventory.gd
<!-- /portfolio:text text_0154 -->

### 项目依据 / 13 / 行号

<!-- portfolio:text text_0155 -->
7–46,102–116
<!-- /portfolio:text text_0155 -->

### 项目依据 / 13 / 支持的结论

<!-- portfolio:text text_0156 -->
秘籍条目、初始未给、学习/重复保护及白名单导入。
<!-- /portfolio:text text_0156 -->

### 项目依据 / 14 / 文件路径

<!-- portfolio:text text_0157 -->
youxitu/wushuang_pace_v2/tests/summary.json
<!-- /portfolio:text text_0157 -->

### 项目依据 / 14 / 行号

<!-- portfolio:text text_0158 -->
完整JSON
<!-- /portfolio:text text_0158 -->

### 项目依据 / 14 / 支持的结论

<!-- portfolio:text text_0159 -->
523项原生回归与最终收招、第三刀参数。
<!-- /portfolio:text text_0159 -->

### 项目依据 / 15 / 文件路径

<!-- portfolio:text text_0160 -->
youxitu/manual_combo_1344333025_v1/tests/native_results.json
<!-- /portfolio:text text_0160 -->

### 项目依据 / 15 / 行号

<!-- portfolio:text text_0161 -->
完整JSON
<!-- /portfolio:text text_0161 -->

### 项目依据 / 15 / 支持的结论

<!-- portfolio:text text_0162 -->
273项原生检查，空失败列表。
<!-- /portfolio:text text_0162 -->

### 项目依据 / 16 / 文件路径

<!-- portfolio:text text_0163 -->
youxitu/normal_attack_fx_repair_v1/tests/final_test_summary.json
<!-- /portfolio:text text_0163 -->

### 项目依据 / 16 / 行号

<!-- portfolio:text text_0164 -->
完整JSON
<!-- /portfolio:text text_0164 -->

### 项目依据 / 16 / 支持的结论

<!-- portfolio:text text_0165 -->
普通速度/音频/FX及跨场景检查留存结果。
<!-- /portfolio:text text_0165 -->

### 项目依据 / 17 / 文件路径

<!-- portfolio:text text_0166 -->
youxitu/attack_1344333025_breakdown_v1/FRAME_REPORT.md
<!-- /portfolio:text text_0166 -->

### 项目依据 / 17 / 行号

<!-- portfolio:text text_0167 -->
六段边界与原片限制
<!-- /portfolio:text text_0167 -->

### 项目依据 / 17 / 支持的结论

<!-- portfolio:text text_0168 -->
K使用源段、已知裁切及姿势接缝。
<!-- /portfolio:text text_0168 -->

### 项目依据 / 18 / 文件路径

<!-- portfolio:text text_0169 -->
youxitu/recovery_2_fixed_1344333025_v1/analysis/QUALITY_AUDIT.md
<!-- /portfolio:text text_0169 -->

### 项目依据 / 18 / 行号

<!-- portfolio:text text_0170 -->
完整审查
<!-- /portfolio:text text_0170 -->

### 项目依据 / 18 / 支持的结论

<!-- portfolio:text text_0171 -->
第二刀补画两版未通过，没有正式接入。
<!-- /portfolio:text text_0171 -->

## 时间轴说明

### 时间轴说明

<!-- portfolio:text text_0172 -->
所有帧号0起算、含首尾；时间段终点不含。普通/K使用固定有效FPS，无双按每帧局部倍率累计，不能按统一24FPS直接换算运行时秒数。
<!-- /portfolio:text text_0172 -->

## 攻击时间轴

### 攻击时间轴 / 1 / 名称

<!-- portfolio:text text_0173 -->
普通J · 第1段
<!-- /portfolio:text text_0173 -->

### 攻击时间轴 / 1 / 攻击分支

<!-- portfolio:text text_0174 -->
normal
<!-- /portfolio:text text_0174 -->

### 攻击时间轴 / 2 / 名称

<!-- portfolio:text text_0175 -->
普通J · 第2段
<!-- /portfolio:text text_0175 -->

### 攻击时间轴 / 2 / 攻击分支

<!-- portfolio:text text_0176 -->
normal
<!-- /portfolio:text text_0176 -->

### 攻击时间轴 / 3 / 名称

<!-- portfolio:text text_0177 -->
普通J · 第3段
<!-- /portfolio:text text_0177 -->

### 攻击时间轴 / 3 / 攻击分支

<!-- portfolio:text text_0178 -->
normal
<!-- /portfolio:text text_0178 -->

### 攻击时间轴 / 4 / 名称

<!-- portfolio:text text_0179 -->
无双J · 第1段
<!-- /portfolio:text text_0179 -->

### 攻击时间轴 / 4 / 攻击分支

<!-- portfolio:text text_0180 -->
wushuang
<!-- /portfolio:text text_0180 -->

### 攻击时间轴 / 5 / 名称

<!-- portfolio:text text_0181 -->
无双J · 第2段
<!-- /portfolio:text text_0181 -->

### 攻击时间轴 / 5 / 攻击分支

<!-- portfolio:text text_0182 -->
wushuang
<!-- /portfolio:text text_0182 -->

### 攻击时间轴 / 6 / 名称

<!-- portfolio:text text_0183 -->
无双J · 第3段
<!-- /portfolio:text text_0183 -->

### 攻击时间轴 / 6 / 攻击分支

<!-- portfolio:text text_0184 -->
wushuang
<!-- /portfolio:text text_0184 -->

### 攻击时间轴 / 7 / 名称

<!-- portfolio:text text_0185 -->
K秘籍 · 第1段
<!-- /portfolio:text text_0185 -->

### 攻击时间轴 / 7 / 攻击分支

<!-- portfolio:text text_0186 -->
manual
<!-- /portfolio:text text_0186 -->

### 攻击时间轴 / 8 / 名称

<!-- portfolio:text text_0187 -->
K秘籍 · 第2段
<!-- /portfolio:text text_0187 -->

### 攻击时间轴 / 8 / 攻击分支

<!-- portfolio:text text_0188 -->
manual
<!-- /portfolio:text text_0188 -->

### 攻击时间轴 / 9 / 名称

<!-- portfolio:text text_0189 -->
K秘籍 · 第3段
<!-- /portfolio:text text_0189 -->

### 攻击时间轴 / 9 / 攻击分支

<!-- portfolio:text text_0190 -->
manual
<!-- /portfolio:text text_0190 -->
`,Ke=`# 策划案例内容

> 建议使用本地文字编辑器修改。正文保存在本文件，隐藏标记用于映射页面字段。
> 手动编辑时请保留每段前后的 portfolio:text 标记；不要修改字段编号。

## 标题

### 标题

<!-- portfolio:text text_0001 -->
关卡设计：从自由探索到力量觉醒
<!-- /portfolio:text text_0001 -->

## 副标题

### 副标题

<!-- portfolio:text text_0002 -->
《江湖人生》序章与客栈探索设计
<!-- /portfolio:text text_0002 -->

## 简介

### 简介

<!-- portfolio:text text_0003 -->
用可自由行走的地图独白建立现实目标，再用客栈内部、泡温泉和阶段性控制门槛组织梦境觉醒让玩家一步一步操作完成序章。当前可操作流程先发生在现实客栈院外，遭遇山贼，进入客栈内部，交付铜钱，梦境教学位于温泉剧情之后。
<!-- /portfolio:text text_0003 -->

## 开发状态

### 开发状态

<!-- portfolio:text text_0004 -->
已接入原型 · 留存原生回归记录
<!-- /portfolio:text text_0004 -->

## 设计目标

### 设计目标 / 1

<!-- portfolio:text text_0005 -->
制作一个完整的武侠序章，通过梦境、战斗、客栈探索与剧情引导，让玩家体验游戏的主要关卡和核心系统。
<!-- /portfolio:text text_0005 -->

### 设计目标 / 2

<!-- portfolio:text text_0006 -->
让玩家在苏醒后自行探索；查看地图、拾取原有青锋剑和交互聊天按顺序提供信息。
<!-- /portfolio:text text_0006 -->

### 设计目标 / 3

<!-- portfolio:text text_0007 -->
将序章故事背景交代一小部分，让玩家能大概了解背景故事
<!-- /portfolio:text text_0007 -->

## 玩家体验

### 玩家体验 / 1

<!-- portfolio:text text_0008 -->
让玩家以少年侠客的视角进入江湖，在自由探索中逐步体验战斗、物品拾取、地图查看和NPC交互，熟悉游戏的基本玩法。
<!-- /portfolio:text text_0008 -->

### 玩家体验 / 2

<!-- portfolio:text text_0009 -->
查看交互任务：知道下一步目标在哪里，但不必先完成对白或立即打开地图才能移动。
<!-- /portfolio:text text_0009 -->

### 玩家体验 / 3

<!-- portfolio:text text_0010 -->
剧情节奏：自由探索与模态演出分别处理，避免把所有剧情都当成强制教学。
<!-- /portfolio:text text_0010 -->

## 机制与规则

### 机制与规则 / 1 / 标题

<!-- portfolio:text text_0011 -->
01 自由探索设计
<!-- /portfolio:text text_0011 -->

### 机制与规则 / 1 / 正文

<!-- portfolio:text text_0012 -->
玩家可以自由移动和探索，任务提示只提供方向，不强制要求立即完成当前目标。
<!-- /portfolio:text text_0012 -->

### 机制与规则 / 2 / 标题

<!-- portfolio:text text_0013 -->
02 NPC与场景交互
<!-- /portfolio:text text_0013 -->

### 机制与规则 / 2 / 正文

<!-- portfolio:text text_0014 -->
引导玩家与NPC对话、拾取物品及调查场景，通过E键完成对应交互。
<!-- /portfolio:text text_0014 -->

### 机制与规则 / 3 / 标题

<!-- portfolio:text text_0015 -->
03 地图查看引导
<!-- /portfolio:text text_0015 -->

### 机制与规则 / 3 / 正文

<!-- portfolio:text text_0016 -->
通过剧情提示引导玩家打开地图，了解当前位置，并明确下一步探索方向。
<!-- /portfolio:text text_0016 -->

### 机制与规则 / 4 / 标题

<!-- portfolio:text text_0017 -->
04 进入客栈内部
<!-- /portfolio:text text_0017 -->

### 机制与规则 / 4 / 正文

<!-- portfolio:text text_0018 -->
玩家完成客栈外的战斗后，通过入口进入客栈内部，继续探索新场景与互动内容。
<!-- /portfolio:text text_0018 -->

### 机制与规则 / 5 / 标题

<!-- portfolio:text text_0019 -->
05 无双觉醒与剧情推进
<!-- /portfolio:text text_0019 -->

### 机制与规则 / 5 / 正文

<!-- portfolio:text text_0020 -->
通过梦境中的无双觉醒和木桩战斗，推动剧情发展，并衔接后续过场。
<!-- /portfolio:text text_0020 -->

### 机制与规则 / 6 / 标题

<!-- portfolio:text text_0021 -->
06 梦境木桩教学
<!-- /portfolio:text text_0021 -->

### 机制与规则 / 6 / 正文

<!-- portfolio:text text_0022 -->
在梦境中安排木桩练习，让玩家熟悉基础攻击操作，为后续战斗做好准备。
<!-- /portfolio:text text_0022 -->

## 关键参数

### 关键参数 / 表头 / 1

<!-- portfolio:text text_0023 -->
对象 / 条件
<!-- /portfolio:text text_0023 -->

### 关键参数 / 表头 / 2

<!-- portfolio:text text_0024 -->
当前实际配置
<!-- /portfolio:text text_0024 -->

### 关键参数 / 表头 / 3

<!-- portfolio:text text_0025 -->
依据
<!-- /portfolio:text text_0025 -->

### 关键参数 / 表格行 / 1 / 1

<!-- portfolio:text text_0026 -->
现实院外可行走脚点
<!-- /portfolio:text text_0026 -->

### 关键参数 / 表格行 / 1 / 2

<!-- portfolio:text text_0027 -->
X 75–1210；Y 470–657
<!-- /portfolio:text text_0027 -->

### 关键参数 / 表格行 / 1 / 3

<!-- portfolio:text text_0028 -->
game.gd:474–475
<!-- /portfolio:text text_0028 -->

### 关键参数 / 表格行 / 2 / 1

<!-- portfolio:text text_0029 -->
原青锋剑
<!-- /portfolio:text text_0029 -->

### 关键参数 / 表格行 / 2 / 2

<!-- portfolio:text text_0030 -->
(580,592)，90px拾取范围；显示72×28
<!-- /portfolio:text text_0030 -->

### 关键参数 / 表格行 / 2 / 3

<!-- portfolio:text text_0031 -->
game.gd:1790、1821–1824
<!-- /portfolio:text text_0031 -->

### 关键参数 / 表格行 / 3 / 1

<!-- portfolio:text text_0032 -->
女性外观掌柜
<!-- /portfolio:text text_0032 -->

### 关键参数 / 表格行 / 3 / 2

<!-- portfolio:text text_0033 -->
(950,494)，交谈距离<115px
<!-- /portfolio:text text_0033 -->

### 关键参数 / 表格行 / 3 / 3

<!-- portfolio:text text_0034 -->
game.gd:16、1750
<!-- /portfolio:text text_0034 -->

### 关键参数 / 表格行 / 4 / 1

<!-- portfolio:text text_0035 -->
客栈入口
<!-- /portfolio:text text_0035 -->

### 关键参数 / 表格行 / 4 / 2

<!-- portfolio:text text_0036 -->
(1050,490)，矩形100×90
<!-- /portfolio:text text_0036 -->

### 关键参数 / 表格行 / 4 / 3

<!-- portfolio:text text_0037 -->
main.tscn
<!-- /portfolio:text text_0037 -->

### 关键参数 / 表格行 / 5 / 1

<!-- portfolio:text text_0038 -->
柜台 / 温泉接近区
<!-- /portfolio:text text_0038 -->

### 关键参数 / 表格行 / 5 / 2

<!-- portfolio:text text_0039 -->
柜台(270,421)，220×22；温泉(940,439)，48×24
<!-- /portfolio:text text_0039 -->

### 关键参数 / 表格行 / 5 / 3

<!-- portfolio:text text_0040 -->
inn_interior.tscn
<!-- /portfolio:text text_0040 -->

### 关键参数 / 表格行 / 6 / 1

<!-- portfolio:text text_0041 -->
梦境出生点 / 教程区
<!-- /portfolio:text text_0041 -->

### 关键参数 / 表格行 / 6 / 2

<!-- portfolio:text text_0042 -->
(1024,586)；障碍对白区(1580,584)，48×180
<!-- /portfolio:text text_0042 -->

### 关键参数 / 表格行 / 6 / 3

<!-- portfolio:text text_0043 -->
DreamMartialArts.tscn
<!-- /portfolio:text text_0043 -->

### 关键参数 / 表格行 / 7 / 1

<!-- portfolio:text text_0044 -->
木桩
<!-- /portfolio:text text_0044 -->

### 关键参数 / 表格行 / 7 / 2

<!-- portfolio:text text_0045 -->
3根，各54HP；脚点碰撞留白半径6px
<!-- /portfolio:text text_0045 -->

### 关键参数 / 表格行 / 7 / 3

<!-- portfolio:text text_0046 -->
training_dummy.gd、dream_martial_arts.gd
<!-- /portfolio:text text_0046 -->

### 关键参数 / 表格行 / 8 / 1

<!-- portfolio:text text_0047 -->
《序章·终》 / 第二章
<!-- /portfolio:text text_0047 -->

### 关键参数 / 表格行 / 8 / 2

<!-- portfolio:text text_0048 -->
5.0秒 / 2.0秒；现实淡入0.7秒后原起身
<!-- /portfolio:text text_0048 -->

### 关键参数 / 表格行 / 8 / 3

<!-- portfolio:text text_0049 -->
prologue_ending.gd:16–20
<!-- /portfolio:text text_0049 -->

## 流程

### 流程 / 1 / 标题

<!-- portfolio:text text_0050 -->
01 现实开局苏醒
<!-- /portfolio:text text_0050 -->

### 流程 / 1 / 说明

<!-- portfolio:text text_0051 -->
主菜单开始 → 序章图与开场影片 → 院外原主角躺姿与独白 → 原起身。此时还没有加载DreamMartialArts可操作场景。
<!-- /portfolio:text text_0051 -->

### 流程 / 2 / 标题

<!-- portfolio:text text_0052 -->
02 地图自由引导
<!-- /portfolio:text text_0052 -->

### 流程 / 2 / 说明

<!-- portfolio:text text_0053 -->
起身完成立即自由移动，同时显示三句地图独白；结束后显示M键提示。第一次成功打开地图就记录已查看，提示不再要求重复开图。
<!-- /portfolio:text text_0053 -->

### 流程 / 3 / 标题

<!-- portfolio:text text_0054 -->
03 拾剑与问路
<!-- /portfolio:text text_0054 -->

### 流程 / 3 / 说明

<!-- portfolio:text text_0055 -->
首次关图 → 六句非阻塞独白 → 原青锋剑目标 → 近距离E拾取并自动装备 → 掌柜NPC目标。提前完成拾剑时直接引导NPC。
<!-- /portfolio:text text_0055 -->

### 流程 / 4 / 标题

<!-- portfolio:text text_0056 -->
04 院外三山贼
<!-- /portfolio:text text_0056 -->

### 流程 / 4 / 说明

<!-- portfolio:text text_0057 -->
与NPC交谈使stage=2，生成三名既有山贼；全部真实死亡后解锁客栈入口。靠近门口触发汇报对白，结束后近距离E进客栈。
<!-- /portfolio:text text_0057 -->

### 流程 / 5 / 标题

<!-- portfolio:text text_0058 -->
05 柜台与温泉
<!-- /portfolio:text text_0058 -->

### 流程 / 5 / 说明

<!-- portfolio:text text_0059 -->
室内介绍 → 柜台对话 → 背包选铜钱并使用支付12枚 → 温泉目标提示 → 入浴台词 → E离开后头晕独白与晕倒。付款决定提示目标，当前入泉函数未额外检查已付款，不能宣传为严格付费门禁。
<!-- /portfolio:text text_0059 -->

### 流程 / 6 / 标题

<!-- portfolio:text text_0060 -->
06 可操作梦境
<!-- /portfolio:text text_0060 -->

### 流程 / 6 / 说明

<!-- portfolio:text text_0061 -->
晕倒完成 → 渐黑加载竹林梦境 → 躺姿短停 → 起身与四句对白 → 放开行走。沿既有道路接近木桩对白区。
<!-- /portfolio:text text_0061 -->

### 流程 / 7 / 标题

<!-- portfolio:text text_0062 -->
07 木桩与无双觉醒
<!-- /portfolio:text text_0062 -->

### 流程 / 7 / 说明

<!-- portfolio:text text_0063 -->
普通3次有效命中但不扣血 → 当前攻击结束后5句提示 → 玩家真实按I → 变身与6句觉醒独白 → 无双击毁任一木桩。
<!-- /portfolio:text text_0063 -->

### 流程 / 8 / 标题

<!-- portfolio:text text_0064 -->
08 回忆与章节交接
<!-- /portfolio:text text_0064 -->

### 流程 / 8 / 说明

<!-- portfolio:text text_0065 -->
残骸显示 → 四句独白；第二句确认播放完整雪村回忆，返回继续后两句 → 最后一句确认后5秒序章终 → 2秒第二章春 → 恢复同一现实室内快照 → 原起身结束解锁。
<!-- /portfolio:text text_0065 -->

## 实现方式

### 实现方式 / 1 / 标题

<!-- portfolio:text text_0066 -->
现有状态组合，不另建任务系统
<!-- /portfolio:text text_0066 -->

### 实现方式 / 1 / 正文

<!-- portfolio:text text_0067 -->
opening_sequence维护引导已开始、已看地图、关图后待显示/已完成等局部状态；hud按stage、客栈付款状态及温泉标志选择一个当前目标。地图、背包和模态对白具有原有显示优先级。
<!-- /portfolio:text text_0067 -->

### 实现方式 / 2 / 标题

<!-- portfolio:text text_0068 -->
脚底几何与自由路线
<!-- /portfolio:text text_0068 -->

### 实现方式 / 2 / 正文

<!-- portfolio:text text_0069 -->
院外移动只按矩形脚点范围clamp。室内读取inn_layout.json，按1280/1672与720/941缩放22点行走多边形、11个家具占地与11个固定障碍；梦境使用场景内道路和障碍多边形。两处都按不超过3px步长拆分移动，碰撞后尝试沿X/Y滑动。示意图只表示真实位置与区域，不把目标顺序虚构为固定路线。
<!-- /portfolio:text text_0069 -->

### 实现方式 / 3 / 标题

<!-- portfolio:text text_0070 -->
三个独立障碍形成教学选择
<!-- /portfolio:text text_0070 -->

### 实现方式 / 3 / 正文

<!-- portfolio:text text_0071 -->
梦境在X=1700道路截面计算三条通道。各木桩保持场景X坐标，Y在运行时依据道路宽度布置，实体宽58px、深约27.622px；摧毁任意一根后只移除自身阻挡。
<!-- /portfolio:text text_0071 -->

### 实现方式 / 4 / 标题

<!-- portfolio:text text_0072 -->
影片和章节依靠真实完成信号
<!-- /portfolio:text text_0072 -->

### 实现方式 / 4 / 正文

<!-- portfolio:text text_0073 -->
雪村回忆使用VideoStreamPlayer.finished返回原梦境及镜头状态；序章终按同一时间线驱动像素笔顺遮罩与原声，5秒后进入第二章卡。现实恢复在黑屏下完成，最后原get_up_finished才提交chapter=2及一次性结束标志。
<!-- /portfolio:text text_0073 -->

## 验证结果

### 验证结果 / 1 / 名称

<!-- portfolio:text text_0098 -->
关图后的自由拾剑引导
<!-- /portfolio:text text_0098 -->

### 验证结果 / 1 / 结果

<!-- portfolio:text text_0099 -->
项目留存原生回归180项、0失败；含真实M/ESC/E/Enter、原起身和拾取提交。
<!-- /portfolio:text text_0099 -->

### 验证结果 / 1 / 依据

<!-- portfolio:text text_0100 -->
youxitu/opening_post_map_guide_v1/tests/native_results.json
<!-- /portfolio:text text_0100 -->

### 验证结果 / 2 / 名称

<!-- portfolio:text text_0101 -->
剧情目标显示与交互范围分离
<!-- /portfolio:text text_0101 -->

### 验证结果 / 2 / 结果

<!-- portfolio:text text_0102 -->
项目留存原生回归219项、0失败；覆盖剑、NPC、入口、柜台、温泉和重入。
<!-- /portfolio:text text_0102 -->

### 验证结果 / 2 / 依据

<!-- portfolio:text text_0103 -->
youxitu/story_interaction_v1/tests/interaction_indicator_results.json
<!-- /portfolio:text text_0103 -->

### 验证结果 / 3 / 名称

<!-- portfolio:text text_0104 -->
雪村完整回忆
<!-- /portfolio:text text_0104 -->

### 验证结果 / 3 / 结果

<!-- portfolio:text text_0105 -->
项目留存原生回归531项、0失败；完整影片自然播放约20.082秒并返回第三句，非本次重新执行。
<!-- /portfolio:text text_0105 -->

### 验证结果 / 3 / 依据

<!-- portfolio:text text_0106 -->
youxitu/snow_village_memory_integration_v1/tests/full_flow/test_results.json
<!-- /portfolio:text text_0106 -->

### 验证结果 / 4 / 名称

<!-- portfolio:text text_0107 -->
序章终与第二章交接
<!-- /portfolio:text text_0107 -->

### 验证结果 / 4 / 结果

<!-- portfolio:text text_0108 -->
项目留存原生回归95项、0失败；正式5秒片段经Godot组件捕获，返回现实同一Hero/背包并在起身结束后解锁。
<!-- /portfolio:text text_0108 -->

### 验证结果 / 4 / 依据

<!-- portfolio:text text_0109 -->
youxitu/prologue_ending_v1/tests/test_results.json
<!-- /portfolio:text text_0109 -->

### 验证结果 / 5 / 名称

<!-- portfolio:text text_0110 -->
验证边界
<!-- /portfolio:text text_0110 -->

### 验证结果 / 5 / 结果

<!-- portfolio:text text_0111 -->
本作品集阶段只读核对当前脚本与历史验收文件，没有重新运行Godot，也没有新增玩家测试。专项检查有相互重叠，不累加宣传为独立测试用例总量。
<!-- /portfolio:text text_0111 -->

### 验证结果 / 5 / 依据

<!-- portfolio:text text_0112 -->
本次项目静态审计
<!-- /portfolio:text text_0112 -->

## 尚存问题

### 尚存问题 / 1

<!-- portfolio:text text_0113 -->
可操作主线当前是现实院外→室内温泉→竹林梦境→现实室内，并非一开始就进入可操作竹林梦境。网站流程以脚本为准。
<!-- /portfolio:text text_0113 -->

### 尚存问题 / 2

<!-- portfolio:text text_0114 -->
现实引导为非阻塞显示，但梦境教程、NPC正式对白和过场仍有模态限制。不能声称全游戏无锁定。
<!-- /portfolio:text text_0114 -->

### 尚存问题 / 3

<!-- portfolio:text text_0115 -->
剧情提示付款后才引导温泉；can_use_hot_spring目前未检查PAID。实际功能存在提前入泉可能，尚未作为严格付费门禁闭环。
<!-- /portfolio:text text_0115 -->

### 尚存问题 / 4

<!-- portfolio:text text_0116 -->
开局地图与拾剑独白的一次性标记属于当前新游戏生命周期；已有stage兼容测试不代表完整存档断点恢复。journey.json保存若干进度和技能标志，不应包装成完整场景/物品存档系统。
<!-- /portfolio:text text_0116 -->

### 尚存问题 / 5

<!-- portfolio:text text_0117 -->
当前没有可证实的真实玩家测试、迷路率、完成时长或难度数据。玩家体验效果与原始策划取舍还需本人补充。
<!-- /portfolio:text text_0117 -->

### 尚存问题 / 6

<!-- portfolio:text text_0118 -->
第二章目前已实现章节卡与现实苏醒衔接，未发现独立的第二章新关卡；不宣传完整多章节内容。
<!-- /portfolio:text text_0118 -->

## 项目依据

### 项目依据 / 1 / 文件路径

<!-- portfolio:text text_0119 -->
scripts/opening_sequence.gd
<!-- /portfolio:text text_0119 -->

### 项目依据 / 1 / 行号

<!-- portfolio:text text_0120 -->
107–192、203–265
<!-- /portfolio:text text_0120 -->

### 项目依据 / 1 / 支持的结论

<!-- portfolio:text text_0121 -->
现实开局起身、地图自由引导、首次关图六句与只读原剑状态
<!-- /portfolio:text text_0121 -->

### 项目依据 / 2 / 文件路径

<!-- portfolio:text text_0122 -->
scripts/game.gd
<!-- /portfolio:text text_0122 -->

### 项目依据 / 2 / 行号

<!-- portfolio:text text_0123 -->
151–310、335–353、430–475
<!-- /portfolio:text text_0123 -->

### 项目依据 / 2 / 支持的结论

<!-- portfolio:text text_0124 -->
开局装配、地图成功开闭、院外自由移动边界
<!-- /portfolio:text text_0124 -->

### 项目依据 / 3 / 文件路径

<!-- portfolio:text text_0125 -->
scripts/hud.gd
<!-- /portfolio:text text_0125 -->

### 项目依据 / 3 / 行号

<!-- portfolio:text text_0126 -->
164–229
<!-- /portfolio:text text_0126 -->

### 项目依据 / 3 / 支持的结论

<!-- portfolio:text text_0127 -->
任务目标自动显示、一次只用一个共用E标志
<!-- /portfolio:text text_0127 -->

### 项目依据 / 4 / 文件路径

<!-- portfolio:text text_0128 -->
scripts/dialogue_ui.gd
<!-- /portfolio:text text_0128 -->

### 项目依据 / 4 / 行号

<!-- portfolio:text text_0129 -->
185–238、251–288
<!-- /portfolio:text text_0129 -->

### 项目依据 / 4 / 支持的结论

<!-- portfolio:text text_0130 -->
非阻塞对白通道及与模态/菜单显隐协调
<!-- /portfolio:text text_0130 -->

### 项目依据 / 5 / 文件路径

<!-- portfolio:text text_0131 -->
scripts/game.gd
<!-- /portfolio:text text_0131 -->

### 项目依据 / 5 / 行号

<!-- portfolio:text text_0132 -->
1730–1855
<!-- /portfolio:text text_0132 -->

### 项目依据 / 5 / 支持的结论

<!-- portfolio:text text_0133 -->
E真实范围、原剑与NPC及三山贼入口解锁
<!-- /portfolio:text text_0133 -->

### 项目依据 / 6 / 文件路径

<!-- portfolio:text text_0134 -->
main.tscn
<!-- /portfolio:text text_0134 -->

### 项目依据 / 6 / 行号

<!-- portfolio:text text_0135 -->
8–22
<!-- /portfolio:text text_0135 -->

### 项目依据 / 6 / 支持的结论

<!-- portfolio:text text_0136 -->
客栈入口真实坐标与矩形范围
<!-- /portfolio:text text_0136 -->

### 项目依据 / 7 / 文件路径

<!-- portfolio:text text_0137 -->
inn_interior.tscn
<!-- /portfolio:text text_0137 -->

### 项目依据 / 7 / 行号

<!-- portfolio:text text_0138 -->
10–65
<!-- /portfolio:text text_0138 -->

### 项目依据 / 7 / 支持的结论

<!-- portfolio:text text_0139 -->
室内出生点、柜台、温泉接近区与泡澡锚点
<!-- /portfolio:text text_0139 -->

### 项目依据 / 8 / 文件路径

<!-- portfolio:text text_0140 -->
scripts/inn_interior.gd
<!-- /portfolio:text text_0140 -->

### 项目依据 / 8 / 行号

<!-- portfolio:text text_0141 -->
14–49、105–144
<!-- /portfolio:text text_0141 -->

### 项目依据 / 8 / 支持的结论

<!-- portfolio:text text_0142 -->
室内多边形、家具占地、滑动碰撞与脚点交互
<!-- /portfolio:text text_0142 -->

### 项目依据 / 9 / 文件路径

<!-- portfolio:text text_0143 -->
assets/interiors/inn_layout.json
<!-- /portfolio:text text_0143 -->

### 项目依据 / 9 / 行号

<!-- portfolio:text text_0144 -->
完整布局数据
<!-- /portfolio:text text_0144 -->

### 项目依据 / 9 / 支持的结论

<!-- portfolio:text text_0145 -->
室内参考1672×941的行走多边形和障碍
<!-- /portfolio:text text_0145 -->

### 项目依据 / 10 / 文件路径

<!-- portfolio:text text_0146 -->
scripts/game.gd
<!-- /portfolio:text text_0146 -->

### 项目依据 / 10 / 行号

<!-- portfolio:text text_0147 -->
1060–1268
<!-- /portfolio:text text_0147 -->

### 项目依据 / 10 / 支持的结论

<!-- portfolio:text text_0148 -->
付款、温泉退出晕倒、真正加载梦境及起身对白
<!-- /portfolio:text text_0148 -->

### 项目依据 / 11 / 文件路径

<!-- portfolio:text text_0149 -->
scripts/game.gd
<!-- /portfolio:text text_0149 -->

### 项目依据 / 11 / 行号

<!-- portfolio:text text_0150 -->
1273–1465
<!-- /portfolio:text text_0150 -->

### 项目依据 / 11 / 支持的结论

<!-- portfolio:text text_0151 -->
普通三次命中、I键觉醒、木桩破碎/雪村/最后对白
<!-- /portfolio:text text_0151 -->

### 项目依据 / 12 / 文件路径

<!-- portfolio:text text_0152 -->
DreamMartialArts.tscn
<!-- /portfolio:text text_0152 -->

### 项目依据 / 12 / 行号

<!-- portfolio:text text_0153 -->
24–100
<!-- /portfolio:text text_0153 -->

### 项目依据 / 12 / 支持的结论

<!-- portfolio:text text_0154 -->
梦境出生点、道路障碍、对白区、相机边界与木桩原X位置
<!-- /portfolio:text text_0154 -->

### 项目依据 / 13 / 文件路径

<!-- portfolio:text text_0155 -->
scripts/dream_martial_arts.gd
<!-- /portfolio:text text_0155 -->

### 项目依据 / 13 / 行号

<!-- portfolio:text text_0156 -->
37–59、106–134
<!-- /portfolio:text text_0156 -->

### 项目依据 / 13 / 支持的结论

<!-- portfolio:text text_0157 -->
按道路截面布置三通道、6px脚点留白、3px拆步碰撞
<!-- /portfolio:text text_0157 -->

### 项目依据 / 14 / 文件路径

<!-- portfolio:text text_0158 -->
scripts/training_dummy.gd
<!-- /portfolio:text text_0158 -->

### 项目依据 / 14 / 行号

<!-- portfolio:text text_0159 -->
5–8、37–70、96–119
<!-- /portfolio:text text_0159 -->

### 项目依据 / 14 / 支持的结论

<!-- portfolio:text text_0160 -->
独立54HP、普通命中不扣血、致死释放通道
<!-- /portfolio:text text_0160 -->

### 项目依据 / 15 / 文件路径

<!-- portfolio:text text_0161 -->
scripts/game.gd
<!-- /portfolio:text text_0161 -->

### 项目依据 / 15 / 行号

<!-- portfolio:text text_0162 -->
1538–1618
<!-- /portfolio:text text_0162 -->

### 项目依据 / 15 / 支持的结论

<!-- portfolio:text text_0163 -->
序章终一次性、同现实快照恢复、起身完成解锁
<!-- /portfolio:text text_0163 -->

### 项目依据 / 16 / 文件路径

<!-- portfolio:text text_0164 -->
scripts/prologue_ending.gd
<!-- /portfolio:text text_0164 -->

### 项目依据 / 16 / 行号

<!-- portfolio:text text_0165 -->
16–22、130–194
<!-- /portfolio:text text_0165 -->

### 项目依据 / 16 / 支持的结论

<!-- portfolio:text text_0166 -->
5秒逐笔片段、2秒章节卡和0.7秒现实淡入
<!-- /portfolio:text text_0166 -->

## 主关卡示意

### 主关卡示意 / 场景

<!-- portfolio:text text_0167 -->
现实客栈院外
<!-- /portfolio:text text_0167 -->

### 主关卡示意 / 坐标说明

<!-- portfolio:text text_0168 -->
1280×720游戏画布；坐标为脚点或交互锚点，不是人物可见外框。
<!-- /portfolio:text text_0168 -->

### 主关卡示意 / 交互位置 / 1 / 名称

<!-- portfolio:text text_0169 -->
开局主角
<!-- /portfolio:text text_0169 -->

### 主关卡示意 / 交互位置 / 1 / 类型

<!-- portfolio:text text_0170 -->
spawn
<!-- /portfolio:text text_0170 -->

### 主关卡示意 / 交互位置 / 2 / 名称

<!-- portfolio:text text_0171 -->
原青锋剑
<!-- /portfolio:text text_0171 -->

### 主关卡示意 / 交互位置 / 2 / 类型

<!-- portfolio:text text_0172 -->
pickup
<!-- /portfolio:text text_0172 -->

### 主关卡示意 / 交互位置 / 3 / 名称

<!-- portfolio:text text_0173 -->
女性外观掌柜
<!-- /portfolio:text text_0173 -->

### 主关卡示意 / 交互位置 / 3 / 类型

<!-- portfolio:text text_0174 -->
npc
<!-- /portfolio:text text_0174 -->

### 主关卡示意 / 交互位置 / 4 / 名称

<!-- portfolio:text text_0175 -->
客栈入口
<!-- /portfolio:text text_0175 -->

### 主关卡示意 / 交互位置 / 4 / 类型

<!-- portfolio:text text_0176 -->
entrance
<!-- /portfolio:text text_0176 -->

### 主关卡示意 / 交互位置 / 5 / 名称

<!-- portfolio:text text_0177 -->
山贼1出生
<!-- /portfolio:text text_0177 -->

### 主关卡示意 / 交互位置 / 5 / 类型

<!-- portfolio:text text_0178 -->
enemy
<!-- /portfolio:text text_0178 -->

### 主关卡示意 / 交互位置 / 6 / 名称

<!-- portfolio:text text_0179 -->
山贼2出生
<!-- /portfolio:text text_0179 -->

### 主关卡示意 / 交互位置 / 6 / 类型

<!-- portfolio:text text_0180 -->
enemy
<!-- /portfolio:text text_0180 -->

### 主关卡示意 / 交互位置 / 7 / 名称

<!-- portfolio:text text_0181 -->
山贼3出生
<!-- /portfolio:text text_0181 -->

### 主关卡示意 / 交互位置 / 7 / 类型

<!-- portfolio:text text_0182 -->
enemy
<!-- /portfolio:text text_0182 -->

### 主关卡示意 / 备注

<!-- portfolio:text text_0183 -->
当前院外普通移动按矩形clamp，没有额外背景树木/建筑碰撞多边形。示意图中的顺序为剧情目标顺序，不是实测玩家路线或强制轨迹。
<!-- /portfolio:text text_0183 -->

## 其他关卡示意

### 其他关卡示意 / 1 / 场景

<!-- portfolio:text text_0184 -->
现实客栈室内
<!-- /portfolio:text text_0184 -->

### 其他关卡示意 / 1 / 交互位置 / 1 / 名称

<!-- portfolio:text text_0185 -->
室内入口出生点
<!-- /portfolio:text text_0185 -->

### 其他关卡示意 / 1 / 交互位置 / 1 / 类型

<!-- portfolio:text text_0186 -->
spawn
<!-- /portfolio:text text_0186 -->

### 其他关卡示意 / 1 / 交互位置 / 2 / 名称

<!-- portfolio:text text_0187 -->
柜台交互
<!-- /portfolio:text text_0187 -->

### 其他关卡示意 / 1 / 交互位置 / 2 / 类型

<!-- portfolio:text text_0188 -->
counter
<!-- /portfolio:text text_0188 -->

### 其他关卡示意 / 1 / 交互位置 / 3 / 名称

<!-- portfolio:text text_0189 -->
温泉接近区
<!-- /portfolio:text text_0189 -->

### 其他关卡示意 / 1 / 交互位置 / 3 / 类型

<!-- portfolio:text text_0190 -->
spring
<!-- /portfolio:text text_0190 -->

### 其他关卡示意 / 1 / 交互位置 / 4 / 名称

<!-- portfolio:text text_0191 -->
入泉/出泉落点
<!-- /portfolio:text text_0191 -->

### 其他关卡示意 / 1 / 交互位置 / 4 / 类型

<!-- portfolio:text text_0192 -->
anchor
<!-- /portfolio:text text_0192 -->

### 其他关卡示意 / 1 / 交互位置 / 5 / 名称

<!-- portfolio:text text_0193 -->
泡澡待机点
<!-- /portfolio:text text_0193 -->

### 其他关卡示意 / 1 / 交互位置 / 5 / 类型

<!-- portfolio:text text_0194 -->
anchor
<!-- /portfolio:text text_0194 -->

### 其他关卡示意 / 1 / obstacles / 1 / 名称

<!-- portfolio:text text_0195 -->
Table01
<!-- /portfolio:text text_0195 -->

### 其他关卡示意 / 1 / obstacles / 1 / kind

<!-- portfolio:text text_0196 -->
furniture
<!-- /portfolio:text text_0196 -->

### 其他关卡示意 / 1 / obstacles / 2 / 名称

<!-- portfolio:text text_0197 -->
Table02
<!-- /portfolio:text text_0197 -->

### 其他关卡示意 / 1 / obstacles / 2 / kind

<!-- portfolio:text text_0198 -->
furniture
<!-- /portfolio:text text_0198 -->

### 其他关卡示意 / 1 / obstacles / 3 / 名称

<!-- portfolio:text text_0199 -->
Table03
<!-- /portfolio:text text_0199 -->

### 其他关卡示意 / 1 / obstacles / 3 / kind

<!-- portfolio:text text_0200 -->
furniture
<!-- /portfolio:text text_0200 -->

### 其他关卡示意 / 1 / obstacles / 4 / 名称

<!-- portfolio:text text_0201 -->
Stool01
<!-- /portfolio:text text_0201 -->

### 其他关卡示意 / 1 / obstacles / 4 / kind

<!-- portfolio:text text_0202 -->
furniture
<!-- /portfolio:text text_0202 -->

### 其他关卡示意 / 1 / obstacles / 5 / 名称

<!-- portfolio:text text_0203 -->
Stool02
<!-- /portfolio:text text_0203 -->

### 其他关卡示意 / 1 / obstacles / 5 / kind

<!-- portfolio:text text_0204 -->
furniture
<!-- /portfolio:text text_0204 -->

### 其他关卡示意 / 1 / obstacles / 6 / 名称

<!-- portfolio:text text_0205 -->
Stool03
<!-- /portfolio:text text_0205 -->

### 其他关卡示意 / 1 / obstacles / 6 / kind

<!-- portfolio:text text_0206 -->
furniture
<!-- /portfolio:text text_0206 -->

### 其他关卡示意 / 1 / obstacles / 7 / 名称

<!-- portfolio:text text_0207 -->
Bench02
<!-- /portfolio:text text_0207 -->

### 其他关卡示意 / 1 / obstacles / 7 / kind

<!-- portfolio:text text_0208 -->
furniture
<!-- /portfolio:text text_0208 -->

### 其他关卡示意 / 1 / obstacles / 8 / 名称

<!-- portfolio:text text_0209 -->
Stool04
<!-- /portfolio:text text_0209 -->

### 其他关卡示意 / 1 / obstacles / 8 / kind

<!-- portfolio:text text_0210 -->
furniture
<!-- /portfolio:text text_0210 -->

### 其他关卡示意 / 1 / obstacles / 9 / 名称

<!-- portfolio:text text_0211 -->
Stool05
<!-- /portfolio:text text_0211 -->

### 其他关卡示意 / 1 / obstacles / 9 / kind

<!-- portfolio:text text_0212 -->
furniture
<!-- /portfolio:text text_0212 -->

### 其他关卡示意 / 1 / obstacles / 10 / 名称

<!-- portfolio:text text_0213 -->
Bench03
<!-- /portfolio:text text_0213 -->

### 其他关卡示意 / 1 / obstacles / 10 / kind

<!-- portfolio:text text_0214 -->
furniture
<!-- /portfolio:text text_0214 -->

### 其他关卡示意 / 1 / obstacles / 11 / 名称

<!-- portfolio:text text_0215 -->
PillarMain
<!-- /portfolio:text text_0215 -->

### 其他关卡示意 / 1 / obstacles / 11 / kind

<!-- portfolio:text text_0216 -->
furniture
<!-- /portfolio:text text_0216 -->

### 其他关卡示意 / 1 / obstacles / 12 / 名称

<!-- portfolio:text text_0217 -->
Counter
<!-- /portfolio:text text_0217 -->

### 其他关卡示意 / 1 / obstacles / 12 / kind

<!-- portfolio:text text_0218 -->
solid
<!-- /portfolio:text text_0218 -->

### 其他关卡示意 / 1 / obstacles / 13 / 名称

<!-- portfolio:text text_0219 -->
Kitchen
<!-- /portfolio:text text_0219 -->

### 其他关卡示意 / 1 / obstacles / 13 / kind

<!-- portfolio:text text_0220 -->
solid
<!-- /portfolio:text text_0220 -->

### 其他关卡示意 / 1 / obstacles / 14 / 名称

<!-- portfolio:text text_0221 -->
Screen
<!-- /portfolio:text text_0221 -->

### 其他关卡示意 / 1 / obstacles / 14 / kind

<!-- portfolio:text text_0222 -->
solid
<!-- /portfolio:text text_0222 -->

### 其他关卡示意 / 1 / obstacles / 15 / 名称

<!-- portfolio:text text_0223 -->
LeftDoorPillar
<!-- /portfolio:text text_0223 -->

### 其他关卡示意 / 1 / obstacles / 15 / kind

<!-- portfolio:text text_0224 -->
solid
<!-- /portfolio:text text_0224 -->

### 其他关卡示意 / 1 / obstacles / 16 / 名称

<!-- portfolio:text text_0225 -->
MainPillar
<!-- /portfolio:text text_0225 -->

### 其他关卡示意 / 1 / obstacles / 16 / kind

<!-- portfolio:text text_0226 -->
solid
<!-- /portfolio:text text_0226 -->

### 其他关卡示意 / 1 / obstacles / 17 / 名称

<!-- portfolio:text text_0227 -->
StoneDivider
<!-- /portfolio:text text_0227 -->

### 其他关卡示意 / 1 / obstacles / 17 / kind

<!-- portfolio:text text_0228 -->
solid
<!-- /portfolio:text text_0228 -->

### 其他关卡示意 / 1 / obstacles / 18 / 名称

<!-- portfolio:text text_0229 -->
SpringRim
<!-- /portfolio:text text_0229 -->

### 其他关卡示意 / 1 / obstacles / 18 / kind

<!-- portfolio:text text_0230 -->
solid
<!-- /portfolio:text text_0230 -->

### 其他关卡示意 / 1 / obstacles / 19 / 名称

<!-- portfolio:text text_0231 -->
LeftDecoration
<!-- /portfolio:text text_0231 -->

### 其他关卡示意 / 1 / obstacles / 19 / kind

<!-- portfolio:text text_0232 -->
solid
<!-- /portfolio:text text_0232 -->

### 其他关卡示意 / 1 / obstacles / 20 / 名称

<!-- portfolio:text text_0233 -->
RightDecoration
<!-- /portfolio:text text_0233 -->

### 其他关卡示意 / 1 / obstacles / 20 / kind

<!-- portfolio:text text_0234 -->
solid
<!-- /portfolio:text text_0234 -->

### 其他关卡示意 / 1 / obstacles / 21 / 名称

<!-- portfolio:text text_0235 -->
SpringLeftStone
<!-- /portfolio:text text_0235 -->

### 其他关卡示意 / 1 / obstacles / 21 / kind

<!-- portfolio:text text_0236 -->
solid
<!-- /portfolio:text text_0236 -->

### 其他关卡示意 / 1 / obstacles / 22 / 名称

<!-- portfolio:text text_0237 -->
SpringLeftBucket
<!-- /portfolio:text text_0237 -->

### 其他关卡示意 / 1 / obstacles / 22 / kind

<!-- portfolio:text text_0238 -->
solid
<!-- /portfolio:text text_0238 -->

### 其他关卡示意 / 1 / 备注

<!-- portfolio:text text_0239 -->
从原布局按1280/1672、720/941等比到各轴显示空间映射；包含11个家具占地和11个固定障碍，非人工推测轮廓。
<!-- /portfolio:text text_0239 -->

### 其他关卡示意 / 2 / 场景

<!-- portfolio:text text_0240 -->
竹林梦境
<!-- /portfolio:text text_0240 -->

### 其他关卡示意 / 2 / 交互位置 / 1 / 名称

<!-- portfolio:text text_0241 -->
梦境出生
<!-- /portfolio:text text_0241 -->

### 其他关卡示意 / 2 / 交互位置 / 1 / 类型

<!-- portfolio:text text_0242 -->
spawn
<!-- /portfolio:text text_0242 -->

### 其他关卡示意 / 2 / 交互位置 / 2 / 名称

<!-- portfolio:text text_0243 -->
障碍对白区
<!-- /portfolio:text text_0243 -->

### 其他关卡示意 / 2 / 交互位置 / 2 / 类型

<!-- portfolio:text text_0244 -->
trigger
<!-- /portfolio:text text_0244 -->

### 其他关卡示意 / 2 / 交互位置 / 3 / 名称

<!-- portfolio:text text_0245 -->
上路木桩
<!-- /portfolio:text text_0245 -->

### 其他关卡示意 / 2 / 交互位置 / 3 / 类型

<!-- portfolio:text text_0246 -->
dummy
<!-- /portfolio:text text_0246 -->

### 其他关卡示意 / 2 / 交互位置 / 4 / 名称

<!-- portfolio:text text_0247 -->
中路木桩
<!-- /portfolio:text text_0247 -->

### 其他关卡示意 / 2 / 交互位置 / 4 / 类型

<!-- portfolio:text text_0248 -->
dummy
<!-- /portfolio:text text_0248 -->

### 其他关卡示意 / 2 / 交互位置 / 5 / 名称

<!-- portfolio:text text_0249 -->
下路木桩
<!-- /portfolio:text text_0249 -->

### 其他关卡示意 / 2 / 交互位置 / 5 / 类型

<!-- portfolio:text text_0250 -->
dummy
<!-- /portfolio:text text_0250 -->

### 其他关卡示意 / 2 / obstacles / 1 / 名称

<!-- portfolio:text text_0251 -->
WaterAndRocks
<!-- /portfolio:text text_0251 -->

### 其他关卡示意 / 2 / obstacles / 1 / kind

<!-- portfolio:text text_0252 -->
solid
<!-- /portfolio:text text_0252 -->

### 其他关卡示意 / 2 / obstacles / 2 / 名称

<!-- portfolio:text text_0253 -->
MountainAndBuilding
<!-- /portfolio:text text_0253 -->

### 其他关卡示意 / 2 / obstacles / 2 / kind

<!-- portfolio:text text_0254 -->
solid
<!-- /portfolio:text text_0254 -->

### 其他关卡示意 / 2 / obstacles / 3 / 名称

<!-- portfolio:text text_0255 -->
DeepBambooLeft
<!-- /portfolio:text text_0255 -->

### 其他关卡示意 / 2 / obstacles / 3 / kind

<!-- portfolio:text text_0256 -->
solid
<!-- /portfolio:text text_0256 -->

### 其他关卡示意 / 2 / obstacles / 4 / 名称

<!-- portfolio:text text_0257 -->
DeepBambooRight
<!-- /portfolio:text text_0257 -->

### 其他关卡示意 / 2 / obstacles / 4 / kind

<!-- portfolio:text text_0258 -->
solid
<!-- /portfolio:text text_0258 -->

### 其他关卡示意 / 2 / obstacles / 5 / 名称

<!-- portfolio:text text_0259 -->
LeftForegroundRocks
<!-- /portfolio:text text_0259 -->

### 其他关卡示意 / 2 / obstacles / 5 / kind

<!-- portfolio:text text_0260 -->
solid
<!-- /portfolio:text text_0260 -->

### 其他关卡示意 / 2 / obstacles / 6 / 名称

<!-- portfolio:text text_0261 -->
RightForegroundRocks
<!-- /portfolio:text text_0261 -->

### 其他关卡示意 / 2 / obstacles / 6 / kind

<!-- portfolio:text text_0262 -->
solid
<!-- /portfolio:text text_0262 -->

### 其他关卡示意 / 2 / 备注

<!-- portfolio:text text_0263 -->
Y为脚本layout_training_dummies按X=1700道路截面计算的运行时值；不是直接照抄场景初始Y。相机边界2048×768、可行走范围为道路多边形。
<!-- /portfolio:text text_0263 -->

## uiIterations

### uiIterations / 标题

<!-- portfolio:text text_0264 -->
UI交互设计迭代
<!-- /portfolio:text text_0264 -->

### uiIterations / cases / 1 / id

<!-- portfolio:text text_0265 -->
interaction-button
<!-- /portfolio:text text_0265 -->

### uiIterations / cases / 1 / 标题

<!-- portfolio:text text_0266 -->
01 交互按钮UI迭代
<!-- /portfolio:text text_0266 -->

### uiIterations / cases / 1 / intro

<!-- portfolio:text text_0267 -->
调整交互按钮的视觉样式与按键提示，提高操作信息的辨识度。
<!-- /portfolio:text text_0267 -->

### uiIterations / cases / 1 / before / kind

<!-- portfolio:text text_0268 -->
image
<!-- /portfolio:text text_0268 -->

### uiIterations / cases / 1 / before / path

<!-- portfolio:text text_0269 -->
media/ui-iterations/button-before.png
<!-- /portfolio:text text_0269 -->

### uiIterations / cases / 1 / after / kind

<!-- portfolio:text text_0270 -->
image
<!-- /portfolio:text text_0270 -->

### uiIterations / cases / 1 / after / path

<!-- portfolio:text text_0271 -->
media/ui-iterations/button-after.png
<!-- /portfolio:text text_0271 -->

### uiIterations / cases / 2 / id

<!-- portfolio:text text_0272 -->
login
<!-- /portfolio:text text_0272 -->

### uiIterations / cases / 2 / 标题

<!-- portfolio:text text_0273 -->
02 登录界面迭代
<!-- /portfolio:text text_0273 -->

### uiIterations / cases / 2 / intro

<!-- portfolio:text text_0274 -->
重新调整登录界面的视觉布局与动态表现，使整体风格更加统一。
<!-- /portfolio:text text_0274 -->

### uiIterations / cases / 2 / before / kind

<!-- portfolio:text text_0275 -->
video
<!-- /portfolio:text text_0275 -->

### uiIterations / cases / 2 / before / path

<!-- portfolio:text text_0276 -->
media/ui-iterations/login-before.mp4
<!-- /portfolio:text text_0276 -->

### uiIterations / cases / 2 / after / kind

<!-- portfolio:text text_0277 -->
video
<!-- /portfolio:text text_0277 -->

### uiIterations / cases / 2 / after / path

<!-- portfolio:text text_0278 -->
media/ui-iterations/login-after.mp4
<!-- /portfolio:text text_0278 -->

### uiIterations / cases / 3 / id

<!-- portfolio:text text_0279 -->
inventory
<!-- /portfolio:text text_0279 -->

### uiIterations / cases / 3 / 标题

<!-- portfolio:text text_0280 -->
03 背包系统UI迭代
<!-- /portfolio:text text_0280 -->

### uiIterations / cases / 3 / intro

<!-- portfolio:text text_0281 -->
重新调整背包的界面风格与信息布局，让物品管理区域更加清晰。
<!-- /portfolio:text text_0281 -->

### uiIterations / cases / 3 / before / kind

<!-- portfolio:text text_0282 -->
image
<!-- /portfolio:text text_0282 -->

### uiIterations / cases / 3 / before / path

<!-- portfolio:text text_0283 -->
media/ui-iterations/inventory-before.png
<!-- /portfolio:text text_0283 -->

### uiIterations / cases / 3 / after / kind

<!-- portfolio:text text_0284 -->
image
<!-- /portfolio:text text_0284 -->

### uiIterations / cases / 3 / after / path

<!-- portfolio:text text_0285 -->
media/ui-iterations/inventory-after.png
<!-- /portfolio:text text_0285 -->

### uiIterations / cases / 4 / id

<!-- portfolio:text text_0286 -->
dream
<!-- /portfolio:text text_0286 -->

### uiIterations / cases / 4 / 标题

<!-- portfolio:text text_0287 -->
04 梦境场景视觉迭代
<!-- /portfolio:text text_0287 -->

### uiIterations / cases / 4 / intro

<!-- portfolio:text text_0288 -->
调整梦境场景的美术表现与画面布局，使其更符合游戏的武侠氛围。
<!-- /portfolio:text text_0288 -->

### uiIterations / cases / 4 / before / kind

<!-- portfolio:text text_0289 -->
image
<!-- /portfolio:text text_0289 -->

### uiIterations / cases / 4 / before / path

<!-- portfolio:text text_0290 -->
media/ui-iterations/dream-before.png
<!-- /portfolio:text text_0290 -->

### uiIterations / cases / 4 / after / kind

<!-- portfolio:text text_0291 -->
image
<!-- /portfolio:text text_0291 -->

### uiIterations / cases / 4 / after / path

<!-- portfolio:text text_0292 -->
media/ui-iterations/dream-after.png
<!-- /portfolio:text text_0292 -->
`,Be=`# 策划案例内容

> 建议使用本地文字编辑器修改。正文保存在本文件，隐藏标记用于映射页面字段。
> 手动编辑时请保留每段前后的 portfolio:text 标记；不要修改字段编号。

## 标题

### 标题

<!-- portfolio:text text_0001 -->
背包、地图与武学交互
<!-- /portfolio:text text_0001 -->

## 副标题

### 副标题

<!-- portfolio:text text_0002 -->
系统策划 · 规则、状态与异常边界
<!-- /portfolio:text text_0002 -->

## 简介

### 简介

<!-- portfolio:text text_0003 -->
把物品操作、剧情目标和技能解锁连接到既有原型中；用显示条件与执行条件的分离，保留玩家探索自由。当前背包、地图展示、主线提示及秘籍学习已接入，但整理、卸下、多区域传送与完整库存存档尚未实现。
<!-- /portfolio:text text_0003 -->

## 开发状态

### 开发状态

<!-- portfolio:text text_0004 -->
核心规则已接入 · 部分能力待完善
<!-- /portfolio:text text_0004 -->

## 设计目标

### 设计目标 / 1

<!-- portfolio:text text_0005 -->
让选择物品、查看详情、使用或装备的状态反馈保持一致；换肤不改变物品ID与业务回调。
<!-- /portfolio:text text_0005 -->

### 设计目标 / 2

<!-- portfolio:text text_0006 -->
让主线目标远距离可见，同时保持原有近距离交互门槛。
<!-- /portfolio:text text_0006 -->

### 设计目标 / 3

<!-- portfolio:text text_0007 -->
把秘籍消耗、永久学习与战斗可用条件分开，避免重复学习或跨形态误用。
<!-- /portfolio:text text_0007 -->

## 玩家体验

### 玩家体验 / 1

<!-- portfolio:text text_0008 -->
玩家可以先自由行走、查看地图，再决定何时拾剑和与NPC交谈。非阻塞独白不要求先完成教学才能移动。
<!-- /portfolio:text text_0008 -->

### 玩家体验 / 2

<!-- portfolio:text text_0009 -->
背包通过选中框、真实数量、详情和按钮禁用状态说明当前可做什么；空格与无效操作不产生成功反馈。
<!-- /portfolio:text text_0009 -->

### 玩家体验 / 3

<!-- portfolio:text text_0010 -->
武学学习是一次明确的背包操作；未学会时按K给出提示，学会后仍须满足普通形态、持剑与可操作状态。
<!-- /portfolio:text text_0010 -->

## 机制与规则

### 机制与规则 / 1 / 标题

<!-- portfolio:text text_0011 -->
物品选择与分类
<!-- /portfolio:text text_0011 -->

### 机制与规则 / 1 / 正文

<!-- portfolio:text text_0012 -->
目标：让详情对应真实物品。触发：点击有效物品或切换全部／装备／消耗／材料。结果：按稳定uid更新图标、数量、说明与按钮。异常：空格、无效uid、动画或付款独白锁定期间拒绝操作；默认刷新不会冒充真实物品点击。
<!-- /portfolio:text text_0012 -->

### 机制与规则 / 2 / 标题

<!-- portfolio:text text_0013 -->
使用、装备与丢弃
<!-- /portfolio:text text_0013 -->

### 机制与规则 / 2 / 正文

<!-- portfolio:text text_0014 -->
目标：保持原操作行为。触发：选择可消耗物品后使用、选择装备后装备、选择背包物品后丢弃。结果：恢复品消耗1个；新武器入装备槽且旧武器回背包；丢弃每次减少1个。异常：已装备物品不能从详情直接使用／再次装备／丢弃；没有独立卸下入口。铜钱的使用只在既有客栈付款条件成立时开放。
<!-- /portfolio:text text_0014 -->

### 机制与规则 / 3 / 标题

<!-- portfolio:text text_0015 -->
容量与堆叠
<!-- /portfolio:text text_0015 -->

### 机制与规则 / 3 / 正文

<!-- portfolio:text text_0016 -->
目标：避免部分获得或UI容量虚标。触发：获取物品。结果：先补同类未满堆，再按max_stack建新堆；可用容量不足时返回失败。真实容量25格。参考外观中的第六行5格仅为禁用装饰，容量文字仍读真实模型。
<!-- /portfolio:text text_0016 -->

### 机制与规则 / 4 / 标题

<!-- portfolio:text text_0017 -->
M键地图
<!-- /portfolio:text text_0017 -->

### 机制与规则 / 4 / 正文

<!-- portfolio:text text_0018 -->
目标：提供地点概览。触发：现实场景、起身结束、可控制且无模态对话时按M。结果：背包关闭，纸团在1秒内展开；6个区域可悬停，客栈可点击。异常：梦境不开放地图；展开中吞掉点击，重复打开不重启动画或声音。客栈点击仅提示“您已在此区域”，不传送。
<!-- /portfolio:text text_0018 -->

### 机制与规则 / 5 / 标题

<!-- portfolio:text text_0019 -->
主线提示与E执行分离
<!-- /portfolio:text text_0019 -->

### 机制与规则 / 5 / 正文

<!-- portfolio:text text_0020 -->
目标：避免玩家不知道下一步去哪里，又不能远程完成任务。触发：剧情标志选择当前目标。结果：唯一的古风图标和金色E键绑定目标，无距离限制。实际E仍按原条件执行：拾取默认半径90px、NPC距离小于115px，门／柜台／温泉检查各自区域。异常：对话、菜单、转场、梦境及不可操作状态隐藏现实提示。主线提示不替代其他已有对象的实际交互资格。
<!-- /portfolio:text text_0020 -->

### 机制与规则 / 6 / 标题

<!-- portfolio:text text_0021 -->
一次性地图后引导
<!-- /portfolio:text text_0021 -->

### 机制与规则 / 6 / 正文

<!-- portfolio:text text_0022 -->
目标：把空间理解接到拾剑与问路。触发：现实起身完成后首次成功开图，再关图。结果：显示6句非阻塞独白，结束后指向原地青锋剑，拾取后转向已有女性NPC。异常：提前拾剑或stage≥1时直接指向NPC；读取原对象和阶段，不新建武器。首次标志在当前OpeningSequence中防重播，没有新增整套存档加载器。
<!-- /portfolio:text text_0022 -->

### 机制与规则 / 7 / 标题

<!-- portfolio:text text_0023 -->
秘籍学习与可用性
<!-- /portfolio:text text_0023 -->

### 机制与规则 / 7 / 正文

<!-- portfolio:text text_0024 -->
目标：以物品操作解锁独立K武学。触发：背包使用《青锋三式》qingfeng_manual。结果：消耗1本，设置qingfeng_three_forms并写入journey.json的learned_skills。异常：已学后按钮禁用且模型重复调用也拒绝；旧存档缺字段或非布尔true不会解锁。生产场景尚未投放秘籍，不能把演示夹具的获取称为正式掉落流程。
<!-- /portfolio:text text_0024 -->

## 关键参数

### 关键参数 / 表头 / 1

<!-- portfolio:text text_0025 -->
规则／参数
<!-- /portfolio:text text_0025 -->

### 关键参数 / 表头 / 2

<!-- portfolio:text text_0026 -->
当前值
<!-- /portfolio:text text_0026 -->

### 关键参数 / 表头 / 3

<!-- portfolio:text text_0027 -->
边界
<!-- /portfolio:text text_0027 -->

### 关键参数 / 表格行 / 1 / 1

<!-- portfolio:text text_0028 -->
真实背包容量
<!-- /portfolio:text text_0028 -->

### 关键参数 / 表格行 / 1 / 2

<!-- portfolio:text text_0029 -->
25格
<!-- /portfolio:text text_0029 -->

### 关键参数 / 表格行 / 1 / 3

<!-- portfolio:text text_0030 -->
30格外观中的5格禁用装饰
<!-- /portfolio:text text_0030 -->

### 关键参数 / 表格行 / 2 / 1

<!-- portfolio:text text_0031 -->
分类
<!-- /portfolio:text text_0031 -->

### 关键参数 / 表格行 / 2 / 2

<!-- portfolio:text text_0032 -->
全部／装备／消耗／材料
<!-- /portfolio:text text_0032 -->

### 关键参数 / 表格行 / 2 / 3

<!-- portfolio:text text_0033 -->
按现有type过滤，不新增物品规则
<!-- /portfolio:text text_0033 -->

### 关键参数 / 表格行 / 3 / 1

<!-- portfolio:text text_0034 -->
背包打开
<!-- /portfolio:text text_0034 -->

### 关键参数 / 表格行 / 3 / 2

<!-- portfolio:text text_0035 -->
0.85秒；音效0.20秒
<!-- /portfolio:text text_0035 -->

### 关键参数 / 表格行 / 3 / 3

<!-- portfolio:text text_0036 -->
动画中阻止重复打开与物品操作
<!-- /portfolio:text text_0036 -->

### 关键参数 / 表格行 / 4 / 1

<!-- portfolio:text text_0037 -->
地图展开
<!-- /portfolio:text text_0037 -->

### 关键参数 / 表格行 / 4 / 2

<!-- portfolio:text text_0038 -->
1.00秒
<!-- /portfolio:text text_0038 -->

### 关键参数 / 表格行 / 4 / 3

<!-- portfolio:text text_0039 -->
展开中禁止区域点击；6区域仅客栈可点击
<!-- /portfolio:text text_0039 -->

### 关键参数 / 表格行 / 5 / 1

<!-- portfolio:text text_0040 -->
交互半径
<!-- /portfolio:text text_0040 -->

### 关键参数 / 表格行 / 5 / 2

<!-- portfolio:text text_0041 -->
拾取默认90px；NPC<115px
<!-- /portfolio:text text_0041 -->

### 关键参数 / 表格行 / 5 / 3

<!-- portfolio:text text_0042 -->
其他入口使用既有区域判断，不能统称90px
<!-- /portfolio:text text_0042 -->

### 关键参数 / 表格行 / 6 / 1

<!-- portfolio:text text_0043 -->
金色E提示
<!-- /portfolio:text text_0043 -->

### 关键参数 / 表格行 / 6 / 2

<!-- portfolio:text text_0044 -->
键高30px；循环0.9秒
<!-- /portfolio:text text_0044 -->

### 关键参数 / 表格行 / 6 / 3

<!-- portfolio:text text_0045 -->
只作视觉引导，不自动交互
<!-- /portfolio:text text_0045 -->

### 关键参数 / 表格行 / 7 / 1

<!-- portfolio:text text_0046 -->
学习存档
<!-- /portfolio:text text_0046 -->

### 关键参数 / 表格行 / 7 / 2

<!-- portfolio:text text_0047 -->
learned_skills.qingfeng_three_forms
<!-- /portfolio:text text_0047 -->

### 关键参数 / 表格行 / 7 / 3

<!-- portfolio:text text_0048 -->
永久技能字段；不是完整库存／装备序列化
<!-- /portfolio:text text_0048 -->

## 流程

### 流程 / 1 / 标题

<!-- portfolio:text text_0049 -->
选中物品
<!-- /portfolio:text text_0049 -->

### 流程 / 1 / 说明

<!-- portfolio:text text_0050 -->
稳定uid → 读取真实数量／说明／类型 → 刷新按钮资格
<!-- /portfolio:text text_0050 -->

### 流程 / 2 / 标题

<!-- portfolio:text text_0051 -->
执行有效操作
<!-- /portfolio:text text_0051 -->

### 流程 / 2 / 说明

<!-- portfolio:text text_0052 -->
使用／装备／丢弃调用原模型；失败不发成功反馈
<!-- /portfolio:text text_0052 -->

### 流程 / 3 / 标题

<!-- portfolio:text text_0053 -->
更新状态
<!-- /portfolio:text text_0053 -->

### 流程 / 3 / 说明

<!-- portfolio:text text_0054 -->
changed刷新背包和属性；成功点击触发单次木质音效
<!-- /portfolio:text text_0054 -->

### 流程 / 4 / 标题

<!-- portfolio:text text_0055 -->
秘籍特殊分支
<!-- /portfolio:text text_0055 -->

### 流程 / 4 / 说明

<!-- portfolio:text text_0056 -->
未学→消耗1本→skill_learned→写学习存档；已学→拒绝且不消耗
<!-- /portfolio:text text_0056 -->

### 流程 / 5 / 标题

<!-- portfolio:text text_0057 -->
剧情导航
<!-- /portfolio:text text_0057 -->

### 流程 / 5 / 说明

<!-- portfolio:text text_0058 -->
起身→自由移动与地图引导→首次关图独白→原剑→女性NPC→后续客栈目标
<!-- /portfolio:text text_0058 -->

## 实现方式

### 实现方式 / 1 / 标题

<!-- portfolio:text text_0059 -->
模型与视觉分层
<!-- /portfolio:text text_0059 -->

### 实现方式 / 1 / 正文

<!-- portfolio:text text_0060 -->
Inventory负责目录、堆叠、uid、装备与学习；InventoryUI继续使用原信号和回调。换肤使用独立原图底板与动态节点，显示真实6堆初始物品和原25格容量，没有为了匹配参考图填充示例数据。
<!-- /portfolio:text text_0060 -->

### 实现方式 / 2 / 标题

<!-- portfolio:text text_0061 -->
非阻塞展示与输入优先级
<!-- /portfolio:text text_0061 -->

### 实现方式 / 2 / 正文

<!-- portfolio:text text_0062 -->
DialogueUI另存非阻塞独白的文本、进度与打字状态；菜单或普通剧情临时覆盖后可继续显示。它没有写入模态dialog或抢占WASD，ENTER／点击推进，附近E优先处理原交互。
<!-- /portfolio:text text_0062 -->

### 实现方式 / 3 / 标题

<!-- portfolio:text text_0063 -->
单个提示组件
<!-- /portfolio:text text_0063 -->

### 实现方式 / 3 / 正文

<!-- portfolio:text text_0064 -->
HUD每帧依据已有stage、入口解锁、付款和泡澡状态选一个目标；InteractionIndicator随目标全局位置显示。显示函数不执行拾取或对话，Game.interact独立检查范围与操作状态。
<!-- /portfolio:text text_0064 -->

### 实现方式 / 4 / 标题

<!-- portfolio:text text_0065 -->
音效按成功行为触发
<!-- /portfolio:text text_0065 -->

### 实现方式 / 4 / 正文

<!-- portfolio:text text_0066 -->
有效背包点击与实际E交互复用UIAudio；禁用或未实际触发的操作无木质反馈。木质音效-18dB、单声部，快速点击替换尾音。背包与地图保留各自打开音效，不由提示循环播放声音。
<!-- /portfolio:text text_0066 -->

### 实现方式 / 5 / 标题

<!-- portfolio:text text_0067 -->
持久化边界
<!-- /portfolio:text text_0067 -->

### 实现方式 / 5 / 正文

<!-- portfolio:text text_0068 -->
已学技能通过原journey.json字段保存并在启动时读取，死亡重试inventory.reset(false)保留学习。当前源码没有将items、equipment、next_uid完整导出／加载；不能把“换肤未改存档”写成“全背包跨会话存档已完成”。
<!-- /portfolio:text text_0068 -->

## 问题与迭代

### 问题与迭代 / 1 / 发现问题

<!-- portfolio:text text_0069 -->
提示只在靠近时出现，玩家难判断下一目标
<!-- /portfolio:text text_0069 -->

### 问题与迭代 / 1 / 原因分析

<!-- portfolio:text text_0070 -->
导航显示与近距交互资格耦合
<!-- /portfolio:text text_0070 -->

### 问题与迭代 / 1 / 修改方案

<!-- portfolio:text text_0071 -->
HUD按剧情标志选择单一目标，E执行仍使用原距离／区域条件
<!-- /portfolio:text text_0071 -->

### 问题与迭代 / 1 / 结果

<!-- portfolio:text text_0072 -->
留存原生回归验证远处显示且远程E拒绝，靠近后原流程可执行
<!-- /portfolio:text text_0072 -->

### 问题与迭代 / 1 / 开发状态

<!-- portfolio:text text_0073 -->
已接入
<!-- /portfolio:text text_0073 -->

### 问题与迭代 / 1 / 依据

<!-- portfolio:text text_0074 -->
scripts/hud.gd:164–229；youxitu/story_interaction_v1/tests/interaction_indicator_results.json
<!-- /portfolio:text text_0074 -->

### 问题与迭代 / 2 / 发现问题

<!-- portfolio:text text_0075 -->
开局地图教学可能限制探索或重复要求开图
<!-- /portfolio:text text_0075 -->

### 问题与迭代 / 2 / 原因分析

<!-- portfolio:text text_0076 -->
教学与模态剧情容易共用控制锁；早开图需处理旧页面
<!-- /portfolio:text text_0076 -->

### 问题与迭代 / 2 / 修改方案

<!-- portfolio:text text_0077 -->
起身结束即恢复playing，使用非阻塞指南；首次关图替换旧引导并只调度一次后续独白
<!-- /portfolio:text text_0077 -->

### 问题与迭代 / 2 / 结果

<!-- portfolio:text text_0078 -->
留存测试覆盖真实WASD、提前开图、重复关图、菜单延后和梦境排除
<!-- /portfolio:text text_0078 -->

### 问题与迭代 / 2 / 开发状态

<!-- portfolio:text text_0079 -->
已接入
<!-- /portfolio:text text_0079 -->

### 问题与迭代 / 2 / 依据

<!-- portfolio:text text_0080 -->
scripts/opening_sequence.gd:185–265；youxitu/opening_post_map_guide_v1/tests/native_results.json
<!-- /portfolio:text text_0080 -->

### 问题与迭代 / 3 / 发现问题

<!-- portfolio:text text_0081 -->
新背包参考图的示例功能与原模型不一致
<!-- /portfolio:text text_0081 -->

### 问题与迭代 / 3 / 原因分析

<!-- portfolio:text text_0082 -->
参考有30格、整理、多装备槽及示例属性，原模型只有25格及武器装备入口
<!-- /portfolio:text text_0082 -->

### 问题与迭代 / 3 / 修改方案

<!-- portfolio:text text_0083 -->
只换底板和动态显示位置，额外5格及整理保持禁用，真实数据继续驱动UI
<!-- /portfolio:text text_0083 -->

### 问题与迭代 / 3 / 结果

<!-- portfolio:text text_0084 -->
留存241项换肤检查无失败；整理、卸下并未被伪造为已实现
<!-- /portfolio:text text_0084 -->

### 问题与迭代 / 3 / 开发状态

<!-- portfolio:text text_0085 -->
视觉接入完成；扩展功能未实现
<!-- /portfolio:text text_0085 -->

### 问题与迭代 / 3 / 依据

<!-- portfolio:text text_0086 -->
scripts/inventory_ui.gd:363–428,591–689；youxitu/inventory_skin_20261016_v1/README.md
<!-- /portfolio:text text_0086 -->

### 问题与迭代 / 4 / 发现问题

<!-- portfolio:text text_0087 -->
重复秘籍或异常存档可能重复学习
<!-- /portfolio:text text_0087 -->

### 问题与迭代 / 4 / 原因分析

<!-- portfolio:text text_0088 -->
物品数量与永久技能状态是不同生命周期
<!-- /portfolio:text text_0088 -->

### 问题与迭代 / 4 / 修改方案

<!-- portfolio:text text_0089 -->
模型先检查已学状态、使用成功才消耗；只导入允许的技能和严格布尔true
<!-- /portfolio:text text_0089 -->

### 问题与迭代 / 4 / 结果

<!-- portfolio:text text_0090 -->
现有K专项记录验证学习、拒绝重复、旧存档缺项及重试保留；正式场景投放仍待设计
<!-- /portfolio:text text_0090 -->

### 问题与迭代 / 4 / 开发状态

<!-- portfolio:text text_0091 -->
学习链路已接入；获得链路待完善
<!-- /portfolio:text text_0091 -->

### 问题与迭代 / 4 / 依据

<!-- portfolio:text text_0092 -->
scripts/inventory.gd:36–48,102–116；youxitu/manual_combo_1344333025_v1/tests/native_results.json
<!-- /portfolio:text text_0092 -->

## 验证结果

### 验证结果 / 1 / 名称

<!-- portfolio:text text_0093 -->
背包换肤留存验收
<!-- /portfolio:text text_0093 -->

### 验证结果 / 1 / 结果

<!-- portfolio:text text_0094 -->
241项检查，0失败；1280×720、1920×1080、1024×768、960×540覆盖。数据来自原报告，本次作品集整理未重新运行Godot。
<!-- /portfolio:text text_0094 -->

### 验证结果 / 1 / 依据

<!-- portfolio:text text_0095 -->
youxitu/inventory_skin_20261016_v1/tests/native_results.json
<!-- /portfolio:text text_0095 -->

### 验证结果 / 2 / 名称

<!-- portfolio:text text_0096 -->
剧情目标与距离分离
<!-- /portfolio:text text_0096 -->

### 验证结果 / 2 / 结果

<!-- portfolio:text text_0097 -->
219项检查，0失败；覆盖远距提示、近距执行、目标切换与场景重入。
<!-- /portfolio:text text_0097 -->

### 验证结果 / 2 / 依据

<!-- portfolio:text text_0098 -->
youxitu/story_interaction_v1/tests/interaction_indicator_results.json
<!-- /portfolio:text text_0098 -->

### 验证结果 / 3 / 名称

<!-- portfolio:text text_0099 -->
首次关图后的自由引导
<!-- /portfolio:text text_0099 -->

### 验证结果 / 3 / 结果

<!-- portfolio:text text_0100 -->
180项检查，0失败；真实起身信号、WASD与地图／E输入。已有拾剑阶段是夹具，不代表新增完整存档加载。
<!-- /portfolio:text text_0100 -->

### 验证结果 / 3 / 依据

<!-- portfolio:text text_0101 -->
youxitu/opening_post_map_guide_v1/tests/native_results.json
<!-- /portfolio:text text_0101 -->

### 验证结果 / 4 / 名称

<!-- portfolio:text text_0102 -->
K武学专项
<!-- /portfolio:text text_0102 -->

### 验证结果 / 4 / 结果

<!-- portfolio:text text_0103 -->
273项检查，0失败；学习、重复保护、存档、按键和暂停同步使用隔离测试路径；秘籍仅由测试夹具提供。
<!-- /portfolio:text text_0103 -->

### 验证结果 / 4 / 依据

<!-- portfolio:text text_0104 -->
youxitu/manual_combo_1344333025_v1/tests/native_results.json
<!-- /portfolio:text text_0104 -->

### 验证结果 / 5 / 名称

<!-- portfolio:text text_0105 -->
统一交互声音
<!-- /portfolio:text text_0105 -->

### 验证结果 / 5 / 结果

<!-- portfolio:text text_0106 -->
123项检查，0失败；无卸下动作可验收。独立E键动画记录48项检查，0失败。各专项口径不同，未相加为独立玩家测试数。
<!-- /portfolio:text text_0106 -->

### 验证结果 / 5 / 依据

<!-- portfolio:text text_0107 -->
youxitu/interaction_sound_v1/tests/native_results.json；youxitu/interaction_key_press_v1/tests/interaction_key_press_results.json
<!-- /portfolio:text text_0107 -->

### 验证结果 / 6 / 名称

<!-- portfolio:text text_0108 -->
地图展开留存验收
<!-- /portfolio:text text_0108 -->

### 验证结果 / 6 / 结果

<!-- portfolio:text text_0109 -->
最终画面比较15项、打开音效56项，各0失败；记录支持展示与音效回归，不证明其他地区可进入。
<!-- /portfolio:text text_0109 -->

### 验证结果 / 6 / 依据

<!-- portfolio:text text_0110 -->
youxitu/map_crumple_v2/tests/map_final_render_results.json；youxitu/map_crumple_v2/tests/map_open_sound_results.json
<!-- /portfolio:text text_0110 -->

## 尚存问题

### 尚存问题 / 1

<!-- portfolio:text text_0111 -->
整理与卸下未实现；头／衣／饰品／鞋等预留槽没有本版可获得并装备的对应目录物品。
<!-- /portfolio:text text_0111 -->

### 尚存问题 / 2

<!-- portfolio:text text_0112 -->
地图存在6区域轮廓与悬停反馈，但当前只开放客栈点击且不转场，不能展示为完整大地图旅行系统。
<!-- /portfolio:text text_0112 -->

### 尚存问题 / 3

<!-- portfolio:text text_0113 -->
秘籍学习、保存和K攻击已经接入，正式场景取得秘籍的放置／奖励／掉落链路尚未开放。
<!-- /portfolio:text text_0113 -->

### 尚存问题 / 4

<!-- portfolio:text text_0114 -->
当前已保存学习和部分剧情字段，完整库存、装备与全部任务阶段的跨会话恢复未实现。
<!-- /portfolio:text text_0114 -->

### 尚存问题 / 5

<!-- portfolio:text text_0115 -->
首次地图引导防重复使用本次序列的状态标志，不应称为已完成的跨存档一次性任务系统。
<!-- /portfolio:text text_0115 -->

### 尚存问题 / 6

<!-- portfolio:text text_0116 -->
第二招独立收势与素材接缝仍有战斗表现限制，系统页不将其称为已解决。
<!-- /portfolio:text text_0116 -->

### 尚存问题 / 7

<!-- portfolio:text text_0117 -->
报告是开发回归证据，未提供招聘用途可公开的玩家访谈、可用性测试或量化体验提升。原始动机、独立贡献和最终素材授权待本人确认。
<!-- /portfolio:text text_0117 -->

## 项目依据

### 项目依据 / 1 / 文件路径

<!-- portfolio:text text_0118 -->
scripts/inventory.gd
<!-- /portfolio:text text_0118 -->

### 项目依据 / 1 / 行号

<!-- portfolio:text text_0119 -->
7–48,50–138
<!-- /portfolio:text text_0119 -->

### 项目依据 / 1 / 支持的结论

<!-- portfolio:text text_0120 -->
容量、目录、默认物品、堆叠、学习、装备与攻击属性
<!-- /portfolio:text text_0120 -->

### 项目依据 / 2 / 文件路径

<!-- portfolio:text text_0121 -->
scripts/inventory_ui.gd
<!-- /portfolio:text text_0121 -->

### 项目依据 / 2 / 行号

<!-- portfolio:text text_0122 -->
363–428,502–689
<!-- /portfolio:text text_0122 -->

### 项目依据 / 2 / 支持的结论

<!-- portfolio:text text_0123 -->
动态格、禁用整理、操作锁定、真实属性与业务回调
<!-- /portfolio:text text_0123 -->

### 项目依据 / 3 / 文件路径

<!-- portfolio:text text_0124 -->
scripts/inventory_open_anim.gd
<!-- /portfolio:text text_0124 -->

### 项目依据 / 3 / 行号

<!-- portfolio:text text_0125 -->
8–10,50–68
<!-- /portfolio:text text_0125 -->

### 项目依据 / 3 / 支持的结论

<!-- portfolio:text text_0126 -->
0.85秒打开、0.20秒声音时点与重复保护
<!-- /portfolio:text text_0126 -->

### 项目依据 / 4 / 文件路径

<!-- portfolio:text text_0127 -->
scripts/map_ui.gd
<!-- /portfolio:text text_0127 -->

### 项目依据 / 4 / 行号

<!-- portfolio:text text_0128 -->
7,35–41,104–135,210–228
<!-- /portfolio:text text_0128 -->

### 项目依据 / 4 / 支持的结论

<!-- portfolio:text text_0129 -->
地图区域能力、1秒展开与点击边界
<!-- /portfolio:text text_0129 -->

### 项目依据 / 5 / 文件路径

<!-- portfolio:text text_0130 -->
scripts/hud.gd
<!-- /portfolio:text text_0130 -->

### 项目依据 / 5 / 行号

<!-- portfolio:text text_0131 -->
164–229
<!-- /portfolio:text text_0131 -->

### 项目依据 / 5 / 支持的结论

<!-- portfolio:text text_0132 -->
单个剧情目标提示及远距显示
<!-- /portfolio:text text_0132 -->

### 项目依据 / 6 / 文件路径

<!-- portfolio:text text_0133 -->
scripts/game.gd
<!-- /portfolio:text text_0133 -->

### 项目依据 / 6 / 行号

<!-- portfolio:text text_0134 -->
312–363,679–725,1730–1793,1857–1971
<!-- /portfolio:text text_0134 -->

### 项目依据 / 6 / 支持的结论

<!-- portfolio:text text_0135 -->
UI资格、学习存档、E范围及实际持久化边界
<!-- /portfolio:text text_0135 -->

### 项目依据 / 7 / 文件路径

<!-- portfolio:text text_0136 -->
scripts/opening_sequence.gd
<!-- /portfolio:text text_0136 -->

### 项目依据 / 7 / 行号

<!-- portfolio:text text_0137 -->
185–265
<!-- /portfolio:text text_0137 -->

### 项目依据 / 7 / 支持的结论

<!-- portfolio:text text_0138 -->
首次关图、非阻塞后续剧情、读取原剑
<!-- /portfolio:text text_0138 -->

### 项目依据 / 8 / 文件路径

<!-- portfolio:text text_0139 -->
scripts/dialogue_ui.gd
<!-- /portfolio:text text_0139 -->

### 项目依据 / 8 / 行号

<!-- portfolio:text text_0140 -->
185–238,253–288
<!-- /portfolio:text text_0140 -->

### 项目依据 / 8 / 支持的结论

<!-- portfolio:text text_0141 -->
非阻塞独白与打字进度保存
<!-- /portfolio:text text_0141 -->

### 项目依据 / 9 / 文件路径

<!-- portfolio:text text_0142 -->
scripts/ui_audio.gd
<!-- /portfolio:text text_0142 -->

### 项目依据 / 9 / 行号

<!-- portfolio:text text_0143 -->
18–19,34–42,69–83
<!-- /portfolio:text text_0143 -->

### 项目依据 / 9 / 支持的结论

<!-- portfolio:text text_0144 -->
单声部交互反馈与地图独立声音
<!-- /portfolio:text text_0144 -->
`,Ye="jianghuransheng-portfolio-article",We=1,Ge={title:{$text:"text_0001"},subtitle:{$text:"text_0002"},summary:{$text:"text_0003"},status:{$text:"text_0004"},goals:[{$text:"text_0005"},{$text:"text_0006"},{$text:"text_0007"}],experience:[{$text:"text_0008"},{$text:"text_0009"},{$text:"text_0010"}],rules:[{title:{$text:"text_0011"},body:{$text:"text_0012"}},{title:{$text:"text_0013"},body:{$text:"text_0014"}},{title:{$text:"text_0015"},body:{$text:"text_0016"}},{title:{$text:"text_0017"},body:{$text:"text_0018"}}],parameters:{headers:[{$text:"text_0025"},{$text:"text_0026"},{$text:"text_0027"}],rows:[[{$text:"text_0028"},{$text:"text_0029"},{$text:"text_0030"}],[{$text:"text_0031"},{$text:"text_0032"},{$text:"text_0033"}],[{$text:"text_0034"},{$text:"text_0035"},{$text:"text_0036"}],[{$text:"text_0037"},{$text:"text_0038"},{$text:"text_0039"}],[{$text:"text_0040"},{$text:"text_0041"},{$text:"text_0042"}],[{$text:"text_0043"},{$text:"text_0044"},{$text:"text_0045"}],[{$text:"text_0046"},{$text:"text_0047"},{$text:"text_0048"}],[{$text:"text_0049"},{$text:"text_0050"},{$text:"text_0051"}],[{$text:"text_0052"},{$text:"text_0053"},{$text:"text_0054"}],[{$text:"text_0055"},{$text:"text_0056"},{$text:"text_0057"}]]},flow:[{title:{$text:"text_0058"},detail:{$text:"text_0059"}},{title:{$text:"text_0060"},detail:{$text:"text_0061"}},{title:{$text:"text_0062"},detail:{$text:"text_0063"}},{title:{$text:"text_0064"},detail:{$text:"text_0065"}},{title:{$text:"text_0066"},detail:{$text:"text_0067"}}],implementation:[{title:{$text:"text_0068"},body:{$text:"text_0069"}},{title:{$text:"text_0070"},body:{$text:"text_0071"}},{title:{$text:"text_0072"},body:{$text:"text_0073"}},{title:{$text:"text_0074"},body:{$text:"text_0075"}}],iterations:[{problem:{$text:"text_0076"},cause:{$text:"text_0077"},change:{$text:"text_0078"},result:{$text:"text_0079"},status:{$text:"text_0080"},source:{$text:"text_0081"}},{problem:{$text:"text_0082"},cause:{$text:"text_0083"},change:{$text:"text_0084"},result:{$text:"text_0085"},status:{$text:"text_0086"},source:{$text:"text_0087"}},{problem:{$text:"text_0088"},cause:{$text:"text_0089"},change:{$text:"text_0090"},result:{$text:"text_0091"},status:{$text:"text_0092"},source:{$text:"text_0093"}},{problem:{$text:"text_0094"},cause:{$text:"text_0095"},change:{$text:"text_0096"},result:{$text:"text_0097"},status:{$text:"text_0098"},source:{$text:"text_0099"}}],validation:[{label:{$text:"text_0100"},result:{$text:"text_0101"},source:{$text:"text_0102"}},{label:{$text:"text_0103"},result:{$text:"text_0104"},source:{$text:"text_0105"}},{label:{$text:"text_0106"},result:{$text:"text_0107"},source:{$text:"text_0108"}},{label:{$text:"text_0109"},result:{$text:"text_0110"},source:{$text:"text_0111"}}],limitations:[{$text:"text_0112"},{$text:"text_0113"},{$text:"text_0114"},{$text:"text_0115"},{$text:"text_0116"},{$text:"text_0117"}],sources:[{file:{$text:"text_0118"},lines:{$text:"text_0119"},claim:{$text:"text_0120"}},{file:{$text:"text_0121"},lines:{$text:"text_0122"},claim:{$text:"text_0123"}},{file:{$text:"text_0124"},lines:{$text:"text_0125"},claim:{$text:"text_0126"}},{file:{$text:"text_0127"},lines:{$text:"text_0128"},claim:{$text:"text_0129"}},{file:{$text:"text_0130"},lines:{$text:"text_0131"},claim:{$text:"text_0132"}},{file:{$text:"text_0133"},lines:{$text:"text_0134"},claim:{$text:"text_0135"}},{file:{$text:"text_0136"},lines:{$text:"text_0137"},claim:{$text:"text_0138"}},{file:{$text:"text_0139"},lines:{$text:"text_0140"},claim:{$text:"text_0141"}},{file:{$text:"text_0142"},lines:{$text:"text_0143"},claim:{$text:"text_0144"}},{file:{$text:"text_0145"},lines:{$text:"text_0146"},claim:{$text:"text_0147"}},{file:{$text:"text_0148"},lines:{$text:"text_0149"},claim:{$text:"text_0150"}},{file:{$text:"text_0151"},lines:{$text:"text_0152"},claim:{$text:"text_0153"}},{file:{$text:"text_0154"},lines:{$text:"text_0155"},claim:{$text:"text_0156"}},{file:{$text:"text_0157"},lines:{$text:"text_0158"},claim:{$text:"text_0159"}},{file:{$text:"text_0160"},lines:{$text:"text_0161"},claim:{$text:"text_0162"}},{file:{$text:"text_0163"},lines:{$text:"text_0164"},claim:{$text:"text_0165"}},{file:{$text:"text_0166"},lines:{$text:"text_0167"},claim:{$text:"text_0168"}},{file:{$text:"text_0169"},lines:{$text:"text_0170"},claim:{$text:"text_0171"}}],timelineNote:{$text:"text_0172"},timeline:[{name:{$text:"text_0173"},branch:{$text:"text_0174"},fps:42,sourceFps:24,frames:36,recoveryFrames:28,recoveryFps:46.8,active:[21,24],buffer:[18,35],duration:.8571428571428571,recoveryDuration:.5982905982905983},{name:{$text:"text_0175"},branch:{$text:"text_0176"},fps:36,sourceFps:24,frames:15,recoveryFrames:28,recoveryFps:46.8,active:[3,7],buffer:[3,14],duration:.4166666666666667,recoveryDuration:.5982905982905983},{name:{$text:"text_0177"},branch:{$text:"text_0178"},fps:33.6,sourceFps:24,frames:10,recoveryFrames:28,recoveryFps:46.8,active:[2,5],buffer:[-1,-1],duration:.2976190476190476,recoveryDuration:.5982905982905983},{name:{$text:"text_0179"},branch:{$text:"text_0180"},fps:24,sourceFps:24,variableSpeed:!0,frames:25,recoveryFrames:14,active:[[3,8],[13,18]],buffer:[2,24],frameDurations:[.03787878787878787,.03787878787878787,.041666666666666664,.027777777777777776,.020833333333333332,.020833333333333332,.022522522522522518,.02450980392156863,.02450980392156863,.02873563218390805,.034722222222222224,.03787878787878787,.041666666666666664,.027777777777777776,.020833333333333332,.020833333333333332,.022522522522522518,.02450980392156863,.02450980392156863,.02873563218390805,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224],duration:.7447474442910548,recoveryDuration:.5303030303030303,dash:null},{name:{$text:"text_0181"},branch:{$text:"text_0182"},fps:24,sourceFps:24,variableSpeed:!0,frames:35,recoveryFrames:13,active:[[7,14]],buffer:[2,34],frameDurations:[.036231884057971016,.036231884057971016,.036231884057971016,.03875968992248063,.041666666666666664,.041666666666666664,.027777777777777776,.020833333333333332,.020833333333333332,.02192982456140351,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.026041666666666664,.029761904761904767,.029761904761904767,.029761904761904767,.029761904761904767,.029761904761904767,.032051282051282055,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224],duration:1.0961950465926773,recoveryDuration:.49242424242424243,dash:null},{name:{$text:"text_0183"},branch:{$text:"text_0184"},fps:24,sourceFps:24,variableSpeed:!0,frames:73,recoveryFrames:28,active:[[33,72]],buffer:[-1,-1],frameDurations:[.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888],duration:1.3032407407407394,recoveryDuration:.5423280423280423,dash:{first:33,last:38,distance:168,duration:.125}},{name:{$text:"text_0185"},branch:{$text:"text_0186"},fps:24,sourceFps:24,frames:28,recoveryFrames:11,recoveryFps:24,active:[15,27],buffer:[16,27],duration:1.1666666666666667,recoveryDuration:.4583333333333333},{name:{$text:"text_0187"},branch:{$text:"text_0188"},fps:24,sourceFps:24,frames:28,recoveryFrames:0,recoveryFps:24,active:[14,27],buffer:[15,27],duration:1.1666666666666667,recoveryDuration:0},{name:{$text:"text_0189"},branch:{$text:"text_0190"},fps:24,sourceFps:24,frames:52,recoveryFrames:5,recoveryFps:24,active:[6,12],buffer:[-1,-1],duration:2.1666666666666665,recoveryDuration:.20833333333333334}]},Je=JSON.parse('[{"id":"text_0001","path":"/title","label":"标题"},{"id":"text_0002","path":"/subtitle","label":"副标题"},{"id":"text_0003","path":"/summary","label":"简介"},{"id":"text_0004","path":"/status","label":"开发状态"},{"id":"text_0005","path":"/goals/0","label":"设计目标 / 1"},{"id":"text_0006","path":"/goals/1","label":"设计目标 / 2"},{"id":"text_0007","path":"/goals/2","label":"设计目标 / 3"},{"id":"text_0008","path":"/experience/0","label":"玩家体验 / 1"},{"id":"text_0009","path":"/experience/1","label":"玩家体验 / 2"},{"id":"text_0010","path":"/experience/2","label":"玩家体验 / 3"},{"id":"text_0011","path":"/rules/0/title","label":"机制与规则 / 1 / 标题"},{"id":"text_0012","path":"/rules/0/body","label":"机制与规则 / 1 / 正文"},{"id":"text_0013","path":"/rules/1/title","label":"机制与规则 / 2 / 标题"},{"id":"text_0014","path":"/rules/1/body","label":"机制与规则 / 2 / 正文"},{"id":"text_0015","path":"/rules/2/title","label":"机制与规则 / 3 / 标题"},{"id":"text_0016","path":"/rules/2/body","label":"机制与规则 / 3 / 正文"},{"id":"text_0017","path":"/rules/3/title","label":"机制与规则 / 4 / 标题"},{"id":"text_0018","path":"/rules/3/body","label":"机制与规则 / 4 / 正文"},{"id":"text_0025","path":"/parameters/headers/0","label":"关键参数 / 表头 / 1"},{"id":"text_0026","path":"/parameters/headers/1","label":"关键参数 / 表头 / 2"},{"id":"text_0027","path":"/parameters/headers/2","label":"关键参数 / 表头 / 3"},{"id":"text_0028","path":"/parameters/rows/0/0","label":"关键参数 / 表格行 / 1 / 1"},{"id":"text_0029","path":"/parameters/rows/0/1","label":"关键参数 / 表格行 / 1 / 2"},{"id":"text_0030","path":"/parameters/rows/0/2","label":"关键参数 / 表格行 / 1 / 3"},{"id":"text_0031","path":"/parameters/rows/1/0","label":"关键参数 / 表格行 / 2 / 1"},{"id":"text_0032","path":"/parameters/rows/1/1","label":"关键参数 / 表格行 / 2 / 2"},{"id":"text_0033","path":"/parameters/rows/1/2","label":"关键参数 / 表格行 / 2 / 3"},{"id":"text_0034","path":"/parameters/rows/2/0","label":"关键参数 / 表格行 / 3 / 1"},{"id":"text_0035","path":"/parameters/rows/2/1","label":"关键参数 / 表格行 / 3 / 2"},{"id":"text_0036","path":"/parameters/rows/2/2","label":"关键参数 / 表格行 / 3 / 3"},{"id":"text_0037","path":"/parameters/rows/3/0","label":"关键参数 / 表格行 / 4 / 1"},{"id":"text_0038","path":"/parameters/rows/3/1","label":"关键参数 / 表格行 / 4 / 2"},{"id":"text_0039","path":"/parameters/rows/3/2","label":"关键参数 / 表格行 / 4 / 3"},{"id":"text_0040","path":"/parameters/rows/4/0","label":"关键参数 / 表格行 / 5 / 1"},{"id":"text_0041","path":"/parameters/rows/4/1","label":"关键参数 / 表格行 / 5 / 2"},{"id":"text_0042","path":"/parameters/rows/4/2","label":"关键参数 / 表格行 / 5 / 3"},{"id":"text_0043","path":"/parameters/rows/5/0","label":"关键参数 / 表格行 / 6 / 1"},{"id":"text_0044","path":"/parameters/rows/5/1","label":"关键参数 / 表格行 / 6 / 2"},{"id":"text_0045","path":"/parameters/rows/5/2","label":"关键参数 / 表格行 / 6 / 3"},{"id":"text_0046","path":"/parameters/rows/6/0","label":"关键参数 / 表格行 / 7 / 1"},{"id":"text_0047","path":"/parameters/rows/6/1","label":"关键参数 / 表格行 / 7 / 2"},{"id":"text_0048","path":"/parameters/rows/6/2","label":"关键参数 / 表格行 / 7 / 3"},{"id":"text_0049","path":"/parameters/rows/7/0","label":"关键参数 / 表格行 / 8 / 1"},{"id":"text_0050","path":"/parameters/rows/7/1","label":"关键参数 / 表格行 / 8 / 2"},{"id":"text_0051","path":"/parameters/rows/7/2","label":"关键参数 / 表格行 / 8 / 3"},{"id":"text_0052","path":"/parameters/rows/8/0","label":"关键参数 / 表格行 / 9 / 1"},{"id":"text_0053","path":"/parameters/rows/8/1","label":"关键参数 / 表格行 / 9 / 2"},{"id":"text_0054","path":"/parameters/rows/8/2","label":"关键参数 / 表格行 / 9 / 3"},{"id":"text_0055","path":"/parameters/rows/9/0","label":"关键参数 / 表格行 / 10 / 1"},{"id":"text_0056","path":"/parameters/rows/9/1","label":"关键参数 / 表格行 / 10 / 2"},{"id":"text_0057","path":"/parameters/rows/9/2","label":"关键参数 / 表格行 / 10 / 3"},{"id":"text_0058","path":"/flow/0/title","label":"流程 / 1 / 标题"},{"id":"text_0059","path":"/flow/0/detail","label":"流程 / 1 / 说明"},{"id":"text_0060","path":"/flow/1/title","label":"流程 / 2 / 标题"},{"id":"text_0061","path":"/flow/1/detail","label":"流程 / 2 / 说明"},{"id":"text_0062","path":"/flow/2/title","label":"流程 / 3 / 标题"},{"id":"text_0063","path":"/flow/2/detail","label":"流程 / 3 / 说明"},{"id":"text_0064","path":"/flow/3/title","label":"流程 / 4 / 标题"},{"id":"text_0065","path":"/flow/3/detail","label":"流程 / 4 / 说明"},{"id":"text_0066","path":"/flow/4/title","label":"流程 / 5 / 标题"},{"id":"text_0067","path":"/flow/4/detail","label":"流程 / 5 / 说明"},{"id":"text_0068","path":"/implementation/0/title","label":"实现方式 / 1 / 标题"},{"id":"text_0069","path":"/implementation/0/body","label":"实现方式 / 1 / 正文"},{"id":"text_0070","path":"/implementation/1/title","label":"实现方式 / 2 / 标题"},{"id":"text_0071","path":"/implementation/1/body","label":"实现方式 / 2 / 正文"},{"id":"text_0072","path":"/implementation/2/title","label":"实现方式 / 3 / 标题"},{"id":"text_0073","path":"/implementation/2/body","label":"实现方式 / 3 / 正文"},{"id":"text_0074","path":"/implementation/3/title","label":"实现方式 / 4 / 标题"},{"id":"text_0075","path":"/implementation/3/body","label":"实现方式 / 4 / 正文"},{"id":"text_0076","path":"/iterations/0/problem","label":"问题与迭代 / 1 / 发现问题"},{"id":"text_0077","path":"/iterations/0/cause","label":"问题与迭代 / 1 / 原因分析"},{"id":"text_0078","path":"/iterations/0/change","label":"问题与迭代 / 1 / 修改方案"},{"id":"text_0079","path":"/iterations/0/result","label":"问题与迭代 / 1 / 结果"},{"id":"text_0080","path":"/iterations/0/status","label":"问题与迭代 / 1 / 开发状态"},{"id":"text_0081","path":"/iterations/0/source","label":"问题与迭代 / 1 / 依据"},{"id":"text_0082","path":"/iterations/1/problem","label":"问题与迭代 / 2 / 发现问题"},{"id":"text_0083","path":"/iterations/1/cause","label":"问题与迭代 / 2 / 原因分析"},{"id":"text_0084","path":"/iterations/1/change","label":"问题与迭代 / 2 / 修改方案"},{"id":"text_0085","path":"/iterations/1/result","label":"问题与迭代 / 2 / 结果"},{"id":"text_0086","path":"/iterations/1/status","label":"问题与迭代 / 2 / 开发状态"},{"id":"text_0087","path":"/iterations/1/source","label":"问题与迭代 / 2 / 依据"},{"id":"text_0088","path":"/iterations/2/problem","label":"问题与迭代 / 3 / 发现问题"},{"id":"text_0089","path":"/iterations/2/cause","label":"问题与迭代 / 3 / 原因分析"},{"id":"text_0090","path":"/iterations/2/change","label":"问题与迭代 / 3 / 修改方案"},{"id":"text_0091","path":"/iterations/2/result","label":"问题与迭代 / 3 / 结果"},{"id":"text_0092","path":"/iterations/2/status","label":"问题与迭代 / 3 / 开发状态"},{"id":"text_0093","path":"/iterations/2/source","label":"问题与迭代 / 3 / 依据"},{"id":"text_0094","path":"/iterations/3/problem","label":"问题与迭代 / 4 / 发现问题"},{"id":"text_0095","path":"/iterations/3/cause","label":"问题与迭代 / 4 / 原因分析"},{"id":"text_0096","path":"/iterations/3/change","label":"问题与迭代 / 4 / 修改方案"},{"id":"text_0097","path":"/iterations/3/result","label":"问题与迭代 / 4 / 结果"},{"id":"text_0098","path":"/iterations/3/status","label":"问题与迭代 / 4 / 开发状态"},{"id":"text_0099","path":"/iterations/3/source","label":"问题与迭代 / 4 / 依据"},{"id":"text_0100","path":"/validation/0/label","label":"验证结果 / 1 / 名称"},{"id":"text_0101","path":"/validation/0/result","label":"验证结果 / 1 / 结果"},{"id":"text_0102","path":"/validation/0/source","label":"验证结果 / 1 / 依据"},{"id":"text_0103","path":"/validation/1/label","label":"验证结果 / 2 / 名称"},{"id":"text_0104","path":"/validation/1/result","label":"验证结果 / 2 / 结果"},{"id":"text_0105","path":"/validation/1/source","label":"验证结果 / 2 / 依据"},{"id":"text_0106","path":"/validation/2/label","label":"验证结果 / 3 / 名称"},{"id":"text_0107","path":"/validation/2/result","label":"验证结果 / 3 / 结果"},{"id":"text_0108","path":"/validation/2/source","label":"验证结果 / 3 / 依据"},{"id":"text_0109","path":"/validation/3/label","label":"验证结果 / 4 / 名称"},{"id":"text_0110","path":"/validation/3/result","label":"验证结果 / 4 / 结果"},{"id":"text_0111","path":"/validation/3/source","label":"验证结果 / 4 / 依据"},{"id":"text_0112","path":"/limitations/0","label":"尚存问题 / 1"},{"id":"text_0113","path":"/limitations/1","label":"尚存问题 / 2"},{"id":"text_0114","path":"/limitations/2","label":"尚存问题 / 3"},{"id":"text_0115","path":"/limitations/3","label":"尚存问题 / 4"},{"id":"text_0116","path":"/limitations/4","label":"尚存问题 / 5"},{"id":"text_0117","path":"/limitations/5","label":"尚存问题 / 6"},{"id":"text_0118","path":"/sources/0/file","label":"项目依据 / 1 / 文件路径"},{"id":"text_0119","path":"/sources/0/lines","label":"项目依据 / 1 / 行号"},{"id":"text_0120","path":"/sources/0/claim","label":"项目依据 / 1 / 支持的结论"},{"id":"text_0121","path":"/sources/1/file","label":"项目依据 / 2 / 文件路径"},{"id":"text_0122","path":"/sources/1/lines","label":"项目依据 / 2 / 行号"},{"id":"text_0123","path":"/sources/1/claim","label":"项目依据 / 2 / 支持的结论"},{"id":"text_0124","path":"/sources/2/file","label":"项目依据 / 3 / 文件路径"},{"id":"text_0125","path":"/sources/2/lines","label":"项目依据 / 3 / 行号"},{"id":"text_0126","path":"/sources/2/claim","label":"项目依据 / 3 / 支持的结论"},{"id":"text_0127","path":"/sources/3/file","label":"项目依据 / 4 / 文件路径"},{"id":"text_0128","path":"/sources/3/lines","label":"项目依据 / 4 / 行号"},{"id":"text_0129","path":"/sources/3/claim","label":"项目依据 / 4 / 支持的结论"},{"id":"text_0130","path":"/sources/4/file","label":"项目依据 / 5 / 文件路径"},{"id":"text_0131","path":"/sources/4/lines","label":"项目依据 / 5 / 行号"},{"id":"text_0132","path":"/sources/4/claim","label":"项目依据 / 5 / 支持的结论"},{"id":"text_0133","path":"/sources/5/file","label":"项目依据 / 6 / 文件路径"},{"id":"text_0134","path":"/sources/5/lines","label":"项目依据 / 6 / 行号"},{"id":"text_0135","path":"/sources/5/claim","label":"项目依据 / 6 / 支持的结论"},{"id":"text_0136","path":"/sources/6/file","label":"项目依据 / 7 / 文件路径"},{"id":"text_0137","path":"/sources/6/lines","label":"项目依据 / 7 / 行号"},{"id":"text_0138","path":"/sources/6/claim","label":"项目依据 / 7 / 支持的结论"},{"id":"text_0139","path":"/sources/7/file","label":"项目依据 / 8 / 文件路径"},{"id":"text_0140","path":"/sources/7/lines","label":"项目依据 / 8 / 行号"},{"id":"text_0141","path":"/sources/7/claim","label":"项目依据 / 8 / 支持的结论"},{"id":"text_0142","path":"/sources/8/file","label":"项目依据 / 9 / 文件路径"},{"id":"text_0143","path":"/sources/8/lines","label":"项目依据 / 9 / 行号"},{"id":"text_0144","path":"/sources/8/claim","label":"项目依据 / 9 / 支持的结论"},{"id":"text_0145","path":"/sources/9/file","label":"项目依据 / 10 / 文件路径"},{"id":"text_0146","path":"/sources/9/lines","label":"项目依据 / 10 / 行号"},{"id":"text_0147","path":"/sources/9/claim","label":"项目依据 / 10 / 支持的结论"},{"id":"text_0148","path":"/sources/10/file","label":"项目依据 / 11 / 文件路径"},{"id":"text_0149","path":"/sources/10/lines","label":"项目依据 / 11 / 行号"},{"id":"text_0150","path":"/sources/10/claim","label":"项目依据 / 11 / 支持的结论"},{"id":"text_0151","path":"/sources/11/file","label":"项目依据 / 12 / 文件路径"},{"id":"text_0152","path":"/sources/11/lines","label":"项目依据 / 12 / 行号"},{"id":"text_0153","path":"/sources/11/claim","label":"项目依据 / 12 / 支持的结论"},{"id":"text_0154","path":"/sources/12/file","label":"项目依据 / 13 / 文件路径"},{"id":"text_0155","path":"/sources/12/lines","label":"项目依据 / 13 / 行号"},{"id":"text_0156","path":"/sources/12/claim","label":"项目依据 / 13 / 支持的结论"},{"id":"text_0157","path":"/sources/13/file","label":"项目依据 / 14 / 文件路径"},{"id":"text_0158","path":"/sources/13/lines","label":"项目依据 / 14 / 行号"},{"id":"text_0159","path":"/sources/13/claim","label":"项目依据 / 14 / 支持的结论"},{"id":"text_0160","path":"/sources/14/file","label":"项目依据 / 15 / 文件路径"},{"id":"text_0161","path":"/sources/14/lines","label":"项目依据 / 15 / 行号"},{"id":"text_0162","path":"/sources/14/claim","label":"项目依据 / 15 / 支持的结论"},{"id":"text_0163","path":"/sources/15/file","label":"项目依据 / 16 / 文件路径"},{"id":"text_0164","path":"/sources/15/lines","label":"项目依据 / 16 / 行号"},{"id":"text_0165","path":"/sources/15/claim","label":"项目依据 / 16 / 支持的结论"},{"id":"text_0166","path":"/sources/16/file","label":"项目依据 / 17 / 文件路径"},{"id":"text_0167","path":"/sources/16/lines","label":"项目依据 / 17 / 行号"},{"id":"text_0168","path":"/sources/16/claim","label":"项目依据 / 17 / 支持的结论"},{"id":"text_0169","path":"/sources/17/file","label":"项目依据 / 18 / 文件路径"},{"id":"text_0170","path":"/sources/17/lines","label":"项目依据 / 18 / 行号"},{"id":"text_0171","path":"/sources/17/claim","label":"项目依据 / 18 / 支持的结论"},{"id":"text_0172","path":"/timelineNote","label":"时间轴说明"},{"id":"text_0173","path":"/timeline/0/name","label":"攻击时间轴 / 1 / 名称"},{"id":"text_0174","path":"/timeline/0/branch","label":"攻击时间轴 / 1 / 攻击分支"},{"id":"text_0175","path":"/timeline/1/name","label":"攻击时间轴 / 2 / 名称"},{"id":"text_0176","path":"/timeline/1/branch","label":"攻击时间轴 / 2 / 攻击分支"},{"id":"text_0177","path":"/timeline/2/name","label":"攻击时间轴 / 3 / 名称"},{"id":"text_0178","path":"/timeline/2/branch","label":"攻击时间轴 / 3 / 攻击分支"},{"id":"text_0179","path":"/timeline/3/name","label":"攻击时间轴 / 4 / 名称"},{"id":"text_0180","path":"/timeline/3/branch","label":"攻击时间轴 / 4 / 攻击分支"},{"id":"text_0181","path":"/timeline/4/name","label":"攻击时间轴 / 5 / 名称"},{"id":"text_0182","path":"/timeline/4/branch","label":"攻击时间轴 / 5 / 攻击分支"},{"id":"text_0183","path":"/timeline/5/name","label":"攻击时间轴 / 6 / 名称"},{"id":"text_0184","path":"/timeline/5/branch","label":"攻击时间轴 / 6 / 攻击分支"},{"id":"text_0185","path":"/timeline/6/name","label":"攻击时间轴 / 7 / 名称"},{"id":"text_0186","path":"/timeline/6/branch","label":"攻击时间轴 / 7 / 攻击分支"},{"id":"text_0187","path":"/timeline/7/name","label":"攻击时间轴 / 8 / 名称"},{"id":"text_0188","path":"/timeline/7/branch","label":"攻击时间轴 / 8 / 攻击分支"},{"id":"text_0189","path":"/timeline/8/name","label":"攻击时间轴 / 9 / 名称"},{"id":"text_0190","path":"/timeline/8/branch","label":"攻击时间轴 / 9 / 攻击分支"}]'),Xe={format:Ye,version:We,tree:Ge,fields:Je},Ve="jianghuransheng-portfolio-article",Ze=1,Qe=JSON.parse('{"title":{"$text":"text_0001"},"subtitle":{"$text":"text_0002"},"summary":{"$text":"text_0003"},"status":{"$text":"text_0004"},"goals":[{"$text":"text_0005"},{"$text":"text_0006"},{"$text":"text_0007"}],"experience":[{"$text":"text_0008"},{"$text":"text_0009"},{"$text":"text_0010"}],"rules":[{"title":{"$text":"text_0011"},"body":{"$text":"text_0012"}},{"title":{"$text":"text_0013"},"body":{"$text":"text_0014"}},{"title":{"$text":"text_0015"},"body":{"$text":"text_0016"}},{"title":{"$text":"text_0017"},"body":{"$text":"text_0018"}},{"title":{"$text":"text_0019"},"body":{"$text":"text_0020"}},{"title":{"$text":"text_0021"},"body":{"$text":"text_0022"}}],"parameters":{"headers":[{"$text":"text_0023"},{"$text":"text_0024"},{"$text":"text_0025"}],"rows":[[{"$text":"text_0026"},{"$text":"text_0027"},{"$text":"text_0028"}],[{"$text":"text_0029"},{"$text":"text_0030"},{"$text":"text_0031"}],[{"$text":"text_0032"},{"$text":"text_0033"},{"$text":"text_0034"}],[{"$text":"text_0035"},{"$text":"text_0036"},{"$text":"text_0037"}],[{"$text":"text_0038"},{"$text":"text_0039"},{"$text":"text_0040"}],[{"$text":"text_0041"},{"$text":"text_0042"},{"$text":"text_0043"}],[{"$text":"text_0044"},{"$text":"text_0045"},{"$text":"text_0046"}],[{"$text":"text_0047"},{"$text":"text_0048"},{"$text":"text_0049"}]]},"flow":[{"title":{"$text":"text_0050"},"detail":{"$text":"text_0051"}},{"title":{"$text":"text_0052"},"detail":{"$text":"text_0053"}},{"title":{"$text":"text_0054"},"detail":{"$text":"text_0055"}},{"title":{"$text":"text_0056"},"detail":{"$text":"text_0057"}},{"title":{"$text":"text_0058"},"detail":{"$text":"text_0059"}},{"title":{"$text":"text_0060"},"detail":{"$text":"text_0061"}},{"title":{"$text":"text_0062"},"detail":{"$text":"text_0063"}},{"title":{"$text":"text_0064"},"detail":{"$text":"text_0065"}}],"implementation":[{"title":{"$text":"text_0066"},"body":{"$text":"text_0067"}},{"title":{"$text":"text_0068"},"body":{"$text":"text_0069"}},{"title":{"$text":"text_0070"},"body":{"$text":"text_0071"}},{"title":{"$text":"text_0072"},"body":{"$text":"text_0073"}}],"iterations":[],"validation":[{"label":{"$text":"text_0098"},"result":{"$text":"text_0099"},"source":{"$text":"text_0100"}},{"label":{"$text":"text_0101"},"result":{"$text":"text_0102"},"source":{"$text":"text_0103"}},{"label":{"$text":"text_0104"},"result":{"$text":"text_0105"},"source":{"$text":"text_0106"}},{"label":{"$text":"text_0107"},"result":{"$text":"text_0108"},"source":{"$text":"text_0109"}},{"label":{"$text":"text_0110"},"result":{"$text":"text_0111"},"source":{"$text":"text_0112"}}],"limitations":[{"$text":"text_0113"},{"$text":"text_0114"},{"$text":"text_0115"},{"$text":"text_0116"},{"$text":"text_0117"},{"$text":"text_0118"}],"sources":[{"file":{"$text":"text_0119"},"lines":{"$text":"text_0120"},"claim":{"$text":"text_0121"}},{"file":{"$text":"text_0122"},"lines":{"$text":"text_0123"},"claim":{"$text":"text_0124"}},{"file":{"$text":"text_0125"},"lines":{"$text":"text_0126"},"claim":{"$text":"text_0127"}},{"file":{"$text":"text_0128"},"lines":{"$text":"text_0129"},"claim":{"$text":"text_0130"}},{"file":{"$text":"text_0131"},"lines":{"$text":"text_0132"},"claim":{"$text":"text_0133"}},{"file":{"$text":"text_0134"},"lines":{"$text":"text_0135"},"claim":{"$text":"text_0136"}},{"file":{"$text":"text_0137"},"lines":{"$text":"text_0138"},"claim":{"$text":"text_0139"}},{"file":{"$text":"text_0140"},"lines":{"$text":"text_0141"},"claim":{"$text":"text_0142"}},{"file":{"$text":"text_0143"},"lines":{"$text":"text_0144"},"claim":{"$text":"text_0145"}},{"file":{"$text":"text_0146"},"lines":{"$text":"text_0147"},"claim":{"$text":"text_0148"}},{"file":{"$text":"text_0149"},"lines":{"$text":"text_0150"},"claim":{"$text":"text_0151"}},{"file":{"$text":"text_0152"},"lines":{"$text":"text_0153"},"claim":{"$text":"text_0154"}},{"file":{"$text":"text_0155"},"lines":{"$text":"text_0156"},"claim":{"$text":"text_0157"}},{"file":{"$text":"text_0158"},"lines":{"$text":"text_0159"},"claim":{"$text":"text_0160"}},{"file":{"$text":"text_0161"},"lines":{"$text":"text_0162"},"claim":{"$text":"text_0163"}},{"file":{"$text":"text_0164"},"lines":{"$text":"text_0165"},"claim":{"$text":"text_0166"}}],"map":{"scene":{"$text":"text_0167"},"coordinateSystem":{"$text":"text_0168"},"bounds":{"width":1280,"height":720,"minX":75,"maxX":1210,"minY":470,"maxY":657,"x":0,"y":0},"walkPolygon":[[75,470],[1210,470],[1210,657],[75,657]],"points":[{"name":{"$text":"text_0169"},"x":430,"y":577,"type":{"$text":"text_0170"}},{"name":{"$text":"text_0171"},"x":580,"y":592,"type":{"$text":"text_0172"},"radius":90},{"name":{"$text":"text_0173"},"x":950,"y":494,"type":{"$text":"text_0174"},"radius":115},{"name":{"$text":"text_0175"},"x":1050,"y":490,"type":{"$text":"text_0176"},"size":[100,90]},{"name":{"$text":"text_0177"},"x":130,"y":495,"type":{"$text":"text_0178"}},{"name":{"$text":"text_0179"},"x":240,"y":605,"type":{"$text":"text_0180"}},{"name":{"$text":"text_0181"},"x":800,"y":640,"type":{"$text":"text_0182"}}],"obstacles":[],"note":{"$text":"text_0183"}},"additionalMaps":[{"scene":{"$text":"text_0184"},"bounds":{"width":1280,"height":720,"x":0,"y":0},"walkPolygon":[[95.694,465.972],[143.158,410.882],[404.211,410.882],[424.88,382.572],[581.818,382.572],[589.474,411.647],[760.957,420.829],[819.139,420.829],[845.933,459.851],[914.833,466.738],[914.833,422.359],[955.407,422.359],[968.421,436.897],[968.421,473.624],[1191.196,473.624],[1217.225,497.343],[1201.914,582.274],[1079.426,600.638],[266.411,600.638],[222.01,579.979],[143.158,563.911],[91.866,521.063]],"points":[{"name":{"$text":"text_0185"},"x":150,"y":550,"type":{"$text":"text_0186"}},{"name":{"$text":"text_0187"},"x":270,"y":421,"type":{"$text":"text_0188"},"size":[220,22]},{"name":{"$text":"text_0189"},"x":940,"y":439,"type":{"$text":"text_0190"},"size":[48,24]},{"name":{"$text":"text_0191"},"x":940,"y":434,"type":{"$text":"text_0192"}},{"name":{"$text":"text_0193"},"x":1020,"y":407,"type":{"$text":"text_0194"}}],"obstacles":[{"name":{"$text":"text_0195"},"kind":{"$text":"text_0196"},"polygon":[[198.278,429.245],[313.876,429.245],[313.876,450.67],[198.278,450.67]]},{"name":{"$text":"text_0197"},"kind":{"$text":"text_0198"},"polygon":[[492.249,429.245],[608.612,429.245],[608.612,449.904],[492.249,449.904]]},{"name":{"$text":"text_0199"},"kind":{"$text":"text_0200"},"polygon":[[746.411,443.783],[850.526,443.783],[850.526,452.2],[746.411,452.2]]},{"name":{"$text":"text_0201"},"kind":{"$text":"text_0202"},"polygon":[[153.876,439.192],[187.56,439.192],[187.56,450.67],[153.876,450.67]]},{"name":{"$text":"text_0203"},"kind":{"$text":"text_0204"},"polygon":[[327.656,439.957],[359.809,439.957],[359.809,451.435],[327.656,451.435]]},{"name":{"$text":"text_0205"},"kind":{"$text":"text_0206"},"polygon":[[436.364,439.957],[467.751,439.957],[467.751,451.435],[436.364,451.435]]},{"name":{"$text":"text_0207"},"kind":{"$text":"text_0208"},"polygon":[[522.871,439.192],[571.1,439.192],[571.1,449.904],[522.871,449.904]]},{"name":{"$text":"text_0209"},"kind":{"$text":"text_0210"},"polygon":[[623.923,439.957],[653.78,439.957],[653.78,451.435],[623.923,451.435]]},{"name":{"$text":"text_0211"},"kind":{"$text":"text_0212"},"polygon":[[692.823,439.957],[725.742,439.957],[725.742,452.2],[692.823,452.2]]},{"name":{"$text":"text_0213"},"kind":{"$text":"text_0214"},"polygon":[[777.033,446.079],[829.856,446.079],[829.856,450.67],[777.033,450.67]]},{"name":{"$text":"text_0215"},"kind":{"$text":"text_0216"},"polygon":[[764.785,400.17],[811.483,400.17],[811.483,419.299],[764.785,419.299]]},{"name":{"$text":"text_0217"},"kind":{"$text":"text_0218"},"polygon":[[142.392,312.944],[404.976,312.944],[411.866,407.056],[143.158,407.056]]},{"name":{"$text":"text_0219"},"kind":{"$text":"text_0220"},"polygon":[[419.522,303.762],[588.708,303.762],[588.708,376.451],[419.522,376.451]]},{"name":{"$text":"text_0221"},"kind":{"$text":"text_0222"},"polygon":[[592.536,374.155],[741.053,374.155],[754.067,419.299],[592.536,412.412]]},{"name":{"$text":"text_0223"},"kind":{"$text":"text_0224"},"polygon":[[81.914,404.761],[146.986,404.761],[146.986,423.889],[81.914,428.48]]},{"name":{"$text":"text_0225"},"kind":{"$text":"text_0226"},"polygon":[[761.722,398.64],[815.311,398.64],[815.311,424.655],[761.722,424.655]]},{"name":{"$text":"text_0227"},"kind":{"$text":"text_0228"},"polygon":[[817.608,390.988],[894.163,410.882],[907.943,454.495],[885.742,466.738],[826.794,436.897]]},{"name":{"$text":"text_0229"},"kind":{"$text":"text_0230"},"polygon":[[968.421,422.359],[1010.526,417.768],[1115.407,427.715],[1262.392,430.776],[1276.938,472.094],[968.421,472.094]]},{"name":{"$text":"text_0231"},"kind":{"$text":"text_0232"},"polygon":[[0,530.244],[76.555,530.244],[111.005,571.562],[237.321,603.698],[0,688.629]]},{"name":{"$text":"text_0233"},"kind":{"$text":"text_0234"},"polygon":[[1159.809,569.267],[1280,504.995],[1280,720],[1140.67,720]]},{"name":{"$text":"text_0235"},"kind":{"$text":"text_0236"},"polygon":[[955.407,392.519],[998.278,388.693],[1012.057,406.291],[1002.871,420.829],[960,421.594],[947.751,408.587]]},{"name":{"$text":"text_0237"},"kind":{"$text":"text_0238"},"polygon":[[876.555,404.761],[946.986,404.761],[946.986,422.359],[880.383,426.95]]}],"note":{"$text":"text_0239"}},{"scene":{"$text":"text_0240"},"bounds":{"width":2048,"height":768,"x":0,"y":0},"walkPolygon":[[80,550],[190,536],[320,544],[445,537],[590,545],[750,531],[900,536],[1060,533],[1200,541],[1365,535],[1510,543],[1680,535],[1830,541],[1970,530],[1990,570],[1975,610],[1870,624],[1740,624],[1620,635],[1490,624],[1350,635],[1220,625],[1090,633],[950,629],[810,638],[680,624],[540,634],[400,623],[275,633],[150,621],[74,598]],"points":[{"name":{"$text":"text_0241"},"x":1024,"y":586,"type":{"$text":"text_0242"}},{"name":{"$text":"text_0243"},"x":1580,"y":584,"type":{"$text":"text_0244"},"size":[48,180]},{"name":{"$text":"text_0245"},"x":1720,"y":551.111,"type":{"$text":"text_0246"},"size":[58,27.622]},{"name":{"$text":"text_0247"},"x":1684,"y":581.733,"type":{"$text":"text_0248"},"size":[58,27.622]},{"name":{"$text":"text_0249"},"x":1704,"y":612.356,"type":{"$text":"text_0250"},"size":[58,27.622]}],"obstacles":[{"name":{"$text":"text_0251"},"kind":{"$text":"text_0252"},"polygon":[[590,395],[800,390],[1050,384],[1245,387],[1350,445],[1315,504],[1190,514],[1060,509],[895,517],[750,510],[650,522],[590,495]]},{"name":{"$text":"text_0253"},"kind":{"$text":"text_0254"},"polygon":[[935,45],[1380,45],[1395,205],[1360,386],[1290,430],[1090,425],[930,380],[880,255]]},{"name":{"$text":"text_0255"},"kind":{"$text":"text_0256"},"polygon":[[0,0],[700,0],[645,310],[590,390],[600,492],[480,521],[315,521],[170,517],[0,525]]},{"name":{"$text":"text_0257"},"kind":{"$text":"text_0258"},"polygon":[[1360,0],[2048,0],[2048,515],[1910,520],[1810,516],[1665,518],[1505,525],[1375,516],[1325,460],[1385,330]]},{"name":{"$text":"text_0259"},"kind":{"$text":"text_0260"},"polygon":[[0,600],[115,595],[174,625],[170,768],[0,768]]},{"name":{"$text":"text_0261"},"kind":{"$text":"text_0262"},"polygon":[[1850,625],[1910,595],[2048,605],[2048,768],[1875,768]]}],"note":{"$text":"text_0263"}}],"uiIterations":{"title":{"$text":"text_0264"},"cases":[{"id":{"$text":"text_0265"},"title":{"$text":"text_0266"},"intro":{"$text":"text_0267"},"before":{"kind":{"$text":"text_0268"},"path":{"$text":"text_0269"},"width":1774,"height":887},"after":{"kind":{"$text":"text_0270"},"path":{"$text":"text_0271"},"width":1672,"height":941}},{"id":{"$text":"text_0272"},"title":{"$text":"text_0273"},"intro":{"$text":"text_0274"},"before":{"kind":{"$text":"text_0275"},"path":{"$text":"text_0276"},"width":1280,"height":720},"after":{"kind":{"$text":"text_0277"},"path":{"$text":"text_0278"},"width":1920,"height":1080}},{"id":{"$text":"text_0279"},"title":{"$text":"text_0280"},"intro":{"$text":"text_0281"},"before":{"kind":{"$text":"text_0282"},"path":{"$text":"text_0283"},"width":1681,"height":936},"after":{"kind":{"$text":"text_0284"},"path":{"$text":"text_0285"},"width":1447,"height":1087}},{"id":{"$text":"text_0286"},"title":{"$text":"text_0287"},"intro":{"$text":"text_0288"},"before":{"kind":{"$text":"text_0289"},"path":{"$text":"text_0290"},"width":1672,"height":941},"after":{"kind":{"$text":"text_0291"},"path":{"$text":"text_0292"},"width":1672,"height":941}}]}}'),to=JSON.parse('[{"id":"text_0001","path":"/title","label":"标题"},{"id":"text_0002","path":"/subtitle","label":"副标题"},{"id":"text_0003","path":"/summary","label":"简介"},{"id":"text_0004","path":"/status","label":"开发状态"},{"id":"text_0005","path":"/goals/0","label":"设计目标 / 1"},{"id":"text_0006","path":"/goals/1","label":"设计目标 / 2"},{"id":"text_0007","path":"/goals/2","label":"设计目标 / 3"},{"id":"text_0008","path":"/experience/0","label":"玩家体验 / 1"},{"id":"text_0009","path":"/experience/1","label":"玩家体验 / 2"},{"id":"text_0010","path":"/experience/2","label":"玩家体验 / 3"},{"id":"text_0011","path":"/rules/0/title","label":"机制与规则 / 1 / 标题"},{"id":"text_0012","path":"/rules/0/body","label":"机制与规则 / 1 / 正文"},{"id":"text_0013","path":"/rules/1/title","label":"机制与规则 / 2 / 标题"},{"id":"text_0014","path":"/rules/1/body","label":"机制与规则 / 2 / 正文"},{"id":"text_0015","path":"/rules/2/title","label":"机制与规则 / 3 / 标题"},{"id":"text_0016","path":"/rules/2/body","label":"机制与规则 / 3 / 正文"},{"id":"text_0017","path":"/rules/3/title","label":"机制与规则 / 4 / 标题"},{"id":"text_0018","path":"/rules/3/body","label":"机制与规则 / 4 / 正文"},{"id":"text_0019","path":"/rules/4/title","label":"机制与规则 / 5 / 标题"},{"id":"text_0020","path":"/rules/4/body","label":"机制与规则 / 5 / 正文"},{"id":"text_0021","path":"/rules/5/title","label":"机制与规则 / 6 / 标题"},{"id":"text_0022","path":"/rules/5/body","label":"机制与规则 / 6 / 正文"},{"id":"text_0023","path":"/parameters/headers/0","label":"关键参数 / 表头 / 1"},{"id":"text_0024","path":"/parameters/headers/1","label":"关键参数 / 表头 / 2"},{"id":"text_0025","path":"/parameters/headers/2","label":"关键参数 / 表头 / 3"},{"id":"text_0026","path":"/parameters/rows/0/0","label":"关键参数 / 表格行 / 1 / 1"},{"id":"text_0027","path":"/parameters/rows/0/1","label":"关键参数 / 表格行 / 1 / 2"},{"id":"text_0028","path":"/parameters/rows/0/2","label":"关键参数 / 表格行 / 1 / 3"},{"id":"text_0029","path":"/parameters/rows/1/0","label":"关键参数 / 表格行 / 2 / 1"},{"id":"text_0030","path":"/parameters/rows/1/1","label":"关键参数 / 表格行 / 2 / 2"},{"id":"text_0031","path":"/parameters/rows/1/2","label":"关键参数 / 表格行 / 2 / 3"},{"id":"text_0032","path":"/parameters/rows/2/0","label":"关键参数 / 表格行 / 3 / 1"},{"id":"text_0033","path":"/parameters/rows/2/1","label":"关键参数 / 表格行 / 3 / 2"},{"id":"text_0034","path":"/parameters/rows/2/2","label":"关键参数 / 表格行 / 3 / 3"},{"id":"text_0035","path":"/parameters/rows/3/0","label":"关键参数 / 表格行 / 4 / 1"},{"id":"text_0036","path":"/parameters/rows/3/1","label":"关键参数 / 表格行 / 4 / 2"},{"id":"text_0037","path":"/parameters/rows/3/2","label":"关键参数 / 表格行 / 4 / 3"},{"id":"text_0038","path":"/parameters/rows/4/0","label":"关键参数 / 表格行 / 5 / 1"},{"id":"text_0039","path":"/parameters/rows/4/1","label":"关键参数 / 表格行 / 5 / 2"},{"id":"text_0040","path":"/parameters/rows/4/2","label":"关键参数 / 表格行 / 5 / 3"},{"id":"text_0041","path":"/parameters/rows/5/0","label":"关键参数 / 表格行 / 6 / 1"},{"id":"text_0042","path":"/parameters/rows/5/1","label":"关键参数 / 表格行 / 6 / 2"},{"id":"text_0043","path":"/parameters/rows/5/2","label":"关键参数 / 表格行 / 6 / 3"},{"id":"text_0044","path":"/parameters/rows/6/0","label":"关键参数 / 表格行 / 7 / 1"},{"id":"text_0045","path":"/parameters/rows/6/1","label":"关键参数 / 表格行 / 7 / 2"},{"id":"text_0046","path":"/parameters/rows/6/2","label":"关键参数 / 表格行 / 7 / 3"},{"id":"text_0047","path":"/parameters/rows/7/0","label":"关键参数 / 表格行 / 8 / 1"},{"id":"text_0048","path":"/parameters/rows/7/1","label":"关键参数 / 表格行 / 8 / 2"},{"id":"text_0049","path":"/parameters/rows/7/2","label":"关键参数 / 表格行 / 8 / 3"},{"id":"text_0050","path":"/flow/0/title","label":"流程 / 1 / 标题"},{"id":"text_0051","path":"/flow/0/detail","label":"流程 / 1 / 说明"},{"id":"text_0052","path":"/flow/1/title","label":"流程 / 2 / 标题"},{"id":"text_0053","path":"/flow/1/detail","label":"流程 / 2 / 说明"},{"id":"text_0054","path":"/flow/2/title","label":"流程 / 3 / 标题"},{"id":"text_0055","path":"/flow/2/detail","label":"流程 / 3 / 说明"},{"id":"text_0056","path":"/flow/3/title","label":"流程 / 4 / 标题"},{"id":"text_0057","path":"/flow/3/detail","label":"流程 / 4 / 说明"},{"id":"text_0058","path":"/flow/4/title","label":"流程 / 5 / 标题"},{"id":"text_0059","path":"/flow/4/detail","label":"流程 / 5 / 说明"},{"id":"text_0060","path":"/flow/5/title","label":"流程 / 6 / 标题"},{"id":"text_0061","path":"/flow/5/detail","label":"流程 / 6 / 说明"},{"id":"text_0062","path":"/flow/6/title","label":"流程 / 7 / 标题"},{"id":"text_0063","path":"/flow/6/detail","label":"流程 / 7 / 说明"},{"id":"text_0064","path":"/flow/7/title","label":"流程 / 8 / 标题"},{"id":"text_0065","path":"/flow/7/detail","label":"流程 / 8 / 说明"},{"id":"text_0066","path":"/implementation/0/title","label":"实现方式 / 1 / 标题"},{"id":"text_0067","path":"/implementation/0/body","label":"实现方式 / 1 / 正文"},{"id":"text_0068","path":"/implementation/1/title","label":"实现方式 / 2 / 标题"},{"id":"text_0069","path":"/implementation/1/body","label":"实现方式 / 2 / 正文"},{"id":"text_0070","path":"/implementation/2/title","label":"实现方式 / 3 / 标题"},{"id":"text_0071","path":"/implementation/2/body","label":"实现方式 / 3 / 正文"},{"id":"text_0072","path":"/implementation/3/title","label":"实现方式 / 4 / 标题"},{"id":"text_0073","path":"/implementation/3/body","label":"实现方式 / 4 / 正文"},{"id":"text_0098","path":"/validation/0/label","label":"验证结果 / 1 / 名称"},{"id":"text_0099","path":"/validation/0/result","label":"验证结果 / 1 / 结果"},{"id":"text_0100","path":"/validation/0/source","label":"验证结果 / 1 / 依据"},{"id":"text_0101","path":"/validation/1/label","label":"验证结果 / 2 / 名称"},{"id":"text_0102","path":"/validation/1/result","label":"验证结果 / 2 / 结果"},{"id":"text_0103","path":"/validation/1/source","label":"验证结果 / 2 / 依据"},{"id":"text_0104","path":"/validation/2/label","label":"验证结果 / 3 / 名称"},{"id":"text_0105","path":"/validation/2/result","label":"验证结果 / 3 / 结果"},{"id":"text_0106","path":"/validation/2/source","label":"验证结果 / 3 / 依据"},{"id":"text_0107","path":"/validation/3/label","label":"验证结果 / 4 / 名称"},{"id":"text_0108","path":"/validation/3/result","label":"验证结果 / 4 / 结果"},{"id":"text_0109","path":"/validation/3/source","label":"验证结果 / 4 / 依据"},{"id":"text_0110","path":"/validation/4/label","label":"验证结果 / 5 / 名称"},{"id":"text_0111","path":"/validation/4/result","label":"验证结果 / 5 / 结果"},{"id":"text_0112","path":"/validation/4/source","label":"验证结果 / 5 / 依据"},{"id":"text_0113","path":"/limitations/0","label":"尚存问题 / 1"},{"id":"text_0114","path":"/limitations/1","label":"尚存问题 / 2"},{"id":"text_0115","path":"/limitations/2","label":"尚存问题 / 3"},{"id":"text_0116","path":"/limitations/3","label":"尚存问题 / 4"},{"id":"text_0117","path":"/limitations/4","label":"尚存问题 / 5"},{"id":"text_0118","path":"/limitations/5","label":"尚存问题 / 6"},{"id":"text_0119","path":"/sources/0/file","label":"项目依据 / 1 / 文件路径"},{"id":"text_0120","path":"/sources/0/lines","label":"项目依据 / 1 / 行号"},{"id":"text_0121","path":"/sources/0/claim","label":"项目依据 / 1 / 支持的结论"},{"id":"text_0122","path":"/sources/1/file","label":"项目依据 / 2 / 文件路径"},{"id":"text_0123","path":"/sources/1/lines","label":"项目依据 / 2 / 行号"},{"id":"text_0124","path":"/sources/1/claim","label":"项目依据 / 2 / 支持的结论"},{"id":"text_0125","path":"/sources/2/file","label":"项目依据 / 3 / 文件路径"},{"id":"text_0126","path":"/sources/2/lines","label":"项目依据 / 3 / 行号"},{"id":"text_0127","path":"/sources/2/claim","label":"项目依据 / 3 / 支持的结论"},{"id":"text_0128","path":"/sources/3/file","label":"项目依据 / 4 / 文件路径"},{"id":"text_0129","path":"/sources/3/lines","label":"项目依据 / 4 / 行号"},{"id":"text_0130","path":"/sources/3/claim","label":"项目依据 / 4 / 支持的结论"},{"id":"text_0131","path":"/sources/4/file","label":"项目依据 / 5 / 文件路径"},{"id":"text_0132","path":"/sources/4/lines","label":"项目依据 / 5 / 行号"},{"id":"text_0133","path":"/sources/4/claim","label":"项目依据 / 5 / 支持的结论"},{"id":"text_0134","path":"/sources/5/file","label":"项目依据 / 6 / 文件路径"},{"id":"text_0135","path":"/sources/5/lines","label":"项目依据 / 6 / 行号"},{"id":"text_0136","path":"/sources/5/claim","label":"项目依据 / 6 / 支持的结论"},{"id":"text_0137","path":"/sources/6/file","label":"项目依据 / 7 / 文件路径"},{"id":"text_0138","path":"/sources/6/lines","label":"项目依据 / 7 / 行号"},{"id":"text_0139","path":"/sources/6/claim","label":"项目依据 / 7 / 支持的结论"},{"id":"text_0140","path":"/sources/7/file","label":"项目依据 / 8 / 文件路径"},{"id":"text_0141","path":"/sources/7/lines","label":"项目依据 / 8 / 行号"},{"id":"text_0142","path":"/sources/7/claim","label":"项目依据 / 8 / 支持的结论"},{"id":"text_0143","path":"/sources/8/file","label":"项目依据 / 9 / 文件路径"},{"id":"text_0144","path":"/sources/8/lines","label":"项目依据 / 9 / 行号"},{"id":"text_0145","path":"/sources/8/claim","label":"项目依据 / 9 / 支持的结论"},{"id":"text_0146","path":"/sources/9/file","label":"项目依据 / 10 / 文件路径"},{"id":"text_0147","path":"/sources/9/lines","label":"项目依据 / 10 / 行号"},{"id":"text_0148","path":"/sources/9/claim","label":"项目依据 / 10 / 支持的结论"},{"id":"text_0149","path":"/sources/10/file","label":"项目依据 / 11 / 文件路径"},{"id":"text_0150","path":"/sources/10/lines","label":"项目依据 / 11 / 行号"},{"id":"text_0151","path":"/sources/10/claim","label":"项目依据 / 11 / 支持的结论"},{"id":"text_0152","path":"/sources/11/file","label":"项目依据 / 12 / 文件路径"},{"id":"text_0153","path":"/sources/11/lines","label":"项目依据 / 12 / 行号"},{"id":"text_0154","path":"/sources/11/claim","label":"项目依据 / 12 / 支持的结论"},{"id":"text_0155","path":"/sources/12/file","label":"项目依据 / 13 / 文件路径"},{"id":"text_0156","path":"/sources/12/lines","label":"项目依据 / 13 / 行号"},{"id":"text_0157","path":"/sources/12/claim","label":"项目依据 / 13 / 支持的结论"},{"id":"text_0158","path":"/sources/13/file","label":"项目依据 / 14 / 文件路径"},{"id":"text_0159","path":"/sources/13/lines","label":"项目依据 / 14 / 行号"},{"id":"text_0160","path":"/sources/13/claim","label":"项目依据 / 14 / 支持的结论"},{"id":"text_0161","path":"/sources/14/file","label":"项目依据 / 15 / 文件路径"},{"id":"text_0162","path":"/sources/14/lines","label":"项目依据 / 15 / 行号"},{"id":"text_0163","path":"/sources/14/claim","label":"项目依据 / 15 / 支持的结论"},{"id":"text_0164","path":"/sources/15/file","label":"项目依据 / 16 / 文件路径"},{"id":"text_0165","path":"/sources/15/lines","label":"项目依据 / 16 / 行号"},{"id":"text_0166","path":"/sources/15/claim","label":"项目依据 / 16 / 支持的结论"},{"id":"text_0167","path":"/map/scene","label":"主关卡示意 / 场景"},{"id":"text_0168","path":"/map/coordinateSystem","label":"主关卡示意 / 坐标说明"},{"id":"text_0169","path":"/map/points/0/name","label":"主关卡示意 / 交互位置 / 1 / 名称"},{"id":"text_0170","path":"/map/points/0/type","label":"主关卡示意 / 交互位置 / 1 / 类型"},{"id":"text_0171","path":"/map/points/1/name","label":"主关卡示意 / 交互位置 / 2 / 名称"},{"id":"text_0172","path":"/map/points/1/type","label":"主关卡示意 / 交互位置 / 2 / 类型"},{"id":"text_0173","path":"/map/points/2/name","label":"主关卡示意 / 交互位置 / 3 / 名称"},{"id":"text_0174","path":"/map/points/2/type","label":"主关卡示意 / 交互位置 / 3 / 类型"},{"id":"text_0175","path":"/map/points/3/name","label":"主关卡示意 / 交互位置 / 4 / 名称"},{"id":"text_0176","path":"/map/points/3/type","label":"主关卡示意 / 交互位置 / 4 / 类型"},{"id":"text_0177","path":"/map/points/4/name","label":"主关卡示意 / 交互位置 / 5 / 名称"},{"id":"text_0178","path":"/map/points/4/type","label":"主关卡示意 / 交互位置 / 5 / 类型"},{"id":"text_0179","path":"/map/points/5/name","label":"主关卡示意 / 交互位置 / 6 / 名称"},{"id":"text_0180","path":"/map/points/5/type","label":"主关卡示意 / 交互位置 / 6 / 类型"},{"id":"text_0181","path":"/map/points/6/name","label":"主关卡示意 / 交互位置 / 7 / 名称"},{"id":"text_0182","path":"/map/points/6/type","label":"主关卡示意 / 交互位置 / 7 / 类型"},{"id":"text_0183","path":"/map/note","label":"主关卡示意 / 备注"},{"id":"text_0184","path":"/additionalMaps/0/scene","label":"其他关卡示意 / 1 / 场景"},{"id":"text_0185","path":"/additionalMaps/0/points/0/name","label":"其他关卡示意 / 1 / 交互位置 / 1 / 名称"},{"id":"text_0186","path":"/additionalMaps/0/points/0/type","label":"其他关卡示意 / 1 / 交互位置 / 1 / 类型"},{"id":"text_0187","path":"/additionalMaps/0/points/1/name","label":"其他关卡示意 / 1 / 交互位置 / 2 / 名称"},{"id":"text_0188","path":"/additionalMaps/0/points/1/type","label":"其他关卡示意 / 1 / 交互位置 / 2 / 类型"},{"id":"text_0189","path":"/additionalMaps/0/points/2/name","label":"其他关卡示意 / 1 / 交互位置 / 3 / 名称"},{"id":"text_0190","path":"/additionalMaps/0/points/2/type","label":"其他关卡示意 / 1 / 交互位置 / 3 / 类型"},{"id":"text_0191","path":"/additionalMaps/0/points/3/name","label":"其他关卡示意 / 1 / 交互位置 / 4 / 名称"},{"id":"text_0192","path":"/additionalMaps/0/points/3/type","label":"其他关卡示意 / 1 / 交互位置 / 4 / 类型"},{"id":"text_0193","path":"/additionalMaps/0/points/4/name","label":"其他关卡示意 / 1 / 交互位置 / 5 / 名称"},{"id":"text_0194","path":"/additionalMaps/0/points/4/type","label":"其他关卡示意 / 1 / 交互位置 / 5 / 类型"},{"id":"text_0195","path":"/additionalMaps/0/obstacles/0/name","label":"其他关卡示意 / 1 / obstacles / 1 / 名称"},{"id":"text_0196","path":"/additionalMaps/0/obstacles/0/kind","label":"其他关卡示意 / 1 / obstacles / 1 / kind"},{"id":"text_0197","path":"/additionalMaps/0/obstacles/1/name","label":"其他关卡示意 / 1 / obstacles / 2 / 名称"},{"id":"text_0198","path":"/additionalMaps/0/obstacles/1/kind","label":"其他关卡示意 / 1 / obstacles / 2 / kind"},{"id":"text_0199","path":"/additionalMaps/0/obstacles/2/name","label":"其他关卡示意 / 1 / obstacles / 3 / 名称"},{"id":"text_0200","path":"/additionalMaps/0/obstacles/2/kind","label":"其他关卡示意 / 1 / obstacles / 3 / kind"},{"id":"text_0201","path":"/additionalMaps/0/obstacles/3/name","label":"其他关卡示意 / 1 / obstacles / 4 / 名称"},{"id":"text_0202","path":"/additionalMaps/0/obstacles/3/kind","label":"其他关卡示意 / 1 / obstacles / 4 / kind"},{"id":"text_0203","path":"/additionalMaps/0/obstacles/4/name","label":"其他关卡示意 / 1 / obstacles / 5 / 名称"},{"id":"text_0204","path":"/additionalMaps/0/obstacles/4/kind","label":"其他关卡示意 / 1 / obstacles / 5 / kind"},{"id":"text_0205","path":"/additionalMaps/0/obstacles/5/name","label":"其他关卡示意 / 1 / obstacles / 6 / 名称"},{"id":"text_0206","path":"/additionalMaps/0/obstacles/5/kind","label":"其他关卡示意 / 1 / obstacles / 6 / kind"},{"id":"text_0207","path":"/additionalMaps/0/obstacles/6/name","label":"其他关卡示意 / 1 / obstacles / 7 / 名称"},{"id":"text_0208","path":"/additionalMaps/0/obstacles/6/kind","label":"其他关卡示意 / 1 / obstacles / 7 / kind"},{"id":"text_0209","path":"/additionalMaps/0/obstacles/7/name","label":"其他关卡示意 / 1 / obstacles / 8 / 名称"},{"id":"text_0210","path":"/additionalMaps/0/obstacles/7/kind","label":"其他关卡示意 / 1 / obstacles / 8 / kind"},{"id":"text_0211","path":"/additionalMaps/0/obstacles/8/name","label":"其他关卡示意 / 1 / obstacles / 9 / 名称"},{"id":"text_0212","path":"/additionalMaps/0/obstacles/8/kind","label":"其他关卡示意 / 1 / obstacles / 9 / kind"},{"id":"text_0213","path":"/additionalMaps/0/obstacles/9/name","label":"其他关卡示意 / 1 / obstacles / 10 / 名称"},{"id":"text_0214","path":"/additionalMaps/0/obstacles/9/kind","label":"其他关卡示意 / 1 / obstacles / 10 / kind"},{"id":"text_0215","path":"/additionalMaps/0/obstacles/10/name","label":"其他关卡示意 / 1 / obstacles / 11 / 名称"},{"id":"text_0216","path":"/additionalMaps/0/obstacles/10/kind","label":"其他关卡示意 / 1 / obstacles / 11 / kind"},{"id":"text_0217","path":"/additionalMaps/0/obstacles/11/name","label":"其他关卡示意 / 1 / obstacles / 12 / 名称"},{"id":"text_0218","path":"/additionalMaps/0/obstacles/11/kind","label":"其他关卡示意 / 1 / obstacles / 12 / kind"},{"id":"text_0219","path":"/additionalMaps/0/obstacles/12/name","label":"其他关卡示意 / 1 / obstacles / 13 / 名称"},{"id":"text_0220","path":"/additionalMaps/0/obstacles/12/kind","label":"其他关卡示意 / 1 / obstacles / 13 / kind"},{"id":"text_0221","path":"/additionalMaps/0/obstacles/13/name","label":"其他关卡示意 / 1 / obstacles / 14 / 名称"},{"id":"text_0222","path":"/additionalMaps/0/obstacles/13/kind","label":"其他关卡示意 / 1 / obstacles / 14 / kind"},{"id":"text_0223","path":"/additionalMaps/0/obstacles/14/name","label":"其他关卡示意 / 1 / obstacles / 15 / 名称"},{"id":"text_0224","path":"/additionalMaps/0/obstacles/14/kind","label":"其他关卡示意 / 1 / obstacles / 15 / kind"},{"id":"text_0225","path":"/additionalMaps/0/obstacles/15/name","label":"其他关卡示意 / 1 / obstacles / 16 / 名称"},{"id":"text_0226","path":"/additionalMaps/0/obstacles/15/kind","label":"其他关卡示意 / 1 / obstacles / 16 / kind"},{"id":"text_0227","path":"/additionalMaps/0/obstacles/16/name","label":"其他关卡示意 / 1 / obstacles / 17 / 名称"},{"id":"text_0228","path":"/additionalMaps/0/obstacles/16/kind","label":"其他关卡示意 / 1 / obstacles / 17 / kind"},{"id":"text_0229","path":"/additionalMaps/0/obstacles/17/name","label":"其他关卡示意 / 1 / obstacles / 18 / 名称"},{"id":"text_0230","path":"/additionalMaps/0/obstacles/17/kind","label":"其他关卡示意 / 1 / obstacles / 18 / kind"},{"id":"text_0231","path":"/additionalMaps/0/obstacles/18/name","label":"其他关卡示意 / 1 / obstacles / 19 / 名称"},{"id":"text_0232","path":"/additionalMaps/0/obstacles/18/kind","label":"其他关卡示意 / 1 / obstacles / 19 / kind"},{"id":"text_0233","path":"/additionalMaps/0/obstacles/19/name","label":"其他关卡示意 / 1 / obstacles / 20 / 名称"},{"id":"text_0234","path":"/additionalMaps/0/obstacles/19/kind","label":"其他关卡示意 / 1 / obstacles / 20 / kind"},{"id":"text_0235","path":"/additionalMaps/0/obstacles/20/name","label":"其他关卡示意 / 1 / obstacles / 21 / 名称"},{"id":"text_0236","path":"/additionalMaps/0/obstacles/20/kind","label":"其他关卡示意 / 1 / obstacles / 21 / kind"},{"id":"text_0237","path":"/additionalMaps/0/obstacles/21/name","label":"其他关卡示意 / 1 / obstacles / 22 / 名称"},{"id":"text_0238","path":"/additionalMaps/0/obstacles/21/kind","label":"其他关卡示意 / 1 / obstacles / 22 / kind"},{"id":"text_0239","path":"/additionalMaps/0/note","label":"其他关卡示意 / 1 / 备注"},{"id":"text_0240","path":"/additionalMaps/1/scene","label":"其他关卡示意 / 2 / 场景"},{"id":"text_0241","path":"/additionalMaps/1/points/0/name","label":"其他关卡示意 / 2 / 交互位置 / 1 / 名称"},{"id":"text_0242","path":"/additionalMaps/1/points/0/type","label":"其他关卡示意 / 2 / 交互位置 / 1 / 类型"},{"id":"text_0243","path":"/additionalMaps/1/points/1/name","label":"其他关卡示意 / 2 / 交互位置 / 2 / 名称"},{"id":"text_0244","path":"/additionalMaps/1/points/1/type","label":"其他关卡示意 / 2 / 交互位置 / 2 / 类型"},{"id":"text_0245","path":"/additionalMaps/1/points/2/name","label":"其他关卡示意 / 2 / 交互位置 / 3 / 名称"},{"id":"text_0246","path":"/additionalMaps/1/points/2/type","label":"其他关卡示意 / 2 / 交互位置 / 3 / 类型"},{"id":"text_0247","path":"/additionalMaps/1/points/3/name","label":"其他关卡示意 / 2 / 交互位置 / 4 / 名称"},{"id":"text_0248","path":"/additionalMaps/1/points/3/type","label":"其他关卡示意 / 2 / 交互位置 / 4 / 类型"},{"id":"text_0249","path":"/additionalMaps/1/points/4/name","label":"其他关卡示意 / 2 / 交互位置 / 5 / 名称"},{"id":"text_0250","path":"/additionalMaps/1/points/4/type","label":"其他关卡示意 / 2 / 交互位置 / 5 / 类型"},{"id":"text_0251","path":"/additionalMaps/1/obstacles/0/name","label":"其他关卡示意 / 2 / obstacles / 1 / 名称"},{"id":"text_0252","path":"/additionalMaps/1/obstacles/0/kind","label":"其他关卡示意 / 2 / obstacles / 1 / kind"},{"id":"text_0253","path":"/additionalMaps/1/obstacles/1/name","label":"其他关卡示意 / 2 / obstacles / 2 / 名称"},{"id":"text_0254","path":"/additionalMaps/1/obstacles/1/kind","label":"其他关卡示意 / 2 / obstacles / 2 / kind"},{"id":"text_0255","path":"/additionalMaps/1/obstacles/2/name","label":"其他关卡示意 / 2 / obstacles / 3 / 名称"},{"id":"text_0256","path":"/additionalMaps/1/obstacles/2/kind","label":"其他关卡示意 / 2 / obstacles / 3 / kind"},{"id":"text_0257","path":"/additionalMaps/1/obstacles/3/name","label":"其他关卡示意 / 2 / obstacles / 4 / 名称"},{"id":"text_0258","path":"/additionalMaps/1/obstacles/3/kind","label":"其他关卡示意 / 2 / obstacles / 4 / kind"},{"id":"text_0259","path":"/additionalMaps/1/obstacles/4/name","label":"其他关卡示意 / 2 / obstacles / 5 / 名称"},{"id":"text_0260","path":"/additionalMaps/1/obstacles/4/kind","label":"其他关卡示意 / 2 / obstacles / 5 / kind"},{"id":"text_0261","path":"/additionalMaps/1/obstacles/5/name","label":"其他关卡示意 / 2 / obstacles / 6 / 名称"},{"id":"text_0262","path":"/additionalMaps/1/obstacles/5/kind","label":"其他关卡示意 / 2 / obstacles / 6 / kind"},{"id":"text_0263","path":"/additionalMaps/1/note","label":"其他关卡示意 / 2 / 备注"},{"id":"text_0264","path":"/uiIterations/title","label":"uiIterations / 标题"},{"id":"text_0265","path":"/uiIterations/cases/0/id","label":"uiIterations / cases / 1 / id"},{"id":"text_0266","path":"/uiIterations/cases/0/title","label":"uiIterations / cases / 1 / 标题"},{"id":"text_0267","path":"/uiIterations/cases/0/intro","label":"uiIterations / cases / 1 / intro"},{"id":"text_0268","path":"/uiIterations/cases/0/before/kind","label":"uiIterations / cases / 1 / before / kind"},{"id":"text_0269","path":"/uiIterations/cases/0/before/path","label":"uiIterations / cases / 1 / before / path"},{"id":"text_0270","path":"/uiIterations/cases/0/after/kind","label":"uiIterations / cases / 1 / after / kind"},{"id":"text_0271","path":"/uiIterations/cases/0/after/path","label":"uiIterations / cases / 1 / after / path"},{"id":"text_0272","path":"/uiIterations/cases/1/id","label":"uiIterations / cases / 2 / id"},{"id":"text_0273","path":"/uiIterations/cases/1/title","label":"uiIterations / cases / 2 / 标题"},{"id":"text_0274","path":"/uiIterations/cases/1/intro","label":"uiIterations / cases / 2 / intro"},{"id":"text_0275","path":"/uiIterations/cases/1/before/kind","label":"uiIterations / cases / 2 / before / kind"},{"id":"text_0276","path":"/uiIterations/cases/1/before/path","label":"uiIterations / cases / 2 / before / path"},{"id":"text_0277","path":"/uiIterations/cases/1/after/kind","label":"uiIterations / cases / 2 / after / kind"},{"id":"text_0278","path":"/uiIterations/cases/1/after/path","label":"uiIterations / cases / 2 / after / path"},{"id":"text_0279","path":"/uiIterations/cases/2/id","label":"uiIterations / cases / 3 / id"},{"id":"text_0280","path":"/uiIterations/cases/2/title","label":"uiIterations / cases / 3 / 标题"},{"id":"text_0281","path":"/uiIterations/cases/2/intro","label":"uiIterations / cases / 3 / intro"},{"id":"text_0282","path":"/uiIterations/cases/2/before/kind","label":"uiIterations / cases / 3 / before / kind"},{"id":"text_0283","path":"/uiIterations/cases/2/before/path","label":"uiIterations / cases / 3 / before / path"},{"id":"text_0284","path":"/uiIterations/cases/2/after/kind","label":"uiIterations / cases / 3 / after / kind"},{"id":"text_0285","path":"/uiIterations/cases/2/after/path","label":"uiIterations / cases / 3 / after / path"},{"id":"text_0286","path":"/uiIterations/cases/3/id","label":"uiIterations / cases / 4 / id"},{"id":"text_0287","path":"/uiIterations/cases/3/title","label":"uiIterations / cases / 4 / 标题"},{"id":"text_0288","path":"/uiIterations/cases/3/intro","label":"uiIterations / cases / 4 / intro"},{"id":"text_0289","path":"/uiIterations/cases/3/before/kind","label":"uiIterations / cases / 4 / before / kind"},{"id":"text_0290","path":"/uiIterations/cases/3/before/path","label":"uiIterations / cases / 4 / before / path"},{"id":"text_0291","path":"/uiIterations/cases/3/after/kind","label":"uiIterations / cases / 4 / after / kind"},{"id":"text_0292","path":"/uiIterations/cases/3/after/path","label":"uiIterations / cases / 4 / after / path"}]'),eo={format:Ve,version:Ze,tree:Qe,fields:to},oo="jianghuransheng-portfolio-article",no=1,io={title:{$text:"text_0001"},subtitle:{$text:"text_0002"},summary:{$text:"text_0003"},status:{$text:"text_0004"},goals:[{$text:"text_0005"},{$text:"text_0006"},{$text:"text_0007"}],experience:[{$text:"text_0008"},{$text:"text_0009"},{$text:"text_0010"}],rules:[{title:{$text:"text_0011"},body:{$text:"text_0012"}},{title:{$text:"text_0013"},body:{$text:"text_0014"}},{title:{$text:"text_0015"},body:{$text:"text_0016"}},{title:{$text:"text_0017"},body:{$text:"text_0018"}},{title:{$text:"text_0019"},body:{$text:"text_0020"}},{title:{$text:"text_0021"},body:{$text:"text_0022"}},{title:{$text:"text_0023"},body:{$text:"text_0024"}}],parameters:{headers:[{$text:"text_0025"},{$text:"text_0026"},{$text:"text_0027"}],rows:[[{$text:"text_0028"},{$text:"text_0029"},{$text:"text_0030"}],[{$text:"text_0031"},{$text:"text_0032"},{$text:"text_0033"}],[{$text:"text_0034"},{$text:"text_0035"},{$text:"text_0036"}],[{$text:"text_0037"},{$text:"text_0038"},{$text:"text_0039"}],[{$text:"text_0040"},{$text:"text_0041"},{$text:"text_0042"}],[{$text:"text_0043"},{$text:"text_0044"},{$text:"text_0045"}],[{$text:"text_0046"},{$text:"text_0047"},{$text:"text_0048"}]]},flow:[{title:{$text:"text_0049"},detail:{$text:"text_0050"}},{title:{$text:"text_0051"},detail:{$text:"text_0052"}},{title:{$text:"text_0053"},detail:{$text:"text_0054"}},{title:{$text:"text_0055"},detail:{$text:"text_0056"}},{title:{$text:"text_0057"},detail:{$text:"text_0058"}}],implementation:[{title:{$text:"text_0059"},body:{$text:"text_0060"}},{title:{$text:"text_0061"},body:{$text:"text_0062"}},{title:{$text:"text_0063"},body:{$text:"text_0064"}},{title:{$text:"text_0065"},body:{$text:"text_0066"}},{title:{$text:"text_0067"},body:{$text:"text_0068"}}],iterations:[{problem:{$text:"text_0069"},cause:{$text:"text_0070"},change:{$text:"text_0071"},result:{$text:"text_0072"},status:{$text:"text_0073"},source:{$text:"text_0074"}},{problem:{$text:"text_0075"},cause:{$text:"text_0076"},change:{$text:"text_0077"},result:{$text:"text_0078"},status:{$text:"text_0079"},source:{$text:"text_0080"}},{problem:{$text:"text_0081"},cause:{$text:"text_0082"},change:{$text:"text_0083"},result:{$text:"text_0084"},status:{$text:"text_0085"},source:{$text:"text_0086"}},{problem:{$text:"text_0087"},cause:{$text:"text_0088"},change:{$text:"text_0089"},result:{$text:"text_0090"},status:{$text:"text_0091"},source:{$text:"text_0092"}}],validation:[{label:{$text:"text_0093"},result:{$text:"text_0094"},source:{$text:"text_0095"}},{label:{$text:"text_0096"},result:{$text:"text_0097"},source:{$text:"text_0098"}},{label:{$text:"text_0099"},result:{$text:"text_0100"},source:{$text:"text_0101"}},{label:{$text:"text_0102"},result:{$text:"text_0103"},source:{$text:"text_0104"}},{label:{$text:"text_0105"},result:{$text:"text_0106"},source:{$text:"text_0107"}},{label:{$text:"text_0108"},result:{$text:"text_0109"},source:{$text:"text_0110"}}],limitations:[{$text:"text_0111"},{$text:"text_0112"},{$text:"text_0113"},{$text:"text_0114"},{$text:"text_0115"},{$text:"text_0116"},{$text:"text_0117"}],sources:[{file:{$text:"text_0118"},lines:{$text:"text_0119"},claim:{$text:"text_0120"}},{file:{$text:"text_0121"},lines:{$text:"text_0122"},claim:{$text:"text_0123"}},{file:{$text:"text_0124"},lines:{$text:"text_0125"},claim:{$text:"text_0126"}},{file:{$text:"text_0127"},lines:{$text:"text_0128"},claim:{$text:"text_0129"}},{file:{$text:"text_0130"},lines:{$text:"text_0131"},claim:{$text:"text_0132"}},{file:{$text:"text_0133"},lines:{$text:"text_0134"},claim:{$text:"text_0135"}},{file:{$text:"text_0136"},lines:{$text:"text_0137"},claim:{$text:"text_0138"}},{file:{$text:"text_0139"},lines:{$text:"text_0140"},claim:{$text:"text_0141"}},{file:{$text:"text_0142"},lines:{$text:"text_0143"},claim:{$text:"text_0144"}}]},ao=JSON.parse('[{"id":"text_0001","path":"/title","label":"标题"},{"id":"text_0002","path":"/subtitle","label":"副标题"},{"id":"text_0003","path":"/summary","label":"简介"},{"id":"text_0004","path":"/status","label":"开发状态"},{"id":"text_0005","path":"/goals/0","label":"设计目标 / 1"},{"id":"text_0006","path":"/goals/1","label":"设计目标 / 2"},{"id":"text_0007","path":"/goals/2","label":"设计目标 / 3"},{"id":"text_0008","path":"/experience/0","label":"玩家体验 / 1"},{"id":"text_0009","path":"/experience/1","label":"玩家体验 / 2"},{"id":"text_0010","path":"/experience/2","label":"玩家体验 / 3"},{"id":"text_0011","path":"/rules/0/title","label":"机制与规则 / 1 / 标题"},{"id":"text_0012","path":"/rules/0/body","label":"机制与规则 / 1 / 正文"},{"id":"text_0013","path":"/rules/1/title","label":"机制与规则 / 2 / 标题"},{"id":"text_0014","path":"/rules/1/body","label":"机制与规则 / 2 / 正文"},{"id":"text_0015","path":"/rules/2/title","label":"机制与规则 / 3 / 标题"},{"id":"text_0016","path":"/rules/2/body","label":"机制与规则 / 3 / 正文"},{"id":"text_0017","path":"/rules/3/title","label":"机制与规则 / 4 / 标题"},{"id":"text_0018","path":"/rules/3/body","label":"机制与规则 / 4 / 正文"},{"id":"text_0019","path":"/rules/4/title","label":"机制与规则 / 5 / 标题"},{"id":"text_0020","path":"/rules/4/body","label":"机制与规则 / 5 / 正文"},{"id":"text_0021","path":"/rules/5/title","label":"机制与规则 / 6 / 标题"},{"id":"text_0022","path":"/rules/5/body","label":"机制与规则 / 6 / 正文"},{"id":"text_0023","path":"/rules/6/title","label":"机制与规则 / 7 / 标题"},{"id":"text_0024","path":"/rules/6/body","label":"机制与规则 / 7 / 正文"},{"id":"text_0025","path":"/parameters/headers/0","label":"关键参数 / 表头 / 1"},{"id":"text_0026","path":"/parameters/headers/1","label":"关键参数 / 表头 / 2"},{"id":"text_0027","path":"/parameters/headers/2","label":"关键参数 / 表头 / 3"},{"id":"text_0028","path":"/parameters/rows/0/0","label":"关键参数 / 表格行 / 1 / 1"},{"id":"text_0029","path":"/parameters/rows/0/1","label":"关键参数 / 表格行 / 1 / 2"},{"id":"text_0030","path":"/parameters/rows/0/2","label":"关键参数 / 表格行 / 1 / 3"},{"id":"text_0031","path":"/parameters/rows/1/0","label":"关键参数 / 表格行 / 2 / 1"},{"id":"text_0032","path":"/parameters/rows/1/1","label":"关键参数 / 表格行 / 2 / 2"},{"id":"text_0033","path":"/parameters/rows/1/2","label":"关键参数 / 表格行 / 2 / 3"},{"id":"text_0034","path":"/parameters/rows/2/0","label":"关键参数 / 表格行 / 3 / 1"},{"id":"text_0035","path":"/parameters/rows/2/1","label":"关键参数 / 表格行 / 3 / 2"},{"id":"text_0036","path":"/parameters/rows/2/2","label":"关键参数 / 表格行 / 3 / 3"},{"id":"text_0037","path":"/parameters/rows/3/0","label":"关键参数 / 表格行 / 4 / 1"},{"id":"text_0038","path":"/parameters/rows/3/1","label":"关键参数 / 表格行 / 4 / 2"},{"id":"text_0039","path":"/parameters/rows/3/2","label":"关键参数 / 表格行 / 4 / 3"},{"id":"text_0040","path":"/parameters/rows/4/0","label":"关键参数 / 表格行 / 5 / 1"},{"id":"text_0041","path":"/parameters/rows/4/1","label":"关键参数 / 表格行 / 5 / 2"},{"id":"text_0042","path":"/parameters/rows/4/2","label":"关键参数 / 表格行 / 5 / 3"},{"id":"text_0043","path":"/parameters/rows/5/0","label":"关键参数 / 表格行 / 6 / 1"},{"id":"text_0044","path":"/parameters/rows/5/1","label":"关键参数 / 表格行 / 6 / 2"},{"id":"text_0045","path":"/parameters/rows/5/2","label":"关键参数 / 表格行 / 6 / 3"},{"id":"text_0046","path":"/parameters/rows/6/0","label":"关键参数 / 表格行 / 7 / 1"},{"id":"text_0047","path":"/parameters/rows/6/1","label":"关键参数 / 表格行 / 7 / 2"},{"id":"text_0048","path":"/parameters/rows/6/2","label":"关键参数 / 表格行 / 7 / 3"},{"id":"text_0049","path":"/flow/0/title","label":"流程 / 1 / 标题"},{"id":"text_0050","path":"/flow/0/detail","label":"流程 / 1 / 说明"},{"id":"text_0051","path":"/flow/1/title","label":"流程 / 2 / 标题"},{"id":"text_0052","path":"/flow/1/detail","label":"流程 / 2 / 说明"},{"id":"text_0053","path":"/flow/2/title","label":"流程 / 3 / 标题"},{"id":"text_0054","path":"/flow/2/detail","label":"流程 / 3 / 说明"},{"id":"text_0055","path":"/flow/3/title","label":"流程 / 4 / 标题"},{"id":"text_0056","path":"/flow/3/detail","label":"流程 / 4 / 说明"},{"id":"text_0057","path":"/flow/4/title","label":"流程 / 5 / 标题"},{"id":"text_0058","path":"/flow/4/detail","label":"流程 / 5 / 说明"},{"id":"text_0059","path":"/implementation/0/title","label":"实现方式 / 1 / 标题"},{"id":"text_0060","path":"/implementation/0/body","label":"实现方式 / 1 / 正文"},{"id":"text_0061","path":"/implementation/1/title","label":"实现方式 / 2 / 标题"},{"id":"text_0062","path":"/implementation/1/body","label":"实现方式 / 2 / 正文"},{"id":"text_0063","path":"/implementation/2/title","label":"实现方式 / 3 / 标题"},{"id":"text_0064","path":"/implementation/2/body","label":"实现方式 / 3 / 正文"},{"id":"text_0065","path":"/implementation/3/title","label":"实现方式 / 4 / 标题"},{"id":"text_0066","path":"/implementation/3/body","label":"实现方式 / 4 / 正文"},{"id":"text_0067","path":"/implementation/4/title","label":"实现方式 / 5 / 标题"},{"id":"text_0068","path":"/implementation/4/body","label":"实现方式 / 5 / 正文"},{"id":"text_0069","path":"/iterations/0/problem","label":"问题与迭代 / 1 / 发现问题"},{"id":"text_0070","path":"/iterations/0/cause","label":"问题与迭代 / 1 / 原因分析"},{"id":"text_0071","path":"/iterations/0/change","label":"问题与迭代 / 1 / 修改方案"},{"id":"text_0072","path":"/iterations/0/result","label":"问题与迭代 / 1 / 结果"},{"id":"text_0073","path":"/iterations/0/status","label":"问题与迭代 / 1 / 开发状态"},{"id":"text_0074","path":"/iterations/0/source","label":"问题与迭代 / 1 / 依据"},{"id":"text_0075","path":"/iterations/1/problem","label":"问题与迭代 / 2 / 发现问题"},{"id":"text_0076","path":"/iterations/1/cause","label":"问题与迭代 / 2 / 原因分析"},{"id":"text_0077","path":"/iterations/1/change","label":"问题与迭代 / 2 / 修改方案"},{"id":"text_0078","path":"/iterations/1/result","label":"问题与迭代 / 2 / 结果"},{"id":"text_0079","path":"/iterations/1/status","label":"问题与迭代 / 2 / 开发状态"},{"id":"text_0080","path":"/iterations/1/source","label":"问题与迭代 / 2 / 依据"},{"id":"text_0081","path":"/iterations/2/problem","label":"问题与迭代 / 3 / 发现问题"},{"id":"text_0082","path":"/iterations/2/cause","label":"问题与迭代 / 3 / 原因分析"},{"id":"text_0083","path":"/iterations/2/change","label":"问题与迭代 / 3 / 修改方案"},{"id":"text_0084","path":"/iterations/2/result","label":"问题与迭代 / 3 / 结果"},{"id":"text_0085","path":"/iterations/2/status","label":"问题与迭代 / 3 / 开发状态"},{"id":"text_0086","path":"/iterations/2/source","label":"问题与迭代 / 3 / 依据"},{"id":"text_0087","path":"/iterations/3/problem","label":"问题与迭代 / 4 / 发现问题"},{"id":"text_0088","path":"/iterations/3/cause","label":"问题与迭代 / 4 / 原因分析"},{"id":"text_0089","path":"/iterations/3/change","label":"问题与迭代 / 4 / 修改方案"},{"id":"text_0090","path":"/iterations/3/result","label":"问题与迭代 / 4 / 结果"},{"id":"text_0091","path":"/iterations/3/status","label":"问题与迭代 / 4 / 开发状态"},{"id":"text_0092","path":"/iterations/3/source","label":"问题与迭代 / 4 / 依据"},{"id":"text_0093","path":"/validation/0/label","label":"验证结果 / 1 / 名称"},{"id":"text_0094","path":"/validation/0/result","label":"验证结果 / 1 / 结果"},{"id":"text_0095","path":"/validation/0/source","label":"验证结果 / 1 / 依据"},{"id":"text_0096","path":"/validation/1/label","label":"验证结果 / 2 / 名称"},{"id":"text_0097","path":"/validation/1/result","label":"验证结果 / 2 / 结果"},{"id":"text_0098","path":"/validation/1/source","label":"验证结果 / 2 / 依据"},{"id":"text_0099","path":"/validation/2/label","label":"验证结果 / 3 / 名称"},{"id":"text_0100","path":"/validation/2/result","label":"验证结果 / 3 / 结果"},{"id":"text_0101","path":"/validation/2/source","label":"验证结果 / 3 / 依据"},{"id":"text_0102","path":"/validation/3/label","label":"验证结果 / 4 / 名称"},{"id":"text_0103","path":"/validation/3/result","label":"验证结果 / 4 / 结果"},{"id":"text_0104","path":"/validation/3/source","label":"验证结果 / 4 / 依据"},{"id":"text_0105","path":"/validation/4/label","label":"验证结果 / 5 / 名称"},{"id":"text_0106","path":"/validation/4/result","label":"验证结果 / 5 / 结果"},{"id":"text_0107","path":"/validation/4/source","label":"验证结果 / 5 / 依据"},{"id":"text_0108","path":"/validation/5/label","label":"验证结果 / 6 / 名称"},{"id":"text_0109","path":"/validation/5/result","label":"验证结果 / 6 / 结果"},{"id":"text_0110","path":"/validation/5/source","label":"验证结果 / 6 / 依据"},{"id":"text_0111","path":"/limitations/0","label":"尚存问题 / 1"},{"id":"text_0112","path":"/limitations/1","label":"尚存问题 / 2"},{"id":"text_0113","path":"/limitations/2","label":"尚存问题 / 3"},{"id":"text_0114","path":"/limitations/3","label":"尚存问题 / 4"},{"id":"text_0115","path":"/limitations/4","label":"尚存问题 / 5"},{"id":"text_0116","path":"/limitations/5","label":"尚存问题 / 6"},{"id":"text_0117","path":"/limitations/6","label":"尚存问题 / 7"},{"id":"text_0118","path":"/sources/0/file","label":"项目依据 / 1 / 文件路径"},{"id":"text_0119","path":"/sources/0/lines","label":"项目依据 / 1 / 行号"},{"id":"text_0120","path":"/sources/0/claim","label":"项目依据 / 1 / 支持的结论"},{"id":"text_0121","path":"/sources/1/file","label":"项目依据 / 2 / 文件路径"},{"id":"text_0122","path":"/sources/1/lines","label":"项目依据 / 2 / 行号"},{"id":"text_0123","path":"/sources/1/claim","label":"项目依据 / 2 / 支持的结论"},{"id":"text_0124","path":"/sources/2/file","label":"项目依据 / 3 / 文件路径"},{"id":"text_0125","path":"/sources/2/lines","label":"项目依据 / 3 / 行号"},{"id":"text_0126","path":"/sources/2/claim","label":"项目依据 / 3 / 支持的结论"},{"id":"text_0127","path":"/sources/3/file","label":"项目依据 / 4 / 文件路径"},{"id":"text_0128","path":"/sources/3/lines","label":"项目依据 / 4 / 行号"},{"id":"text_0129","path":"/sources/3/claim","label":"项目依据 / 4 / 支持的结论"},{"id":"text_0130","path":"/sources/4/file","label":"项目依据 / 5 / 文件路径"},{"id":"text_0131","path":"/sources/4/lines","label":"项目依据 / 5 / 行号"},{"id":"text_0132","path":"/sources/4/claim","label":"项目依据 / 5 / 支持的结论"},{"id":"text_0133","path":"/sources/5/file","label":"项目依据 / 6 / 文件路径"},{"id":"text_0134","path":"/sources/5/lines","label":"项目依据 / 6 / 行号"},{"id":"text_0135","path":"/sources/5/claim","label":"项目依据 / 6 / 支持的结论"},{"id":"text_0136","path":"/sources/6/file","label":"项目依据 / 7 / 文件路径"},{"id":"text_0137","path":"/sources/6/lines","label":"项目依据 / 7 / 行号"},{"id":"text_0138","path":"/sources/6/claim","label":"项目依据 / 7 / 支持的结论"},{"id":"text_0139","path":"/sources/7/file","label":"项目依据 / 8 / 文件路径"},{"id":"text_0140","path":"/sources/7/lines","label":"项目依据 / 8 / 行号"},{"id":"text_0141","path":"/sources/7/claim","label":"项目依据 / 8 / 支持的结论"},{"id":"text_0142","path":"/sources/8/file","label":"项目依据 / 9 / 文件路径"},{"id":"text_0143","path":"/sources/8/lines","label":"项目依据 / 9 / 行号"},{"id":"text_0144","path":"/sources/8/claim","label":"项目依据 / 9 / 支持的结论"}]'),lo={format:oo,version:no,tree:io,fields:ao},Nt={"documents/system-breakdowns/delta/pdf-cover.png":"documents/system-breakdowns/delta/pdf-cover-thumb-ef7ba0e8.webp","documents/system-breakdowns/jiangnan/pdf-cover.png":"documents/system-breakdowns/jiangnan/pdf-cover-thumb-f7d83c35.webp","media/atmosphere/mountains.png":"media/optimized/images/52ecedcf2469cbe5-lightweight-v4.webp","media/combat-goals/attack-sequence.png":"media/optimized/combat-goals/attack-sequence-3cb2c71d-lightweight-v4.webp","media/combat-goals/draft-frames-01.png":"media/optimized/images/a4990434f41d92e1-lightweight-v4.webp","media/combat-goals/draft-frames-02.png":"media/optimized/images/93edaa18436554d1-lightweight-v4.webp","media/cover/snow-cover-20261019.png":"media/optimized/cover/snow-cover-20261019-57e5f39e-lightweight-v4.webp","media/home-previews/enemy-hit-reference.webp":"media/optimized/images/fb4b3791df1373c8-lightweight-v4.webp","media/home-previews/interaction-ui.webp":"media/optimized/images/bef6d2a879d0e997-lightweight-v4.webp","media/home-previews/inventory-current.webp":"media/optimized/images/f5b1c1eb8d65f322-lightweight-v4.webp","media/level-goals/jianghu-complete-flowchart.png":"media/optimized/level-goals/jianghu-complete-flowchart-15f8df9f-lightweight-v4.webp","media/ornate-entries/about-art.png":"media/optimized/ornate-entries/about-art-76ec4c66-lightweight-v4.webp","media/ornate-entries/about-frame.png":"media/optimized/ornate-entries/about-frame-65f303a8-lightweight-v4.webp","media/ornate-entries/breakdown-art.png":"media/optimized/ornate-entries/breakdown-art-39a6098a-lightweight-v4.webp","media/ornate-entries/breakdown-frame.png":"media/optimized/ornate-entries/breakdown-frame-7d55ef65-lightweight-v4.webp","media/ornate-entries/projects-art.png":"media/optimized/ornate-entries/projects-art-726966ca-lightweight-v4.webp","media/ornate-entries/projects-frame.png":"media/optimized/ornate-entries/projects-frame-b383cca8-lightweight-v4.webp","media/system-showcase/inventory-before-20261020.png":"media/optimized/images/42dd040e447b231b-lightweight-v4.webp","media/system-showcase/inventory-opening-20261020.webp":"media/optimized/images/d3af2c2b4c5c73eb-lightweight-v4.webp","media/system-showcase/inventory-selection.webp":"media/optimized/images/5d0fd49e6546131a-lightweight-v4.webp","media/system-showcase/map-interface.webp":"media/optimized/images/df073438950a76db-lightweight-v4.webp","media/system-showcase/scene-interaction.webp":"media/optimized/images/d73a159c5a532fc8-lightweight-v4.webp","media/system-showcase/sword-picked-npc-target.webp":"media/optimized/images/58718788c7d503c1-lightweight-v4.webp","media/ui-iterations/button-after.png":"media/optimized/images/31427f89efd09804-lightweight-v4.webp","media/ui-iterations/button-before.png":"media/optimized/images/8208ffe926a5e631-lightweight-v4.webp","media/ui-iterations/dream-after.png":"media/optimized/images/755e32dd9942901a-lightweight-v4.webp","media/ui-iterations/dream-before.png":"media/optimized/images/66d138023b6f769c-lightweight-v4.webp","media/ui-iterations/inventory-after.png":"media/optimized/images/729d91536912c8a6-lightweight-v4.webp","media/ui-iterations/inventory-before.png":"media/optimized/images/42dd040e447b231b-lightweight-v4.webp","media/system-showcase/interaction-key.mp4":"media/optimized/system-showcase/interaction-key-d8435f92-lightweight-v4.mp4","media/system-showcase/inventory-opening-20261020.mp4":"media/optimized/system-showcase/inventory-opening-20261020-873d4bc0-lightweight-v4.mp4","media/ui-iterations/login-after.mp4":"media/optimized/ui-iterations/login-after-fe35fdd3-lightweight-v4.mp4","media/ui-iterations/login-before.mp4":"media/optimized/ui-iterations/login-before-a5a0e865-lightweight-v4.mp4"},qt={"documents/system-breakdowns/delta/xmind-overview.png":"documents/system-breakdowns/delta/xmind-thumb-d96a952d.webp","documents/system-breakdowns/jiangnan/xmind-overview.png":"documents/system-breakdowns/jiangnan/xmind-thumb-1dc27cc1.webp","media/atmosphere/mountains.png":"media/optimized/images/52ecedcf2469cbe5-thumb-lightweight-v4.webp","media/combat-goals/draft-frames-01.png":"media/optimized/images/a4990434f41d92e1-thumb-lightweight-v4.webp","media/combat-goals/draft-frames-02.png":"media/optimized/images/93edaa18436554d1-thumb-lightweight-v4.webp","media/dream.webp":"media/optimized/images/15ebd56ca8ea6cdf-thumb-lightweight-v4.webp","media/guide.webp":"media/optimized/images/c8b237e4191f86f7-thumb-lightweight-v4.webp","media/hero.webp":"media/optimized/images/fc9d10a796de5a68-thumb-lightweight-v4.webp","media/home-previews/enemy-hit-reference.webp":"media/optimized/images/fb4b3791df1373c8-thumb-lightweight-v4.webp","media/home-previews/interaction-ui.webp":"media/optimized/images/bef6d2a879d0e997-thumb-lightweight-v4.webp","media/home-previews/inventory-current.webp":"media/optimized/images/f5b1c1eb8d65f322-thumb-lightweight-v4.webp","media/hot-spring.webp":"media/optimized/images/80fd4f624bb8d6ae-thumb-lightweight-v4.webp","media/inn.webp":"media/optimized/images/722f967a58568efc-thumb-lightweight-v4.webp","media/lightning.webp":"media/optimized/images/2ad80e66db35b3ac-thumb-lightweight-v4.webp","media/manual.webp":"media/optimized/images/b3b05f0d4c180903-thumb-lightweight-v4.webp","media/prologue.webp":"media/optimized/images/3897173052adec9c-thumb-lightweight-v4.webp","media/recovery.webp":"media/optimized/images/47fc8cd20884e160-thumb-lightweight-v4.webp","media/system-showcase/inventory-before-20261020.png":"media/optimized/images/42dd040e447b231b-thumb-lightweight-v4.webp","media/system-showcase/inventory-opening-20261020.webp":"media/optimized/images/d3af2c2b4c5c73eb-thumb-lightweight-v4.webp","media/system-showcase/inventory-selection.webp":"media/optimized/images/5d0fd49e6546131a-thumb-lightweight-v4.webp","media/system-showcase/map-interface.webp":"media/optimized/images/df073438950a76db-thumb-lightweight-v4.webp","media/system-showcase/scene-interaction.webp":"media/optimized/images/d73a159c5a532fc8-thumb-lightweight-v4.webp","media/system-showcase/sword-picked-npc-target.webp":"media/optimized/images/58718788c7d503c1-thumb-lightweight-v4.webp","media/ui-iterations/button-after.png":"media/optimized/images/31427f89efd09804-thumb-lightweight-v4.webp","media/ui-iterations/button-before.png":"media/optimized/images/8208ffe926a5e631-thumb-lightweight-v4.webp","media/ui-iterations/dream-after.png":"media/optimized/images/755e32dd9942901a-thumb-lightweight-v4.webp","media/ui-iterations/dream-before.png":"media/optimized/images/66d138023b6f769c-thumb-lightweight-v4.webp","media/ui-iterations/inventory-after.png":"media/optimized/images/729d91536912c8a6-thumb-lightweight-v4.webp","media/ui-iterations/inventory-before.png":"media/optimized/images/42dd040e447b231b-thumb-lightweight-v4.webp"},Dt={"media/home-previews/character-actions.mp4":"media/optimized/posters/home-previews-character-actions-8506d697-lightweight-v4.webp","media/home-previews/three-hit-combo.mp4":"media/optimized/posters/home-previews-three-hit-combo-5a150709-lightweight-v4.webp","media/manual.mp4":"media/optimized/posters/manual-43b0e8eb-lightweight-v4.webp","media/map.mp4":"media/optimized/posters/map-f4269eb0-lightweight-v4.webp","media/normal.mp4":"media/optimized/posters/normal-68576b55-lightweight-v4.webp","media/prologue.mp4":"media/optimized/posters/prologue-0d719cf7-lightweight-v4.webp","media/system-showcase/interaction-key.mp4":"media/optimized/posters/system-showcase-interaction-key-d8435f92-lightweight-v4.webp","media/system-showcase/inventory-opening-20261020.mp4":"media/optimized/posters/system-showcase-inventory-opening-20261020-873d4bc0-lightweight-v4.webp","media/ui-iterations/login-after.mp4":"media/optimized/posters/ui-iterations-login-after-fe35fdd3-lightweight-v4.webp","media/ui-iterations/login-before.mp4":"media/optimized/posters/ui-iterations-login-before-a5a0e865-lightweight-v4.webp","media/wushuang.mp4":"media/optimized/posters/wushuang-9e3439ad-lightweight-v4.webp"},ro=t=>{if(typeof t!="string")return t;const e=t.startsWith("./")?"./":"";return Nt[t.slice(e.length)]?e+Nt[t.slice(e.length)]:t},Et=t=>{if(Array.isArray(t))return t.map(Et);if(t&&typeof t=="object"){const e=Object.fromEntries(Object.entries(t).map(([o,i])=>[o,Et(i)]));return typeof t.path=="string"&&qt[t.path]&&(e.preview=qt[t.path]),typeof t.path=="string"&&Dt[t.path]&&(e.poster=Dt[t.path]),e}return ro(t)},so="jianghuransheng-portfolio-article",xo=1;function Ft(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&Object.getPrototypeOf(t)===Object.prototype}function po(t){return t.replaceAll("&lt;!--","<!--").replaceAll("&amp;","&")}function co(t,e){if(typeof t!="string")throw new TypeError("Markdown内容必须是字符串。");if(!e||e.format!==so||e.version!==xo||!Array.isArray(e.fields))throw new TypeError("案例结构文件的格式或版本不匹配。");const o=new Map,i=new Set;for(const n of e.fields){if(!n||!/^text_[0-9]{4,}$/.test(n.id)||i.has(n.id))throw new Error("案例结构包含重复或无效字段。");i.add(n.id)}const x=/<!-- portfolio:text (text_[0-9]{4,}) -->(\r?\n)/g;for(const n of t.matchAll(x)){const c=n[1];if(!i.has(c))throw new Error("Markdown含有未声明的字段："+c);if(o.has(c))throw new Error("Markdown字段重复："+c);const f=n.index+n[0].length,b=`
<!-- /portfolio:text `+c+" -->",y=t.indexOf(b,f);if(y<0)throw new Error("Markdown字段缺少结束标记："+c);let m=t.slice(f,y);n[2]===`\r
`&&m.endsWith("\r")&&(m=m.slice(0,-1)),o.set(c,po(m))}const s=new Set;function a(n){if(Array.isArray(n))return n.map(a);if(Ft(n)){const c=Object.keys(n);if(c.length===1&&c[0]==="$text"&&typeof n.$text=="string"){if(!o.has(n.$text))throw new Error("Markdown缺少字段："+n.$text);if(s.has(n.$text))throw new Error("结构引用了重复字段："+n.$text);return s.add(n.$text),o.get(n.$text)}return Object.fromEntries(Object.entries(n).map(([f,b])=>[f,a(b)]))}if(n===null||typeof n=="boolean"||typeof n=="number"&&Number.isFinite(n))return n;throw new TypeError("案例结构中存在无效值。")}const d=a(e.tree);if(!Ft(d)||s.size!==i.size||o.size!==i.size)throw new Error("案例字段与结构不完整匹配。");return d}const _o="麦恒游戏策划作品集 · 江湖人生",fo="游戏设计作品集",mo="01",ho="2026-10-19",uo="zh-CN",bo=["战斗策划","系统策划","关卡策划","玩法策划"],go={displayName:"麦恒",nameApproved:!0,email:"1559661768@qq.com",emailApproved:!0,resumeUrl:"./documents/麦恒_游戏策划简历-7a5a3dbf6479.pdf",resumeApproved:!0,demoUrl:"https://www.bilibili.com/video/BV1tZnJ6oEhF/",demoApproved:!0},wo={name:"江湖人生",engine:"Unity 6000.3.27f1（序章 Demo）",type:"2.5D武侠单机 Demo",stage:"可运行原型 · 持续迭代",ownership:"本作品集记录策划需求、规则取舍、原型整合与验收。代码与部分素材含AI辅助；本人具体分工和素材授权待补充确认。"},vo="南京传媒学院游戏策划与设计本科。以《江湖人生》Unity序章 Demo为代表项目，展示战斗机制、系统规则、关卡引导及测试验证。",yo=[["index.html#about-me","关于我"],["index.html#cases","项目展示"],["index.html#system-analysis","拆解文档"],["index.html#ending","结尾"]],$o={"systems.html":"系统交互设计","about.html":"关于我"},ko={title:_o,brand:fo,version:mo,updated:ho,language:uo,roles:bo,profile:go,project:wo,intro:vo,nav:yo,pageTitles:$o},Eo={eyebrow:"2025届 游戏策划 求职中",titleLines:[{text:"麦恒",accent:""},{text:"求职作品集",accent:""},{text:"",accent:""}],intro:"我是一名游戏策划求职者，2025届南京传媒学院本科毕业于游戏策划专业。10000+小时游戏经历。善于从玩家与策划双视角发现问题，并逆向还原设计目的，解决问题。",roles:["战斗策划","系统策划","关卡策划"],buttons:[{href:"#cases",label:"查看作品",secondary:!1},{href:"./about.html#contact",label:"联系我 ",secondary:!0}],imageId:"opening-title",imageAlt:"《江湖人生》开场：竹林、石桥与远山，保留完整游戏标题和开始菜单",projectLabel:"作品项目 / 《江湖人生》",imageCaption:"武侠像素 · 横版 / 2.5D 玩法 Demo",carousel:{label:"《江湖人生》游戏图片展示",controlsLabel:"选择展示图片",buttonLabel:"显示第 {number} 张图片：{title}",intervalMs:2500,durationMs:550,slides:[{path:"media/home-carousel/scene.webp",alt:"《江湖人生》客栈前场景与倒地的主角",width:1672,height:941},{path:"media/home-carousel/inventory.webp",alt:"《江湖人生》背包界面参考图：人物装备、物品栏与物品详情",width:1447,height:1087},{path:"media/home-carousel/prologue.webp",alt:"《江湖人生》序章终雪景与残剑",width:1672,height:941},{path:"media/home-carousel/sword-atlas.webp",alt:"武侠剑客十二式挥剑动作图集",width:1448,height:1086},{path:"media/home-carousel/opening.webp",alt:"《江湖人生》竹林开场菜单",width:1670,height:942}]}},So=[{title:"01 制作项目预览",description:"《江湖人生》战斗 · 系统· 关卡"},{title:"02 拆解游戏文档",description:"《江南百景图》角色系统拆解"},{title:"03 关于我",description:"自我介绍与能力"}],Po={eyebrow:"01.《江湖人生》策划设计",title:"围绕战斗、系统和关卡，展示我的游戏设计与制作过程。",intro:"",linkLabel:"阅读开发复盘 ↗"},zo={eyebrow:"03 拆解文档 / SYSTEM ANALYSIS",items:[{id:"jiangnan",title:"《江南百景图》角色系统拆解",intro:"分析角色获取、等级养成、天赋、珍宝及羁绊等模块，并整理系统之间的关联与个人优化建议。",pdf:{path:"documents/system-breakdowns/jiangnan/江南百景图角色系统拆解.pdf",preview:"documents/system-breakdowns/jiangnan/pdf-cover-thumb-f7d83c35.webp",width:1985,height:2807},xmind:{path:"documents/system-breakdowns/jiangnan/角色系统拆解文档.xmind"},mindmaps:[{path:"documents/system-breakdowns/jiangnan/xmind-overview.png",width:2098,height:1300,preview:"documents/system-breakdowns/jiangnan/xmind-thumb-1dc27cc1.webp"}],button:{href:"./documents/system-breakdowns/jiangnan/江南百景图角色系统拆解.pdf",label:"查看完整文档"}},{id:"delta",title:"《三角洲行动》交易行系统拆解",intro:"分析交易行的购买、出售、价格参考及交易规则，梳理交易行与仓库、哈夫币和战前整备之间的关系。",pdf:{path:"documents/system-breakdowns/delta/三角洲行动交易行系统拆解.pdf",preview:"documents/system-breakdowns/delta/pdf-cover-thumb-ef7ba0e8.webp",width:1985,height:2807},xmind:{path:"documents/system-breakdowns/delta/《三角洲行动》交易行系统.xmind"},mindmaps:[{path:"documents/system-breakdowns/delta/xmind-overview.png",width:2099,height:1300,preview:"documents/system-breakdowns/delta/xmind-thumb-d96a952d.webp"}],button:{href:"./documents/system-breakdowns/delta/三角洲行动交易行系统拆解.pdf",label:"查看完整文档"}}]},Lo={eyebrow:"01 关于我 / ABOUT ME",title:"麦恒",intro:`2025年6月毕业于南京传媒学院游戏策划专业。
10000+游戏时长阅历，能从玩家与策划双视角发现问题，解决问题。
主要关注战斗设计、系统交互与关卡引导，同时具备游戏测试与需求分析相关实践经验。`,items:[{label:"求职方向",text:"游戏策划（系统 / 战斗 / 关卡）"},{label:"教育背景",text:"南京传媒学院 · 游戏策划与设计 · 本科"},{label:"个人项目",text:`《江湖人生》 · 独立Demo与游戏拆解文档

`},{label:"相关实践",text:"游戏测试培训 · 需求分析与用例设计"}],button:{label:"查看个人简历"},experienceButton:{href:"./about.html",label:"个人经历"}},Mo={eyebrow:"02 项目展示 / PROJECTS",labels:{open:"放大查看：",enlarge:"点击放大",close:"关闭 ×",pending:"素材待补充",videoFallback:"浏览器暂不支持视频播放。"},groups:[{title:"战斗设计",intro:"展示《江湖人生》的角色连击、无双技能、敌人受击反馈及战斗节奏调整。",detail:{href:"./combat.html",label:"查看详细设计"},items:[{type:"video",path:"media/home-previews/character-actions.mp4",poster:"media/optimized/posters/home-previews-character-actions-8506d697-lightweight-v4.webp",title:"角色基础动作",kindLabel:"原始动作素材视频",alt:"绿幕角色动作素材：待机、奔跑、挥剑与收势",width:1280,height:720},{type:"video",path:"media/home-previews/three-hit-combo.mp4",poster:"media/optimized/posters/home-previews-three-hit-combo-5a150709-lightweight-v4.webp",title:"角色三段连击",kindLabel:"原始动作素材视频",alt:"绿幕三段连击动作素材：横斩、上挑与水平突刺",width:1280,height:720},{type:"image",path:"media/optimized/images/fb4b3791df1373c8-lightweight-v4.webp",title:"敌人受击反馈",kindLabel:"动作参考图",alt:"山贼受击动作参考图，展示站立、后仰与弯腰等姿势",width:1928,height:815,preview:"media/optimized/images/fb4b3791df1373c8-thumb-lightweight-v4.webp"}],number:"01"},{number:"02",title:"系统策划与UI设计",intro:"设计了背包、地图和场景交互功能，主要围绕界面布局、操作方式和交互反馈进行制作与优化。",items:[{type:"image",path:"media/optimized/images/f5b1c1eb8d65f322-lightweight-v4.webp",title:"背包界面",kindLabel:"正式背包UI实机截图",alt:"正式背包界面：角色、装备栏、物品栏、物品详情及操作按钮",width:1280,height:720,preview:"media/optimized/images/f5b1c1eb8d65f322-thumb-lightweight-v4.webp"},{type:"video",path:"media/map.mp4",poster:"media/optimized/posters/map-f4269eb0-lightweight-v4.webp",title:"地图展开",kindLabel:"地图展开实机录像",alt:"真实游戏画面中，揉成纸团的地图逐步展开为完整地图",width:1280,height:720},{type:"video",path:"media/optimized/system-showcase/interaction-key-d8435f92-lightweight-v4.mp4",poster:"media/optimized/posters/system-showcase-interaction-key-d8435f92-lightweight-v4.webp",title:"E键交互提示",kindLabel:"交互提示动效 · 实机局部放大",alt:"古风交互标志旁的金色E键按下与回弹动画，取自游戏画面的局部放大",width:960,height:600}],detail:{href:"./systems.html",label:"查看详细设计"}},{title:"关卡交互设计",intro:"围绕梦境与客栈场景，设计战斗教学、地图查看、物品拾取和NPC交互的引导流程。",detail:{href:"./levels.html",label:"查看详细设计"},items:[{type:"image",path:"media/dream.webp",title:"梦境竹林",kindLabel:"游戏截图",alt:"《江湖人生》梦境竹林中的白发主角与木桩",width:1280,height:720,preview:"media/optimized/images/15ebd56ca8ea6cdf-thumb-lightweight-v4.webp"},{type:"image",path:"media/inn.webp",title:"客栈探索",kindLabel:"游戏截图",alt:"《江湖人生》客栈内场景与前台交互提示",width:1280,height:720,preview:"media/optimized/images/722f967a58568efc-thumb-lightweight-v4.webp"},{type:"image",path:"media/guide.webp",title:"首次查看地图后的独白",kindLabel:"游戏截图",alt:"《江湖人生》主角关闭地图后的非阻塞剧情独白",width:1280,height:720,preview:"media/optimized/images/c8b237e4191f86f7-thumb-lightweight-v4.webp"}],number:"03"}],title:"《江湖人生》",playthrough:{title:"《江湖人生》序章全流程实机演示",intro:"观看《江湖人生》序章的完整实机流程。",label:"观看完整试玩",path:"media/hero.webp",width:1280,height:720,preview:"media/optimized/images/fc9d10a796de5a68-thumb-lightweight-v4.webp"}},Io={title:"《江湖人生》系统交互设计",eyebrow:"CASE 02 / SYSTEM INTERACTION DESIGN",intro:"围绕背包、地图与场景交互，说明已有功能的操作规则、界面反馈及修改过程。",navigationLabel:"章节定位",back:{href:"./index.html#cases",label:"返回作品集主页"},labels:{goal:"设计目标",media:"图片和视频展示",rules:"功能规则",optimisation:"设计思路与优化"},chapters:[{title:"背包系统设计",items:[{type:"video",path:"media/optimized/system-showcase/inventory-opening-20261020-873d4bc0-lightweight-v4.mp4",poster:"media/optimized/posters/system-showcase-inventory-opening-20261020-873d4bc0-lightweight-v4.webp",title:"01 背包打开动效",kindLabel:"打开动效实录 · 换肤前界面",alt:"游戏实录中的古风布袋打开与关闭过程，界面为换肤前版本",width:1920,height:1080,description:"设计了古风布袋展开动画，让背包打开过程更加自然，并通过对应音效提供操作反馈。",note:"此段展示沿用的布袋动效，正式背包外观见下一节；网页预览静音。"},{type:"image",path:"media/optimized/images/f5b1c1eb8d65f322-lightweight-v4.webp",title:"02 背包界面展示",kindLabel:"正式背包UI实机截图",alt:"正式背包界面：角色、装备栏、物品栏、物品详情及操作按钮",width:1280,height:720,description:"将角色装备、物品栏和物品详情分区展示，方便玩家查看和管理物品。",preview:"media/optimized/images/f5b1c1eb8d65f322-thumb-lightweight-v4.webp"},{type:"image",path:"media/optimized/images/5d0fd49e6546131a-lightweight-v4.webp",title:"03 背包功能与交互",kindLabel:"物品选择与详情实机截图",alt:"点击背包葫芦后显示物品选中状态与对应详情的真实游戏截图",width:1280,height:720,description:"支持物品选择、查看详情、使用、装备和丢弃，通过按钮状态与点击反馈提示操作结果。",note:"当前图片展示物品选中后的详情状态。",preview:"media/optimized/images/5d0fd49e6546131a-thumb-lightweight-v4.webp"}],number:"01",id:"inventory-system",goal:"将角色装备、物品栏和物品详情分区展示，让玩家选中物品后能直接判断可执行的操作。",rules:["点击真实物品后，更新选中框、数量、详情和按钮状态。","使用恢复品消耗1个；装备新武器时，旧武器回到背包；丢弃每次减少1个。","空格、禁用按钮和打开动画期间不执行物品操作；已装备物品不能直接使用或丢弃。","有效选择和成功操作播放一次木质轻敲，悬停、刷新和失败操作不播放。"],optimisation:["沿用原物品模型和操作回调，更换底板、图标与显示布局。针对葫芦、酒坛和草药图标缺边的问题替换完整素材，保留原画布、点击位置及音效。","下方展示废版背包系统与新版背包系统。"],audio:{path:"media/system-showcase/interaction-feedback.wav",label:"试听木质点击反馈（0.6秒，手动播放）"},comparison:[{type:"image",path:"media/optimized/images/42dd040e447b231b-lightweight-v4.webp",title:"旧版背包系统",kindLabel:"真实游戏截图",alt:"旧版背包系统界面：角色装备、物品栏、长剑详情和操作按钮",width:1681,height:936,preview:"media/optimized/images/42dd040e447b231b-thumb-lightweight-v4.webp"},{type:"image",path:"media/optimized/images/5d0fd49e6546131a-lightweight-v4.webp",title:"新版背包系统",kindLabel:"真实游戏截图",alt:"完整葫芦图标替换后的背包详情实机截图",width:1280,height:720,preview:"media/optimized/images/5d0fd49e6546131a-thumb-lightweight-v4.webp"}]},{title:"地图系统设计",items:[{type:"video",path:"media/map.mp4",poster:"media/optimized/posters/map-f4269eb0-lightweight-v4.webp",title:"01 地图打开动效",kindLabel:"地图展开实机录像",alt:"真实游戏画面中，揉成纸团的地图逐步展开为完整地图",width:1280,height:720,description:"采用纸团展开动画作为地图打开效果，让地图操作更符合游戏的古风视觉风格。"},{type:"image",path:"media/optimized/images/df073438950a76db-lightweight-v4.webp",title:"02 地图界面",kindLabel:"地图UI实机截图",alt:"游戏中青山镇地图的区域、当前位置与已有状态显示",width:1280,height:720,description:"通过地图展示玩家所在区域及探索信息，帮助玩家了解当前位置。",preview:"media/optimized/images/df073438950a76db-thumb-lightweight-v4.webp"}],number:"02",id:"map-system",goal:"用地图帮助玩家辨认当前区域，并通过纸团展开动效与场景保持一致的视觉风格。",rules:["展开期间暂不接受区域点击；完成后可悬停查看六个区域。按M、Esc或关闭按钮关图。","当前界面突出客栈区域，其他区域以雾面表现；客栈点击反馈为“您已在此区域”。"],optimisation:["纸团在1秒内展开，重复打开请求不会重启动画或叠加音效。首次成功查看并关闭地图后，接续拾剑与问路独白，再次开关不重复触发这一段引导。","地图现阶段用于区域查看；随探索解锁的动态迷雾和跨区域旅行尚未接入。"]},{title:"交互系统设计",items:[{type:"video",path:"media/optimized/system-showcase/interaction-key-d8435f92-lightweight-v4.mp4",poster:"media/optimized/posters/system-showcase-interaction-key-d8435f92-lightweight-v4.webp",title:"01 交互提示UI",kindLabel:"交互提示动效 · 实机局部放大",alt:"古风交互标志旁的金色E键按下与回弹动画，取自游戏画面的局部放大",width:960,height:600,description:"使用统一的E键交互提示，让玩家能够快速识别可以调查或使用的对象。"},{type:"image",path:"media/optimized/images/d73a159c5a532fc8-lightweight-v4.webp",title:"02 场景交互",kindLabel:"场景交互实机截图",alt:"主角通过E键与客栈掌柜交谈的真实游戏对话画面",width:1280,height:720,description:"通过E键完成物品拾取、NPC对话和场景互动，统一玩家的操作方式。",preview:"media/optimized/images/d73a159c5a532fc8-thumb-lightweight-v4.webp"},{type:"image",path:"media/optimized/images/bef6d2a879d0e997-lightweight-v4.webp",title:"03 目标引导",kindLabel:"剧情目标提示实机截图",alt:"当前剧情的青峰剑目标上方显示交互提示，主角仍位于远处",width:1280,height:720,description:"根据当前剧情显示下一步交互目标，同时保留玩家自由探索的空间。",note:"提示可以远距离显示；实际交互仍需靠近目标后按E。",preview:"media/optimized/images/bef6d2a879d0e997-thumb-lightweight-v4.webp"}],number:"03",id:"interaction-system",goal:"统一拾取、NPC对话和场景互动的E键操作，并让当前剧情目标更容易被发现。",rules:["当前目标上方显示古风标志，金色E键帽循环展示按下与回弹动效。","提示可以远距离显示；实际交互仍需进入原有范围，并满足角色当前可操作条件。","青峰剑复用场景中原有的拾取对象，成功后对象隐藏、防止重复领取，下一步提示转向已有NPC。","普通NPC对话沿用原有锁定条件；开局地图与拾剑问路独白采用非阻塞显示，允许玩家移动。"],optimisation:["将目标显示与交互执行分开：剧情状态决定标志的位置，原交互系统继续检查距离和角色状态。这样可以提前指明方向，同时保留靠近后按E的操作过程。","起身完成后恢复自由移动，玩家可以走动、稍后查看地图，再自行前往拾剑或问路。菜单、普通对话与转场期间隐藏现实目标提示，避免干扰。","下方实机截图展示拾剑前后：目标从地上的青峰剑切换到已有NPC，玩家可自行决定何时前往。"],comparison:[{type:"image",path:"media/optimized/images/bef6d2a879d0e997-lightweight-v4.webp",title:"拾剑前：目标在青峰剑",kindLabel:"真实游戏截图",alt:"拾剑前，交互目标提示显示在青峰剑上方",width:1280,height:720,preview:"media/optimized/images/bef6d2a879d0e997-thumb-lightweight-v4.webp"},{type:"image",path:"media/optimized/images/58718788c7d503c1-lightweight-v4.webp",title:"拾剑后：目标切换至NPC",kindLabel:"真实游戏截图",alt:"成功拾剑后地上剑消失，目标标志切换至现有女性NPC，主角仍在远处",width:1280,height:720,preview:"media/optimized/images/58718788c7d503c1-thumb-lightweight-v4.webp"}]}]},Ao={eyebrow:"2025届 游戏策划 求职中",title:"求职作品集",subtitle:"我是麦恒，游戏策划本科毕业",project:"求职方向（系统 关卡 战斗） 策划 ",image:{path:"media/optimized/cover/snow-cover-20261019-57e5f39e-lightweight-v4.webp",width:1672,height:941,alt:"雪中古刹与远山，右侧剑客低头拭剑，完整保留原图人物、剑身与场景"},actions:{playthrough:{label:"观看完整试玩"},contact:{label:"联系我"}}},jo={eyebrow:"04 结尾 / CONTACT",title:"感谢浏览",intro:"期待有机会进一步与您交流游戏设计与原型实践。",contactLabel:"联系邮箱",phoneLabel:"联系电话",phoneNumber:"18666651414",contactFallback:"查看联系方式",resume:{label:"下载个人简历"},back:{href:"./index.html#cover",label:"返回首页"}},To={hero:Eo,facts:So,cases:Po,systemAnalysis:zo,aboutMe:Lo,previews:Mo,systemInteraction:Io,cover:Ao,ending:jo},Co={image_001:"该画面待补充，不以其他素材代替。",image_002:"项目留存截图",movie_001:"实机录像待补充。此处不使用静态图片冒充录像。",movie_002:"浏览器暂不支持视频，请使用最新版浏览器查看。",movie_003:"过场成片预览",movie_004:"实机视口帧合成预览",movie_005:"独立UI动画预览",movie_006:"原生验收录像",movie_007:" · 点击播放，保留原音轨",evidence_001:"展开项目依据与核对范围",evidence_002:"以下为项目内相对路径与源码行号，供回查；不向公开网页复制完整源代码或原始个人简历。网站案例依据当前源码和留存记录整理，本次未重新运行游戏回归。",iterations_001:"项目迭代记录",iterations_002:"原因",iterations_003:"调整",iterations_004:"结果",iterations_005:"依据：",header_001:"返回作品集首页",header_002:"跳至正文",header_003:"江",header_004:"GAME DESIGN / ",header_005:"主导航",header_006:"导航",footer_001:"《江湖人生》· 游戏策划求职作品集",footer_002:"Unity 序章 Demo / 内容核对 ",footer_003:"查看简历",footer_004:"联系我",footer_005:"",pageHead_001:"作品集",timelineExplorer_001:"战斗帧时间轴 · 三条攻击分支",timelineExplorer_002:"规则示意，非在线游戏。横轴按实际帧时长累计；无双分段变速不按统一FPS平均分配。动画内部帧号从0开始。",timelineExplorer_003:"查看招式",timelineExplorer_004:"起手 0s",timelineExplorer_005:"有效判定窗口",timelineExplorer_006:"下一次真实按键缓冲",timelineExplorer_007:"动作时间轴不代表碰撞体形状。K第二刀独停直接回待机，收势接缝待完善；K突刺没有无双的金雷位移。",interactionExplorer_001:"任务提示与实际交互 · 规则演示",interactionExplorer_002:"依据现有主线提示规则制作的说明工具，不是可试玩Demo。",interactionExplorer_003:"目标状态",interactionExplorer_004:"当前主线目标",interactionExplorer_005:"尚未激活",interactionExplorer_006:"已经完成",interactionExplorer_007:"玩家进入原交互范围",interactionExplorer_008:"目标上方任务提示",interactionExplorer_009:"E键距离条件",interactionExplorer_010:"显示由任务进度决定；E键仍受原距离门槛、对象状态和现有剧情条件约束。未显示主线提示，不代表其他近距交互全部禁用。",coordinateDiagram_001:"精确路线与可行走区域资料待补充，不绘制推测地图。",coordinateDiagram_002:"关卡空间 · 真实脚点区域",coordinateDiagram_003:"场景",coordinateDiagram_004:"绿色区域为源码中的可行走边界，棕色为占地／固定障碍；圆圈为已知近距交互半径。引线标签区分近邻锚点，实际坐标不变；未绘制推测路线或强制轨迹。",casePage_001:"CASE 01 / COMBAT DESIGN",casePage_002:"CASE 02 / SYSTEM DESIGN",casePage_003:"CASE 03 / LEVEL DESIGN",casePage_004:"目标与体验",casePage_005:"机制与规则",casePage_006:"游戏演示",casePage_007:"参数与流程",casePage_008:"原型实现",casePage_009:"迭代与取舍",casePage_010:"验证与局限",casePage_011:"项目依据",casePage_012:"设计目标与玩家体验",casePage_013:"设计目标",casePage_014:"玩家体验目标",casePage_015:"",casePage_016:"核心机制与规则",casePage_017:"以上来自项目留存版本，部分录像含测试场景或测试说明字。它们证明当时的原型表现，不代表所有内容已经完成最终质量验收。",casePage_018:"关键位置与流程",casePage_019:"关键参数与状态",casePage_020:"实际实现方式",casePage_021:"问题、迭代与取舍",casePage_022:"验证结果与尚存问题",casePage_023:"当前边界",casePage_024:"部分原型已接入",casePage_025:"战斗系统  系统策划 关卡设计 ui设计",casePage_026:"基于当前demo记录制作",casePage_027:"本页目录",casePage_028:"IN THIS CASE",review_001:"DEVELOPMENT NOTES / RETROSPECTIVE",review_002:"开发复盘",review_003:"记录真实发生的问题、调整理由与当前结果。保留没有解决的接缝与功能边界，不把妥协写成已完成。",review_004:"ITERATION 0",review_005:"发现问题",review_006:"分析原因",review_007:"方案与修改",review_008:"结果与尚存问题",review_009:"验收记录来自项目已有测试资料；本网站制作期间未再次执行Godot测试。真实玩家访谈、体验数据与改动效果的量化比较仍待补充。",review_010:"战斗案例",review_011:"系统案例",review_012:"关卡案例",approvedLink_001:"打开 ↗",about_001:"ABOUT / PROFILE",about_002:"个人经历",about_003:"策划理论 + 原型实践 + 测试验证。求职方向为战斗、系统、关卡策划。",about_004:"GAME DESIGN CANDIDATE",about_005:"游戏策划求职者",about_006:"联系方式：1559661768@qq.com",about_007:"EDUCATION",about_008:"相关课程：",about_009:"游戏测试与需求分析实践",about_010:"专业与工具技能",about_011:"游戏体验与机制关注",about_012:"",about_013:"所获奖项",about_020:"简历、Demo与联系",about_021:"个人简历 PDF",about_022:"待提供可公开的脱敏PDF",about_023:"Demo 下载 / 试玩",about_024:"待准备正式分发版本",about_025:"求职邮箱",about_026:"待本人确认公开",about_027:"",common_001:"首页",updateTimeline_001:"有效判定",updateTimeline_002:"连击缓冲",updateTimeline_003:"帧",updateTimeline_004:"24FPS源帧 · 分阶段变速",updateTimeline_005:"24FPS源帧 · 有效播放 ",updateTimeline_006:" FPS",updateTimeline_007:" · 有效判定：内部帧",updateTimeline_008:" · 连击缓冲：内部帧",updateTimeline_009:" · 末段结束重置连击",updateTimeline_010:" · 独立收招 ",updateTimeline_011:"（直接回待机）",updateTimeline_012:" · 金雷位移 ",updateRules_001:"显示 · 与距离无关",updateRules_002:"隐藏 · 非当前任务目标",updateRules_003:"距离满足 · 仍需其他条件通过",updateRules_004:"距离不足 · 按E不触发交互",updateMap_001:"真实可行走边界和关键对象位置示意",updateMap_002:"坐标画布 ",updateMap_003:"；脚点或交互锚点，非人物可见外框。",updateMap_004:"标号",updateMap_005:"关键位置",generic_001:"新增策划案例",generic_002:"该案例的演示素材待补充。",generic_003:"案例待补充",updateMap_006:"X / Y",casePage_levels_rules:"关卡设计与引导流程",casePage_levels_goals_title:"设计目标与玩家体验",casePage_levels_goals_label:"设计目标",casePage_levels_experience_label:"玩家体验目标"},No={labels:Co},qo={period:"2021.09 — 2025.06",school:"南京传媒学院",degree:"游戏策划与设计 · 本科",courses:["游戏概论","游戏引擎开发","游戏策划基础","游戏策划技巧","游戏角色设计","游戏测试分析"]},Do={period:"2026.07 — 2026.08",title:"游戏测试工程师（培训）",organization:"中电金信",disclaimer:"《三角洲》帧数商业皮肤制作测试流程，《火影忍者手游》相关测试实践",project:"",items:["基于需求理解规则，识别逻辑漏洞与描述不明确的条件。","使用等价类、边界值方法组织测试用例，覆盖入口条件、获取与消耗、状态刷新等场景。","学习操作响应与伤害判定专项测试，以及缺陷记录、修复后的回归验证。","学习冒烟、兼容性和性能测试学习及辅助实践。"]},Fo=[{name:"chatGPT deepseek",level:"ai工具",detail:"善于使用ChatGPT、DeepSeek辅助功能需求分析、系统流程设计、配置表及测试用例整理。可以使用agent工具台例如 codex 连接引擎制作全流程，包括ui设计，帧动画形成，策划梳理等步骤。"},{name:"Godot  unity  UE5",level:"引擎",detail:"使用此类工具进行思路梳理、测试设计与用例组织。能够使用市面上主流的游戏引擎部分进行制作，通过unity MCP连接ai工具进行制作场景，通过godot MCP进行制作蓝图调教智慧树，使用Unreal MCP让ai参与制作。"},{name:"Word / Excel",level:"办公软件",detail:"会使用于文档整理、表格与测试资料，策划文档。"},{name:"XMind与墨刀",level:"思维导图",detail:"使用此类工具进行思路梳理、测试设计与用例组织。"},{name:"PerfDog",level:"测试工具",detail:"定位帧率与异常卡顿问题，进行问题分析。"},{name:"测试设计",level:"培训实践",detail:"需求分析、等价类、边界值、缺陷跟踪及回归验证。"}],Ro=["大学在校奖学金  ","腾讯元梦之星高校创作奖","腾讯游戏创作大赛赛区奖  "],Uo="",Oo=[{group:"FPS体验",names:"三角洲行动、无畏契约、和平精英、反恐精英",focus:"关注枪械手感、弹道逻辑与伤害判定。专题拆解文档与案例"},{group:"MOBA体验",names:"王者荣耀、英雄联盟",focus:"有长期游玩经历对moba类机制了解。"},{group:"主机与单机体验",names:"艾尔登法环、使命召唤系列、我的世界、战神系列、死亡搁浅",focus:""}],Ho=["个人简历文本（已去除重复段落）","当前Unity序章原型与历史Godot验收记录"],Ko={education:qo,training:Do,skills:Fo,awards:Ro,awardNote:Uo,games:Oo,sources:Ho},Bo=[{id:"hero",path:"media/hero.webp",kind:"native-screenshot",caption:"客栈院外实机截图；留存验收版本",originalSize:[1280,720],displaySize:[1280,720],bytes:297738,sourceSha256:"74ca105bbc54403e749ca1ae1834b3c2dd069d4e613f79f18df54e07b9d29b34",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/fc9d10a796de5a68-thumb-lightweight-v4.webp"},{id:"inventory",path:"media/inventory.webp",kind:"native-screenshot",caption:"最新背包换肤原生截图；真实6物品与25格容量",originalSize:[1280,720],displaySize:[1280,720],bytes:156368,sourceSha256:"c76bff1423b82e6f17c8519ecbd45380d144dd431192a7185d14d2469f08c4a0",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"dream",path:"media/dream.webp",kind:"native-screenshot",caption:"新游戏链路验收中的梦境觉醒实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:281720,sourceSha256:"cd29ea359bf38a7df3b9a0c849f13290b659da287b1884715deff5c1e8ada290",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/15ebd56ca8ea6cdf-thumb-lightweight-v4.webp"},{id:"map",path:"media/map.webp",kind:"native-screenshot",caption:"地图原生验收截图；历史界面记录",originalSize:[1280,720],displaySize:[1280,720],bytes:194960,sourceSha256:"225660fb459217301630217f0185e1c0a2c870a4b1c1af0e4997245644c0a04b",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"thrust",path:"media/thrust.webp",kind:"native-screenshot",caption:"无双第三刀节奏优化实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:280308,sourceSha256:"2b1d6e3274c8af0251c784232fa07323d56d4ab2d0bd66a3195065b003665c3e",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"lightning",path:"media/lightning.webp",kind:"native-screenshot",caption:"无双第三刀金雷阶段实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:276204,sourceSha256:"226ad3455d2fcedd1bcf8a55977f06ca522736da6c81a7e3d3e0799b9dc63e50",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/2ad80e66db35b3ac-thumb-lightweight-v4.webp"},{id:"manual",path:"media/manual.webp",kind:"native-screenshot",caption:"K武学实机验收截图；含测试说明字",originalSize:[1280,720],displaySize:[1280,720],bytes:306400,sourceSha256:"9b56301b29bb8fba274421f7bb6934b23ea1ce547227503cb06d31e350d0cc8a",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/b3b05f0d4c180903-thumb-lightweight-v4.webp"},{id:"cloth",path:"media/cloth.webp",kind:"native-screenshot",caption:"原布袋打开动画实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:123594,sourceSha256:"b796cef146dbadc3f687d554e246db90c3a2a08e8dd6647ab48cb44a6e6092e2",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"recovery",path:"media/recovery.webp",kind:"native-screenshot",caption:"第一刀独立收招实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:270852,sourceSha256:"ce97301b11bc06aaf695f184d6bccffa081eab954a008af60d493b310b1b266d",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/47fc8cd20884e160-thumb-lightweight-v4.webp"},{id:"inventory-before",path:"media/inventory-before.webp",kind:"native-screenshot",caption:"早期背包实机验收记录；内容与新版数据可能不同",originalSize:[1280,720],displaySize:[1280,720],bytes:151118,sourceSha256:"fe9b5a4baed05c4fb7291bd9e7e3194a8d9b701a79f90993fc6d9d903aa1689d",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"guide",path:"media/guide.webp",kind:"native-screenshot",caption:"首次关图后非阻塞独白的原生验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:278320,sourceSha256:"b38117bed09f134fb3e2003dc8ff810cb40207e412b38de7b4e77cfb71f896dd",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/c8b237e4191f86f7-thumb-lightweight-v4.webp"},{id:"inn",path:"media/inn.webp",kind:"native-screenshot",caption:"客栈室内远距柜台目标的原生验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:266132,sourceSha256:"ee531432e942335e7969532040c860c08fbd556f92ce4424051df7c73f3d4d7d",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/722f967a58568efc-thumb-lightweight-v4.webp"},{id:"hot-spring",path:"media/hot-spring.webp",kind:"native-screenshot",caption:"温泉状态与退出目标的原生验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:270480,sourceSha256:"c162dd7fc3d4bfb81777246c1a6eafd2f1085fdffde8219a3d82f5dd731aa289",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/80fd4f624bb8d6ae-thumb-lightweight-v4.webp"},{id:"prologue",path:"media/prologue.webp",kind:"native-screenshot",caption:"序章终逐笔书写完成后的原生组件验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:223006,sourceSha256:"36d77b7d575ea4112a4badbe2c98f4fa07a8a7f97fbfbf7fe53f53e369bdd5fb",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/3897173052adec9c-thumb-lightweight-v4.webp"},{id:"opening-title",path:"media/opening-title.png",sourceType:"user-attachment",kind:"native-screenshot",caption:"《江湖人生》竹林开场菜单 · 用户提供的游戏截图",originalSize:[1273,744],displaySize:[1273,744],bytes:2093223,sourceSha256:"32e7324bc4821df6820d4b8e285d767d3339f8cf282f1f8a3043fc5e3d7982aa",processing:"原始PNG逐字节复制，完整保留画面比例与内容；仅在网页中等比例显示"},{id:"combat-goal-attack-sequence",path:"media/optimized/combat-goals/attack-sequence-3cb2c71d-lightweight-v4.webp",kind:"user-supplied-design-reference",caption:"攻击顺序制作设想",originalSize:[1169,545],displaySize:[1169,545],bytes:33859,sourceSha256:"3cb2c71d45914b01db6262555d977012daf9c06bc5ca64bff0acede83ac994db",processing:"原样复制PNG；原始像素、画布与透明度未修改"},{id:"combat-goal-draft-01",path:"media/optimized/images/a4990434f41d92e1-lightweight-v4.webp",kind:"user-supplied-design-reference",caption:"草稿帧制作 01",originalSize:[1448,1086],displaySize:[1448,1086],bytes:1936620,sourceSha256:"a4990434f41d92e1cae49e43304cb58ff40a4d1b0f267fae7d888abe24428d0b",processing:"原样复制PNG；原始像素、画布与透明度未修改",preview:"media/optimized/images/a4990434f41d92e1-thumb-lightweight-v4.webp"},{id:"combat-goal-draft-02",path:"media/optimized/images/93edaa18436554d1-lightweight-v4.webp",kind:"user-supplied-design-reference",caption:"草稿帧制作 02",originalSize:[1672,941],displaySize:[1672,941],bytes:854451,sourceSha256:"93edaa18436554d1230761748c7a63f0ed6a21cb66a8d3f170755129cbf38082",processing:"原样复制PNG；原始像素、画布与透明度未修改",preview:"media/optimized/images/93edaa18436554d1-thumb-lightweight-v4.webp"},{id:"level-goal-flowchart",path:"media/optimized/level-goals/jianghu-complete-flowchart-15f8df9f-lightweight-v4.webp",kind:"user-supplied-design-reference",caption:"江湖人生完整流程设计图",originalSize:[6412,766],displaySize:[6412,766],bytes:215864,sourceSha256:"15f8df9f42e6157e4b50ee74d34cb8a18a534fe73e6361eed62bb19586d85385",processing:"原样复制PNG；保留全部节点、文字、连接线与原始比例"}],Yo=[{id:"normal",path:"media/normal.mp4",source:"youxitu/normal_attack_fx_repair_v1/game_three_hit_combo_with_audio.mp4",caption:"普通三连击真实游戏视口帧合成预览；保留对应原声",kind:"native-frame-preview",code:0,bytes:361674,poster:"media/optimized/posters/normal-68576b55-lightweight-v4.webp"},{id:"wushuang",path:"media/wushuang.mp4",source:"youxitu/wushuang_pace_v2/previews/wushuang_pace_v2_gameplay.mp4",caption:"无双节奏迭代实机验收录像，含测试说明字",kind:"native-test-video",code:0,bytes:2429852,poster:"media/optimized/posters/wushuang-9e3439ad-lightweight-v4.webp"},{id:"manual",path:"media/manual.mp4",source:"youxitu/manual_combo_1344333025_v1/previews/manual_combo_gameplay.mp4",caption:"K秘籍学习与左右三连击实机验收录像；秘籍由测试夹具提供，非正式场景掉落",kind:"native-test-video",code:0,bytes:3624048,poster:"media/optimized/posters/manual-43b0e8eb-lightweight-v4.webp"},{id:"map",path:"media/map.mp4",source:"youxitu/map_crumple_v2/map_crumple_normal_with_audio.mp4",caption:"地图纸团展开原生UI验收录像",kind:"native-test-video",code:0,bytes:739632,poster:"media/optimized/posters/map-f4269eb0-lightweight-v4.webp"},{id:"prologue",path:"media/prologue.mp4",source:"youxitu/prologue_ending_v1/previews/prologue_ending_5s.mp4",caption:"序章结束过场成片预览，非玩家操作录像",kind:"cutscene-preview",code:0,bytes:547409,poster:"media/optimized/posters/prologue-0d719cf7-lightweight-v4.webp"}],Wo=[{id:"combat",kind:"combat",href:"combat.html",en:"COMBAT DESIGN",title:"战斗系统",question:"一次按键，如何成为一段清楚、有节奏的攻击？",tags:"输入攻击/ 收招衔接 / 无双状态",showOnHome:!0},{id:"systems",kind:"systems",href:"systems.html",en:"SYSTEM DESIGN",title:"交互系统",question:"用一致的状态规则，串起物品、武学与交互。",tags:"背包系统交互/ 地图系统交互 / 目标提示",showOnHome:!0},{id:"levels",kind:"levels",href:"levels.html",en:"LEVEL DESIGN",title:"关卡策划",question:"如何让玩家知道下一步，同时保留自由探索？",tags:"剧情流程设计 / 木桩教学 / 非强制引导",showOnHome:!0}],Go="开发复盘",Jo=[{title:"无双前两刀收招过长",problem:"无双前两刀收招过长",cause:"独立收招包含大量重复站立尾帧：38帧与29帧。",change:"只精简实际播放序列，保留回拉与落刀；第1段选本地0–11、36–37，第2段选0–12。原PNG留存。",result:"收招时长分别缩短为0.530303与0.492424秒；连续攻击跳过完整收招。第1段原姿势切口仍使用短透明度交接，并非新补画。",status:"已接入；有既有原生回归记录",pending:!1,source:"youxitu/wushuang_pace_v2/README.md；scripts/hero_wushuang_attack_animations.gd:13–16；scripts/hero.gd:1021–1047"},{title:"第三刀慢，突进短",problem:"第三刀慢，突进短",cause:"旧配置主体1.860873秒，实际突进120像素/0.220秒；爆发阶段不够集中。",change:"按阶段重设绝对速度；突刺2.0×、金雷3.0×，突进改为168像素/0.125秒；按同一时间表重定时原声。",result:"主体1.303241秒；蓄势阶段无伤害，实际运动与突刺窗口重合，4像素子步碰撞仍保留。",status:"已接入；有既有原生回归记录",pending:!1,source:"scripts/hero_wushuang_third_animation.gd:11–25；scripts/hero.gd:33–34,1717–1733；scripts/game.gd:2064–2077"},{title:"K第二招缺少完整回站立动作",problem:"K第二招缺少完整回站立动作",cause:"源106–111只回落至低位马步；复用第一招会出现约42–48像素后跳；两次生成草稿的脚底、剑型及像素规格未通过。",change:"不采用复用/失败补画；依照最新接入要求，第二招独停直接idle，连续第三次输入跳过完整收招。",result:"技能功能可用，第二刀独停的姿势突变尚未解决；不能将该妥协写成已补齐自然收招。",status:"功能接入；美术过渡待完善",pending:!0,source:"scripts/hero.gd:814–844；youxitu/recovery_2_fixed_1344333025_v1/analysis/QUALITY_AUDIT.md"},{title:"新增K与原J/无双可能争用动作和声音",problem:"新增K与原J/无双可能争用动作和声音",cause:"多个攻击入口共用Hero与AnimationPlayer，需要避免跨分支续段和暂停时音画分离。",change:"新K保留独立序列标志、单下一段缓存、真实按键筛选及音频暂停同步；原J入口遇K直接拒绝。",result:"既有273项原生检查覆盖未学习拒绝、背包学习、1/2/3次K、左右、存档和暂停；未自动在正式场景投放秘籍。",status:"已接入；获取入口待配置",pending:!0,source:"scripts/game.gd:693–747；scripts/hero.gd:746–844,858–866；youxitu/manual_combo_1344333025_v1/tests/native_results.json"},{title:"提示只在靠近时出现，玩家难判断下一目标",problem:"提示只在靠近时出现，玩家难判断下一目标",cause:"导航显示与近距交互资格耦合",change:"HUD按剧情标志选择单一目标，E执行仍使用原距离／区域条件",result:"留存原生回归验证远处显示且远程E拒绝，靠近后原流程可执行",status:"已接入",pending:!1,source:"scripts/hud.gd:164–229；youxitu/story_interaction_v1/tests/interaction_indicator_results.json"},{title:"开局地图教学可能限制探索或重复要求开图",problem:"开局地图教学可能限制探索或重复要求开图",cause:"教学与模态剧情容易共用控制锁；早开图需处理旧页面",change:"起身结束即恢复playing，使用非阻塞指南；首次关图替换旧引导并只调度一次后续独白",result:"留存测试覆盖真实WASD、提前开图、重复关图、菜单延后和梦境排除",status:"已接入",pending:!1,source:"scripts/opening_sequence.gd:185–265；youxitu/opening_post_map_guide_v1/tests/native_results.json"},{title:"新背包参考图的示例功能与原模型不一致",problem:"新背包参考图的示例功能与原模型不一致",cause:"参考有30格、整理、多装备槽及示例属性，原模型只有25格及武器装备入口",change:"只换底板和动态显示位置，额外5格及整理保持禁用，真实数据继续驱动UI",result:"留存241项换肤检查无失败；整理、卸下并未被伪造为已实现",status:"视觉接入完成；扩展功能未实现",pending:!0,source:"scripts/inventory_ui.gd:363–428,591–689；youxitu/inventory_skin_20261016_v1/README.md",compare:["inventory-before","inventory"]}],Xo={title:Go,items:Jo},Vo=Object.assign({"../content/articles/combat.md":He,"../content/articles/levels.md":Ke,"../content/articles/systems.md":Be}),Zo=Object.assign({"../content/article-structure/combat.json":Xe,"../content/article-structure/levels.json":eo,"../content/article-structure/systems.json":lo}),Qt={};for(const[t,e]of Object.entries(Vo)){const o=t.split("/").pop().replace(/\.md$/,""),i=Zo["../content/article-structure/"+o+".json"];if(!i)throw new Error("Article structure missing: "+o);Qt[o]=Et(co(e,i))}const Qo={site:ko,home:To,copy:No,profile:Ko,media:Bo,videos:Yo,cases:Wo,retrospective:Xo,articles:Qt};let Rt=()=>{},Ut=()=>{},te=()=>"",ee=()=>()=>{},Ot=()=>{},oe=()=>"",ne=()=>()=>{},Ht=()=>{},Kt=()=>{},Bt=()=>{},Yt=()=>{},Wt=()=>{},J=structuredClone(Qo),F,ut,ie,Q,ae,le,re,se,vt,xe,et,dt;function pe(){dt=Ee(J),{site:F,home:ut,copy:ie,profile:Q,media:ae,videos:le,cases:re,retrospective:se}=dt.model,{combat:vt,systems:xe,levels:et}=dt.model.articles}pe();const _=t=>ie.labels[t]??"",St=t=>t.replace(/\[\[copy:([a-zA-Z0-9_]+)\]\]/g,(e,o)=>p(_(o))),p=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),R=t=>p(t).replace(/\r?\n/g,"<br>"),at=t=>{const e=String(t??"").trim();return!e||/[\u0000-\u001f\\]/.test(e)||e.startsWith("//")?"#":/^(?:https?:\/\/|mailto:|#)/i.test(e)?e:/^[a-z][a-z0-9+.-]*:/i.test(e)?"#":e},tn=t=>typeof t=="string"?t:(t==null?void 0:t.body)||(t==null?void 0:t.detail)||(t==null?void 0:t.text)||"",V=t=>Array.isArray(t)?t:[],$t=location.pathname.split("/").pop()||"index.html",H=/^(about|combat|systems|levels|retrospective|case)$/.test($t)?$t+".html":$t,yt=t=>ae.find(e=>e.id===t),en=t=>le.find(e=>e.id===t&&e.code===0&&e.bytes>0),de='<span aria-hidden="true">↗</span>';function G(t,e=""){const o=yt(t);return o?'<figure class="media '+e+'"><a href="./'+p(o.path)+'" target="_blank" rel="noopener"><img src="./'+p(o.preview||o.path)+'" width="'+o.displaySize[0]+'" height="'+o.displaySize[1]+'" alt="'+p(o.caption)+'" loading="lazy" decoding="async"></a><figcaption><span class="media-kind">[[copy:image_002]]</span>'+p(o.caption)+"</figcaption></figure>":'<div class="empty-media">[[copy:image_001]]</div>'}function pt(t,e="hero"){const o=en(t),i=yt(e);return o?'<figure class="media"><video controls playsinline preload="none" '+(o.poster||i?'poster="./'+p(o.poster||i.preview||i.path)+'"':"")+' aria-label="'+p(o.caption)+'"><source src="./'+p(o.path)+'" type="video/mp4">[[copy:movie_002]]</video><figcaption><span class="media-kind">'+(o.kind==="cutscene-preview"?p(_("movie_003")):o.kind==="native-frame-preview"?p(_("movie_004")):o.kind==="ui-animation-preview"?p(_("movie_005")):p(_("movie_006")))+"</span>"+p(o.caption)+"[[copy:movie_007]]</figcaption></figure>":'<div class="empty-media">[[copy:movie_001]]</div>'}function ct(t,e,o=!1){return'<a class="button '+(o?"secondary":"")+'" href="'+p(at(t))+'">'+p(e)+de+"</a>"}function Pt(t){const o={"about.html":"#about-me","combat.html":"#cases","systems.html":"#cases","levels.html":"#cases"}[t];return o?'<div class="detail-page-return"><a class="button secondary detail-return-button" href="./index.html?detail-return=1'+o+'"><span aria-hidden="true">←</span>'+p(ut.systemInteraction.back.label)+"</a></div>":""}function ce(t,e=!1){const o=at(F.profile.resumeUrl);return'<a class="button secondary" href="'+p(o)+'" '+(e?"download":'target="_blank" rel="noopener noreferrer"')+">"+p(t)+de+"</a>"}function _t(t){return'<ul class="clean-list">'+V(t).map(e=>"<li>"+R(tn(e))+"</li>").join("")+"</ul>"}function on(t){return'<ol class="flow">'+V(t).map(e=>"<li><strong>"+p($e(e.title||e.name||e.label||""))+"</strong><small>"+R(e.detail||e.body||e.description)+"</small></li>").join("")+"</ol>"}function zt(t){return'<div class="rules">'+V(t).map(e=>'<div class="rule"><h3>'+p(e.title||e.name)+"</h3><p>"+R(e.body||e.detail||e.description)+"</p></div>").join("")+"</div>"}function _e(t){var e;return(e=t==null?void 0:t.headers)!=null&&e.length?'<div class="table-wrap"><table><thead><tr>'+t.headers.map(o=>'<th scope="col">'+p(o)+"</th>").join("")+"</tr></thead><tbody>"+V(t.rows).map(o=>"<tr>"+o.map(i=>"<td>"+p(i)+"</td>").join("")+"</tr>").join("")+"</tbody></table></div>":""}function nn(t){return'<details><summary>[[copy:evidence_001]]</summary><p class="small">[[copy:evidence_002]]</p><ul class="source-list">'+V(t).map(e=>"<li><code>"+p(typeof e=="string"?e:e.file)+(e.lines?":"+p(e.lines):"")+"</code>"+(e.claim?"<p>"+R(e.claim)+"</p>":"")+"</li>").join("")+"</ul></details>"}function an(t){return'<div class="validation">'+V(t).map(e=>'<div class="validation-item"><span class="validation-icon" aria-hidden="true">◇</span><div><h3>'+p(e.label||e.title)+"</h3><p>"+R(e.result||e.body)+"</p>"+(e.source?"<code>"+p(typeof e.source=="string"?e.source:JSON.stringify(e.source))+"</code>":"")+"</div></div>").join("")+"</div>"}function ln(t,{showSource:e=!0}={}){return V(t).map(o=>'<div class="iteration"><div class="status-row"><span class="badge '+(/待|未|局限|部分|妥协/.test(o.status||"")?"pending":"note")+'">'+p(o.status||_("iterations_001"))+"</span></div><h3>"+p(o.problem||o.title)+"</h3><dl><dt>[[copy:iterations_002]]</dt><dd>"+R(o.cause)+"</dd><dt>[[copy:iterations_003]]</dt><dd>"+R(o.change)+"</dd><dt>[[copy:iterations_004]]</dt><dd>"+R(o.result)+"</dd></dl>"+(e&&o.source?'<p class="small">[[copy:iterations_005]]<code>'+p(typeof o.source=="string"?o.source:JSON.stringify(o.source))+"</code></p>":"")+"</div>").join("")}function O(t,e,o,i){return'<section class="article-section" id="'+t+'"><h2><span class="num">'+e+"</span>"+p(o)+"</h2>"+i+"</section>"}function rn(){return H==="index.html"?'<a class="skip" href="#main">'+p(_("header_002"))+'</a><header class="header cover-header"><div class="cover-header-inner"><nav id="nav" class="nav" aria-label="'+p(_("header_005"))+'">'+F.nav.map(([t,e],o)=>'<a href="./'+p(at(t))+'" style="--nav-order:'+o+'">'+p(e)+"</a>").join("")+"</nav></div></header>":'<a class="skip" href="#main">[[copy:header_002]]</a><header class="header"><div class="wrap header-inner"><a class="brand" href="./index.html" aria-label="[[copy:header_001]]"><span class="brand-mark">[[copy:header_003]]</span><span>'+p(F.brand)+"<small>[[copy:header_004]]"+p(F.version)+'</small></span></a><button class="menu-toggle" aria-expanded="false" aria-controls="nav">[[copy:header_006]]</button><nav id="nav" class="nav" aria-label="[[copy:header_005]]">'+F.nav.map(([t,e])=>'<a href="./'+p(at(t))+'" '+(t===H?'aria-current="page"':"")+">"+p(e)+"</a>").join("")+"</nav></div></header>"}function sn(){return'<footer class="footer"><div class="wrap footer-inner"><div><p>[[copy:footer_001]]</p><p>[[copy:footer_002]]'+p(F.updated)+" / "+p(F.version)+'</p></div><div><p><a href="./about.html#contact">[[copy:footer_003]]</a>　·　<a href="./about.html#contact">[[copy:footer_004]]</a></p><p>[[copy:footer_005]]</p></div></div></footer>'}function ht(t,e,o,i=""){return'<div class="page-head"><div class="wrap"><div class="breadcrumbs"><a href="./index.html">[[copy:pageHead_001]]</a> / '+p(e)+'</div><p class="eyebrow">'+p(t)+"</p><h1>"+p(e)+'</h1><p class="subtitle">'+R(o)+"</p>"+i+"</div></div>"}function fe(){const t=ut;return Ce(t.cover,{playthroughURL:ft(F.profile.demoUrl)})+dn(t.aboutMe)+Zt(t.previews,{playthroughURL:ft(F.profile.demoUrl)})+pn(t.systemAnalysis)+xn(t.ending)}function xn(t){const e=F.profile,o=e.emailApproved&&e.email?'<a class="ending-email" href="mailto:'+p(e.email)+'">'+p(e.email)+"</a>":'<a class="text-link" href="./about.html#contact">'+p(t.contactFallback)+"</a>";return'<section class="section home-ending" id="ending"><div class="wrap home-ending-grid"><div><p class="eyebrow">'+p(t.eyebrow)+"</p><h2>"+p(t.title)+'</h2><p class="ending-copy">'+p(t.intro)+'</p></div><div><p class="ending-contact-label">'+p(t.contactLabel)+"</p>"+o+'<div class="ending-phone"><p class="ending-contact-label">'+p(t.phoneLabel)+'</p><span class="ending-phone-number">'+p(t.phoneNumber)+'</span></div><div class="actions">'+ce(t.resume.label,!0)+ct(t.back.href,t.back.label,!0)+"</div></div></div></section>"}function pn(t){return Me(t)}function dn(t){return t?'<section class="section home-about" id="about-me"><div class="wrap home-about-grid"><div><p class="eyebrow">'+p(t.eyebrow)+"</p><h2>"+p(t.title)+'</h2><div class="about-intro">'+String(t.intro??"").split(/\n\s*\n/).map(e=>"<p>"+R(e)+"</p>").join("")+'</div><div class="actions">'+ce(t.button.label)+ct(t.experienceButton.href,t.experienceButton.label,!0)+'</div></div><dl class="about-facts">'+t.items.map(e=>"<div><dt>"+p(e.label)+"</dt><dd>"+p(e.text)+"</dd></div>").join("")+"</dl></div></section>":""}function cn(){return'<div class="explorer" id="timeline"><h3>[[copy:timelineExplorer_001]]</h3><p class="small">[[copy:timelineExplorer_002]]</p><div class="control-row"><label for="timeline-stage">[[copy:timelineExplorer_003]]</label><select id="timeline-stage">'+vt.timeline.map((t,e)=>'<option value="'+e+'" '+(e===5?"selected":"")+">"+p(t.name)+"</option>").join("")+'</select></div><div class="timeline-track" aria-hidden="true" id="timeline-track"></div><div class="timeline-axis"><span>[[copy:timelineExplorer_004]]</span><span id="timeline-end"></span></div><div class="timeline-legend"><span><i class="legend-dot"></i>[[copy:timelineExplorer_005]]</span><span><i class="legend-dot green"></i>[[copy:timelineExplorer_006]]</span></div><div class="timeline-output" id="timeline-output" aria-live="polite"></div><p class="small">[[copy:timelineExplorer_007]]</p></div>'}function _n(){return'<div class="explorer"><h3>[[copy:interactionExplorer_001]]</h3><p class="small">[[copy:interactionExplorer_002]]</p><div class="control-row"><label for="quest-state">[[copy:interactionExplorer_003]]</label><select id="quest-state"><option value="active">[[copy:interactionExplorer_004]]</option><option value="locked">[[copy:interactionExplorer_005]]</option><option value="done">[[copy:interactionExplorer_006]]</option></select><label class="check-label"><input type="checkbox" id="in-range">[[copy:interactionExplorer_007]]</label></div><div class="interaction-stage"><div class="state-box"><small>[[copy:interactionExplorer_008]]</small><strong id="marker-result"></strong></div><div class="state-box"><small>[[copy:interactionExplorer_009]]</small><strong id="range-result"></strong></div></div><p class="small">[[copy:interactionExplorer_010]]</p></div>'}function fn(){var e,o;return(o=(e=et.map)==null?void 0:e.points)!=null&&o.length?'<div class="explorer"><h3>[[copy:coordinateDiagram_002]]</h3><div class="control-row"><label for="map-scene">[[copy:coordinateDiagram_003]]</label><select id="map-scene">'+[et.map,...V(et.additionalMaps)].map((i,x)=>'<option value="'+x+'">'+p(i.scene)+"</option>").join("")+'</select></div><div id="coordinate-view"></div><p class="small">[[copy:coordinateDiagram_004]]</p></div>':'<p class="truth-note">[[copy:coordinateDiagram_001]]</p>'}function me(t=ut){return{...t.previews,groups:t.previews.groups.map((e,o)=>o===1?{...e,title:t.systemInteraction.title,modules:t.systemInteraction.chapters}:e)}}function mn(){return'<div class="combat-goal-images">'+["combat-goal-attack-sequence","combat-goal-draft-01","combat-goal-draft-02"].map(e=>{const o=yt(e);if(!o)return"";const i="./"+o.path;return'<figure><a href="'+p(i)+'" target="_blank" rel="noopener"><img src="./'+p(o.preview||o.path)+'" width="'+o.originalSize[0]+'" height="'+o.originalSize[1]+'" alt="'+p(o.caption)+'" loading="lazy" decoding="async"></a><figcaption>'+p(o.caption)+"</figcaption></figure>"}).join("")+"</div>"}function gt(t,e){var d;if(t==="systems"){const n=ut.systemInteraction;return ht(n.eyebrow,n.title,n.intro)+Re(n)+Zt(me(),{onlyGroup:1,standalone:!0,chapterLabels:n.labels,endContent:Pt(H)})}const o={combat:_("casePage_001"),systems:_("casePage_002"),levels:_("casePage_003")}[t]||((d=re.find(n=>n.id===new URLSearchParams(location.search).get("case")))==null?void 0:d.en)||_("generic_001"),i=[["goals",_(t==="levels"?"casePage_levels_goals_title":"casePage_004")],["rules",_(t==="levels"?"casePage_levels_rules":"casePage_005")],["demo",_("casePage_006")],["parameters",_("casePage_007")],["implementation",_("casePage_008")],["iterations",t==="levels"?e.uiIterations.title:_("casePage_009")],["validation",_("casePage_010")],["evidence",_("casePage_011")]].filter(([n])=>!["combat","levels"].includes(t)||!["implementation","validation","evidence"].includes(n)),x=t==="combat"?'<div class="media-grid">'+pt("normal","hero")+pt("manual","manual")+"</div>"+pt("wushuang","lightning")+'<div class="media-grid">'+G("recovery")+G("lightning")+"</div>":t==="systems"?G("inventory")+'<div class="media-grid">'+G("cloth")+G("map")+"</div>"+pt("map","map"):t==="levels"?'<div class="media-grid">'+G("guide")+G("dream")+'</div><div class="media-grid">'+G("inn")+G("hot-spring")+"</div>"+pt("prologue","prologue"):'<div class="empty-media">'+p(_("generic_002"))+"</div>",s=_e(e.parameters)+(t==="combat"?cn():t==="systems"?_n():t==="levels"?fn():""),a=O("goals","01",_(t==="levels"?"casePage_levels_goals_title":"casePage_012"),'<div class="two-col"><div class="panel"><h3>'+p(_(t==="levels"?"casePage_levels_goals_label":"casePage_013"))+"</h3>"+_t(e.goals)+'</div><div class="panel"><h3>'+p(_(t==="levels"?"casePage_levels_experience_label":"casePage_014"))+"</h3>"+_t(e.experience)+"</div></div>"+(t==="combat"?mn():t==="levels"?te(yt("level-goal-flowchart")):"")+'<p class="small">[[copy:casePage_015]]</p>')+O("rules","02",_(t==="levels"?"casePage_levels_rules":"casePage_016"),zt(e.rules)+(t==="levels"?"":on(e.flow)))+O("demo","03",_("casePage_006"),x+(t==="generic"?"":'<p class="truth-note">[[copy:casePage_017]]</p>'))+O("parameters","04",_(t==="levels"?"casePage_018":"casePage_019"),s)+(["combat","levels"].includes(t)?"":O("implementation","05",_("casePage_020"),zt(e.implementation)))+O("iterations",t==="combat"?"05":"06",t==="levels"?e.uiIterations.title:_("casePage_021"),t==="levels"?oe(e.uiIterations):ln(e.iterations,{showSource:t!=="combat"}))+(["combat","levels"].includes(t)?"":O("validation","07",_("casePage_022"),an(e.validation)+'<div class="callout"><h3>[[copy:casePage_023]]</h3>'+_t(e.limitations)+"</div>"))+(["combat","levels"].includes(t)?"":O("evidence","08",_("casePage_011"),nn(e.sources)));return ht(o,e.title,e.summary,'<div class="status-row"><span class="badge">'+p(e.status||_("casePage_024"))+'</span><span class="badge pending">[[copy:casePage_025]]</span><span class="badge note">[[copy:casePage_026]]</span></div>')+'<div class="wrap reading-grid"><aside class="toc" aria-label="[[copy:casePage_027]]"><small>[[copy:casePage_028]]</small>'+i.map(([n,c])=>'<a href="#'+n+'">'+p(c)+"</a>").join("")+'</aside><article class="article">'+a+Pt(H)+"</article></div>"}function hn(){return ht(_("review_001"),_("review_002"),_("review_003"))+'<div class="wrap section"><div class="review-grid">'+se.items.map((t,e)=>'<article class="review-step '+(t.compare?"wide":"")+'" id="review-'+(e+1)+'"><p class="eyebrow">[[copy:review_004]]'+(e+1)+'</p><span class="badge '+(t.pending?"pending":"note")+'">'+p(t.status)+"</span><h2>"+p(t.title)+"</h2><dl><dt>[[copy:review_005]]</dt><dd>"+R(t.problem)+"</dd><dt>[[copy:review_006]]</dt><dd>"+R(t.cause)+"</dd><dt>[[copy:review_007]]</dt><dd>"+R(t.change)+"</dd><dt>[[copy:review_008]]</dt><dd>"+R(t.result)+"</dd></dl>"+(t.compare?'<div class="media-grid">'+G(t.compare[0])+G(t.compare[1])+"</div>":"")+'<p class="small">[[copy:iterations_005]]<code>'+p(t.source)+"</code></p></article>").join("")+'</div><p class="truth-note">[[copy:review_009]]</p><div class="actions">'+ct("./combat.html",_("review_010"))+ct("./systems.html",_("review_011"),!0)+ct("./levels.html",_("review_012"),!0)+"</div></div>"}function Gt(t,e,o){const i=F.profile,x=i[t+"Url"];return i[t+"Approved"]&&x&&at(x)!=="#"?'<a class="contact-item active" href="'+p(at(x))+'" target="_blank" rel="noopener noreferrer"><strong>'+p(e)+"</strong><span>[[copy:approvedLink_001]]</span></a>":'<div class="contact-item"><strong>'+p(e)+"</strong><span>"+p(o)+"</span></div>"}function un(){const t=F.profile,e=Q.education,o=Q.training;return ht(_("about_001"),_("about_002"),_("about_003"))+'<div class="wrap section"><section class="article-section profile-lead" id="profile"><div><p class="eyebrow">[[copy:about_004]]</p><h2>'+p(t.nameApproved?t.displayName:_("about_005"))+'</h2><p class="profile-summary">'+p(F.intro)+'</p><div class="roles">'+F.roles.map(i=>'<span class="role">'+p(i)+"</span>").join("")+'</div><p class="small">[[copy:about_006]]</p></div><div class="panel"><p class="meta-label">[[copy:about_007]]</p><h3>'+p(e.school)+"</h3><p>"+p(e.period)+"<br>"+p(e.degree)+'</p><p class="small">[[copy:about_008]]'+e.courses.map(p).join("、")+"。</p></div></section>"+O("training","01",_("about_009"),'<p class="eyebrow">'+p(o.period)+"</p><h3>"+p(o.title)+" · "+p(o.organization)+"</h3><p>"+p(o.project)+'</p><p class="training-note">'+p(o.disclaimer)+"</p>"+_t(o.items))+O("skills","02",_("about_010"),'<div class="profile-grid">'+Q.skills.map(i=>'<div class="skill"><span class="badge note">'+p(i.level)+"</span><h3>"+p(i.name)+"</h3><p>"+R(i.detail)+"</p></div>").join("")+"</div>")+O("games","03",_("about_011"),zt(Q.games.map(i=>({title:i.group,body:i.names+"。"+i.focus})))+'<p class="small">[[copy:about_012]]</p>')+O("awards","04",_("about_013"),_t(Q.awards)+'<p class="small">'+p(Q.awardNote)+"</p>")+O("contact","06",_("about_020"),'<div class="contact-list">'+Gt("resume",_("about_021"),_("about_022"))+Gt("demo",_("about_023"),_("about_024"))+(t.emailApproved&&t.email?'<a class="contact-item active" href="mailto:'+p(t.email)+'"><strong>[[copy:about_025]]</strong><span>'+p(t.email)+"</span></a>":'<div class="contact-item"><strong>[[copy:about_025]]</strong><span>[[copy:about_026]]</span></div>')+'</div><p class="small">[[copy:about_027]]</p>')+Pt(H)+"</div>"}const bn={"index.html":fe,"combat.html":()=>gt("combat",vt),"systems.html":()=>gt("systems",xe),"levels.html":()=>gt("levels",et),"retrospective.html":hn,"about.html":un,"case.html":()=>{const t=new URLSearchParams(location.search).get("case"),e=dt.model.articles[t];return e?gt("generic",e):ht(_("generic_001"),_("generic_003"),_("generic_002"))}};function Lt(){var t,e,o;Rt(),Ut(),Kt(),Ht(),Ot(),Bt(),Yt(),Wt(),pe(),document.body.classList.toggle("immersive-home",H==="index.html"),document.title=ft(((H==="case.html"?(t=J.articles[new URLSearchParams(location.search).get("case")])==null?void 0:t.title:((e=F.nav.find(i=>i[0]===H))==null?void 0:e[1])||((o=F.pageTitles)==null?void 0:o[H]))||_("common_001"))+" · "+F.title),document.querySelector("#app").replaceChildren(Ae(Jt(St(rn()+'<main id="main">'+(bn[H]||fe)()+"</main>"+sn())))),Rt=je(document.querySelector("#app")),gn(),Ot=ee(document.querySelector(".level-goal-flowchart"),J.home.previews.labels),Ht=ne(document.querySelector(".ui-iterations"),J.home.previews.labels),Wt=Ue(document.querySelector(".home-project-previews"),H==="systems.html"?me(J.home):J.home.previews,{catalog:new URLSearchParams(location.search).has("content_catalog")}),Yt=Oe(document.querySelector(".header")),Bt=Ne(document.querySelector(".immersive-cover"),document.querySelector(".cover-header")),Ut=Ie(document.querySelector("#system-analysis"),J.home.systemAnalysis,{catalog:new URLSearchParams(location.search).has("content_catalog")}),Kt=qe(),window.__portfolioContentFields=()=>Se(document.body,dt.fields),ze(),window.dispatchEvent(new CustomEvent("portfolio:preview-rendered")),window.parent!==window&&window.parent.postMessage({type:"portfolio:preview-rendered"},location.origin)}function gn(){var i;(i=document.querySelector(".menu-toggle"))==null||i.addEventListener("click",x=>{const s=x.currentTarget.getAttribute("aria-expanded")!=="true";x.currentTarget.setAttribute("aria-expanded",String(s)),document.querySelector(".nav").classList.toggle("open",s)}),document.querySelectorAll("video:not([data-preview-video])").forEach(x=>x.addEventListener("play",()=>document.querySelectorAll("video:not([data-preview-video])").forEach(s=>{s!==x&&s.pause()})));const t=document.querySelector("#timeline-stage");if(t){let x=function(){const a=vt.timeline[Number(t.value)],d=a.frameDurations||Array.from({length:a.frames},()=>1/a.fps),n=[0];d.forEach(m=>n.push(n.at(-1)+m));const c=n.at(-1),f=Array.isArray(a.active[0])?a.active:[a.active],b=(m,w,r)=>'<span class="'+w+'" style="left:'+n[m[0]]/c*100+"%;width:"+(n[m[1]+1]-n[m[0]])/c*100+'%">'+p(r)+"</span>",y=a.buffer&&a.buffer[0]>=0;document.querySelector("#timeline-track").replaceChildren(Jt(St(f.map(m=>b(m,"timeline-active",_("updateTimeline_001"))).join("")+(y?b(a.buffer,"timeline-buffer",_("updateTimeline_002")):"")))),document.querySelector("#timeline-end").textContent=c.toFixed(3)+"s / "+a.frames+_("updateTimeline_003"),document.querySelector("#timeline-output").textContent=(a.variableSpeed?_("updateTimeline_004"):_("updateTimeline_005")+a.fps+_("updateTimeline_006"))+_("updateTimeline_007")+f.map(m=>m.join("–")).join("、")+(y?_("updateTimeline_008")+a.buffer.join("–"):_("updateTimeline_009"))+_("updateTimeline_010")+a.recoveryFrames+_("updateTimeline_003")+(a.recoveryFrames?" / "+a.recoveryDuration.toFixed(3)+"s":_("updateTimeline_011"))+(a.dash?_("updateTimeline_012")+a.dash.distance+"px / "+a.dash.duration.toFixed(3)+"s":"")};const s=()=>{x(),wt(document.querySelector("#timeline"))};t.addEventListener("change",s),s()}const e=document.querySelector("#quest-state");if(e){let x=function(){const a=e.value==="active",d=document.querySelector("#in-range").checked;document.querySelector("#marker-result").textContent=_(a?"updateRules_001":"updateRules_002"),document.querySelector("#range-result").textContent=_(d?"updateRules_003":"updateRules_004")};const s=()=>{x(),wt(e.closest(".explorer"))};e.addEventListener("change",s),document.querySelector("#in-range").addEventListener("change",s),s()}const o=document.querySelector("#map-scene");if(o){let x=function(){const d=s[Number(o.value)],n=d.bounds,c=n.width,f=n.height,b=r=>r.map(l=>l.join(",")).join(" "),y=V(d.obstacles).map(r=>'<polygon points="'+b(r.polygon)+'" fill="var(--diagram-obstacle)" fill-opacity=".75" stroke="var(--diagram-obstacle-line)" stroke-width="1.5"/>').join(""),m=d.points.map((r,l)=>{const $=d.points.some((T,I)=>I!==l&&Math.hypot(r.x-T.x,r.y-T.y)<32),P=r.x+($?l%2?48:-48:0),A=r.y+($?l%2?-33:33:0);return(r.radius?'<circle cx="'+r.x+'" cy="'+r.y+'" r="'+r.radius+'" fill="var(--gold)" fill-opacity=".07" stroke="var(--gold)" stroke-opacity=".4" stroke-dasharray="6 5"/>':"")+($?'<line x1="'+r.x+'" y1="'+r.y+'" x2="'+P+'" y2="'+A+'" stroke="var(--gold)" stroke-width="2"/><circle cx="'+r.x+'" cy="'+r.y+'" r="4" fill="var(--gold)"/>':"")+'<circle cx="'+P+'" cy="'+A+'" r="15" fill="'+(r.type==="spawn"?"var(--diagram-accent)":"var(--gold)")+'" stroke="var(--ink)" stroke-width="3"/><text x="'+P+'" y="'+(A+6)+'" text-anchor="middle" style="fill:var(--ink)" font-size="18" font-weight="600">'+(l+1)+"</text>"}).join(""),w=Array.from({length:9},(r,l)=>'<line x1="'+c/8*l+'" y1="0" x2="'+c/8*l+'" y2="'+f+'" stroke="var(--diagram-grid)" stroke-width="1"/>').join("")+Array.from({length:7},(r,l)=>'<line x1="0" y1="'+f/6*l+'" x2="'+c+'" y2="'+f/6*l+'" stroke="var(--diagram-grid)" stroke-width="1"/>').join("");document.querySelector("#coordinate-view").innerHTML=St('<svg class="coordinate-map" viewBox="0 0 '+c+" "+f+'" role="img" aria-label="'+p(d.scene)+p(_("updateMap_001"))+'">'+w+'<polygon points="'+b(d.walkPolygon)+'" fill="var(--diagram-walk)" stroke="var(--diagram-accent)" stroke-width="3"/>'+y+m+'</svg><p class="small">'+p(d.coordinateSystem||_("updateMap_002")+c+"×"+f+_("updateMap_003"))+"</p>"+_e({headers:[_("updateMap_004"),_("updateMap_005"),_("updateMap_006")],rows:d.points.map((r,l)=>[String(l+1),r.name,Number(r.x.toFixed(2))+" / "+Number(r.y.toFixed(2))])})+'<p class="small">'+p(d.note||"")+"</p>")};const s=[et.map,...V(et.additionalMaps)],a=()=>{x(),wt(document.querySelector("#coordinate-view"))};o.addEventListener("change",a),a()}}async function wn(){if(H==="levels.html"){const[t,e]=await Promise.all([It(()=>import("./level-goal-flowchart-GE83evRH.js"),__vite__mapDeps([0,1]),import.meta.url),It(()=>import("./ui-iterations-BANuJ6i0.js"),__vite__mapDeps([2,3]),import.meta.url)]);({renderLevelGoalFlowchart:te,mountLevelGoalFlowchart:ee}=t),{renderUIIterations:oe,mountUIIterations:ne}=e}Lt()}wn();const vn=new URLSearchParams(location.search).has("editor_preview")||new URLSearchParams(location.search).has("editorPreview");vn&&(window.addEventListener("message",t=>{var i;if(t.origin!==location.origin||t.source!==window.parent||((i=t.data)==null?void 0:i.type)!=="portfolio:preview")return;const e=structuredClone(J),o=t.data.documents||[{documentId:t.data.documentId,value:t.data.value}];try{for(const{documentId:s,value:a}of o)s.startsWith("article:")?J.articles[s.slice(8)]=structuredClone(a):["site","home","copy","profile","media","videos","cases","retrospective"].includes(s)&&(J[s]=structuredClone(a));const x=scrollY;Lt(),new URLSearchParams(location.search).has("content")||scrollTo(0,x)}catch{J=e,Lt()}}),document.addEventListener("click",t=>{const e=t.target.closest("a[href]");if(!e)return;const o=new URL(e.href);o.origin===location.origin&&o.pathname.endsWith(".html")&&(o.searchParams.set("editor_preview","1"),e.href=o.href)}));window.addEventListener("message",t=>{var e;t.origin!==location.origin||t.source!==window.parent||((e=t.data)==null?void 0:e.type)!=="portfolio:locate"||Xt(String(t.data.contentId||""))});
