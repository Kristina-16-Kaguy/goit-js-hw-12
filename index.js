import{i as L,a as P,S as b}from"./assets/vendor-xwsNXkQR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();function n(r){L.error({message:r,position:"topRight"})}const w="52515106-cf2fe0ed90e49660ada5f5535",v="https://pixabay.com/api/",u=15;async function d(r,e){try{let t=await P.get(v,M(r,e));const i=t.data.hits,a=t.data.totalHits;return!i||!i.length?(n("Sorry, there are no images matching your search query. Please try again!"),{images:[],isLastPage:!0}):{images:i,isLastPage:S(a,e)}}catch(t){return n(t.message),{images:[],isLastPage:!0}}}function M(r,e){return{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:e}}}function S(r,e){let t=Math.ceil(r/u);return e>=t}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),LoadMoreBtn:document.querySelector(".load-more"),galleryItem:document.querySelector(".gallery-item")},q=new b(".gallery a",{captionsData:"alt",captionDelay:250});function f(r){const e=r.map(t=>`<li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img">
          </a>
          <ul class="img-footer">
            <li class="img-footer-item">
              <h3 class="meta-header">Likes</h3>
              <p class="meta-info">${t.likes}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Views</h3>
              <p class="meta-info">${t.views}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Comments</h3>
              <p class="meta-info">${t.comments}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Downloads</h3>
              <p class="meta-info">${t.downloads}</p>
            </li>
           </ul>
       </li>`).join("");o.gallery.insertAdjacentHTML("beforeend",e),q.refresh()}function B(){o.gallery.innerHTML=""}function g(){o.loader.classList.add("is-visible")}function p(){o.loader.classList.remove("is-visible")}function h(){o.LoadMoreBtn.classList.add("is-visible")}function y(){o.LoadMoreBtn.classList.remove("is-visible")}let m=1,l;o.form.addEventListener("submit",async r=>{if(r.preventDefault(),l=r.target.elements["search-text"].value.trim(),!!l){B(),y(),m=1,g();try{let{images:e,isLastPage:t}=await d(l,++m);f(e),t||h()}catch(e){n(e.message)}p()}});o.LoadMoreBtn.addEventListener("click",async()=>{y(),g();try{let{images:r,isLastPage:e}=await d(l,++m);f(r),e||h()}catch(r){n(r.message)}p()});
//# sourceMappingURL=index.js.map
