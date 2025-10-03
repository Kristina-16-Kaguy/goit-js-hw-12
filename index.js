import{i as m,a as w,S as v}from"./assets/vendor-xwsNXkQR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function n(e){m.error({message:e,position:"topRight"})}function d(e){m.info({message:e,position:"topRight"})}const P="52515106-cf2fe0ed90e49660ada5f5535",B="https://pixabay.com/api/",f=15;async function g(e,t){try{let r=await w.get(B,M(e,t));const i=r.data.hits,s=r.data.totalHits;return!i||!i.length?(n("Sorry, there are no images matching your search query. Please try again!"),{images:[],isLastPage:!0}):{images:i,isLastPage:S(s,t)}}catch(r){return n(r.message),{images:[],isLastPage:!0}}}function M(e,t){return{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:t}}}function S(e,t){let r=Math.ceil(e/f);return t>=r}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),LoadMoreBtn:document.querySelector(".load-more"),get galleryItem(){return document.querySelector(".gallery-item")}},q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function h(e){const t=e.map(r=>`<li class="gallery-item">
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
       </li>`).join("");o.gallery.insertAdjacentHTML("beforeend",t),q.refresh()}function I(){o.gallery.innerHTML=""}function y(){o.loader.classList.add("is-visible")}function p(){o.loader.classList.remove("is-visible")}function L(){o.LoadMoreBtn.classList.add("is-visible")}function b(){o.LoadMoreBtn.classList.remove("is-visible")}function $(){let e=o.galleryItem.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}let u=1,l;o.form.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements["search-text"].value.trim(),!!l){I(),b(),u=1,y();try{let{images:t,isLastPage:r}=await g(l,u++);h(t),r?d("We're sorry, but you've reached the end of search results."):L()}catch(t){n(t.message)}p()}});o.LoadMoreBtn.addEventListener("click",async()=>{b(),y();try{let{images:e,isLastPage:t}=await g(l,u++);h(e),$(),t?d("We're sorry, but you've reached the end of search results."):L()}catch(e){n(e.message)}p()});
//# sourceMappingURL=index.js.map
