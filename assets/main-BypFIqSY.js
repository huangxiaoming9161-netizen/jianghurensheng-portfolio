const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./level-goal-flowchart-GE83evRH.js","./level-goal-flowchart-60QBq8ny.css","./ui-iterations-BANuJ6i0.js","./ui-iterations-CzpnTjmn.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))n(x);new MutationObserver(x=>{for(const l of x)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(x){const l={};return x.integrity&&(l.integrity=x.integrity),x.referrerPolicy&&(l.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?l.credentials="include":x.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(x){if(x.ep)return;x.ep=!0;const l=o(x);fetch(x.href,l)}})();const be="modulepreload",ge=function(t,e){return new URL(t,e).href},It={},At=function(e,o,n){let x=Promise.resolve();if(o&&o.length>0){let a=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then($=>({status:"fulfilled",value:$}),$=>({status:"rejected",reason:$}))))};const c=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),m=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));x=a(o.map(h=>{if(h=ge(h,n),h in It)return;It[h]=!0;const g=h.endsWith(".css"),$=g?'[rel="stylesheet"]':"";if(!!n)for(let r=c.length-1;r>=0;r--){const s=c[r];if(s.href===h&&(!g||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${$}`))return;const w=document.createElement("link");if(w.rel=g?"stylesheet":be,g||(w.as="script"),w.crossOrigin="",w.href=h,m&&w.setAttribute("nonce",m),document.head.appendChild(w),g)return new Promise((r,s)=>{w.addEventListener("load",r),w.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return x.then(a=>{for(const c of a||[])c.status==="rejected"&&l(c.reason);return e().catch(l)})},we="",ve="",ye="",Et=/\uE000([^\uE001]+)\uE001|\uE002/g,$e=new Set(["id","path","href","url","slug","filename","sourceSha256","hash","code","kind","format","preview","imageId","videoId","heroImageId","posterId","type","branch","poster","resumeUrl","demoUrl"]);function ke(t,e,o){let n=o;const x=e.map(l=>{let a=String(l);return Array.isArray(n)&&n[l]&&typeof n[l]=="object"&&typeof n[l].id=="string"&&(a="@"+n[l].id),n=n==null?void 0:n[l],encodeURIComponent(a).replaceAll(".","%2E")});return t.replace(":",".")+"."+x.join(".")}function mt(t){return String(t??"").replace(Et,"")}function Ee(t){return String(t??"").replace(/^(\uE000[^\uE001]+\uE001)?\d+\s+/,(e,o)=>o||"")}function Se(t,e,o){const n=String(e.at(-1));return t==="site"&&e.length===2&&e[0]==="profile"&&n==="demoUrl"?typeof o=="string":typeof o!="string"||$e.has(n)||t==="home"&&e[0]==="shortcuts"||t==="retrospective"&&e.includes("compare")?!1:["media","videos"].includes(t)?n==="caption":!(n==="file"&&!t.startsWith("article:")||e[0]==="nav"&&e.at(-1)===0)}function Pe(t){const e=new Map;function o(x,l){function a(c,i){if(typeof c=="string"){if(!Se(x,i,c))return c;const m=ke(x,i,l);return e.set(m,{id:m,targetId:m,documentId:x,path:i,value:c}),we+m+ve+c+ye}return Array.isArray(c)?c.map((m,h)=>a(m,[...i,h])):c&&typeof c=="object"?Object.fromEntries(Object.entries(c).map(([m,h])=>[m,a(h,[...i,m])])):c}return a(l,[])}const n={};for(const[x,l]of Object.entries(t))n[x]=x==="articles"?Object.fromEntries(Object.entries(l).map(([a,c])=>[a,o("article:"+a,c)])):o(x,l);return{model:n,fields:e}}function gt(t,e){if(!t||!e)return;const o=new Set((t.getAttribute("data-content-ids")||"").split(" ").filter(Boolean));o.add(e),t.setAttribute("data-content-ids",[...o].join(" ")),t.hasAttribute("data-content-id")||t.setAttribute("data-content-id",e)}function jt(t){let e=t[0];for(;e&&!t.every(o=>e.contains(o));)e=e.parentElement;return e}function vt(t){const e=[...t.nodeType===1?[t]:[],...t.querySelectorAll("*")];for(const a of e)for(const c of[...a.attributes]){if(!/[\uE000-\uE002]/.test(c.value))continue;const i=[...c.value.matchAll(/\uE000([^\uE001]+)\uE001/g)].map(m=>m[1]);a.setAttribute(c.name,mt(c.value)),["alt","aria-label","title"].includes(c.name)&&i.forEach(m=>gt(a,m)),c.name==="href"&&i.filter(m=>m==="site.profile.demoUrl").forEach(m=>gt(a,m))}const o=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),n=[];let x;for(;x=o.nextNode();)n.push(x);const l=[];for(const a of n){const c=a.nodeValue;let i=0,m="";Et.lastIndex=0;let h;const g=$=>{m+=$,$&&l.forEach(f=>f.elements.push(a.parentElement))};for(;h=Et.exec(c);){if(g(c.slice(i,h.index)),h[1])l.push({id:h[1],elements:[]});else{const $=l.pop();$&&gt(jt($.elements)||a.parentElement,$.id)}i=h.index+h[0].length}g(c.slice(i)),a.nodeValue=m}for(const a of l)gt(jt(a.elements),a.id);return t}function Vt(t){const e=document.createElement("template");return e.innerHTML=t,vt(e.content)}function ze(t,e){const o=new Map;for(const n of t.querySelectorAll("[data-content-ids]"))if(!n.closest(".entry-copy-in-image,[hidden]")&&!(n.tagName!=="OPTION"&&!n.getClientRects().length&&!n.closest("details:not([open])")))for(const x of n.dataset.contentIds.split(" ")){if(!e.has(x))continue;const l={...e.get(x)};n.tagName==="OPTION"&&(l.state={control:n.parentElement.id,value:n.value}),o.set(x,l)}return[...o.values()]}let Tt=0,Nt=0;async function Zt(t,{smooth:e=!0,announce:o=!0}={}){var $;const n=++Nt;let x=null;const l=new URLSearchParams(location.search).get("content-state");if(l)try{const{control:f,value:w,previewKey:r,scope:s}=JSON.parse(l);if(["cover","cases"].includes(s)&&(x=s),r&&!document.querySelector(".project-preview-lightbox[open]")){const v=[...document.querySelectorAll("[data-preview-open]")].find(A=>A.dataset.previewOpen===r);v==null||v.click()}const E=document.getElementById(f);E instanceof HTMLSelectElement&&[...E.options].some(v=>v.value===String(w))&&(E.value=String(w),E.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}const a=x?document.getElementById(x):null,c=[...document.querySelectorAll("[data-content-ids]")].filter(f=>f.dataset.contentIds.split(" ").includes(t)&&(!x||(a==null?void 0:a.contains(f))));let i=c.find(f=>f.tagName==="H1")||c.find(f=>f.matches("p,.about-intro,dd,figcaption,li,h2,h3"))||c.find(f=>f.tagName!=="OPTION")||c[0];if((i==null?void 0:i.tagName)==="OPTION"&&(i.parentElement.value=i.value,i.parentElement.dispatchEvent(new Event("change",{bubbles:!0})),i=i.parentElement),!i)return o&&Le("该内容目前无法定位"),!1;for(let f=i.parentElement;f;f=f.parentElement)f.tagName==="DETAILS"&&(f.open=!0);if(i.matches(".skip")&&i.focus({preventScroll:!0}),await document.fonts.ready,n!==Nt)return!1;const m=i.getBoundingClientRect(),h=(($=document.querySelector(".header"))==null?void 0:$.getBoundingClientRect().height)||0,g=scrollY+m.top-Math.max(h+24,(innerHeight-Math.min(m.height,innerHeight-h-48))/2);return window.scrollTo({top:Math.max(0,g),behavior:e&&!matchMedia("(prefers-reduced-motion:reduce)").matches?"smooth":"instant"}),clearTimeout(Tt),document.querySelectorAll(".content-locate-highlight").forEach(f=>f.classList.remove("content-locate-highlight")),i.classList.add("content-locate-highlight"),Tt=setTimeout(()=>i.classList.remove("content-locate-highlight"),2e3),!0}function Le(t){var o;(o=document.querySelector(".content-locate-status"))==null||o.remove();const e=document.createElement("div");e.className="content-locate-status",e.role="status",e.textContent=t,document.body.append(e),setTimeout(()=>e.remove(),2400)}function Me(){const t=new URLSearchParams(location.search).get("content");t&&requestAnimationFrame(()=>Zt(t))}const Z=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ht=t=>mt(t).trim(),at=t=>{const e=ht(t).replace(/^\.\//,"");return!e.startsWith("documents/system-breakdowns/")||/[\u0000-\u001f\\?#:]/.test(e)||e.split("/").some(o=>!o||o==="."||o==="..")?"":/\.(?:pdf|png|jpe?g|webp)$/i.test(e)?"./"+e:""},Ct=t=>{const e=Math.round(Number(t==null?void 0:t.width)),o=Math.round(Number(t==null?void 0:t.height));return e>0&&o>0?' width="'+e+'" height="'+o+'"':""},Ie=(t,e)=>/^[a-z][a-z0-9-]*$/.test(ht(t.id))?ht(t.id):"document-"+e;function Ae(t){var o;if(!((o=t==null?void 0:t.items)!=null&&o.length))return"";const e=t.items.map((n,x)=>{var h,g,$,f;const l=Ie(n,x),a=at(((h=n.pdf)==null?void 0:h.path)||((g=n.button)==null?void 0:g.href)),c=at(($=n.pdf)==null?void 0:$.preview),i=(n.mindmaps||[]).find(w=>at(w.path)),m=at((i==null?void 0:i.preview)||(i==null?void 0:i.path));return'<article class="system-breakdown" data-breakdown-id="'+l+'" aria-labelledby="breakdown-title-'+l+'"><h2 id="breakdown-title-'+l+'">'+Z(n.title)+'</h2><div class="system-breakdown-previews"><figure class="system-breakdown-pdf"><a class="system-breakdown-media" href="'+Z(a)+'" target="_blank" rel="noopener noreferrer" aria-label="新标签页查看完整PDF"><img src="'+Z(c)+'"'+Ct(n.pdf)+' alt="PDF首页预览" loading="lazy" decoding="async"></a><figcaption>PDF 文档预览</figcaption></figure><figure class="system-breakdown-mindmap"><button class="system-breakdown-media system-breakdown-enlarge" type="button" data-breakdown-open="'+x+'" aria-label="放大查看完整思维导图"><img src="'+Z(m)+'"'+Ct(i)+' alt="XMind完整思维导图预览" loading="lazy" decoding="async"><span class="system-breakdown-enlarge-hint" aria-hidden="true">点击放大</span></button><figcaption>XMind 思维导图 · 点击放大</figcaption></figure></div><p class="system-breakdown-intro">'+Z(n.intro).replace(/\r?\n/g,"<br>")+'</p><div class="actions"><a class="button" href="'+Z(a)+'" target="_blank" rel="noopener noreferrer">'+Z(((f=n.button)==null?void 0:f.label)||"查看完整文档")+'<span aria-hidden="true">↗</span></a></div></article>'}).join("");return'<section class="section section-tint home-analysis system-breakdowns" id="system-analysis" aria-labelledby="system-breakdowns-label"><div class="wrap system-breakdowns-wrap"><p class="eyebrow" id="system-breakdowns-label">'+Z(t.eyebrow)+'</p><div class="system-breakdowns-grid">'+e+"</div></div></section>"}function je(t,e,{catalog:o=!1}={}){var c;if(!t||!((c=e==null?void 0:e.items)!=null&&c.length)||o)return()=>{};let n=null,x=!1;const l=()=>{if(!n)return;const i=n;n=null,i.controller.abort(),i.dialog.remove();const m=document.body.style;i.overflow?m.setProperty("overflow",i.overflow,i.overflowPriority):m.removeProperty("overflow"),i.padding?m.setProperty("padding-right",i.padding,i.paddingPriority):m.removeProperty("padding-right"),(window.scrollY!==i.scrollY||window.scrollX!==i.scrollX)&&window.scrollTo({left:i.scrollX,top:i.scrollY,behavior:"instant"}),!x&&i.trigger.isConnected&&i.trigger.focus({preventScroll:!0})},a=i=>{var st,xt;const m=(xt=(st=i.target).closest)==null?void 0:xt.call(st,"[data-breakdown-open]");if(!m||!t.contains(m)||i.defaultPrevented||n)return;const h=Number(m.dataset.breakdownOpen),g=e.items[h],$=((g==null?void 0:g.mindmaps)||[]).filter(b=>at(b.path));if(!$.length)return;i.preventDefault();const f=new AbortController,w=f.signal,r=document.createElement("dialog");r.className="system-breakdown-lightbox",r.setAttribute("aria-labelledby","system-breakdown-viewer-title"),r.innerHTML='<header class="system-breakdown-viewer-header"><h2 id="system-breakdown-viewer-title"></h2><button class="system-breakdown-viewer-close" type="button" autofocus aria-label="关闭思维导图预览">关闭 <span aria-hidden="true">×</span></button></header><div class="system-breakdown-viewer-toolbar"><div class="system-breakdown-pages" hidden><button type="button" data-viewer-previous aria-label="上一张思维导图">上一张</button><span data-viewer-page></span><button type="button" data-viewer-next aria-label="下一张思维导图">下一张</button></div><div class="system-breakdown-zoom-controls"><button type="button" data-viewer-out aria-label="缩小思维导图">−</button><output data-viewer-zoom aria-label="当前缩放比例">100%</output><button type="button" data-viewer-in aria-label="放大思维导图">＋</button><button type="button" data-viewer-fit>完整显示</button></div><p>滚轮缩放 · 拖动查看</p></div><div class="system-breakdown-viewer-viewport" tabindex="0" role="region" aria-label="思维导图，可用滚轮缩放、拖动查看，方向键平移，加减键缩放，数字0完整显示"></div>',r.querySelector("h2").textContent=ht(g.title);const s=r.querySelector(".system-breakdown-viewer-viewport"),E=r.querySelector("[data-viewer-zoom]"),v=r.querySelector(".system-breakdown-pages");v.hidden=$.length<2;const A=document.body.style;n={dialog:r,controller:f,trigger:m,overflow:A.getPropertyValue("overflow"),overflowPriority:A.getPropertyPriority("overflow"),padding:A.getPropertyValue("padding-right"),paddingPriority:A.getPropertyPriority("padding-right"),scrollX:window.scrollX,scrollY:window.scrollY};const C=Math.max(0,window.innerWidth-document.documentElement.clientWidth);C&&(A.paddingRight=parseFloat(getComputedStyle(document.body).paddingRight)+C+"px"),A.overflow="hidden";let M,D=0,N=0,q=0,L=1,d=1,y=0,_=0,k=!0,P=null;const I=new Map;window.matchMedia("(pointer: coarse)").matches&&(r.querySelector(".system-breakdown-viewer-toolbar p").textContent="双指缩放 · 单指拖动",s.setAttribute("aria-label","思维导图，可双指缩放、单指拖动查看，也可使用缩放按钮"));const U=()=>({width:s.clientWidth,height:s.clientHeight}),F=()=>{if(!M||!N||!q)return;const b=U(),z=N*L,T=q*L;y=z<=b.width?(b.width-z)/2:Math.max(b.width-z,Math.min(0,y)),_=T<=b.height?(b.height-T)/2:Math.max(b.height-T,Math.min(0,_)),M.style.transform="translate("+y+"px,"+_+"px) scale("+L+")",E.textContent=Math.round(L*100)+"%",s.classList.toggle("is-zoomed",z>b.width+1||T>b.height+1),r.querySelector("[data-viewer-out]").disabled=L<=d*.5+1e-4,r.querySelector("[data-viewer-in]").disabled=L>=Math.max(4,d)-1e-4},j=()=>{if(!N||!q)return;const b=U();d=Math.min(b.width/N,b.height/q,1)*.96,L=d,y=(b.width-N*L)/2,_=(b.height-q*L)/2,k=!0,F()},X=(b,z)=>{if(!M||!N||!q)return;const T=U(),K=s.getBoundingClientRect(),Y=z?{x:z.clientX-K.left,y:z.clientY-K.top}:{x:T.width/2,y:T.height/2},pt=Math.max(d*.5,Math.min(Math.max(4,d),L*b));y=Y.x-(Y.x-y)*pt/L,_=Y.y-(Y.y-_)*pt/L,L=pt,k=!1,F()},nt=b=>{D=(b+$.length)%$.length,N=q=0,P=null,I.clear(),s.classList.remove("is-dragging");const z=new Image;z.className="system-breakdown-viewer-image",z.alt=ht(g.title)+" · 思维导图 "+(D+1),z.draggable=!1;const T=document.createElement("p");T.className="system-breakdown-viewer-status",T.setAttribute("role","status"),T.textContent="正在加载完整思维导图…",M=z,s.replaceChildren(M,T),M.addEventListener("load",()=>{M!==z||!n||(N=z.naturalWidth,q=z.naturalHeight,z.style.width=N+"px",z.style.height=q+"px",T.remove(),j())},{once:!0,signal:w}),M.addEventListener("error",()=>{M===z&&(T.textContent="思维导图暂时无法加载，请关闭后重试。")},{once:!0,signal:w}),M.src=at($[D].path),r.querySelector("[data-viewer-page]").textContent=D+1+" / "+$.length};r.querySelector(".system-breakdown-viewer-close").addEventListener("click",()=>r.close(),{signal:w}),r.addEventListener("close",l,{signal:w}),r.addEventListener("click",b=>{if(b.target!==r)return;const z=r.getBoundingClientRect();(b.clientX<z.left||b.clientX>z.right||b.clientY<z.top||b.clientY>z.bottom)&&r.close()},{signal:w}),r.addEventListener("wheel",b=>{b.preventDefault(),b.stopPropagation()},{passive:!1,signal:w}),s.addEventListener("wheel",b=>{b.preventDefault(),b.stopPropagation();const z=b.deltaY*(b.deltaMode===1?16:b.deltaMode===2?s.clientHeight:1);X(Math.exp(Math.max(-.3,Math.min(.3,-z*.0015))),b)},{passive:!1,signal:w});const rt=()=>{const b=[...I.values()];if(!b.length)P=null,s.classList.remove("is-dragging");else if(b.length===1)P={kind:"pan",point:b[0],x:y,y:_},s.classList.add("is-dragging");else{const[z,T]=b,K=s.getBoundingClientRect(),Y=(z.x+T.x)/2-K.left,pt=(z.y+T.y)/2-K.top;P={kind:"pinch",distance:Math.max(1,Math.hypot(T.x-z.x,T.y-z.y)),scale:L,anchorX:(Y-y)/L,anchorY:(pt-_)/L},s.classList.add("is-dragging")}};s.addEventListener("pointerdown",b=>{b.button!==0||!N||I.size>=2||(b.preventDefault(),s.focus({preventScroll:!0}),I.set(b.pointerId,{x:b.clientX,y:b.clientY}),s.setPointerCapture(b.pointerId),rt())},{signal:w}),s.addEventListener("pointermove",b=>{if(!(!P||!I.has(b.pointerId))){if(b.preventDefault(),I.set(b.pointerId,{x:b.clientX,y:b.clientY}),P.kind==="pinch"&&I.size===2){const[z,T]=[...I.values()],K=s.getBoundingClientRect(),Y=Math.hypot(T.x-z.x,T.y-z.y);L=Math.max(d*.5,Math.min(Math.max(4,d),P.scale*Y/P.distance)),y=(z.x+T.x)/2-K.left-P.anchorX*L,_=(z.y+T.y)/2-K.top-P.anchorY*L}else y=P.x+b.clientX-P.point.x,_=P.y+b.clientY-P.point.y;k=!1,F()}},{signal:w});const it=b=>{I.delete(b.pointerId)&&rt()};s.addEventListener("pointerup",it,{signal:w}),s.addEventListener("pointercancel",it,{signal:w}),s.addEventListener("lostpointercapture",it,{signal:w}),s.addEventListener("keydown",b=>{if(!(b.ctrlKey||b.metaKey||b.altKey)){if(["+","="].includes(b.key))X(1.25);else if(["-","_"].includes(b.key))X(.8);else if(b.key==="0")j();else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(b.key))y+=b.key==="ArrowLeft"?60:b.key==="ArrowRight"?-60:0,_+=b.key==="ArrowUp"?60:b.key==="ArrowDown"?-60:0,k=!1,F();else return;b.preventDefault(),b.stopPropagation()}},{signal:w}),r.querySelector("[data-viewer-out]").addEventListener("click",()=>X(.8),{signal:w}),r.querySelector("[data-viewer-in]").addEventListener("click",()=>X(1.25),{signal:w}),r.querySelector("[data-viewer-fit]").addEventListener("click",j,{signal:w}),r.querySelector("[data-viewer-previous]").addEventListener("click",()=>nt(D-1),{signal:w}),r.querySelector("[data-viewer-next]").addEventListener("click",()=>nt(D+1),{signal:w}),window.addEventListener("resize",()=>{k?j():F()},{signal:w}),document.body.append(r);try{r.showModal(),nt(0)}catch{l()}};return t.addEventListener("click",a),()=>{x=!0,t.removeEventListener("click",a),l()}}function Te(t){for(const e of t.querySelectorAll('img[loading="lazy"][src]'))e.dataset.lazySrc=e.getAttribute("src"),e.removeAttribute("src");for(const e of t.querySelectorAll("video[poster]"))e.dataset.lazyPoster=e.getAttribute("poster"),e.removeAttribute("poster");return t}function Ne(t=document){const e=new AbortController,o=e.signal,n=new Set;let x=!1;const l=s=>{if(x)return;const E=s.dataset.lazySrc;if(E){const v=()=>{if(x||s.dataset.mediaRetry==="1")return;s.dataset.mediaRetry="1";const A=setTimeout(()=>{n.delete(A),!x&&s.isConnected&&(s.src=E)},1200);n.add(A)};s.addEventListener("error",v,{signal:o}),s.src=E,delete s.dataset.lazySrc}s.dataset.lazyPoster&&(s.poster=s.dataset.lazyPoster,delete s.dataset.lazyPoster)},a="IntersectionObserver"in window?new IntersectionObserver(s=>{for(const E of s)E.isIntersecting&&(l(E.target),a.unobserve(E.target))},{rootMargin:"240px 0px",threshold:0}):null;for(const s of t.querySelectorAll("[data-lazy-src],[data-lazy-poster]"))a?a.observe(s):l(s);const c=[...t.querySelectorAll(".cover-art,.cover-blur-art,.cover-action-blur-art")];let i=!1;const m=()=>{if(x||i)return;i=!0;const s=setTimeout(()=>{n.delete(s),x||c.forEach(E=>{E.isConnected&&!E.naturalWidth&&(E.src=E.getAttribute("src"))})},1200);n.add(s)};c.forEach(s=>s.addEventListener("error",m,{signal:o}));const h=()=>t.querySelectorAll("img[src]").forEach(s=>{if(!s.complete||s.naturalWidth)return;const E=s.getBoundingClientRect();E.bottom>=-240&&E.top<=innerHeight+240&&(delete s.dataset.mediaRetry,s.src=s.getAttribute("src"))});window.addEventListener("online",h,{signal:o});const g=()=>{if(!document.body.hasAttribute("data-defer-atmosphere"))return;const s=document.getElementById("cover");(!s||scrollY>s.offsetHeight-innerHeight*.6)&&(document.body.classList.add("atmosphere-ready"),window.removeEventListener("scroll",g))};document.body.hasAttribute("data-defer-atmosphere")&&(window.addEventListener("scroll",g,{passive:!0,signal:o}),g());const $=document.getElementById("cover"),f=$&&"IntersectionObserver"in window?new IntersectionObserver(s=>{for(const E of s)$.classList.toggle("is-offscreen",!E.isIntersecting)},{threshold:0}):null;f&&f.observe($);const w=[...t.querySelectorAll("video:not([data-preview-video])")],r="IntersectionObserver"in window?new IntersectionObserver(s=>{for(const E of s)E.isIntersecting||E.target.pause()},{threshold:0}):null;return w.forEach(s=>r==null?void 0:r.observe(s)),document.addEventListener("visibilitychange",()=>{document.hidden&&w.forEach(s=>s.pause())},{signal:o}),()=>{x=!0,e.abort(),a==null||a.disconnect(),f==null||f.disconnect(),r==null||r.disconnect(),n.forEach(clearTimeout),n.clear()}}function Qt(t){const e=String(t??"");if(e.length>2e3||!/^https:\/\/(?:www\.)?bilibili\.com\//i.test(e)||/[\s\\\u0000-\u001f\u007f]/.test(e))return"#";try{const o=new URL(e);return o.protocol==="https:"&&["www.bilibili.com","bilibili.com"].includes(o.hostname)&&!o.username&&!o.password&&!o.port&&/^\/video\/BV[0-9A-Za-z]{10}\/?$/.test(o.pathname)?o.href:"#"}catch{return"#"}}const W=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Ce(){const t=[2,2.5,3,3.5,4,4.5,5],e=[18,22,26,30,24,20,28],o=[.5,.6,.7,.8,.85],n=[18,-30,24,-18,35,-22],x=[8,-12,10,-9,14,-11];return'<div class="cover-snow" aria-hidden="true">'+Array.from({length:84},(l,a)=>{const c=a%19===0,i=c?16:e[a%e.length],m=Math.sin((a+1)*78.233)*43758.5453,h=m-Math.floor(m);return'<span class="cover-snowflake" style="--snow-x:'+(2+a*.38196601125%1*96).toFixed(3)+"%;--snow-size:"+(c?5.5:t[a%t.length])+"px;--snow-duration:"+i+"s;--snow-delay:"+(-h*i).toFixed(3)+"s;--snow-opacity:"+o[a%o.length]+";--snow-drift:"+n[a%n.length]+"px;--snow-sway:"+x[a%x.length]+'px"></span>'}).join("")+"</div>"}function qe(t,e={}){const o=t.image,n=/^media\/[a-z0-9_./-]+\.(?:webp|png|jpg)$/i.test(o.path)&&!o.path.includes("..")?"./"+o.path:"",x='<div class="cover-action-blur" aria-hidden="true"><img class="cover-action-blur-art" src="'+W(n)+'" width="'+Number(o.width)+'" height="'+Number(o.height)+'" alt="" decoding="async"></div>';return'<section class="immersive-cover is-loading" id="cover" aria-labelledby="cover-title"><div class="cover-art-stage"><div class="cover-visual"><img class="cover-art" src="'+W(n)+'" width="'+Number(o.width)+'" height="'+Number(o.height)+'" alt="'+W(o.alt)+'" fetchpriority="high" decoding="async"><div class="cover-blur" aria-hidden="true"><img class="cover-blur-art" src="'+W(n)+'" width="'+Number(o.width)+'" height="'+Number(o.height)+'" alt="" decoding="async"></div>'+x+Ce()+'<div class="cover-shade" aria-hidden="true"></div></div><div class="cover-copy-parallax"><div class="cover-copy"><p class="cover-eyebrow">'+W(t.eyebrow)+'</p><h1 id="cover-title">'+W(t.title)+'</h1><p class="cover-subtitle">'+W(t.subtitle)+'</p><p class="cover-project">'+W(t.project)+'</p></div></div></div><div class="cover-primary-actions"><a class="cover-primary-action" href="'+W(Qt(e.playthroughURL))+'" target="_blank" rel="noopener noreferrer" data-content-ids="site.profile.demoUrl"><span>'+W(t.actions.playthrough.label)+'</span></a><a class="cover-primary-action" href="#ending" data-cover-contact><span>'+W(t.actions.contact.label)+"</span></a></div></section>"}function De(t,e){if(!t)return()=>{};const o=matchMedia("(prefers-reduced-motion: reduce)"),n=new URLSearchParams(location.search).has("editor_preview")||new URLSearchParams(location.search).has("editorPreview");let x=!1,l=0;const a=[...document.querySelectorAll("#about-me>.wrap,#cases>.wrap,#system-analysis>.wrap,#ending>.wrap")];document.body.classList.toggle("cover-preview-static",n),document.body.classList.toggle("home-motion-enabled",!o.matches&&!n);const c=()=>{l=0,!x&&(t.style.setProperty("--cover-drift",(o.matches||n?0:Math.min(12,Math.max(0,scrollY)*.018))+"px"),e==null||e.classList.toggle("cover-header-solid",scrollY>40))},i=()=>{l||(l=requestAnimationFrame(c))},m=()=>{x||(t.classList.remove("is-loading"),t.classList.add("is-ready"),document.body.classList.add("cover-ready"))};n?m():t.querySelector("img.cover-art").decode().catch(()=>{}).then(m);const h=new IntersectionObserver(f=>{f.forEach(w=>{w.isIntersecting&&(w.target.classList.add("is-visible"),h.unobserve(w.target))})},{threshold:.08,rootMargin:"0px 0px -50px 0px"});a.forEach(f=>{f.classList.add("cover-reveal"),n||o.matches?f.classList.add("is-visible"):h.observe(f)});const g=()=>{document.body.classList.toggle("home-motion-enabled",!o.matches&&!n),o.matches&&a.forEach(f=>f.classList.add("is-visible")),c()},$=f=>{const w=f.target.closest("[data-cover-contact]");if(!w||f.defaultPrevented||f.button!==0||f.metaKey||f.ctrlKey||f.shiftKey||f.altKey)return;const r=document.getElementById("ending");r&&(f.preventDefault(),history.pushState(null,"",w.href),r.scrollIntoView({block:"start",behavior:o.matches?"instant":"smooth"}))};return t.addEventListener("click",$),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i,{passive:!0}),o.addEventListener("change",g),c(),()=>{x=!0,cancelAnimationFrame(l),h.disconnect(),t.removeEventListener("click",$),window.removeEventListener("scroll",i),window.removeEventListener("resize",i),o.removeEventListener("change",g),document.body.classList.remove("cover-ready","home-motion-enabled","cover-preview-static")}}const Q=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),qt=t=>/^media\/[a-z0-9_./-]+\.(?:png|webp)$/i.test(t)&&!t.includes("..")?"./"+t:"";function Fe(t){var e;return(e=t==null?void 0:t.items)!=null&&e.length?'<nav class="home-shortcuts entry-strip" id="portfolio-shortcuts" aria-label="'+Q(t.label)+'"><div class="entry-grid">'+t.items.map(o=>{const n=o.image,x=o.frame,l=o.composition,a=/^#(?:about-me|cases|system-analysis)$/.test(o.href)?o.href:"#",c=n.visibleBounds,i="--entry-aspect:"+c.width/c.height+";--image-width:"+100*n.width/c.width+"%;--image-height:"+100*n.height/c.height+"%;--image-left:"+-100*c.x/c.width+"%;--image-top:"+-100*c.y/c.height+"%;--entry-art-height:"+Number(l.artHeight)+"px;--entry-art-left:"+Number(l.artLeft)+"px;--entry-art-bottom:"+Number(l.artBottom)+"px";return'<a class="home-shortcut entry-card" href="'+Q(a)+'" aria-label="'+Q(o.title+" / "+o.subtitle)+'" style="'+i+'"><img class="entry-frame" src="'+Q(qt(x.path))+'" width="'+Number(x.width)+'" height="'+Number(x.height)+'" alt="" loading="lazy" decoding="async"><span class="entry-art"><span class="entry-art-crop"><img src="'+Q(qt(n.path))+'" width="'+Number(n.width)+'" height="'+Number(n.height)+'" alt="" loading="lazy" decoding="async"></span></span><span class="entry-copy entry-copy-in-image"><span class="shortcut-label">'+Q(o.title)+'</span><span class="entry-subtitle">'+Q(o.subtitle)+"</span></span></a>"}).join("")+"</div></nav>":""}function Re(){const t=new URLSearchParams(location.search);if(!document.body.classList.contains("immersive-home")||window.parent!==window||["editor_preview","editorPreview","content_catalog"].some(d=>t.has(d)))return()=>{};const e=[...document.querySelectorAll("main > section")],o=new Set(["cover","entry-navigation","about-me","ending"]),n=e.filter(d=>o.has(d.id)),x=document.getElementById("cases"),l=document.getElementById("portfolio-shortcuts"),a=document.querySelector(".cover-header"),c=[...n,...a?[a]:[]],i=matchMedia("(prefers-reduced-motion: reduce)"),m=matchMedia("(min-width: 1024px)"),h=d=>window.scrollY+d.getBoundingClientRect().top,g=d=>Math.max(0,Math.min(d,document.documentElement.scrollHeight-innerHeight)),$=d=>d.getBoundingClientRect().height<=innerHeight+2;let f=null,w=0,r=-1/0,s=!1;const E=()=>{cancelAnimationFrame(w),w=0,f=null},v=()=>{E(),r=-1/0},A=(d,y,_=null)=>{E();const k=g(d);if(i.matches){window.scrollTo({top:k,behavior:"instant"});return}const P={kind:y,source:_,start:scrollY,end:k,written:scrollY,time:performance.now(),duration:y==="wheel"?760:720};f=P;const I=U=>{if(w=0,s||f!==P)return;if(Math.abs(scrollY-P.written)>3){E();return}const F=Math.min(1,(U-P.time)/P.duration),j=y==="wheel"?F<.5?4*F**3:1-(-2*F+2)**3/2:1-(1-F)**3;window.scrollTo({top:P.start+(P.end-P.start)*j,behavior:"instant"}),P.written=scrollY,F<1?w=requestAnimationFrame(I):f=null};w=requestAnimationFrame(I)},C=(d,y)=>{if(!(d instanceof Element)||d.closest('input,textarea,select,video,audio,[contenteditable]:not([contenteditable="false"]),dialog'))return!0;for(let _=d;_&&_!==y;_=_.parentElement)if(_.scrollHeight>_.clientHeight+1&&/^(auto|scroll)$/.test(getComputedStyle(_).overflowY))return!0;return!1},M=d=>{const y=d.currentTarget===a?(f==null?void 0:f.source)||n.find(U=>Math.abs(scrollY-h(U))<=2):d.currentTarget;if(!y||!m.matches||i.matches||d.defaultPrevented||!d.cancelable||d.ctrlKey||d.metaKey||d.altKey||d.shiftKey||!d.deltaY||Math.abs(d.deltaX)>=Math.abs(d.deltaY)||document.querySelector("dialog[open]")||document.body.style.overflow==="hidden"||C(d.target,y)){E();return}const _=x?h(x):1/0;if(x&&scrollY>=_-2&&scrollY<_+x.offsetHeight-2){E();return}if((f==null?void 0:f.kind)==="link"){E();return}const k=performance.now();if((f==null?void 0:f.kind)==="wheel"){d.preventDefault(),r=k;return}if(!$(y)||Math.abs(scrollY-h(y))>2)return;if(k-r<180){d.preventDefault(),r=k;return}const P=Math.sign(d.deltaY),I=e[e.indexOf(y)+P];I&&(!o.has(I.id)&&!(y.id==="about-me"&&I===x&&P>0)||o.has(I.id)&&!$(I)||(d.preventDefault(),r=k,A(h(I),"wheel",y)))},D=d=>{const y=d.target.closest(".entry-card[href]");if(!y||!l.contains(y)||d.defaultPrevented||d.button!==0||d.metaKey||d.ctrlKey||d.shiftKey||d.altKey)return;const _=new URL(y.href,location.href);if(_.origin!==location.origin||_.pathname!==location.pathname||!_.hash)return;const k=document.getElementById(decodeURIComponent(_.hash.slice(1)));if(!k)return;d.preventDefault(),location.href!==_.href&&history.pushState(null,"",_.href),r=-1/0;const P=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0;A(h(k)-P,"link")},N=d=>{["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," ","Escape"].includes(d.key)&&v()},q=d=>{var y,_;(_=(y=d.target).closest)!=null&&_.call(y,"a[href]")&&v()},L=d=>{var y;d.origin===location.origin&&["portfolio:locate","portfolio:preview"].includes((y=d.data)==null?void 0:y.type)&&v()};return c.forEach(d=>d.addEventListener("wheel",M,{passive:!1})),l==null||l.addEventListener("click",D),document.addEventListener("click",q,!0),window.addEventListener("pointerdown",v,{passive:!0}),window.addEventListener("keydown",N),window.addEventListener("resize",v,{passive:!0}),window.addEventListener("popstate",v),window.addEventListener("hashchange",v),window.addEventListener("message",L),i.addEventListener("change",v),m.addEventListener("change",v),()=>{s=!0,v(),c.forEach(d=>d.removeEventListener("wheel",M)),l==null||l.removeEventListener("click",D),document.removeEventListener("click",q,!0),window.removeEventListener("pointerdown",v),window.removeEventListener("keydown",N),window.removeEventListener("resize",v),window.removeEventListener("popstate",v),window.removeEventListener("hashchange",v),window.removeEventListener("message",L),i.removeEventListener("change",v),m.removeEventListener("change",v)}}const S=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),et=t=>/^media\/[a-z0-9_./-]+\.(?:webp|png|jpg|jpeg|mp4)$/i.test(t??"")&&!t.includes("..")?"./"+t:"",Ue=t=>/^\.\/[a-z0-9-]+\.html(?:#[a-z0-9-]+)?$/i.test(t??"")?t:"#";function Oe(t,e){if(!t)return"";const o=S(Qt(e));return'<div class="project-full-playthrough" id="full-playthrough"><a class="project-full-playthrough-cover" href="'+o+'" target="_blank" rel="noopener noreferrer" aria-label="'+S(t.title)+'"><img src="'+S(et(t.preview||t.path))+'" width="'+Number(t.width)+'" height="'+Number(t.height)+'" alt="'+S(t.title)+'" loading="lazy" decoding="async"></a><div><h3>'+S(t.title)+"</h3><p>"+S(t.intro)+'</p><a class="text-link" href="'+o+'" target="_blank" rel="noopener noreferrer" data-content-ids="site.profile.demoUrl">'+S(t.label)+' <span aria-hidden="true">↗</span></a></div></div>'}function te(t,e={}){var x;if(!((x=t==null?void 0:t.groups)!=null&&x.length))return"";const o=t.labels||{},n=t.groups.map((l,a)=>{if(Number.isInteger(e.onlyGroup)&&e.onlyGroup!==a)return"";const c=(r,s,E=!1)=>(r||[]).map((v,A)=>{const C=et(v.path),M=et(v.preview)||C,D=et(v.videoPoster||v.poster),N=v.type==="video",q=C?N?'<video data-preview-video data-src="'+S(C)+'"'+(D?' poster="'+S(D)+'"':"")+' width="'+Number(v.width||1280)+'" height="'+Number(v.height||720)+'" muted loop playsinline preload="none" aria-label="'+S(v.alt)+'">'+S(o.videoFallback)+"</video>":'<img src="'+S(M)+'" width="'+Number(v.width||1280)+'" height="'+Number(v.height||720)+'" alt="'+S(v.alt)+'" loading="lazy" decoding="async">':'<span class="project-preview-empty">'+S(v.pendingLabel||o.pending)+"</span>",L=a+":"+(s===void 0?"":s+":")+A;return'<figure class="project-preview-item">'+(C?'<button class="project-preview-open" type="button" '+(E?"data-preview-comparison":"data-preview-open")+'="'+L+'" aria-label="'+S(o.open+v.title)+'">'+q+"</button>":'<div class="project-preview-open project-preview-placeholder" role="img" aria-label="'+S(v.pendingLabel||o.pending)+'">'+q+"</div>")+"<figcaption><strong>"+S(v.title)+"</strong><span>"+S(v.kindLabel)+(C?" · "+S(o.enlarge):"")+"</span></figcaption>"+(s!==void 0&&v.description?'<p class="system-showcase-description">'+S(v.description)+"</p>":"")+(s!==void 0&&C&&v.pendingLabel?'<p class="system-showcase-pending">'+S(v.pendingLabel)+"</p>":"")+(s!==void 0&&v.note?'<p class="system-showcase-note">'+S(v.note)+"</p>":"")+"</figure>"}).join(""),i=["combat-design","system-design","level-design"][a]||"project-preview-"+a,m=e.standalone?"":'<div class="project-preview-heading"><'+(t.title?"h3":"h2")+' id="preview-group-'+a+'">'+(l.number?'<span class="project-preview-number">'+S(l.number)+"</span> ":"")+S(l.title)+"</"+(t.title?"h3":"h2")+"></div>",h=e.standalone?"h2":"h3",g=e.chapterLabels||{},$=e.standalone&&Array.isArray(l.modules)?l.modules.map((r,s)=>{var D,N,q;const E=/^[a-z][a-z0-9-]*$/.test(r.id||"")?r.id:"system-chapter-"+s,v=r.goal?'<h3 class="system-detail-label">'+S(g.goal)+'</h3><p class="system-detail-text">'+S(r.goal)+"</p>":"",A=(D=r.rules)!=null&&D.length?'<h3 class="system-detail-label">'+S(g.rules)+'</h3><ul class="system-detail-rules">'+r.rules.map(L=>"<li>"+S(L)+"</li>").join("")+"</ul>":"",C=r.audio&&/^media\/[a-z0-9_./-]+\.wav$/i.test(r.audio.path||"")&&!r.audio.path.includes("..")?'<figure class="system-detail-audio"><figcaption>'+S(r.audio.label)+'</figcaption><audio data-system-audio controls preload="none" src="./'+S(r.audio.path)+'" aria-label="'+S(r.audio.label)+'"></audio></figure>':"",M=(N=r.optimisation)!=null&&N.length?'<h3 class="system-detail-label">'+S(g.optimisation)+"</h3>"+r.optimisation.map(L=>'<p class="system-detail-text">'+S(L)+"</p>").join(""):"";return'<section class="system-showcase-module" id="'+E+'" aria-labelledby="system-module-'+s+'"><'+h+' id="system-module-'+s+'">'+(r.number?'<span class="project-preview-number">'+S(r.number)+"</span> ":"")+S(r.title)+"</"+h+">"+v+(g.media?'<h3 class="system-detail-label">'+S(g.media)+"</h3>":"")+'<div class="project-preview-grid">'+c(r.items,s)+"</div>"+A+C+M+((q=r.comparison)!=null&&q.length?'<div class="system-detail-comparison">'+c(r.comparison,s,!0)+"</div>":"")+"</section>"}).join(""):"",f=!e.standalone&&l.detail?'<p class="project-preview-detail"><a class="text-link" href="'+S(Ue(l.detail.href))+'">'+S(l.detail.label)+' <span aria-hidden="true">↗</span></a></p>':"",w=$||'<div class="project-preview-grid">'+c(l.items)+'</div><p class="project-preview-description">'+S(l.intro)+"</p>"+f;return'<section class="project-preview-group'+($?" system-showcase":"")+'" id="'+i+'"'+(e.standalone?' aria-label="'+S(l.title)+'"':' aria-labelledby="preview-group-'+a+'"')+">"+m+w+"</section>"}).join("");return'<section class="section home-project-previews'+(e.standalone?" system-showcase-page":"")+'" id="cases"><div class="wrap">'+(!e.standalone&&t.eyebrow?'<header class="home-project-lead"><p class="eyebrow">'+S(t.eyebrow)+"</p>"+(t.title?"<h2>"+S(t.title)+"</h2>":"")+Oe(t.playthrough,e.playthroughURL)+"</header>":"")+n+(e.endContent||"")+"</div></section>"}function He(t){const e=(t.chapters||[]).filter(o=>/^[a-z][a-z0-9-]*$/.test(o.id||"")).map(o=>'<a href="#'+S(o.id)+'">'+S(o.number+" "+o.title)+"</a>").join("");return'<div class="system-detail-navigation"><div class="wrap"><nav aria-label="'+S(t.navigationLabel)+'">'+e+"</nav></div></div>"}function Be(t,e,{catalog:o=!1}={}){if(!t||!e)return()=>{};const n=e.labels||{},x=[...t.querySelectorAll("audio[data-system-audio]")];x.forEach(_=>{_.volume=.126});const l=[...t.querySelectorAll("video[data-preview-video]")],a=new Map,c=new Set;let i=!1,m=!1,h,g,$,f,w=!1,r=null,s=0;const E=_=>!o&&!i&&!document.hidden&&!m&&_===r&&a.has(_),v=()=>{if(o||i||document.hidden||m)return null;const _=window.innerWidth||document.documentElement.clientWidth,k=window.innerHeight||document.documentElement.clientHeight,P=F=>{const j=F.getBoundingClientRect(),X=Math.abs(j.top+j.height/2-k/2)/k+Math.abs(j.left+j.width/2-_/2)/_;return a.get(F)*2-X};let I=null,U=-1/0;for(const F of a.keys()){const j=P(F);j>U&&(I=F,U=j)}return r&&a.has(r)&&P(r)>=U-.1?r:I},A=_=>{if(!E(_)){_.pause();return}c.has(_)||!_.paused&&_.getAttribute("src")||(_.muted=_.defaultMuted=!0,_.getAttribute("src")||(_.src=_.dataset.src),c.add(_),Promise.resolve(_.play()).then(()=>{var k;(k=_.closest(".project-preview-open"))==null||k.classList.remove("is-play-blocked")}).catch(()=>{var k;(k=_.closest(".project-preview-open"))==null||k.classList.add("is-play-blocked")}).finally(()=>{c.delete(_),E(_)||_.pause()}))},C=()=>{r=v(),l.forEach(A)},M=()=>{!s&&a.size&&(s=requestAnimationFrame(()=>{s=0,C()}))},D=new IntersectionObserver(_=>{_.forEach(k=>{k.isIntersecting&&k.intersectionRatio>=.2?a.set(k.target,k.intersectionRatio):a.delete(k.target)}),C()},{threshold:[0,.2,.5,.75,1]});l.forEach(_=>D.observe(_));const N=()=>{g instanceof HTMLVideoElement&&(g.pause(),g.removeAttribute("src"),g.load()),g=null},q=()=>{m&&(m=!1,document.body.style.overflow=f,N(),h.querySelector(".project-preview-lightbox-content").replaceChildren(),C(),$!=null&&$.isConnected&&$.focus({preventScroll:!0}))},L=()=>{h||(h=document.createElement("dialog"),h.className="project-preview-lightbox",h.setAttribute("aria-labelledby","project-preview-lightbox-title"),h.innerHTML='<div class="project-preview-lightbox-header"><h2 id="project-preview-lightbox-title"></h2><button class="project-preview-close" type="button" autofocus data-content-id="home.previews.labels.close" data-content-ids="home.previews.labels.close">'+S(n.close)+'</button></div><div class="project-preview-lightbox-content"></div>',h.querySelector(".project-preview-close").addEventListener("click",()=>h.close()),h.addEventListener("close",q),h.addEventListener("click",_=>{const k=h.getBoundingClientRect();_.target===h&&(_.clientX<k.left||_.clientX>k.right||_.clientY<k.top||_.clientY>k.bottom)&&h.close()}),document.body.append(h))},d=_=>{var nt,rt,it,st,xt,b,z,T,K,Y;const k=_.target.closest("[data-preview-open],[data-preview-comparison]");if(!k||!t.contains(k))return;const P=(k.dataset.previewComparison||k.dataset.previewOpen).split(":").map(Number),[I,U,F]=P,j=k.dataset.previewComparison?(st=(it=(rt=(nt=e.groups[I])==null?void 0:nt.modules)==null?void 0:rt[U])==null?void 0:it.comparison)==null?void 0:st[F]:P.length===3?(T=(z=(b=(xt=e.groups[I])==null?void 0:xt.modules)==null?void 0:b[U])==null?void 0:z.items)==null?void 0:T[F]:(Y=(K=e.groups[I])==null?void 0:K.items)==null?void 0:Y[U],X=et(j==null?void 0:j.path);X&&(L(),N(),$=k,m||(f=document.body.style.overflow),m=!0,C(),h.querySelector("#project-preview-lightbox-title").textContent=j.title+" · "+j.kindLabel,g=document.createElement(j.type==="video"?"video":"img"),j.type==="video"?(g.controls=g.loop=g.playsInline=!0,g.muted=g.defaultMuted=!0,g.setAttribute("data-preview-video",""),g.setAttribute("aria-label",j.alt),et(j.videoPoster||j.poster)&&(g.poster=et(j.videoPoster||j.poster))):g.alt=j.alt,g.src=X,h.querySelector(".project-preview-lightbox-content").replaceChildren(g),document.body.style.overflow="hidden",h.showModal(),g instanceof HTMLVideoElement&&!o&&g.play().catch(()=>{}))},y=()=>{C(),g instanceof HTMLVideoElement&&(document.hidden?(w=!g.paused,g.pause()):w&&(g.play().catch(()=>{}),w=!1))};return t.addEventListener("click",d),document.addEventListener("visibilitychange",y),window.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",M,{passive:!0}),()=>{i=!0,D.disconnect(),cancelAnimationFrame(s),t.removeEventListener("click",d),document.removeEventListener("visibilitychange",y),window.removeEventListener("scroll",M),window.removeEventListener("resize",M),l.forEach(_=>_.pause()),x.forEach(_=>_.pause()),m&&(m=!1,document.body.style.overflow=f),N(),h==null||h.remove()}}function Ke(t){const e=t==null?void 0:t.querySelector(".nav");if(!e)return()=>{};const o=[...e.querySelectorAll("a[href]")],n=t.querySelector(".menu-toggle"),x=()=>location.pathname.split("/").pop()||"index.html",l=x()==="index.html",a=new URL(location.href),c=["editor_preview","editorPreview","content_catalog","content"].some(d=>a.searchParams.has(d)),i=l&&window.parent===window&&!c&&a.searchParams.get("detail-return")==="1"&&["#about-me","#cases"].includes(a.hash)?a.hash:"";i&&(a.searchParams.delete("detail-return"),a.hash="",history.replaceState(history.state,"",a.href),window.scrollTo({top:0,behavior:"instant"}));const m=d=>{try{return decodeURIComponent(d.replace(/^#/,""))}catch{return""}},h=d=>new URL(d.href,location.href),g=d=>o.find(y=>h(y).hash===d),$=o.find(d=>h(d).pathname.endsWith("/index.html")&&!h(d).hash),f=l?o.flatMap(d=>{const y=h(d),_=y.pathname.endsWith("/index.html")&&y.hash?document.getElementById(m(y.hash)):null;return _?[{link:d,element:_}]:[]}):[];let w=0,r=0,s=0,E=0,v=!1;const A=d=>o.forEach(y=>{y===d?y.setAttribute("aria-current","page"):y.removeAttribute("aria-current")}),C=()=>{if(w=0,v)return;if(!l){const P={"combat.html":"#cases","systems.html":"#cases","levels.html":"#cases","case.html":"#cases","retrospective.html":"#cases"}[x()]||(x()==="about.html"?location.hash==="#contact"?"#ending":"#about-me":"");A(P?g(P):null);return}const d=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0,y=Math.max(d+1,t.getBoundingClientRect().height+26);let _=$;for(const k of f)k.element.getBoundingClientRect().top<=y&&(_=k.link);if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-3){const k=f.at(-1);k&&k.element.getBoundingClientRect().top<window.innerHeight&&(_=k.link)}A(_)},M=()=>{w||(w=requestAnimationFrame(C))},D=()=>{n==null||n.setAttribute("aria-expanded","false"),e.classList.remove("open")},N=(d="instant")=>{const y=document.getElementById(m(location.hash));y&&y.scrollIntoView({block:"start",behavior:d}),M()},q=()=>{cancelAnimationFrame(s),cancelAnimationFrame(E),s=requestAnimationFrame(()=>{s=0,E=requestAnimationFrame(()=>{E=0,v||N()})})},L=d=>{const y=d.target.closest("a[href]");if(!y||!e.contains(y)||d.defaultPrevented||d.button!==0||d.metaKey||d.ctrlKey||d.shiftKey||d.altKey)return;D();const _=h(y);if(!(_.pathname===location.pathname||l&&_.pathname.endsWith("/index.html"))||_.origin!==location.origin)return;const P=_.hash?document.getElementById(m(_.hash)):null;if(_.hash&&!P)return;d.preventDefault(),location.href!==_.href&&history.pushState(null,"",_.href);const I=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth";P?P.scrollIntoView({block:"start",behavior:I}):window.scrollTo({top:0,behavior:I}),A(y),M()};return e.addEventListener("click",L),window.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",M,{passive:!0}),window.addEventListener("hashchange",q),window.addEventListener("popstate",q),C(),r=requestAnimationFrame(()=>{if(!v)if(i){const d=new URL(location.href);d.hash=i,history.replaceState(history.state,"",d.href),N(window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth")}else location.hash&&N()}),()=>{v=!0,cancelAnimationFrame(w),cancelAnimationFrame(r),cancelAnimationFrame(s),cancelAnimationFrame(E),e.removeEventListener("click",L),window.removeEventListener("scroll",M),window.removeEventListener("resize",M),window.removeEventListener("hashchange",q),window.removeEventListener("popstate",q)}}const Ye=`# 策划案例内容

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
`,We=`# 策划案例内容

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
`,Ge=`# 策划案例内容

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
`,Je="jianghuransheng-portfolio-article",Xe=1,Ve={title:{$text:"text_0001"},subtitle:{$text:"text_0002"},summary:{$text:"text_0003"},status:{$text:"text_0004"},goals:[{$text:"text_0005"},{$text:"text_0006"},{$text:"text_0007"}],experience:[{$text:"text_0008"},{$text:"text_0009"},{$text:"text_0010"}],rules:[{title:{$text:"text_0011"},body:{$text:"text_0012"}},{title:{$text:"text_0013"},body:{$text:"text_0014"}},{title:{$text:"text_0015"},body:{$text:"text_0016"}},{title:{$text:"text_0017"},body:{$text:"text_0018"}}],parameters:{headers:[{$text:"text_0025"},{$text:"text_0026"},{$text:"text_0027"}],rows:[[{$text:"text_0028"},{$text:"text_0029"},{$text:"text_0030"}],[{$text:"text_0031"},{$text:"text_0032"},{$text:"text_0033"}],[{$text:"text_0034"},{$text:"text_0035"},{$text:"text_0036"}],[{$text:"text_0037"},{$text:"text_0038"},{$text:"text_0039"}],[{$text:"text_0040"},{$text:"text_0041"},{$text:"text_0042"}],[{$text:"text_0043"},{$text:"text_0044"},{$text:"text_0045"}],[{$text:"text_0046"},{$text:"text_0047"},{$text:"text_0048"}],[{$text:"text_0049"},{$text:"text_0050"},{$text:"text_0051"}],[{$text:"text_0052"},{$text:"text_0053"},{$text:"text_0054"}],[{$text:"text_0055"},{$text:"text_0056"},{$text:"text_0057"}]]},flow:[{title:{$text:"text_0058"},detail:{$text:"text_0059"}},{title:{$text:"text_0060"},detail:{$text:"text_0061"}},{title:{$text:"text_0062"},detail:{$text:"text_0063"}},{title:{$text:"text_0064"},detail:{$text:"text_0065"}},{title:{$text:"text_0066"},detail:{$text:"text_0067"}}],implementation:[{title:{$text:"text_0068"},body:{$text:"text_0069"}},{title:{$text:"text_0070"},body:{$text:"text_0071"}},{title:{$text:"text_0072"},body:{$text:"text_0073"}},{title:{$text:"text_0074"},body:{$text:"text_0075"}}],iterations:[{problem:{$text:"text_0076"},cause:{$text:"text_0077"},change:{$text:"text_0078"},result:{$text:"text_0079"},status:{$text:"text_0080"},source:{$text:"text_0081"}},{problem:{$text:"text_0082"},cause:{$text:"text_0083"},change:{$text:"text_0084"},result:{$text:"text_0085"},status:{$text:"text_0086"},source:{$text:"text_0087"}},{problem:{$text:"text_0088"},cause:{$text:"text_0089"},change:{$text:"text_0090"},result:{$text:"text_0091"},status:{$text:"text_0092"},source:{$text:"text_0093"}},{problem:{$text:"text_0094"},cause:{$text:"text_0095"},change:{$text:"text_0096"},result:{$text:"text_0097"},status:{$text:"text_0098"},source:{$text:"text_0099"}}],validation:[{label:{$text:"text_0100"},result:{$text:"text_0101"},source:{$text:"text_0102"}},{label:{$text:"text_0103"},result:{$text:"text_0104"},source:{$text:"text_0105"}},{label:{$text:"text_0106"},result:{$text:"text_0107"},source:{$text:"text_0108"}},{label:{$text:"text_0109"},result:{$text:"text_0110"},source:{$text:"text_0111"}}],limitations:[{$text:"text_0112"},{$text:"text_0113"},{$text:"text_0114"},{$text:"text_0115"},{$text:"text_0116"},{$text:"text_0117"}],sources:[{file:{$text:"text_0118"},lines:{$text:"text_0119"},claim:{$text:"text_0120"}},{file:{$text:"text_0121"},lines:{$text:"text_0122"},claim:{$text:"text_0123"}},{file:{$text:"text_0124"},lines:{$text:"text_0125"},claim:{$text:"text_0126"}},{file:{$text:"text_0127"},lines:{$text:"text_0128"},claim:{$text:"text_0129"}},{file:{$text:"text_0130"},lines:{$text:"text_0131"},claim:{$text:"text_0132"}},{file:{$text:"text_0133"},lines:{$text:"text_0134"},claim:{$text:"text_0135"}},{file:{$text:"text_0136"},lines:{$text:"text_0137"},claim:{$text:"text_0138"}},{file:{$text:"text_0139"},lines:{$text:"text_0140"},claim:{$text:"text_0141"}},{file:{$text:"text_0142"},lines:{$text:"text_0143"},claim:{$text:"text_0144"}},{file:{$text:"text_0145"},lines:{$text:"text_0146"},claim:{$text:"text_0147"}},{file:{$text:"text_0148"},lines:{$text:"text_0149"},claim:{$text:"text_0150"}},{file:{$text:"text_0151"},lines:{$text:"text_0152"},claim:{$text:"text_0153"}},{file:{$text:"text_0154"},lines:{$text:"text_0155"},claim:{$text:"text_0156"}},{file:{$text:"text_0157"},lines:{$text:"text_0158"},claim:{$text:"text_0159"}},{file:{$text:"text_0160"},lines:{$text:"text_0161"},claim:{$text:"text_0162"}},{file:{$text:"text_0163"},lines:{$text:"text_0164"},claim:{$text:"text_0165"}},{file:{$text:"text_0166"},lines:{$text:"text_0167"},claim:{$text:"text_0168"}},{file:{$text:"text_0169"},lines:{$text:"text_0170"},claim:{$text:"text_0171"}}],timelineNote:{$text:"text_0172"},timeline:[{name:{$text:"text_0173"},branch:{$text:"text_0174"},fps:42,sourceFps:24,frames:36,recoveryFrames:28,recoveryFps:46.8,active:[21,24],buffer:[18,35],duration:.8571428571428571,recoveryDuration:.5982905982905983},{name:{$text:"text_0175"},branch:{$text:"text_0176"},fps:36,sourceFps:24,frames:15,recoveryFrames:28,recoveryFps:46.8,active:[3,7],buffer:[3,14],duration:.4166666666666667,recoveryDuration:.5982905982905983},{name:{$text:"text_0177"},branch:{$text:"text_0178"},fps:33.6,sourceFps:24,frames:10,recoveryFrames:28,recoveryFps:46.8,active:[2,5],buffer:[-1,-1],duration:.2976190476190476,recoveryDuration:.5982905982905983},{name:{$text:"text_0179"},branch:{$text:"text_0180"},fps:24,sourceFps:24,variableSpeed:!0,frames:25,recoveryFrames:14,active:[[3,8],[13,18]],buffer:[2,24],frameDurations:[.03787878787878787,.03787878787878787,.041666666666666664,.027777777777777776,.020833333333333332,.020833333333333332,.022522522522522518,.02450980392156863,.02450980392156863,.02873563218390805,.034722222222222224,.03787878787878787,.041666666666666664,.027777777777777776,.020833333333333332,.020833333333333332,.022522522522522518,.02450980392156863,.02450980392156863,.02873563218390805,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224],duration:.7447474442910548,recoveryDuration:.5303030303030303,dash:null},{name:{$text:"text_0181"},branch:{$text:"text_0182"},fps:24,sourceFps:24,variableSpeed:!0,frames:35,recoveryFrames:13,active:[[7,14]],buffer:[2,34],frameDurations:[.036231884057971016,.036231884057971016,.036231884057971016,.03875968992248063,.041666666666666664,.041666666666666664,.027777777777777776,.020833333333333332,.020833333333333332,.02192982456140351,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.026041666666666664,.029761904761904767,.029761904761904767,.029761904761904767,.029761904761904767,.029761904761904767,.032051282051282055,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224],duration:1.0961950465926773,recoveryDuration:.49242424242424243,dash:null},{name:{$text:"text_0183"},branch:{$text:"text_0184"},fps:24,sourceFps:24,variableSpeed:!0,frames:73,recoveryFrames:28,active:[[33,72]],buffer:[-1,-1],frameDurations:[.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888],duration:1.3032407407407394,recoveryDuration:.5423280423280423,dash:{first:33,last:38,distance:168,duration:.125}},{name:{$text:"text_0185"},branch:{$text:"text_0186"},fps:24,sourceFps:24,frames:28,recoveryFrames:11,recoveryFps:24,active:[15,27],buffer:[16,27],duration:1.1666666666666667,recoveryDuration:.4583333333333333},{name:{$text:"text_0187"},branch:{$text:"text_0188"},fps:24,sourceFps:24,frames:28,recoveryFrames:0,recoveryFps:24,active:[14,27],buffer:[15,27],duration:1.1666666666666667,recoveryDuration:0},{name:{$text:"text_0189"},branch:{$text:"text_0190"},fps:24,sourceFps:24,frames:52,recoveryFrames:5,recoveryFps:24,active:[6,12],buffer:[-1,-1],duration:2.1666666666666665,recoveryDuration:.20833333333333334}]},Ze=JSON.parse('[{"id":"text_0001","path":"/title","label":"标题"},{"id":"text_0002","path":"/subtitle","label":"副标题"},{"id":"text_0003","path":"/summary","label":"简介"},{"id":"text_0004","path":"/status","label":"开发状态"},{"id":"text_0005","path":"/goals/0","label":"设计目标 / 1"},{"id":"text_0006","path":"/goals/1","label":"设计目标 / 2"},{"id":"text_0007","path":"/goals/2","label":"设计目标 / 3"},{"id":"text_0008","path":"/experience/0","label":"玩家体验 / 1"},{"id":"text_0009","path":"/experience/1","label":"玩家体验 / 2"},{"id":"text_0010","path":"/experience/2","label":"玩家体验 / 3"},{"id":"text_0011","path":"/rules/0/title","label":"机制与规则 / 1 / 标题"},{"id":"text_0012","path":"/rules/0/body","label":"机制与规则 / 1 / 正文"},{"id":"text_0013","path":"/rules/1/title","label":"机制与规则 / 2 / 标题"},{"id":"text_0014","path":"/rules/1/body","label":"机制与规则 / 2 / 正文"},{"id":"text_0015","path":"/rules/2/title","label":"机制与规则 / 3 / 标题"},{"id":"text_0016","path":"/rules/2/body","label":"机制与规则 / 3 / 正文"},{"id":"text_0017","path":"/rules/3/title","label":"机制与规则 / 4 / 标题"},{"id":"text_0018","path":"/rules/3/body","label":"机制与规则 / 4 / 正文"},{"id":"text_0025","path":"/parameters/headers/0","label":"关键参数 / 表头 / 1"},{"id":"text_0026","path":"/parameters/headers/1","label":"关键参数 / 表头 / 2"},{"id":"text_0027","path":"/parameters/headers/2","label":"关键参数 / 表头 / 3"},{"id":"text_0028","path":"/parameters/rows/0/0","label":"关键参数 / 表格行 / 1 / 1"},{"id":"text_0029","path":"/parameters/rows/0/1","label":"关键参数 / 表格行 / 1 / 2"},{"id":"text_0030","path":"/parameters/rows/0/2","label":"关键参数 / 表格行 / 1 / 3"},{"id":"text_0031","path":"/parameters/rows/1/0","label":"关键参数 / 表格行 / 2 / 1"},{"id":"text_0032","path":"/parameters/rows/1/1","label":"关键参数 / 表格行 / 2 / 2"},{"id":"text_0033","path":"/parameters/rows/1/2","label":"关键参数 / 表格行 / 2 / 3"},{"id":"text_0034","path":"/parameters/rows/2/0","label":"关键参数 / 表格行 / 3 / 1"},{"id":"text_0035","path":"/parameters/rows/2/1","label":"关键参数 / 表格行 / 3 / 2"},{"id":"text_0036","path":"/parameters/rows/2/2","label":"关键参数 / 表格行 / 3 / 3"},{"id":"text_0037","path":"/parameters/rows/3/0","label":"关键参数 / 表格行 / 4 / 1"},{"id":"text_0038","path":"/parameters/rows/3/1","label":"关键参数 / 表格行 / 4 / 2"},{"id":"text_0039","path":"/parameters/rows/3/2","label":"关键参数 / 表格行 / 4 / 3"},{"id":"text_0040","path":"/parameters/rows/4/0","label":"关键参数 / 表格行 / 5 / 1"},{"id":"text_0041","path":"/parameters/rows/4/1","label":"关键参数 / 表格行 / 5 / 2"},{"id":"text_0042","path":"/parameters/rows/4/2","label":"关键参数 / 表格行 / 5 / 3"},{"id":"text_0043","path":"/parameters/rows/5/0","label":"关键参数 / 表格行 / 6 / 1"},{"id":"text_0044","path":"/parameters/rows/5/1","label":"关键参数 / 表格行 / 6 / 2"},{"id":"text_0045","path":"/parameters/rows/5/2","label":"关键参数 / 表格行 / 6 / 3"},{"id":"text_0046","path":"/parameters/rows/6/0","label":"关键参数 / 表格行 / 7 / 1"},{"id":"text_0047","path":"/parameters/rows/6/1","label":"关键参数 / 表格行 / 7 / 2"},{"id":"text_0048","path":"/parameters/rows/6/2","label":"关键参数 / 表格行 / 7 / 3"},{"id":"text_0049","path":"/parameters/rows/7/0","label":"关键参数 / 表格行 / 8 / 1"},{"id":"text_0050","path":"/parameters/rows/7/1","label":"关键参数 / 表格行 / 8 / 2"},{"id":"text_0051","path":"/parameters/rows/7/2","label":"关键参数 / 表格行 / 8 / 3"},{"id":"text_0052","path":"/parameters/rows/8/0","label":"关键参数 / 表格行 / 9 / 1"},{"id":"text_0053","path":"/parameters/rows/8/1","label":"关键参数 / 表格行 / 9 / 2"},{"id":"text_0054","path":"/parameters/rows/8/2","label":"关键参数 / 表格行 / 9 / 3"},{"id":"text_0055","path":"/parameters/rows/9/0","label":"关键参数 / 表格行 / 10 / 1"},{"id":"text_0056","path":"/parameters/rows/9/1","label":"关键参数 / 表格行 / 10 / 2"},{"id":"text_0057","path":"/parameters/rows/9/2","label":"关键参数 / 表格行 / 10 / 3"},{"id":"text_0058","path":"/flow/0/title","label":"流程 / 1 / 标题"},{"id":"text_0059","path":"/flow/0/detail","label":"流程 / 1 / 说明"},{"id":"text_0060","path":"/flow/1/title","label":"流程 / 2 / 标题"},{"id":"text_0061","path":"/flow/1/detail","label":"流程 / 2 / 说明"},{"id":"text_0062","path":"/flow/2/title","label":"流程 / 3 / 标题"},{"id":"text_0063","path":"/flow/2/detail","label":"流程 / 3 / 说明"},{"id":"text_0064","path":"/flow/3/title","label":"流程 / 4 / 标题"},{"id":"text_0065","path":"/flow/3/detail","label":"流程 / 4 / 说明"},{"id":"text_0066","path":"/flow/4/title","label":"流程 / 5 / 标题"},{"id":"text_0067","path":"/flow/4/detail","label":"流程 / 5 / 说明"},{"id":"text_0068","path":"/implementation/0/title","label":"实现方式 / 1 / 标题"},{"id":"text_0069","path":"/implementation/0/body","label":"实现方式 / 1 / 正文"},{"id":"text_0070","path":"/implementation/1/title","label":"实现方式 / 2 / 标题"},{"id":"text_0071","path":"/implementation/1/body","label":"实现方式 / 2 / 正文"},{"id":"text_0072","path":"/implementation/2/title","label":"实现方式 / 3 / 标题"},{"id":"text_0073","path":"/implementation/2/body","label":"实现方式 / 3 / 正文"},{"id":"text_0074","path":"/implementation/3/title","label":"实现方式 / 4 / 标题"},{"id":"text_0075","path":"/implementation/3/body","label":"实现方式 / 4 / 正文"},{"id":"text_0076","path":"/iterations/0/problem","label":"问题与迭代 / 1 / 发现问题"},{"id":"text_0077","path":"/iterations/0/cause","label":"问题与迭代 / 1 / 原因分析"},{"id":"text_0078","path":"/iterations/0/change","label":"问题与迭代 / 1 / 修改方案"},{"id":"text_0079","path":"/iterations/0/result","label":"问题与迭代 / 1 / 结果"},{"id":"text_0080","path":"/iterations/0/status","label":"问题与迭代 / 1 / 开发状态"},{"id":"text_0081","path":"/iterations/0/source","label":"问题与迭代 / 1 / 依据"},{"id":"text_0082","path":"/iterations/1/problem","label":"问题与迭代 / 2 / 发现问题"},{"id":"text_0083","path":"/iterations/1/cause","label":"问题与迭代 / 2 / 原因分析"},{"id":"text_0084","path":"/iterations/1/change","label":"问题与迭代 / 2 / 修改方案"},{"id":"text_0085","path":"/iterations/1/result","label":"问题与迭代 / 2 / 结果"},{"id":"text_0086","path":"/iterations/1/status","label":"问题与迭代 / 2 / 开发状态"},{"id":"text_0087","path":"/iterations/1/source","label":"问题与迭代 / 2 / 依据"},{"id":"text_0088","path":"/iterations/2/problem","label":"问题与迭代 / 3 / 发现问题"},{"id":"text_0089","path":"/iterations/2/cause","label":"问题与迭代 / 3 / 原因分析"},{"id":"text_0090","path":"/iterations/2/change","label":"问题与迭代 / 3 / 修改方案"},{"id":"text_0091","path":"/iterations/2/result","label":"问题与迭代 / 3 / 结果"},{"id":"text_0092","path":"/iterations/2/status","label":"问题与迭代 / 3 / 开发状态"},{"id":"text_0093","path":"/iterations/2/source","label":"问题与迭代 / 3 / 依据"},{"id":"text_0094","path":"/iterations/3/problem","label":"问题与迭代 / 4 / 发现问题"},{"id":"text_0095","path":"/iterations/3/cause","label":"问题与迭代 / 4 / 原因分析"},{"id":"text_0096","path":"/iterations/3/change","label":"问题与迭代 / 4 / 修改方案"},{"id":"text_0097","path":"/iterations/3/result","label":"问题与迭代 / 4 / 结果"},{"id":"text_0098","path":"/iterations/3/status","label":"问题与迭代 / 4 / 开发状态"},{"id":"text_0099","path":"/iterations/3/source","label":"问题与迭代 / 4 / 依据"},{"id":"text_0100","path":"/validation/0/label","label":"验证结果 / 1 / 名称"},{"id":"text_0101","path":"/validation/0/result","label":"验证结果 / 1 / 结果"},{"id":"text_0102","path":"/validation/0/source","label":"验证结果 / 1 / 依据"},{"id":"text_0103","path":"/validation/1/label","label":"验证结果 / 2 / 名称"},{"id":"text_0104","path":"/validation/1/result","label":"验证结果 / 2 / 结果"},{"id":"text_0105","path":"/validation/1/source","label":"验证结果 / 2 / 依据"},{"id":"text_0106","path":"/validation/2/label","label":"验证结果 / 3 / 名称"},{"id":"text_0107","path":"/validation/2/result","label":"验证结果 / 3 / 结果"},{"id":"text_0108","path":"/validation/2/source","label":"验证结果 / 3 / 依据"},{"id":"text_0109","path":"/validation/3/label","label":"验证结果 / 4 / 名称"},{"id":"text_0110","path":"/validation/3/result","label":"验证结果 / 4 / 结果"},{"id":"text_0111","path":"/validation/3/source","label":"验证结果 / 4 / 依据"},{"id":"text_0112","path":"/limitations/0","label":"尚存问题 / 1"},{"id":"text_0113","path":"/limitations/1","label":"尚存问题 / 2"},{"id":"text_0114","path":"/limitations/2","label":"尚存问题 / 3"},{"id":"text_0115","path":"/limitations/3","label":"尚存问题 / 4"},{"id":"text_0116","path":"/limitations/4","label":"尚存问题 / 5"},{"id":"text_0117","path":"/limitations/5","label":"尚存问题 / 6"},{"id":"text_0118","path":"/sources/0/file","label":"项目依据 / 1 / 文件路径"},{"id":"text_0119","path":"/sources/0/lines","label":"项目依据 / 1 / 行号"},{"id":"text_0120","path":"/sources/0/claim","label":"项目依据 / 1 / 支持的结论"},{"id":"text_0121","path":"/sources/1/file","label":"项目依据 / 2 / 文件路径"},{"id":"text_0122","path":"/sources/1/lines","label":"项目依据 / 2 / 行号"},{"id":"text_0123","path":"/sources/1/claim","label":"项目依据 / 2 / 支持的结论"},{"id":"text_0124","path":"/sources/2/file","label":"项目依据 / 3 / 文件路径"},{"id":"text_0125","path":"/sources/2/lines","label":"项目依据 / 3 / 行号"},{"id":"text_0126","path":"/sources/2/claim","label":"项目依据 / 3 / 支持的结论"},{"id":"text_0127","path":"/sources/3/file","label":"项目依据 / 4 / 文件路径"},{"id":"text_0128","path":"/sources/3/lines","label":"项目依据 / 4 / 行号"},{"id":"text_0129","path":"/sources/3/claim","label":"项目依据 / 4 / 支持的结论"},{"id":"text_0130","path":"/sources/4/file","label":"项目依据 / 5 / 文件路径"},{"id":"text_0131","path":"/sources/4/lines","label":"项目依据 / 5 / 行号"},{"id":"text_0132","path":"/sources/4/claim","label":"项目依据 / 5 / 支持的结论"},{"id":"text_0133","path":"/sources/5/file","label":"项目依据 / 6 / 文件路径"},{"id":"text_0134","path":"/sources/5/lines","label":"项目依据 / 6 / 行号"},{"id":"text_0135","path":"/sources/5/claim","label":"项目依据 / 6 / 支持的结论"},{"id":"text_0136","path":"/sources/6/file","label":"项目依据 / 7 / 文件路径"},{"id":"text_0137","path":"/sources/6/lines","label":"项目依据 / 7 / 行号"},{"id":"text_0138","path":"/sources/6/claim","label":"项目依据 / 7 / 支持的结论"},{"id":"text_0139","path":"/sources/7/file","label":"项目依据 / 8 / 文件路径"},{"id":"text_0140","path":"/sources/7/lines","label":"项目依据 / 8 / 行号"},{"id":"text_0141","path":"/sources/7/claim","label":"项目依据 / 8 / 支持的结论"},{"id":"text_0142","path":"/sources/8/file","label":"项目依据 / 9 / 文件路径"},{"id":"text_0143","path":"/sources/8/lines","label":"项目依据 / 9 / 行号"},{"id":"text_0144","path":"/sources/8/claim","label":"项目依据 / 9 / 支持的结论"},{"id":"text_0145","path":"/sources/9/file","label":"项目依据 / 10 / 文件路径"},{"id":"text_0146","path":"/sources/9/lines","label":"项目依据 / 10 / 行号"},{"id":"text_0147","path":"/sources/9/claim","label":"项目依据 / 10 / 支持的结论"},{"id":"text_0148","path":"/sources/10/file","label":"项目依据 / 11 / 文件路径"},{"id":"text_0149","path":"/sources/10/lines","label":"项目依据 / 11 / 行号"},{"id":"text_0150","path":"/sources/10/claim","label":"项目依据 / 11 / 支持的结论"},{"id":"text_0151","path":"/sources/11/file","label":"项目依据 / 12 / 文件路径"},{"id":"text_0152","path":"/sources/11/lines","label":"项目依据 / 12 / 行号"},{"id":"text_0153","path":"/sources/11/claim","label":"项目依据 / 12 / 支持的结论"},{"id":"text_0154","path":"/sources/12/file","label":"项目依据 / 13 / 文件路径"},{"id":"text_0155","path":"/sources/12/lines","label":"项目依据 / 13 / 行号"},{"id":"text_0156","path":"/sources/12/claim","label":"项目依据 / 13 / 支持的结论"},{"id":"text_0157","path":"/sources/13/file","label":"项目依据 / 14 / 文件路径"},{"id":"text_0158","path":"/sources/13/lines","label":"项目依据 / 14 / 行号"},{"id":"text_0159","path":"/sources/13/claim","label":"项目依据 / 14 / 支持的结论"},{"id":"text_0160","path":"/sources/14/file","label":"项目依据 / 15 / 文件路径"},{"id":"text_0161","path":"/sources/14/lines","label":"项目依据 / 15 / 行号"},{"id":"text_0162","path":"/sources/14/claim","label":"项目依据 / 15 / 支持的结论"},{"id":"text_0163","path":"/sources/15/file","label":"项目依据 / 16 / 文件路径"},{"id":"text_0164","path":"/sources/15/lines","label":"项目依据 / 16 / 行号"},{"id":"text_0165","path":"/sources/15/claim","label":"项目依据 / 16 / 支持的结论"},{"id":"text_0166","path":"/sources/16/file","label":"项目依据 / 17 / 文件路径"},{"id":"text_0167","path":"/sources/16/lines","label":"项目依据 / 17 / 行号"},{"id":"text_0168","path":"/sources/16/claim","label":"项目依据 / 17 / 支持的结论"},{"id":"text_0169","path":"/sources/17/file","label":"项目依据 / 18 / 文件路径"},{"id":"text_0170","path":"/sources/17/lines","label":"项目依据 / 18 / 行号"},{"id":"text_0171","path":"/sources/17/claim","label":"项目依据 / 18 / 支持的结论"},{"id":"text_0172","path":"/timelineNote","label":"时间轴说明"},{"id":"text_0173","path":"/timeline/0/name","label":"攻击时间轴 / 1 / 名称"},{"id":"text_0174","path":"/timeline/0/branch","label":"攻击时间轴 / 1 / 攻击分支"},{"id":"text_0175","path":"/timeline/1/name","label":"攻击时间轴 / 2 / 名称"},{"id":"text_0176","path":"/timeline/1/branch","label":"攻击时间轴 / 2 / 攻击分支"},{"id":"text_0177","path":"/timeline/2/name","label":"攻击时间轴 / 3 / 名称"},{"id":"text_0178","path":"/timeline/2/branch","label":"攻击时间轴 / 3 / 攻击分支"},{"id":"text_0179","path":"/timeline/3/name","label":"攻击时间轴 / 4 / 名称"},{"id":"text_0180","path":"/timeline/3/branch","label":"攻击时间轴 / 4 / 攻击分支"},{"id":"text_0181","path":"/timeline/4/name","label":"攻击时间轴 / 5 / 名称"},{"id":"text_0182","path":"/timeline/4/branch","label":"攻击时间轴 / 5 / 攻击分支"},{"id":"text_0183","path":"/timeline/5/name","label":"攻击时间轴 / 6 / 名称"},{"id":"text_0184","path":"/timeline/5/branch","label":"攻击时间轴 / 6 / 攻击分支"},{"id":"text_0185","path":"/timeline/6/name","label":"攻击时间轴 / 7 / 名称"},{"id":"text_0186","path":"/timeline/6/branch","label":"攻击时间轴 / 7 / 攻击分支"},{"id":"text_0187","path":"/timeline/7/name","label":"攻击时间轴 / 8 / 名称"},{"id":"text_0188","path":"/timeline/7/branch","label":"攻击时间轴 / 8 / 攻击分支"},{"id":"text_0189","path":"/timeline/8/name","label":"攻击时间轴 / 9 / 名称"},{"id":"text_0190","path":"/timeline/8/branch","label":"攻击时间轴 / 9 / 攻击分支"}]'),Qe={format:Je,version:Xe,tree:Ve,fields:Ze},to="jianghuransheng-portfolio-article",eo=1,oo=JSON.parse('{"title":{"$text":"text_0001"},"subtitle":{"$text":"text_0002"},"summary":{"$text":"text_0003"},"status":{"$text":"text_0004"},"goals":[{"$text":"text_0005"},{"$text":"text_0006"},{"$text":"text_0007"}],"experience":[{"$text":"text_0008"},{"$text":"text_0009"},{"$text":"text_0010"}],"rules":[{"title":{"$text":"text_0011"},"body":{"$text":"text_0012"}},{"title":{"$text":"text_0013"},"body":{"$text":"text_0014"}},{"title":{"$text":"text_0015"},"body":{"$text":"text_0016"}},{"title":{"$text":"text_0017"},"body":{"$text":"text_0018"}},{"title":{"$text":"text_0019"},"body":{"$text":"text_0020"}},{"title":{"$text":"text_0021"},"body":{"$text":"text_0022"}}],"parameters":{"headers":[{"$text":"text_0023"},{"$text":"text_0024"},{"$text":"text_0025"}],"rows":[[{"$text":"text_0026"},{"$text":"text_0027"},{"$text":"text_0028"}],[{"$text":"text_0029"},{"$text":"text_0030"},{"$text":"text_0031"}],[{"$text":"text_0032"},{"$text":"text_0033"},{"$text":"text_0034"}],[{"$text":"text_0035"},{"$text":"text_0036"},{"$text":"text_0037"}],[{"$text":"text_0038"},{"$text":"text_0039"},{"$text":"text_0040"}],[{"$text":"text_0041"},{"$text":"text_0042"},{"$text":"text_0043"}],[{"$text":"text_0044"},{"$text":"text_0045"},{"$text":"text_0046"}],[{"$text":"text_0047"},{"$text":"text_0048"},{"$text":"text_0049"}]]},"flow":[{"title":{"$text":"text_0050"},"detail":{"$text":"text_0051"}},{"title":{"$text":"text_0052"},"detail":{"$text":"text_0053"}},{"title":{"$text":"text_0054"},"detail":{"$text":"text_0055"}},{"title":{"$text":"text_0056"},"detail":{"$text":"text_0057"}},{"title":{"$text":"text_0058"},"detail":{"$text":"text_0059"}},{"title":{"$text":"text_0060"},"detail":{"$text":"text_0061"}},{"title":{"$text":"text_0062"},"detail":{"$text":"text_0063"}},{"title":{"$text":"text_0064"},"detail":{"$text":"text_0065"}}],"implementation":[{"title":{"$text":"text_0066"},"body":{"$text":"text_0067"}},{"title":{"$text":"text_0068"},"body":{"$text":"text_0069"}},{"title":{"$text":"text_0070"},"body":{"$text":"text_0071"}},{"title":{"$text":"text_0072"},"body":{"$text":"text_0073"}}],"iterations":[],"validation":[{"label":{"$text":"text_0098"},"result":{"$text":"text_0099"},"source":{"$text":"text_0100"}},{"label":{"$text":"text_0101"},"result":{"$text":"text_0102"},"source":{"$text":"text_0103"}},{"label":{"$text":"text_0104"},"result":{"$text":"text_0105"},"source":{"$text":"text_0106"}},{"label":{"$text":"text_0107"},"result":{"$text":"text_0108"},"source":{"$text":"text_0109"}},{"label":{"$text":"text_0110"},"result":{"$text":"text_0111"},"source":{"$text":"text_0112"}}],"limitations":[{"$text":"text_0113"},{"$text":"text_0114"},{"$text":"text_0115"},{"$text":"text_0116"},{"$text":"text_0117"},{"$text":"text_0118"}],"sources":[{"file":{"$text":"text_0119"},"lines":{"$text":"text_0120"},"claim":{"$text":"text_0121"}},{"file":{"$text":"text_0122"},"lines":{"$text":"text_0123"},"claim":{"$text":"text_0124"}},{"file":{"$text":"text_0125"},"lines":{"$text":"text_0126"},"claim":{"$text":"text_0127"}},{"file":{"$text":"text_0128"},"lines":{"$text":"text_0129"},"claim":{"$text":"text_0130"}},{"file":{"$text":"text_0131"},"lines":{"$text":"text_0132"},"claim":{"$text":"text_0133"}},{"file":{"$text":"text_0134"},"lines":{"$text":"text_0135"},"claim":{"$text":"text_0136"}},{"file":{"$text":"text_0137"},"lines":{"$text":"text_0138"},"claim":{"$text":"text_0139"}},{"file":{"$text":"text_0140"},"lines":{"$text":"text_0141"},"claim":{"$text":"text_0142"}},{"file":{"$text":"text_0143"},"lines":{"$text":"text_0144"},"claim":{"$text":"text_0145"}},{"file":{"$text":"text_0146"},"lines":{"$text":"text_0147"},"claim":{"$text":"text_0148"}},{"file":{"$text":"text_0149"},"lines":{"$text":"text_0150"},"claim":{"$text":"text_0151"}},{"file":{"$text":"text_0152"},"lines":{"$text":"text_0153"},"claim":{"$text":"text_0154"}},{"file":{"$text":"text_0155"},"lines":{"$text":"text_0156"},"claim":{"$text":"text_0157"}},{"file":{"$text":"text_0158"},"lines":{"$text":"text_0159"},"claim":{"$text":"text_0160"}},{"file":{"$text":"text_0161"},"lines":{"$text":"text_0162"},"claim":{"$text":"text_0163"}},{"file":{"$text":"text_0164"},"lines":{"$text":"text_0165"},"claim":{"$text":"text_0166"}}],"map":{"scene":{"$text":"text_0167"},"coordinateSystem":{"$text":"text_0168"},"bounds":{"width":1280,"height":720,"minX":75,"maxX":1210,"minY":470,"maxY":657,"x":0,"y":0},"walkPolygon":[[75,470],[1210,470],[1210,657],[75,657]],"points":[{"name":{"$text":"text_0169"},"x":430,"y":577,"type":{"$text":"text_0170"}},{"name":{"$text":"text_0171"},"x":580,"y":592,"type":{"$text":"text_0172"},"radius":90},{"name":{"$text":"text_0173"},"x":950,"y":494,"type":{"$text":"text_0174"},"radius":115},{"name":{"$text":"text_0175"},"x":1050,"y":490,"type":{"$text":"text_0176"},"size":[100,90]},{"name":{"$text":"text_0177"},"x":130,"y":495,"type":{"$text":"text_0178"}},{"name":{"$text":"text_0179"},"x":240,"y":605,"type":{"$text":"text_0180"}},{"name":{"$text":"text_0181"},"x":800,"y":640,"type":{"$text":"text_0182"}}],"obstacles":[],"note":{"$text":"text_0183"}},"additionalMaps":[{"scene":{"$text":"text_0184"},"bounds":{"width":1280,"height":720,"x":0,"y":0},"walkPolygon":[[95.694,465.972],[143.158,410.882],[404.211,410.882],[424.88,382.572],[581.818,382.572],[589.474,411.647],[760.957,420.829],[819.139,420.829],[845.933,459.851],[914.833,466.738],[914.833,422.359],[955.407,422.359],[968.421,436.897],[968.421,473.624],[1191.196,473.624],[1217.225,497.343],[1201.914,582.274],[1079.426,600.638],[266.411,600.638],[222.01,579.979],[143.158,563.911],[91.866,521.063]],"points":[{"name":{"$text":"text_0185"},"x":150,"y":550,"type":{"$text":"text_0186"}},{"name":{"$text":"text_0187"},"x":270,"y":421,"type":{"$text":"text_0188"},"size":[220,22]},{"name":{"$text":"text_0189"},"x":940,"y":439,"type":{"$text":"text_0190"},"size":[48,24]},{"name":{"$text":"text_0191"},"x":940,"y":434,"type":{"$text":"text_0192"}},{"name":{"$text":"text_0193"},"x":1020,"y":407,"type":{"$text":"text_0194"}}],"obstacles":[{"name":{"$text":"text_0195"},"kind":{"$text":"text_0196"},"polygon":[[198.278,429.245],[313.876,429.245],[313.876,450.67],[198.278,450.67]]},{"name":{"$text":"text_0197"},"kind":{"$text":"text_0198"},"polygon":[[492.249,429.245],[608.612,429.245],[608.612,449.904],[492.249,449.904]]},{"name":{"$text":"text_0199"},"kind":{"$text":"text_0200"},"polygon":[[746.411,443.783],[850.526,443.783],[850.526,452.2],[746.411,452.2]]},{"name":{"$text":"text_0201"},"kind":{"$text":"text_0202"},"polygon":[[153.876,439.192],[187.56,439.192],[187.56,450.67],[153.876,450.67]]},{"name":{"$text":"text_0203"},"kind":{"$text":"text_0204"},"polygon":[[327.656,439.957],[359.809,439.957],[359.809,451.435],[327.656,451.435]]},{"name":{"$text":"text_0205"},"kind":{"$text":"text_0206"},"polygon":[[436.364,439.957],[467.751,439.957],[467.751,451.435],[436.364,451.435]]},{"name":{"$text":"text_0207"},"kind":{"$text":"text_0208"},"polygon":[[522.871,439.192],[571.1,439.192],[571.1,449.904],[522.871,449.904]]},{"name":{"$text":"text_0209"},"kind":{"$text":"text_0210"},"polygon":[[623.923,439.957],[653.78,439.957],[653.78,451.435],[623.923,451.435]]},{"name":{"$text":"text_0211"},"kind":{"$text":"text_0212"},"polygon":[[692.823,439.957],[725.742,439.957],[725.742,452.2],[692.823,452.2]]},{"name":{"$text":"text_0213"},"kind":{"$text":"text_0214"},"polygon":[[777.033,446.079],[829.856,446.079],[829.856,450.67],[777.033,450.67]]},{"name":{"$text":"text_0215"},"kind":{"$text":"text_0216"},"polygon":[[764.785,400.17],[811.483,400.17],[811.483,419.299],[764.785,419.299]]},{"name":{"$text":"text_0217"},"kind":{"$text":"text_0218"},"polygon":[[142.392,312.944],[404.976,312.944],[411.866,407.056],[143.158,407.056]]},{"name":{"$text":"text_0219"},"kind":{"$text":"text_0220"},"polygon":[[419.522,303.762],[588.708,303.762],[588.708,376.451],[419.522,376.451]]},{"name":{"$text":"text_0221"},"kind":{"$text":"text_0222"},"polygon":[[592.536,374.155],[741.053,374.155],[754.067,419.299],[592.536,412.412]]},{"name":{"$text":"text_0223"},"kind":{"$text":"text_0224"},"polygon":[[81.914,404.761],[146.986,404.761],[146.986,423.889],[81.914,428.48]]},{"name":{"$text":"text_0225"},"kind":{"$text":"text_0226"},"polygon":[[761.722,398.64],[815.311,398.64],[815.311,424.655],[761.722,424.655]]},{"name":{"$text":"text_0227"},"kind":{"$text":"text_0228"},"polygon":[[817.608,390.988],[894.163,410.882],[907.943,454.495],[885.742,466.738],[826.794,436.897]]},{"name":{"$text":"text_0229"},"kind":{"$text":"text_0230"},"polygon":[[968.421,422.359],[1010.526,417.768],[1115.407,427.715],[1262.392,430.776],[1276.938,472.094],[968.421,472.094]]},{"name":{"$text":"text_0231"},"kind":{"$text":"text_0232"},"polygon":[[0,530.244],[76.555,530.244],[111.005,571.562],[237.321,603.698],[0,688.629]]},{"name":{"$text":"text_0233"},"kind":{"$text":"text_0234"},"polygon":[[1159.809,569.267],[1280,504.995],[1280,720],[1140.67,720]]},{"name":{"$text":"text_0235"},"kind":{"$text":"text_0236"},"polygon":[[955.407,392.519],[998.278,388.693],[1012.057,406.291],[1002.871,420.829],[960,421.594],[947.751,408.587]]},{"name":{"$text":"text_0237"},"kind":{"$text":"text_0238"},"polygon":[[876.555,404.761],[946.986,404.761],[946.986,422.359],[880.383,426.95]]}],"note":{"$text":"text_0239"}},{"scene":{"$text":"text_0240"},"bounds":{"width":2048,"height":768,"x":0,"y":0},"walkPolygon":[[80,550],[190,536],[320,544],[445,537],[590,545],[750,531],[900,536],[1060,533],[1200,541],[1365,535],[1510,543],[1680,535],[1830,541],[1970,530],[1990,570],[1975,610],[1870,624],[1740,624],[1620,635],[1490,624],[1350,635],[1220,625],[1090,633],[950,629],[810,638],[680,624],[540,634],[400,623],[275,633],[150,621],[74,598]],"points":[{"name":{"$text":"text_0241"},"x":1024,"y":586,"type":{"$text":"text_0242"}},{"name":{"$text":"text_0243"},"x":1580,"y":584,"type":{"$text":"text_0244"},"size":[48,180]},{"name":{"$text":"text_0245"},"x":1720,"y":551.111,"type":{"$text":"text_0246"},"size":[58,27.622]},{"name":{"$text":"text_0247"},"x":1684,"y":581.733,"type":{"$text":"text_0248"},"size":[58,27.622]},{"name":{"$text":"text_0249"},"x":1704,"y":612.356,"type":{"$text":"text_0250"},"size":[58,27.622]}],"obstacles":[{"name":{"$text":"text_0251"},"kind":{"$text":"text_0252"},"polygon":[[590,395],[800,390],[1050,384],[1245,387],[1350,445],[1315,504],[1190,514],[1060,509],[895,517],[750,510],[650,522],[590,495]]},{"name":{"$text":"text_0253"},"kind":{"$text":"text_0254"},"polygon":[[935,45],[1380,45],[1395,205],[1360,386],[1290,430],[1090,425],[930,380],[880,255]]},{"name":{"$text":"text_0255"},"kind":{"$text":"text_0256"},"polygon":[[0,0],[700,0],[645,310],[590,390],[600,492],[480,521],[315,521],[170,517],[0,525]]},{"name":{"$text":"text_0257"},"kind":{"$text":"text_0258"},"polygon":[[1360,0],[2048,0],[2048,515],[1910,520],[1810,516],[1665,518],[1505,525],[1375,516],[1325,460],[1385,330]]},{"name":{"$text":"text_0259"},"kind":{"$text":"text_0260"},"polygon":[[0,600],[115,595],[174,625],[170,768],[0,768]]},{"name":{"$text":"text_0261"},"kind":{"$text":"text_0262"},"polygon":[[1850,625],[1910,595],[2048,605],[2048,768],[1875,768]]}],"note":{"$text":"text_0263"}}],"uiIterations":{"title":{"$text":"text_0264"},"cases":[{"id":{"$text":"text_0265"},"title":{"$text":"text_0266"},"intro":{"$text":"text_0267"},"before":{"kind":{"$text":"text_0268"},"path":{"$text":"text_0269"},"width":1774,"height":887},"after":{"kind":{"$text":"text_0270"},"path":{"$text":"text_0271"},"width":1672,"height":941}},{"id":{"$text":"text_0272"},"title":{"$text":"text_0273"},"intro":{"$text":"text_0274"},"before":{"kind":{"$text":"text_0275"},"path":{"$text":"text_0276"},"width":1280,"height":720},"after":{"kind":{"$text":"text_0277"},"path":{"$text":"text_0278"},"width":1920,"height":1080}},{"id":{"$text":"text_0279"},"title":{"$text":"text_0280"},"intro":{"$text":"text_0281"},"before":{"kind":{"$text":"text_0282"},"path":{"$text":"text_0283"},"width":1681,"height":936},"after":{"kind":{"$text":"text_0284"},"path":{"$text":"text_0285"},"width":1447,"height":1087}},{"id":{"$text":"text_0286"},"title":{"$text":"text_0287"},"intro":{"$text":"text_0288"},"before":{"kind":{"$text":"text_0289"},"path":{"$text":"text_0290"},"width":1672,"height":941},"after":{"kind":{"$text":"text_0291"},"path":{"$text":"text_0292"},"width":1672,"height":941}}]}}'),no=JSON.parse('[{"id":"text_0001","path":"/title","label":"标题"},{"id":"text_0002","path":"/subtitle","label":"副标题"},{"id":"text_0003","path":"/summary","label":"简介"},{"id":"text_0004","path":"/status","label":"开发状态"},{"id":"text_0005","path":"/goals/0","label":"设计目标 / 1"},{"id":"text_0006","path":"/goals/1","label":"设计目标 / 2"},{"id":"text_0007","path":"/goals/2","label":"设计目标 / 3"},{"id":"text_0008","path":"/experience/0","label":"玩家体验 / 1"},{"id":"text_0009","path":"/experience/1","label":"玩家体验 / 2"},{"id":"text_0010","path":"/experience/2","label":"玩家体验 / 3"},{"id":"text_0011","path":"/rules/0/title","label":"机制与规则 / 1 / 标题"},{"id":"text_0012","path":"/rules/0/body","label":"机制与规则 / 1 / 正文"},{"id":"text_0013","path":"/rules/1/title","label":"机制与规则 / 2 / 标题"},{"id":"text_0014","path":"/rules/1/body","label":"机制与规则 / 2 / 正文"},{"id":"text_0015","path":"/rules/2/title","label":"机制与规则 / 3 / 标题"},{"id":"text_0016","path":"/rules/2/body","label":"机制与规则 / 3 / 正文"},{"id":"text_0017","path":"/rules/3/title","label":"机制与规则 / 4 / 标题"},{"id":"text_0018","path":"/rules/3/body","label":"机制与规则 / 4 / 正文"},{"id":"text_0019","path":"/rules/4/title","label":"机制与规则 / 5 / 标题"},{"id":"text_0020","path":"/rules/4/body","label":"机制与规则 / 5 / 正文"},{"id":"text_0021","path":"/rules/5/title","label":"机制与规则 / 6 / 标题"},{"id":"text_0022","path":"/rules/5/body","label":"机制与规则 / 6 / 正文"},{"id":"text_0023","path":"/parameters/headers/0","label":"关键参数 / 表头 / 1"},{"id":"text_0024","path":"/parameters/headers/1","label":"关键参数 / 表头 / 2"},{"id":"text_0025","path":"/parameters/headers/2","label":"关键参数 / 表头 / 3"},{"id":"text_0026","path":"/parameters/rows/0/0","label":"关键参数 / 表格行 / 1 / 1"},{"id":"text_0027","path":"/parameters/rows/0/1","label":"关键参数 / 表格行 / 1 / 2"},{"id":"text_0028","path":"/parameters/rows/0/2","label":"关键参数 / 表格行 / 1 / 3"},{"id":"text_0029","path":"/parameters/rows/1/0","label":"关键参数 / 表格行 / 2 / 1"},{"id":"text_0030","path":"/parameters/rows/1/1","label":"关键参数 / 表格行 / 2 / 2"},{"id":"text_0031","path":"/parameters/rows/1/2","label":"关键参数 / 表格行 / 2 / 3"},{"id":"text_0032","path":"/parameters/rows/2/0","label":"关键参数 / 表格行 / 3 / 1"},{"id":"text_0033","path":"/parameters/rows/2/1","label":"关键参数 / 表格行 / 3 / 2"},{"id":"text_0034","path":"/parameters/rows/2/2","label":"关键参数 / 表格行 / 3 / 3"},{"id":"text_0035","path":"/parameters/rows/3/0","label":"关键参数 / 表格行 / 4 / 1"},{"id":"text_0036","path":"/parameters/rows/3/1","label":"关键参数 / 表格行 / 4 / 2"},{"id":"text_0037","path":"/parameters/rows/3/2","label":"关键参数 / 表格行 / 4 / 3"},{"id":"text_0038","path":"/parameters/rows/4/0","label":"关键参数 / 表格行 / 5 / 1"},{"id":"text_0039","path":"/parameters/rows/4/1","label":"关键参数 / 表格行 / 5 / 2"},{"id":"text_0040","path":"/parameters/rows/4/2","label":"关键参数 / 表格行 / 5 / 3"},{"id":"text_0041","path":"/parameters/rows/5/0","label":"关键参数 / 表格行 / 6 / 1"},{"id":"text_0042","path":"/parameters/rows/5/1","label":"关键参数 / 表格行 / 6 / 2"},{"id":"text_0043","path":"/parameters/rows/5/2","label":"关键参数 / 表格行 / 6 / 3"},{"id":"text_0044","path":"/parameters/rows/6/0","label":"关键参数 / 表格行 / 7 / 1"},{"id":"text_0045","path":"/parameters/rows/6/1","label":"关键参数 / 表格行 / 7 / 2"},{"id":"text_0046","path":"/parameters/rows/6/2","label":"关键参数 / 表格行 / 7 / 3"},{"id":"text_0047","path":"/parameters/rows/7/0","label":"关键参数 / 表格行 / 8 / 1"},{"id":"text_0048","path":"/parameters/rows/7/1","label":"关键参数 / 表格行 / 8 / 2"},{"id":"text_0049","path":"/parameters/rows/7/2","label":"关键参数 / 表格行 / 8 / 3"},{"id":"text_0050","path":"/flow/0/title","label":"流程 / 1 / 标题"},{"id":"text_0051","path":"/flow/0/detail","label":"流程 / 1 / 说明"},{"id":"text_0052","path":"/flow/1/title","label":"流程 / 2 / 标题"},{"id":"text_0053","path":"/flow/1/detail","label":"流程 / 2 / 说明"},{"id":"text_0054","path":"/flow/2/title","label":"流程 / 3 / 标题"},{"id":"text_0055","path":"/flow/2/detail","label":"流程 / 3 / 说明"},{"id":"text_0056","path":"/flow/3/title","label":"流程 / 4 / 标题"},{"id":"text_0057","path":"/flow/3/detail","label":"流程 / 4 / 说明"},{"id":"text_0058","path":"/flow/4/title","label":"流程 / 5 / 标题"},{"id":"text_0059","path":"/flow/4/detail","label":"流程 / 5 / 说明"},{"id":"text_0060","path":"/flow/5/title","label":"流程 / 6 / 标题"},{"id":"text_0061","path":"/flow/5/detail","label":"流程 / 6 / 说明"},{"id":"text_0062","path":"/flow/6/title","label":"流程 / 7 / 标题"},{"id":"text_0063","path":"/flow/6/detail","label":"流程 / 7 / 说明"},{"id":"text_0064","path":"/flow/7/title","label":"流程 / 8 / 标题"},{"id":"text_0065","path":"/flow/7/detail","label":"流程 / 8 / 说明"},{"id":"text_0066","path":"/implementation/0/title","label":"实现方式 / 1 / 标题"},{"id":"text_0067","path":"/implementation/0/body","label":"实现方式 / 1 / 正文"},{"id":"text_0068","path":"/implementation/1/title","label":"实现方式 / 2 / 标题"},{"id":"text_0069","path":"/implementation/1/body","label":"实现方式 / 2 / 正文"},{"id":"text_0070","path":"/implementation/2/title","label":"实现方式 / 3 / 标题"},{"id":"text_0071","path":"/implementation/2/body","label":"实现方式 / 3 / 正文"},{"id":"text_0072","path":"/implementation/3/title","label":"实现方式 / 4 / 标题"},{"id":"text_0073","path":"/implementation/3/body","label":"实现方式 / 4 / 正文"},{"id":"text_0098","path":"/validation/0/label","label":"验证结果 / 1 / 名称"},{"id":"text_0099","path":"/validation/0/result","label":"验证结果 / 1 / 结果"},{"id":"text_0100","path":"/validation/0/source","label":"验证结果 / 1 / 依据"},{"id":"text_0101","path":"/validation/1/label","label":"验证结果 / 2 / 名称"},{"id":"text_0102","path":"/validation/1/result","label":"验证结果 / 2 / 结果"},{"id":"text_0103","path":"/validation/1/source","label":"验证结果 / 2 / 依据"},{"id":"text_0104","path":"/validation/2/label","label":"验证结果 / 3 / 名称"},{"id":"text_0105","path":"/validation/2/result","label":"验证结果 / 3 / 结果"},{"id":"text_0106","path":"/validation/2/source","label":"验证结果 / 3 / 依据"},{"id":"text_0107","path":"/validation/3/label","label":"验证结果 / 4 / 名称"},{"id":"text_0108","path":"/validation/3/result","label":"验证结果 / 4 / 结果"},{"id":"text_0109","path":"/validation/3/source","label":"验证结果 / 4 / 依据"},{"id":"text_0110","path":"/validation/4/label","label":"验证结果 / 5 / 名称"},{"id":"text_0111","path":"/validation/4/result","label":"验证结果 / 5 / 结果"},{"id":"text_0112","path":"/validation/4/source","label":"验证结果 / 5 / 依据"},{"id":"text_0113","path":"/limitations/0","label":"尚存问题 / 1"},{"id":"text_0114","path":"/limitations/1","label":"尚存问题 / 2"},{"id":"text_0115","path":"/limitations/2","label":"尚存问题 / 3"},{"id":"text_0116","path":"/limitations/3","label":"尚存问题 / 4"},{"id":"text_0117","path":"/limitations/4","label":"尚存问题 / 5"},{"id":"text_0118","path":"/limitations/5","label":"尚存问题 / 6"},{"id":"text_0119","path":"/sources/0/file","label":"项目依据 / 1 / 文件路径"},{"id":"text_0120","path":"/sources/0/lines","label":"项目依据 / 1 / 行号"},{"id":"text_0121","path":"/sources/0/claim","label":"项目依据 / 1 / 支持的结论"},{"id":"text_0122","path":"/sources/1/file","label":"项目依据 / 2 / 文件路径"},{"id":"text_0123","path":"/sources/1/lines","label":"项目依据 / 2 / 行号"},{"id":"text_0124","path":"/sources/1/claim","label":"项目依据 / 2 / 支持的结论"},{"id":"text_0125","path":"/sources/2/file","label":"项目依据 / 3 / 文件路径"},{"id":"text_0126","path":"/sources/2/lines","label":"项目依据 / 3 / 行号"},{"id":"text_0127","path":"/sources/2/claim","label":"项目依据 / 3 / 支持的结论"},{"id":"text_0128","path":"/sources/3/file","label":"项目依据 / 4 / 文件路径"},{"id":"text_0129","path":"/sources/3/lines","label":"项目依据 / 4 / 行号"},{"id":"text_0130","path":"/sources/3/claim","label":"项目依据 / 4 / 支持的结论"},{"id":"text_0131","path":"/sources/4/file","label":"项目依据 / 5 / 文件路径"},{"id":"text_0132","path":"/sources/4/lines","label":"项目依据 / 5 / 行号"},{"id":"text_0133","path":"/sources/4/claim","label":"项目依据 / 5 / 支持的结论"},{"id":"text_0134","path":"/sources/5/file","label":"项目依据 / 6 / 文件路径"},{"id":"text_0135","path":"/sources/5/lines","label":"项目依据 / 6 / 行号"},{"id":"text_0136","path":"/sources/5/claim","label":"项目依据 / 6 / 支持的结论"},{"id":"text_0137","path":"/sources/6/file","label":"项目依据 / 7 / 文件路径"},{"id":"text_0138","path":"/sources/6/lines","label":"项目依据 / 7 / 行号"},{"id":"text_0139","path":"/sources/6/claim","label":"项目依据 / 7 / 支持的结论"},{"id":"text_0140","path":"/sources/7/file","label":"项目依据 / 8 / 文件路径"},{"id":"text_0141","path":"/sources/7/lines","label":"项目依据 / 8 / 行号"},{"id":"text_0142","path":"/sources/7/claim","label":"项目依据 / 8 / 支持的结论"},{"id":"text_0143","path":"/sources/8/file","label":"项目依据 / 9 / 文件路径"},{"id":"text_0144","path":"/sources/8/lines","label":"项目依据 / 9 / 行号"},{"id":"text_0145","path":"/sources/8/claim","label":"项目依据 / 9 / 支持的结论"},{"id":"text_0146","path":"/sources/9/file","label":"项目依据 / 10 / 文件路径"},{"id":"text_0147","path":"/sources/9/lines","label":"项目依据 / 10 / 行号"},{"id":"text_0148","path":"/sources/9/claim","label":"项目依据 / 10 / 支持的结论"},{"id":"text_0149","path":"/sources/10/file","label":"项目依据 / 11 / 文件路径"},{"id":"text_0150","path":"/sources/10/lines","label":"项目依据 / 11 / 行号"},{"id":"text_0151","path":"/sources/10/claim","label":"项目依据 / 11 / 支持的结论"},{"id":"text_0152","path":"/sources/11/file","label":"项目依据 / 12 / 文件路径"},{"id":"text_0153","path":"/sources/11/lines","label":"项目依据 / 12 / 行号"},{"id":"text_0154","path":"/sources/11/claim","label":"项目依据 / 12 / 支持的结论"},{"id":"text_0155","path":"/sources/12/file","label":"项目依据 / 13 / 文件路径"},{"id":"text_0156","path":"/sources/12/lines","label":"项目依据 / 13 / 行号"},{"id":"text_0157","path":"/sources/12/claim","label":"项目依据 / 13 / 支持的结论"},{"id":"text_0158","path":"/sources/13/file","label":"项目依据 / 14 / 文件路径"},{"id":"text_0159","path":"/sources/13/lines","label":"项目依据 / 14 / 行号"},{"id":"text_0160","path":"/sources/13/claim","label":"项目依据 / 14 / 支持的结论"},{"id":"text_0161","path":"/sources/14/file","label":"项目依据 / 15 / 文件路径"},{"id":"text_0162","path":"/sources/14/lines","label":"项目依据 / 15 / 行号"},{"id":"text_0163","path":"/sources/14/claim","label":"项目依据 / 15 / 支持的结论"},{"id":"text_0164","path":"/sources/15/file","label":"项目依据 / 16 / 文件路径"},{"id":"text_0165","path":"/sources/15/lines","label":"项目依据 / 16 / 行号"},{"id":"text_0166","path":"/sources/15/claim","label":"项目依据 / 16 / 支持的结论"},{"id":"text_0167","path":"/map/scene","label":"主关卡示意 / 场景"},{"id":"text_0168","path":"/map/coordinateSystem","label":"主关卡示意 / 坐标说明"},{"id":"text_0169","path":"/map/points/0/name","label":"主关卡示意 / 交互位置 / 1 / 名称"},{"id":"text_0170","path":"/map/points/0/type","label":"主关卡示意 / 交互位置 / 1 / 类型"},{"id":"text_0171","path":"/map/points/1/name","label":"主关卡示意 / 交互位置 / 2 / 名称"},{"id":"text_0172","path":"/map/points/1/type","label":"主关卡示意 / 交互位置 / 2 / 类型"},{"id":"text_0173","path":"/map/points/2/name","label":"主关卡示意 / 交互位置 / 3 / 名称"},{"id":"text_0174","path":"/map/points/2/type","label":"主关卡示意 / 交互位置 / 3 / 类型"},{"id":"text_0175","path":"/map/points/3/name","label":"主关卡示意 / 交互位置 / 4 / 名称"},{"id":"text_0176","path":"/map/points/3/type","label":"主关卡示意 / 交互位置 / 4 / 类型"},{"id":"text_0177","path":"/map/points/4/name","label":"主关卡示意 / 交互位置 / 5 / 名称"},{"id":"text_0178","path":"/map/points/4/type","label":"主关卡示意 / 交互位置 / 5 / 类型"},{"id":"text_0179","path":"/map/points/5/name","label":"主关卡示意 / 交互位置 / 6 / 名称"},{"id":"text_0180","path":"/map/points/5/type","label":"主关卡示意 / 交互位置 / 6 / 类型"},{"id":"text_0181","path":"/map/points/6/name","label":"主关卡示意 / 交互位置 / 7 / 名称"},{"id":"text_0182","path":"/map/points/6/type","label":"主关卡示意 / 交互位置 / 7 / 类型"},{"id":"text_0183","path":"/map/note","label":"主关卡示意 / 备注"},{"id":"text_0184","path":"/additionalMaps/0/scene","label":"其他关卡示意 / 1 / 场景"},{"id":"text_0185","path":"/additionalMaps/0/points/0/name","label":"其他关卡示意 / 1 / 交互位置 / 1 / 名称"},{"id":"text_0186","path":"/additionalMaps/0/points/0/type","label":"其他关卡示意 / 1 / 交互位置 / 1 / 类型"},{"id":"text_0187","path":"/additionalMaps/0/points/1/name","label":"其他关卡示意 / 1 / 交互位置 / 2 / 名称"},{"id":"text_0188","path":"/additionalMaps/0/points/1/type","label":"其他关卡示意 / 1 / 交互位置 / 2 / 类型"},{"id":"text_0189","path":"/additionalMaps/0/points/2/name","label":"其他关卡示意 / 1 / 交互位置 / 3 / 名称"},{"id":"text_0190","path":"/additionalMaps/0/points/2/type","label":"其他关卡示意 / 1 / 交互位置 / 3 / 类型"},{"id":"text_0191","path":"/additionalMaps/0/points/3/name","label":"其他关卡示意 / 1 / 交互位置 / 4 / 名称"},{"id":"text_0192","path":"/additionalMaps/0/points/3/type","label":"其他关卡示意 / 1 / 交互位置 / 4 / 类型"},{"id":"text_0193","path":"/additionalMaps/0/points/4/name","label":"其他关卡示意 / 1 / 交互位置 / 5 / 名称"},{"id":"text_0194","path":"/additionalMaps/0/points/4/type","label":"其他关卡示意 / 1 / 交互位置 / 5 / 类型"},{"id":"text_0195","path":"/additionalMaps/0/obstacles/0/name","label":"其他关卡示意 / 1 / obstacles / 1 / 名称"},{"id":"text_0196","path":"/additionalMaps/0/obstacles/0/kind","label":"其他关卡示意 / 1 / obstacles / 1 / kind"},{"id":"text_0197","path":"/additionalMaps/0/obstacles/1/name","label":"其他关卡示意 / 1 / obstacles / 2 / 名称"},{"id":"text_0198","path":"/additionalMaps/0/obstacles/1/kind","label":"其他关卡示意 / 1 / obstacles / 2 / kind"},{"id":"text_0199","path":"/additionalMaps/0/obstacles/2/name","label":"其他关卡示意 / 1 / obstacles / 3 / 名称"},{"id":"text_0200","path":"/additionalMaps/0/obstacles/2/kind","label":"其他关卡示意 / 1 / obstacles / 3 / kind"},{"id":"text_0201","path":"/additionalMaps/0/obstacles/3/name","label":"其他关卡示意 / 1 / obstacles / 4 / 名称"},{"id":"text_0202","path":"/additionalMaps/0/obstacles/3/kind","label":"其他关卡示意 / 1 / obstacles / 4 / kind"},{"id":"text_0203","path":"/additionalMaps/0/obstacles/4/name","label":"其他关卡示意 / 1 / obstacles / 5 / 名称"},{"id":"text_0204","path":"/additionalMaps/0/obstacles/4/kind","label":"其他关卡示意 / 1 / obstacles / 5 / kind"},{"id":"text_0205","path":"/additionalMaps/0/obstacles/5/name","label":"其他关卡示意 / 1 / obstacles / 6 / 名称"},{"id":"text_0206","path":"/additionalMaps/0/obstacles/5/kind","label":"其他关卡示意 / 1 / obstacles / 6 / kind"},{"id":"text_0207","path":"/additionalMaps/0/obstacles/6/name","label":"其他关卡示意 / 1 / obstacles / 7 / 名称"},{"id":"text_0208","path":"/additionalMaps/0/obstacles/6/kind","label":"其他关卡示意 / 1 / obstacles / 7 / kind"},{"id":"text_0209","path":"/additionalMaps/0/obstacles/7/name","label":"其他关卡示意 / 1 / obstacles / 8 / 名称"},{"id":"text_0210","path":"/additionalMaps/0/obstacles/7/kind","label":"其他关卡示意 / 1 / obstacles / 8 / kind"},{"id":"text_0211","path":"/additionalMaps/0/obstacles/8/name","label":"其他关卡示意 / 1 / obstacles / 9 / 名称"},{"id":"text_0212","path":"/additionalMaps/0/obstacles/8/kind","label":"其他关卡示意 / 1 / obstacles / 9 / kind"},{"id":"text_0213","path":"/additionalMaps/0/obstacles/9/name","label":"其他关卡示意 / 1 / obstacles / 10 / 名称"},{"id":"text_0214","path":"/additionalMaps/0/obstacles/9/kind","label":"其他关卡示意 / 1 / obstacles / 10 / kind"},{"id":"text_0215","path":"/additionalMaps/0/obstacles/10/name","label":"其他关卡示意 / 1 / obstacles / 11 / 名称"},{"id":"text_0216","path":"/additionalMaps/0/obstacles/10/kind","label":"其他关卡示意 / 1 / obstacles / 11 / kind"},{"id":"text_0217","path":"/additionalMaps/0/obstacles/11/name","label":"其他关卡示意 / 1 / obstacles / 12 / 名称"},{"id":"text_0218","path":"/additionalMaps/0/obstacles/11/kind","label":"其他关卡示意 / 1 / obstacles / 12 / kind"},{"id":"text_0219","path":"/additionalMaps/0/obstacles/12/name","label":"其他关卡示意 / 1 / obstacles / 13 / 名称"},{"id":"text_0220","path":"/additionalMaps/0/obstacles/12/kind","label":"其他关卡示意 / 1 / obstacles / 13 / kind"},{"id":"text_0221","path":"/additionalMaps/0/obstacles/13/name","label":"其他关卡示意 / 1 / obstacles / 14 / 名称"},{"id":"text_0222","path":"/additionalMaps/0/obstacles/13/kind","label":"其他关卡示意 / 1 / obstacles / 14 / kind"},{"id":"text_0223","path":"/additionalMaps/0/obstacles/14/name","label":"其他关卡示意 / 1 / obstacles / 15 / 名称"},{"id":"text_0224","path":"/additionalMaps/0/obstacles/14/kind","label":"其他关卡示意 / 1 / obstacles / 15 / kind"},{"id":"text_0225","path":"/additionalMaps/0/obstacles/15/name","label":"其他关卡示意 / 1 / obstacles / 16 / 名称"},{"id":"text_0226","path":"/additionalMaps/0/obstacles/15/kind","label":"其他关卡示意 / 1 / obstacles / 16 / kind"},{"id":"text_0227","path":"/additionalMaps/0/obstacles/16/name","label":"其他关卡示意 / 1 / obstacles / 17 / 名称"},{"id":"text_0228","path":"/additionalMaps/0/obstacles/16/kind","label":"其他关卡示意 / 1 / obstacles / 17 / kind"},{"id":"text_0229","path":"/additionalMaps/0/obstacles/17/name","label":"其他关卡示意 / 1 / obstacles / 18 / 名称"},{"id":"text_0230","path":"/additionalMaps/0/obstacles/17/kind","label":"其他关卡示意 / 1 / obstacles / 18 / kind"},{"id":"text_0231","path":"/additionalMaps/0/obstacles/18/name","label":"其他关卡示意 / 1 / obstacles / 19 / 名称"},{"id":"text_0232","path":"/additionalMaps/0/obstacles/18/kind","label":"其他关卡示意 / 1 / obstacles / 19 / kind"},{"id":"text_0233","path":"/additionalMaps/0/obstacles/19/name","label":"其他关卡示意 / 1 / obstacles / 20 / 名称"},{"id":"text_0234","path":"/additionalMaps/0/obstacles/19/kind","label":"其他关卡示意 / 1 / obstacles / 20 / kind"},{"id":"text_0235","path":"/additionalMaps/0/obstacles/20/name","label":"其他关卡示意 / 1 / obstacles / 21 / 名称"},{"id":"text_0236","path":"/additionalMaps/0/obstacles/20/kind","label":"其他关卡示意 / 1 / obstacles / 21 / kind"},{"id":"text_0237","path":"/additionalMaps/0/obstacles/21/name","label":"其他关卡示意 / 1 / obstacles / 22 / 名称"},{"id":"text_0238","path":"/additionalMaps/0/obstacles/21/kind","label":"其他关卡示意 / 1 / obstacles / 22 / kind"},{"id":"text_0239","path":"/additionalMaps/0/note","label":"其他关卡示意 / 1 / 备注"},{"id":"text_0240","path":"/additionalMaps/1/scene","label":"其他关卡示意 / 2 / 场景"},{"id":"text_0241","path":"/additionalMaps/1/points/0/name","label":"其他关卡示意 / 2 / 交互位置 / 1 / 名称"},{"id":"text_0242","path":"/additionalMaps/1/points/0/type","label":"其他关卡示意 / 2 / 交互位置 / 1 / 类型"},{"id":"text_0243","path":"/additionalMaps/1/points/1/name","label":"其他关卡示意 / 2 / 交互位置 / 2 / 名称"},{"id":"text_0244","path":"/additionalMaps/1/points/1/type","label":"其他关卡示意 / 2 / 交互位置 / 2 / 类型"},{"id":"text_0245","path":"/additionalMaps/1/points/2/name","label":"其他关卡示意 / 2 / 交互位置 / 3 / 名称"},{"id":"text_0246","path":"/additionalMaps/1/points/2/type","label":"其他关卡示意 / 2 / 交互位置 / 3 / 类型"},{"id":"text_0247","path":"/additionalMaps/1/points/3/name","label":"其他关卡示意 / 2 / 交互位置 / 4 / 名称"},{"id":"text_0248","path":"/additionalMaps/1/points/3/type","label":"其他关卡示意 / 2 / 交互位置 / 4 / 类型"},{"id":"text_0249","path":"/additionalMaps/1/points/4/name","label":"其他关卡示意 / 2 / 交互位置 / 5 / 名称"},{"id":"text_0250","path":"/additionalMaps/1/points/4/type","label":"其他关卡示意 / 2 / 交互位置 / 5 / 类型"},{"id":"text_0251","path":"/additionalMaps/1/obstacles/0/name","label":"其他关卡示意 / 2 / obstacles / 1 / 名称"},{"id":"text_0252","path":"/additionalMaps/1/obstacles/0/kind","label":"其他关卡示意 / 2 / obstacles / 1 / kind"},{"id":"text_0253","path":"/additionalMaps/1/obstacles/1/name","label":"其他关卡示意 / 2 / obstacles / 2 / 名称"},{"id":"text_0254","path":"/additionalMaps/1/obstacles/1/kind","label":"其他关卡示意 / 2 / obstacles / 2 / kind"},{"id":"text_0255","path":"/additionalMaps/1/obstacles/2/name","label":"其他关卡示意 / 2 / obstacles / 3 / 名称"},{"id":"text_0256","path":"/additionalMaps/1/obstacles/2/kind","label":"其他关卡示意 / 2 / obstacles / 3 / kind"},{"id":"text_0257","path":"/additionalMaps/1/obstacles/3/name","label":"其他关卡示意 / 2 / obstacles / 4 / 名称"},{"id":"text_0258","path":"/additionalMaps/1/obstacles/3/kind","label":"其他关卡示意 / 2 / obstacles / 4 / kind"},{"id":"text_0259","path":"/additionalMaps/1/obstacles/4/name","label":"其他关卡示意 / 2 / obstacles / 5 / 名称"},{"id":"text_0260","path":"/additionalMaps/1/obstacles/4/kind","label":"其他关卡示意 / 2 / obstacles / 5 / kind"},{"id":"text_0261","path":"/additionalMaps/1/obstacles/5/name","label":"其他关卡示意 / 2 / obstacles / 6 / 名称"},{"id":"text_0262","path":"/additionalMaps/1/obstacles/5/kind","label":"其他关卡示意 / 2 / obstacles / 6 / kind"},{"id":"text_0263","path":"/additionalMaps/1/note","label":"其他关卡示意 / 2 / 备注"},{"id":"text_0264","path":"/uiIterations/title","label":"uiIterations / 标题"},{"id":"text_0265","path":"/uiIterations/cases/0/id","label":"uiIterations / cases / 1 / id"},{"id":"text_0266","path":"/uiIterations/cases/0/title","label":"uiIterations / cases / 1 / 标题"},{"id":"text_0267","path":"/uiIterations/cases/0/intro","label":"uiIterations / cases / 1 / intro"},{"id":"text_0268","path":"/uiIterations/cases/0/before/kind","label":"uiIterations / cases / 1 / before / kind"},{"id":"text_0269","path":"/uiIterations/cases/0/before/path","label":"uiIterations / cases / 1 / before / path"},{"id":"text_0270","path":"/uiIterations/cases/0/after/kind","label":"uiIterations / cases / 1 / after / kind"},{"id":"text_0271","path":"/uiIterations/cases/0/after/path","label":"uiIterations / cases / 1 / after / path"},{"id":"text_0272","path":"/uiIterations/cases/1/id","label":"uiIterations / cases / 2 / id"},{"id":"text_0273","path":"/uiIterations/cases/1/title","label":"uiIterations / cases / 2 / 标题"},{"id":"text_0274","path":"/uiIterations/cases/1/intro","label":"uiIterations / cases / 2 / intro"},{"id":"text_0275","path":"/uiIterations/cases/1/before/kind","label":"uiIterations / cases / 2 / before / kind"},{"id":"text_0276","path":"/uiIterations/cases/1/before/path","label":"uiIterations / cases / 2 / before / path"},{"id":"text_0277","path":"/uiIterations/cases/1/after/kind","label":"uiIterations / cases / 2 / after / kind"},{"id":"text_0278","path":"/uiIterations/cases/1/after/path","label":"uiIterations / cases / 2 / after / path"},{"id":"text_0279","path":"/uiIterations/cases/2/id","label":"uiIterations / cases / 3 / id"},{"id":"text_0280","path":"/uiIterations/cases/2/title","label":"uiIterations / cases / 3 / 标题"},{"id":"text_0281","path":"/uiIterations/cases/2/intro","label":"uiIterations / cases / 3 / intro"},{"id":"text_0282","path":"/uiIterations/cases/2/before/kind","label":"uiIterations / cases / 3 / before / kind"},{"id":"text_0283","path":"/uiIterations/cases/2/before/path","label":"uiIterations / cases / 3 / before / path"},{"id":"text_0284","path":"/uiIterations/cases/2/after/kind","label":"uiIterations / cases / 3 / after / kind"},{"id":"text_0285","path":"/uiIterations/cases/2/after/path","label":"uiIterations / cases / 3 / after / path"},{"id":"text_0286","path":"/uiIterations/cases/3/id","label":"uiIterations / cases / 4 / id"},{"id":"text_0287","path":"/uiIterations/cases/3/title","label":"uiIterations / cases / 4 / 标题"},{"id":"text_0288","path":"/uiIterations/cases/3/intro","label":"uiIterations / cases / 4 / intro"},{"id":"text_0289","path":"/uiIterations/cases/3/before/kind","label":"uiIterations / cases / 4 / before / kind"},{"id":"text_0290","path":"/uiIterations/cases/3/before/path","label":"uiIterations / cases / 4 / before / path"},{"id":"text_0291","path":"/uiIterations/cases/3/after/kind","label":"uiIterations / cases / 4 / after / kind"},{"id":"text_0292","path":"/uiIterations/cases/3/after/path","label":"uiIterations / cases / 4 / after / path"}]'),io={format:to,version:eo,tree:oo,fields:no},ao="jianghuransheng-portfolio-article",lo=1,ro={title:{$text:"text_0001"},subtitle:{$text:"text_0002"},summary:{$text:"text_0003"},status:{$text:"text_0004"},goals:[{$text:"text_0005"},{$text:"text_0006"},{$text:"text_0007"}],experience:[{$text:"text_0008"},{$text:"text_0009"},{$text:"text_0010"}],rules:[{title:{$text:"text_0011"},body:{$text:"text_0012"}},{title:{$text:"text_0013"},body:{$text:"text_0014"}},{title:{$text:"text_0015"},body:{$text:"text_0016"}},{title:{$text:"text_0017"},body:{$text:"text_0018"}},{title:{$text:"text_0019"},body:{$text:"text_0020"}},{title:{$text:"text_0021"},body:{$text:"text_0022"}},{title:{$text:"text_0023"},body:{$text:"text_0024"}}],parameters:{headers:[{$text:"text_0025"},{$text:"text_0026"},{$text:"text_0027"}],rows:[[{$text:"text_0028"},{$text:"text_0029"},{$text:"text_0030"}],[{$text:"text_0031"},{$text:"text_0032"},{$text:"text_0033"}],[{$text:"text_0034"},{$text:"text_0035"},{$text:"text_0036"}],[{$text:"text_0037"},{$text:"text_0038"},{$text:"text_0039"}],[{$text:"text_0040"},{$text:"text_0041"},{$text:"text_0042"}],[{$text:"text_0043"},{$text:"text_0044"},{$text:"text_0045"}],[{$text:"text_0046"},{$text:"text_0047"},{$text:"text_0048"}]]},flow:[{title:{$text:"text_0049"},detail:{$text:"text_0050"}},{title:{$text:"text_0051"},detail:{$text:"text_0052"}},{title:{$text:"text_0053"},detail:{$text:"text_0054"}},{title:{$text:"text_0055"},detail:{$text:"text_0056"}},{title:{$text:"text_0057"},detail:{$text:"text_0058"}}],implementation:[{title:{$text:"text_0059"},body:{$text:"text_0060"}},{title:{$text:"text_0061"},body:{$text:"text_0062"}},{title:{$text:"text_0063"},body:{$text:"text_0064"}},{title:{$text:"text_0065"},body:{$text:"text_0066"}},{title:{$text:"text_0067"},body:{$text:"text_0068"}}],iterations:[{problem:{$text:"text_0069"},cause:{$text:"text_0070"},change:{$text:"text_0071"},result:{$text:"text_0072"},status:{$text:"text_0073"},source:{$text:"text_0074"}},{problem:{$text:"text_0075"},cause:{$text:"text_0076"},change:{$text:"text_0077"},result:{$text:"text_0078"},status:{$text:"text_0079"},source:{$text:"text_0080"}},{problem:{$text:"text_0081"},cause:{$text:"text_0082"},change:{$text:"text_0083"},result:{$text:"text_0084"},status:{$text:"text_0085"},source:{$text:"text_0086"}},{problem:{$text:"text_0087"},cause:{$text:"text_0088"},change:{$text:"text_0089"},result:{$text:"text_0090"},status:{$text:"text_0091"},source:{$text:"text_0092"}}],validation:[{label:{$text:"text_0093"},result:{$text:"text_0094"},source:{$text:"text_0095"}},{label:{$text:"text_0096"},result:{$text:"text_0097"},source:{$text:"text_0098"}},{label:{$text:"text_0099"},result:{$text:"text_0100"},source:{$text:"text_0101"}},{label:{$text:"text_0102"},result:{$text:"text_0103"},source:{$text:"text_0104"}},{label:{$text:"text_0105"},result:{$text:"text_0106"},source:{$text:"text_0107"}},{label:{$text:"text_0108"},result:{$text:"text_0109"},source:{$text:"text_0110"}}],limitations:[{$text:"text_0111"},{$text:"text_0112"},{$text:"text_0113"},{$text:"text_0114"},{$text:"text_0115"},{$text:"text_0116"},{$text:"text_0117"}],sources:[{file:{$text:"text_0118"},lines:{$text:"text_0119"},claim:{$text:"text_0120"}},{file:{$text:"text_0121"},lines:{$text:"text_0122"},claim:{$text:"text_0123"}},{file:{$text:"text_0124"},lines:{$text:"text_0125"},claim:{$text:"text_0126"}},{file:{$text:"text_0127"},lines:{$text:"text_0128"},claim:{$text:"text_0129"}},{file:{$text:"text_0130"},lines:{$text:"text_0131"},claim:{$text:"text_0132"}},{file:{$text:"text_0133"},lines:{$text:"text_0134"},claim:{$text:"text_0135"}},{file:{$text:"text_0136"},lines:{$text:"text_0137"},claim:{$text:"text_0138"}},{file:{$text:"text_0139"},lines:{$text:"text_0140"},claim:{$text:"text_0141"}},{file:{$text:"text_0142"},lines:{$text:"text_0143"},claim:{$text:"text_0144"}}]},so=JSON.parse('[{"id":"text_0001","path":"/title","label":"标题"},{"id":"text_0002","path":"/subtitle","label":"副标题"},{"id":"text_0003","path":"/summary","label":"简介"},{"id":"text_0004","path":"/status","label":"开发状态"},{"id":"text_0005","path":"/goals/0","label":"设计目标 / 1"},{"id":"text_0006","path":"/goals/1","label":"设计目标 / 2"},{"id":"text_0007","path":"/goals/2","label":"设计目标 / 3"},{"id":"text_0008","path":"/experience/0","label":"玩家体验 / 1"},{"id":"text_0009","path":"/experience/1","label":"玩家体验 / 2"},{"id":"text_0010","path":"/experience/2","label":"玩家体验 / 3"},{"id":"text_0011","path":"/rules/0/title","label":"机制与规则 / 1 / 标题"},{"id":"text_0012","path":"/rules/0/body","label":"机制与规则 / 1 / 正文"},{"id":"text_0013","path":"/rules/1/title","label":"机制与规则 / 2 / 标题"},{"id":"text_0014","path":"/rules/1/body","label":"机制与规则 / 2 / 正文"},{"id":"text_0015","path":"/rules/2/title","label":"机制与规则 / 3 / 标题"},{"id":"text_0016","path":"/rules/2/body","label":"机制与规则 / 3 / 正文"},{"id":"text_0017","path":"/rules/3/title","label":"机制与规则 / 4 / 标题"},{"id":"text_0018","path":"/rules/3/body","label":"机制与规则 / 4 / 正文"},{"id":"text_0019","path":"/rules/4/title","label":"机制与规则 / 5 / 标题"},{"id":"text_0020","path":"/rules/4/body","label":"机制与规则 / 5 / 正文"},{"id":"text_0021","path":"/rules/5/title","label":"机制与规则 / 6 / 标题"},{"id":"text_0022","path":"/rules/5/body","label":"机制与规则 / 6 / 正文"},{"id":"text_0023","path":"/rules/6/title","label":"机制与规则 / 7 / 标题"},{"id":"text_0024","path":"/rules/6/body","label":"机制与规则 / 7 / 正文"},{"id":"text_0025","path":"/parameters/headers/0","label":"关键参数 / 表头 / 1"},{"id":"text_0026","path":"/parameters/headers/1","label":"关键参数 / 表头 / 2"},{"id":"text_0027","path":"/parameters/headers/2","label":"关键参数 / 表头 / 3"},{"id":"text_0028","path":"/parameters/rows/0/0","label":"关键参数 / 表格行 / 1 / 1"},{"id":"text_0029","path":"/parameters/rows/0/1","label":"关键参数 / 表格行 / 1 / 2"},{"id":"text_0030","path":"/parameters/rows/0/2","label":"关键参数 / 表格行 / 1 / 3"},{"id":"text_0031","path":"/parameters/rows/1/0","label":"关键参数 / 表格行 / 2 / 1"},{"id":"text_0032","path":"/parameters/rows/1/1","label":"关键参数 / 表格行 / 2 / 2"},{"id":"text_0033","path":"/parameters/rows/1/2","label":"关键参数 / 表格行 / 2 / 3"},{"id":"text_0034","path":"/parameters/rows/2/0","label":"关键参数 / 表格行 / 3 / 1"},{"id":"text_0035","path":"/parameters/rows/2/1","label":"关键参数 / 表格行 / 3 / 2"},{"id":"text_0036","path":"/parameters/rows/2/2","label":"关键参数 / 表格行 / 3 / 3"},{"id":"text_0037","path":"/parameters/rows/3/0","label":"关键参数 / 表格行 / 4 / 1"},{"id":"text_0038","path":"/parameters/rows/3/1","label":"关键参数 / 表格行 / 4 / 2"},{"id":"text_0039","path":"/parameters/rows/3/2","label":"关键参数 / 表格行 / 4 / 3"},{"id":"text_0040","path":"/parameters/rows/4/0","label":"关键参数 / 表格行 / 5 / 1"},{"id":"text_0041","path":"/parameters/rows/4/1","label":"关键参数 / 表格行 / 5 / 2"},{"id":"text_0042","path":"/parameters/rows/4/2","label":"关键参数 / 表格行 / 5 / 3"},{"id":"text_0043","path":"/parameters/rows/5/0","label":"关键参数 / 表格行 / 6 / 1"},{"id":"text_0044","path":"/parameters/rows/5/1","label":"关键参数 / 表格行 / 6 / 2"},{"id":"text_0045","path":"/parameters/rows/5/2","label":"关键参数 / 表格行 / 6 / 3"},{"id":"text_0046","path":"/parameters/rows/6/0","label":"关键参数 / 表格行 / 7 / 1"},{"id":"text_0047","path":"/parameters/rows/6/1","label":"关键参数 / 表格行 / 7 / 2"},{"id":"text_0048","path":"/parameters/rows/6/2","label":"关键参数 / 表格行 / 7 / 3"},{"id":"text_0049","path":"/flow/0/title","label":"流程 / 1 / 标题"},{"id":"text_0050","path":"/flow/0/detail","label":"流程 / 1 / 说明"},{"id":"text_0051","path":"/flow/1/title","label":"流程 / 2 / 标题"},{"id":"text_0052","path":"/flow/1/detail","label":"流程 / 2 / 说明"},{"id":"text_0053","path":"/flow/2/title","label":"流程 / 3 / 标题"},{"id":"text_0054","path":"/flow/2/detail","label":"流程 / 3 / 说明"},{"id":"text_0055","path":"/flow/3/title","label":"流程 / 4 / 标题"},{"id":"text_0056","path":"/flow/3/detail","label":"流程 / 4 / 说明"},{"id":"text_0057","path":"/flow/4/title","label":"流程 / 5 / 标题"},{"id":"text_0058","path":"/flow/4/detail","label":"流程 / 5 / 说明"},{"id":"text_0059","path":"/implementation/0/title","label":"实现方式 / 1 / 标题"},{"id":"text_0060","path":"/implementation/0/body","label":"实现方式 / 1 / 正文"},{"id":"text_0061","path":"/implementation/1/title","label":"实现方式 / 2 / 标题"},{"id":"text_0062","path":"/implementation/1/body","label":"实现方式 / 2 / 正文"},{"id":"text_0063","path":"/implementation/2/title","label":"实现方式 / 3 / 标题"},{"id":"text_0064","path":"/implementation/2/body","label":"实现方式 / 3 / 正文"},{"id":"text_0065","path":"/implementation/3/title","label":"实现方式 / 4 / 标题"},{"id":"text_0066","path":"/implementation/3/body","label":"实现方式 / 4 / 正文"},{"id":"text_0067","path":"/implementation/4/title","label":"实现方式 / 5 / 标题"},{"id":"text_0068","path":"/implementation/4/body","label":"实现方式 / 5 / 正文"},{"id":"text_0069","path":"/iterations/0/problem","label":"问题与迭代 / 1 / 发现问题"},{"id":"text_0070","path":"/iterations/0/cause","label":"问题与迭代 / 1 / 原因分析"},{"id":"text_0071","path":"/iterations/0/change","label":"问题与迭代 / 1 / 修改方案"},{"id":"text_0072","path":"/iterations/0/result","label":"问题与迭代 / 1 / 结果"},{"id":"text_0073","path":"/iterations/0/status","label":"问题与迭代 / 1 / 开发状态"},{"id":"text_0074","path":"/iterations/0/source","label":"问题与迭代 / 1 / 依据"},{"id":"text_0075","path":"/iterations/1/problem","label":"问题与迭代 / 2 / 发现问题"},{"id":"text_0076","path":"/iterations/1/cause","label":"问题与迭代 / 2 / 原因分析"},{"id":"text_0077","path":"/iterations/1/change","label":"问题与迭代 / 2 / 修改方案"},{"id":"text_0078","path":"/iterations/1/result","label":"问题与迭代 / 2 / 结果"},{"id":"text_0079","path":"/iterations/1/status","label":"问题与迭代 / 2 / 开发状态"},{"id":"text_0080","path":"/iterations/1/source","label":"问题与迭代 / 2 / 依据"},{"id":"text_0081","path":"/iterations/2/problem","label":"问题与迭代 / 3 / 发现问题"},{"id":"text_0082","path":"/iterations/2/cause","label":"问题与迭代 / 3 / 原因分析"},{"id":"text_0083","path":"/iterations/2/change","label":"问题与迭代 / 3 / 修改方案"},{"id":"text_0084","path":"/iterations/2/result","label":"问题与迭代 / 3 / 结果"},{"id":"text_0085","path":"/iterations/2/status","label":"问题与迭代 / 3 / 开发状态"},{"id":"text_0086","path":"/iterations/2/source","label":"问题与迭代 / 3 / 依据"},{"id":"text_0087","path":"/iterations/3/problem","label":"问题与迭代 / 4 / 发现问题"},{"id":"text_0088","path":"/iterations/3/cause","label":"问题与迭代 / 4 / 原因分析"},{"id":"text_0089","path":"/iterations/3/change","label":"问题与迭代 / 4 / 修改方案"},{"id":"text_0090","path":"/iterations/3/result","label":"问题与迭代 / 4 / 结果"},{"id":"text_0091","path":"/iterations/3/status","label":"问题与迭代 / 4 / 开发状态"},{"id":"text_0092","path":"/iterations/3/source","label":"问题与迭代 / 4 / 依据"},{"id":"text_0093","path":"/validation/0/label","label":"验证结果 / 1 / 名称"},{"id":"text_0094","path":"/validation/0/result","label":"验证结果 / 1 / 结果"},{"id":"text_0095","path":"/validation/0/source","label":"验证结果 / 1 / 依据"},{"id":"text_0096","path":"/validation/1/label","label":"验证结果 / 2 / 名称"},{"id":"text_0097","path":"/validation/1/result","label":"验证结果 / 2 / 结果"},{"id":"text_0098","path":"/validation/1/source","label":"验证结果 / 2 / 依据"},{"id":"text_0099","path":"/validation/2/label","label":"验证结果 / 3 / 名称"},{"id":"text_0100","path":"/validation/2/result","label":"验证结果 / 3 / 结果"},{"id":"text_0101","path":"/validation/2/source","label":"验证结果 / 3 / 依据"},{"id":"text_0102","path":"/validation/3/label","label":"验证结果 / 4 / 名称"},{"id":"text_0103","path":"/validation/3/result","label":"验证结果 / 4 / 结果"},{"id":"text_0104","path":"/validation/3/source","label":"验证结果 / 4 / 依据"},{"id":"text_0105","path":"/validation/4/label","label":"验证结果 / 5 / 名称"},{"id":"text_0106","path":"/validation/4/result","label":"验证结果 / 5 / 结果"},{"id":"text_0107","path":"/validation/4/source","label":"验证结果 / 5 / 依据"},{"id":"text_0108","path":"/validation/5/label","label":"验证结果 / 6 / 名称"},{"id":"text_0109","path":"/validation/5/result","label":"验证结果 / 6 / 结果"},{"id":"text_0110","path":"/validation/5/source","label":"验证结果 / 6 / 依据"},{"id":"text_0111","path":"/limitations/0","label":"尚存问题 / 1"},{"id":"text_0112","path":"/limitations/1","label":"尚存问题 / 2"},{"id":"text_0113","path":"/limitations/2","label":"尚存问题 / 3"},{"id":"text_0114","path":"/limitations/3","label":"尚存问题 / 4"},{"id":"text_0115","path":"/limitations/4","label":"尚存问题 / 5"},{"id":"text_0116","path":"/limitations/5","label":"尚存问题 / 6"},{"id":"text_0117","path":"/limitations/6","label":"尚存问题 / 7"},{"id":"text_0118","path":"/sources/0/file","label":"项目依据 / 1 / 文件路径"},{"id":"text_0119","path":"/sources/0/lines","label":"项目依据 / 1 / 行号"},{"id":"text_0120","path":"/sources/0/claim","label":"项目依据 / 1 / 支持的结论"},{"id":"text_0121","path":"/sources/1/file","label":"项目依据 / 2 / 文件路径"},{"id":"text_0122","path":"/sources/1/lines","label":"项目依据 / 2 / 行号"},{"id":"text_0123","path":"/sources/1/claim","label":"项目依据 / 2 / 支持的结论"},{"id":"text_0124","path":"/sources/2/file","label":"项目依据 / 3 / 文件路径"},{"id":"text_0125","path":"/sources/2/lines","label":"项目依据 / 3 / 行号"},{"id":"text_0126","path":"/sources/2/claim","label":"项目依据 / 3 / 支持的结论"},{"id":"text_0127","path":"/sources/3/file","label":"项目依据 / 4 / 文件路径"},{"id":"text_0128","path":"/sources/3/lines","label":"项目依据 / 4 / 行号"},{"id":"text_0129","path":"/sources/3/claim","label":"项目依据 / 4 / 支持的结论"},{"id":"text_0130","path":"/sources/4/file","label":"项目依据 / 5 / 文件路径"},{"id":"text_0131","path":"/sources/4/lines","label":"项目依据 / 5 / 行号"},{"id":"text_0132","path":"/sources/4/claim","label":"项目依据 / 5 / 支持的结论"},{"id":"text_0133","path":"/sources/5/file","label":"项目依据 / 6 / 文件路径"},{"id":"text_0134","path":"/sources/5/lines","label":"项目依据 / 6 / 行号"},{"id":"text_0135","path":"/sources/5/claim","label":"项目依据 / 6 / 支持的结论"},{"id":"text_0136","path":"/sources/6/file","label":"项目依据 / 7 / 文件路径"},{"id":"text_0137","path":"/sources/6/lines","label":"项目依据 / 7 / 行号"},{"id":"text_0138","path":"/sources/6/claim","label":"项目依据 / 7 / 支持的结论"},{"id":"text_0139","path":"/sources/7/file","label":"项目依据 / 8 / 文件路径"},{"id":"text_0140","path":"/sources/7/lines","label":"项目依据 / 8 / 行号"},{"id":"text_0141","path":"/sources/7/claim","label":"项目依据 / 8 / 支持的结论"},{"id":"text_0142","path":"/sources/8/file","label":"项目依据 / 9 / 文件路径"},{"id":"text_0143","path":"/sources/8/lines","label":"项目依据 / 9 / 行号"},{"id":"text_0144","path":"/sources/8/claim","label":"项目依据 / 9 / 支持的结论"}]'),xo={format:ao,version:lo,tree:ro,fields:so},Dt={"documents/system-breakdowns/delta/pdf-cover.png":"documents/system-breakdowns/delta/pdf-cover-thumb-ef7ba0e8.webp","documents/system-breakdowns/jiangnan/pdf-cover.png":"documents/system-breakdowns/jiangnan/pdf-cover-thumb-f7d83c35.webp","media/atmosphere/mountains.png":"media/optimized/images/52ecedcf2469cbe5-lightweight-v4.webp","media/combat-goals/attack-sequence.png":"media/optimized/combat-goals/attack-sequence-3cb2c71d-lightweight-v4.webp","media/combat-goals/draft-frames-01.png":"media/optimized/images/a4990434f41d92e1-lightweight-v4.webp","media/combat-goals/draft-frames-02.png":"media/optimized/images/93edaa18436554d1-lightweight-v4.webp","media/cover/snow-cover-20261019.png":"media/optimized/cover/snow-cover-20261019-57e5f39e-lightweight-v4.webp","media/home-previews/enemy-hit-reference.webp":"media/optimized/images/fb4b3791df1373c8-lightweight-v4.webp","media/home-previews/interaction-ui.webp":"media/optimized/images/bef6d2a879d0e997-lightweight-v4.webp","media/home-previews/inventory-current.webp":"media/optimized/images/f5b1c1eb8d65f322-lightweight-v4.webp","media/level-goals/jianghu-complete-flowchart.png":"media/optimized/level-goals/jianghu-complete-flowchart-15f8df9f-lightweight-v4.webp","media/ornate-entries/about-art.png":"media/optimized/ornate-entries/about-art-76ec4c66-lightweight-v4.webp","media/ornate-entries/about-frame.png":"media/optimized/ornate-entries/about-frame-65f303a8-lightweight-v4.webp","media/ornate-entries/breakdown-art.png":"media/optimized/ornate-entries/breakdown-art-39a6098a-lightweight-v4.webp","media/ornate-entries/breakdown-frame.png":"media/optimized/ornate-entries/breakdown-frame-7d55ef65-lightweight-v4.webp","media/ornate-entries/projects-art.png":"media/optimized/ornate-entries/projects-art-726966ca-lightweight-v4.webp","media/ornate-entries/projects-frame.png":"media/optimized/ornate-entries/projects-frame-b383cca8-lightweight-v4.webp","media/system-showcase/inventory-before-20261020.png":"media/optimized/images/42dd040e447b231b-lightweight-v4.webp","media/system-showcase/inventory-opening-20261020.webp":"media/optimized/images/d3af2c2b4c5c73eb-lightweight-v4.webp","media/system-showcase/inventory-selection.webp":"media/optimized/images/5d0fd49e6546131a-lightweight-v4.webp","media/system-showcase/map-interface.webp":"media/optimized/images/df073438950a76db-lightweight-v4.webp","media/system-showcase/scene-interaction.webp":"media/optimized/images/d73a159c5a532fc8-lightweight-v4.webp","media/system-showcase/sword-picked-npc-target.webp":"media/optimized/images/58718788c7d503c1-lightweight-v4.webp","media/ui-iterations/button-after.png":"media/optimized/images/31427f89efd09804-lightweight-v4.webp","media/ui-iterations/button-before.png":"media/optimized/images/8208ffe926a5e631-lightweight-v4.webp","media/ui-iterations/dream-after.png":"media/optimized/images/755e32dd9942901a-lightweight-v4.webp","media/ui-iterations/dream-before.png":"media/optimized/images/66d138023b6f769c-lightweight-v4.webp","media/ui-iterations/inventory-after.png":"media/optimized/images/729d91536912c8a6-lightweight-v4.webp","media/ui-iterations/inventory-before.png":"media/optimized/images/42dd040e447b231b-lightweight-v4.webp","media/system-showcase/interaction-key.mp4":"media/optimized/system-showcase/interaction-key-d8435f92-lightweight-v4.mp4","media/system-showcase/inventory-opening-20261020.mp4":"media/optimized/system-showcase/inventory-opening-20261020-873d4bc0-lightweight-v4.mp4","media/ui-iterations/login-after.mp4":"media/optimized/ui-iterations/login-after-fe35fdd3-lightweight-v4.mp4","media/ui-iterations/login-before.mp4":"media/optimized/ui-iterations/login-before-a5a0e865-lightweight-v4.mp4"},Ft={"documents/system-breakdowns/delta/xmind-overview.png":"documents/system-breakdowns/delta/xmind-thumb-d96a952d.webp","documents/system-breakdowns/jiangnan/xmind-overview.png":"documents/system-breakdowns/jiangnan/xmind-thumb-1dc27cc1.webp","media/atmosphere/mountains.png":"media/optimized/images/52ecedcf2469cbe5-thumb-lightweight-v4.webp","media/combat-goals/draft-frames-01.png":"media/optimized/images/a4990434f41d92e1-thumb-lightweight-v4.webp","media/combat-goals/draft-frames-02.png":"media/optimized/images/93edaa18436554d1-thumb-lightweight-v4.webp","media/dream.webp":"media/optimized/images/15ebd56ca8ea6cdf-thumb-lightweight-v4.webp","media/guide.webp":"media/optimized/images/c8b237e4191f86f7-thumb-lightweight-v4.webp","media/hero.webp":"media/optimized/images/fc9d10a796de5a68-thumb-lightweight-v4.webp","media/home-previews/enemy-hit-reference.webp":"media/optimized/images/fb4b3791df1373c8-thumb-lightweight-v4.webp","media/home-previews/interaction-ui.webp":"media/optimized/images/bef6d2a879d0e997-thumb-lightweight-v4.webp","media/home-previews/inventory-current.webp":"media/optimized/images/f5b1c1eb8d65f322-thumb-lightweight-v4.webp","media/hot-spring.webp":"media/optimized/images/80fd4f624bb8d6ae-thumb-lightweight-v4.webp","media/inn.webp":"media/optimized/images/722f967a58568efc-thumb-lightweight-v4.webp","media/lightning.webp":"media/optimized/images/2ad80e66db35b3ac-thumb-lightweight-v4.webp","media/manual.webp":"media/optimized/images/b3b05f0d4c180903-thumb-lightweight-v4.webp","media/prologue.webp":"media/optimized/images/3897173052adec9c-thumb-lightweight-v4.webp","media/recovery.webp":"media/optimized/images/47fc8cd20884e160-thumb-lightweight-v4.webp","media/system-showcase/inventory-before-20261020.png":"media/optimized/images/42dd040e447b231b-thumb-lightweight-v4.webp","media/system-showcase/inventory-opening-20261020.webp":"media/optimized/images/d3af2c2b4c5c73eb-thumb-lightweight-v4.webp","media/system-showcase/inventory-selection.webp":"media/optimized/images/5d0fd49e6546131a-thumb-lightweight-v4.webp","media/system-showcase/map-interface.webp":"media/optimized/images/df073438950a76db-thumb-lightweight-v4.webp","media/system-showcase/scene-interaction.webp":"media/optimized/images/d73a159c5a532fc8-thumb-lightweight-v4.webp","media/system-showcase/sword-picked-npc-target.webp":"media/optimized/images/58718788c7d503c1-thumb-lightweight-v4.webp","media/ui-iterations/button-after.png":"media/optimized/images/31427f89efd09804-thumb-lightweight-v4.webp","media/ui-iterations/button-before.png":"media/optimized/images/8208ffe926a5e631-thumb-lightweight-v4.webp","media/ui-iterations/dream-after.png":"media/optimized/images/755e32dd9942901a-thumb-lightweight-v4.webp","media/ui-iterations/dream-before.png":"media/optimized/images/66d138023b6f769c-thumb-lightweight-v4.webp","media/ui-iterations/inventory-after.png":"media/optimized/images/729d91536912c8a6-thumb-lightweight-v4.webp","media/ui-iterations/inventory-before.png":"media/optimized/images/42dd040e447b231b-thumb-lightweight-v4.webp"},Rt={"media/home-previews/character-actions.mp4":"media/optimized/posters/home-previews-character-actions-8506d697-lightweight-v4.webp","media/home-previews/three-hit-combo.mp4":"media/optimized/posters/home-previews-three-hit-combo-5a150709-lightweight-v4.webp","media/manual.mp4":"media/optimized/posters/manual-43b0e8eb-lightweight-v4.webp","media/map.mp4":"media/optimized/posters/map-f4269eb0-lightweight-v4.webp","media/normal.mp4":"media/optimized/posters/normal-68576b55-lightweight-v4.webp","media/prologue.mp4":"media/optimized/posters/prologue-0d719cf7-lightweight-v4.webp","media/system-showcase/interaction-key.mp4":"media/optimized/posters/system-showcase-interaction-key-d8435f92-lightweight-v4.webp","media/system-showcase/inventory-opening-20261020.mp4":"media/optimized/posters/system-showcase-inventory-opening-20261020-873d4bc0-lightweight-v4.webp","media/ui-iterations/login-after.mp4":"media/optimized/posters/ui-iterations-login-after-fe35fdd3-lightweight-v4.webp","media/ui-iterations/login-before.mp4":"media/optimized/posters/ui-iterations-login-before-a5a0e865-lightweight-v4.webp","media/wushuang.mp4":"media/optimized/posters/wushuang-9e3439ad-lightweight-v4.webp"},po=t=>{if(typeof t!="string")return t;const e=t.startsWith("./")?"./":"";return Dt[t.slice(e.length)]?e+Dt[t.slice(e.length)]:t},St=t=>{if(Array.isArray(t))return t.map(St);if(t&&typeof t=="object"){const e=Object.fromEntries(Object.entries(t).map(([o,n])=>[o,St(n)]));return typeof t.path=="string"&&Ft[t.path]&&(e.preview=Ft[t.path]),typeof t.path=="string"&&Rt[t.path]&&(e.poster=Rt[t.path]),e}return po(t)},co="jianghuransheng-portfolio-article",_o=1;function Ut(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&Object.getPrototypeOf(t)===Object.prototype}function fo(t){return t.replaceAll("&lt;!--","<!--").replaceAll("&amp;","&")}function mo(t,e){if(typeof t!="string")throw new TypeError("Markdown内容必须是字符串。");if(!e||e.format!==co||e.version!==_o||!Array.isArray(e.fields))throw new TypeError("案例结构文件的格式或版本不匹配。");const o=new Map,n=new Set;for(const i of e.fields){if(!i||!/^text_[0-9]{4,}$/.test(i.id)||n.has(i.id))throw new Error("案例结构包含重复或无效字段。");n.add(i.id)}const x=/<!-- portfolio:text (text_[0-9]{4,}) -->(\r?\n)/g;for(const i of t.matchAll(x)){const m=i[1];if(!n.has(m))throw new Error("Markdown含有未声明的字段："+m);if(o.has(m))throw new Error("Markdown字段重复："+m);const h=i.index+i[0].length,g=`
<!-- /portfolio:text `+m+" -->",$=t.indexOf(g,h);if($<0)throw new Error("Markdown字段缺少结束标记："+m);let f=t.slice(h,$);i[2]===`\r
`&&f.endsWith("\r")&&(f=f.slice(0,-1)),o.set(m,fo(f))}const l=new Set;function a(i){if(Array.isArray(i))return i.map(a);if(Ut(i)){const m=Object.keys(i);if(m.length===1&&m[0]==="$text"&&typeof i.$text=="string"){if(!o.has(i.$text))throw new Error("Markdown缺少字段："+i.$text);if(l.has(i.$text))throw new Error("结构引用了重复字段："+i.$text);return l.add(i.$text),o.get(i.$text)}return Object.fromEntries(Object.entries(i).map(([h,g])=>[h,a(g)]))}if(i===null||typeof i=="boolean"||typeof i=="number"&&Number.isFinite(i))return i;throw new TypeError("案例结构中存在无效值。")}const c=a(e.tree);if(!Ut(c)||l.size!==n.size||o.size!==n.size)throw new Error("案例字段与结构不完整匹配。");return c}const ho="麦恒游戏策划作品集 · 江湖人生",uo="游戏设计作品集",bo="01",go="2026-10-19",wo="zh-CN",vo=["战斗策划","系统策划","关卡策划","玩法策划"],yo={displayName:"麦恒",nameApproved:!0,email:"1559661768@qq.com",emailApproved:!0,resumeUrl:"./documents/麦恒_游戏策划简历.pdf",resumeApproved:!0,demoUrl:"https://www.bilibili.com/video/BV1tZnJ6oEhF/",demoApproved:!0},$o={name:"江湖人生",engine:"Godot 4.6",type:"2.5D武侠单机 Demo",stage:"可运行原型 · 持续迭代",ownership:"本作品集记录策划需求、规则取舍、原型整合与验收。代码与部分素材含AI辅助；本人具体分工和素材授权待补充确认。"},ko="南京传媒学院游戏策划与设计本科。以《江湖人生》Godot Demo为代表项目，展示战斗机制、系统规则、关卡引导及测试验证。",Eo=[["index.html#about-me","关于我"],["index.html#cases","项目展示"],["index.html#system-analysis","拆解文档"],["index.html#ending","结尾"]],So={"systems.html":"系统交互设计","about.html":"关于我"},Po={title:ho,brand:uo,version:bo,updated:go,language:wo,roles:vo,profile:yo,project:$o,intro:ko,nav:Eo,pageTitles:So},zo={eyebrow:"2025届 游戏策划 求职中",titleLines:[{text:"麦恒",accent:""},{text:"求职作品集",accent:""},{text:"",accent:""}],intro:"我是一名游戏策划求职者，2025届南京传媒学院本科毕业于游戏策划专业。10000+小时游戏经历。善于从玩家与策划双视角发现问题，并逆向还原设计目的，解决问题。",roles:["战斗策划","系统策划","关卡策划"],buttons:[{href:"#cases",label:"查看作品",secondary:!1},{href:"./about.html#contact",label:"联系我 ",secondary:!0}],imageId:"opening-title",imageAlt:"《江湖人生》开场：竹林、石桥与远山，保留完整游戏标题和开始菜单",projectLabel:"作品项目 / 《江湖人生》",imageCaption:"武侠像素 · 横版 / 2.5D 玩法 Demo",carousel:{label:"《江湖人生》游戏图片展示",controlsLabel:"选择展示图片",buttonLabel:"显示第 {number} 张图片：{title}",intervalMs:2500,durationMs:550,slides:[{path:"media/home-carousel/scene.webp",alt:"《江湖人生》客栈前场景与倒地的主角",width:1672,height:941},{path:"media/home-carousel/inventory.webp",alt:"《江湖人生》背包界面参考图：人物装备、物品栏与物品详情",width:1447,height:1087},{path:"media/home-carousel/prologue.webp",alt:"《江湖人生》序章终雪景与残剑",width:1672,height:941},{path:"media/home-carousel/sword-atlas.webp",alt:"武侠剑客十二式挥剑动作图集",width:1448,height:1086},{path:"media/home-carousel/opening.webp",alt:"《江湖人生》竹林开场菜单",width:1670,height:942}]}},Lo=[{title:"01 制作项目预览",description:"《江湖人生》战斗 · 系统· 关卡"},{title:"02 拆解游戏文档",description:"《江南百景图》角色系统拆解"},{title:"03 关于我",description:"自我介绍与能力"}],Mo={eyebrow:"01.《江湖人生》策划设计",title:"围绕战斗、系统和关卡，展示我的游戏设计与制作过程。",intro:"",linkLabel:"阅读开发复盘 ↗"},Io={eyebrow:"03 拆解文档 / SYSTEM ANALYSIS",items:[{id:"jiangnan",title:"《江南百景图》角色系统拆解",intro:"分析角色获取、等级养成、天赋、珍宝及羁绊等模块，并整理系统之间的关联与个人优化建议。",pdf:{path:"documents/system-breakdowns/jiangnan/江南百景图角色系统拆解.pdf",preview:"documents/system-breakdowns/jiangnan/pdf-cover-thumb-f7d83c35.webp",width:1985,height:2807},xmind:{path:"documents/system-breakdowns/jiangnan/角色系统拆解文档.xmind"},mindmaps:[{path:"documents/system-breakdowns/jiangnan/xmind-overview.png",width:2098,height:1300,preview:"documents/system-breakdowns/jiangnan/xmind-thumb-1dc27cc1.webp"}],button:{href:"./documents/system-breakdowns/jiangnan/江南百景图角色系统拆解.pdf",label:"查看完整文档"}},{id:"delta",title:"《三角洲行动》交易行系统拆解",intro:"分析交易行的购买、出售、价格参考及交易规则，梳理交易行与仓库、哈夫币和战前整备之间的关系。",pdf:{path:"documents/system-breakdowns/delta/三角洲行动交易行系统拆解.pdf",preview:"documents/system-breakdowns/delta/pdf-cover-thumb-ef7ba0e8.webp",width:1985,height:2807},xmind:{path:"documents/system-breakdowns/delta/《三角洲行动》交易行系统.xmind"},mindmaps:[{path:"documents/system-breakdowns/delta/xmind-overview.png",width:2099,height:1300,preview:"documents/system-breakdowns/delta/xmind-thumb-d96a952d.webp"}],button:{href:"./documents/system-breakdowns/delta/三角洲行动交易行系统拆解.pdf",label:"查看完整文档"}}]},Ao={eyebrow:"01 关于我 / ABOUT ME",title:"麦恒",intro:`2025年6月毕业于南京传媒学院游戏策划专业。
10000+游戏时长阅历，能从玩家与策划双视角发现问题，解决问题。
主要关注战斗设计、系统交互与关卡引导，同时具备游戏测试与需求分析相关实践经验。`,items:[{label:"求职方向",text:"游戏策划（系统 / 战斗 / 关卡）"},{label:"教育背景",text:"南京传媒学院 · 游戏策划与设计 · 本科"},{label:"个人项目",text:`《江湖人生》 · 独立Demo与游戏拆解文档

`},{label:"相关实践",text:"游戏测试培训 · 需求分析与用例设计"}],button:{label:"查看个人简历"},experienceButton:{href:"./about.html",label:"个人经历"}},jo={eyebrow:"02 项目展示 / PROJECTS",labels:{open:"放大查看：",enlarge:"点击放大",close:"关闭 ×",pending:"素材待补充",videoFallback:"浏览器暂不支持视频播放。"},groups:[{title:"战斗设计",intro:"展示《江湖人生》的角色连击、无双技能、敌人受击反馈及战斗节奏调整。",detail:{href:"./combat.html",label:"查看详细设计"},items:[{type:"video",path:"media/home-previews/character-actions.mp4",poster:"media/optimized/posters/home-previews-character-actions-8506d697-lightweight-v4.webp",title:"角色基础动作",kindLabel:"原始动作素材视频",alt:"绿幕角色动作素材：待机、奔跑、挥剑与收势",width:1280,height:720},{type:"video",path:"media/home-previews/three-hit-combo.mp4",poster:"media/optimized/posters/home-previews-three-hit-combo-5a150709-lightweight-v4.webp",title:"角色三段连击",kindLabel:"原始动作素材视频",alt:"绿幕三段连击动作素材：横斩、上挑与水平突刺",width:1280,height:720},{type:"image",path:"media/optimized/images/fb4b3791df1373c8-lightweight-v4.webp",title:"敌人受击反馈",kindLabel:"动作参考图",alt:"山贼受击动作参考图，展示站立、后仰与弯腰等姿势",width:1928,height:815,preview:"media/optimized/images/fb4b3791df1373c8-thumb-lightweight-v4.webp"}],number:"01"},{number:"02",title:"系统策划与UI设计",intro:"设计了背包、地图和场景交互功能，主要围绕界面布局、操作方式和交互反馈进行制作与优化。",items:[{type:"image",path:"media/optimized/images/f5b1c1eb8d65f322-lightweight-v4.webp",title:"背包界面",kindLabel:"正式背包UI实机截图",alt:"正式背包界面：角色、装备栏、物品栏、物品详情及操作按钮",width:1280,height:720,preview:"media/optimized/images/f5b1c1eb8d65f322-thumb-lightweight-v4.webp"},{type:"video",path:"media/map.mp4",poster:"media/optimized/posters/map-f4269eb0-lightweight-v4.webp",title:"地图展开",kindLabel:"地图展开实机录像",alt:"真实游戏画面中，揉成纸团的地图逐步展开为完整地图",width:1280,height:720},{type:"video",path:"media/optimized/system-showcase/interaction-key-d8435f92-lightweight-v4.mp4",poster:"media/optimized/posters/system-showcase-interaction-key-d8435f92-lightweight-v4.webp",title:"E键交互提示",kindLabel:"交互提示动效 · 实机局部放大",alt:"古风交互标志旁的金色E键按下与回弹动画，取自游戏画面的局部放大",width:960,height:600}],detail:{href:"./systems.html",label:"查看详细设计"}},{title:"关卡交互设计",intro:"围绕梦境与客栈场景，设计战斗教学、地图查看、物品拾取和NPC交互的引导流程。",detail:{href:"./levels.html",label:"查看详细设计"},items:[{type:"image",path:"media/dream.webp",title:"梦境竹林",kindLabel:"游戏截图",alt:"《江湖人生》梦境竹林中的白发主角与木桩",width:1280,height:720,preview:"media/optimized/images/15ebd56ca8ea6cdf-thumb-lightweight-v4.webp"},{type:"image",path:"media/inn.webp",title:"客栈探索",kindLabel:"游戏截图",alt:"《江湖人生》客栈内场景与前台交互提示",width:1280,height:720,preview:"media/optimized/images/722f967a58568efc-thumb-lightweight-v4.webp"},{type:"image",path:"media/guide.webp",title:"首次查看地图后的独白",kindLabel:"游戏截图",alt:"《江湖人生》主角关闭地图后的非阻塞剧情独白",width:1280,height:720,preview:"media/optimized/images/c8b237e4191f86f7-thumb-lightweight-v4.webp"}],number:"03"}],title:"《江湖人生》",playthrough:{title:"《江湖人生》序章全流程实机演示",intro:"观看《江湖人生》序章的完整实机流程。",label:"观看完整试玩",path:"media/hero.webp",width:1280,height:720,preview:"media/optimized/images/fc9d10a796de5a68-thumb-lightweight-v4.webp"}},To={title:"《江湖人生》系统交互设计",eyebrow:"CASE 02 / SYSTEM INTERACTION DESIGN",intro:"围绕背包、地图与场景交互，说明已有功能的操作规则、界面反馈及修改过程。",navigationLabel:"章节定位",back:{href:"./index.html#cases",label:"返回作品集主页"},labels:{goal:"设计目标",media:"图片和视频展示",rules:"功能规则",optimisation:"设计思路与优化"},chapters:[{title:"背包系统设计",items:[{type:"video",path:"media/optimized/system-showcase/inventory-opening-20261020-873d4bc0-lightweight-v4.mp4",poster:"media/optimized/posters/system-showcase-inventory-opening-20261020-873d4bc0-lightweight-v4.webp",title:"01 背包打开动效",kindLabel:"打开动效实录 · 换肤前界面",alt:"游戏实录中的古风布袋打开与关闭过程，界面为换肤前版本",width:1920,height:1080,description:"设计了古风布袋展开动画，让背包打开过程更加自然，并通过对应音效提供操作反馈。",note:"此段展示沿用的布袋动效，正式背包外观见下一节；网页预览静音。"},{type:"image",path:"media/optimized/images/f5b1c1eb8d65f322-lightweight-v4.webp",title:"02 背包界面展示",kindLabel:"正式背包UI实机截图",alt:"正式背包界面：角色、装备栏、物品栏、物品详情及操作按钮",width:1280,height:720,description:"将角色装备、物品栏和物品详情分区展示，方便玩家查看和管理物品。",preview:"media/optimized/images/f5b1c1eb8d65f322-thumb-lightweight-v4.webp"},{type:"image",path:"media/optimized/images/5d0fd49e6546131a-lightweight-v4.webp",title:"03 背包功能与交互",kindLabel:"物品选择与详情实机截图",alt:"点击背包葫芦后显示物品选中状态与对应详情的真实游戏截图",width:1280,height:720,description:"支持物品选择、查看详情、使用、装备和丢弃，通过按钮状态与点击反馈提示操作结果。",note:"当前图片展示物品选中后的详情状态。",preview:"media/optimized/images/5d0fd49e6546131a-thumb-lightweight-v4.webp"}],number:"01",id:"inventory-system",goal:"将角色装备、物品栏和物品详情分区展示，让玩家选中物品后能直接判断可执行的操作。",rules:["点击真实物品后，更新选中框、数量、详情和按钮状态。","使用恢复品消耗1个；装备新武器时，旧武器回到背包；丢弃每次减少1个。","空格、禁用按钮和打开动画期间不执行物品操作；已装备物品不能直接使用或丢弃。","有效选择和成功操作播放一次木质轻敲，悬停、刷新和失败操作不播放。"],optimisation:["沿用原物品模型和操作回调，更换底板、图标与显示布局。针对葫芦、酒坛和草药图标缺边的问题替换完整素材，保留原画布、点击位置及音效。","下方展示废版背包系统与新版背包系统。"],audio:{path:"media/system-showcase/interaction-feedback.wav",label:"试听木质点击反馈（0.6秒，手动播放）"},comparison:[{type:"image",path:"media/optimized/images/42dd040e447b231b-lightweight-v4.webp",title:"旧版背包系统",kindLabel:"真实游戏截图",alt:"旧版背包系统界面：角色装备、物品栏、长剑详情和操作按钮",width:1681,height:936,preview:"media/optimized/images/42dd040e447b231b-thumb-lightweight-v4.webp"},{type:"image",path:"media/optimized/images/5d0fd49e6546131a-lightweight-v4.webp",title:"新版背包系统",kindLabel:"真实游戏截图",alt:"完整葫芦图标替换后的背包详情实机截图",width:1280,height:720,preview:"media/optimized/images/5d0fd49e6546131a-thumb-lightweight-v4.webp"}]},{title:"地图系统设计",items:[{type:"video",path:"media/map.mp4",poster:"media/optimized/posters/map-f4269eb0-lightweight-v4.webp",title:"01 地图打开动效",kindLabel:"地图展开实机录像",alt:"真实游戏画面中，揉成纸团的地图逐步展开为完整地图",width:1280,height:720,description:"采用纸团展开动画作为地图打开效果，让地图操作更符合游戏的古风视觉风格。"},{type:"image",path:"media/optimized/images/df073438950a76db-lightweight-v4.webp",title:"02 地图界面",kindLabel:"地图UI实机截图",alt:"游戏中青山镇地图的区域、当前位置与已有状态显示",width:1280,height:720,description:"通过地图展示玩家所在区域及探索信息，帮助玩家了解当前位置。",preview:"media/optimized/images/df073438950a76db-thumb-lightweight-v4.webp"}],number:"02",id:"map-system",goal:"用地图帮助玩家辨认当前区域，并通过纸团展开动效与场景保持一致的视觉风格。",rules:["展开期间暂不接受区域点击；完成后可悬停查看六个区域。按M、Esc或关闭按钮关图。","当前界面突出客栈区域，其他区域以雾面表现；客栈点击反馈为“您已在此区域”。"],optimisation:["纸团在1秒内展开，重复打开请求不会重启动画或叠加音效。首次成功查看并关闭地图后，接续拾剑与问路独白，再次开关不重复触发这一段引导。","地图现阶段用于区域查看；随探索解锁的动态迷雾和跨区域旅行尚未接入。"]},{title:"交互系统设计",items:[{type:"video",path:"media/optimized/system-showcase/interaction-key-d8435f92-lightweight-v4.mp4",poster:"media/optimized/posters/system-showcase-interaction-key-d8435f92-lightweight-v4.webp",title:"01 交互提示UI",kindLabel:"交互提示动效 · 实机局部放大",alt:"古风交互标志旁的金色E键按下与回弹动画，取自游戏画面的局部放大",width:960,height:600,description:"使用统一的E键交互提示，让玩家能够快速识别可以调查或使用的对象。"},{type:"image",path:"media/optimized/images/d73a159c5a532fc8-lightweight-v4.webp",title:"02 场景交互",kindLabel:"场景交互实机截图",alt:"主角通过E键与客栈掌柜交谈的真实游戏对话画面",width:1280,height:720,description:"通过E键完成物品拾取、NPC对话和场景互动，统一玩家的操作方式。",preview:"media/optimized/images/d73a159c5a532fc8-thumb-lightweight-v4.webp"},{type:"image",path:"media/optimized/images/bef6d2a879d0e997-lightweight-v4.webp",title:"03 目标引导",kindLabel:"剧情目标提示实机截图",alt:"当前剧情的青峰剑目标上方显示交互提示，主角仍位于远处",width:1280,height:720,description:"根据当前剧情显示下一步交互目标，同时保留玩家自由探索的空间。",note:"提示可以远距离显示；实际交互仍需靠近目标后按E。",preview:"media/optimized/images/bef6d2a879d0e997-thumb-lightweight-v4.webp"}],number:"03",id:"interaction-system",goal:"统一拾取、NPC对话和场景互动的E键操作，并让当前剧情目标更容易被发现。",rules:["当前目标上方显示古风标志，金色E键帽循环展示按下与回弹动效。","提示可以远距离显示；实际交互仍需进入原有范围，并满足角色当前可操作条件。","青峰剑复用场景中原有的拾取对象，成功后对象隐藏、防止重复领取，下一步提示转向已有NPC。","普通NPC对话沿用原有锁定条件；开局地图与拾剑问路独白采用非阻塞显示，允许玩家移动。"],optimisation:["将目标显示与交互执行分开：剧情状态决定标志的位置，原交互系统继续检查距离和角色状态。这样可以提前指明方向，同时保留靠近后按E的操作过程。","起身完成后恢复自由移动，玩家可以走动、稍后查看地图，再自行前往拾剑或问路。菜单、普通对话与转场期间隐藏现实目标提示，避免干扰。","下方实机截图展示拾剑前后：目标从地上的青峰剑切换到已有NPC，玩家可自行决定何时前往。"],comparison:[{type:"image",path:"media/optimized/images/bef6d2a879d0e997-lightweight-v4.webp",title:"拾剑前：目标在青峰剑",kindLabel:"真实游戏截图",alt:"拾剑前，交互目标提示显示在青峰剑上方",width:1280,height:720,preview:"media/optimized/images/bef6d2a879d0e997-thumb-lightweight-v4.webp"},{type:"image",path:"media/optimized/images/58718788c7d503c1-lightweight-v4.webp",title:"拾剑后：目标切换至NPC",kindLabel:"真实游戏截图",alt:"成功拾剑后地上剑消失，目标标志切换至现有女性NPC，主角仍在远处",width:1280,height:720,preview:"media/optimized/images/58718788c7d503c1-thumb-lightweight-v4.webp"}]}]},No={eyebrow:"2025届 游戏策划 求职中",title:"求职作品集",subtitle:"我是麦恒，游戏策划本科毕业",project:"求职方向（系统 关卡 战斗） 策划 ",image:{path:"media/optimized/cover/snow-cover-20261019-57e5f39e-lightweight-v4.webp",width:1672,height:941,alt:"雪中古刹与远山，右侧剑客低头拭剑，完整保留原图人物、剑身与场景"},actions:{playthrough:{label:"观看完整试玩"},contact:{label:"联系我"}}},Co={eyebrow:"04 结尾 / CONTACT",title:"感谢浏览",intro:"期待有机会进一步与您交流游戏设计与原型实践。",contactLabel:"联系邮箱",phoneLabel:"联系电话",phoneNumber:"18666651414",contactFallback:"查看联系方式",resume:{label:"下载个人简历"},back:{href:"./index.html#cover",label:"返回首页"}},qo={label:"作品集栏目入口",items:[{title:"关于我",href:"#about-me",image:{path:"media/optimized/ornate-entries/about-art-76ec4c66-lightweight-v4.webp",width:1254,height:1254,visibleBounds:{x:60,y:140,width:1133,height:997}},subtitle:"ABOUT ME",frame:{path:"media/optimized/ornate-entries/about-frame-65f303a8-lightweight-v4.webp",width:2172,height:724,containsText:!0},composition:{artHeight:225,artLeft:-50,artBottom:18}},{title:"项目展示",href:"#cases",image:{path:"media/optimized/ornate-entries/projects-art-726966ca-lightweight-v4.webp",width:1254,height:1254,visibleBounds:{x:28,y:215,width:1199,height:904}},subtitle:"PROJECTS",frame:{path:"media/optimized/ornate-entries/projects-frame-b383cca8-lightweight-v4.webp",width:2172,height:724,containsText:!0},composition:{artHeight:220,artLeft:-90,artBottom:18}},{title:"拆解文档",href:"#system-analysis",image:{path:"media/optimized/ornate-entries/breakdown-art-39a6098a-lightweight-v4.webp",width:1254,height:1254,visibleBounds:{x:127,y:208,width:1069,height:900}},subtitle:"BREAKDOWN",frame:{path:"media/optimized/ornate-entries/breakdown-frame-7d55ef65-lightweight-v4.webp",width:2172,height:724,containsText:!0},composition:{artHeight:222,artLeft:-55,artBottom:18}}]},Do={hero:zo,facts:Lo,cases:Mo,systemAnalysis:Io,aboutMe:Ao,previews:jo,systemInteraction:To,cover:No,ending:Co,shortcuts:qo},Fo={image_001:"该画面待补充，不以其他素材代替。",image_002:"项目留存截图",movie_001:"实机录像待补充。此处不使用静态图片冒充录像。",movie_002:"浏览器暂不支持视频，请使用最新版浏览器查看。",movie_003:"过场成片预览",movie_004:"实机视口帧合成预览",movie_005:"独立UI动画预览",movie_006:"原生验收录像",movie_007:" · 点击播放，保留原音轨",evidence_001:"展开项目依据与核对范围",evidence_002:"以下为项目内相对路径与源码行号，供回查；不向公开网页复制完整源代码或原始个人简历。网站案例依据当前源码和留存记录整理，本次未重新运行游戏回归。",iterations_001:"项目迭代记录",iterations_002:"原因",iterations_003:"调整",iterations_004:"结果",iterations_005:"依据：",header_001:"返回作品集首页",header_002:"跳至正文",header_003:"江",header_004:"GAME DESIGN / ",header_005:"主导航",header_006:"导航",footer_001:"《江湖人生》· 游戏策划求职作品集",footer_002:"Godot Demo / 内容核对 ",footer_003:"查看简历",footer_004:"联系我",footer_005:"",pageHead_001:"作品集",timelineExplorer_001:"战斗帧时间轴 · 三条攻击分支",timelineExplorer_002:"规则示意，非在线游戏。横轴按实际帧时长累计；无双分段变速不按统一FPS平均分配。动画内部帧号从0开始。",timelineExplorer_003:"查看招式",timelineExplorer_004:"起手 0s",timelineExplorer_005:"有效判定窗口",timelineExplorer_006:"下一次真实按键缓冲",timelineExplorer_007:"动作时间轴不代表碰撞体形状。K第二刀独停直接回待机，收势接缝待完善；K突刺没有无双的金雷位移。",interactionExplorer_001:"任务提示与实际交互 · 规则演示",interactionExplorer_002:"依据现有主线提示规则制作的说明工具，不是可试玩Demo。",interactionExplorer_003:"目标状态",interactionExplorer_004:"当前主线目标",interactionExplorer_005:"尚未激活",interactionExplorer_006:"已经完成",interactionExplorer_007:"玩家进入原交互范围",interactionExplorer_008:"目标上方任务提示",interactionExplorer_009:"E键距离条件",interactionExplorer_010:"显示由任务进度决定；E键仍受原距离门槛、对象状态和现有剧情条件约束。未显示主线提示，不代表其他近距交互全部禁用。",coordinateDiagram_001:"精确路线与可行走区域资料待补充，不绘制推测地图。",coordinateDiagram_002:"关卡空间 · 真实脚点区域",coordinateDiagram_003:"场景",coordinateDiagram_004:"绿色区域为源码中的可行走边界，棕色为占地／固定障碍；圆圈为已知近距交互半径。引线标签区分近邻锚点，实际坐标不变；未绘制推测路线或强制轨迹。",casePage_001:"CASE 01 / COMBAT DESIGN",casePage_002:"CASE 02 / SYSTEM DESIGN",casePage_003:"CASE 03 / LEVEL DESIGN",casePage_004:"目标与体验",casePage_005:"机制与规则",casePage_006:"游戏演示",casePage_007:"参数与流程",casePage_008:"原型实现",casePage_009:"迭代与取舍",casePage_010:"验证与局限",casePage_011:"项目依据",casePage_012:"设计目标与玩家体验",casePage_013:"设计目标",casePage_014:"玩家体验目标",casePage_015:"",casePage_016:"核心机制与规则",casePage_017:"以上来自项目留存版本，部分录像含测试场景或测试说明字。它们证明当时的原型表现，不代表所有内容已经完成最终质量验收。",casePage_018:"关键位置与流程",casePage_019:"关键参数与状态",casePage_020:"实际实现方式",casePage_021:"问题、迭代与取舍",casePage_022:"验证结果与尚存问题",casePage_023:"当前边界",casePage_024:"部分原型已接入",casePage_025:"战斗系统  系统策划 关卡设计 ui设计",casePage_026:"基于当前demo记录制作",casePage_027:"本页目录",casePage_028:"IN THIS CASE",review_001:"DEVELOPMENT NOTES / RETROSPECTIVE",review_002:"开发复盘",review_003:"记录真实发生的问题、调整理由与当前结果。保留没有解决的接缝与功能边界，不把妥协写成已完成。",review_004:"ITERATION 0",review_005:"发现问题",review_006:"分析原因",review_007:"方案与修改",review_008:"结果与尚存问题",review_009:"验收记录来自项目已有测试资料；本网站制作期间未再次执行Godot测试。真实玩家访谈、体验数据与改动效果的量化比较仍待补充。",review_010:"战斗案例",review_011:"系统案例",review_012:"关卡案例",approvedLink_001:"打开 ↗",about_001:"ABOUT / PROFILE",about_002:"个人经历",about_003:"策划理论 + 原型实践 + 测试验证。求职方向为战斗、系统、关卡策划。",about_004:"GAME DESIGN CANDIDATE",about_005:"游戏策划求职者",about_006:"联系方式：1559661768@qq.com",about_007:"EDUCATION",about_008:"相关课程：",about_009:"游戏测试与需求分析实践",about_010:"专业与工具技能",about_011:"游戏体验与机制关注",about_012:"",about_013:"所获奖项",about_020:"简历、Demo与联系",about_021:"个人简历 PDF",about_022:"待提供可公开的脱敏PDF",about_023:"Demo 下载 / 试玩",about_024:"待准备正式分发版本",about_025:"求职邮箱",about_026:"待本人确认公开",about_027:"",common_001:"首页",updateTimeline_001:"有效判定",updateTimeline_002:"连击缓冲",updateTimeline_003:"帧",updateTimeline_004:"24FPS源帧 · 分阶段变速",updateTimeline_005:"24FPS源帧 · 有效播放 ",updateTimeline_006:" FPS",updateTimeline_007:" · 有效判定：内部帧",updateTimeline_008:" · 连击缓冲：内部帧",updateTimeline_009:" · 末段结束重置连击",updateTimeline_010:" · 独立收招 ",updateTimeline_011:"（直接回待机）",updateTimeline_012:" · 金雷位移 ",updateRules_001:"显示 · 与距离无关",updateRules_002:"隐藏 · 非当前任务目标",updateRules_003:"距离满足 · 仍需其他条件通过",updateRules_004:"距离不足 · 按E不触发交互",updateMap_001:"真实可行走边界和关键对象位置示意",updateMap_002:"坐标画布 ",updateMap_003:"；脚点或交互锚点，非人物可见外框。",updateMap_004:"标号",updateMap_005:"关键位置",generic_001:"新增策划案例",generic_002:"该案例的演示素材待补充。",generic_003:"案例待补充",updateMap_006:"X / Y",casePage_levels_rules:"关卡设计与引导流程",casePage_levels_goals_title:"设计目标与玩家体验",casePage_levels_goals_label:"设计目标",casePage_levels_experience_label:"玩家体验目标"},Ro={labels:Fo},Uo={period:"2021.09 — 2025.06",school:"南京传媒学院",degree:"游戏策划与设计 · 本科",courses:["游戏概论","游戏引擎开发","游戏策划基础","游戏策划技巧","游戏角色设计","游戏测试分析"]},Oo={period:"2026.07 — 2026.08",title:"游戏测试工程师（培训）",organization:"中电金信",disclaimer:"《三角洲》帧数商业皮肤制作测试流程，《火影忍者手游》相关测试实践",project:"",items:["基于需求理解规则，识别逻辑漏洞与描述不明确的条件。","使用等价类、边界值方法组织测试用例，覆盖入口条件、获取与消耗、状态刷新等场景。","学习操作响应与伤害判定专项测试，以及缺陷记录、修复后的回归验证。","学习冒烟、兼容性和性能测试学习及辅助实践。"]},Ho=[{name:"chatGPT deepseek",level:"ai工具",detail:"善于使用ChatGPT、DeepSeek辅助功能需求分析、系统流程设计、配置表及测试用例整理。可以使用agent工具台例如 codex 连接引擎制作全流程，包括ui设计，帧动画形成，策划梳理等步骤。"},{name:"Godot  unity  UE5",level:"引擎",detail:"使用此类工具进行思路梳理、测试设计与用例组织。能够使用市面上主流的游戏引擎部分进行制作，通过unity MCP连接ai工具进行制作场景，通过godot MCP进行制作蓝图调教智慧树，使用Unreal MCP让ai参与制作。"},{name:"Word / Excel",level:"办公软件",detail:"会使用于文档整理、表格与测试资料，策划文档。"},{name:"XMind与墨刀",level:"思维导图",detail:"使用此类工具进行思路梳理、测试设计与用例组织。"},{name:"PerfDog",level:"测试工具",detail:"定位帧率与异常卡顿问题，进行问题分析。"},{name:"测试设计",level:"培训实践",detail:"需求分析、等价类、边界值、缺陷跟踪及回归验证。"}],Bo=["大学在校奖学金  ","腾讯元梦之星高校创作奖","腾讯游戏创作大赛赛区奖  "],Ko="",Yo=[{group:"FPS体验",names:"三角洲行动、无畏契约、和平精英、反恐精英",focus:"关注枪械手感、弹道逻辑与伤害判定。专题拆解文档与案例"},{group:"MOBA体验",names:"王者荣耀、英雄联盟",focus:"有长期游玩经历对moba类机制了解。"},{group:"主机与单机体验",names:"艾尔登法环、使命召唤系列、我的世界、战神系列、死亡搁浅",focus:""}],Wo=["个人简历文本（已去除重复段落）","当前Godot项目与留存验收记录"],Go={education:Uo,training:Oo,skills:Ho,awards:Bo,awardNote:Ko,games:Yo,sources:Wo},Jo=[{id:"hero",path:"media/hero.webp",kind:"native-screenshot",caption:"客栈院外实机截图；留存验收版本",originalSize:[1280,720],displaySize:[1280,720],bytes:297738,sourceSha256:"74ca105bbc54403e749ca1ae1834b3c2dd069d4e613f79f18df54e07b9d29b34",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/fc9d10a796de5a68-thumb-lightweight-v4.webp"},{id:"inventory",path:"media/inventory.webp",kind:"native-screenshot",caption:"最新背包换肤原生截图；真实6物品与25格容量",originalSize:[1280,720],displaySize:[1280,720],bytes:156368,sourceSha256:"c76bff1423b82e6f17c8519ecbd45380d144dd431192a7185d14d2469f08c4a0",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"dream",path:"media/dream.webp",kind:"native-screenshot",caption:"新游戏链路验收中的梦境觉醒实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:281720,sourceSha256:"cd29ea359bf38a7df3b9a0c849f13290b659da287b1884715deff5c1e8ada290",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/15ebd56ca8ea6cdf-thumb-lightweight-v4.webp"},{id:"map",path:"media/map.webp",kind:"native-screenshot",caption:"地图原生验收截图；历史界面记录",originalSize:[1280,720],displaySize:[1280,720],bytes:194960,sourceSha256:"225660fb459217301630217f0185e1c0a2c870a4b1c1af0e4997245644c0a04b",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"thrust",path:"media/thrust.webp",kind:"native-screenshot",caption:"无双第三刀节奏优化实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:280308,sourceSha256:"2b1d6e3274c8af0251c784232fa07323d56d4ab2d0bd66a3195065b003665c3e",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"lightning",path:"media/lightning.webp",kind:"native-screenshot",caption:"无双第三刀金雷阶段实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:276204,sourceSha256:"226ad3455d2fcedd1bcf8a55977f06ca522736da6c81a7e3d3e0799b9dc63e50",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/2ad80e66db35b3ac-thumb-lightweight-v4.webp"},{id:"manual",path:"media/manual.webp",kind:"native-screenshot",caption:"K武学实机验收截图；含测试说明字",originalSize:[1280,720],displaySize:[1280,720],bytes:306400,sourceSha256:"9b56301b29bb8fba274421f7bb6934b23ea1ce547227503cb06d31e350d0cc8a",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/b3b05f0d4c180903-thumb-lightweight-v4.webp"},{id:"cloth",path:"media/cloth.webp",kind:"native-screenshot",caption:"原布袋打开动画实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:123594,sourceSha256:"b796cef146dbadc3f687d554e246db90c3a2a08e8dd6647ab48cb44a6e6092e2",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"recovery",path:"media/recovery.webp",kind:"native-screenshot",caption:"第一刀独立收招实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:270852,sourceSha256:"ce97301b11bc06aaf695f184d6bccffa081eab954a008af60d493b310b1b266d",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/47fc8cd20884e160-thumb-lightweight-v4.webp"},{id:"inventory-before",path:"media/inventory-before.webp",kind:"native-screenshot",caption:"早期背包实机验收记录；内容与新版数据可能不同",originalSize:[1280,720],displaySize:[1280,720],bytes:151118,sourceSha256:"fe9b5a4baed05c4fb7291bd9e7e3194a8d9b701a79f90993fc6d9d903aa1689d",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"guide",path:"media/guide.webp",kind:"native-screenshot",caption:"首次关图后非阻塞独白的原生验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:278320,sourceSha256:"b38117bed09f134fb3e2003dc8ff810cb40207e412b38de7b4e77cfb71f896dd",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/c8b237e4191f86f7-thumb-lightweight-v4.webp"},{id:"inn",path:"media/inn.webp",kind:"native-screenshot",caption:"客栈室内远距柜台目标的原生验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:266132,sourceSha256:"ee531432e942335e7969532040c860c08fbd556f92ce4424051df7c73f3d4d7d",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/722f967a58568efc-thumb-lightweight-v4.webp"},{id:"hot-spring",path:"media/hot-spring.webp",kind:"native-screenshot",caption:"温泉状态与退出目标的原生验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:270480,sourceSha256:"c162dd7fc3d4bfb81777246c1a6eafd2f1085fdffde8219a3d82f5dd731aa289",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/80fd4f624bb8d6ae-thumb-lightweight-v4.webp"},{id:"prologue",path:"media/prologue.webp",kind:"native-screenshot",caption:"序章终逐笔书写完成后的原生组件验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:223006,sourceSha256:"36d77b7d575ea4112a4badbe2c98f4fa07a8a7f97fbfbf7fe53f53e369bdd5fb",processing:"仅复制后等比例缩小并编码WebP；源文件未修改",preview:"media/optimized/images/3897173052adec9c-thumb-lightweight-v4.webp"},{id:"opening-title",path:"media/opening-title.png",sourceType:"user-attachment",kind:"native-screenshot",caption:"《江湖人生》竹林开场菜单 · 用户提供的游戏截图",originalSize:[1273,744],displaySize:[1273,744],bytes:2093223,sourceSha256:"32e7324bc4821df6820d4b8e285d767d3339f8cf282f1f8a3043fc5e3d7982aa",processing:"原始PNG逐字节复制，完整保留画面比例与内容；仅在网页中等比例显示"},{id:"combat-goal-attack-sequence",path:"media/optimized/combat-goals/attack-sequence-3cb2c71d-lightweight-v4.webp",kind:"user-supplied-design-reference",caption:"攻击顺序制作设想",originalSize:[1169,545],displaySize:[1169,545],bytes:33859,sourceSha256:"3cb2c71d45914b01db6262555d977012daf9c06bc5ca64bff0acede83ac994db",processing:"原样复制PNG；原始像素、画布与透明度未修改"},{id:"combat-goal-draft-01",path:"media/optimized/images/a4990434f41d92e1-lightweight-v4.webp",kind:"user-supplied-design-reference",caption:"草稿帧制作 01",originalSize:[1448,1086],displaySize:[1448,1086],bytes:1936620,sourceSha256:"a4990434f41d92e1cae49e43304cb58ff40a4d1b0f267fae7d888abe24428d0b",processing:"原样复制PNG；原始像素、画布与透明度未修改",preview:"media/optimized/images/a4990434f41d92e1-thumb-lightweight-v4.webp"},{id:"combat-goal-draft-02",path:"media/optimized/images/93edaa18436554d1-lightweight-v4.webp",kind:"user-supplied-design-reference",caption:"草稿帧制作 02",originalSize:[1672,941],displaySize:[1672,941],bytes:854451,sourceSha256:"93edaa18436554d1230761748c7a63f0ed6a21cb66a8d3f170755129cbf38082",processing:"原样复制PNG；原始像素、画布与透明度未修改",preview:"media/optimized/images/93edaa18436554d1-thumb-lightweight-v4.webp"},{id:"level-goal-flowchart",path:"media/optimized/level-goals/jianghu-complete-flowchart-15f8df9f-lightweight-v4.webp",kind:"user-supplied-design-reference",caption:"江湖人生完整流程设计图",originalSize:[6412,766],displaySize:[6412,766],bytes:215864,sourceSha256:"15f8df9f42e6157e4b50ee74d34cb8a18a534fe73e6361eed62bb19586d85385",processing:"原样复制PNG；保留全部节点、文字、连接线与原始比例"}],Xo=[{id:"normal",path:"media/normal.mp4",source:"youxitu/normal_attack_fx_repair_v1/game_three_hit_combo_with_audio.mp4",caption:"普通三连击真实游戏视口帧合成预览；保留对应原声",kind:"native-frame-preview",code:0,bytes:361674,poster:"media/optimized/posters/normal-68576b55-lightweight-v4.webp"},{id:"wushuang",path:"media/wushuang.mp4",source:"youxitu/wushuang_pace_v2/previews/wushuang_pace_v2_gameplay.mp4",caption:"无双节奏迭代实机验收录像，含测试说明字",kind:"native-test-video",code:0,bytes:2429852,poster:"media/optimized/posters/wushuang-9e3439ad-lightweight-v4.webp"},{id:"manual",path:"media/manual.mp4",source:"youxitu/manual_combo_1344333025_v1/previews/manual_combo_gameplay.mp4",caption:"K秘籍学习与左右三连击实机验收录像；秘籍由测试夹具提供，非正式场景掉落",kind:"native-test-video",code:0,bytes:3624048,poster:"media/optimized/posters/manual-43b0e8eb-lightweight-v4.webp"},{id:"map",path:"media/map.mp4",source:"youxitu/map_crumple_v2/map_crumple_normal_with_audio.mp4",caption:"地图纸团展开原生UI验收录像",kind:"native-test-video",code:0,bytes:739632,poster:"media/optimized/posters/map-f4269eb0-lightweight-v4.webp"},{id:"prologue",path:"media/prologue.mp4",source:"youxitu/prologue_ending_v1/previews/prologue_ending_5s.mp4",caption:"序章结束过场成片预览，非玩家操作录像",kind:"cutscene-preview",code:0,bytes:547409,poster:"media/optimized/posters/prologue-0d719cf7-lightweight-v4.webp"}],Vo=[{id:"combat",kind:"combat",href:"combat.html",en:"COMBAT DESIGN",title:"战斗系统",question:"一次按键，如何成为一段清楚、有节奏的攻击？",tags:"输入攻击/ 收招衔接 / 无双状态",showOnHome:!0},{id:"systems",kind:"systems",href:"systems.html",en:"SYSTEM DESIGN",title:"交互系统",question:"用一致的状态规则，串起物品、武学与交互。",tags:"背包系统交互/ 地图系统交互 / 目标提示",showOnHome:!0},{id:"levels",kind:"levels",href:"levels.html",en:"LEVEL DESIGN",title:"关卡策划",question:"如何让玩家知道下一步，同时保留自由探索？",tags:"剧情流程设计 / 木桩教学 / 非强制引导",showOnHome:!0}],Zo="开发复盘",Qo=[{title:"无双前两刀收招过长",problem:"无双前两刀收招过长",cause:"独立收招包含大量重复站立尾帧：38帧与29帧。",change:"只精简实际播放序列，保留回拉与落刀；第1段选本地0–11、36–37，第2段选0–12。原PNG留存。",result:"收招时长分别缩短为0.530303与0.492424秒；连续攻击跳过完整收招。第1段原姿势切口仍使用短透明度交接，并非新补画。",status:"已接入；有既有原生回归记录",pending:!1,source:"youxitu/wushuang_pace_v2/README.md；scripts/hero_wushuang_attack_animations.gd:13–16；scripts/hero.gd:1021–1047"},{title:"第三刀慢，突进短",problem:"第三刀慢，突进短",cause:"旧配置主体1.860873秒，实际突进120像素/0.220秒；爆发阶段不够集中。",change:"按阶段重设绝对速度；突刺2.0×、金雷3.0×，突进改为168像素/0.125秒；按同一时间表重定时原声。",result:"主体1.303241秒；蓄势阶段无伤害，实际运动与突刺窗口重合，4像素子步碰撞仍保留。",status:"已接入；有既有原生回归记录",pending:!1,source:"scripts/hero_wushuang_third_animation.gd:11–25；scripts/hero.gd:33–34,1717–1733；scripts/game.gd:2064–2077"},{title:"K第二招缺少完整回站立动作",problem:"K第二招缺少完整回站立动作",cause:"源106–111只回落至低位马步；复用第一招会出现约42–48像素后跳；两次生成草稿的脚底、剑型及像素规格未通过。",change:"不采用复用/失败补画；依照最新接入要求，第二招独停直接idle，连续第三次输入跳过完整收招。",result:"技能功能可用，第二刀独停的姿势突变尚未解决；不能将该妥协写成已补齐自然收招。",status:"功能接入；美术过渡待完善",pending:!0,source:"scripts/hero.gd:814–844；youxitu/recovery_2_fixed_1344333025_v1/analysis/QUALITY_AUDIT.md"},{title:"新增K与原J/无双可能争用动作和声音",problem:"新增K与原J/无双可能争用动作和声音",cause:"多个攻击入口共用Hero与AnimationPlayer，需要避免跨分支续段和暂停时音画分离。",change:"新K保留独立序列标志、单下一段缓存、真实按键筛选及音频暂停同步；原J入口遇K直接拒绝。",result:"既有273项原生检查覆盖未学习拒绝、背包学习、1/2/3次K、左右、存档和暂停；未自动在正式场景投放秘籍。",status:"已接入；获取入口待配置",pending:!0,source:"scripts/game.gd:693–747；scripts/hero.gd:746–844,858–866；youxitu/manual_combo_1344333025_v1/tests/native_results.json"},{title:"提示只在靠近时出现，玩家难判断下一目标",problem:"提示只在靠近时出现，玩家难判断下一目标",cause:"导航显示与近距交互资格耦合",change:"HUD按剧情标志选择单一目标，E执行仍使用原距离／区域条件",result:"留存原生回归验证远处显示且远程E拒绝，靠近后原流程可执行",status:"已接入",pending:!1,source:"scripts/hud.gd:164–229；youxitu/story_interaction_v1/tests/interaction_indicator_results.json"},{title:"开局地图教学可能限制探索或重复要求开图",problem:"开局地图教学可能限制探索或重复要求开图",cause:"教学与模态剧情容易共用控制锁；早开图需处理旧页面",change:"起身结束即恢复playing，使用非阻塞指南；首次关图替换旧引导并只调度一次后续独白",result:"留存测试覆盖真实WASD、提前开图、重复关图、菜单延后和梦境排除",status:"已接入",pending:!1,source:"scripts/opening_sequence.gd:185–265；youxitu/opening_post_map_guide_v1/tests/native_results.json"},{title:"新背包参考图的示例功能与原模型不一致",problem:"新背包参考图的示例功能与原模型不一致",cause:"参考有30格、整理、多装备槽及示例属性，原模型只有25格及武器装备入口",change:"只换底板和动态显示位置，额外5格及整理保持禁用，真实数据继续驱动UI",result:"留存241项换肤检查无失败；整理、卸下并未被伪造为已实现",status:"视觉接入完成；扩展功能未实现",pending:!0,source:"scripts/inventory_ui.gd:363–428,591–689；youxitu/inventory_skin_20261016_v1/README.md",compare:["inventory-before","inventory"]}],tn={title:Zo,items:Qo},en=Object.assign({"../content/articles/combat.md":Ye,"../content/articles/levels.md":We,"../content/articles/systems.md":Ge}),on=Object.assign({"../content/article-structure/combat.json":Qe,"../content/article-structure/levels.json":io,"../content/article-structure/systems.json":xo}),ee={};for(const[t,e]of Object.entries(en)){const o=t.split("/").pop().replace(/\.md$/,""),n=on["../content/article-structure/"+o+".json"];if(!n)throw new Error("Article structure missing: "+o);ee[o]=St(mo(e,n))}const nn={site:Po,home:Do,copy:Ro,profile:Go,media:Jo,videos:Xo,cases:Vo,retrospective:tn,articles:ee};let Ot=()=>{},Ht=()=>{},oe=()=>"",ne=()=>()=>{},Bt=()=>{},ie=()=>"",ae=()=>()=>{},Kt=()=>{},Yt=()=>{},Wt=()=>{},Gt=()=>{},Jt=()=>{},J=structuredClone(nn),R,bt,le,tt,re,se,xe,pe,yt,de,ot,ct;function ce(){ct=Pe(J),{site:R,home:bt,copy:le,profile:tt,media:re,videos:se,cases:xe,retrospective:pe}=ct.model,{combat:yt,systems:de,levels:ot}=ct.model.articles}ce();const u=t=>le.labels[t]??"",Pt=t=>t.replace(/\[\[copy:([a-zA-Z0-9_]+)\]\]/g,(e,o)=>p(u(o))),p=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),O=t=>p(t).replace(/\r?\n/g,"<br>"),lt=t=>{const e=String(t??"").trim();return!e||/[\u0000-\u001f\\]/.test(e)||e.startsWith("//")?"#":/^(?:https?:\/\/|mailto:|#)/i.test(e)?e:/^[a-z][a-z0-9+.-]*:/i.test(e)?"#":e},an=t=>typeof t=="string"?t:(t==null?void 0:t.body)||(t==null?void 0:t.detail)||(t==null?void 0:t.text)||"",V=t=>Array.isArray(t)?t:[],kt=location.pathname.split("/").pop()||"index.html",B=/^(about|combat|systems|levels|retrospective|case)$/.test(kt)?kt+".html":kt,$t=t=>re.find(e=>e.id===t),ln=t=>se.find(e=>e.id===t&&e.code===0&&e.bytes>0),_e='<span aria-hidden="true">↗</span>';function G(t,e=""){const o=$t(t);return o?'<figure class="media '+e+'"><a href="./'+p(o.path)+'" target="_blank" rel="noopener"><img src="./'+p(o.preview||o.path)+'" width="'+o.displaySize[0]+'" height="'+o.displaySize[1]+'" alt="'+p(o.caption)+'" loading="lazy" decoding="async"></a><figcaption><span class="media-kind">[[copy:image_002]]</span>'+p(o.caption)+"</figcaption></figure>":'<div class="empty-media">[[copy:image_001]]</div>'}function dt(t,e="hero"){const o=ln(t),n=$t(e);return o?'<figure class="media"><video controls playsinline preload="none" '+(o.poster||n?'poster="./'+p(o.poster||n.preview||n.path)+'"':"")+' aria-label="'+p(o.caption)+'"><source src="./'+p(o.path)+'" type="video/mp4">[[copy:movie_002]]</video><figcaption><span class="media-kind">'+(o.kind==="cutscene-preview"?p(u("movie_003")):o.kind==="native-frame-preview"?p(u("movie_004")):o.kind==="ui-animation-preview"?p(u("movie_005")):p(u("movie_006")))+"</span>"+p(o.caption)+"[[copy:movie_007]]</figcaption></figure>":'<div class="empty-media">[[copy:movie_001]]</div>'}function _t(t,e,o=!1){return'<a class="button '+(o?"secondary":"")+'" href="'+p(lt(t))+'">'+p(e)+_e+"</a>"}function zt(t){const o={"about.html":"#about-me","combat.html":"#cases","systems.html":"#cases","levels.html":"#cases"}[t];return o?'<div class="detail-page-return"><a class="button secondary detail-return-button" href="./index.html?detail-return=1'+o+'"><span aria-hidden="true">←</span>'+p(bt.systemInteraction.back.label)+"</a></div>":""}function fe(t,e=!1){const o=lt(R.profile.resumeUrl);return'<a class="button secondary" href="'+p(o)+'" '+(e?"download":'target="_blank" rel="noopener noreferrer"')+">"+p(t)+_e+"</a>"}function ft(t){return'<ul class="clean-list">'+V(t).map(e=>"<li>"+O(an(e))+"</li>").join("")+"</ul>"}function rn(t){return'<ol class="flow">'+V(t).map(e=>"<li><strong>"+p(Ee(e.title||e.name||e.label||""))+"</strong><small>"+O(e.detail||e.body||e.description)+"</small></li>").join("")+"</ol>"}function Lt(t){return'<div class="rules">'+V(t).map(e=>'<div class="rule"><h3>'+p(e.title||e.name)+"</h3><p>"+O(e.body||e.detail||e.description)+"</p></div>").join("")+"</div>"}function me(t){var e;return(e=t==null?void 0:t.headers)!=null&&e.length?'<div class="table-wrap"><table><thead><tr>'+t.headers.map(o=>'<th scope="col">'+p(o)+"</th>").join("")+"</tr></thead><tbody>"+V(t.rows).map(o=>"<tr>"+o.map(n=>"<td>"+p(n)+"</td>").join("")+"</tr>").join("")+"</tbody></table></div>":""}function sn(t){return'<details><summary>[[copy:evidence_001]]</summary><p class="small">[[copy:evidence_002]]</p><ul class="source-list">'+V(t).map(e=>"<li><code>"+p(typeof e=="string"?e:e.file)+(e.lines?":"+p(e.lines):"")+"</code>"+(e.claim?"<p>"+O(e.claim)+"</p>":"")+"</li>").join("")+"</ul></details>"}function xn(t){return'<div class="validation">'+V(t).map(e=>'<div class="validation-item"><span class="validation-icon" aria-hidden="true">◇</span><div><h3>'+p(e.label||e.title)+"</h3><p>"+O(e.result||e.body)+"</p>"+(e.source?"<code>"+p(typeof e.source=="string"?e.source:JSON.stringify(e.source))+"</code>":"")+"</div></div>").join("")+"</div>"}function pn(t,{showSource:e=!0}={}){return V(t).map(o=>'<div class="iteration"><div class="status-row"><span class="badge '+(/待|未|局限|部分|妥协/.test(o.status||"")?"pending":"note")+'">'+p(o.status||u("iterations_001"))+"</span></div><h3>"+p(o.problem||o.title)+"</h3><dl><dt>[[copy:iterations_002]]</dt><dd>"+O(o.cause)+"</dd><dt>[[copy:iterations_003]]</dt><dd>"+O(o.change)+"</dd><dt>[[copy:iterations_004]]</dt><dd>"+O(o.result)+"</dd></dl>"+(e&&o.source?'<p class="small">[[copy:iterations_005]]<code>'+p(typeof o.source=="string"?o.source:JSON.stringify(o.source))+"</code></p>":"")+"</div>").join("")}function H(t,e,o,n){return'<section class="article-section" id="'+t+'"><h2><span class="num">'+e+"</span>"+p(o)+"</h2>"+n+"</section>"}function dn(){return B==="index.html"?'<a class="skip" href="#main">'+p(u("header_002"))+'</a><header class="header cover-header"><div class="cover-header-inner"><nav id="nav" class="nav" aria-label="'+p(u("header_005"))+'">'+R.nav.map(([t,e],o)=>'<a href="./'+p(lt(t))+'" style="--nav-order:'+o+'">'+p(e)+"</a>").join("")+"</nav></div></header>":'<a class="skip" href="#main">[[copy:header_002]]</a><header class="header"><div class="wrap header-inner"><a class="brand" href="./index.html" aria-label="[[copy:header_001]]"><span class="brand-mark">[[copy:header_003]]</span><span>'+p(R.brand)+"<small>[[copy:header_004]]"+p(R.version)+'</small></span></a><button class="menu-toggle" aria-expanded="false" aria-controls="nav">[[copy:header_006]]</button><nav id="nav" class="nav" aria-label="[[copy:header_005]]">'+R.nav.map(([t,e])=>'<a href="./'+p(lt(t))+'" '+(t===B?'aria-current="page"':"")+">"+p(e)+"</a>").join("")+"</nav></div></header>"}function cn(){return'<footer class="footer"><div class="wrap footer-inner"><div><p>[[copy:footer_001]]</p><p>[[copy:footer_002]]'+p(R.updated)+" / "+p(R.version)+'</p></div><div><p><a href="./about.html#contact">[[copy:footer_003]]</a>　·　<a href="./about.html#contact">[[copy:footer_004]]</a></p><p>[[copy:footer_005]]</p></div></div></footer>'}function ut(t,e,o,n=""){return'<div class="page-head"><div class="wrap"><div class="breadcrumbs"><a href="./index.html">[[copy:pageHead_001]]</a> / '+p(e)+'</div><p class="eyebrow">'+p(t)+"</p><h1>"+p(e)+'</h1><p class="subtitle">'+O(o)+"</p>"+n+"</div></div>"}function he(){const t=bt;return qe(t.cover,{playthroughURL:mt(R.profile.demoUrl)})+_n(t.shortcuts)+hn(t.aboutMe)+te(t.previews,{playthroughURL:mt(R.profile.demoUrl)})+mn(t.systemAnalysis)+fn(t.ending)}function _n(t){return'<section class="home-entry-navigation" id="entry-navigation" aria-label="'+p(t.label)+'">'+Fe(t)+"</section>"}function fn(t){const e=R.profile,o=e.emailApproved&&e.email?'<a class="ending-email" href="mailto:'+p(e.email)+'">'+p(e.email)+"</a>":'<a class="text-link" href="./about.html#contact">'+p(t.contactFallback)+"</a>";return'<section class="section home-ending" id="ending"><div class="wrap home-ending-grid"><div><p class="eyebrow">'+p(t.eyebrow)+"</p><h2>"+p(t.title)+'</h2><p class="ending-copy">'+p(t.intro)+'</p></div><div><p class="ending-contact-label">'+p(t.contactLabel)+"</p>"+o+'<div class="ending-phone"><p class="ending-contact-label">'+p(t.phoneLabel)+'</p><span class="ending-phone-number">'+p(t.phoneNumber)+'</span></div><div class="actions">'+fe(t.resume.label,!0)+_t(t.back.href,t.back.label,!0)+"</div></div></div></section>"}function mn(t){return Ae(t)}function hn(t){return t?'<section class="section home-about" id="about-me"><div class="wrap home-about-grid"><div><p class="eyebrow">'+p(t.eyebrow)+"</p><h2>"+p(t.title)+'</h2><div class="about-intro">'+String(t.intro??"").split(/\n\s*\n/).map(e=>"<p>"+O(e)+"</p>").join("")+'</div><div class="actions">'+fe(t.button.label)+_t(t.experienceButton.href,t.experienceButton.label,!0)+'</div></div><dl class="about-facts">'+t.items.map(e=>"<div><dt>"+p(e.label)+"</dt><dd>"+p(e.text)+"</dd></div>").join("")+"</dl></div></section>":""}function un(){return'<div class="explorer" id="timeline"><h3>[[copy:timelineExplorer_001]]</h3><p class="small">[[copy:timelineExplorer_002]]</p><div class="control-row"><label for="timeline-stage">[[copy:timelineExplorer_003]]</label><select id="timeline-stage">'+yt.timeline.map((t,e)=>'<option value="'+e+'" '+(e===5?"selected":"")+">"+p(t.name)+"</option>").join("")+'</select></div><div class="timeline-track" aria-hidden="true" id="timeline-track"></div><div class="timeline-axis"><span>[[copy:timelineExplorer_004]]</span><span id="timeline-end"></span></div><div class="timeline-legend"><span><i class="legend-dot"></i>[[copy:timelineExplorer_005]]</span><span><i class="legend-dot green"></i>[[copy:timelineExplorer_006]]</span></div><div class="timeline-output" id="timeline-output" aria-live="polite"></div><p class="small">[[copy:timelineExplorer_007]]</p></div>'}function bn(){return'<div class="explorer"><h3>[[copy:interactionExplorer_001]]</h3><p class="small">[[copy:interactionExplorer_002]]</p><div class="control-row"><label for="quest-state">[[copy:interactionExplorer_003]]</label><select id="quest-state"><option value="active">[[copy:interactionExplorer_004]]</option><option value="locked">[[copy:interactionExplorer_005]]</option><option value="done">[[copy:interactionExplorer_006]]</option></select><label class="check-label"><input type="checkbox" id="in-range">[[copy:interactionExplorer_007]]</label></div><div class="interaction-stage"><div class="state-box"><small>[[copy:interactionExplorer_008]]</small><strong id="marker-result"></strong></div><div class="state-box"><small>[[copy:interactionExplorer_009]]</small><strong id="range-result"></strong></div></div><p class="small">[[copy:interactionExplorer_010]]</p></div>'}function gn(){var e,o;return(o=(e=ot.map)==null?void 0:e.points)!=null&&o.length?'<div class="explorer"><h3>[[copy:coordinateDiagram_002]]</h3><div class="control-row"><label for="map-scene">[[copy:coordinateDiagram_003]]</label><select id="map-scene">'+[ot.map,...V(ot.additionalMaps)].map((n,x)=>'<option value="'+x+'">'+p(n.scene)+"</option>").join("")+'</select></div><div id="coordinate-view"></div><p class="small">[[copy:coordinateDiagram_004]]</p></div>':'<p class="truth-note">[[copy:coordinateDiagram_001]]</p>'}function ue(t=bt){return{...t.previews,groups:t.previews.groups.map((e,o)=>o===1?{...e,title:t.systemInteraction.title,modules:t.systemInteraction.chapters}:e)}}function wn(){return'<div class="combat-goal-images">'+["combat-goal-attack-sequence","combat-goal-draft-01","combat-goal-draft-02"].map(e=>{const o=$t(e);if(!o)return"";const n="./"+o.path;return'<figure><a href="'+p(n)+'" target="_blank" rel="noopener"><img src="./'+p(o.preview||o.path)+'" width="'+o.originalSize[0]+'" height="'+o.originalSize[1]+'" alt="'+p(o.caption)+'" loading="lazy" decoding="async"></a><figcaption>'+p(o.caption)+"</figcaption></figure>"}).join("")+"</div>"}function wt(t,e){var c;if(t==="systems"){const i=bt.systemInteraction;return ut(i.eyebrow,i.title,i.intro)+He(i)+te(ue(),{onlyGroup:1,standalone:!0,chapterLabels:i.labels,endContent:zt(B)})}const o={combat:u("casePage_001"),systems:u("casePage_002"),levels:u("casePage_003")}[t]||((c=xe.find(i=>i.id===new URLSearchParams(location.search).get("case")))==null?void 0:c.en)||u("generic_001"),n=[["goals",u(t==="levels"?"casePage_levels_goals_title":"casePage_004")],["rules",u(t==="levels"?"casePage_levels_rules":"casePage_005")],["demo",u("casePage_006")],["parameters",u("casePage_007")],["implementation",u("casePage_008")],["iterations",t==="levels"?e.uiIterations.title:u("casePage_009")],["validation",u("casePage_010")],["evidence",u("casePage_011")]].filter(([i])=>!["combat","levels"].includes(t)||!["implementation","validation","evidence"].includes(i)),x=t==="combat"?'<div class="media-grid">'+dt("normal","hero")+dt("manual","manual")+"</div>"+dt("wushuang","lightning")+'<div class="media-grid">'+G("recovery")+G("lightning")+"</div>":t==="systems"?G("inventory")+'<div class="media-grid">'+G("cloth")+G("map")+"</div>"+dt("map","map"):t==="levels"?'<div class="media-grid">'+G("guide")+G("dream")+'</div><div class="media-grid">'+G("inn")+G("hot-spring")+"</div>"+dt("prologue","prologue"):'<div class="empty-media">'+p(u("generic_002"))+"</div>",l=me(e.parameters)+(t==="combat"?un():t==="systems"?bn():t==="levels"?gn():""),a=H("goals","01",u(t==="levels"?"casePage_levels_goals_title":"casePage_012"),'<div class="two-col"><div class="panel"><h3>'+p(u(t==="levels"?"casePage_levels_goals_label":"casePage_013"))+"</h3>"+ft(e.goals)+'</div><div class="panel"><h3>'+p(u(t==="levels"?"casePage_levels_experience_label":"casePage_014"))+"</h3>"+ft(e.experience)+"</div></div>"+(t==="combat"?wn():t==="levels"?oe($t("level-goal-flowchart")):"")+'<p class="small">[[copy:casePage_015]]</p>')+H("rules","02",u(t==="levels"?"casePage_levels_rules":"casePage_016"),Lt(e.rules)+(t==="levels"?"":rn(e.flow)))+H("demo","03",u("casePage_006"),x+(t==="generic"?"":'<p class="truth-note">[[copy:casePage_017]]</p>'))+H("parameters","04",u(t==="levels"?"casePage_018":"casePage_019"),l)+(["combat","levels"].includes(t)?"":H("implementation","05",u("casePage_020"),Lt(e.implementation)))+H("iterations",t==="combat"?"05":"06",t==="levels"?e.uiIterations.title:u("casePage_021"),t==="levels"?ie(e.uiIterations):pn(e.iterations,{showSource:t!=="combat"}))+(["combat","levels"].includes(t)?"":H("validation","07",u("casePage_022"),xn(e.validation)+'<div class="callout"><h3>[[copy:casePage_023]]</h3>'+ft(e.limitations)+"</div>"))+(["combat","levels"].includes(t)?"":H("evidence","08",u("casePage_011"),sn(e.sources)));return ut(o,e.title,e.summary,'<div class="status-row"><span class="badge">'+p(e.status||u("casePage_024"))+'</span><span class="badge pending">[[copy:casePage_025]]</span><span class="badge note">[[copy:casePage_026]]</span></div>')+'<div class="wrap reading-grid"><aside class="toc" aria-label="[[copy:casePage_027]]"><small>[[copy:casePage_028]]</small>'+n.map(([i,m])=>'<a href="#'+i+'">'+p(m)+"</a>").join("")+'</aside><article class="article">'+a+zt(B)+"</article></div>"}function vn(){return ut(u("review_001"),u("review_002"),u("review_003"))+'<div class="wrap section"><div class="review-grid">'+pe.items.map((t,e)=>'<article class="review-step '+(t.compare?"wide":"")+'" id="review-'+(e+1)+'"><p class="eyebrow">[[copy:review_004]]'+(e+1)+'</p><span class="badge '+(t.pending?"pending":"note")+'">'+p(t.status)+"</span><h2>"+p(t.title)+"</h2><dl><dt>[[copy:review_005]]</dt><dd>"+O(t.problem)+"</dd><dt>[[copy:review_006]]</dt><dd>"+O(t.cause)+"</dd><dt>[[copy:review_007]]</dt><dd>"+O(t.change)+"</dd><dt>[[copy:review_008]]</dt><dd>"+O(t.result)+"</dd></dl>"+(t.compare?'<div class="media-grid">'+G(t.compare[0])+G(t.compare[1])+"</div>":"")+'<p class="small">[[copy:iterations_005]]<code>'+p(t.source)+"</code></p></article>").join("")+'</div><p class="truth-note">[[copy:review_009]]</p><div class="actions">'+_t("./combat.html",u("review_010"))+_t("./systems.html",u("review_011"),!0)+_t("./levels.html",u("review_012"),!0)+"</div></div>"}function Xt(t,e,o){const n=R.profile,x=n[t+"Url"];return n[t+"Approved"]&&x&&lt(x)!=="#"?'<a class="contact-item active" href="'+p(lt(x))+'" target="_blank" rel="noopener noreferrer"><strong>'+p(e)+"</strong><span>[[copy:approvedLink_001]]</span></a>":'<div class="contact-item"><strong>'+p(e)+"</strong><span>"+p(o)+"</span></div>"}function yn(){const t=R.profile,e=tt.education,o=tt.training;return ut(u("about_001"),u("about_002"),u("about_003"))+'<div class="wrap section"><section class="article-section profile-lead" id="profile"><div><p class="eyebrow">[[copy:about_004]]</p><h2>'+p(t.nameApproved?t.displayName:u("about_005"))+'</h2><p class="profile-summary">'+p(R.intro)+'</p><div class="roles">'+R.roles.map(n=>'<span class="role">'+p(n)+"</span>").join("")+'</div><p class="small">[[copy:about_006]]</p></div><div class="panel"><p class="meta-label">[[copy:about_007]]</p><h3>'+p(e.school)+"</h3><p>"+p(e.period)+"<br>"+p(e.degree)+'</p><p class="small">[[copy:about_008]]'+e.courses.map(p).join("、")+"。</p></div></section>"+H("training","01",u("about_009"),'<p class="eyebrow">'+p(o.period)+"</p><h3>"+p(o.title)+" · "+p(o.organization)+"</h3><p>"+p(o.project)+'</p><p class="training-note">'+p(o.disclaimer)+"</p>"+ft(o.items))+H("skills","02",u("about_010"),'<div class="profile-grid">'+tt.skills.map(n=>'<div class="skill"><span class="badge note">'+p(n.level)+"</span><h3>"+p(n.name)+"</h3><p>"+O(n.detail)+"</p></div>").join("")+"</div>")+H("games","03",u("about_011"),Lt(tt.games.map(n=>({title:n.group,body:n.names+"。"+n.focus})))+'<p class="small">[[copy:about_012]]</p>')+H("awards","04",u("about_013"),ft(tt.awards)+'<p class="small">'+p(tt.awardNote)+"</p>")+H("contact","06",u("about_020"),'<div class="contact-list">'+Xt("resume",u("about_021"),u("about_022"))+Xt("demo",u("about_023"),u("about_024"))+(t.emailApproved&&t.email?'<a class="contact-item active" href="mailto:'+p(t.email)+'"><strong>[[copy:about_025]]</strong><span>'+p(t.email)+"</span></a>":'<div class="contact-item"><strong>[[copy:about_025]]</strong><span>[[copy:about_026]]</span></div>')+'</div><p class="small">[[copy:about_027]]</p>')+zt(B)+"</div>"}const $n={"index.html":he,"combat.html":()=>wt("combat",yt),"systems.html":()=>wt("systems",de),"levels.html":()=>wt("levels",ot),"retrospective.html":vn,"about.html":yn,"case.html":()=>{const t=new URLSearchParams(location.search).get("case"),e=ct.model.articles[t];return e?wt("generic",e):ut(u("generic_001"),u("generic_003"),u("generic_002"))}};function Mt(){var t,e,o;Ot(),Ht(),Yt(),Kt(),Bt(),Wt(),Gt(),Jt(),ce(),document.body.classList.toggle("immersive-home",B==="index.html"),document.title=mt(((B==="case.html"?(t=J.articles[new URLSearchParams(location.search).get("case")])==null?void 0:t.title:((e=R.nav.find(n=>n[0]===B))==null?void 0:e[1])||((o=R.pageTitles)==null?void 0:o[B]))||u("common_001"))+" · "+R.title),document.querySelector("#app").replaceChildren(Te(Vt(Pt(dn()+'<main id="main">'+($n[B]||he)()+"</main>"+cn())))),Ot=Ne(document.querySelector("#app")),kn(),Bt=ne(document.querySelector(".level-goal-flowchart"),J.home.previews.labels),Kt=ae(document.querySelector(".ui-iterations"),J.home.previews.labels),Jt=Be(document.querySelector(".home-project-previews"),B==="systems.html"?ue(J.home):J.home.previews,{catalog:new URLSearchParams(location.search).has("content_catalog")}),Gt=Ke(document.querySelector(".header")),Wt=De(document.querySelector(".immersive-cover"),document.querySelector(".cover-header")),Ht=je(document.querySelector("#system-analysis"),J.home.systemAnalysis,{catalog:new URLSearchParams(location.search).has("content_catalog")}),Yt=Re(),window.__portfolioContentFields=()=>ze(document.body,ct.fields),Me(),window.dispatchEvent(new CustomEvent("portfolio:preview-rendered")),window.parent!==window&&window.parent.postMessage({type:"portfolio:preview-rendered"},location.origin)}function kn(){var n;(n=document.querySelector(".menu-toggle"))==null||n.addEventListener("click",x=>{const l=x.currentTarget.getAttribute("aria-expanded")!=="true";x.currentTarget.setAttribute("aria-expanded",String(l)),document.querySelector(".nav").classList.toggle("open",l)}),document.querySelectorAll("video:not([data-preview-video])").forEach(x=>x.addEventListener("play",()=>document.querySelectorAll("video:not([data-preview-video])").forEach(l=>{l!==x&&l.pause()})));const t=document.querySelector("#timeline-stage");if(t){let x=function(){const a=yt.timeline[Number(t.value)],c=a.frameDurations||Array.from({length:a.frames},()=>1/a.fps),i=[0];c.forEach(f=>i.push(i.at(-1)+f));const m=i.at(-1),h=Array.isArray(a.active[0])?a.active:[a.active],g=(f,w,r)=>'<span class="'+w+'" style="left:'+i[f[0]]/m*100+"%;width:"+(i[f[1]+1]-i[f[0]])/m*100+'%">'+p(r)+"</span>",$=a.buffer&&a.buffer[0]>=0;document.querySelector("#timeline-track").replaceChildren(Vt(Pt(h.map(f=>g(f,"timeline-active",u("updateTimeline_001"))).join("")+($?g(a.buffer,"timeline-buffer",u("updateTimeline_002")):"")))),document.querySelector("#timeline-end").textContent=m.toFixed(3)+"s / "+a.frames+u("updateTimeline_003"),document.querySelector("#timeline-output").textContent=(a.variableSpeed?u("updateTimeline_004"):u("updateTimeline_005")+a.fps+u("updateTimeline_006"))+u("updateTimeline_007")+h.map(f=>f.join("–")).join("、")+($?u("updateTimeline_008")+a.buffer.join("–"):u("updateTimeline_009"))+u("updateTimeline_010")+a.recoveryFrames+u("updateTimeline_003")+(a.recoveryFrames?" / "+a.recoveryDuration.toFixed(3)+"s":u("updateTimeline_011"))+(a.dash?u("updateTimeline_012")+a.dash.distance+"px / "+a.dash.duration.toFixed(3)+"s":"")};const l=()=>{x(),vt(document.querySelector("#timeline"))};t.addEventListener("change",l),l()}const e=document.querySelector("#quest-state");if(e){let x=function(){const a=e.value==="active",c=document.querySelector("#in-range").checked;document.querySelector("#marker-result").textContent=u(a?"updateRules_001":"updateRules_002"),document.querySelector("#range-result").textContent=u(c?"updateRules_003":"updateRules_004")};const l=()=>{x(),vt(e.closest(".explorer"))};e.addEventListener("change",l),document.querySelector("#in-range").addEventListener("change",l),l()}const o=document.querySelector("#map-scene");if(o){let x=function(){const c=l[Number(o.value)],i=c.bounds,m=i.width,h=i.height,g=r=>r.map(s=>s.join(",")).join(" "),$=V(c.obstacles).map(r=>'<polygon points="'+g(r.polygon)+'" fill="var(--diagram-obstacle)" fill-opacity=".75" stroke="var(--diagram-obstacle-line)" stroke-width="1.5"/>').join(""),f=c.points.map((r,s)=>{const E=c.points.some((C,M)=>M!==s&&Math.hypot(r.x-C.x,r.y-C.y)<32),v=r.x+(E?s%2?48:-48:0),A=r.y+(E?s%2?-33:33:0);return(r.radius?'<circle cx="'+r.x+'" cy="'+r.y+'" r="'+r.radius+'" fill="var(--gold)" fill-opacity=".07" stroke="var(--gold)" stroke-opacity=".4" stroke-dasharray="6 5"/>':"")+(E?'<line x1="'+r.x+'" y1="'+r.y+'" x2="'+v+'" y2="'+A+'" stroke="var(--gold)" stroke-width="2"/><circle cx="'+r.x+'" cy="'+r.y+'" r="4" fill="var(--gold)"/>':"")+'<circle cx="'+v+'" cy="'+A+'" r="15" fill="'+(r.type==="spawn"?"var(--diagram-accent)":"var(--gold)")+'" stroke="var(--ink)" stroke-width="3"/><text x="'+v+'" y="'+(A+6)+'" text-anchor="middle" style="fill:var(--ink)" font-size="18" font-weight="600">'+(s+1)+"</text>"}).join(""),w=Array.from({length:9},(r,s)=>'<line x1="'+m/8*s+'" y1="0" x2="'+m/8*s+'" y2="'+h+'" stroke="var(--diagram-grid)" stroke-width="1"/>').join("")+Array.from({length:7},(r,s)=>'<line x1="0" y1="'+h/6*s+'" x2="'+m+'" y2="'+h/6*s+'" stroke="var(--diagram-grid)" stroke-width="1"/>').join("");document.querySelector("#coordinate-view").innerHTML=Pt('<svg class="coordinate-map" viewBox="0 0 '+m+" "+h+'" role="img" aria-label="'+p(c.scene)+p(u("updateMap_001"))+'">'+w+'<polygon points="'+g(c.walkPolygon)+'" fill="var(--diagram-walk)" stroke="var(--diagram-accent)" stroke-width="3"/>'+$+f+'</svg><p class="small">'+p(c.coordinateSystem||u("updateMap_002")+m+"×"+h+u("updateMap_003"))+"</p>"+me({headers:[u("updateMap_004"),u("updateMap_005"),u("updateMap_006")],rows:c.points.map((r,s)=>[String(s+1),r.name,Number(r.x.toFixed(2))+" / "+Number(r.y.toFixed(2))])})+'<p class="small">'+p(c.note||"")+"</p>")};const l=[ot.map,...V(ot.additionalMaps)],a=()=>{x(),vt(document.querySelector("#coordinate-view"))};o.addEventListener("change",a),a()}}async function En(){if(B==="levels.html"){const[t,e]=await Promise.all([At(()=>import("./level-goal-flowchart-GE83evRH.js"),__vite__mapDeps([0,1]),import.meta.url),At(()=>import("./ui-iterations-BANuJ6i0.js"),__vite__mapDeps([2,3]),import.meta.url)]);({renderLevelGoalFlowchart:oe,mountLevelGoalFlowchart:ne}=t),{renderUIIterations:ie,mountUIIterations:ae}=e}Mt()}En();const Sn=new URLSearchParams(location.search).has("editor_preview")||new URLSearchParams(location.search).has("editorPreview");Sn&&(window.addEventListener("message",t=>{var n;if(t.origin!==location.origin||t.source!==window.parent||((n=t.data)==null?void 0:n.type)!=="portfolio:preview")return;const e=structuredClone(J),o=t.data.documents||[{documentId:t.data.documentId,value:t.data.value}];try{for(const{documentId:l,value:a}of o)l.startsWith("article:")?J.articles[l.slice(8)]=structuredClone(a):["site","home","copy","profile","media","videos","cases","retrospective"].includes(l)&&(J[l]=structuredClone(a));const x=scrollY;Mt(),new URLSearchParams(location.search).has("content")||scrollTo(0,x)}catch{J=e,Mt()}}),document.addEventListener("click",t=>{const e=t.target.closest("a[href]");if(!e)return;const o=new URL(e.href);o.origin===location.origin&&o.pathname.endsWith(".html")&&(o.searchParams.set("editor_preview","1"),e.href=o.href)}));window.addEventListener("message",t=>{var e;t.origin!==location.origin||t.source!==window.parent||((e=t.data)==null?void 0:e.type)!=="portfolio:locate"||Zt(String(t.data.contentId||""))});
