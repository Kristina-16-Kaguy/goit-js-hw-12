import{i as c,a as m,S as f}from"./assets/vendor-xwsNXkQR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();function l(r){c.error({message:r,position:"topRight"})}const u="52515106-cf2fe0ed90e49660ada5f5535",d="https://pixabay.com/api/";async function p(r){try{const e=(await m.get(d,g(r))).data.hits;return!e||!e.length?(l("Sorry, there are no images matching your search query. Please try again!"),[]):e}catch(s){return l(s.message),[]}}function g(r){return{params:{key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12}}}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const s=r.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-img">
          </a>
          <ul class="img-footer">
            <li class="img-footer-item">
              <h3 class="meta-header">Likes</h3>
              <p class="meta-info">${e.likes}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Views</h3>
              <p class="meta-info">${e.views}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Comments</h3>
              <p class="meta-info">${e.comments}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Downloads</h3>
              <p class="meta-info">${e.downloads}</p>
            </li>
           </ul>
       </li>`).join("");o.gallery.innerHTML=s,h.refresh()}function L(){o.gallery.innerHTML=""}function w(){o.loader.classList.add("is-visible")}function b(){o.loader.classList.remove("is-visible")}o.form.addEventListener("submit",async r=>{r.preventDefault();const s=r.target.elements["search-text"].value.trim();if(s){L(),w();try{let e=await p(s);y(e)}catch(e){l(e.message)}b()}});
//# sourceMappingURL=index.js.map
