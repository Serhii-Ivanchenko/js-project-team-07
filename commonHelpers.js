import{A as H,S as k,N as j,K as $,a as x,i as q}from"./assets/vendor-82b19387.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function I({containerClass:e,elementClass:t,triggerClass:n,panelClass:r,openOnInit:o=[],duration:s=400}){return new H(e,{elementClass:t,triggerClass:n,panelClass:r,showMultiple:!0,openOnInit:o,duration:s})}const F={containerClass:".accordion-container",elementClass:"aboutme-item",triggerClass:"aboutme-ac-trigger",panelClass:"aboutme-item-panel",openOnInit:[0],duration:400};I(F);k.use([j,$]);function g(e,t){return new k(e,t)}const R=g(".aboutme-swiper",{loop:!0,spaceBetween:0,slidesPerView:2,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}}),D=document.querySelector(".aboutme-slide-next");D.addEventListener("click",e=>{console.log("click-nextSlideBtn"),R.slideNext()});const v=document.querySelector("body"),U=v.querySelector(".benefits-list"),z=v.querySelector(".close-benefits-btn"),K=v.querySelector(".close-benefits-icon"),S=(e,t=document)=>t.querySelector(e),d=S(".benefits-section"),T=S(".benefits-modal",d),w=S(".modal--benefits",d);function M(){d.classList.toggle("visibleModal")}const J=U.querySelectorAll(".benefits-item");J.forEach(e=>{e.addEventListener("click",t=>{M();const n=e.closest("li.benefits-item").innerHTML;w.insertAdjacentHTML("beforeend",n);const r=e.closest("li.benefits-item").querySelector(".benefits-text-more").innerHTML;w.insertAdjacentHTML("beforeend",r),document.body.style.height="100%",document.body.style.overflow="hidden"})});function O(e){(e.target===T||e.target===z||e.target===K||e.code==="Escape")&&(M(),w.innerHTML="",document.body.style.overflow="")}T.addEventListener("click",O);document.addEventListener("keydown",e=>{e.code==="Escape"&&d.classList.contains("visibleModal")&&O(e)});const W=document.querySelectorAll(".faq-acordeon-btn"),_={containerClass:".faq-items",elementClass:"faq-item",triggerClass:"faq-acordeon-btn",panelClass:"faq-descr"};W.forEach(e=>{e.addEventListener("click",()=>{const t=e.querySelector(".modal-btn-icon");e.classList.contains("rotated")?(t.style.transform="rotate(0deg)",e.classList.remove("rotated")):(t.style.transform="rotate(180deg)",e.classList.add("rotated"))})});I(_);document.querySelector(".menu");const G=document.querySelector(".menu-title"),m=document.querySelector(".menu-list"),Q=document.querySelector(".open-mobile-menu"),L=document.querySelector(".mobile-menu"),X=document.querySelector(".header-nav");document.querySelector(".menu-list-item");L.addEventListener("click",Y);X.addEventListener("click",Z);function Y(e){e.target.nodeName!=="DIV"&&L.classList.remove("is-open")}function Z(e){e.target===G?m.classList.toggle("hidden"):e.target===Q.firstElementChild?L.classList.add("is-open"):m.contains(e.target)&&m.classList.toggle("hidden")}g(".projects-swiper-container",{keyboard:{enabled:!0,onlyInViewport:!1},direction:"horizontal",slidesPerView:1,spaceBetween:280,navigation:{nextEl:".projects-button-next",prevEl:".projects-button-prev"}});const N="https://portfolio-js.b.goit.study/api";async function ee(){const e=await x(`${N}/reviews`);return console.log(e.data),e.data}async function te(e){return(await x.post(`${N}/requests`,e)).data}const p=document.querySelector(".reviews-list"),P=document.querySelector(".reviews-section");let V=!1;g(".rewiews-list-wrapper",{keyboard:{enabled:!0,onlyInViewport:!1},direction:"horizontal",slidesPerView:1,spaceBetween:16,navigation:{nextEl:".rewiews-button-next",prevEl:".rewiews-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});function oe(e,t){e.forEach(n=>{n.isIntersecting&&(se(),V=!0,t.unobserve(P))})}const ne=new IntersectionObserver(oe,{root:null,threshold:.5});ne.observe(P);async function se(){if(!V)try{const e=await ee();e.length===0?(p.innerHTML=C(),q.error({title:"",message:"NOT FOUND",position:"bottomRight",timeout:3e3,pauseOnHover:!1})):p.insertAdjacentHTML("beforeend",re(e))}catch(e){p.innerHTML=C(),q.error({title:"",message:e.message,position:"bottomRight",timeout:3e3,pauseOnHover:!1})}}function re(e){return e.map(({_id:t,author:n,avatar_url:r,review:o})=>`<li class="rewiews-list-element swiper-slide" data-id="${t} ">
        <img
            class="rewiews-img"
            width="48px"
            src="${r}"
            alt="${n}"
          />
          <h3 class="rewiew-element-title">${n}</h3>
          <p class="rewiews-text">${o}</p>
        </li>`).join("")}function C(){return`<li class="reviews-error-item">
  <p class="reviews-error-text">NOT FOUND</p>
  </li>`}const i=document.querySelector(".footer-input-email"),l=document.querySelector(".input-error-message"),c=document.querySelector(".footer-form"),E=document.querySelector(".footer-backdrop"),f=document.querySelector(".modal-window-header"),y=document.querySelector(".modal-window-text"),ie=document.querySelector(".modal-close-btn"),ce=document.querySelector(".modal-close-btn-img");i.addEventListener("input",le);c.addEventListener("input",ae);c.addEventListener("submit",de);E.addEventListener("click",ue);ie.addEventListener("click",me);const a=JSON.parse(localStorage.getItem("savedUserInput"));a&&(c.elements.email.value=a.email,c.elements.comments.value=a.comment);function le(){i.validity.patternMismatch||i.value.trim().length<=0?(i.style.borderBottomColor="#E74A3B",l.style.color="#E74A3B",l.textContent="Invalid email, try again"):(i.style.borderBottomColor="#3CBC81",l.style.color="#3CBC81",l.textContent="Success!")}function ae(e){const t=e.currentTarget.elements.email.value.trim(),n=e.currentTarget.elements.comments.value.trim(),r={email:t,comment:n};localStorage.setItem("savedUserInput",JSON.stringify(r))}async function de(e){e.preventDefault();try{const t=await te(a);B(),f.textContent=t.title,y.textContent=t.message,c.reset(),localStorage.removeItem("savedUserInput")}catch(t){B(),f.textContent=t.message,y.textContent="Please, try again",f.style.color="#ed3b44",y.style.color="#ed3b44",ce.style.stroke="#ed3b44"}}function B(){window.addEventListener("keydown",A),E.classList.add("backdrop-is-open")}function h(){window.removeEventListener("keydown",A),E.classList.remove("backdrop-is-open")}function ue(e){e.currentTarget===e.target&&h()}function me(){h()}function A(e){e.code==="Escape"&&h()}const b=document.querySelector(".scroll-up-btn");b.addEventListener("click",fe);window.onscroll=function(){pe()};function pe(){document.body.scrollTop>200||document.documentElement.scrollTop>200?b.style.display="flex":b.style.display="none"}function fe(){window.scrollTo({top:0})}
//# sourceMappingURL=commonHelpers.js.map
