import{i as c,a as f,S as m}from"./assets/vendor-xwsNXkQR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function n(r){c.error({message:r,position:"topRight"})}const u="52515106-cf2fe0ed90e49660ada5f5535",d="https://pixabay.com/api/";async function p(r){try{const e=(await f.get(d,h(r))).data.hits;return!e||!e.length?(n("Sorry, there are no images matching your search query. Please try again!"),[]):e}catch(s){return n(s.message),[]}}function h(r){return{params:{key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12}}}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const s=r.map(e=>`<li class="gallery-item">
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
       </li>`).join("");a.gallery.innerHTML=s,g.refresh()}function L(){a.gallery.innerHTML=""}function b(){a.loader.classList.add("is-visible")}function w(){a.loader.classList.remove("is-visible")}a.form.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements["search-text"].value.trim();s&&(L(),b(),p(s).then(e=>y(e)).finally(w))});
//# sourceMappingURL=index.js.map
