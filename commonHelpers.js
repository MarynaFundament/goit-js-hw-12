var b=Object.defineProperty;var q=(t,e,r)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(q(t,typeof e!="symbol"?e+"":e,r),r),v=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var p=(t,e,r)=>(v(t,e,"read from private field"),r?r.call(t):e.get(t)),g=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)};import{a as w,S as M,i as d}from"./assets/vendor-40038228.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var h,u;class P{constructor(){g(this,h,"https://pixabay.com/api/");g(this,u,"39518708-26ab694120e376c6ae35268e7");c(this,"query","");c(this,"page",1);c(this,"per_page",40);c(this,"image_type","photo");c(this,"safesearch","true");c(this,"orientation","horizontal")}async fetchImg(){const e=new URLSearchParams({query:this.query,page:this.page,per_page:this.per_page,image_type:this.image_type,safesearch:this.safesearch,orientation:this.orientation}),{data:r}=await w.get(`${p(this,h)}/?key=${p(this,u)}&${e}&q=${this.query}`);return r}updatePage(){this.page+=1}resetPage(){this.page=1}get query(){return this.query}set query(e){this.query=e}}h=new WeakMap,u=new WeakMap;const s=new P;let $=new M(".photo-card a",{captions:!0,captionDelay:250});const a={form:document.querySelector(".search-form"),loadMoreBtn:document.querySelector(".load-more"),galleryList:document.querySelector(".gallery"),submitBtn:document.querySelector(".submit-btn")};let m="";a.form.addEventListener("submit",S);async function S(t){if(t.preventDefault(),a.galleryList.innerHTML="",s.resetPage(),s.query=t.target.elements.searchQuery.value.trim(),t.target.reset(),s.query===""){d.warning({message:"Please, fill the main field",position:"topLeft"});return}s.query!==m&&(s.resetPage(),m=s.query,a.galleryList.innerHTML="",a.loadMoreBtn.classList.add("is-hidden"));try{const{hits:e,totalHits:r}=await s.fetchImg();if(e.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}),a.loadMoreBtn.classList.add("is-hidden");return}f(e),a.loadMoreBtn.classList.remove("is-hidden"),r>1&&d.success({message:`Hooray! We found ${r} images.`,position:"topRight"});const n=Math.ceil(r/s.per_page);s.page===n&&(d.info({message:"You have reached the end of search results",position:"topRight"}),a.loadMoreBtn.classList.add("is-hidden"))}catch(e){console.error("Error fetching images:",e)}}a.loadMoreBtn.addEventListener("click",B);async function B(){s.updatePage();try{const{hits:t,totalHits:e}=await s.fetchImg();f(t);const n=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:2*n,behavior:"smooth"});const o=Math.ceil(e/s.per_page);s.page===o&&(d.info({message:"You have reached the end of search results",position:"topRight"}),a.loadMoreBtn.classList.add("is-hidden"))}catch(t){console.error("Error fetching images:",t)}}function f(t){const e=t.map(({webformatURL:r,largeImageURL:n,tags:o,likes:i,views:l,comments:y,downloads:L})=>`<div class="photo-card">
          <a href="${n}" class="photo-link">
            <img class="photo-img" src="${r}" alt="${o}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item likes">
              <b>Likes</b>
              ${i}
            </p>
            <p class="info-item views">
              <b>Views</b>
              ${l}
            </p>
            <p class="info-item comments">
              <b>Comments</b>
              ${y}
            </p>
            <p class="info-item downloads">
              <b>Downloads</b>
              ${L}
            </p>
          </div>
        </div>`).join("");a.galleryList.insertAdjacentHTML("beforeend",e),$.refresh()}
//# sourceMappingURL=commonHelpers.js.map
