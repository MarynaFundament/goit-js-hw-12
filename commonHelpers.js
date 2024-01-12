var w=Object.defineProperty;var v=(t,e,r)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var a=(t,e,r)=>(v(t,typeof e!="symbol"?e+"":e,r),r),P=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var f=(t,e,r)=>(P(t,e,"read from private field"),r?r.call(t):e.get(t)),m=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)};import{a as S,S as $,N as c}from"./assets/vendor-c38e8acf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const y=document.querySelector(".loader");function N(){y.classList.remove("is-hidden")}function k(){y.classList.add("is-hidden")}var d,h;class _{constructor(){m(this,d,"https://pixabay.com/api/");m(this,h,"39518708-26ab694120e376c6ae35268e7");a(this,"query","");a(this,"page",1);a(this,"per_page",40);a(this,"image_type","photo");a(this,"safesearch","true");a(this,"orientation","horizontal")}async fetchFunc(){const e=new URLSearchParams({query:this.query,page:this.page,per_page:this.per_page,image_type:this.image_type,safesearch:this.safesearch,orientation:this.orientation});try{return N(),(await S.get(`${f(this,d)}/?key=${f(this,h)}&${e}&q=${this.query}`)).data}catch(r){throw console.error(`Axios error: ${r.message}`),r}finally{setTimeout(()=>{k()},4e3)}}updatePage(){this.page+=1}resetPage(){this.page=1}get query(){return this.query}set query(e){this.query=e}}d=new WeakMap,h=new WeakMap;let E=new $(".photo-card a",{captions:!0,captionDelay:250});const s=new _,F=document.querySelector(".search-form");document.querySelector(".submit-btn");const g=document.querySelector(".gallery"),l=document.querySelector(".load-more"),H=document.querySelector(".search-form_input");let p="";F.addEventListener("submit",x);async function x(t){if(t.preventDefault(),s.resetPage(),s.query=t.target.elements.searchQuery.value.trim(),H.value="",s.query===""){c.Notify.warning("Please, fill the main field");return}s.query!==p&&(s.resetPage(),p=s.query,g.innerHTML="",l.classList.add("is-hidden"));try{const e=await s.fetchFunc();if(q(e),e.totalHits>1&&c.Notify.info(`Hooray! We found ${e.totalHits} images.`),e.totalHits===s.page){l.classList.add("is-hidden");return}if(e.totalHits===0){c.Notify.failure("Sorry, there are no images matching your search query. Please try again.");return}l.classList.remove("is-hidden")}catch(e){console.error("Error fetching images:",e)}}l.addEventListener("click",M);async function M(){if(s.query===""){c.Notify.warning("Please, fill the main field");return}s.updatePage();try{const t=await s.fetchFunc();q(t);const r=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"}),s.page>t.totalPages&&(console.log(s.page),c.Notify.info("We're sorry, but you've reached the end of search results"),l.classList.add("is-hidden"))}catch{console.error("Error fetching more images:",error)}}function q({hits:t}){const e=t.map(({webformatURL:r,largeImageURL:u,tags:o,likes:i,views:n,comments:L,downloads:b})=>`<div class="photo-card">
          <a href="${u}" class="photo-link">
            <img class="photo-img" src="${r}" alt="${o}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item likes">
              <b>Likes</b>
              ${i}
            </p>
            <p class="info-item views">
              <b>Views</b>
              ${n}
            </p>
            <p class="info-item comments">
              <b>Comments</b>
              ${L}
            </p>
            <p class="info-item downloads">
              <b>Downloads</b>
              ${b}
            </p>
          </div>
        </div>`).join("");g.insertAdjacentHTML("beforeend",e),E.refresh()}
//# sourceMappingURL=commonHelpers.js.map
