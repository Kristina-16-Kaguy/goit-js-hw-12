import{i as g,a as h,S as y}from"./assets/vendor-xwsNXkQR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();function n(e){g.error({message:e,position:"topRight"})}const L="52515106-cf2fe0ed90e49660ada5f5535",w="https://pixabay.com/api/";async function u(e,r){try{const o=(await h.get(w,b(e,r))).data.hits;return!o||!o.length?(n("Sorry, there are no images matching your search query. Please try again!"),[]):o}catch(a){return n(a.message),[]}}function b(e,r){return{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}}}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),LoadMoreBtn:document.querySelector(".load-more")},v=new y(".gallery a",{captionsData:"alt",captionDelay:250});function f(e){const r=e.map(a=>`<li class="gallery-item">
          <a class="gallery-link" href="${a.largeImageURL}">
            <img src="${a.webformatURL}" alt="${a.tags}" class="gallery-img">
          </a>
          <ul class="img-footer">
            <li class="img-footer-item">
              <h3 class="meta-header">Likes</h3>
              <p class="meta-info">${a.likes}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Views</h3>
              <p class="meta-info">${a.views}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Comments</h3>
              <p class="meta-info">${a.comments}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Downloads</h3>
              <p class="meta-info">${a.downloads}</p>
            </li>
           </ul>
       </li>`).join("");i.gallery.insertAdjacentHTML("beforeend",r),v.refresh()}function S(){i.gallery.innerHTML=""}function d(){i.loader.classList.add("is-visible")}function p(){i.loader.classList.remove("is-visible")}let m=1,l;i.form.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements["search-text"].value.trim(),!!l){S(),m=1,d();try{let r=await u(l,m);f(r)}catch(r){n(r.message)}p()}});i.LoadMoreBtn.addEventListener("click",async()=>{d();try{let e=await u(l,++m);f(e)}catch(e){n(e.message)}p()});
//# sourceMappingURL=index.js.map
