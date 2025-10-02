import{i as p,a as h,S as y}from"./assets/vendor-xwsNXkQR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();function n(t){p.error({message:t,position:"topRight"})}const L="52515106-cf2fe0ed90e49660ada5f5535",b="https://pixabay.com/api/",w=15;async function u(t,s){try{let r=await h.get(b,v(t,s));const i=r.data.hits,e=r.data.totalHitsits;return!i||!i.length?(n("Sorry, there are no images matching your search query. Please try again!"),{images:[],isLastPage:!0}):i}catch(r){return n(r.message),[]}}function v(t,s){return{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:w,page:s}}}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),LoadMoreBtn:document.querySelector(".load-more")},M=new y(".gallery a",{captionsData:"alt",captionDelay:250});function d(t){const s=t.map(r=>`<li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-img">
          </a>
          <ul class="img-footer">
            <li class="img-footer-item">
              <h3 class="meta-header">Likes</h3>
              <p class="meta-info">${r.likes}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Views</h3>
              <p class="meta-info">${r.views}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Comments</h3>
              <p class="meta-info">${r.comments}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Downloads</h3>
              <p class="meta-info">${r.downloads}</p>
            </li>
           </ul>
       </li>`).join("");o.gallery.insertAdjacentHTML("beforeend",s),M.refresh()}function S(){o.gallery.innerHTML=""}function f(){o.loader.classList.add("is-visible")}function g(){o.loader.classList.remove("is-visible")}function B(){o.LoadMoreBtn.classList.add("is-visible")}function P(){o.LoadMoreBtn.classList.remove("is-visible")}let m=1,l;o.form.addEventListener("submit",async t=>{if(t.preventDefault(),l=t.target.elements["search-text"].value.trim(),!!l){S(),P(),m=1,f();try{let s=await u(l,m);d(s),B()}catch(s){n(s.message)}g()}});o.LoadMoreBtn.addEventListener("click",async()=>{f();try{let t=await u(l,++m);d(t)}catch(t){n(t.message)}g()});
//# sourceMappingURL=index.js.map
