var w=Object.defineProperty;var v=(r,e,t)=>e in r?w(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(v(r,typeof e!="symbol"?e+"":e,t),t),P=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var m=(r,e,t)=>(P(r,e,"read from private field"),t?t.call(r):e.get(r)),p=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};import{a as S,S as $,i as l}from"./assets/vendor-1feca4b1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const g=document.querySelector(".loader");function R(){g.classList.remove("is-hidden")}function k(){g.classList.add("is-hidden")}var d,h;class H{constructor(){p(this,d,"https://pixabay.com/api/");p(this,h,"39518708-26ab694120e376c6ae35268e7");n(this,"query","");n(this,"page",1);n(this,"per_page",40);n(this,"image_type","photo");n(this,"safesearch","true");n(this,"orientation","horizontal")}async fetchFunc(){const e=new URLSearchParams({query:this.query,page:this.page,per_page:this.per_page,image_type:this.image_type,safesearch:this.safesearch,orientation:this.orientation});try{R();const t=await S.get(`${m(this,d)}/?key=${m(this,h)}&${e}&q=${this.query}`);return this.lastResult=t.data,this.lastResult}catch(t){throw console.error(`Axios error: ${t.message}`),t}finally{setTimeout(()=>{k()},3e3)}}updatePage(){this.page+=1}resetPage(){this.page=1}get query(){return this.query}set query(e){this.query=e}}d=new WeakMap,h=new WeakMap;let _=new $(".photo-card a",{captions:!0,captionDelay:250});const i=new H,E=document.querySelector(".search-form");document.querySelector(".submit-btn");const y=document.querySelector(".gallery"),u=document.querySelector(".load-more"),F=document.querySelector(".search-form_input");let f="";E.addEventListener("submit",M);async function M(r){if(r.preventDefault(),console.log(i),i.resetPage(),i.query=r.target.elements.searchQuery.value.trim(),F.value="",i.query===""){l.warning({message:"Please, fill the main field",position:"topLeft"});return}i.query!==f&&(i.resetPage(),f=i.query,y.innerHTML="",u.classList.add("is-hidden"));try{const e=await i.fetchFunc();L(e);let t=1,c=!1;const s=40,a=e.totalHits/s;if(t>=a?(c=!0,console.log(t),l.info({message:"You have reached the end of search results",position:"topRight"}),u.classList.add("is-hidden")):t+=1,e.totalHits>1&&l.success({message:`Hooray! We found ${e.totalHits} images.`,position:"topRight"}),e.totalHits===i.page){u.classList.add("is-hidden");return}if(e.totalHits===0){l.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}u.classList.remove("is-hidden")}catch(e){console.error("Error fetching images:",e)}}u.addEventListener("click",x);async function x(){if(i.query===""){l.warning({message:"Please, fill the main field",position:"topRight"});return}i.updatePage();try{const r=await i.fetchFunc();L(r);const t=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}catch(r){console.error("Error fetching images:",r)}}function L({hits:r}){const e=r.map(({webformatURL:t,largeImageURL:c,tags:s,likes:o,views:a,comments:q,downloads:b})=>`<div class="photo-card">
          <a href="${c}" class="photo-link">
            <img class="photo-img" src="${t}" alt="${s}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item likes">
              <b>Likes</b>
              ${o}
            </p>
            <p class="info-item views">
              <b>Views</b>
              ${a}
            </p>
            <p class="info-item comments">
              <b>Comments</b>
              ${q}
            </p>
            <p class="info-item downloads">
              <b>Downloads</b>
              ${b}
            </p>
          </div>
        </div>`).join("");y.insertAdjacentHTML("beforeend",e),_.refresh()}
//# sourceMappingURL=commonHelpers.js.map
