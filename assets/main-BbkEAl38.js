(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const se="",xe="",pe="",$t=/\uE000([^\uE001]+)\uE001|\uE002/g,de=new Set(["id","path","href","url","slug","filename","sourceSha256","hash","code","kind","format","preview","imageId","videoId","heroImageId","posterId","type","branch","poster","resumeUrl","demoUrl"]);function ce(t,e,n){let o=n;const s=e.map(a=>{let l=String(a);return Array.isArray(o)&&o[a]&&typeof o[a]=="object"&&typeof o[a].id=="string"&&(l="@"+o[a].id),o=o==null?void 0:o[a],encodeURIComponent(l).replaceAll(".","%2E")});return t.replace(":",".")+"."+s.join(".")}function dt(t){return String(t??"").replace($t,"")}function _e(t){return String(t??"").replace(/^(\uE000[^\uE001]+\uE001)?\d+\s+/,(e,n)=>n||"")}function fe(t,e,n){const o=String(e.at(-1));return t==="site"&&e.length===2&&e[0]==="profile"&&o==="demoUrl"?typeof n=="string":typeof n!="string"||de.has(o)||t==="home"&&e[0]==="shortcuts"||t==="retrospective"&&e.includes("compare")?!1:["media","videos"].includes(t)?o==="caption":!(o==="file"&&!t.startsWith("article:")||e[0]==="nav"&&e.at(-1)===0)}function ue(t){const e=new Map;function n(s,a){function l(d,i){if(typeof d=="string"){if(!fe(s,i,d))return d;const x=ce(s,i,a);return e.set(x,{id:x,targetId:x,documentId:s,path:i,value:d}),se+x+xe+d+pe}return Array.isArray(d)?d.map((x,f)=>l(x,[...i,f])):d&&typeof d=="object"?Object.fromEntries(Object.entries(d).map(([x,f])=>[x,l(f,[...i,x])])):d}return l(a,[])}const o={};for(const[s,a]of Object.entries(t))o[s]=s==="articles"?Object.fromEntries(Object.entries(a).map(([l,d])=>[l,n("article:"+l,d)])):n(s,a);return{model:o,fields:e}}function ht(t,e){if(!t||!e)return;const n=new Set((t.getAttribute("data-content-ids")||"").split(" ").filter(Boolean));n.add(e),t.setAttribute("data-content-ids",[...n].join(" ")),t.hasAttribute("data-content-id")||t.setAttribute("data-content-id",e)}function Mt(t){let e=t[0];for(;e&&!t.every(n=>e.contains(n));)e=e.parentElement;return e}function gt(t){const e=[...t.nodeType===1?[t]:[],...t.querySelectorAll("*")];for(const l of e)for(const d of[...l.attributes]){if(!/[\uE000-\uE002]/.test(d.value))continue;const i=[...d.value.matchAll(/\uE000([^\uE001]+)\uE001/g)].map(x=>x[1]);l.setAttribute(d.name,dt(d.value)),["alt","aria-label","title"].includes(d.name)&&i.forEach(x=>ht(l,x)),d.name==="href"&&i.filter(x=>x==="site.profile.demoUrl").forEach(x=>ht(l,x))}const n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),o=[];let s;for(;s=n.nextNode();)o.push(s);const a=[];for(const l of o){const d=l.nodeValue;let i=0,x="";$t.lastIndex=0;let f;const m=w=>{x+=w,w&&a.forEach(p=>p.elements.push(l.parentElement))};for(;f=$t.exec(d);){if(m(d.slice(i,f.index)),f[1])a.push({id:f[1],elements:[]});else{const w=a.pop();w&&ht(Mt(w.elements)||l.parentElement,w.id)}i=f.index+f[0].length}m(d.slice(i)),l.nodeValue=x}for(const l of a)ht(Mt(l.elements),l.id);return t}function Bt(t){const e=document.createElement("template");return e.innerHTML=t,gt(e.content)}function he(t,e){const n=new Map;for(const o of t.querySelectorAll("[data-content-ids]"))if(!o.closest(".entry-copy-in-image,[hidden]")&&!(o.tagName!=="OPTION"&&!o.getClientRects().length&&!o.closest("details:not([open])")))for(const s of o.dataset.contentIds.split(" ")){if(!e.has(s))continue;const a={...e.get(s)};o.tagName==="OPTION"&&(a.state={control:o.parentElement.id,value:o.value}),n.set(s,a)}return[...n.values()]}let It=0,At=0;async function Yt(t,{smooth:e=!0,announce:n=!0}={}){var w;const o=++At;let s=null;const a=new URLSearchParams(location.search).get("content-state");if(a)try{const{control:p,value:g,previewKey:r,scope:h}=JSON.parse(a);if(["cover","cases"].includes(h)&&(s=h),r&&!document.querySelector(".project-preview-lightbox[open]")){const y=[...document.querySelectorAll("[data-preview-open]")].find(N=>N.dataset.previewOpen===r);y==null||y.click()}const M=document.getElementById(p);M instanceof HTMLSelectElement&&[...M.options].some(y=>y.value===String(g))&&(M.value=String(g),M.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}const l=s?document.getElementById(s):null,d=[...document.querySelectorAll("[data-content-ids]")].filter(p=>p.dataset.contentIds.split(" ").includes(t)&&(!s||(l==null?void 0:l.contains(p))));let i=d.find(p=>p.tagName==="H1")||d.find(p=>p.matches("p,.about-intro,dd,figcaption,li,h2,h3"))||d.find(p=>p.tagName!=="OPTION")||d[0];if((i==null?void 0:i.tagName)==="OPTION"&&(i.parentElement.value=i.value,i.parentElement.dispatchEvent(new Event("change",{bubbles:!0})),i=i.parentElement),!i)return n&&me("该内容目前无法定位"),!1;for(let p=i.parentElement;p;p=p.parentElement)p.tagName==="DETAILS"&&(p.open=!0);if(i.matches(".skip")&&i.focus({preventScroll:!0}),await document.fonts.ready,o!==At)return!1;const x=i.getBoundingClientRect(),f=((w=document.querySelector(".header"))==null?void 0:w.getBoundingClientRect().height)||0,m=scrollY+x.top-Math.max(f+24,(innerHeight-Math.min(x.height,innerHeight-f-48))/2);return window.scrollTo({top:Math.max(0,m),behavior:e&&!matchMedia("(prefers-reduced-motion:reduce)").matches?"smooth":"instant"}),clearTimeout(It),document.querySelectorAll(".content-locate-highlight").forEach(p=>p.classList.remove("content-locate-highlight")),i.classList.add("content-locate-highlight"),It=setTimeout(()=>i.classList.remove("content-locate-highlight"),2e3),!0}function me(t){var n;(n=document.querySelector(".content-locate-status"))==null||n.remove();const e=document.createElement("div");e.className="content-locate-status",e.role="status",e.textContent=t,document.body.append(e),setTimeout(()=>e.remove(),2400)}function be(){const t=new URLSearchParams(location.search).get("content");t&&requestAnimationFrame(()=>Yt(t))}const J=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ct=t=>dt(t).trim(),nt=t=>{const e=ct(t).replace(/^\.\//,"");return!e.startsWith("documents/system-breakdowns/")||/[\u0000-\u001f\\?#:]/.test(e)||e.split("/").some(n=>!n||n==="."||n==="..")?"":/\.(?:pdf|png|jpe?g|webp)$/i.test(e)?"./"+e:""},jt=t=>{const e=Math.round(Number(t==null?void 0:t.width)),n=Math.round(Number(t==null?void 0:t.height));return e>0&&n>0?' width="'+e+'" height="'+n+'"':""},ge=(t,e)=>/^[a-z][a-z0-9-]*$/.test(ct(t.id))?ct(t.id):"document-"+e;function ve(t){var n;if(!((n=t==null?void 0:t.items)!=null&&n.length))return"";const e=t.items.map((o,s)=>{var f,m,w,p;const a=ge(o,s),l=nt(((f=o.pdf)==null?void 0:f.path)||((m=o.button)==null?void 0:m.href)),d=nt((w=o.pdf)==null?void 0:w.preview),i=(o.mindmaps||[]).find(g=>nt(g.path)),x=nt(i==null?void 0:i.path);return'<article class="system-breakdown" data-breakdown-id="'+a+'" aria-labelledby="breakdown-title-'+a+'"><h2 id="breakdown-title-'+a+'">'+J(o.title)+'</h2><div class="system-breakdown-previews"><figure class="system-breakdown-pdf"><a class="system-breakdown-media" href="'+J(l)+'" target="_blank" rel="noopener noreferrer" aria-label="新标签页查看完整PDF"><img src="'+J(d)+'"'+jt(o.pdf)+' alt="PDF首页预览" loading="lazy" decoding="async"></a><figcaption>PDF 文档预览</figcaption></figure><figure class="system-breakdown-mindmap"><button class="system-breakdown-media system-breakdown-enlarge" type="button" data-breakdown-open="'+s+'" aria-label="放大查看完整思维导图"><img src="'+J(x)+'"'+jt(i)+' alt="XMind完整思维导图预览" loading="lazy" decoding="async"><span class="system-breakdown-enlarge-hint" aria-hidden="true">点击放大</span></button><figcaption>XMind 思维导图 · 点击放大</figcaption></figure></div><p class="system-breakdown-intro">'+J(o.intro).replace(/\r?\n/g,"<br>")+'</p><div class="actions"><a class="button" href="'+J(l)+'" target="_blank" rel="noopener noreferrer">'+J(((p=o.button)==null?void 0:p.label)||"查看完整文档")+'<span aria-hidden="true">↗</span></a></div></article>'}).join("");return'<section class="section section-tint home-analysis system-breakdowns" id="system-analysis" aria-labelledby="system-breakdowns-label"><div class="wrap system-breakdowns-wrap"><p class="eyebrow" id="system-breakdowns-label">'+J(t.eyebrow)+'</p><div class="system-breakdowns-grid">'+e+"</div></div></section>"}function ye(t,e,{catalog:n=!1}={}){var d;if(!t||!((d=e==null?void 0:e.items)!=null&&d.length)||n)return()=>{};let o=null,s=!1;const a=()=>{if(!o)return;const i=o;o=null,i.controller.abort(),i.dialog.remove();const x=document.body.style;i.overflow?x.setProperty("overflow",i.overflow,i.overflowPriority):x.removeProperty("overflow"),i.padding?x.setProperty("padding-right",i.padding,i.paddingPriority):x.removeProperty("padding-right"),(window.scrollY!==i.scrollY||window.scrollX!==i.scrollX)&&window.scrollTo({left:i.scrollX,top:i.scrollY,behavior:"instant"}),!s&&i.trigger.isConnected&&i.trigger.focus({preventScroll:!0})},l=i=>{var at,lt;const x=(lt=(at=i.target).closest)==null?void 0:lt.call(at,"[data-breakdown-open]");if(!x||!t.contains(x)||i.defaultPrevented||o)return;const f=Number(x.dataset.breakdownOpen),m=e.items[f],w=((m==null?void 0:m.mindmaps)||[]).filter(v=>nt(v.path));if(!w.length)return;i.preventDefault();const p=new AbortController,g=p.signal,r=document.createElement("dialog");r.className="system-breakdown-lightbox",r.setAttribute("aria-labelledby","system-breakdown-viewer-title"),r.innerHTML='<header class="system-breakdown-viewer-header"><h2 id="system-breakdown-viewer-title"></h2><button class="system-breakdown-viewer-close" type="button" autofocus aria-label="关闭思维导图预览">关闭 <span aria-hidden="true">×</span></button></header><div class="system-breakdown-viewer-toolbar"><div class="system-breakdown-pages" hidden><button type="button" data-viewer-previous aria-label="上一张思维导图">上一张</button><span data-viewer-page></span><button type="button" data-viewer-next aria-label="下一张思维导图">下一张</button></div><div class="system-breakdown-zoom-controls"><button type="button" data-viewer-out aria-label="缩小思维导图">−</button><output data-viewer-zoom aria-label="当前缩放比例">100%</output><button type="button" data-viewer-in aria-label="放大思维导图">＋</button><button type="button" data-viewer-fit>完整显示</button></div><p>滚轮缩放 · 拖动查看</p></div><div class="system-breakdown-viewer-viewport" tabindex="0" role="region" aria-label="思维导图，可用滚轮缩放、拖动查看，方向键平移，加减键缩放，数字0完整显示"></div>',r.querySelector("h2").textContent=ct(m.title);const h=r.querySelector(".system-breakdown-viewer-viewport"),M=r.querySelector("[data-viewer-zoom]"),y=r.querySelector(".system-breakdown-pages");y.hidden=w.length<2;const N=document.body.style;o={dialog:r,controller:p,trigger:x,overflow:N.getPropertyValue("overflow"),overflowPriority:N.getPropertyPriority("overflow"),padding:N.getPropertyValue("padding-right"),paddingPriority:N.getPropertyPriority("padding-right"),scrollX:window.scrollX,scrollY:window.scrollY};const C=Math.max(0,window.innerWidth-document.documentElement.clientWidth);C&&(N.paddingRight=parseFloat(getComputedStyle(document.body).paddingRight)+C+"px"),N.overflow="hidden";let I,q=0,$=0,b=0,S=1,_=1,k=0,E=0,j=!0,P=null;const A=()=>({width:h.clientWidth,height:h.clientHeight}),R=()=>{if(!I||!$||!b)return;const v=A(),T=$*S,D=b*S;k=T<=v.width?(v.width-T)/2:Math.max(v.width-T,Math.min(0,k)),E=D<=v.height?(v.height-D)/2:Math.max(v.height-D,Math.min(0,E)),I.style.transform="translate("+k+"px,"+E+"px) scale("+S+")",M.textContent=Math.round(S*100)+"%",h.classList.toggle("is-zoomed",T>v.width+1||D>v.height+1),r.querySelector("[data-viewer-out]").disabled=S<=_*.5+1e-4,r.querySelector("[data-viewer-in]").disabled=S>=Math.max(4,_)-1e-4},U=()=>{if(!$||!b)return;const v=A();_=Math.min(v.width/$,v.height/b,1)*.96,S=_,k=(v.width-$*S)/2,E=(v.height-b*S)/2,j=!0,R()},G=(v,T)=>{if(!I||!$||!b)return;const D=A(),Lt=h.getBoundingClientRect(),ut=T?{x:T.clientX-Lt.left,y:T.clientY-Lt.top}:{x:D.width/2,y:D.height/2},wt=Math.max(_*.5,Math.min(Math.max(4,_),S*v));k=ut.x-(ut.x-k)*wt/S,E=ut.y-(ut.y-E)*wt/S,S=wt,j=!1,R()},tt=v=>{q=(v+w.length)%w.length,$=b=0,P=null,h.classList.remove("is-dragging");const T=new Image;T.className="system-breakdown-viewer-image",T.alt=ct(m.title)+" · 思维导图 "+(q+1),T.draggable=!1;const D=document.createElement("p");D.className="system-breakdown-viewer-status",D.setAttribute("role","status"),D.textContent="正在加载完整思维导图…",I=T,h.replaceChildren(I,D),I.addEventListener("load",()=>{I!==T||!o||($=T.naturalWidth,b=T.naturalHeight,T.style.width=$+"px",T.style.height=b+"px",D.remove(),U())},{once:!0,signal:g}),I.addEventListener("error",()=>{I===T&&(D.textContent="思维导图暂时无法加载，请关闭后重试。")},{once:!0,signal:g}),I.src=nt(w[q].path),r.querySelector("[data-viewer-page]").textContent=q+1+" / "+w.length};r.querySelector(".system-breakdown-viewer-close").addEventListener("click",()=>r.close(),{signal:g}),r.addEventListener("close",a,{signal:g}),r.addEventListener("click",v=>{if(v.target!==r)return;const T=r.getBoundingClientRect();(v.clientX<T.left||v.clientX>T.right||v.clientY<T.top||v.clientY>T.bottom)&&r.close()},{signal:g}),r.addEventListener("wheel",v=>{v.preventDefault(),v.stopPropagation()},{passive:!1,signal:g}),h.addEventListener("wheel",v=>{v.preventDefault(),v.stopPropagation();const T=v.deltaY*(v.deltaMode===1?16:v.deltaMode===2?h.clientHeight:1);G(Math.exp(Math.max(-.3,Math.min(.3,-T*.0015))),v)},{passive:!1,signal:g}),h.addEventListener("pointerdown",v=>{v.button!==0||!$||(v.preventDefault(),h.focus({preventScroll:!0}),P={id:v.pointerId,startX:v.clientX,startY:v.clientY,x:k,y:E},h.setPointerCapture(v.pointerId),h.classList.add("is-dragging"))},{signal:g}),h.addEventListener("pointermove",v=>{!P||P.id!==v.pointerId||(k=P.x+v.clientX-P.startX,E=P.y+v.clientY-P.startY,j=!1,R())},{signal:g});const et=()=>{P=null,h.classList.remove("is-dragging")};h.addEventListener("pointerup",et,{signal:g}),h.addEventListener("pointercancel",et,{signal:g}),h.addEventListener("lostpointercapture",et,{signal:g}),h.addEventListener("keydown",v=>{if(!(v.ctrlKey||v.metaKey||v.altKey)){if(["+","="].includes(v.key))G(1.25);else if(["-","_"].includes(v.key))G(.8);else if(v.key==="0")U();else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(v.key))k+=v.key==="ArrowLeft"?60:v.key==="ArrowRight"?-60:0,E+=v.key==="ArrowUp"?60:v.key==="ArrowDown"?-60:0,j=!1,R();else return;v.preventDefault(),v.stopPropagation()}},{signal:g}),r.querySelector("[data-viewer-out]").addEventListener("click",()=>G(.8),{signal:g}),r.querySelector("[data-viewer-in]").addEventListener("click",()=>G(1.25),{signal:g}),r.querySelector("[data-viewer-fit]").addEventListener("click",U,{signal:g}),r.querySelector("[data-viewer-previous]").addEventListener("click",()=>tt(q-1),{signal:g}),r.querySelector("[data-viewer-next]").addEventListener("click",()=>tt(q+1),{signal:g}),window.addEventListener("resize",()=>{j?U():R()},{signal:g}),document.body.append(r);try{r.showModal(),tt(0)}catch{a()}};return t.addEventListener("click",l),()=>{s=!0,t.removeEventListener("click",l),a()}}const mt=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function we(t){if(!t)return"";const e="./"+t.path;return'<figure class="level-goal-flowchart"><a href="'+mt(e)+'" target="_blank" rel="noopener" data-level-flowchart-open><img src="'+mt(e)+'" width="'+t.originalSize[0]+'" height="'+t.originalSize[1]+'" alt="'+mt(t.caption)+'" loading="lazy" decoding="async"></a><figcaption>'+mt(t.caption)+"</figcaption></figure>"}function $e(t,e={}){if(!t)return()=>{};const n=t.querySelector("[data-level-flowchart-open]");let o,s;const a=()=>{document.body.style.overflow=s,o==null||o.remove(),o=null,n.isConnected&&n.focus({preventScroll:!0})},l=d=>{if(!d.target.closest("[data-level-flowchart-open]")||d.ctrlKey||d.metaKey||d.shiftKey||d.altKey||(d.preventDefault(),o))return;const i=t.querySelector("figcaption").textContent;o=document.createElement("dialog"),o.className="project-preview-lightbox level-flowchart-lightbox",o.setAttribute("aria-labelledby","level-flowchart-lightbox-title");const x=document.createElement("div");x.className="project-preview-lightbox-header";const f=document.createElement("h2");f.id="level-flowchart-lightbox-title",f.textContent=i;const m=document.createElement("button");m.type="button",m.className="project-preview-close",m.textContent=e.close,m.autofocus=!0,m.addEventListener("click",()=>o.close()),x.append(f,m);const w=document.createElement("div");w.className="project-preview-lightbox-content",w.tabIndex=0,w.setAttribute("role","region"),w.setAttribute("aria-label",i);const p=document.createElement("img");p.src=n.href,p.alt=i,w.append(p),o.append(x,w),o.addEventListener("close",a),o.addEventListener("click",g=>{const r=o.getBoundingClientRect();g.target===o&&(g.clientX<r.left||g.clientX>r.right||g.clientY<r.top||g.clientY>r.bottom)&&o.close()}),document.body.append(o),s=document.body.style.overflow,document.body.style.overflow="hidden",o.showModal()};return t.addEventListener("click",l),()=>{t.removeEventListener("click",l),o&&(o.removeEventListener("close",a),o.remove(),o=null,document.body.style.overflow=s)}}const K=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ke=t=>/^media\/ui-iterations\/[a-z0-9-]+\.(png|mp4)$/.test(t)?"./"+t:"";function Nt(t,e,n){const o=ke(t.path),s=n==="before"?"旧版":"新版",a=n==="before"?"BEFORE":"AFTER",l=' data-ui-iteration-open data-media-kind="'+K(t.kind)+'" data-media-path="'+K(o)+'" data-version="'+n+'"';return'<figure class="ui-iteration-media">'+(t.kind==="video"?'<div class="ui-iteration-window"><video data-preview-video data-ui-iteration-video autoplay muted loop playsinline controls preload="metadata" width="'+Number(t.width)+'" height="'+Number(t.height)+'" aria-label="'+K(e)+" · "+s+'"><source src="'+K(o)+'" type="video/mp4"></video><button class="ui-iteration-expand" type="button"'+l+' aria-label="展开观看：'+K(e)+" · "+s+'">↗</button></div>':'<a class="ui-iteration-window" href="'+K(o)+'" target="_blank" rel="noopener"'+l+' aria-label="放大查看：'+K(e)+" · "+s+'"><img src="'+K(o)+'" width="'+Number(t.width)+'" height="'+Number(t.height)+'" alt="'+K(e)+" · "+s+'" loading="lazy" decoding="async"><span class="ui-iteration-expand" aria-hidden="true">↗</span></a>')+"<figcaption>"+s+" <span>"+a+"</span></figcaption></figure>"}function Ee(t){return'<div class="ui-iterations">'+t.cases.map(e=>'<article class="ui-iteration-case" data-iteration-id="'+K(e.id)+'"><h3>'+K(e.title)+'</h3><div class="ui-iteration-pair">'+Nt(e.before,e.title,"before")+Nt(e.after,e.title,"after")+'</div><p class="ui-iteration-intro">'+K(e.intro)+"</p></article>").join("")+"</div>"}function Se(t,e={}){if(!t)return()=>{};let n,o,s,a;const l=()=>{var i;(i=n==null?void 0:n.querySelector("video"))==null||i.pause(),document.body.style.overflow=s,n==null||n.remove(),n=null,a!=null&&a.isConnected&&a.play().catch(()=>{}),o!=null&&o.isConnected&&o.focus({preventScroll:!0}),a=null},d=i=>{const x=i.target.closest("[data-ui-iteration-open]");if(!x||i.ctrlKey||i.metaKey||i.shiftKey||i.altKey||n)return;i.preventDefault(),o=x;const f=x.closest(".ui-iteration-case").querySelector("h3").textContent+" · "+(x.dataset.version==="before"?"旧版 BEFORE":"新版 AFTER");n=document.createElement("dialog"),n.className="project-preview-lightbox ui-iteration-lightbox",n.setAttribute("aria-labelledby","ui-iteration-lightbox-title");const m=document.createElement("div");m.className="project-preview-lightbox-header";const w=document.createElement("h2");w.id="ui-iteration-lightbox-title",w.textContent=f;const p=document.createElement("button");p.type="button",p.className="project-preview-close",p.textContent=e.close||"关闭",p.autofocus=!0,p.addEventListener("click",()=>n.close()),m.append(w,p);const g=document.createElement("div");g.className="project-preview-lightbox-content";const r=document.createElement(x.dataset.mediaKind==="video"?"video":"img");if(r.src=x.dataset.mediaPath,r instanceof HTMLVideoElement){a=x.parentElement.querySelector("video");const h=a.currentTime;a.pause(),r.dataset.previewVideo="",r.controls=!0,r.autoplay=!0,r.muted=!0,r.loop=!0,r.playsInline=!0,r.addEventListener("loadedmetadata",()=>{h<r.duration&&(r.currentTime=h)},{once:!0}),r.setAttribute("aria-label",f)}else r.alt=f;g.append(r),n.append(m,g),n.addEventListener("close",l),n.addEventListener("click",h=>{const M=n.getBoundingClientRect();h.target===n&&(h.clientX<M.left||h.clientX>M.right||h.clientY<M.top||h.clientY>M.bottom)&&n.close()}),s=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(n),n.showModal()};return t.addEventListener("click",d),()=>{var i;t.removeEventListener("click",d),n&&(n.removeEventListener("close",l),(i=n.querySelector("video"))==null||i.pause(),n.remove(),n=null,document.body.style.overflow=s)}}function Wt(t){const e=String(t??"");if(e.length>2e3||!/^https:\/\/(?:www\.)?bilibili\.com\//i.test(e)||/[\s\\\u0000-\u001f\u007f]/.test(e))return"#";try{const n=new URL(e);return n.protocol==="https:"&&["www.bilibili.com","bilibili.com"].includes(n.hostname)&&!n.username&&!n.password&&!n.port&&/^\/video\/BV[0-9A-Za-z]{10}\/?$/.test(n.pathname)?n.href:"#"}catch{return"#"}}const H=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Pe(){const t=[2,2.5,3,3.5,4,4.5,5],e=[18,22,26,30,24,20,28],n=[.5,.6,.7,.8,.85],o=[18,-30,24,-18,35,-22],s=[8,-12,10,-9,14,-11];return'<div class="cover-snow" aria-hidden="true">'+Array.from({length:84},(a,l)=>{const d=l%19===0,i=d?16:e[l%e.length],x=Math.sin((l+1)*78.233)*43758.5453,f=x-Math.floor(x);return'<span class="cover-snowflake" style="--snow-x:'+(2+l*.38196601125%1*96).toFixed(3)+"%;--snow-size:"+(d?5.5:t[l%t.length])+"px;--snow-duration:"+i+"s;--snow-delay:"+(-f*i).toFixed(3)+"s;--snow-opacity:"+n[l%n.length]+";--snow-drift:"+o[l%o.length]+"px;--snow-sway:"+s[l%s.length]+'px"></span>'}).join("")+"</div>"}function Le(t,e={}){const n=t.image,o=/^media\/[a-z0-9_./-]+\.(?:webp|png|jpg)$/i.test(n.path)&&!n.path.includes("..")?"./"+n.path:"",s='<div class="cover-action-blur" aria-hidden="true"><img class="cover-action-blur-art" src="'+H(o)+'" width="'+Number(n.width)+'" height="'+Number(n.height)+'" alt="" decoding="async"></div>';return'<section class="immersive-cover is-loading" id="cover" aria-labelledby="cover-title"><div class="cover-art-stage"><div class="cover-visual"><img class="cover-art" src="'+H(o)+'" width="'+Number(n.width)+'" height="'+Number(n.height)+'" alt="'+H(n.alt)+'" fetchpriority="high" decoding="async"><div class="cover-blur" aria-hidden="true"><img class="cover-blur-art" src="'+H(o)+'" width="'+Number(n.width)+'" height="'+Number(n.height)+'" alt="" decoding="async"></div>'+s+Pe()+'<div class="cover-shade" aria-hidden="true"></div></div><div class="cover-copy-parallax"><div class="cover-copy"><p class="cover-eyebrow">'+H(t.eyebrow)+'</p><h1 id="cover-title">'+H(t.title)+'</h1><p class="cover-subtitle">'+H(t.subtitle)+'</p><p class="cover-project">'+H(t.project)+'</p></div></div></div><div class="cover-primary-actions"><a class="cover-primary-action" href="'+H(Wt(e.playthroughURL))+'" target="_blank" rel="noopener noreferrer" data-content-ids="site.profile.demoUrl"><span>'+H(t.actions.playthrough.label)+'</span></a><a class="cover-primary-action" href="#ending" data-cover-contact><span>'+H(t.actions.contact.label)+"</span></a></div></section>"}function Me(t,e){if(!t)return()=>{};const n=matchMedia("(prefers-reduced-motion: reduce)"),o=new URLSearchParams(location.search).has("editor_preview")||new URLSearchParams(location.search).has("editorPreview");let s=!1,a=0;const l=[...document.querySelectorAll("#about-me>.wrap,#cases>.wrap,#system-analysis>.wrap,#ending>.wrap")];document.body.classList.toggle("cover-preview-static",o),document.body.classList.toggle("home-motion-enabled",!n.matches&&!o);const d=()=>{a=0,!s&&(t.style.setProperty("--cover-drift",(n.matches||o?0:Math.min(12,Math.max(0,scrollY)*.018))+"px"),e==null||e.classList.toggle("cover-header-solid",scrollY>40))},i=()=>{a||(a=requestAnimationFrame(d))},x=()=>{s||(t.classList.remove("is-loading"),t.classList.add("is-ready"),document.body.classList.add("cover-ready"))};o?x():t.querySelector("img.cover-art").decode().catch(()=>{}).then(x);const f=new IntersectionObserver(p=>{p.forEach(g=>{g.isIntersecting&&(g.target.classList.add("is-visible"),f.unobserve(g.target))})},{threshold:.08,rootMargin:"0px 0px -50px 0px"});l.forEach(p=>{p.classList.add("cover-reveal"),o||n.matches?p.classList.add("is-visible"):f.observe(p)});const m=()=>{document.body.classList.toggle("home-motion-enabled",!n.matches&&!o),n.matches&&l.forEach(p=>p.classList.add("is-visible")),d()},w=p=>{const g=p.target.closest("[data-cover-contact]");if(!g||p.defaultPrevented||p.button!==0||p.metaKey||p.ctrlKey||p.shiftKey||p.altKey)return;const r=document.getElementById("ending");r&&(p.preventDefault(),history.pushState(null,"",g.href),r.scrollIntoView({block:"start",behavior:n.matches?"instant":"smooth"}))};return t.addEventListener("click",w),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i,{passive:!0}),n.addEventListener("change",m),d(),()=>{s=!0,cancelAnimationFrame(a),f.disconnect(),t.removeEventListener("click",w),window.removeEventListener("scroll",i),window.removeEventListener("resize",i),n.removeEventListener("change",m),document.body.classList.remove("cover-ready","home-motion-enabled","cover-preview-static")}}const V=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Tt=t=>/^media\/[a-z0-9_./-]+\.png$/i.test(t)&&!t.includes("..")?"./"+t:"";function Ie(t){var e;return(e=t==null?void 0:t.items)!=null&&e.length?'<nav class="home-shortcuts entry-strip" id="portfolio-shortcuts" aria-label="'+V(t.label)+'"><div class="entry-grid">'+t.items.map(n=>{const o=n.image,s=n.frame,a=n.composition,l=/^#(?:about-me|cases|system-analysis)$/.test(n.href)?n.href:"#",d=o.visibleBounds,i="--entry-aspect:"+d.width/d.height+";--image-width:"+100*o.width/d.width+"%;--image-height:"+100*o.height/d.height+"%;--image-left:"+-100*d.x/d.width+"%;--image-top:"+-100*d.y/d.height+"%;--entry-art-height:"+Number(a.artHeight)+"px;--entry-art-left:"+Number(a.artLeft)+"px;--entry-art-bottom:"+Number(a.artBottom)+"px";return'<a class="home-shortcut entry-card" href="'+V(l)+'" aria-label="'+V(n.title+" / "+n.subtitle)+'" style="'+i+'"><img class="entry-frame" src="'+V(Tt(s.path))+'" width="'+Number(s.width)+'" height="'+Number(s.height)+'" alt="" loading="eager" decoding="async"><span class="entry-art"><span class="entry-art-crop"><img src="'+V(Tt(o.path))+'" width="'+Number(o.width)+'" height="'+Number(o.height)+'" alt="" loading="eager" decoding="async"></span></span><span class="entry-copy entry-copy-in-image"><span class="shortcut-label">'+V(n.title)+'</span><span class="entry-subtitle">'+V(n.subtitle)+"</span></span></a>"}).join("")+"</div></nav>":""}function Ae(){const t=new URLSearchParams(location.search);if(!document.body.classList.contains("immersive-home")||window.parent!==window||["editor_preview","editorPreview","content_catalog"].some(_=>t.has(_)))return()=>{};const e=[...document.querySelectorAll("main > section")],n=new Set(["cover","entry-navigation","about-me","ending"]),o=e.filter(_=>n.has(_.id)),s=document.getElementById("cases"),a=document.getElementById("portfolio-shortcuts"),l=document.querySelector(".cover-header"),d=[...o,...l?[l]:[]],i=matchMedia("(prefers-reduced-motion: reduce)"),x=matchMedia("(min-width: 1024px)"),f=_=>window.scrollY+_.getBoundingClientRect().top,m=_=>Math.max(0,Math.min(_,document.documentElement.scrollHeight-innerHeight)),w=_=>_.getBoundingClientRect().height<=innerHeight+2;let p=null,g=0,r=-1/0,h=!1;const M=()=>{cancelAnimationFrame(g),g=0,p=null},y=()=>{M(),r=-1/0},N=(_,k,E=null)=>{M();const j=m(_);if(i.matches){window.scrollTo({top:j,behavior:"instant"});return}const P={kind:k,source:E,start:scrollY,end:j,written:scrollY,time:performance.now(),duration:k==="wheel"?760:720};p=P;const A=R=>{if(g=0,h||p!==P)return;if(Math.abs(scrollY-P.written)>3){M();return}const U=Math.min(1,(R-P.time)/P.duration),G=k==="wheel"?U<.5?4*U**3:1-(-2*U+2)**3/2:1-(1-U)**3;window.scrollTo({top:P.start+(P.end-P.start)*G,behavior:"instant"}),P.written=scrollY,U<1?g=requestAnimationFrame(A):p=null};g=requestAnimationFrame(A)},C=(_,k)=>{if(!(_ instanceof Element)||_.closest('input,textarea,select,video,audio,[contenteditable]:not([contenteditable="false"]),dialog'))return!0;for(let E=_;E&&E!==k;E=E.parentElement)if(E.scrollHeight>E.clientHeight+1&&/^(auto|scroll)$/.test(getComputedStyle(E).overflowY))return!0;return!1},I=_=>{const k=_.currentTarget===l?(p==null?void 0:p.source)||o.find(R=>Math.abs(scrollY-f(R))<=2):_.currentTarget;if(!k||!x.matches||i.matches||_.defaultPrevented||!_.cancelable||_.ctrlKey||_.metaKey||_.altKey||_.shiftKey||!_.deltaY||Math.abs(_.deltaX)>=Math.abs(_.deltaY)||document.querySelector("dialog[open]")||document.body.style.overflow==="hidden"||C(_.target,k)){M();return}const E=s?f(s):1/0;if(s&&scrollY>=E-2&&scrollY<E+s.offsetHeight-2){M();return}if((p==null?void 0:p.kind)==="link"){M();return}const j=performance.now();if((p==null?void 0:p.kind)==="wheel"){_.preventDefault(),r=j;return}if(!w(k)||Math.abs(scrollY-f(k))>2)return;if(j-r<180){_.preventDefault(),r=j;return}const P=Math.sign(_.deltaY),A=e[e.indexOf(k)+P];A&&(!n.has(A.id)&&!(k.id==="about-me"&&A===s&&P>0)||n.has(A.id)&&!w(A)||(_.preventDefault(),r=j,N(f(A),"wheel",k)))},q=_=>{const k=_.target.closest(".entry-card[href]");if(!k||!a.contains(k)||_.defaultPrevented||_.button!==0||_.metaKey||_.ctrlKey||_.shiftKey||_.altKey)return;const E=new URL(k.href,location.href);if(E.origin!==location.origin||E.pathname!==location.pathname||!E.hash)return;const j=document.getElementById(decodeURIComponent(E.hash.slice(1)));if(!j)return;_.preventDefault(),location.href!==E.href&&history.pushState(null,"",E.href),r=-1/0;const P=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0;N(f(j)-P,"link")},$=_=>{["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," ","Escape"].includes(_.key)&&y()},b=_=>{var k,E;(E=(k=_.target).closest)!=null&&E.call(k,"a[href]")&&y()},S=_=>{var k;_.origin===location.origin&&["portfolio:locate","portfolio:preview"].includes((k=_.data)==null?void 0:k.type)&&y()};return d.forEach(_=>_.addEventListener("wheel",I,{passive:!1})),a==null||a.addEventListener("click",q),document.addEventListener("click",b,!0),window.addEventListener("pointerdown",y,{passive:!0}),window.addEventListener("keydown",$),window.addEventListener("resize",y,{passive:!0}),window.addEventListener("popstate",y),window.addEventListener("hashchange",y),window.addEventListener("message",S),i.addEventListener("change",y),x.addEventListener("change",y),()=>{h=!0,y(),d.forEach(_=>_.removeEventListener("wheel",I)),a==null||a.removeEventListener("click",q),document.removeEventListener("click",b,!0),window.removeEventListener("pointerdown",y),window.removeEventListener("keydown",$),window.removeEventListener("resize",y),window.removeEventListener("popstate",y),window.removeEventListener("hashchange",y),window.removeEventListener("message",S),i.removeEventListener("change",y),x.removeEventListener("change",y)}}function je(t){if(!t)return()=>{};const e=[...t.querySelectorAll(".hero-carousel-slide")],n=[...t.querySelectorAll("[data-carousel-to]")],o=t.querySelector(".hero-carousel-status"),s=Number(t.dataset.period),a=Number(t.dataset.duration),l=matchMedia("(prefers-reduced-motion: reduce)"),d=[];let i=0,x=null,f=!1,m=null,w=!1,p=!1,g=!1,r=[];const h=($,b,S)=>{$.addEventListener(b,S),d.push(()=>$.removeEventListener(b,S))},M=()=>{x!==null&&clearTimeout(x),x=null},y=()=>p||g||document.hidden||l.matches,N=$=>{const b=e[$].querySelector("img");return b.decode().then(()=>b.naturalWidth>0).catch(()=>!1)},C=$=>{for(const b of[$,($+1)%e.length,($+e.length-1)%e.length])N(b)},I=($=s)=>{M(),!(w||f||y()||e.length<2)&&(x=setTimeout(()=>{x=null,q((i+1)%e.length,!1)},$))};async function q($,b){if(M(),w||$<0||$>=e.length)return;if(f){m={index:$,manual:b};return}if($===i){I();return}f=!0;const S=await N($);if(w)return;if(!S||!b&&y()){f=!1;const A=m;if(m=null,A&&A.index!==i){q(A.index,A.manual);return}I();return}const _=performance.now(),k=e[i],E=e[$];t.dataset.transitioning="true",t.dataset.target=String($),E.hidden=!1,E.setAttribute("aria-hidden","false"),E.style.zIndex="2",k.style.zIndex="1";const j={duration:l.matches?0:a,easing:"cubic-bezier(0.42, 0, 0.58, 1)",fill:"both"};if(r=[E.animate([{transform:"translateX(100%)"},{transform:"translateX(0)"}],j),k.animate([{transform:"translateX(0)"},{transform:"translateX(-100%)"}],j)],await Promise.allSettled(r.map(A=>A.finished)),w)return;i=$;for(let A=0;A<e.length;A++)e[A].hidden=A!==i,e[A].setAttribute("aria-hidden",String(A!==i)),e[A].style.zIndex="";r.forEach(A=>A.cancel()),r=[],n.forEach((A,R)=>R===i?A.setAttribute("aria-current","true"):A.removeAttribute("aria-current")),t.dataset.current=String(i),t.dataset.transitioning="false",delete t.dataset.target,f=!1,b&&(o.textContent=e[i].querySelector("img").alt),t.dispatchEvent(new CustomEvent("hero-carousel:change",{detail:{index:i,manual:b}})),C(i);const P=m;if(m=null,P&&P.index!==i){q(P.index,P.manual);return}I(Math.max(0,s-(performance.now()-_)))}return n.forEach(($,b)=>{h($,"pointerdown",()=>{l.matches||$.querySelector("span").animate([{transform:"scale(1)"},{transform:"scale(.76)",offset:.3},{transform:"scale(1)"}],{duration:220,easing:"ease-out"})}),h($,"click",S=>{S.detail>0&&(g=!1),q(b,!0)})}),h(t,"pointerenter",$=>{($.pointerType==="mouse"||$.pointerType==="pen")&&(p=!0,M())}),h(t,"pointerleave",()=>{p=!1,I()}),h(t,"focusin",()=>{g=!!t.querySelector(":focus-visible"),g&&M()}),h(t,"focusout",$=>{t.contains($.relatedTarget)||(g=!1,I())}),h(document,"visibilitychange",()=>document.hidden?M():I()),h(window,"pagehide",M),h(window,"pageshow",()=>I()),h(l,"change",()=>{l.matches?(M(),r.forEach($=>$.finish())):I()}),C(0),I(),()=>{w=!0,M(),r.forEach($=>$.cancel()),d.forEach($=>$())}}const L=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ot=t=>/^media\/[a-z0-9_./-]+\.(?:webp|png|jpg|jpeg|mp4)$/i.test(t??"")&&!t.includes("..")?"./"+t:"",Ne=t=>/^\.\/[a-z0-9-]+\.html(?:#[a-z0-9-]+)?$/i.test(t??"")?t:"#";function Te(t,e){if(!t)return"";const n=L(Wt(e));return'<div class="project-full-playthrough" id="full-playthrough"><a class="project-full-playthrough-cover" href="'+n+'" target="_blank" rel="noopener noreferrer" aria-label="'+L(t.title)+'"><img src="'+L(ot(t.path))+'" width="'+Number(t.width)+'" height="'+Number(t.height)+'" alt="'+L(t.title)+'" loading="lazy" decoding="async"></a><div><h3>'+L(t.title)+"</h3><p>"+L(t.intro)+'</p><a class="text-link" href="'+n+'" target="_blank" rel="noopener noreferrer" data-content-ids="site.profile.demoUrl">'+L(t.label)+' <span aria-hidden="true">↗</span></a></div></div>'}function Gt(t,e={}){var s;if(!((s=t==null?void 0:t.groups)!=null&&s.length))return"";const n=t.labels||{},o=t.groups.map((a,l)=>{if(Number.isInteger(e.onlyGroup)&&e.onlyGroup!==l)return"";const d=(r,h,M=!1)=>(r||[]).map((y,N)=>{const C=ot(y.path),I=ot(y.poster),q=y.type==="video",$=C?q?'<video data-preview-video data-src="'+L(C)+'"'+(I?' poster="'+L(I)+'"':"")+' width="'+Number(y.width||1280)+'" height="'+Number(y.height||720)+'" muted loop playsinline preload="none" aria-label="'+L(y.alt)+'">'+L(n.videoFallback)+"</video>":'<img src="'+L(C)+'" width="'+Number(y.width||1280)+'" height="'+Number(y.height||720)+'" alt="'+L(y.alt)+'" loading="lazy" decoding="async">':'<span class="project-preview-empty">'+L(y.pendingLabel||n.pending)+"</span>",b=l+":"+(h===void 0?"":h+":")+N;return'<figure class="project-preview-item">'+(C?'<button class="project-preview-open" type="button" '+(M?"data-preview-comparison":"data-preview-open")+'="'+b+'" aria-label="'+L(n.open+y.title)+'">'+$+"</button>":'<div class="project-preview-open project-preview-placeholder" role="img" aria-label="'+L(y.pendingLabel||n.pending)+'">'+$+"</div>")+"<figcaption><strong>"+L(y.title)+"</strong><span>"+L(y.kindLabel)+(C?" · "+L(n.enlarge):"")+"</span></figcaption>"+(h!==void 0&&y.description?'<p class="system-showcase-description">'+L(y.description)+"</p>":"")+(h!==void 0&&C&&y.pendingLabel?'<p class="system-showcase-pending">'+L(y.pendingLabel)+"</p>":"")+(h!==void 0&&y.note?'<p class="system-showcase-note">'+L(y.note)+"</p>":"")+"</figure>"}).join(""),i=["combat-design","system-design","level-design"][l]||"project-preview-"+l,x=e.standalone?"":'<div class="project-preview-heading"><'+(t.title?"h3":"h2")+' id="preview-group-'+l+'">'+(a.number?'<span class="project-preview-number">'+L(a.number)+"</span> ":"")+L(a.title)+"</"+(t.title?"h3":"h2")+"></div>",f=e.standalone?"h2":"h3",m=e.chapterLabels||{},w=e.standalone&&Array.isArray(a.modules)?a.modules.map((r,h)=>{var q,$,b;const M=/^[a-z][a-z0-9-]*$/.test(r.id||"")?r.id:"system-chapter-"+h,y=r.goal?'<h3 class="system-detail-label">'+L(m.goal)+'</h3><p class="system-detail-text">'+L(r.goal)+"</p>":"",N=(q=r.rules)!=null&&q.length?'<h3 class="system-detail-label">'+L(m.rules)+'</h3><ul class="system-detail-rules">'+r.rules.map(S=>"<li>"+L(S)+"</li>").join("")+"</ul>":"",C=r.audio&&/^media\/[a-z0-9_./-]+\.wav$/i.test(r.audio.path||"")&&!r.audio.path.includes("..")?'<figure class="system-detail-audio"><figcaption>'+L(r.audio.label)+'</figcaption><audio data-system-audio controls preload="none" src="./'+L(r.audio.path)+'" aria-label="'+L(r.audio.label)+'"></audio></figure>':"",I=($=r.optimisation)!=null&&$.length?'<h3 class="system-detail-label">'+L(m.optimisation)+"</h3>"+r.optimisation.map(S=>'<p class="system-detail-text">'+L(S)+"</p>").join(""):"";return'<section class="system-showcase-module" id="'+M+'" aria-labelledby="system-module-'+h+'"><'+f+' id="system-module-'+h+'">'+(r.number?'<span class="project-preview-number">'+L(r.number)+"</span> ":"")+L(r.title)+"</"+f+">"+y+(m.media?'<h3 class="system-detail-label">'+L(m.media)+"</h3>":"")+'<div class="project-preview-grid">'+d(r.items,h)+"</div>"+N+C+I+((b=r.comparison)!=null&&b.length?'<div class="system-detail-comparison">'+d(r.comparison,h,!0)+"</div>":"")+"</section>"}).join(""):"",p=!e.standalone&&a.detail?'<p class="project-preview-detail"><a class="text-link" href="'+L(Ne(a.detail.href))+'">'+L(a.detail.label)+' <span aria-hidden="true">↗</span></a></p>':"",g=w||'<div class="project-preview-grid">'+d(a.items)+'</div><p class="project-preview-description">'+L(a.intro)+"</p>"+p;return'<section class="project-preview-group'+(w?" system-showcase":"")+'" id="'+i+'"'+(e.standalone?' aria-label="'+L(a.title)+'"':' aria-labelledby="preview-group-'+l+'"')+">"+x+g+"</section>"}).join("");return'<section class="section home-project-previews'+(e.standalone?" system-showcase-page":"")+'" id="cases"><div class="wrap">'+(!e.standalone&&t.eyebrow?'<header class="home-project-lead"><p class="eyebrow">'+L(t.eyebrow)+"</p>"+(t.title?"<h2>"+L(t.title)+"</h2>":"")+Te(t.playthrough,e.playthroughURL)+"</header>":"")+o+(e.endContent||"")+"</div></section>"}function Ce(t){const e=(t.chapters||[]).filter(n=>/^[a-z][a-z0-9-]*$/.test(n.id||"")).map(n=>'<a href="#'+L(n.id)+'">'+L(n.number+" "+n.title)+"</a>").join("");return'<div class="system-detail-navigation"><div class="wrap"><nav aria-label="'+L(t.navigationLabel)+'">'+e+"</nav></div></div>"}function qe(t,e,{catalog:n=!1}={}){if(!t||!e)return()=>{};const o=e.labels||{},s=[...t.querySelectorAll("audio[data-system-audio]")];s.forEach(b=>{b.volume=.126});const a=[...t.querySelectorAll("video[data-preview-video]")],l=new Set,d=new Set;let i=!1,x=!1,f,m,w,p,g=!1;const r=b=>!n&&!i&&!document.hidden&&!x&&l.has(b),h=b=>{if(!r(b)){b.pause();return}d.has(b)||!b.paused&&b.getAttribute("src")||(b.muted=b.defaultMuted=!0,b.getAttribute("src")||(b.src=b.dataset.src),d.add(b),Promise.resolve(b.play()).catch(()=>{}).finally(()=>{d.delete(b),r(b)||b.pause()}))},M=()=>a.forEach(h),y=new IntersectionObserver(b=>{b.forEach(S=>{S.isIntersecting&&S.intersectionRatio>=.2?l.add(S.target):l.delete(S.target)}),M()},{threshold:[0,.2]});a.forEach(b=>y.observe(b));const N=()=>{m instanceof HTMLVideoElement&&(m.pause(),m.removeAttribute("src"),m.load()),m=null},C=()=>{x&&(x=!1,document.body.style.overflow=p,N(),f.querySelector(".project-preview-lightbox-content").replaceChildren(),M(),w!=null&&w.isConnected&&w.focus({preventScroll:!0}))},I=()=>{f||(f=document.createElement("dialog"),f.className="project-preview-lightbox",f.setAttribute("aria-labelledby","project-preview-lightbox-title"),f.innerHTML='<div class="project-preview-lightbox-header"><h2 id="project-preview-lightbox-title"></h2><button class="project-preview-close" type="button" autofocus data-content-id="home.previews.labels.close" data-content-ids="home.previews.labels.close">'+L(o.close)+'</button></div><div class="project-preview-lightbox-content"></div>',f.querySelector(".project-preview-close").addEventListener("click",()=>f.close()),f.addEventListener("close",C),f.addEventListener("click",b=>{const S=f.getBoundingClientRect();b.target===f&&(b.clientX<S.left||b.clientX>S.right||b.clientY<S.top||b.clientY>S.bottom)&&f.close()}),document.body.append(f))},q=b=>{var R,U,G,tt,et,at,lt,v,T,D;const S=b.target.closest("[data-preview-open],[data-preview-comparison]");if(!S||!t.contains(S))return;const _=(S.dataset.previewComparison||S.dataset.previewOpen).split(":").map(Number),[k,E,j]=_,P=S.dataset.previewComparison?(tt=(G=(U=(R=e.groups[k])==null?void 0:R.modules)==null?void 0:U[E])==null?void 0:G.comparison)==null?void 0:tt[j]:_.length===3?(v=(lt=(at=(et=e.groups[k])==null?void 0:et.modules)==null?void 0:at[E])==null?void 0:lt.items)==null?void 0:v[j]:(D=(T=e.groups[k])==null?void 0:T.items)==null?void 0:D[E],A=ot(P==null?void 0:P.path);A&&(I(),N(),w=S,x||(p=document.body.style.overflow),x=!0,M(),f.querySelector("#project-preview-lightbox-title").textContent=P.title+" · "+P.kindLabel,m=document.createElement(P.type==="video"?"video":"img"),P.type==="video"?(m.controls=m.loop=m.playsInline=!0,m.muted=m.defaultMuted=!0,m.setAttribute("data-preview-video",""),m.setAttribute("aria-label",P.alt),ot(P.poster)&&(m.poster=ot(P.poster))):m.alt=P.alt,m.src=A,f.querySelector(".project-preview-lightbox-content").replaceChildren(m),document.body.style.overflow="hidden",f.showModal(),m instanceof HTMLVideoElement&&!n&&m.play().catch(()=>{}))},$=()=>{M(),m instanceof HTMLVideoElement&&(document.hidden?(g=!m.paused,m.pause()):g&&(m.play().catch(()=>{}),g=!1))};return t.addEventListener("click",q),document.addEventListener("visibilitychange",$),()=>{i=!0,y.disconnect(),t.removeEventListener("click",q),document.removeEventListener("visibilitychange",$),a.forEach(b=>b.pause()),s.forEach(b=>b.pause()),x&&(x=!1,document.body.style.overflow=p),N(),f==null||f.remove()}}function ze(t){const e=t==null?void 0:t.querySelector(".nav");if(!e)return()=>{};const n=[...e.querySelectorAll("a[href]")],o=t.querySelector(".menu-toggle"),s=()=>location.pathname.split("/").pop()||"index.html",a=s()==="index.html",l=new URL(location.href),d=["editor_preview","editorPreview","content_catalog","content"].some(_=>l.searchParams.has(_)),i=a&&window.parent===window&&!d&&l.searchParams.get("detail-return")==="1"&&["#about-me","#cases"].includes(l.hash)?l.hash:"";i&&(l.searchParams.delete("detail-return"),l.hash="",history.replaceState(history.state,"",l.href),window.scrollTo({top:0,behavior:"instant"}));const x=_=>{try{return decodeURIComponent(_.replace(/^#/,""))}catch{return""}},f=_=>new URL(_.href,location.href),m=_=>n.find(k=>f(k).hash===_),w=n.find(_=>f(_).pathname.endsWith("/index.html")&&!f(_).hash),p=a?n.flatMap(_=>{const k=f(_),E=k.pathname.endsWith("/index.html")&&k.hash?document.getElementById(x(k.hash)):null;return E?[{link:_,element:E}]:[]}):[];let g=0,r=0,h=0,M=0,y=!1;const N=_=>n.forEach(k=>{k===_?k.setAttribute("aria-current","page"):k.removeAttribute("aria-current")}),C=()=>{if(g=0,y)return;if(!a){const P={"combat.html":"#cases","systems.html":"#cases","levels.html":"#cases","case.html":"#cases","retrospective.html":"#cases"}[s()]||(s()==="about.html"?location.hash==="#contact"?"#ending":"#about-me":"");N(P?m(P):null);return}const _=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0,k=Math.max(_+1,t.getBoundingClientRect().height+26);let E=w;for(const j of p)j.element.getBoundingClientRect().top<=k&&(E=j.link);if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-3){const j=p.at(-1);j&&j.element.getBoundingClientRect().top<window.innerHeight&&(E=j.link)}N(E)},I=()=>{g||(g=requestAnimationFrame(C))},q=()=>{o==null||o.setAttribute("aria-expanded","false"),e.classList.remove("open")},$=(_="instant")=>{const k=document.getElementById(x(location.hash));k&&k.scrollIntoView({block:"start",behavior:_}),I()},b=()=>{cancelAnimationFrame(h),cancelAnimationFrame(M),h=requestAnimationFrame(()=>{h=0,M=requestAnimationFrame(()=>{M=0,y||$()})})},S=_=>{const k=_.target.closest("a[href]");if(!k||!e.contains(k)||_.defaultPrevented||_.button!==0||_.metaKey||_.ctrlKey||_.shiftKey||_.altKey)return;q();const E=f(k);if(!(E.pathname===location.pathname||a&&E.pathname.endsWith("/index.html"))||E.origin!==location.origin)return;const P=E.hash?document.getElementById(x(E.hash)):null;if(E.hash&&!P)return;_.preventDefault(),location.href!==E.href&&history.pushState(null,"",E.href);const A=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth";P?P.scrollIntoView({block:"start",behavior:A}):window.scrollTo({top:0,behavior:A}),N(k),I()};return e.addEventListener("click",S),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),window.addEventListener("hashchange",b),window.addEventListener("popstate",b),C(),r=requestAnimationFrame(()=>{if(!y)if(i){const _=new URL(location.href);_.hash=i,history.replaceState(history.state,"",_.href),$(window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth")}else location.hash&&$()}),()=>{y=!0,cancelAnimationFrame(g),cancelAnimationFrame(r),cancelAnimationFrame(h),cancelAnimationFrame(M),e.removeEventListener("click",S),window.removeEventListener("scroll",I),window.removeEventListener("resize",I),window.removeEventListener("hashchange",b),window.removeEventListener("popstate",b)}}const De=`# 策划案例内容

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
`,Fe=`# 策划案例内容

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
`,Re=`# 策划案例内容

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
`,Ue="jianghuransheng-portfolio-article",Oe=1,Ke={title:{$text:"text_0001"},subtitle:{$text:"text_0002"},summary:{$text:"text_0003"},status:{$text:"text_0004"},goals:[{$text:"text_0005"},{$text:"text_0006"},{$text:"text_0007"}],experience:[{$text:"text_0008"},{$text:"text_0009"},{$text:"text_0010"}],rules:[{title:{$text:"text_0011"},body:{$text:"text_0012"}},{title:{$text:"text_0013"},body:{$text:"text_0014"}},{title:{$text:"text_0015"},body:{$text:"text_0016"}},{title:{$text:"text_0017"},body:{$text:"text_0018"}}],parameters:{headers:[{$text:"text_0025"},{$text:"text_0026"},{$text:"text_0027"}],rows:[[{$text:"text_0028"},{$text:"text_0029"},{$text:"text_0030"}],[{$text:"text_0031"},{$text:"text_0032"},{$text:"text_0033"}],[{$text:"text_0034"},{$text:"text_0035"},{$text:"text_0036"}],[{$text:"text_0037"},{$text:"text_0038"},{$text:"text_0039"}],[{$text:"text_0040"},{$text:"text_0041"},{$text:"text_0042"}],[{$text:"text_0043"},{$text:"text_0044"},{$text:"text_0045"}],[{$text:"text_0046"},{$text:"text_0047"},{$text:"text_0048"}],[{$text:"text_0049"},{$text:"text_0050"},{$text:"text_0051"}],[{$text:"text_0052"},{$text:"text_0053"},{$text:"text_0054"}],[{$text:"text_0055"},{$text:"text_0056"},{$text:"text_0057"}]]},flow:[{title:{$text:"text_0058"},detail:{$text:"text_0059"}},{title:{$text:"text_0060"},detail:{$text:"text_0061"}},{title:{$text:"text_0062"},detail:{$text:"text_0063"}},{title:{$text:"text_0064"},detail:{$text:"text_0065"}},{title:{$text:"text_0066"},detail:{$text:"text_0067"}}],implementation:[{title:{$text:"text_0068"},body:{$text:"text_0069"}},{title:{$text:"text_0070"},body:{$text:"text_0071"}},{title:{$text:"text_0072"},body:{$text:"text_0073"}},{title:{$text:"text_0074"},body:{$text:"text_0075"}}],iterations:[{problem:{$text:"text_0076"},cause:{$text:"text_0077"},change:{$text:"text_0078"},result:{$text:"text_0079"},status:{$text:"text_0080"},source:{$text:"text_0081"}},{problem:{$text:"text_0082"},cause:{$text:"text_0083"},change:{$text:"text_0084"},result:{$text:"text_0085"},status:{$text:"text_0086"},source:{$text:"text_0087"}},{problem:{$text:"text_0088"},cause:{$text:"text_0089"},change:{$text:"text_0090"},result:{$text:"text_0091"},status:{$text:"text_0092"},source:{$text:"text_0093"}},{problem:{$text:"text_0094"},cause:{$text:"text_0095"},change:{$text:"text_0096"},result:{$text:"text_0097"},status:{$text:"text_0098"},source:{$text:"text_0099"}}],validation:[{label:{$text:"text_0100"},result:{$text:"text_0101"},source:{$text:"text_0102"}},{label:{$text:"text_0103"},result:{$text:"text_0104"},source:{$text:"text_0105"}},{label:{$text:"text_0106"},result:{$text:"text_0107"},source:{$text:"text_0108"}},{label:{$text:"text_0109"},result:{$text:"text_0110"},source:{$text:"text_0111"}}],limitations:[{$text:"text_0112"},{$text:"text_0113"},{$text:"text_0114"},{$text:"text_0115"},{$text:"text_0116"},{$text:"text_0117"}],sources:[{file:{$text:"text_0118"},lines:{$text:"text_0119"},claim:{$text:"text_0120"}},{file:{$text:"text_0121"},lines:{$text:"text_0122"},claim:{$text:"text_0123"}},{file:{$text:"text_0124"},lines:{$text:"text_0125"},claim:{$text:"text_0126"}},{file:{$text:"text_0127"},lines:{$text:"text_0128"},claim:{$text:"text_0129"}},{file:{$text:"text_0130"},lines:{$text:"text_0131"},claim:{$text:"text_0132"}},{file:{$text:"text_0133"},lines:{$text:"text_0134"},claim:{$text:"text_0135"}},{file:{$text:"text_0136"},lines:{$text:"text_0137"},claim:{$text:"text_0138"}},{file:{$text:"text_0139"},lines:{$text:"text_0140"},claim:{$text:"text_0141"}},{file:{$text:"text_0142"},lines:{$text:"text_0143"},claim:{$text:"text_0144"}},{file:{$text:"text_0145"},lines:{$text:"text_0146"},claim:{$text:"text_0147"}},{file:{$text:"text_0148"},lines:{$text:"text_0149"},claim:{$text:"text_0150"}},{file:{$text:"text_0151"},lines:{$text:"text_0152"},claim:{$text:"text_0153"}},{file:{$text:"text_0154"},lines:{$text:"text_0155"},claim:{$text:"text_0156"}},{file:{$text:"text_0157"},lines:{$text:"text_0158"},claim:{$text:"text_0159"}},{file:{$text:"text_0160"},lines:{$text:"text_0161"},claim:{$text:"text_0162"}},{file:{$text:"text_0163"},lines:{$text:"text_0164"},claim:{$text:"text_0165"}},{file:{$text:"text_0166"},lines:{$text:"text_0167"},claim:{$text:"text_0168"}},{file:{$text:"text_0169"},lines:{$text:"text_0170"},claim:{$text:"text_0171"}}],timelineNote:{$text:"text_0172"},timeline:[{name:{$text:"text_0173"},branch:{$text:"text_0174"},fps:42,sourceFps:24,frames:36,recoveryFrames:28,recoveryFps:46.8,active:[21,24],buffer:[18,35],duration:.8571428571428571,recoveryDuration:.5982905982905983},{name:{$text:"text_0175"},branch:{$text:"text_0176"},fps:36,sourceFps:24,frames:15,recoveryFrames:28,recoveryFps:46.8,active:[3,7],buffer:[3,14],duration:.4166666666666667,recoveryDuration:.5982905982905983},{name:{$text:"text_0177"},branch:{$text:"text_0178"},fps:33.6,sourceFps:24,frames:10,recoveryFrames:28,recoveryFps:46.8,active:[2,5],buffer:[-1,-1],duration:.2976190476190476,recoveryDuration:.5982905982905983},{name:{$text:"text_0179"},branch:{$text:"text_0180"},fps:24,sourceFps:24,variableSpeed:!0,frames:25,recoveryFrames:14,active:[[3,8],[13,18]],buffer:[2,24],frameDurations:[.03787878787878787,.03787878787878787,.041666666666666664,.027777777777777776,.020833333333333332,.020833333333333332,.022522522522522518,.02450980392156863,.02450980392156863,.02873563218390805,.034722222222222224,.03787878787878787,.041666666666666664,.027777777777777776,.020833333333333332,.020833333333333332,.022522522522522518,.02450980392156863,.02450980392156863,.02873563218390805,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224],duration:.7447474442910548,recoveryDuration:.5303030303030303,dash:null},{name:{$text:"text_0181"},branch:{$text:"text_0182"},fps:24,sourceFps:24,variableSpeed:!0,frames:35,recoveryFrames:13,active:[[7,14]],buffer:[2,34],frameDurations:[.036231884057971016,.036231884057971016,.036231884057971016,.03875968992248063,.041666666666666664,.041666666666666664,.027777777777777776,.020833333333333332,.020833333333333332,.02192982456140351,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.026041666666666664,.029761904761904767,.029761904761904767,.029761904761904767,.029761904761904767,.029761904761904767,.032051282051282055,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224,.034722222222222224],duration:1.0961950465926773,recoveryDuration:.49242424242424243,dash:null},{name:{$text:"text_0183"},branch:{$text:"text_0184"},fps:24,sourceFps:24,variableSpeed:!0,frames:73,recoveryFrames:28,active:[[33,72]],buffer:[-1,-1],frameDurations:[.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.023148148148148147,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.020833333333333332,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888,.013888888888888888],duration:1.3032407407407394,recoveryDuration:.5423280423280423,dash:{first:33,last:38,distance:168,duration:.125}},{name:{$text:"text_0185"},branch:{$text:"text_0186"},fps:24,sourceFps:24,frames:28,recoveryFrames:11,recoveryFps:24,active:[15,27],buffer:[16,27],duration:1.1666666666666667,recoveryDuration:.4583333333333333},{name:{$text:"text_0187"},branch:{$text:"text_0188"},fps:24,sourceFps:24,frames:28,recoveryFrames:0,recoveryFps:24,active:[14,27],buffer:[15,27],duration:1.1666666666666667,recoveryDuration:0},{name:{$text:"text_0189"},branch:{$text:"text_0190"},fps:24,sourceFps:24,frames:52,recoveryFrames:5,recoveryFps:24,active:[6,12],buffer:[-1,-1],duration:2.1666666666666665,recoveryDuration:.20833333333333334}]},He=JSON.parse('[{"id":"text_0001","path":"/title","label":"标题"},{"id":"text_0002","path":"/subtitle","label":"副标题"},{"id":"text_0003","path":"/summary","label":"简介"},{"id":"text_0004","path":"/status","label":"开发状态"},{"id":"text_0005","path":"/goals/0","label":"设计目标 / 1"},{"id":"text_0006","path":"/goals/1","label":"设计目标 / 2"},{"id":"text_0007","path":"/goals/2","label":"设计目标 / 3"},{"id":"text_0008","path":"/experience/0","label":"玩家体验 / 1"},{"id":"text_0009","path":"/experience/1","label":"玩家体验 / 2"},{"id":"text_0010","path":"/experience/2","label":"玩家体验 / 3"},{"id":"text_0011","path":"/rules/0/title","label":"机制与规则 / 1 / 标题"},{"id":"text_0012","path":"/rules/0/body","label":"机制与规则 / 1 / 正文"},{"id":"text_0013","path":"/rules/1/title","label":"机制与规则 / 2 / 标题"},{"id":"text_0014","path":"/rules/1/body","label":"机制与规则 / 2 / 正文"},{"id":"text_0015","path":"/rules/2/title","label":"机制与规则 / 3 / 标题"},{"id":"text_0016","path":"/rules/2/body","label":"机制与规则 / 3 / 正文"},{"id":"text_0017","path":"/rules/3/title","label":"机制与规则 / 4 / 标题"},{"id":"text_0018","path":"/rules/3/body","label":"机制与规则 / 4 / 正文"},{"id":"text_0025","path":"/parameters/headers/0","label":"关键参数 / 表头 / 1"},{"id":"text_0026","path":"/parameters/headers/1","label":"关键参数 / 表头 / 2"},{"id":"text_0027","path":"/parameters/headers/2","label":"关键参数 / 表头 / 3"},{"id":"text_0028","path":"/parameters/rows/0/0","label":"关键参数 / 表格行 / 1 / 1"},{"id":"text_0029","path":"/parameters/rows/0/1","label":"关键参数 / 表格行 / 1 / 2"},{"id":"text_0030","path":"/parameters/rows/0/2","label":"关键参数 / 表格行 / 1 / 3"},{"id":"text_0031","path":"/parameters/rows/1/0","label":"关键参数 / 表格行 / 2 / 1"},{"id":"text_0032","path":"/parameters/rows/1/1","label":"关键参数 / 表格行 / 2 / 2"},{"id":"text_0033","path":"/parameters/rows/1/2","label":"关键参数 / 表格行 / 2 / 3"},{"id":"text_0034","path":"/parameters/rows/2/0","label":"关键参数 / 表格行 / 3 / 1"},{"id":"text_0035","path":"/parameters/rows/2/1","label":"关键参数 / 表格行 / 3 / 2"},{"id":"text_0036","path":"/parameters/rows/2/2","label":"关键参数 / 表格行 / 3 / 3"},{"id":"text_0037","path":"/parameters/rows/3/0","label":"关键参数 / 表格行 / 4 / 1"},{"id":"text_0038","path":"/parameters/rows/3/1","label":"关键参数 / 表格行 / 4 / 2"},{"id":"text_0039","path":"/parameters/rows/3/2","label":"关键参数 / 表格行 / 4 / 3"},{"id":"text_0040","path":"/parameters/rows/4/0","label":"关键参数 / 表格行 / 5 / 1"},{"id":"text_0041","path":"/parameters/rows/4/1","label":"关键参数 / 表格行 / 5 / 2"},{"id":"text_0042","path":"/parameters/rows/4/2","label":"关键参数 / 表格行 / 5 / 3"},{"id":"text_0043","path":"/parameters/rows/5/0","label":"关键参数 / 表格行 / 6 / 1"},{"id":"text_0044","path":"/parameters/rows/5/1","label":"关键参数 / 表格行 / 6 / 2"},{"id":"text_0045","path":"/parameters/rows/5/2","label":"关键参数 / 表格行 / 6 / 3"},{"id":"text_0046","path":"/parameters/rows/6/0","label":"关键参数 / 表格行 / 7 / 1"},{"id":"text_0047","path":"/parameters/rows/6/1","label":"关键参数 / 表格行 / 7 / 2"},{"id":"text_0048","path":"/parameters/rows/6/2","label":"关键参数 / 表格行 / 7 / 3"},{"id":"text_0049","path":"/parameters/rows/7/0","label":"关键参数 / 表格行 / 8 / 1"},{"id":"text_0050","path":"/parameters/rows/7/1","label":"关键参数 / 表格行 / 8 / 2"},{"id":"text_0051","path":"/parameters/rows/7/2","label":"关键参数 / 表格行 / 8 / 3"},{"id":"text_0052","path":"/parameters/rows/8/0","label":"关键参数 / 表格行 / 9 / 1"},{"id":"text_0053","path":"/parameters/rows/8/1","label":"关键参数 / 表格行 / 9 / 2"},{"id":"text_0054","path":"/parameters/rows/8/2","label":"关键参数 / 表格行 / 9 / 3"},{"id":"text_0055","path":"/parameters/rows/9/0","label":"关键参数 / 表格行 / 10 / 1"},{"id":"text_0056","path":"/parameters/rows/9/1","label":"关键参数 / 表格行 / 10 / 2"},{"id":"text_0057","path":"/parameters/rows/9/2","label":"关键参数 / 表格行 / 10 / 3"},{"id":"text_0058","path":"/flow/0/title","label":"流程 / 1 / 标题"},{"id":"text_0059","path":"/flow/0/detail","label":"流程 / 1 / 说明"},{"id":"text_0060","path":"/flow/1/title","label":"流程 / 2 / 标题"},{"id":"text_0061","path":"/flow/1/detail","label":"流程 / 2 / 说明"},{"id":"text_0062","path":"/flow/2/title","label":"流程 / 3 / 标题"},{"id":"text_0063","path":"/flow/2/detail","label":"流程 / 3 / 说明"},{"id":"text_0064","path":"/flow/3/title","label":"流程 / 4 / 标题"},{"id":"text_0065","path":"/flow/3/detail","label":"流程 / 4 / 说明"},{"id":"text_0066","path":"/flow/4/title","label":"流程 / 5 / 标题"},{"id":"text_0067","path":"/flow/4/detail","label":"流程 / 5 / 说明"},{"id":"text_0068","path":"/implementation/0/title","label":"实现方式 / 1 / 标题"},{"id":"text_0069","path":"/implementation/0/body","label":"实现方式 / 1 / 正文"},{"id":"text_0070","path":"/implementation/1/title","label":"实现方式 / 2 / 标题"},{"id":"text_0071","path":"/implementation/1/body","label":"实现方式 / 2 / 正文"},{"id":"text_0072","path":"/implementation/2/title","label":"实现方式 / 3 / 标题"},{"id":"text_0073","path":"/implementation/2/body","label":"实现方式 / 3 / 正文"},{"id":"text_0074","path":"/implementation/3/title","label":"实现方式 / 4 / 标题"},{"id":"text_0075","path":"/implementation/3/body","label":"实现方式 / 4 / 正文"},{"id":"text_0076","path":"/iterations/0/problem","label":"问题与迭代 / 1 / 发现问题"},{"id":"text_0077","path":"/iterations/0/cause","label":"问题与迭代 / 1 / 原因分析"},{"id":"text_0078","path":"/iterations/0/change","label":"问题与迭代 / 1 / 修改方案"},{"id":"text_0079","path":"/iterations/0/result","label":"问题与迭代 / 1 / 结果"},{"id":"text_0080","path":"/iterations/0/status","label":"问题与迭代 / 1 / 开发状态"},{"id":"text_0081","path":"/iterations/0/source","label":"问题与迭代 / 1 / 依据"},{"id":"text_0082","path":"/iterations/1/problem","label":"问题与迭代 / 2 / 发现问题"},{"id":"text_0083","path":"/iterations/1/cause","label":"问题与迭代 / 2 / 原因分析"},{"id":"text_0084","path":"/iterations/1/change","label":"问题与迭代 / 2 / 修改方案"},{"id":"text_0085","path":"/iterations/1/result","label":"问题与迭代 / 2 / 结果"},{"id":"text_0086","path":"/iterations/1/status","label":"问题与迭代 / 2 / 开发状态"},{"id":"text_0087","path":"/iterations/1/source","label":"问题与迭代 / 2 / 依据"},{"id":"text_0088","path":"/iterations/2/problem","label":"问题与迭代 / 3 / 发现问题"},{"id":"text_0089","path":"/iterations/2/cause","label":"问题与迭代 / 3 / 原因分析"},{"id":"text_0090","path":"/iterations/2/change","label":"问题与迭代 / 3 / 修改方案"},{"id":"text_0091","path":"/iterations/2/result","label":"问题与迭代 / 3 / 结果"},{"id":"text_0092","path":"/iterations/2/status","label":"问题与迭代 / 3 / 开发状态"},{"id":"text_0093","path":"/iterations/2/source","label":"问题与迭代 / 3 / 依据"},{"id":"text_0094","path":"/iterations/3/problem","label":"问题与迭代 / 4 / 发现问题"},{"id":"text_0095","path":"/iterations/3/cause","label":"问题与迭代 / 4 / 原因分析"},{"id":"text_0096","path":"/iterations/3/change","label":"问题与迭代 / 4 / 修改方案"},{"id":"text_0097","path":"/iterations/3/result","label":"问题与迭代 / 4 / 结果"},{"id":"text_0098","path":"/iterations/3/status","label":"问题与迭代 / 4 / 开发状态"},{"id":"text_0099","path":"/iterations/3/source","label":"问题与迭代 / 4 / 依据"},{"id":"text_0100","path":"/validation/0/label","label":"验证结果 / 1 / 名称"},{"id":"text_0101","path":"/validation/0/result","label":"验证结果 / 1 / 结果"},{"id":"text_0102","path":"/validation/0/source","label":"验证结果 / 1 / 依据"},{"id":"text_0103","path":"/validation/1/label","label":"验证结果 / 2 / 名称"},{"id":"text_0104","path":"/validation/1/result","label":"验证结果 / 2 / 结果"},{"id":"text_0105","path":"/validation/1/source","label":"验证结果 / 2 / 依据"},{"id":"text_0106","path":"/validation/2/label","label":"验证结果 / 3 / 名称"},{"id":"text_0107","path":"/validation/2/result","label":"验证结果 / 3 / 结果"},{"id":"text_0108","path":"/validation/2/source","label":"验证结果 / 3 / 依据"},{"id":"text_0109","path":"/validation/3/label","label":"验证结果 / 4 / 名称"},{"id":"text_0110","path":"/validation/3/result","label":"验证结果 / 4 / 结果"},{"id":"text_0111","path":"/validation/3/source","label":"验证结果 / 4 / 依据"},{"id":"text_0112","path":"/limitations/0","label":"尚存问题 / 1"},{"id":"text_0113","path":"/limitations/1","label":"尚存问题 / 2"},{"id":"text_0114","path":"/limitations/2","label":"尚存问题 / 3"},{"id":"text_0115","path":"/limitations/3","label":"尚存问题 / 4"},{"id":"text_0116","path":"/limitations/4","label":"尚存问题 / 5"},{"id":"text_0117","path":"/limitations/5","label":"尚存问题 / 6"},{"id":"text_0118","path":"/sources/0/file","label":"项目依据 / 1 / 文件路径"},{"id":"text_0119","path":"/sources/0/lines","label":"项目依据 / 1 / 行号"},{"id":"text_0120","path":"/sources/0/claim","label":"项目依据 / 1 / 支持的结论"},{"id":"text_0121","path":"/sources/1/file","label":"项目依据 / 2 / 文件路径"},{"id":"text_0122","path":"/sources/1/lines","label":"项目依据 / 2 / 行号"},{"id":"text_0123","path":"/sources/1/claim","label":"项目依据 / 2 / 支持的结论"},{"id":"text_0124","path":"/sources/2/file","label":"项目依据 / 3 / 文件路径"},{"id":"text_0125","path":"/sources/2/lines","label":"项目依据 / 3 / 行号"},{"id":"text_0126","path":"/sources/2/claim","label":"项目依据 / 3 / 支持的结论"},{"id":"text_0127","path":"/sources/3/file","label":"项目依据 / 4 / 文件路径"},{"id":"text_0128","path":"/sources/3/lines","label":"项目依据 / 4 / 行号"},{"id":"text_0129","path":"/sources/3/claim","label":"项目依据 / 4 / 支持的结论"},{"id":"text_0130","path":"/sources/4/file","label":"项目依据 / 5 / 文件路径"},{"id":"text_0131","path":"/sources/4/lines","label":"项目依据 / 5 / 行号"},{"id":"text_0132","path":"/sources/4/claim","label":"项目依据 / 5 / 支持的结论"},{"id":"text_0133","path":"/sources/5/file","label":"项目依据 / 6 / 文件路径"},{"id":"text_0134","path":"/sources/5/lines","label":"项目依据 / 6 / 行号"},{"id":"text_0135","path":"/sources/5/claim","label":"项目依据 / 6 / 支持的结论"},{"id":"text_0136","path":"/sources/6/file","label":"项目依据 / 7 / 文件路径"},{"id":"text_0137","path":"/sources/6/lines","label":"项目依据 / 7 / 行号"},{"id":"text_0138","path":"/sources/6/claim","label":"项目依据 / 7 / 支持的结论"},{"id":"text_0139","path":"/sources/7/file","label":"项目依据 / 8 / 文件路径"},{"id":"text_0140","path":"/sources/7/lines","label":"项目依据 / 8 / 行号"},{"id":"text_0141","path":"/sources/7/claim","label":"项目依据 / 8 / 支持的结论"},{"id":"text_0142","path":"/sources/8/file","label":"项目依据 / 9 / 文件路径"},{"id":"text_0143","path":"/sources/8/lines","label":"项目依据 / 9 / 行号"},{"id":"text_0144","path":"/sources/8/claim","label":"项目依据 / 9 / 支持的结论"},{"id":"text_0145","path":"/sources/9/file","label":"项目依据 / 10 / 文件路径"},{"id":"text_0146","path":"/sources/9/lines","label":"项目依据 / 10 / 行号"},{"id":"text_0147","path":"/sources/9/claim","label":"项目依据 / 10 / 支持的结论"},{"id":"text_0148","path":"/sources/10/file","label":"项目依据 / 11 / 文件路径"},{"id":"text_0149","path":"/sources/10/lines","label":"项目依据 / 11 / 行号"},{"id":"text_0150","path":"/sources/10/claim","label":"项目依据 / 11 / 支持的结论"},{"id":"text_0151","path":"/sources/11/file","label":"项目依据 / 12 / 文件路径"},{"id":"text_0152","path":"/sources/11/lines","label":"项目依据 / 12 / 行号"},{"id":"text_0153","path":"/sources/11/claim","label":"项目依据 / 12 / 支持的结论"},{"id":"text_0154","path":"/sources/12/file","label":"项目依据 / 13 / 文件路径"},{"id":"text_0155","path":"/sources/12/lines","label":"项目依据 / 13 / 行号"},{"id":"text_0156","path":"/sources/12/claim","label":"项目依据 / 13 / 支持的结论"},{"id":"text_0157","path":"/sources/13/file","label":"项目依据 / 14 / 文件路径"},{"id":"text_0158","path":"/sources/13/lines","label":"项目依据 / 14 / 行号"},{"id":"text_0159","path":"/sources/13/claim","label":"项目依据 / 14 / 支持的结论"},{"id":"text_0160","path":"/sources/14/file","label":"项目依据 / 15 / 文件路径"},{"id":"text_0161","path":"/sources/14/lines","label":"项目依据 / 15 / 行号"},{"id":"text_0162","path":"/sources/14/claim","label":"项目依据 / 15 / 支持的结论"},{"id":"text_0163","path":"/sources/15/file","label":"项目依据 / 16 / 文件路径"},{"id":"text_0164","path":"/sources/15/lines","label":"项目依据 / 16 / 行号"},{"id":"text_0165","path":"/sources/15/claim","label":"项目依据 / 16 / 支持的结论"},{"id":"text_0166","path":"/sources/16/file","label":"项目依据 / 17 / 文件路径"},{"id":"text_0167","path":"/sources/16/lines","label":"项目依据 / 17 / 行号"},{"id":"text_0168","path":"/sources/16/claim","label":"项目依据 / 17 / 支持的结论"},{"id":"text_0169","path":"/sources/17/file","label":"项目依据 / 18 / 文件路径"},{"id":"text_0170","path":"/sources/17/lines","label":"项目依据 / 18 / 行号"},{"id":"text_0171","path":"/sources/17/claim","label":"项目依据 / 18 / 支持的结论"},{"id":"text_0172","path":"/timelineNote","label":"时间轴说明"},{"id":"text_0173","path":"/timeline/0/name","label":"攻击时间轴 / 1 / 名称"},{"id":"text_0174","path":"/timeline/0/branch","label":"攻击时间轴 / 1 / 攻击分支"},{"id":"text_0175","path":"/timeline/1/name","label":"攻击时间轴 / 2 / 名称"},{"id":"text_0176","path":"/timeline/1/branch","label":"攻击时间轴 / 2 / 攻击分支"},{"id":"text_0177","path":"/timeline/2/name","label":"攻击时间轴 / 3 / 名称"},{"id":"text_0178","path":"/timeline/2/branch","label":"攻击时间轴 / 3 / 攻击分支"},{"id":"text_0179","path":"/timeline/3/name","label":"攻击时间轴 / 4 / 名称"},{"id":"text_0180","path":"/timeline/3/branch","label":"攻击时间轴 / 4 / 攻击分支"},{"id":"text_0181","path":"/timeline/4/name","label":"攻击时间轴 / 5 / 名称"},{"id":"text_0182","path":"/timeline/4/branch","label":"攻击时间轴 / 5 / 攻击分支"},{"id":"text_0183","path":"/timeline/5/name","label":"攻击时间轴 / 6 / 名称"},{"id":"text_0184","path":"/timeline/5/branch","label":"攻击时间轴 / 6 / 攻击分支"},{"id":"text_0185","path":"/timeline/6/name","label":"攻击时间轴 / 7 / 名称"},{"id":"text_0186","path":"/timeline/6/branch","label":"攻击时间轴 / 7 / 攻击分支"},{"id":"text_0187","path":"/timeline/7/name","label":"攻击时间轴 / 8 / 名称"},{"id":"text_0188","path":"/timeline/7/branch","label":"攻击时间轴 / 8 / 攻击分支"},{"id":"text_0189","path":"/timeline/8/name","label":"攻击时间轴 / 9 / 名称"},{"id":"text_0190","path":"/timeline/8/branch","label":"攻击时间轴 / 9 / 攻击分支"}]'),Be={format:Ue,version:Oe,tree:Ke,fields:He},Ye="jianghuransheng-portfolio-article",We=1,Ge=JSON.parse('{"title":{"$text":"text_0001"},"subtitle":{"$text":"text_0002"},"summary":{"$text":"text_0003"},"status":{"$text":"text_0004"},"goals":[{"$text":"text_0005"},{"$text":"text_0006"},{"$text":"text_0007"}],"experience":[{"$text":"text_0008"},{"$text":"text_0009"},{"$text":"text_0010"}],"rules":[{"title":{"$text":"text_0011"},"body":{"$text":"text_0012"}},{"title":{"$text":"text_0013"},"body":{"$text":"text_0014"}},{"title":{"$text":"text_0015"},"body":{"$text":"text_0016"}},{"title":{"$text":"text_0017"},"body":{"$text":"text_0018"}},{"title":{"$text":"text_0019"},"body":{"$text":"text_0020"}},{"title":{"$text":"text_0021"},"body":{"$text":"text_0022"}}],"parameters":{"headers":[{"$text":"text_0023"},{"$text":"text_0024"},{"$text":"text_0025"}],"rows":[[{"$text":"text_0026"},{"$text":"text_0027"},{"$text":"text_0028"}],[{"$text":"text_0029"},{"$text":"text_0030"},{"$text":"text_0031"}],[{"$text":"text_0032"},{"$text":"text_0033"},{"$text":"text_0034"}],[{"$text":"text_0035"},{"$text":"text_0036"},{"$text":"text_0037"}],[{"$text":"text_0038"},{"$text":"text_0039"},{"$text":"text_0040"}],[{"$text":"text_0041"},{"$text":"text_0042"},{"$text":"text_0043"}],[{"$text":"text_0044"},{"$text":"text_0045"},{"$text":"text_0046"}],[{"$text":"text_0047"},{"$text":"text_0048"},{"$text":"text_0049"}]]},"flow":[{"title":{"$text":"text_0050"},"detail":{"$text":"text_0051"}},{"title":{"$text":"text_0052"},"detail":{"$text":"text_0053"}},{"title":{"$text":"text_0054"},"detail":{"$text":"text_0055"}},{"title":{"$text":"text_0056"},"detail":{"$text":"text_0057"}},{"title":{"$text":"text_0058"},"detail":{"$text":"text_0059"}},{"title":{"$text":"text_0060"},"detail":{"$text":"text_0061"}},{"title":{"$text":"text_0062"},"detail":{"$text":"text_0063"}},{"title":{"$text":"text_0064"},"detail":{"$text":"text_0065"}}],"implementation":[{"title":{"$text":"text_0066"},"body":{"$text":"text_0067"}},{"title":{"$text":"text_0068"},"body":{"$text":"text_0069"}},{"title":{"$text":"text_0070"},"body":{"$text":"text_0071"}},{"title":{"$text":"text_0072"},"body":{"$text":"text_0073"}}],"iterations":[],"validation":[{"label":{"$text":"text_0098"},"result":{"$text":"text_0099"},"source":{"$text":"text_0100"}},{"label":{"$text":"text_0101"},"result":{"$text":"text_0102"},"source":{"$text":"text_0103"}},{"label":{"$text":"text_0104"},"result":{"$text":"text_0105"},"source":{"$text":"text_0106"}},{"label":{"$text":"text_0107"},"result":{"$text":"text_0108"},"source":{"$text":"text_0109"}},{"label":{"$text":"text_0110"},"result":{"$text":"text_0111"},"source":{"$text":"text_0112"}}],"limitations":[{"$text":"text_0113"},{"$text":"text_0114"},{"$text":"text_0115"},{"$text":"text_0116"},{"$text":"text_0117"},{"$text":"text_0118"}],"sources":[{"file":{"$text":"text_0119"},"lines":{"$text":"text_0120"},"claim":{"$text":"text_0121"}},{"file":{"$text":"text_0122"},"lines":{"$text":"text_0123"},"claim":{"$text":"text_0124"}},{"file":{"$text":"text_0125"},"lines":{"$text":"text_0126"},"claim":{"$text":"text_0127"}},{"file":{"$text":"text_0128"},"lines":{"$text":"text_0129"},"claim":{"$text":"text_0130"}},{"file":{"$text":"text_0131"},"lines":{"$text":"text_0132"},"claim":{"$text":"text_0133"}},{"file":{"$text":"text_0134"},"lines":{"$text":"text_0135"},"claim":{"$text":"text_0136"}},{"file":{"$text":"text_0137"},"lines":{"$text":"text_0138"},"claim":{"$text":"text_0139"}},{"file":{"$text":"text_0140"},"lines":{"$text":"text_0141"},"claim":{"$text":"text_0142"}},{"file":{"$text":"text_0143"},"lines":{"$text":"text_0144"},"claim":{"$text":"text_0145"}},{"file":{"$text":"text_0146"},"lines":{"$text":"text_0147"},"claim":{"$text":"text_0148"}},{"file":{"$text":"text_0149"},"lines":{"$text":"text_0150"},"claim":{"$text":"text_0151"}},{"file":{"$text":"text_0152"},"lines":{"$text":"text_0153"},"claim":{"$text":"text_0154"}},{"file":{"$text":"text_0155"},"lines":{"$text":"text_0156"},"claim":{"$text":"text_0157"}},{"file":{"$text":"text_0158"},"lines":{"$text":"text_0159"},"claim":{"$text":"text_0160"}},{"file":{"$text":"text_0161"},"lines":{"$text":"text_0162"},"claim":{"$text":"text_0163"}},{"file":{"$text":"text_0164"},"lines":{"$text":"text_0165"},"claim":{"$text":"text_0166"}}],"map":{"scene":{"$text":"text_0167"},"coordinateSystem":{"$text":"text_0168"},"bounds":{"width":1280,"height":720,"minX":75,"maxX":1210,"minY":470,"maxY":657,"x":0,"y":0},"walkPolygon":[[75,470],[1210,470],[1210,657],[75,657]],"points":[{"name":{"$text":"text_0169"},"x":430,"y":577,"type":{"$text":"text_0170"}},{"name":{"$text":"text_0171"},"x":580,"y":592,"type":{"$text":"text_0172"},"radius":90},{"name":{"$text":"text_0173"},"x":950,"y":494,"type":{"$text":"text_0174"},"radius":115},{"name":{"$text":"text_0175"},"x":1050,"y":490,"type":{"$text":"text_0176"},"size":[100,90]},{"name":{"$text":"text_0177"},"x":130,"y":495,"type":{"$text":"text_0178"}},{"name":{"$text":"text_0179"},"x":240,"y":605,"type":{"$text":"text_0180"}},{"name":{"$text":"text_0181"},"x":800,"y":640,"type":{"$text":"text_0182"}}],"obstacles":[],"note":{"$text":"text_0183"}},"additionalMaps":[{"scene":{"$text":"text_0184"},"bounds":{"width":1280,"height":720,"x":0,"y":0},"walkPolygon":[[95.694,465.972],[143.158,410.882],[404.211,410.882],[424.88,382.572],[581.818,382.572],[589.474,411.647],[760.957,420.829],[819.139,420.829],[845.933,459.851],[914.833,466.738],[914.833,422.359],[955.407,422.359],[968.421,436.897],[968.421,473.624],[1191.196,473.624],[1217.225,497.343],[1201.914,582.274],[1079.426,600.638],[266.411,600.638],[222.01,579.979],[143.158,563.911],[91.866,521.063]],"points":[{"name":{"$text":"text_0185"},"x":150,"y":550,"type":{"$text":"text_0186"}},{"name":{"$text":"text_0187"},"x":270,"y":421,"type":{"$text":"text_0188"},"size":[220,22]},{"name":{"$text":"text_0189"},"x":940,"y":439,"type":{"$text":"text_0190"},"size":[48,24]},{"name":{"$text":"text_0191"},"x":940,"y":434,"type":{"$text":"text_0192"}},{"name":{"$text":"text_0193"},"x":1020,"y":407,"type":{"$text":"text_0194"}}],"obstacles":[{"name":{"$text":"text_0195"},"kind":{"$text":"text_0196"},"polygon":[[198.278,429.245],[313.876,429.245],[313.876,450.67],[198.278,450.67]]},{"name":{"$text":"text_0197"},"kind":{"$text":"text_0198"},"polygon":[[492.249,429.245],[608.612,429.245],[608.612,449.904],[492.249,449.904]]},{"name":{"$text":"text_0199"},"kind":{"$text":"text_0200"},"polygon":[[746.411,443.783],[850.526,443.783],[850.526,452.2],[746.411,452.2]]},{"name":{"$text":"text_0201"},"kind":{"$text":"text_0202"},"polygon":[[153.876,439.192],[187.56,439.192],[187.56,450.67],[153.876,450.67]]},{"name":{"$text":"text_0203"},"kind":{"$text":"text_0204"},"polygon":[[327.656,439.957],[359.809,439.957],[359.809,451.435],[327.656,451.435]]},{"name":{"$text":"text_0205"},"kind":{"$text":"text_0206"},"polygon":[[436.364,439.957],[467.751,439.957],[467.751,451.435],[436.364,451.435]]},{"name":{"$text":"text_0207"},"kind":{"$text":"text_0208"},"polygon":[[522.871,439.192],[571.1,439.192],[571.1,449.904],[522.871,449.904]]},{"name":{"$text":"text_0209"},"kind":{"$text":"text_0210"},"polygon":[[623.923,439.957],[653.78,439.957],[653.78,451.435],[623.923,451.435]]},{"name":{"$text":"text_0211"},"kind":{"$text":"text_0212"},"polygon":[[692.823,439.957],[725.742,439.957],[725.742,452.2],[692.823,452.2]]},{"name":{"$text":"text_0213"},"kind":{"$text":"text_0214"},"polygon":[[777.033,446.079],[829.856,446.079],[829.856,450.67],[777.033,450.67]]},{"name":{"$text":"text_0215"},"kind":{"$text":"text_0216"},"polygon":[[764.785,400.17],[811.483,400.17],[811.483,419.299],[764.785,419.299]]},{"name":{"$text":"text_0217"},"kind":{"$text":"text_0218"},"polygon":[[142.392,312.944],[404.976,312.944],[411.866,407.056],[143.158,407.056]]},{"name":{"$text":"text_0219"},"kind":{"$text":"text_0220"},"polygon":[[419.522,303.762],[588.708,303.762],[588.708,376.451],[419.522,376.451]]},{"name":{"$text":"text_0221"},"kind":{"$text":"text_0222"},"polygon":[[592.536,374.155],[741.053,374.155],[754.067,419.299],[592.536,412.412]]},{"name":{"$text":"text_0223"},"kind":{"$text":"text_0224"},"polygon":[[81.914,404.761],[146.986,404.761],[146.986,423.889],[81.914,428.48]]},{"name":{"$text":"text_0225"},"kind":{"$text":"text_0226"},"polygon":[[761.722,398.64],[815.311,398.64],[815.311,424.655],[761.722,424.655]]},{"name":{"$text":"text_0227"},"kind":{"$text":"text_0228"},"polygon":[[817.608,390.988],[894.163,410.882],[907.943,454.495],[885.742,466.738],[826.794,436.897]]},{"name":{"$text":"text_0229"},"kind":{"$text":"text_0230"},"polygon":[[968.421,422.359],[1010.526,417.768],[1115.407,427.715],[1262.392,430.776],[1276.938,472.094],[968.421,472.094]]},{"name":{"$text":"text_0231"},"kind":{"$text":"text_0232"},"polygon":[[0,530.244],[76.555,530.244],[111.005,571.562],[237.321,603.698],[0,688.629]]},{"name":{"$text":"text_0233"},"kind":{"$text":"text_0234"},"polygon":[[1159.809,569.267],[1280,504.995],[1280,720],[1140.67,720]]},{"name":{"$text":"text_0235"},"kind":{"$text":"text_0236"},"polygon":[[955.407,392.519],[998.278,388.693],[1012.057,406.291],[1002.871,420.829],[960,421.594],[947.751,408.587]]},{"name":{"$text":"text_0237"},"kind":{"$text":"text_0238"},"polygon":[[876.555,404.761],[946.986,404.761],[946.986,422.359],[880.383,426.95]]}],"note":{"$text":"text_0239"}},{"scene":{"$text":"text_0240"},"bounds":{"width":2048,"height":768,"x":0,"y":0},"walkPolygon":[[80,550],[190,536],[320,544],[445,537],[590,545],[750,531],[900,536],[1060,533],[1200,541],[1365,535],[1510,543],[1680,535],[1830,541],[1970,530],[1990,570],[1975,610],[1870,624],[1740,624],[1620,635],[1490,624],[1350,635],[1220,625],[1090,633],[950,629],[810,638],[680,624],[540,634],[400,623],[275,633],[150,621],[74,598]],"points":[{"name":{"$text":"text_0241"},"x":1024,"y":586,"type":{"$text":"text_0242"}},{"name":{"$text":"text_0243"},"x":1580,"y":584,"type":{"$text":"text_0244"},"size":[48,180]},{"name":{"$text":"text_0245"},"x":1720,"y":551.111,"type":{"$text":"text_0246"},"size":[58,27.622]},{"name":{"$text":"text_0247"},"x":1684,"y":581.733,"type":{"$text":"text_0248"},"size":[58,27.622]},{"name":{"$text":"text_0249"},"x":1704,"y":612.356,"type":{"$text":"text_0250"},"size":[58,27.622]}],"obstacles":[{"name":{"$text":"text_0251"},"kind":{"$text":"text_0252"},"polygon":[[590,395],[800,390],[1050,384],[1245,387],[1350,445],[1315,504],[1190,514],[1060,509],[895,517],[750,510],[650,522],[590,495]]},{"name":{"$text":"text_0253"},"kind":{"$text":"text_0254"},"polygon":[[935,45],[1380,45],[1395,205],[1360,386],[1290,430],[1090,425],[930,380],[880,255]]},{"name":{"$text":"text_0255"},"kind":{"$text":"text_0256"},"polygon":[[0,0],[700,0],[645,310],[590,390],[600,492],[480,521],[315,521],[170,517],[0,525]]},{"name":{"$text":"text_0257"},"kind":{"$text":"text_0258"},"polygon":[[1360,0],[2048,0],[2048,515],[1910,520],[1810,516],[1665,518],[1505,525],[1375,516],[1325,460],[1385,330]]},{"name":{"$text":"text_0259"},"kind":{"$text":"text_0260"},"polygon":[[0,600],[115,595],[174,625],[170,768],[0,768]]},{"name":{"$text":"text_0261"},"kind":{"$text":"text_0262"},"polygon":[[1850,625],[1910,595],[2048,605],[2048,768],[1875,768]]}],"note":{"$text":"text_0263"}}],"uiIterations":{"title":{"$text":"text_0264"},"cases":[{"id":{"$text":"text_0265"},"title":{"$text":"text_0266"},"intro":{"$text":"text_0267"},"before":{"kind":{"$text":"text_0268"},"path":{"$text":"text_0269"},"width":1774,"height":887},"after":{"kind":{"$text":"text_0270"},"path":{"$text":"text_0271"},"width":1672,"height":941}},{"id":{"$text":"text_0272"},"title":{"$text":"text_0273"},"intro":{"$text":"text_0274"},"before":{"kind":{"$text":"text_0275"},"path":{"$text":"text_0276"},"width":1280,"height":720},"after":{"kind":{"$text":"text_0277"},"path":{"$text":"text_0278"},"width":1920,"height":1080}},{"id":{"$text":"text_0279"},"title":{"$text":"text_0280"},"intro":{"$text":"text_0281"},"before":{"kind":{"$text":"text_0282"},"path":{"$text":"text_0283"},"width":1681,"height":936},"after":{"kind":{"$text":"text_0284"},"path":{"$text":"text_0285"},"width":1447,"height":1087}},{"id":{"$text":"text_0286"},"title":{"$text":"text_0287"},"intro":{"$text":"text_0288"},"before":{"kind":{"$text":"text_0289"},"path":{"$text":"text_0290"},"width":1672,"height":941},"after":{"kind":{"$text":"text_0291"},"path":{"$text":"text_0292"},"width":1672,"height":941}}]}}'),Xe=JSON.parse('[{"id":"text_0001","path":"/title","label":"标题"},{"id":"text_0002","path":"/subtitle","label":"副标题"},{"id":"text_0003","path":"/summary","label":"简介"},{"id":"text_0004","path":"/status","label":"开发状态"},{"id":"text_0005","path":"/goals/0","label":"设计目标 / 1"},{"id":"text_0006","path":"/goals/1","label":"设计目标 / 2"},{"id":"text_0007","path":"/goals/2","label":"设计目标 / 3"},{"id":"text_0008","path":"/experience/0","label":"玩家体验 / 1"},{"id":"text_0009","path":"/experience/1","label":"玩家体验 / 2"},{"id":"text_0010","path":"/experience/2","label":"玩家体验 / 3"},{"id":"text_0011","path":"/rules/0/title","label":"机制与规则 / 1 / 标题"},{"id":"text_0012","path":"/rules/0/body","label":"机制与规则 / 1 / 正文"},{"id":"text_0013","path":"/rules/1/title","label":"机制与规则 / 2 / 标题"},{"id":"text_0014","path":"/rules/1/body","label":"机制与规则 / 2 / 正文"},{"id":"text_0015","path":"/rules/2/title","label":"机制与规则 / 3 / 标题"},{"id":"text_0016","path":"/rules/2/body","label":"机制与规则 / 3 / 正文"},{"id":"text_0017","path":"/rules/3/title","label":"机制与规则 / 4 / 标题"},{"id":"text_0018","path":"/rules/3/body","label":"机制与规则 / 4 / 正文"},{"id":"text_0019","path":"/rules/4/title","label":"机制与规则 / 5 / 标题"},{"id":"text_0020","path":"/rules/4/body","label":"机制与规则 / 5 / 正文"},{"id":"text_0021","path":"/rules/5/title","label":"机制与规则 / 6 / 标题"},{"id":"text_0022","path":"/rules/5/body","label":"机制与规则 / 6 / 正文"},{"id":"text_0023","path":"/parameters/headers/0","label":"关键参数 / 表头 / 1"},{"id":"text_0024","path":"/parameters/headers/1","label":"关键参数 / 表头 / 2"},{"id":"text_0025","path":"/parameters/headers/2","label":"关键参数 / 表头 / 3"},{"id":"text_0026","path":"/parameters/rows/0/0","label":"关键参数 / 表格行 / 1 / 1"},{"id":"text_0027","path":"/parameters/rows/0/1","label":"关键参数 / 表格行 / 1 / 2"},{"id":"text_0028","path":"/parameters/rows/0/2","label":"关键参数 / 表格行 / 1 / 3"},{"id":"text_0029","path":"/parameters/rows/1/0","label":"关键参数 / 表格行 / 2 / 1"},{"id":"text_0030","path":"/parameters/rows/1/1","label":"关键参数 / 表格行 / 2 / 2"},{"id":"text_0031","path":"/parameters/rows/1/2","label":"关键参数 / 表格行 / 2 / 3"},{"id":"text_0032","path":"/parameters/rows/2/0","label":"关键参数 / 表格行 / 3 / 1"},{"id":"text_0033","path":"/parameters/rows/2/1","label":"关键参数 / 表格行 / 3 / 2"},{"id":"text_0034","path":"/parameters/rows/2/2","label":"关键参数 / 表格行 / 3 / 3"},{"id":"text_0035","path":"/parameters/rows/3/0","label":"关键参数 / 表格行 / 4 / 1"},{"id":"text_0036","path":"/parameters/rows/3/1","label":"关键参数 / 表格行 / 4 / 2"},{"id":"text_0037","path":"/parameters/rows/3/2","label":"关键参数 / 表格行 / 4 / 3"},{"id":"text_0038","path":"/parameters/rows/4/0","label":"关键参数 / 表格行 / 5 / 1"},{"id":"text_0039","path":"/parameters/rows/4/1","label":"关键参数 / 表格行 / 5 / 2"},{"id":"text_0040","path":"/parameters/rows/4/2","label":"关键参数 / 表格行 / 5 / 3"},{"id":"text_0041","path":"/parameters/rows/5/0","label":"关键参数 / 表格行 / 6 / 1"},{"id":"text_0042","path":"/parameters/rows/5/1","label":"关键参数 / 表格行 / 6 / 2"},{"id":"text_0043","path":"/parameters/rows/5/2","label":"关键参数 / 表格行 / 6 / 3"},{"id":"text_0044","path":"/parameters/rows/6/0","label":"关键参数 / 表格行 / 7 / 1"},{"id":"text_0045","path":"/parameters/rows/6/1","label":"关键参数 / 表格行 / 7 / 2"},{"id":"text_0046","path":"/parameters/rows/6/2","label":"关键参数 / 表格行 / 7 / 3"},{"id":"text_0047","path":"/parameters/rows/7/0","label":"关键参数 / 表格行 / 8 / 1"},{"id":"text_0048","path":"/parameters/rows/7/1","label":"关键参数 / 表格行 / 8 / 2"},{"id":"text_0049","path":"/parameters/rows/7/2","label":"关键参数 / 表格行 / 8 / 3"},{"id":"text_0050","path":"/flow/0/title","label":"流程 / 1 / 标题"},{"id":"text_0051","path":"/flow/0/detail","label":"流程 / 1 / 说明"},{"id":"text_0052","path":"/flow/1/title","label":"流程 / 2 / 标题"},{"id":"text_0053","path":"/flow/1/detail","label":"流程 / 2 / 说明"},{"id":"text_0054","path":"/flow/2/title","label":"流程 / 3 / 标题"},{"id":"text_0055","path":"/flow/2/detail","label":"流程 / 3 / 说明"},{"id":"text_0056","path":"/flow/3/title","label":"流程 / 4 / 标题"},{"id":"text_0057","path":"/flow/3/detail","label":"流程 / 4 / 说明"},{"id":"text_0058","path":"/flow/4/title","label":"流程 / 5 / 标题"},{"id":"text_0059","path":"/flow/4/detail","label":"流程 / 5 / 说明"},{"id":"text_0060","path":"/flow/5/title","label":"流程 / 6 / 标题"},{"id":"text_0061","path":"/flow/5/detail","label":"流程 / 6 / 说明"},{"id":"text_0062","path":"/flow/6/title","label":"流程 / 7 / 标题"},{"id":"text_0063","path":"/flow/6/detail","label":"流程 / 7 / 说明"},{"id":"text_0064","path":"/flow/7/title","label":"流程 / 8 / 标题"},{"id":"text_0065","path":"/flow/7/detail","label":"流程 / 8 / 说明"},{"id":"text_0066","path":"/implementation/0/title","label":"实现方式 / 1 / 标题"},{"id":"text_0067","path":"/implementation/0/body","label":"实现方式 / 1 / 正文"},{"id":"text_0068","path":"/implementation/1/title","label":"实现方式 / 2 / 标题"},{"id":"text_0069","path":"/implementation/1/body","label":"实现方式 / 2 / 正文"},{"id":"text_0070","path":"/implementation/2/title","label":"实现方式 / 3 / 标题"},{"id":"text_0071","path":"/implementation/2/body","label":"实现方式 / 3 / 正文"},{"id":"text_0072","path":"/implementation/3/title","label":"实现方式 / 4 / 标题"},{"id":"text_0073","path":"/implementation/3/body","label":"实现方式 / 4 / 正文"},{"id":"text_0098","path":"/validation/0/label","label":"验证结果 / 1 / 名称"},{"id":"text_0099","path":"/validation/0/result","label":"验证结果 / 1 / 结果"},{"id":"text_0100","path":"/validation/0/source","label":"验证结果 / 1 / 依据"},{"id":"text_0101","path":"/validation/1/label","label":"验证结果 / 2 / 名称"},{"id":"text_0102","path":"/validation/1/result","label":"验证结果 / 2 / 结果"},{"id":"text_0103","path":"/validation/1/source","label":"验证结果 / 2 / 依据"},{"id":"text_0104","path":"/validation/2/label","label":"验证结果 / 3 / 名称"},{"id":"text_0105","path":"/validation/2/result","label":"验证结果 / 3 / 结果"},{"id":"text_0106","path":"/validation/2/source","label":"验证结果 / 3 / 依据"},{"id":"text_0107","path":"/validation/3/label","label":"验证结果 / 4 / 名称"},{"id":"text_0108","path":"/validation/3/result","label":"验证结果 / 4 / 结果"},{"id":"text_0109","path":"/validation/3/source","label":"验证结果 / 4 / 依据"},{"id":"text_0110","path":"/validation/4/label","label":"验证结果 / 5 / 名称"},{"id":"text_0111","path":"/validation/4/result","label":"验证结果 / 5 / 结果"},{"id":"text_0112","path":"/validation/4/source","label":"验证结果 / 5 / 依据"},{"id":"text_0113","path":"/limitations/0","label":"尚存问题 / 1"},{"id":"text_0114","path":"/limitations/1","label":"尚存问题 / 2"},{"id":"text_0115","path":"/limitations/2","label":"尚存问题 / 3"},{"id":"text_0116","path":"/limitations/3","label":"尚存问题 / 4"},{"id":"text_0117","path":"/limitations/4","label":"尚存问题 / 5"},{"id":"text_0118","path":"/limitations/5","label":"尚存问题 / 6"},{"id":"text_0119","path":"/sources/0/file","label":"项目依据 / 1 / 文件路径"},{"id":"text_0120","path":"/sources/0/lines","label":"项目依据 / 1 / 行号"},{"id":"text_0121","path":"/sources/0/claim","label":"项目依据 / 1 / 支持的结论"},{"id":"text_0122","path":"/sources/1/file","label":"项目依据 / 2 / 文件路径"},{"id":"text_0123","path":"/sources/1/lines","label":"项目依据 / 2 / 行号"},{"id":"text_0124","path":"/sources/1/claim","label":"项目依据 / 2 / 支持的结论"},{"id":"text_0125","path":"/sources/2/file","label":"项目依据 / 3 / 文件路径"},{"id":"text_0126","path":"/sources/2/lines","label":"项目依据 / 3 / 行号"},{"id":"text_0127","path":"/sources/2/claim","label":"项目依据 / 3 / 支持的结论"},{"id":"text_0128","path":"/sources/3/file","label":"项目依据 / 4 / 文件路径"},{"id":"text_0129","path":"/sources/3/lines","label":"项目依据 / 4 / 行号"},{"id":"text_0130","path":"/sources/3/claim","label":"项目依据 / 4 / 支持的结论"},{"id":"text_0131","path":"/sources/4/file","label":"项目依据 / 5 / 文件路径"},{"id":"text_0132","path":"/sources/4/lines","label":"项目依据 / 5 / 行号"},{"id":"text_0133","path":"/sources/4/claim","label":"项目依据 / 5 / 支持的结论"},{"id":"text_0134","path":"/sources/5/file","label":"项目依据 / 6 / 文件路径"},{"id":"text_0135","path":"/sources/5/lines","label":"项目依据 / 6 / 行号"},{"id":"text_0136","path":"/sources/5/claim","label":"项目依据 / 6 / 支持的结论"},{"id":"text_0137","path":"/sources/6/file","label":"项目依据 / 7 / 文件路径"},{"id":"text_0138","path":"/sources/6/lines","label":"项目依据 / 7 / 行号"},{"id":"text_0139","path":"/sources/6/claim","label":"项目依据 / 7 / 支持的结论"},{"id":"text_0140","path":"/sources/7/file","label":"项目依据 / 8 / 文件路径"},{"id":"text_0141","path":"/sources/7/lines","label":"项目依据 / 8 / 行号"},{"id":"text_0142","path":"/sources/7/claim","label":"项目依据 / 8 / 支持的结论"},{"id":"text_0143","path":"/sources/8/file","label":"项目依据 / 9 / 文件路径"},{"id":"text_0144","path":"/sources/8/lines","label":"项目依据 / 9 / 行号"},{"id":"text_0145","path":"/sources/8/claim","label":"项目依据 / 9 / 支持的结论"},{"id":"text_0146","path":"/sources/9/file","label":"项目依据 / 10 / 文件路径"},{"id":"text_0147","path":"/sources/9/lines","label":"项目依据 / 10 / 行号"},{"id":"text_0148","path":"/sources/9/claim","label":"项目依据 / 10 / 支持的结论"},{"id":"text_0149","path":"/sources/10/file","label":"项目依据 / 11 / 文件路径"},{"id":"text_0150","path":"/sources/10/lines","label":"项目依据 / 11 / 行号"},{"id":"text_0151","path":"/sources/10/claim","label":"项目依据 / 11 / 支持的结论"},{"id":"text_0152","path":"/sources/11/file","label":"项目依据 / 12 / 文件路径"},{"id":"text_0153","path":"/sources/11/lines","label":"项目依据 / 12 / 行号"},{"id":"text_0154","path":"/sources/11/claim","label":"项目依据 / 12 / 支持的结论"},{"id":"text_0155","path":"/sources/12/file","label":"项目依据 / 13 / 文件路径"},{"id":"text_0156","path":"/sources/12/lines","label":"项目依据 / 13 / 行号"},{"id":"text_0157","path":"/sources/12/claim","label":"项目依据 / 13 / 支持的结论"},{"id":"text_0158","path":"/sources/13/file","label":"项目依据 / 14 / 文件路径"},{"id":"text_0159","path":"/sources/13/lines","label":"项目依据 / 14 / 行号"},{"id":"text_0160","path":"/sources/13/claim","label":"项目依据 / 14 / 支持的结论"},{"id":"text_0161","path":"/sources/14/file","label":"项目依据 / 15 / 文件路径"},{"id":"text_0162","path":"/sources/14/lines","label":"项目依据 / 15 / 行号"},{"id":"text_0163","path":"/sources/14/claim","label":"项目依据 / 15 / 支持的结论"},{"id":"text_0164","path":"/sources/15/file","label":"项目依据 / 16 / 文件路径"},{"id":"text_0165","path":"/sources/15/lines","label":"项目依据 / 16 / 行号"},{"id":"text_0166","path":"/sources/15/claim","label":"项目依据 / 16 / 支持的结论"},{"id":"text_0167","path":"/map/scene","label":"主关卡示意 / 场景"},{"id":"text_0168","path":"/map/coordinateSystem","label":"主关卡示意 / 坐标说明"},{"id":"text_0169","path":"/map/points/0/name","label":"主关卡示意 / 交互位置 / 1 / 名称"},{"id":"text_0170","path":"/map/points/0/type","label":"主关卡示意 / 交互位置 / 1 / 类型"},{"id":"text_0171","path":"/map/points/1/name","label":"主关卡示意 / 交互位置 / 2 / 名称"},{"id":"text_0172","path":"/map/points/1/type","label":"主关卡示意 / 交互位置 / 2 / 类型"},{"id":"text_0173","path":"/map/points/2/name","label":"主关卡示意 / 交互位置 / 3 / 名称"},{"id":"text_0174","path":"/map/points/2/type","label":"主关卡示意 / 交互位置 / 3 / 类型"},{"id":"text_0175","path":"/map/points/3/name","label":"主关卡示意 / 交互位置 / 4 / 名称"},{"id":"text_0176","path":"/map/points/3/type","label":"主关卡示意 / 交互位置 / 4 / 类型"},{"id":"text_0177","path":"/map/points/4/name","label":"主关卡示意 / 交互位置 / 5 / 名称"},{"id":"text_0178","path":"/map/points/4/type","label":"主关卡示意 / 交互位置 / 5 / 类型"},{"id":"text_0179","path":"/map/points/5/name","label":"主关卡示意 / 交互位置 / 6 / 名称"},{"id":"text_0180","path":"/map/points/5/type","label":"主关卡示意 / 交互位置 / 6 / 类型"},{"id":"text_0181","path":"/map/points/6/name","label":"主关卡示意 / 交互位置 / 7 / 名称"},{"id":"text_0182","path":"/map/points/6/type","label":"主关卡示意 / 交互位置 / 7 / 类型"},{"id":"text_0183","path":"/map/note","label":"主关卡示意 / 备注"},{"id":"text_0184","path":"/additionalMaps/0/scene","label":"其他关卡示意 / 1 / 场景"},{"id":"text_0185","path":"/additionalMaps/0/points/0/name","label":"其他关卡示意 / 1 / 交互位置 / 1 / 名称"},{"id":"text_0186","path":"/additionalMaps/0/points/0/type","label":"其他关卡示意 / 1 / 交互位置 / 1 / 类型"},{"id":"text_0187","path":"/additionalMaps/0/points/1/name","label":"其他关卡示意 / 1 / 交互位置 / 2 / 名称"},{"id":"text_0188","path":"/additionalMaps/0/points/1/type","label":"其他关卡示意 / 1 / 交互位置 / 2 / 类型"},{"id":"text_0189","path":"/additionalMaps/0/points/2/name","label":"其他关卡示意 / 1 / 交互位置 / 3 / 名称"},{"id":"text_0190","path":"/additionalMaps/0/points/2/type","label":"其他关卡示意 / 1 / 交互位置 / 3 / 类型"},{"id":"text_0191","path":"/additionalMaps/0/points/3/name","label":"其他关卡示意 / 1 / 交互位置 / 4 / 名称"},{"id":"text_0192","path":"/additionalMaps/0/points/3/type","label":"其他关卡示意 / 1 / 交互位置 / 4 / 类型"},{"id":"text_0193","path":"/additionalMaps/0/points/4/name","label":"其他关卡示意 / 1 / 交互位置 / 5 / 名称"},{"id":"text_0194","path":"/additionalMaps/0/points/4/type","label":"其他关卡示意 / 1 / 交互位置 / 5 / 类型"},{"id":"text_0195","path":"/additionalMaps/0/obstacles/0/name","label":"其他关卡示意 / 1 / obstacles / 1 / 名称"},{"id":"text_0196","path":"/additionalMaps/0/obstacles/0/kind","label":"其他关卡示意 / 1 / obstacles / 1 / kind"},{"id":"text_0197","path":"/additionalMaps/0/obstacles/1/name","label":"其他关卡示意 / 1 / obstacles / 2 / 名称"},{"id":"text_0198","path":"/additionalMaps/0/obstacles/1/kind","label":"其他关卡示意 / 1 / obstacles / 2 / kind"},{"id":"text_0199","path":"/additionalMaps/0/obstacles/2/name","label":"其他关卡示意 / 1 / obstacles / 3 / 名称"},{"id":"text_0200","path":"/additionalMaps/0/obstacles/2/kind","label":"其他关卡示意 / 1 / obstacles / 3 / kind"},{"id":"text_0201","path":"/additionalMaps/0/obstacles/3/name","label":"其他关卡示意 / 1 / obstacles / 4 / 名称"},{"id":"text_0202","path":"/additionalMaps/0/obstacles/3/kind","label":"其他关卡示意 / 1 / obstacles / 4 / kind"},{"id":"text_0203","path":"/additionalMaps/0/obstacles/4/name","label":"其他关卡示意 / 1 / obstacles / 5 / 名称"},{"id":"text_0204","path":"/additionalMaps/0/obstacles/4/kind","label":"其他关卡示意 / 1 / obstacles / 5 / kind"},{"id":"text_0205","path":"/additionalMaps/0/obstacles/5/name","label":"其他关卡示意 / 1 / obstacles / 6 / 名称"},{"id":"text_0206","path":"/additionalMaps/0/obstacles/5/kind","label":"其他关卡示意 / 1 / obstacles / 6 / kind"},{"id":"text_0207","path":"/additionalMaps/0/obstacles/6/name","label":"其他关卡示意 / 1 / obstacles / 7 / 名称"},{"id":"text_0208","path":"/additionalMaps/0/obstacles/6/kind","label":"其他关卡示意 / 1 / obstacles / 7 / kind"},{"id":"text_0209","path":"/additionalMaps/0/obstacles/7/name","label":"其他关卡示意 / 1 / obstacles / 8 / 名称"},{"id":"text_0210","path":"/additionalMaps/0/obstacles/7/kind","label":"其他关卡示意 / 1 / obstacles / 8 / kind"},{"id":"text_0211","path":"/additionalMaps/0/obstacles/8/name","label":"其他关卡示意 / 1 / obstacles / 9 / 名称"},{"id":"text_0212","path":"/additionalMaps/0/obstacles/8/kind","label":"其他关卡示意 / 1 / obstacles / 9 / kind"},{"id":"text_0213","path":"/additionalMaps/0/obstacles/9/name","label":"其他关卡示意 / 1 / obstacles / 10 / 名称"},{"id":"text_0214","path":"/additionalMaps/0/obstacles/9/kind","label":"其他关卡示意 / 1 / obstacles / 10 / kind"},{"id":"text_0215","path":"/additionalMaps/0/obstacles/10/name","label":"其他关卡示意 / 1 / obstacles / 11 / 名称"},{"id":"text_0216","path":"/additionalMaps/0/obstacles/10/kind","label":"其他关卡示意 / 1 / obstacles / 11 / kind"},{"id":"text_0217","path":"/additionalMaps/0/obstacles/11/name","label":"其他关卡示意 / 1 / obstacles / 12 / 名称"},{"id":"text_0218","path":"/additionalMaps/0/obstacles/11/kind","label":"其他关卡示意 / 1 / obstacles / 12 / kind"},{"id":"text_0219","path":"/additionalMaps/0/obstacles/12/name","label":"其他关卡示意 / 1 / obstacles / 13 / 名称"},{"id":"text_0220","path":"/additionalMaps/0/obstacles/12/kind","label":"其他关卡示意 / 1 / obstacles / 13 / kind"},{"id":"text_0221","path":"/additionalMaps/0/obstacles/13/name","label":"其他关卡示意 / 1 / obstacles / 14 / 名称"},{"id":"text_0222","path":"/additionalMaps/0/obstacles/13/kind","label":"其他关卡示意 / 1 / obstacles / 14 / kind"},{"id":"text_0223","path":"/additionalMaps/0/obstacles/14/name","label":"其他关卡示意 / 1 / obstacles / 15 / 名称"},{"id":"text_0224","path":"/additionalMaps/0/obstacles/14/kind","label":"其他关卡示意 / 1 / obstacles / 15 / kind"},{"id":"text_0225","path":"/additionalMaps/0/obstacles/15/name","label":"其他关卡示意 / 1 / obstacles / 16 / 名称"},{"id":"text_0226","path":"/additionalMaps/0/obstacles/15/kind","label":"其他关卡示意 / 1 / obstacles / 16 / kind"},{"id":"text_0227","path":"/additionalMaps/0/obstacles/16/name","label":"其他关卡示意 / 1 / obstacles / 17 / 名称"},{"id":"text_0228","path":"/additionalMaps/0/obstacles/16/kind","label":"其他关卡示意 / 1 / obstacles / 17 / kind"},{"id":"text_0229","path":"/additionalMaps/0/obstacles/17/name","label":"其他关卡示意 / 1 / obstacles / 18 / 名称"},{"id":"text_0230","path":"/additionalMaps/0/obstacles/17/kind","label":"其他关卡示意 / 1 / obstacles / 18 / kind"},{"id":"text_0231","path":"/additionalMaps/0/obstacles/18/name","label":"其他关卡示意 / 1 / obstacles / 19 / 名称"},{"id":"text_0232","path":"/additionalMaps/0/obstacles/18/kind","label":"其他关卡示意 / 1 / obstacles / 19 / kind"},{"id":"text_0233","path":"/additionalMaps/0/obstacles/19/name","label":"其他关卡示意 / 1 / obstacles / 20 / 名称"},{"id":"text_0234","path":"/additionalMaps/0/obstacles/19/kind","label":"其他关卡示意 / 1 / obstacles / 20 / kind"},{"id":"text_0235","path":"/additionalMaps/0/obstacles/20/name","label":"其他关卡示意 / 1 / obstacles / 21 / 名称"},{"id":"text_0236","path":"/additionalMaps/0/obstacles/20/kind","label":"其他关卡示意 / 1 / obstacles / 21 / kind"},{"id":"text_0237","path":"/additionalMaps/0/obstacles/21/name","label":"其他关卡示意 / 1 / obstacles / 22 / 名称"},{"id":"text_0238","path":"/additionalMaps/0/obstacles/21/kind","label":"其他关卡示意 / 1 / obstacles / 22 / kind"},{"id":"text_0239","path":"/additionalMaps/0/note","label":"其他关卡示意 / 1 / 备注"},{"id":"text_0240","path":"/additionalMaps/1/scene","label":"其他关卡示意 / 2 / 场景"},{"id":"text_0241","path":"/additionalMaps/1/points/0/name","label":"其他关卡示意 / 2 / 交互位置 / 1 / 名称"},{"id":"text_0242","path":"/additionalMaps/1/points/0/type","label":"其他关卡示意 / 2 / 交互位置 / 1 / 类型"},{"id":"text_0243","path":"/additionalMaps/1/points/1/name","label":"其他关卡示意 / 2 / 交互位置 / 2 / 名称"},{"id":"text_0244","path":"/additionalMaps/1/points/1/type","label":"其他关卡示意 / 2 / 交互位置 / 2 / 类型"},{"id":"text_0245","path":"/additionalMaps/1/points/2/name","label":"其他关卡示意 / 2 / 交互位置 / 3 / 名称"},{"id":"text_0246","path":"/additionalMaps/1/points/2/type","label":"其他关卡示意 / 2 / 交互位置 / 3 / 类型"},{"id":"text_0247","path":"/additionalMaps/1/points/3/name","label":"其他关卡示意 / 2 / 交互位置 / 4 / 名称"},{"id":"text_0248","path":"/additionalMaps/1/points/3/type","label":"其他关卡示意 / 2 / 交互位置 / 4 / 类型"},{"id":"text_0249","path":"/additionalMaps/1/points/4/name","label":"其他关卡示意 / 2 / 交互位置 / 5 / 名称"},{"id":"text_0250","path":"/additionalMaps/1/points/4/type","label":"其他关卡示意 / 2 / 交互位置 / 5 / 类型"},{"id":"text_0251","path":"/additionalMaps/1/obstacles/0/name","label":"其他关卡示意 / 2 / obstacles / 1 / 名称"},{"id":"text_0252","path":"/additionalMaps/1/obstacles/0/kind","label":"其他关卡示意 / 2 / obstacles / 1 / kind"},{"id":"text_0253","path":"/additionalMaps/1/obstacles/1/name","label":"其他关卡示意 / 2 / obstacles / 2 / 名称"},{"id":"text_0254","path":"/additionalMaps/1/obstacles/1/kind","label":"其他关卡示意 / 2 / obstacles / 2 / kind"},{"id":"text_0255","path":"/additionalMaps/1/obstacles/2/name","label":"其他关卡示意 / 2 / obstacles / 3 / 名称"},{"id":"text_0256","path":"/additionalMaps/1/obstacles/2/kind","label":"其他关卡示意 / 2 / obstacles / 3 / kind"},{"id":"text_0257","path":"/additionalMaps/1/obstacles/3/name","label":"其他关卡示意 / 2 / obstacles / 4 / 名称"},{"id":"text_0258","path":"/additionalMaps/1/obstacles/3/kind","label":"其他关卡示意 / 2 / obstacles / 4 / kind"},{"id":"text_0259","path":"/additionalMaps/1/obstacles/4/name","label":"其他关卡示意 / 2 / obstacles / 5 / 名称"},{"id":"text_0260","path":"/additionalMaps/1/obstacles/4/kind","label":"其他关卡示意 / 2 / obstacles / 5 / kind"},{"id":"text_0261","path":"/additionalMaps/1/obstacles/5/name","label":"其他关卡示意 / 2 / obstacles / 6 / 名称"},{"id":"text_0262","path":"/additionalMaps/1/obstacles/5/kind","label":"其他关卡示意 / 2 / obstacles / 6 / kind"},{"id":"text_0263","path":"/additionalMaps/1/note","label":"其他关卡示意 / 2 / 备注"},{"id":"text_0264","path":"/uiIterations/title","label":"uiIterations / 标题"},{"id":"text_0265","path":"/uiIterations/cases/0/id","label":"uiIterations / cases / 1 / id"},{"id":"text_0266","path":"/uiIterations/cases/0/title","label":"uiIterations / cases / 1 / 标题"},{"id":"text_0267","path":"/uiIterations/cases/0/intro","label":"uiIterations / cases / 1 / intro"},{"id":"text_0268","path":"/uiIterations/cases/0/before/kind","label":"uiIterations / cases / 1 / before / kind"},{"id":"text_0269","path":"/uiIterations/cases/0/before/path","label":"uiIterations / cases / 1 / before / path"},{"id":"text_0270","path":"/uiIterations/cases/0/after/kind","label":"uiIterations / cases / 1 / after / kind"},{"id":"text_0271","path":"/uiIterations/cases/0/after/path","label":"uiIterations / cases / 1 / after / path"},{"id":"text_0272","path":"/uiIterations/cases/1/id","label":"uiIterations / cases / 2 / id"},{"id":"text_0273","path":"/uiIterations/cases/1/title","label":"uiIterations / cases / 2 / 标题"},{"id":"text_0274","path":"/uiIterations/cases/1/intro","label":"uiIterations / cases / 2 / intro"},{"id":"text_0275","path":"/uiIterations/cases/1/before/kind","label":"uiIterations / cases / 2 / before / kind"},{"id":"text_0276","path":"/uiIterations/cases/1/before/path","label":"uiIterations / cases / 2 / before / path"},{"id":"text_0277","path":"/uiIterations/cases/1/after/kind","label":"uiIterations / cases / 2 / after / kind"},{"id":"text_0278","path":"/uiIterations/cases/1/after/path","label":"uiIterations / cases / 2 / after / path"},{"id":"text_0279","path":"/uiIterations/cases/2/id","label":"uiIterations / cases / 3 / id"},{"id":"text_0280","path":"/uiIterations/cases/2/title","label":"uiIterations / cases / 3 / 标题"},{"id":"text_0281","path":"/uiIterations/cases/2/intro","label":"uiIterations / cases / 3 / intro"},{"id":"text_0282","path":"/uiIterations/cases/2/before/kind","label":"uiIterations / cases / 3 / before / kind"},{"id":"text_0283","path":"/uiIterations/cases/2/before/path","label":"uiIterations / cases / 3 / before / path"},{"id":"text_0284","path":"/uiIterations/cases/2/after/kind","label":"uiIterations / cases / 3 / after / kind"},{"id":"text_0285","path":"/uiIterations/cases/2/after/path","label":"uiIterations / cases / 3 / after / path"},{"id":"text_0286","path":"/uiIterations/cases/3/id","label":"uiIterations / cases / 4 / id"},{"id":"text_0287","path":"/uiIterations/cases/3/title","label":"uiIterations / cases / 4 / 标题"},{"id":"text_0288","path":"/uiIterations/cases/3/intro","label":"uiIterations / cases / 4 / intro"},{"id":"text_0289","path":"/uiIterations/cases/3/before/kind","label":"uiIterations / cases / 4 / before / kind"},{"id":"text_0290","path":"/uiIterations/cases/3/before/path","label":"uiIterations / cases / 4 / before / path"},{"id":"text_0291","path":"/uiIterations/cases/3/after/kind","label":"uiIterations / cases / 4 / after / kind"},{"id":"text_0292","path":"/uiIterations/cases/3/after/path","label":"uiIterations / cases / 4 / after / path"}]'),Je={format:Ye,version:We,tree:Ge,fields:Xe},Ve="jianghuransheng-portfolio-article",Ze=1,Qe={title:{$text:"text_0001"},subtitle:{$text:"text_0002"},summary:{$text:"text_0003"},status:{$text:"text_0004"},goals:[{$text:"text_0005"},{$text:"text_0006"},{$text:"text_0007"}],experience:[{$text:"text_0008"},{$text:"text_0009"},{$text:"text_0010"}],rules:[{title:{$text:"text_0011"},body:{$text:"text_0012"}},{title:{$text:"text_0013"},body:{$text:"text_0014"}},{title:{$text:"text_0015"},body:{$text:"text_0016"}},{title:{$text:"text_0017"},body:{$text:"text_0018"}},{title:{$text:"text_0019"},body:{$text:"text_0020"}},{title:{$text:"text_0021"},body:{$text:"text_0022"}},{title:{$text:"text_0023"},body:{$text:"text_0024"}}],parameters:{headers:[{$text:"text_0025"},{$text:"text_0026"},{$text:"text_0027"}],rows:[[{$text:"text_0028"},{$text:"text_0029"},{$text:"text_0030"}],[{$text:"text_0031"},{$text:"text_0032"},{$text:"text_0033"}],[{$text:"text_0034"},{$text:"text_0035"},{$text:"text_0036"}],[{$text:"text_0037"},{$text:"text_0038"},{$text:"text_0039"}],[{$text:"text_0040"},{$text:"text_0041"},{$text:"text_0042"}],[{$text:"text_0043"},{$text:"text_0044"},{$text:"text_0045"}],[{$text:"text_0046"},{$text:"text_0047"},{$text:"text_0048"}]]},flow:[{title:{$text:"text_0049"},detail:{$text:"text_0050"}},{title:{$text:"text_0051"},detail:{$text:"text_0052"}},{title:{$text:"text_0053"},detail:{$text:"text_0054"}},{title:{$text:"text_0055"},detail:{$text:"text_0056"}},{title:{$text:"text_0057"},detail:{$text:"text_0058"}}],implementation:[{title:{$text:"text_0059"},body:{$text:"text_0060"}},{title:{$text:"text_0061"},body:{$text:"text_0062"}},{title:{$text:"text_0063"},body:{$text:"text_0064"}},{title:{$text:"text_0065"},body:{$text:"text_0066"}},{title:{$text:"text_0067"},body:{$text:"text_0068"}}],iterations:[{problem:{$text:"text_0069"},cause:{$text:"text_0070"},change:{$text:"text_0071"},result:{$text:"text_0072"},status:{$text:"text_0073"},source:{$text:"text_0074"}},{problem:{$text:"text_0075"},cause:{$text:"text_0076"},change:{$text:"text_0077"},result:{$text:"text_0078"},status:{$text:"text_0079"},source:{$text:"text_0080"}},{problem:{$text:"text_0081"},cause:{$text:"text_0082"},change:{$text:"text_0083"},result:{$text:"text_0084"},status:{$text:"text_0085"},source:{$text:"text_0086"}},{problem:{$text:"text_0087"},cause:{$text:"text_0088"},change:{$text:"text_0089"},result:{$text:"text_0090"},status:{$text:"text_0091"},source:{$text:"text_0092"}}],validation:[{label:{$text:"text_0093"},result:{$text:"text_0094"},source:{$text:"text_0095"}},{label:{$text:"text_0096"},result:{$text:"text_0097"},source:{$text:"text_0098"}},{label:{$text:"text_0099"},result:{$text:"text_0100"},source:{$text:"text_0101"}},{label:{$text:"text_0102"},result:{$text:"text_0103"},source:{$text:"text_0104"}},{label:{$text:"text_0105"},result:{$text:"text_0106"},source:{$text:"text_0107"}},{label:{$text:"text_0108"},result:{$text:"text_0109"},source:{$text:"text_0110"}}],limitations:[{$text:"text_0111"},{$text:"text_0112"},{$text:"text_0113"},{$text:"text_0114"},{$text:"text_0115"},{$text:"text_0116"},{$text:"text_0117"}],sources:[{file:{$text:"text_0118"},lines:{$text:"text_0119"},claim:{$text:"text_0120"}},{file:{$text:"text_0121"},lines:{$text:"text_0122"},claim:{$text:"text_0123"}},{file:{$text:"text_0124"},lines:{$text:"text_0125"},claim:{$text:"text_0126"}},{file:{$text:"text_0127"},lines:{$text:"text_0128"},claim:{$text:"text_0129"}},{file:{$text:"text_0130"},lines:{$text:"text_0131"},claim:{$text:"text_0132"}},{file:{$text:"text_0133"},lines:{$text:"text_0134"},claim:{$text:"text_0135"}},{file:{$text:"text_0136"},lines:{$text:"text_0137"},claim:{$text:"text_0138"}},{file:{$text:"text_0139"},lines:{$text:"text_0140"},claim:{$text:"text_0141"}},{file:{$text:"text_0142"},lines:{$text:"text_0143"},claim:{$text:"text_0144"}}]},tn=JSON.parse('[{"id":"text_0001","path":"/title","label":"标题"},{"id":"text_0002","path":"/subtitle","label":"副标题"},{"id":"text_0003","path":"/summary","label":"简介"},{"id":"text_0004","path":"/status","label":"开发状态"},{"id":"text_0005","path":"/goals/0","label":"设计目标 / 1"},{"id":"text_0006","path":"/goals/1","label":"设计目标 / 2"},{"id":"text_0007","path":"/goals/2","label":"设计目标 / 3"},{"id":"text_0008","path":"/experience/0","label":"玩家体验 / 1"},{"id":"text_0009","path":"/experience/1","label":"玩家体验 / 2"},{"id":"text_0010","path":"/experience/2","label":"玩家体验 / 3"},{"id":"text_0011","path":"/rules/0/title","label":"机制与规则 / 1 / 标题"},{"id":"text_0012","path":"/rules/0/body","label":"机制与规则 / 1 / 正文"},{"id":"text_0013","path":"/rules/1/title","label":"机制与规则 / 2 / 标题"},{"id":"text_0014","path":"/rules/1/body","label":"机制与规则 / 2 / 正文"},{"id":"text_0015","path":"/rules/2/title","label":"机制与规则 / 3 / 标题"},{"id":"text_0016","path":"/rules/2/body","label":"机制与规则 / 3 / 正文"},{"id":"text_0017","path":"/rules/3/title","label":"机制与规则 / 4 / 标题"},{"id":"text_0018","path":"/rules/3/body","label":"机制与规则 / 4 / 正文"},{"id":"text_0019","path":"/rules/4/title","label":"机制与规则 / 5 / 标题"},{"id":"text_0020","path":"/rules/4/body","label":"机制与规则 / 5 / 正文"},{"id":"text_0021","path":"/rules/5/title","label":"机制与规则 / 6 / 标题"},{"id":"text_0022","path":"/rules/5/body","label":"机制与规则 / 6 / 正文"},{"id":"text_0023","path":"/rules/6/title","label":"机制与规则 / 7 / 标题"},{"id":"text_0024","path":"/rules/6/body","label":"机制与规则 / 7 / 正文"},{"id":"text_0025","path":"/parameters/headers/0","label":"关键参数 / 表头 / 1"},{"id":"text_0026","path":"/parameters/headers/1","label":"关键参数 / 表头 / 2"},{"id":"text_0027","path":"/parameters/headers/2","label":"关键参数 / 表头 / 3"},{"id":"text_0028","path":"/parameters/rows/0/0","label":"关键参数 / 表格行 / 1 / 1"},{"id":"text_0029","path":"/parameters/rows/0/1","label":"关键参数 / 表格行 / 1 / 2"},{"id":"text_0030","path":"/parameters/rows/0/2","label":"关键参数 / 表格行 / 1 / 3"},{"id":"text_0031","path":"/parameters/rows/1/0","label":"关键参数 / 表格行 / 2 / 1"},{"id":"text_0032","path":"/parameters/rows/1/1","label":"关键参数 / 表格行 / 2 / 2"},{"id":"text_0033","path":"/parameters/rows/1/2","label":"关键参数 / 表格行 / 2 / 3"},{"id":"text_0034","path":"/parameters/rows/2/0","label":"关键参数 / 表格行 / 3 / 1"},{"id":"text_0035","path":"/parameters/rows/2/1","label":"关键参数 / 表格行 / 3 / 2"},{"id":"text_0036","path":"/parameters/rows/2/2","label":"关键参数 / 表格行 / 3 / 3"},{"id":"text_0037","path":"/parameters/rows/3/0","label":"关键参数 / 表格行 / 4 / 1"},{"id":"text_0038","path":"/parameters/rows/3/1","label":"关键参数 / 表格行 / 4 / 2"},{"id":"text_0039","path":"/parameters/rows/3/2","label":"关键参数 / 表格行 / 4 / 3"},{"id":"text_0040","path":"/parameters/rows/4/0","label":"关键参数 / 表格行 / 5 / 1"},{"id":"text_0041","path":"/parameters/rows/4/1","label":"关键参数 / 表格行 / 5 / 2"},{"id":"text_0042","path":"/parameters/rows/4/2","label":"关键参数 / 表格行 / 5 / 3"},{"id":"text_0043","path":"/parameters/rows/5/0","label":"关键参数 / 表格行 / 6 / 1"},{"id":"text_0044","path":"/parameters/rows/5/1","label":"关键参数 / 表格行 / 6 / 2"},{"id":"text_0045","path":"/parameters/rows/5/2","label":"关键参数 / 表格行 / 6 / 3"},{"id":"text_0046","path":"/parameters/rows/6/0","label":"关键参数 / 表格行 / 7 / 1"},{"id":"text_0047","path":"/parameters/rows/6/1","label":"关键参数 / 表格行 / 7 / 2"},{"id":"text_0048","path":"/parameters/rows/6/2","label":"关键参数 / 表格行 / 7 / 3"},{"id":"text_0049","path":"/flow/0/title","label":"流程 / 1 / 标题"},{"id":"text_0050","path":"/flow/0/detail","label":"流程 / 1 / 说明"},{"id":"text_0051","path":"/flow/1/title","label":"流程 / 2 / 标题"},{"id":"text_0052","path":"/flow/1/detail","label":"流程 / 2 / 说明"},{"id":"text_0053","path":"/flow/2/title","label":"流程 / 3 / 标题"},{"id":"text_0054","path":"/flow/2/detail","label":"流程 / 3 / 说明"},{"id":"text_0055","path":"/flow/3/title","label":"流程 / 4 / 标题"},{"id":"text_0056","path":"/flow/3/detail","label":"流程 / 4 / 说明"},{"id":"text_0057","path":"/flow/4/title","label":"流程 / 5 / 标题"},{"id":"text_0058","path":"/flow/4/detail","label":"流程 / 5 / 说明"},{"id":"text_0059","path":"/implementation/0/title","label":"实现方式 / 1 / 标题"},{"id":"text_0060","path":"/implementation/0/body","label":"实现方式 / 1 / 正文"},{"id":"text_0061","path":"/implementation/1/title","label":"实现方式 / 2 / 标题"},{"id":"text_0062","path":"/implementation/1/body","label":"实现方式 / 2 / 正文"},{"id":"text_0063","path":"/implementation/2/title","label":"实现方式 / 3 / 标题"},{"id":"text_0064","path":"/implementation/2/body","label":"实现方式 / 3 / 正文"},{"id":"text_0065","path":"/implementation/3/title","label":"实现方式 / 4 / 标题"},{"id":"text_0066","path":"/implementation/3/body","label":"实现方式 / 4 / 正文"},{"id":"text_0067","path":"/implementation/4/title","label":"实现方式 / 5 / 标题"},{"id":"text_0068","path":"/implementation/4/body","label":"实现方式 / 5 / 正文"},{"id":"text_0069","path":"/iterations/0/problem","label":"问题与迭代 / 1 / 发现问题"},{"id":"text_0070","path":"/iterations/0/cause","label":"问题与迭代 / 1 / 原因分析"},{"id":"text_0071","path":"/iterations/0/change","label":"问题与迭代 / 1 / 修改方案"},{"id":"text_0072","path":"/iterations/0/result","label":"问题与迭代 / 1 / 结果"},{"id":"text_0073","path":"/iterations/0/status","label":"问题与迭代 / 1 / 开发状态"},{"id":"text_0074","path":"/iterations/0/source","label":"问题与迭代 / 1 / 依据"},{"id":"text_0075","path":"/iterations/1/problem","label":"问题与迭代 / 2 / 发现问题"},{"id":"text_0076","path":"/iterations/1/cause","label":"问题与迭代 / 2 / 原因分析"},{"id":"text_0077","path":"/iterations/1/change","label":"问题与迭代 / 2 / 修改方案"},{"id":"text_0078","path":"/iterations/1/result","label":"问题与迭代 / 2 / 结果"},{"id":"text_0079","path":"/iterations/1/status","label":"问题与迭代 / 2 / 开发状态"},{"id":"text_0080","path":"/iterations/1/source","label":"问题与迭代 / 2 / 依据"},{"id":"text_0081","path":"/iterations/2/problem","label":"问题与迭代 / 3 / 发现问题"},{"id":"text_0082","path":"/iterations/2/cause","label":"问题与迭代 / 3 / 原因分析"},{"id":"text_0083","path":"/iterations/2/change","label":"问题与迭代 / 3 / 修改方案"},{"id":"text_0084","path":"/iterations/2/result","label":"问题与迭代 / 3 / 结果"},{"id":"text_0085","path":"/iterations/2/status","label":"问题与迭代 / 3 / 开发状态"},{"id":"text_0086","path":"/iterations/2/source","label":"问题与迭代 / 3 / 依据"},{"id":"text_0087","path":"/iterations/3/problem","label":"问题与迭代 / 4 / 发现问题"},{"id":"text_0088","path":"/iterations/3/cause","label":"问题与迭代 / 4 / 原因分析"},{"id":"text_0089","path":"/iterations/3/change","label":"问题与迭代 / 4 / 修改方案"},{"id":"text_0090","path":"/iterations/3/result","label":"问题与迭代 / 4 / 结果"},{"id":"text_0091","path":"/iterations/3/status","label":"问题与迭代 / 4 / 开发状态"},{"id":"text_0092","path":"/iterations/3/source","label":"问题与迭代 / 4 / 依据"},{"id":"text_0093","path":"/validation/0/label","label":"验证结果 / 1 / 名称"},{"id":"text_0094","path":"/validation/0/result","label":"验证结果 / 1 / 结果"},{"id":"text_0095","path":"/validation/0/source","label":"验证结果 / 1 / 依据"},{"id":"text_0096","path":"/validation/1/label","label":"验证结果 / 2 / 名称"},{"id":"text_0097","path":"/validation/1/result","label":"验证结果 / 2 / 结果"},{"id":"text_0098","path":"/validation/1/source","label":"验证结果 / 2 / 依据"},{"id":"text_0099","path":"/validation/2/label","label":"验证结果 / 3 / 名称"},{"id":"text_0100","path":"/validation/2/result","label":"验证结果 / 3 / 结果"},{"id":"text_0101","path":"/validation/2/source","label":"验证结果 / 3 / 依据"},{"id":"text_0102","path":"/validation/3/label","label":"验证结果 / 4 / 名称"},{"id":"text_0103","path":"/validation/3/result","label":"验证结果 / 4 / 结果"},{"id":"text_0104","path":"/validation/3/source","label":"验证结果 / 4 / 依据"},{"id":"text_0105","path":"/validation/4/label","label":"验证结果 / 5 / 名称"},{"id":"text_0106","path":"/validation/4/result","label":"验证结果 / 5 / 结果"},{"id":"text_0107","path":"/validation/4/source","label":"验证结果 / 5 / 依据"},{"id":"text_0108","path":"/validation/5/label","label":"验证结果 / 6 / 名称"},{"id":"text_0109","path":"/validation/5/result","label":"验证结果 / 6 / 结果"},{"id":"text_0110","path":"/validation/5/source","label":"验证结果 / 6 / 依据"},{"id":"text_0111","path":"/limitations/0","label":"尚存问题 / 1"},{"id":"text_0112","path":"/limitations/1","label":"尚存问题 / 2"},{"id":"text_0113","path":"/limitations/2","label":"尚存问题 / 3"},{"id":"text_0114","path":"/limitations/3","label":"尚存问题 / 4"},{"id":"text_0115","path":"/limitations/4","label":"尚存问题 / 5"},{"id":"text_0116","path":"/limitations/5","label":"尚存问题 / 6"},{"id":"text_0117","path":"/limitations/6","label":"尚存问题 / 7"},{"id":"text_0118","path":"/sources/0/file","label":"项目依据 / 1 / 文件路径"},{"id":"text_0119","path":"/sources/0/lines","label":"项目依据 / 1 / 行号"},{"id":"text_0120","path":"/sources/0/claim","label":"项目依据 / 1 / 支持的结论"},{"id":"text_0121","path":"/sources/1/file","label":"项目依据 / 2 / 文件路径"},{"id":"text_0122","path":"/sources/1/lines","label":"项目依据 / 2 / 行号"},{"id":"text_0123","path":"/sources/1/claim","label":"项目依据 / 2 / 支持的结论"},{"id":"text_0124","path":"/sources/2/file","label":"项目依据 / 3 / 文件路径"},{"id":"text_0125","path":"/sources/2/lines","label":"项目依据 / 3 / 行号"},{"id":"text_0126","path":"/sources/2/claim","label":"项目依据 / 3 / 支持的结论"},{"id":"text_0127","path":"/sources/3/file","label":"项目依据 / 4 / 文件路径"},{"id":"text_0128","path":"/sources/3/lines","label":"项目依据 / 4 / 行号"},{"id":"text_0129","path":"/sources/3/claim","label":"项目依据 / 4 / 支持的结论"},{"id":"text_0130","path":"/sources/4/file","label":"项目依据 / 5 / 文件路径"},{"id":"text_0131","path":"/sources/4/lines","label":"项目依据 / 5 / 行号"},{"id":"text_0132","path":"/sources/4/claim","label":"项目依据 / 5 / 支持的结论"},{"id":"text_0133","path":"/sources/5/file","label":"项目依据 / 6 / 文件路径"},{"id":"text_0134","path":"/sources/5/lines","label":"项目依据 / 6 / 行号"},{"id":"text_0135","path":"/sources/5/claim","label":"项目依据 / 6 / 支持的结论"},{"id":"text_0136","path":"/sources/6/file","label":"项目依据 / 7 / 文件路径"},{"id":"text_0137","path":"/sources/6/lines","label":"项目依据 / 7 / 行号"},{"id":"text_0138","path":"/sources/6/claim","label":"项目依据 / 7 / 支持的结论"},{"id":"text_0139","path":"/sources/7/file","label":"项目依据 / 8 / 文件路径"},{"id":"text_0140","path":"/sources/7/lines","label":"项目依据 / 8 / 行号"},{"id":"text_0141","path":"/sources/7/claim","label":"项目依据 / 8 / 支持的结论"},{"id":"text_0142","path":"/sources/8/file","label":"项目依据 / 9 / 文件路径"},{"id":"text_0143","path":"/sources/8/lines","label":"项目依据 / 9 / 行号"},{"id":"text_0144","path":"/sources/8/claim","label":"项目依据 / 9 / 支持的结论"}]'),en={format:Ve,version:Ze,tree:Qe,fields:tn},nn="jianghuransheng-portfolio-article",on=1;function Ct(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&Object.getPrototypeOf(t)===Object.prototype}function an(t){return t.replaceAll("&lt;!--","<!--").replaceAll("&amp;","&")}function ln(t,e){if(typeof t!="string")throw new TypeError("Markdown内容必须是字符串。");if(!e||e.format!==nn||e.version!==on||!Array.isArray(e.fields))throw new TypeError("案例结构文件的格式或版本不匹配。");const n=new Map,o=new Set;for(const i of e.fields){if(!i||!/^text_[0-9]{4,}$/.test(i.id)||o.has(i.id))throw new Error("案例结构包含重复或无效字段。");o.add(i.id)}const s=/<!-- portfolio:text (text_[0-9]{4,}) -->(\r?\n)/g;for(const i of t.matchAll(s)){const x=i[1];if(!o.has(x))throw new Error("Markdown含有未声明的字段："+x);if(n.has(x))throw new Error("Markdown字段重复："+x);const f=i.index+i[0].length,m=`
<!-- /portfolio:text `+x+" -->",w=t.indexOf(m,f);if(w<0)throw new Error("Markdown字段缺少结束标记："+x);let p=t.slice(f,w);i[2]===`\r
`&&p.endsWith("\r")&&(p=p.slice(0,-1)),n.set(x,an(p))}const a=new Set;function l(i){if(Array.isArray(i))return i.map(l);if(Ct(i)){const x=Object.keys(i);if(x.length===1&&x[0]==="$text"&&typeof i.$text=="string"){if(!n.has(i.$text))throw new Error("Markdown缺少字段："+i.$text);if(a.has(i.$text))throw new Error("结构引用了重复字段："+i.$text);return a.add(i.$text),n.get(i.$text)}return Object.fromEntries(Object.entries(i).map(([f,m])=>[f,l(m)]))}if(i===null||typeof i=="boolean"||typeof i=="number"&&Number.isFinite(i))return i;throw new TypeError("案例结构中存在无效值。")}const d=l(e.tree);if(!Ct(d)||a.size!==o.size||n.size!==o.size)throw new Error("案例字段与结构不完整匹配。");return d}const rn="麦恒游戏策划作品集 · 江湖人生",sn="游戏设计作品集",xn="01",pn="2026-10-19",dn="zh-CN",cn=["战斗策划","系统策划","关卡策划","玩法策划"],_n={displayName:"麦恒",nameApproved:!0,email:"1559661768@qq.com",emailApproved:!0,resumeUrl:"./documents/麦恒_游戏策划简历.pdf",resumeApproved:!0,demoUrl:"https://www.bilibili.com/video/BV1tZnJ6oEhF/",demoApproved:!0},fn={name:"江湖人生",engine:"Godot 4.6",type:"2.5D武侠单机 Demo",stage:"可运行原型 · 持续迭代",ownership:"本作品集记录策划需求、规则取舍、原型整合与验收。代码与部分素材含AI辅助；本人具体分工和素材授权待补充确认。"},un="南京传媒学院游戏策划与设计本科。以《江湖人生》Godot Demo为代表项目，展示战斗机制、系统规则、关卡引导及测试验证。",hn=[["index.html#about-me","关于我"],["index.html#cases","项目展示"],["index.html#system-analysis","拆解文档"],["index.html#ending","结尾"]],mn={"systems.html":"系统交互设计","about.html":"关于我"},bn={title:rn,brand:sn,version:xn,updated:pn,language:dn,roles:cn,profile:_n,project:fn,intro:un,nav:hn,pageTitles:mn},gn={eyebrow:"2025届 游戏策划 求职中",titleLines:[{text:"麦恒",accent:""},{text:"求职作品集",accent:""},{text:"",accent:""}],intro:"我是一名游戏策划求职者，2025届南京传媒学院本科毕业于游戏策划专业。10000+小时游戏经历。善于从玩家与策划双视角发现问题，并逆向还原设计目的，解决问题。",roles:["战斗策划","系统策划","关卡策划"],buttons:[{href:"#cases",label:"查看作品",secondary:!1},{href:"./about.html#contact",label:"联系我 ",secondary:!0}],imageId:"opening-title",imageAlt:"《江湖人生》开场：竹林、石桥与远山，保留完整游戏标题和开始菜单",projectLabel:"作品项目 / 《江湖人生》",imageCaption:"武侠像素 · 横版 / 2.5D 玩法 Demo",carousel:{label:"《江湖人生》游戏图片展示",controlsLabel:"选择展示图片",buttonLabel:"显示第 {number} 张图片：{title}",intervalMs:2500,durationMs:550,slides:[{path:"media/home-carousel/scene.webp",alt:"《江湖人生》客栈前场景与倒地的主角",width:1672,height:941},{path:"media/home-carousel/inventory.webp",alt:"《江湖人生》背包界面参考图：人物装备、物品栏与物品详情",width:1447,height:1087},{path:"media/home-carousel/prologue.webp",alt:"《江湖人生》序章终雪景与残剑",width:1672,height:941},{path:"media/home-carousel/sword-atlas.webp",alt:"武侠剑客十二式挥剑动作图集",width:1448,height:1086},{path:"media/home-carousel/opening.webp",alt:"《江湖人生》竹林开场菜单",width:1670,height:942}]}},vn=[{title:"01 制作项目预览",description:"《江湖人生》战斗 · 系统· 关卡"},{title:"02 拆解游戏文档",description:"《江南百景图》角色系统拆解"},{title:"03 关于我",description:"自我介绍与能力"}],yn={eyebrow:"01.《江湖人生》策划设计",title:"围绕战斗、系统和关卡，展示我的游戏设计与制作过程。",intro:"",linkLabel:"阅读开发复盘 ↗"},wn={eyebrow:"03 拆解文档 / SYSTEM ANALYSIS",items:[{id:"jiangnan",title:"《江南百景图》角色系统拆解",intro:"分析角色获取、等级养成、天赋、珍宝及羁绊等模块，并整理系统之间的关联与个人优化建议。",pdf:{path:"documents/system-breakdowns/jiangnan/江南百景图角色系统拆解.pdf",preview:"documents/system-breakdowns/jiangnan/pdf-cover.png",width:1985,height:2807},xmind:{path:"documents/system-breakdowns/jiangnan/角色系统拆解文档.xmind"},mindmaps:[{path:"documents/system-breakdowns/jiangnan/xmind-overview.png",width:2098,height:1300}],button:{href:"./documents/system-breakdowns/jiangnan/江南百景图角色系统拆解.pdf",label:"查看完整文档"}},{id:"delta",title:"《三角洲行动》交易行系统拆解",intro:"分析交易行的购买、出售、价格参考及交易规则，梳理交易行与仓库、哈夫币和战前整备之间的关系。",pdf:{path:"documents/system-breakdowns/delta/三角洲行动交易行系统拆解.pdf",preview:"documents/system-breakdowns/delta/pdf-cover.png",width:1985,height:2807},xmind:{path:"documents/system-breakdowns/delta/《三角洲行动》交易行系统.xmind"},mindmaps:[{path:"documents/system-breakdowns/delta/xmind-overview.png",width:2099,height:1300}],button:{href:"./documents/system-breakdowns/delta/三角洲行动交易行系统拆解.pdf",label:"查看完整文档"}}]},$n={eyebrow:"01 关于我 / ABOUT ME",title:"麦恒",intro:`2025年6月毕业于南京传媒学院游戏策划专业。
10000+游戏时长阅历，能从玩家与策划双视角发现问题，解决问题。
主要关注战斗设计、系统交互与关卡引导，同时具备游戏测试与需求分析相关实践经验。`,items:[{label:"求职方向",text:"游戏策划（系统 / 战斗 / 关卡）"},{label:"教育背景",text:"南京传媒学院 · 游戏策划与设计 · 本科"},{label:"个人项目",text:`《江湖人生》 · 独立Demo与游戏拆解文档

`},{label:"相关实践",text:"游戏测试培训 · 需求分析与用例设计"}],button:{label:"查看个人简历"},experienceButton:{href:"./about.html",label:"个人经历"}},kn={eyebrow:"02 项目展示 / PROJECTS",labels:{open:"放大查看：",enlarge:"点击放大",close:"关闭 ×",pending:"素材待补充",videoFallback:"浏览器暂不支持视频播放。"},groups:[{title:"战斗设计",intro:"展示《江湖人生》的角色连击、无双技能、敌人受击反馈及战斗节奏调整。",detail:{href:"./combat.html",label:"查看详细设计"},items:[{type:"video",path:"media/home-previews/character-actions.mp4",poster:"media/home-previews/character-actions.webp",title:"角色基础动作",kindLabel:"原始动作素材视频",alt:"绿幕角色动作素材：待机、奔跑、挥剑与收势",width:1280,height:720},{type:"video",path:"media/home-previews/three-hit-combo.mp4",poster:"media/home-previews/three-hit-combo.webp",title:"角色三段连击",kindLabel:"原始动作素材视频",alt:"绿幕三段连击动作素材：横斩、上挑与水平突刺",width:1280,height:720},{type:"image",path:"media/home-previews/enemy-hit-reference.webp",title:"敌人受击反馈",kindLabel:"动作参考图",alt:"山贼受击动作参考图，展示站立、后仰与弯腰等姿势",width:1928,height:815}],number:"01"},{number:"02",title:"系统策划与UI设计",intro:"设计了背包、地图和场景交互功能，主要围绕界面布局、操作方式和交互反馈进行制作与优化。",items:[{type:"image",path:"media/home-previews/inventory-current.webp",title:"背包界面",kindLabel:"正式背包UI实机截图",alt:"正式背包界面：角色、装备栏、物品栏、物品详情及操作按钮",width:1280,height:720},{type:"video",path:"media/map.mp4",poster:"media/system-showcase/map-interface.webp",title:"地图展开",kindLabel:"地图展开实机录像",alt:"真实游戏画面中，揉成纸团的地图逐步展开为完整地图",width:1280,height:720},{type:"video",path:"media/system-showcase/interaction-key.mp4",poster:"media/system-showcase/interaction-key-poster.webp",title:"E键交互提示",kindLabel:"交互提示动效 · 实机局部放大",alt:"古风交互标志旁的金色E键按下与回弹动画，取自游戏画面的局部放大",width:960,height:600}],detail:{href:"./systems.html",label:"查看详细设计"}},{title:"关卡交互设计",intro:"围绕梦境与客栈场景，设计战斗教学、地图查看、物品拾取和NPC交互的引导流程。",detail:{href:"./levels.html",label:"查看详细设计"},items:[{type:"image",path:"media/dream.webp",title:"梦境竹林",kindLabel:"游戏截图",alt:"《江湖人生》梦境竹林中的白发主角与木桩",width:1280,height:720},{type:"image",path:"media/inn.webp",title:"客栈探索",kindLabel:"游戏截图",alt:"《江湖人生》客栈内场景与前台交互提示",width:1280,height:720},{type:"image",path:"media/guide.webp",title:"首次查看地图后的独白",kindLabel:"游戏截图",alt:"《江湖人生》主角关闭地图后的非阻塞剧情独白",width:1280,height:720}],number:"03"}],title:"《江湖人生》",playthrough:{title:"《江湖人生》序章全流程实机演示",intro:"观看《江湖人生》序章的完整实机流程。",label:"观看完整试玩",path:"media/hero.webp",width:1280,height:720}},En={title:"《江湖人生》系统交互设计",eyebrow:"CASE 02 / SYSTEM INTERACTION DESIGN",intro:"围绕背包、地图与场景交互，说明已有功能的操作规则、界面反馈及修改过程。",navigationLabel:"章节定位",back:{href:"./index.html#cases",label:"返回作品集主页"},labels:{goal:"设计目标",media:"图片和视频展示",rules:"功能规则",optimisation:"设计思路与优化"},chapters:[{title:"背包系统设计",items:[{type:"video",path:"media/system-showcase/inventory-opening-20261020.mp4",poster:"media/system-showcase/inventory-opening-20261020.webp",title:"01 背包打开动效",kindLabel:"打开动效实录 · 换肤前界面",alt:"游戏实录中的古风布袋打开与关闭过程，界面为换肤前版本",width:1920,height:1080,description:"设计了古风布袋展开动画，让背包打开过程更加自然，并通过对应音效提供操作反馈。",note:"此段展示沿用的布袋动效，正式背包外观见下一节；网页预览静音。"},{type:"image",path:"media/home-previews/inventory-current.webp",title:"02 背包界面展示",kindLabel:"正式背包UI实机截图",alt:"正式背包界面：角色、装备栏、物品栏、物品详情及操作按钮",width:1280,height:720,description:"将角色装备、物品栏和物品详情分区展示，方便玩家查看和管理物品。"},{type:"image",path:"media/system-showcase/inventory-selection.webp",title:"03 背包功能与交互",kindLabel:"物品选择与详情实机截图",alt:"点击背包葫芦后显示物品选中状态与对应详情的真实游戏截图",width:1280,height:720,description:"支持物品选择、查看详情、使用、装备和丢弃，通过按钮状态与点击反馈提示操作结果。",note:"当前图片展示物品选中后的详情状态。"}],number:"01",id:"inventory-system",goal:"将角色装备、物品栏和物品详情分区展示，让玩家选中物品后能直接判断可执行的操作。",rules:["点击真实物品后，更新选中框、数量、详情和按钮状态。","使用恢复品消耗1个；装备新武器时，旧武器回到背包；丢弃每次减少1个。","空格、禁用按钮和打开动画期间不执行物品操作；已装备物品不能直接使用或丢弃。","有效选择和成功操作播放一次木质轻敲，悬停、刷新和失败操作不播放。"],optimisation:["沿用原物品模型和操作回调，更换底板、图标与显示布局。针对葫芦、酒坛和草药图标缺边的问题替换完整素材，保留原画布、点击位置及音效。","下方展示废版背包系统与新版背包系统。"],audio:{path:"media/system-showcase/interaction-feedback.wav",label:"试听木质点击反馈（0.6秒，手动播放）"},comparison:[{type:"image",path:"media/system-showcase/inventory-before-20261020.png",title:"旧版背包系统",kindLabel:"真实游戏截图",alt:"旧版背包系统界面：角色装备、物品栏、长剑详情和操作按钮",width:1681,height:936},{type:"image",path:"media/system-showcase/inventory-selection.webp",title:"新版背包系统",kindLabel:"真实游戏截图",alt:"完整葫芦图标替换后的背包详情实机截图",width:1280,height:720}]},{title:"地图系统设计",items:[{type:"video",path:"media/map.mp4",poster:"media/system-showcase/map-interface.webp",title:"01 地图打开动效",kindLabel:"地图展开实机录像",alt:"真实游戏画面中，揉成纸团的地图逐步展开为完整地图",width:1280,height:720,description:"采用纸团展开动画作为地图打开效果，让地图操作更符合游戏的古风视觉风格。"},{type:"image",path:"media/system-showcase/map-interface.webp",title:"02 地图界面",kindLabel:"地图UI实机截图",alt:"游戏中青山镇地图的区域、当前位置与已有状态显示",width:1280,height:720,description:"通过地图展示玩家所在区域及探索信息，帮助玩家了解当前位置。"}],number:"02",id:"map-system",goal:"用地图帮助玩家辨认当前区域，并通过纸团展开动效与场景保持一致的视觉风格。",rules:["展开期间暂不接受区域点击；完成后可悬停查看六个区域。按M、Esc或关闭按钮关图。","当前界面突出客栈区域，其他区域以雾面表现；客栈点击反馈为“您已在此区域”。"],optimisation:["纸团在1秒内展开，重复打开请求不会重启动画或叠加音效。首次成功查看并关闭地图后，接续拾剑与问路独白，再次开关不重复触发这一段引导。","地图现阶段用于区域查看；随探索解锁的动态迷雾和跨区域旅行尚未接入。"]},{title:"交互系统设计",items:[{type:"video",path:"media/system-showcase/interaction-key.mp4",poster:"media/system-showcase/interaction-key-poster.webp",title:"01 交互提示UI",kindLabel:"交互提示动效 · 实机局部放大",alt:"古风交互标志旁的金色E键按下与回弹动画，取自游戏画面的局部放大",width:960,height:600,description:"使用统一的E键交互提示，让玩家能够快速识别可以调查或使用的对象。"},{type:"image",path:"media/system-showcase/scene-interaction.webp",title:"02 场景交互",kindLabel:"场景交互实机截图",alt:"主角通过E键与客栈掌柜交谈的真实游戏对话画面",width:1280,height:720,description:"通过E键完成物品拾取、NPC对话和场景互动，统一玩家的操作方式。"},{type:"image",path:"media/home-previews/interaction-ui.webp",title:"03 目标引导",kindLabel:"剧情目标提示实机截图",alt:"当前剧情的青峰剑目标上方显示交互提示，主角仍位于远处",width:1280,height:720,description:"根据当前剧情显示下一步交互目标，同时保留玩家自由探索的空间。",note:"提示可以远距离显示；实际交互仍需靠近目标后按E。"}],number:"03",id:"interaction-system",goal:"统一拾取、NPC对话和场景互动的E键操作，并让当前剧情目标更容易被发现。",rules:["当前目标上方显示古风标志，金色E键帽循环展示按下与回弹动效。","提示可以远距离显示；实际交互仍需进入原有范围，并满足角色当前可操作条件。","青峰剑复用场景中原有的拾取对象，成功后对象隐藏、防止重复领取，下一步提示转向已有NPC。","普通NPC对话沿用原有锁定条件；开局地图与拾剑问路独白采用非阻塞显示，允许玩家移动。"],optimisation:["将目标显示与交互执行分开：剧情状态决定标志的位置，原交互系统继续检查距离和角色状态。这样可以提前指明方向，同时保留靠近后按E的操作过程。","起身完成后恢复自由移动，玩家可以走动、稍后查看地图，再自行前往拾剑或问路。菜单、普通对话与转场期间隐藏现实目标提示，避免干扰。","下方实机截图展示拾剑前后：目标从地上的青峰剑切换到已有NPC，玩家可自行决定何时前往。"],comparison:[{type:"image",path:"media/home-previews/interaction-ui.webp",title:"拾剑前：目标在青峰剑",kindLabel:"真实游戏截图",alt:"拾剑前，交互目标提示显示在青峰剑上方",width:1280,height:720},{type:"image",path:"media/system-showcase/sword-picked-npc-target.webp",title:"拾剑后：目标切换至NPC",kindLabel:"真实游戏截图",alt:"成功拾剑后地上剑消失，目标标志切换至现有女性NPC，主角仍在远处",width:1280,height:720}]}]},Sn={eyebrow:"2025届 游戏策划 求职中",title:"求职作品集",subtitle:"我是麦恒，游戏策划本科毕业",project:"求职方向（系统 关卡 战斗） 策划 ",image:{path:"media/cover/snow-cover-20261019.png",width:1672,height:941,alt:"雪中古刹与远山，右侧剑客低头拭剑，完整保留原图人物、剑身与场景"},actions:{playthrough:{label:"观看完整试玩"},contact:{label:"联系我"}}},Pn={eyebrow:"04 结尾 / CONTACT",title:"感谢浏览",intro:"期待有机会进一步与您交流游戏设计与原型实践。",contactLabel:"联系邮箱",phoneLabel:"联系电话",phoneNumber:"18666651414",contactFallback:"查看联系方式",resume:{label:"下载个人简历"},back:{href:"./index.html#cover",label:"返回首页"}},Ln={label:"作品集栏目入口",items:[{title:"关于我",href:"#about-me",image:{path:"media/ornate-entries/about-art.png",width:1254,height:1254,visibleBounds:{x:60,y:140,width:1133,height:997}},subtitle:"ABOUT ME",frame:{path:"media/ornate-entries/about-frame.png",width:2172,height:724,containsText:!0},composition:{artHeight:225,artLeft:-50,artBottom:18}},{title:"项目展示",href:"#cases",image:{path:"media/ornate-entries/projects-art.png",width:1254,height:1254,visibleBounds:{x:28,y:215,width:1199,height:904}},subtitle:"PROJECTS",frame:{path:"media/ornate-entries/projects-frame.png",width:2172,height:724,containsText:!0},composition:{artHeight:220,artLeft:-90,artBottom:18}},{title:"拆解文档",href:"#system-analysis",image:{path:"media/ornate-entries/breakdown-art.png",width:1254,height:1254,visibleBounds:{x:127,y:208,width:1069,height:900}},subtitle:"BREAKDOWN",frame:{path:"media/ornate-entries/breakdown-frame.png",width:2172,height:724,containsText:!0},composition:{artHeight:222,artLeft:-55,artBottom:18}}]},Mn={hero:gn,facts:vn,cases:yn,systemAnalysis:wn,aboutMe:$n,previews:kn,systemInteraction:En,cover:Sn,ending:Pn,shortcuts:Ln},In={image_001:"该画面待补充，不以其他素材代替。",image_002:"项目留存截图",movie_001:"实机录像待补充。此处不使用静态图片冒充录像。",movie_002:"浏览器暂不支持视频，请使用最新版浏览器查看。",movie_003:"过场成片预览",movie_004:"实机视口帧合成预览",movie_005:"独立UI动画预览",movie_006:"原生验收录像",movie_007:" · 点击播放，保留原音轨",evidence_001:"展开项目依据与核对范围",evidence_002:"以下为项目内相对路径与源码行号，供回查；不向公开网页复制完整源代码或原始个人简历。网站案例依据当前源码和留存记录整理，本次未重新运行游戏回归。",iterations_001:"项目迭代记录",iterations_002:"原因",iterations_003:"调整",iterations_004:"结果",iterations_005:"依据：",header_001:"返回作品集首页",header_002:"跳至正文",header_003:"江",header_004:"GAME DESIGN / ",header_005:"主导航",header_006:"导航",footer_001:"《江湖人生》· 游戏策划求职作品集",footer_002:"Godot Demo / 内容核对 ",footer_003:"查看简历",footer_004:"联系我",footer_005:"",pageHead_001:"作品集",timelineExplorer_001:"战斗帧时间轴 · 三条攻击分支",timelineExplorer_002:"规则示意，非在线游戏。横轴按实际帧时长累计；无双分段变速不按统一FPS平均分配。动画内部帧号从0开始。",timelineExplorer_003:"查看招式",timelineExplorer_004:"起手 0s",timelineExplorer_005:"有效判定窗口",timelineExplorer_006:"下一次真实按键缓冲",timelineExplorer_007:"动作时间轴不代表碰撞体形状。K第二刀独停直接回待机，收势接缝待完善；K突刺没有无双的金雷位移。",interactionExplorer_001:"任务提示与实际交互 · 规则演示",interactionExplorer_002:"依据现有主线提示规则制作的说明工具，不是可试玩Demo。",interactionExplorer_003:"目标状态",interactionExplorer_004:"当前主线目标",interactionExplorer_005:"尚未激活",interactionExplorer_006:"已经完成",interactionExplorer_007:"玩家进入原交互范围",interactionExplorer_008:"目标上方任务提示",interactionExplorer_009:"E键距离条件",interactionExplorer_010:"显示由任务进度决定；E键仍受原距离门槛、对象状态和现有剧情条件约束。未显示主线提示，不代表其他近距交互全部禁用。",coordinateDiagram_001:"精确路线与可行走区域资料待补充，不绘制推测地图。",coordinateDiagram_002:"关卡空间 · 真实脚点区域",coordinateDiagram_003:"场景",coordinateDiagram_004:"绿色区域为源码中的可行走边界，棕色为占地／固定障碍；圆圈为已知近距交互半径。引线标签区分近邻锚点，实际坐标不变；未绘制推测路线或强制轨迹。",casePage_001:"CASE 01 / COMBAT DESIGN",casePage_002:"CASE 02 / SYSTEM DESIGN",casePage_003:"CASE 03 / LEVEL DESIGN",casePage_004:"目标与体验",casePage_005:"机制与规则",casePage_006:"游戏演示",casePage_007:"参数与流程",casePage_008:"原型实现",casePage_009:"迭代与取舍",casePage_010:"验证与局限",casePage_011:"项目依据",casePage_012:"设计目标与玩家体验",casePage_013:"设计目标",casePage_014:"玩家体验目标",casePage_015:"",casePage_016:"核心机制与规则",casePage_017:"以上来自项目留存版本，部分录像含测试场景或测试说明字。它们证明当时的原型表现，不代表所有内容已经完成最终质量验收。",casePage_018:"关键位置与流程",casePage_019:"关键参数与状态",casePage_020:"实际实现方式",casePage_021:"问题、迭代与取舍",casePage_022:"验证结果与尚存问题",casePage_023:"当前边界",casePage_024:"部分原型已接入",casePage_025:"战斗系统  系统策划 关卡设计 ui设计",casePage_026:"基于当前demo记录制作",casePage_027:"本页目录",casePage_028:"IN THIS CASE",review_001:"DEVELOPMENT NOTES / RETROSPECTIVE",review_002:"开发复盘",review_003:"记录真实发生的问题、调整理由与当前结果。保留没有解决的接缝与功能边界，不把妥协写成已完成。",review_004:"ITERATION 0",review_005:"发现问题",review_006:"分析原因",review_007:"方案与修改",review_008:"结果与尚存问题",review_009:"验收记录来自项目已有测试资料；本网站制作期间未再次执行Godot测试。真实玩家访谈、体验数据与改动效果的量化比较仍待补充。",review_010:"战斗案例",review_011:"系统案例",review_012:"关卡案例",approvedLink_001:"打开 ↗",about_001:"ABOUT / PROFILE",about_002:"个人经历",about_003:"策划理论 + 原型实践 + 测试验证。求职方向为战斗、系统、关卡策划。",about_004:"GAME DESIGN CANDIDATE",about_005:"游戏策划求职者",about_006:"联系方式：1559661768@qq.com",about_007:"EDUCATION",about_008:"相关课程：",about_009:"游戏测试与需求分析实践",about_010:"专业与工具技能",about_011:"游戏体验与机制关注",about_012:"",about_013:"所获奖项",about_020:"简历、Demo与联系",about_021:"个人简历 PDF",about_022:"待提供可公开的脱敏PDF",about_023:"Demo 下载 / 试玩",about_024:"待准备正式分发版本",about_025:"求职邮箱",about_026:"待本人确认公开",about_027:"",common_001:"首页",updateTimeline_001:"有效判定",updateTimeline_002:"连击缓冲",updateTimeline_003:"帧",updateTimeline_004:"24FPS源帧 · 分阶段变速",updateTimeline_005:"24FPS源帧 · 有效播放 ",updateTimeline_006:" FPS",updateTimeline_007:" · 有效判定：内部帧",updateTimeline_008:" · 连击缓冲：内部帧",updateTimeline_009:" · 末段结束重置连击",updateTimeline_010:" · 独立收招 ",updateTimeline_011:"（直接回待机）",updateTimeline_012:" · 金雷位移 ",updateRules_001:"显示 · 与距离无关",updateRules_002:"隐藏 · 非当前任务目标",updateRules_003:"距离满足 · 仍需其他条件通过",updateRules_004:"距离不足 · 按E不触发交互",updateMap_001:"真实可行走边界和关键对象位置示意",updateMap_002:"坐标画布 ",updateMap_003:"；脚点或交互锚点，非人物可见外框。",updateMap_004:"标号",updateMap_005:"关键位置",generic_001:"新增策划案例",generic_002:"该案例的演示素材待补充。",generic_003:"案例待补充",updateMap_006:"X / Y",casePage_levels_rules:"关卡设计与引导流程",casePage_levels_goals_title:"设计目标与玩家体验",casePage_levels_goals_label:"设计目标",casePage_levels_experience_label:"玩家体验目标"},An={labels:In},jn={period:"2021.09 — 2025.06",school:"南京传媒学院",degree:"游戏策划与设计 · 本科",courses:["游戏概论","游戏引擎开发","游戏策划基础","游戏策划技巧","游戏角色设计","游戏测试分析"]},Nn={period:"2026.07 — 2026.08",title:"游戏测试工程师（培训）",organization:"中电金信",disclaimer:"《三角洲》帧数商业皮肤制作测试流程，《火影忍者手游》相关测试实践",project:"",items:["基于需求理解规则，识别逻辑漏洞与描述不明确的条件。","使用等价类、边界值方法组织测试用例，覆盖入口条件、获取与消耗、状态刷新等场景。","学习操作响应与伤害判定专项测试，以及缺陷记录、修复后的回归验证。","学习冒烟、兼容性和性能测试学习及辅助实践。"]},Tn=[{name:"chatGPT deepseek",level:"ai工具",detail:"善于使用ChatGPT、DeepSeek辅助功能需求分析、系统流程设计、配置表及测试用例整理。可以使用agent工具台例如 codex 连接引擎制作全流程，包括ui设计，帧动画形成，策划梳理等步骤。"},{name:"Godot  unity  UE5",level:"引擎",detail:"使用此类工具进行思路梳理、测试设计与用例组织。能够使用市面上主流的游戏引擎部分进行制作，通过unity MCP连接ai工具进行制作场景，通过godot MCP进行制作蓝图调教智慧树，使用Unreal MCP让ai参与制作。"},{name:"Word / Excel",level:"办公软件",detail:"会使用于文档整理、表格与测试资料，策划文档。"},{name:"XMind与墨刀",level:"思维导图",detail:"使用此类工具进行思路梳理、测试设计与用例组织。"},{name:"PerfDog",level:"测试工具",detail:"定位帧率与异常卡顿问题，进行问题分析。"},{name:"测试设计",level:"培训实践",detail:"需求分析、等价类、边界值、缺陷跟踪及回归验证。"}],Cn=["大学在校奖学金  ","腾讯元梦之星高校创作奖","腾讯游戏创作大赛赛区奖  "],qn="",zn=[{group:"FPS体验",names:"三角洲行动、无畏契约、和平精英、反恐精英",focus:"关注枪械手感、弹道逻辑与伤害判定。专题拆解文档与案例"},{group:"MOBA体验",names:"王者荣耀、英雄联盟",focus:"有长期游玩经历对moba类机制了解。"},{group:"主机与单机体验",names:"艾尔登法环、使命召唤系列、我的世界、战神系列、死亡搁浅",focus:""}],Dn=["个人简历文本（已去除重复段落）","当前Godot项目与留存验收记录"],Fn={education:jn,training:Nn,skills:Tn,awards:Cn,awardNote:qn,games:zn,sources:Dn},Rn=[{id:"hero",path:"media/hero.webp",kind:"native-screenshot",caption:"客栈院外实机截图；留存验收版本",originalSize:[1280,720],displaySize:[1280,720],bytes:297738,sourceSha256:"74ca105bbc54403e749ca1ae1834b3c2dd069d4e613f79f18df54e07b9d29b34",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"inventory",path:"media/inventory.webp",kind:"native-screenshot",caption:"最新背包换肤原生截图；真实6物品与25格容量",originalSize:[1280,720],displaySize:[1280,720],bytes:156368,sourceSha256:"c76bff1423b82e6f17c8519ecbd45380d144dd431192a7185d14d2469f08c4a0",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"dream",path:"media/dream.webp",kind:"native-screenshot",caption:"新游戏链路验收中的梦境觉醒实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:281720,sourceSha256:"cd29ea359bf38a7df3b9a0c849f13290b659da287b1884715deff5c1e8ada290",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"map",path:"media/map.webp",kind:"native-screenshot",caption:"地图原生验收截图；历史界面记录",originalSize:[1280,720],displaySize:[1280,720],bytes:194960,sourceSha256:"225660fb459217301630217f0185e1c0a2c870a4b1c1af0e4997245644c0a04b",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"thrust",path:"media/thrust.webp",kind:"native-screenshot",caption:"无双第三刀节奏优化实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:280308,sourceSha256:"2b1d6e3274c8af0251c784232fa07323d56d4ab2d0bd66a3195065b003665c3e",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"lightning",path:"media/lightning.webp",kind:"native-screenshot",caption:"无双第三刀金雷阶段实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:276204,sourceSha256:"226ad3455d2fcedd1bcf8a55977f06ca522736da6c81a7e3d3e0799b9dc63e50",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"manual",path:"media/manual.webp",kind:"native-screenshot",caption:"K武学实机验收截图；含测试说明字",originalSize:[1280,720],displaySize:[1280,720],bytes:306400,sourceSha256:"9b56301b29bb8fba274421f7bb6934b23ea1ce547227503cb06d31e350d0cc8a",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"cloth",path:"media/cloth.webp",kind:"native-screenshot",caption:"原布袋打开动画实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:123594,sourceSha256:"b796cef146dbadc3f687d554e246db90c3a2a08e8dd6647ab48cb44a6e6092e2",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"recovery",path:"media/recovery.webp",kind:"native-screenshot",caption:"第一刀独立收招实机截图",originalSize:[1280,720],displaySize:[1280,720],bytes:270852,sourceSha256:"ce97301b11bc06aaf695f184d6bccffa081eab954a008af60d493b310b1b266d",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"inventory-before",path:"media/inventory-before.webp",kind:"native-screenshot",caption:"早期背包实机验收记录；内容与新版数据可能不同",originalSize:[1280,720],displaySize:[1280,720],bytes:151118,sourceSha256:"fe9b5a4baed05c4fb7291bd9e7e3194a8d9b701a79f90993fc6d9d903aa1689d",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"guide",path:"media/guide.webp",kind:"native-screenshot",caption:"首次关图后非阻塞独白的原生验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:278320,sourceSha256:"b38117bed09f134fb3e2003dc8ff810cb40207e412b38de7b4e77cfb71f896dd",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"inn",path:"media/inn.webp",kind:"native-screenshot",caption:"客栈室内远距柜台目标的原生验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:266132,sourceSha256:"ee531432e942335e7969532040c860c08fbd556f92ce4424051df7c73f3d4d7d",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"hot-spring",path:"media/hot-spring.webp",kind:"native-screenshot",caption:"温泉状态与退出目标的原生验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:270480,sourceSha256:"c162dd7fc3d4bfb81777246c1a6eafd2f1085fdffde8219a3d82f5dd731aa289",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"prologue",path:"media/prologue.webp",kind:"native-screenshot",caption:"序章终逐笔书写完成后的原生组件验收截图",originalSize:[1280,720],displaySize:[1280,720],bytes:223006,sourceSha256:"36d77b7d575ea4112a4badbe2c98f4fa07a8a7f97fbfbf7fe53f53e369bdd5fb",processing:"仅复制后等比例缩小并编码WebP；源文件未修改"},{id:"opening-title",path:"media/opening-title.png",sourceType:"user-attachment",kind:"native-screenshot",caption:"《江湖人生》竹林开场菜单 · 用户提供的游戏截图",originalSize:[1273,744],displaySize:[1273,744],bytes:2093223,sourceSha256:"32e7324bc4821df6820d4b8e285d767d3339f8cf282f1f8a3043fc5e3d7982aa",processing:"原始PNG逐字节复制，完整保留画面比例与内容；仅在网页中等比例显示"},{id:"combat-goal-attack-sequence",path:"media/combat-goals/attack-sequence.png",kind:"user-supplied-design-reference",caption:"攻击顺序制作设想",originalSize:[1169,545],displaySize:[1169,545],bytes:33859,sourceSha256:"3cb2c71d45914b01db6262555d977012daf9c06bc5ca64bff0acede83ac994db",processing:"原样复制PNG；原始像素、画布与透明度未修改"},{id:"combat-goal-draft-01",path:"media/combat-goals/draft-frames-01.png",kind:"user-supplied-design-reference",caption:"草稿帧制作 01",originalSize:[1448,1086],displaySize:[1448,1086],bytes:1936620,sourceSha256:"a4990434f41d92e1cae49e43304cb58ff40a4d1b0f267fae7d888abe24428d0b",processing:"原样复制PNG；原始像素、画布与透明度未修改"},{id:"combat-goal-draft-02",path:"media/combat-goals/draft-frames-02.png",kind:"user-supplied-design-reference",caption:"草稿帧制作 02",originalSize:[1672,941],displaySize:[1672,941],bytes:854451,sourceSha256:"93edaa18436554d1230761748c7a63f0ed6a21cb66a8d3f170755129cbf38082",processing:"原样复制PNG；原始像素、画布与透明度未修改"},{id:"level-goal-flowchart",path:"media/level-goals/jianghu-complete-flowchart.png",kind:"user-supplied-design-reference",caption:"江湖人生完整流程设计图",originalSize:[6412,766],displaySize:[6412,766],bytes:215864,sourceSha256:"15f8df9f42e6157e4b50ee74d34cb8a18a534fe73e6361eed62bb19586d85385",processing:"原样复制PNG；保留全部节点、文字、连接线与原始比例"}],Un=[{id:"normal",path:"media/normal.mp4",source:"youxitu/normal_attack_fx_repair_v1/game_three_hit_combo_with_audio.mp4",caption:"普通三连击真实游戏视口帧合成预览；保留对应原声",kind:"native-frame-preview",code:0,bytes:361674},{id:"wushuang",path:"media/wushuang.mp4",source:"youxitu/wushuang_pace_v2/previews/wushuang_pace_v2_gameplay.mp4",caption:"无双节奏迭代实机验收录像，含测试说明字",kind:"native-test-video",code:0,bytes:2429852},{id:"manual",path:"media/manual.mp4",source:"youxitu/manual_combo_1344333025_v1/previews/manual_combo_gameplay.mp4",caption:"K秘籍学习与左右三连击实机验收录像；秘籍由测试夹具提供，非正式场景掉落",kind:"native-test-video",code:0,bytes:3624048},{id:"map",path:"media/map.mp4",source:"youxitu/map_crumple_v2/map_crumple_normal_with_audio.mp4",caption:"地图纸团展开原生UI验收录像",kind:"native-test-video",code:0,bytes:739632},{id:"prologue",path:"media/prologue.mp4",source:"youxitu/prologue_ending_v1/previews/prologue_ending_5s.mp4",caption:"序章结束过场成片预览，非玩家操作录像",kind:"cutscene-preview",code:0,bytes:547409}],On=[{id:"combat",kind:"combat",href:"combat.html",en:"COMBAT DESIGN",title:"战斗系统",question:"一次按键，如何成为一段清楚、有节奏的攻击？",tags:"输入攻击/ 收招衔接 / 无双状态",showOnHome:!0},{id:"systems",kind:"systems",href:"systems.html",en:"SYSTEM DESIGN",title:"交互系统",question:"用一致的状态规则，串起物品、武学与交互。",tags:"背包系统交互/ 地图系统交互 / 目标提示",showOnHome:!0},{id:"levels",kind:"levels",href:"levels.html",en:"LEVEL DESIGN",title:"关卡策划",question:"如何让玩家知道下一步，同时保留自由探索？",tags:"剧情流程设计 / 木桩教学 / 非强制引导",showOnHome:!0}],Kn="开发复盘",Hn=[{title:"无双前两刀收招过长",problem:"无双前两刀收招过长",cause:"独立收招包含大量重复站立尾帧：38帧与29帧。",change:"只精简实际播放序列，保留回拉与落刀；第1段选本地0–11、36–37，第2段选0–12。原PNG留存。",result:"收招时长分别缩短为0.530303与0.492424秒；连续攻击跳过完整收招。第1段原姿势切口仍使用短透明度交接，并非新补画。",status:"已接入；有既有原生回归记录",pending:!1,source:"youxitu/wushuang_pace_v2/README.md；scripts/hero_wushuang_attack_animations.gd:13–16；scripts/hero.gd:1021–1047"},{title:"第三刀慢，突进短",problem:"第三刀慢，突进短",cause:"旧配置主体1.860873秒，实际突进120像素/0.220秒；爆发阶段不够集中。",change:"按阶段重设绝对速度；突刺2.0×、金雷3.0×，突进改为168像素/0.125秒；按同一时间表重定时原声。",result:"主体1.303241秒；蓄势阶段无伤害，实际运动与突刺窗口重合，4像素子步碰撞仍保留。",status:"已接入；有既有原生回归记录",pending:!1,source:"scripts/hero_wushuang_third_animation.gd:11–25；scripts/hero.gd:33–34,1717–1733；scripts/game.gd:2064–2077"},{title:"K第二招缺少完整回站立动作",problem:"K第二招缺少完整回站立动作",cause:"源106–111只回落至低位马步；复用第一招会出现约42–48像素后跳；两次生成草稿的脚底、剑型及像素规格未通过。",change:"不采用复用/失败补画；依照最新接入要求，第二招独停直接idle，连续第三次输入跳过完整收招。",result:"技能功能可用，第二刀独停的姿势突变尚未解决；不能将该妥协写成已补齐自然收招。",status:"功能接入；美术过渡待完善",pending:!0,source:"scripts/hero.gd:814–844；youxitu/recovery_2_fixed_1344333025_v1/analysis/QUALITY_AUDIT.md"},{title:"新增K与原J/无双可能争用动作和声音",problem:"新增K与原J/无双可能争用动作和声音",cause:"多个攻击入口共用Hero与AnimationPlayer，需要避免跨分支续段和暂停时音画分离。",change:"新K保留独立序列标志、单下一段缓存、真实按键筛选及音频暂停同步；原J入口遇K直接拒绝。",result:"既有273项原生检查覆盖未学习拒绝、背包学习、1/2/3次K、左右、存档和暂停；未自动在正式场景投放秘籍。",status:"已接入；获取入口待配置",pending:!0,source:"scripts/game.gd:693–747；scripts/hero.gd:746–844,858–866；youxitu/manual_combo_1344333025_v1/tests/native_results.json"},{title:"提示只在靠近时出现，玩家难判断下一目标",problem:"提示只在靠近时出现，玩家难判断下一目标",cause:"导航显示与近距交互资格耦合",change:"HUD按剧情标志选择单一目标，E执行仍使用原距离／区域条件",result:"留存原生回归验证远处显示且远程E拒绝，靠近后原流程可执行",status:"已接入",pending:!1,source:"scripts/hud.gd:164–229；youxitu/story_interaction_v1/tests/interaction_indicator_results.json"},{title:"开局地图教学可能限制探索或重复要求开图",problem:"开局地图教学可能限制探索或重复要求开图",cause:"教学与模态剧情容易共用控制锁；早开图需处理旧页面",change:"起身结束即恢复playing，使用非阻塞指南；首次关图替换旧引导并只调度一次后续独白",result:"留存测试覆盖真实WASD、提前开图、重复关图、菜单延后和梦境排除",status:"已接入",pending:!1,source:"scripts/opening_sequence.gd:185–265；youxitu/opening_post_map_guide_v1/tests/native_results.json"},{title:"新背包参考图的示例功能与原模型不一致",problem:"新背包参考图的示例功能与原模型不一致",cause:"参考有30格、整理、多装备槽及示例属性，原模型只有25格及武器装备入口",change:"只换底板和动态显示位置，额外5格及整理保持禁用，真实数据继续驱动UI",result:"留存241项换肤检查无失败；整理、卸下并未被伪造为已实现",status:"视觉接入完成；扩展功能未实现",pending:!0,source:"scripts/inventory_ui.gd:363–428,591–689；youxitu/inventory_skin_20261016_v1/README.md",compare:["inventory-before","inventory"]}],Bn={title:Kn,items:Hn},Yn=Object.assign({"../content/articles/combat.md":De,"../content/articles/levels.md":Fe,"../content/articles/systems.md":Re}),Wn=Object.assign({"../content/article-structure/combat.json":Be,"../content/article-structure/levels.json":Je,"../content/article-structure/systems.json":en}),Xt={};for(const[t,e]of Object.entries(Yn)){const n=t.split("/").pop().replace(/\.md$/,""),o=Wn["../content/article-structure/"+n+".json"];if(!o)throw new Error("Article structure missing: "+n);Xt[n]=ln(e,o)}const Gn={site:bn,home:Mn,copy:An,profile:Fn,media:Rn,videos:Un,cases:On,retrospective:Bn,articles:Xt};let qt=()=>{},zt=()=>{},Dt=()=>{},Ft=()=>{},Rt=()=>{},Ut=()=>{},Ot=()=>{},Kt=()=>{},Y=structuredClone(Gn),z,ft,Jt,Z,Vt,Zt,Qt,te,vt,ee,Q,st;function ne(){st=ue(Y),{site:z,home:ft,copy:Jt,profile:Z,media:Vt,videos:Zt,cases:Qt,retrospective:te}=st.model,{combat:vt,systems:ee,levels:Q}=st.model.articles}ne();const u=t=>Jt.labels[t]??"",kt=t=>t.replace(/\[\[copy:([a-zA-Z0-9_]+)\]\]/g,(e,n)=>c(u(n))),c=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),F=t=>c(t).replace(/\r?\n/g,"<br>"),it=t=>{const e=String(t??"").trim();return!e||/[\u0000-\u001f\\]/.test(e)||e.startsWith("//")?"#":/^(?:https?:\/\/|mailto:|#)/i.test(e)?e:/^[a-z][a-z0-9+.-]*:/i.test(e)?"#":e},Xn=t=>typeof t=="string"?t:(t==null?void 0:t.body)||(t==null?void 0:t.detail)||(t==null?void 0:t.text)||"",X=t=>Array.isArray(t)?t:[],W=location.pathname.split("/").pop()||"index.html",yt=t=>Vt.find(e=>e.id===t),Jn=t=>Zt.find(e=>e.id===t&&e.code===0&&e.bytes>0),oe='<span aria-hidden="true">↗</span>';function B(t,e=""){const n=yt(t);return n?'<figure class="media '+e+'"><img src="./'+c(n.path)+'" width="'+n.displaySize[0]+'" height="'+n.displaySize[1]+'" alt="'+c(n.caption)+'" loading="lazy"><figcaption><span class="media-kind">[[copy:image_002]]</span>'+c(n.caption)+"</figcaption></figure>":'<div class="empty-media">[[copy:image_001]]</div>'}function rt(t,e="hero"){const n=Jn(t),o=yt(e);return n?'<figure class="media"><video controls playsinline preload="none" '+(o?'poster="./'+c(o.path)+'"':"")+' aria-label="'+c(n.caption)+'"><source src="./'+c(n.path)+'" type="video/mp4">[[copy:movie_002]]</video><figcaption><span class="media-kind">'+(n.kind==="cutscene-preview"?c(u("movie_003")):n.kind==="native-frame-preview"?c(u("movie_004")):n.kind==="ui-animation-preview"?c(u("movie_005")):c(u("movie_006")))+"</span>"+c(n.caption)+"[[copy:movie_007]]</figcaption></figure>":'<div class="empty-media">[[copy:movie_001]]</div>'}function xt(t,e,n=!1){return'<a class="button '+(n?"secondary":"")+'" href="'+c(it(t))+'">'+c(e)+oe+"</a>"}function Et(t){const n={"about.html":"#about-me","combat.html":"#cases","systems.html":"#cases","levels.html":"#cases"}[t];return n?'<div class="detail-page-return"><a class="button secondary detail-return-button" href="./index.html?detail-return=1'+n+'"><span aria-hidden="true">←</span>'+c(ft.systemInteraction.back.label)+"</a></div>":""}function ie(t,e=!1){const n=it(z.profile.resumeUrl);return'<a class="button secondary" href="'+c(n)+'" '+(e?"download":'target="_blank" rel="noopener noreferrer"')+">"+c(t)+oe+"</a>"}function pt(t){return'<ul class="clean-list">'+X(t).map(e=>"<li>"+F(Xn(e))+"</li>").join("")+"</ul>"}function Vn(t){return'<ol class="flow">'+X(t).map(e=>"<li><strong>"+c(_e(e.title||e.name||e.label||""))+"</strong><small>"+F(e.detail||e.body||e.description)+"</small></li>").join("")+"</ol>"}function St(t){return'<div class="rules">'+X(t).map(e=>'<div class="rule"><h3>'+c(e.title||e.name)+"</h3><p>"+F(e.body||e.detail||e.description)+"</p></div>").join("")+"</div>"}function ae(t){var e;return(e=t==null?void 0:t.headers)!=null&&e.length?'<div class="table-wrap"><table><thead><tr>'+t.headers.map(n=>'<th scope="col">'+c(n)+"</th>").join("")+"</tr></thead><tbody>"+X(t.rows).map(n=>"<tr>"+n.map(o=>"<td>"+c(o)+"</td>").join("")+"</tr>").join("")+"</tbody></table></div>":""}function Zn(t){return'<details><summary>[[copy:evidence_001]]</summary><p class="small">[[copy:evidence_002]]</p><ul class="source-list">'+X(t).map(e=>"<li><code>"+c(typeof e=="string"?e:e.file)+(e.lines?":"+c(e.lines):"")+"</code>"+(e.claim?"<p>"+F(e.claim)+"</p>":"")+"</li>").join("")+"</ul></details>"}function Qn(t){return'<div class="validation">'+X(t).map(e=>'<div class="validation-item"><span class="validation-icon" aria-hidden="true">◇</span><div><h3>'+c(e.label||e.title)+"</h3><p>"+F(e.result||e.body)+"</p>"+(e.source?"<code>"+c(typeof e.source=="string"?e.source:JSON.stringify(e.source))+"</code>":"")+"</div></div>").join("")+"</div>"}function to(t,{showSource:e=!0}={}){return X(t).map(n=>'<div class="iteration"><div class="status-row"><span class="badge '+(/待|未|局限|部分|妥协/.test(n.status||"")?"pending":"note")+'">'+c(n.status||u("iterations_001"))+"</span></div><h3>"+c(n.problem||n.title)+"</h3><dl><dt>[[copy:iterations_002]]</dt><dd>"+F(n.cause)+"</dd><dt>[[copy:iterations_003]]</dt><dd>"+F(n.change)+"</dd><dt>[[copy:iterations_004]]</dt><dd>"+F(n.result)+"</dd></dl>"+(e&&n.source?'<p class="small">[[copy:iterations_005]]<code>'+c(typeof n.source=="string"?n.source:JSON.stringify(n.source))+"</code></p>":"")+"</div>").join("")}function O(t,e,n,o){return'<section class="article-section" id="'+t+'"><h2><span class="num">'+e+"</span>"+c(n)+"</h2>"+o+"</section>"}function eo(){return W==="index.html"?'<a class="skip" href="#main">'+c(u("header_002"))+'</a><header class="header cover-header"><div class="cover-header-inner"><nav id="nav" class="nav" aria-label="'+c(u("header_005"))+'">'+z.nav.map(([t,e],n)=>'<a href="./'+c(it(t))+'" style="--nav-order:'+n+'">'+c(e)+"</a>").join("")+"</nav></div></header>":'<a class="skip" href="#main">[[copy:header_002]]</a><header class="header"><div class="wrap header-inner"><a class="brand" href="./index.html" aria-label="[[copy:header_001]]"><span class="brand-mark">[[copy:header_003]]</span><span>'+c(z.brand)+"<small>[[copy:header_004]]"+c(z.version)+'</small></span></a><button class="menu-toggle" aria-expanded="false" aria-controls="nav">[[copy:header_006]]</button><nav id="nav" class="nav" aria-label="[[copy:header_005]]">'+z.nav.map(([t,e])=>'<a href="./'+c(it(t))+'" '+(t===W?'aria-current="page"':"")+">"+c(e)+"</a>").join("")+"</nav></div></header>"}function no(){return'<footer class="footer"><div class="wrap footer-inner"><div><p>[[copy:footer_001]]</p><p>[[copy:footer_002]]'+c(z.updated)+" / "+c(z.version)+'</p></div><div><p><a href="./about.html#contact">[[copy:footer_003]]</a>　·　<a href="./about.html#contact">[[copy:footer_004]]</a></p><p>[[copy:footer_005]]</p></div></div></footer>'}function _t(t,e,n,o=""){return'<div class="page-head"><div class="wrap"><div class="breadcrumbs"><a href="./index.html">[[copy:pageHead_001]]</a> / '+c(e)+'</div><p class="eyebrow">'+c(t)+"</p><h1>"+c(e)+'</h1><p class="subtitle">'+F(n)+"</p>"+o+"</div></div>"}function le(){const t=ft;return Le(t.cover,{playthroughURL:dt(z.profile.demoUrl)})+oo(t.shortcuts)+lo(t.aboutMe)+Gt(t.previews,{playthroughURL:dt(z.profile.demoUrl)})+ao(t.systemAnalysis)+io(t.ending)}function oo(t){return'<section class="home-entry-navigation" id="entry-navigation" aria-label="'+c(t.label)+'">'+Ie(t)+"</section>"}function io(t){const e=z.profile,n=e.emailApproved&&e.email?'<a class="ending-email" href="mailto:'+c(e.email)+'">'+c(e.email)+"</a>":'<a class="text-link" href="./about.html#contact">'+c(t.contactFallback)+"</a>";return'<section class="section home-ending" id="ending"><div class="wrap home-ending-grid"><div><p class="eyebrow">'+c(t.eyebrow)+"</p><h2>"+c(t.title)+'</h2><p class="ending-copy">'+c(t.intro)+'</p></div><div><p class="ending-contact-label">'+c(t.contactLabel)+"</p>"+n+'<div class="ending-phone"><p class="ending-contact-label">'+c(t.phoneLabel)+'</p><span class="ending-phone-number">'+c(t.phoneNumber)+'</span></div><div class="actions">'+ie(t.resume.label,!0)+xt(t.back.href,t.back.label,!0)+"</div></div></div></section>"}function ao(t){return ve(t)}function lo(t){return t?'<section class="section home-about" id="about-me"><div class="wrap home-about-grid"><div><p class="eyebrow">'+c(t.eyebrow)+"</p><h2>"+c(t.title)+'</h2><div class="about-intro">'+String(t.intro??"").split(/\n\s*\n/).map(e=>"<p>"+F(e)+"</p>").join("")+'</div><div class="actions">'+ie(t.button.label)+xt(t.experienceButton.href,t.experienceButton.label,!0)+'</div></div><dl class="about-facts">'+t.items.map(e=>"<div><dt>"+c(e.label)+"</dt><dd>"+c(e.text)+"</dd></div>").join("")+"</dl></div></section>":""}function ro(){return'<div class="explorer" id="timeline"><h3>[[copy:timelineExplorer_001]]</h3><p class="small">[[copy:timelineExplorer_002]]</p><div class="control-row"><label for="timeline-stage">[[copy:timelineExplorer_003]]</label><select id="timeline-stage">'+vt.timeline.map((t,e)=>'<option value="'+e+'" '+(e===5?"selected":"")+">"+c(t.name)+"</option>").join("")+'</select></div><div class="timeline-track" aria-hidden="true" id="timeline-track"></div><div class="timeline-axis"><span>[[copy:timelineExplorer_004]]</span><span id="timeline-end"></span></div><div class="timeline-legend"><span><i class="legend-dot"></i>[[copy:timelineExplorer_005]]</span><span><i class="legend-dot green"></i>[[copy:timelineExplorer_006]]</span></div><div class="timeline-output" id="timeline-output" aria-live="polite"></div><p class="small">[[copy:timelineExplorer_007]]</p></div>'}function so(){return'<div class="explorer"><h3>[[copy:interactionExplorer_001]]</h3><p class="small">[[copy:interactionExplorer_002]]</p><div class="control-row"><label for="quest-state">[[copy:interactionExplorer_003]]</label><select id="quest-state"><option value="active">[[copy:interactionExplorer_004]]</option><option value="locked">[[copy:interactionExplorer_005]]</option><option value="done">[[copy:interactionExplorer_006]]</option></select><label class="check-label"><input type="checkbox" id="in-range">[[copy:interactionExplorer_007]]</label></div><div class="interaction-stage"><div class="state-box"><small>[[copy:interactionExplorer_008]]</small><strong id="marker-result"></strong></div><div class="state-box"><small>[[copy:interactionExplorer_009]]</small><strong id="range-result"></strong></div></div><p class="small">[[copy:interactionExplorer_010]]</p></div>'}function xo(){var e,n;return(n=(e=Q.map)==null?void 0:e.points)!=null&&n.length?'<div class="explorer"><h3>[[copy:coordinateDiagram_002]]</h3><div class="control-row"><label for="map-scene">[[copy:coordinateDiagram_003]]</label><select id="map-scene">'+[Q.map,...X(Q.additionalMaps)].map((o,s)=>'<option value="'+s+'">'+c(o.scene)+"</option>").join("")+'</select></div><div id="coordinate-view"></div><p class="small">[[copy:coordinateDiagram_004]]</p></div>':'<p class="truth-note">[[copy:coordinateDiagram_001]]</p>'}function re(t=ft){return{...t.previews,groups:t.previews.groups.map((e,n)=>n===1?{...e,title:t.systemInteraction.title,modules:t.systemInteraction.chapters}:e)}}function po(){return'<div class="combat-goal-images">'+["combat-goal-attack-sequence","combat-goal-draft-01","combat-goal-draft-02"].map(e=>{const n=yt(e);if(!n)return"";const o="./"+n.path;return'<figure><a href="'+c(o)+'" target="_blank" rel="noopener"><img src="'+c(o)+'" width="'+n.originalSize[0]+'" height="'+n.originalSize[1]+'" alt="'+c(n.caption)+'" loading="lazy" decoding="async"></a><figcaption>'+c(n.caption)+"</figcaption></figure>"}).join("")+"</div>"}function bt(t,e){var d;if(t==="systems"){const i=ft.systemInteraction;return _t(i.eyebrow,i.title,i.intro)+Ce(i)+Gt(re(),{onlyGroup:1,standalone:!0,chapterLabels:i.labels,endContent:Et(W)})}const n={combat:u("casePage_001"),systems:u("casePage_002"),levels:u("casePage_003")}[t]||((d=Qt.find(i=>i.id===new URLSearchParams(location.search).get("case")))==null?void 0:d.en)||u("generic_001"),o=[["goals",u(t==="levels"?"casePage_levels_goals_title":"casePage_004")],["rules",u(t==="levels"?"casePage_levels_rules":"casePage_005")],["demo",u("casePage_006")],["parameters",u("casePage_007")],["implementation",u("casePage_008")],["iterations",t==="levels"?e.uiIterations.title:u("casePage_009")],["validation",u("casePage_010")],["evidence",u("casePage_011")]].filter(([i])=>!["combat","levels"].includes(t)||!["implementation","validation","evidence"].includes(i)),s=t==="combat"?'<div class="media-grid">'+rt("normal","hero")+rt("manual","manual")+"</div>"+rt("wushuang","lightning")+'<div class="media-grid">'+B("recovery")+B("lightning")+"</div>":t==="systems"?B("inventory")+'<div class="media-grid">'+B("cloth")+B("map")+"</div>"+rt("map","map"):t==="levels"?'<div class="media-grid">'+B("guide")+B("dream")+'</div><div class="media-grid">'+B("inn")+B("hot-spring")+"</div>"+rt("prologue","prologue"):'<div class="empty-media">'+c(u("generic_002"))+"</div>",a=ae(e.parameters)+(t==="combat"?ro():t==="systems"?so():t==="levels"?xo():""),l=O("goals","01",u(t==="levels"?"casePage_levels_goals_title":"casePage_012"),'<div class="two-col"><div class="panel"><h3>'+c(u(t==="levels"?"casePage_levels_goals_label":"casePage_013"))+"</h3>"+pt(e.goals)+'</div><div class="panel"><h3>'+c(u(t==="levels"?"casePage_levels_experience_label":"casePage_014"))+"</h3>"+pt(e.experience)+"</div></div>"+(t==="combat"?po():t==="levels"?we(yt("level-goal-flowchart")):"")+'<p class="small">[[copy:casePage_015]]</p>')+O("rules","02",u(t==="levels"?"casePage_levels_rules":"casePage_016"),St(e.rules)+(t==="levels"?"":Vn(e.flow)))+O("demo","03",u("casePage_006"),s+(t==="generic"?"":'<p class="truth-note">[[copy:casePage_017]]</p>'))+O("parameters","04",u(t==="levels"?"casePage_018":"casePage_019"),a)+(["combat","levels"].includes(t)?"":O("implementation","05",u("casePage_020"),St(e.implementation)))+O("iterations",t==="combat"?"05":"06",t==="levels"?e.uiIterations.title:u("casePage_021"),t==="levels"?Ee(e.uiIterations):to(e.iterations,{showSource:t!=="combat"}))+(["combat","levels"].includes(t)?"":O("validation","07",u("casePage_022"),Qn(e.validation)+'<div class="callout"><h3>[[copy:casePage_023]]</h3>'+pt(e.limitations)+"</div>"))+(["combat","levels"].includes(t)?"":O("evidence","08",u("casePage_011"),Zn(e.sources)));return _t(n,e.title,e.summary,'<div class="status-row"><span class="badge">'+c(e.status||u("casePage_024"))+'</span><span class="badge pending">[[copy:casePage_025]]</span><span class="badge note">[[copy:casePage_026]]</span></div>')+'<div class="wrap reading-grid"><aside class="toc" aria-label="[[copy:casePage_027]]"><small>[[copy:casePage_028]]</small>'+o.map(([i,x])=>'<a href="#'+i+'">'+c(x)+"</a>").join("")+'</aside><article class="article">'+l+Et(W)+"</article></div>"}function co(){return _t(u("review_001"),u("review_002"),u("review_003"))+'<div class="wrap section"><div class="review-grid">'+te.items.map((t,e)=>'<article class="review-step '+(t.compare?"wide":"")+'" id="review-'+(e+1)+'"><p class="eyebrow">[[copy:review_004]]'+(e+1)+'</p><span class="badge '+(t.pending?"pending":"note")+'">'+c(t.status)+"</span><h2>"+c(t.title)+"</h2><dl><dt>[[copy:review_005]]</dt><dd>"+F(t.problem)+"</dd><dt>[[copy:review_006]]</dt><dd>"+F(t.cause)+"</dd><dt>[[copy:review_007]]</dt><dd>"+F(t.change)+"</dd><dt>[[copy:review_008]]</dt><dd>"+F(t.result)+"</dd></dl>"+(t.compare?'<div class="media-grid">'+B(t.compare[0])+B(t.compare[1])+"</div>":"")+'<p class="small">[[copy:iterations_005]]<code>'+c(t.source)+"</code></p></article>").join("")+'</div><p class="truth-note">[[copy:review_009]]</p><div class="actions">'+xt("./combat.html",u("review_010"))+xt("./systems.html",u("review_011"),!0)+xt("./levels.html",u("review_012"),!0)+"</div></div>"}function Ht(t,e,n){const o=z.profile,s=o[t+"Url"];return o[t+"Approved"]&&s&&it(s)!=="#"?'<a class="contact-item active" href="'+c(it(s))+'" target="_blank" rel="noopener noreferrer"><strong>'+c(e)+"</strong><span>[[copy:approvedLink_001]]</span></a>":'<div class="contact-item"><strong>'+c(e)+"</strong><span>"+c(n)+"</span></div>"}function _o(){const t=z.profile,e=Z.education,n=Z.training;return _t(u("about_001"),u("about_002"),u("about_003"))+'<div class="wrap section"><section class="article-section profile-lead" id="profile"><div><p class="eyebrow">[[copy:about_004]]</p><h2>'+c(t.nameApproved?t.displayName:u("about_005"))+'</h2><p class="profile-summary">'+c(z.intro)+'</p><div class="roles">'+z.roles.map(o=>'<span class="role">'+c(o)+"</span>").join("")+'</div><p class="small">[[copy:about_006]]</p></div><div class="panel"><p class="meta-label">[[copy:about_007]]</p><h3>'+c(e.school)+"</h3><p>"+c(e.period)+"<br>"+c(e.degree)+'</p><p class="small">[[copy:about_008]]'+e.courses.map(c).join("、")+"。</p></div></section>"+O("training","01",u("about_009"),'<p class="eyebrow">'+c(n.period)+"</p><h3>"+c(n.title)+" · "+c(n.organization)+"</h3><p>"+c(n.project)+'</p><p class="training-note">'+c(n.disclaimer)+"</p>"+pt(n.items))+O("skills","02",u("about_010"),'<div class="profile-grid">'+Z.skills.map(o=>'<div class="skill"><span class="badge note">'+c(o.level)+"</span><h3>"+c(o.name)+"</h3><p>"+F(o.detail)+"</p></div>").join("")+"</div>")+O("games","03",u("about_011"),St(Z.games.map(o=>({title:o.group,body:o.names+"。"+o.focus})))+'<p class="small">[[copy:about_012]]</p>')+O("awards","04",u("about_013"),pt(Z.awards)+'<p class="small">'+c(Z.awardNote)+"</p>")+O("contact","06",u("about_020"),'<div class="contact-list">'+Ht("resume",u("about_021"),u("about_022"))+Ht("demo",u("about_023"),u("about_024"))+(t.emailApproved&&t.email?'<a class="contact-item active" href="mailto:'+c(t.email)+'"><strong>[[copy:about_025]]</strong><span>'+c(t.email)+"</span></a>":'<div class="contact-item"><strong>[[copy:about_025]]</strong><span>[[copy:about_026]]</span></div>')+'</div><p class="small">[[copy:about_027]]</p>')+Et(W)+"</div>"}const fo={"index.html":le,"combat.html":()=>bt("combat",vt),"systems.html":()=>bt("systems",ee),"levels.html":()=>bt("levels",Q),"retrospective.html":co,"about.html":_o,"case.html":()=>{const t=new URLSearchParams(location.search).get("case"),e=st.model.articles[t];return e?bt("generic",e):_t(u("generic_001"),u("generic_003"),u("generic_002"))}};function Pt(){var t,e,n;qt(),Ft(),Dt(),zt(),Rt(),Ut(),Kt(),Ot(),ne(),document.body.classList.toggle("immersive-home",W==="index.html"),document.title=dt(((W==="case.html"?(t=Y.articles[new URLSearchParams(location.search).get("case")])==null?void 0:t.title:((e=z.nav.find(o=>o[0]===W))==null?void 0:e[1])||((n=z.pageTitles)==null?void 0:n[W]))||u("common_001"))+" · "+z.title),document.querySelector("#app").replaceChildren(Bt(kt(eo()+'<main id="main">'+(fo[W]||le)()+"</main>"+no()))),uo(),zt=$e(document.querySelector(".level-goal-flowchart"),Y.home.previews.labels),Dt=Se(document.querySelector(".ui-iterations"),Y.home.previews.labels),Kt=je(document.querySelector(".hero-carousel")),Ot=qe(document.querySelector(".home-project-previews"),W==="systems.html"?re(Y.home):Y.home.previews,{catalog:new URLSearchParams(location.search).has("content_catalog")}),Ut=ze(document.querySelector(".header")),Rt=Me(document.querySelector(".immersive-cover"),document.querySelector(".cover-header")),qt=ye(document.querySelector("#system-analysis"),Y.home.systemAnalysis,{catalog:new URLSearchParams(location.search).has("content_catalog")}),Ft=Ae(),window.__portfolioContentFields=()=>he(document.body,st.fields),be(),window.dispatchEvent(new CustomEvent("portfolio:preview-rendered")),window.parent!==window&&window.parent.postMessage({type:"portfolio:preview-rendered"},location.origin)}function uo(){var o;(o=document.querySelector(".menu-toggle"))==null||o.addEventListener("click",s=>{const a=s.currentTarget.getAttribute("aria-expanded")!=="true";s.currentTarget.setAttribute("aria-expanded",String(a)),document.querySelector(".nav").classList.toggle("open",a)}),document.querySelectorAll("video:not([data-preview-video])").forEach(s=>s.addEventListener("play",()=>document.querySelectorAll("video:not([data-preview-video])").forEach(a=>{a!==s&&a.pause()})));const t=document.querySelector("#timeline-stage");if(t){let s=function(){const l=vt.timeline[Number(t.value)],d=l.frameDurations||Array.from({length:l.frames},()=>1/l.fps),i=[0];d.forEach(p=>i.push(i.at(-1)+p));const x=i.at(-1),f=Array.isArray(l.active[0])?l.active:[l.active],m=(p,g,r)=>'<span class="'+g+'" style="left:'+i[p[0]]/x*100+"%;width:"+(i[p[1]+1]-i[p[0]])/x*100+'%">'+c(r)+"</span>",w=l.buffer&&l.buffer[0]>=0;document.querySelector("#timeline-track").replaceChildren(Bt(kt(f.map(p=>m(p,"timeline-active",u("updateTimeline_001"))).join("")+(w?m(l.buffer,"timeline-buffer",u("updateTimeline_002")):"")))),document.querySelector("#timeline-end").textContent=x.toFixed(3)+"s / "+l.frames+u("updateTimeline_003"),document.querySelector("#timeline-output").textContent=(l.variableSpeed?u("updateTimeline_004"):u("updateTimeline_005")+l.fps+u("updateTimeline_006"))+u("updateTimeline_007")+f.map(p=>p.join("–")).join("、")+(w?u("updateTimeline_008")+l.buffer.join("–"):u("updateTimeline_009"))+u("updateTimeline_010")+l.recoveryFrames+u("updateTimeline_003")+(l.recoveryFrames?" / "+l.recoveryDuration.toFixed(3)+"s":u("updateTimeline_011"))+(l.dash?u("updateTimeline_012")+l.dash.distance+"px / "+l.dash.duration.toFixed(3)+"s":"")};const a=()=>{s(),gt(document.querySelector("#timeline"))};t.addEventListener("change",a),a()}const e=document.querySelector("#quest-state");if(e){let s=function(){const l=e.value==="active",d=document.querySelector("#in-range").checked;document.querySelector("#marker-result").textContent=u(l?"updateRules_001":"updateRules_002"),document.querySelector("#range-result").textContent=u(d?"updateRules_003":"updateRules_004")};const a=()=>{s(),gt(e.closest(".explorer"))};e.addEventListener("change",a),document.querySelector("#in-range").addEventListener("change",a),a()}const n=document.querySelector("#map-scene");if(n){let s=function(){const d=a[Number(n.value)],i=d.bounds,x=i.width,f=i.height,m=r=>r.map(h=>h.join(",")).join(" "),w=X(d.obstacles).map(r=>'<polygon points="'+m(r.polygon)+'" fill="var(--diagram-obstacle)" fill-opacity=".75" stroke="var(--diagram-obstacle-line)" stroke-width="1.5"/>').join(""),p=d.points.map((r,h)=>{const M=d.points.some((C,I)=>I!==h&&Math.hypot(r.x-C.x,r.y-C.y)<32),y=r.x+(M?h%2?48:-48:0),N=r.y+(M?h%2?-33:33:0);return(r.radius?'<circle cx="'+r.x+'" cy="'+r.y+'" r="'+r.radius+'" fill="var(--gold)" fill-opacity=".07" stroke="var(--gold)" stroke-opacity=".4" stroke-dasharray="6 5"/>':"")+(M?'<line x1="'+r.x+'" y1="'+r.y+'" x2="'+y+'" y2="'+N+'" stroke="var(--gold)" stroke-width="2"/><circle cx="'+r.x+'" cy="'+r.y+'" r="4" fill="var(--gold)"/>':"")+'<circle cx="'+y+'" cy="'+N+'" r="15" fill="'+(r.type==="spawn"?"var(--diagram-accent)":"var(--gold)")+'" stroke="var(--ink)" stroke-width="3"/><text x="'+y+'" y="'+(N+6)+'" text-anchor="middle" style="fill:var(--ink)" font-size="18" font-weight="600">'+(h+1)+"</text>"}).join(""),g=Array.from({length:9},(r,h)=>'<line x1="'+x/8*h+'" y1="0" x2="'+x/8*h+'" y2="'+f+'" stroke="var(--diagram-grid)" stroke-width="1"/>').join("")+Array.from({length:7},(r,h)=>'<line x1="0" y1="'+f/6*h+'" x2="'+x+'" y2="'+f/6*h+'" stroke="var(--diagram-grid)" stroke-width="1"/>').join("");document.querySelector("#coordinate-view").innerHTML=kt('<svg class="coordinate-map" viewBox="0 0 '+x+" "+f+'" role="img" aria-label="'+c(d.scene)+c(u("updateMap_001"))+'">'+g+'<polygon points="'+m(d.walkPolygon)+'" fill="var(--diagram-walk)" stroke="var(--diagram-accent)" stroke-width="3"/>'+w+p+'</svg><p class="small">'+c(d.coordinateSystem||u("updateMap_002")+x+"×"+f+u("updateMap_003"))+"</p>"+ae({headers:[u("updateMap_004"),u("updateMap_005"),u("updateMap_006")],rows:d.points.map((r,h)=>[String(h+1),r.name,Number(r.x.toFixed(2))+" / "+Number(r.y.toFixed(2))])})+'<p class="small">'+c(d.note||"")+"</p>")};const a=[Q.map,...X(Q.additionalMaps)],l=()=>{s(),gt(document.querySelector("#coordinate-view"))};n.addEventListener("change",l),l()}}Pt();const ho=new URLSearchParams(location.search).has("editor_preview")||new URLSearchParams(location.search).has("editorPreview");ho&&(window.addEventListener("message",t=>{var o;if(t.origin!==location.origin||t.source!==window.parent||((o=t.data)==null?void 0:o.type)!=="portfolio:preview")return;const e=structuredClone(Y),n=t.data.documents||[{documentId:t.data.documentId,value:t.data.value}];try{for(const{documentId:a,value:l}of n)a.startsWith("article:")?Y.articles[a.slice(8)]=structuredClone(l):["site","home","copy","profile","media","videos","cases","retrospective"].includes(a)&&(Y[a]=structuredClone(l));const s=scrollY;Pt(),new URLSearchParams(location.search).has("content")||scrollTo(0,s)}catch{Y=e,Pt()}}),document.addEventListener("click",t=>{const e=t.target.closest("a[href]");if(!e)return;const n=new URL(e.href);n.origin===location.origin&&n.pathname.endsWith(".html")&&(n.searchParams.set("editor_preview","1"),e.href=n.href)}));window.addEventListener("message",t=>{var e;t.origin!==location.origin||t.source!==window.parent||((e=t.data)==null?void 0:e.type)!=="portfolio:locate"||Yt(String(t.data.contentId||""))});
