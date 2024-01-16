
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import './sass/layouts/_mainform.scss';

import { newFetchPicture } from './js/fetchPictures.js'
import { lightbox } from './js/lightbox.js';
import { refs } from "./js/refs";


let currentQuery = '';

refs.form.addEventListener('submit', handleSearchRes)

async function handleSearchRes(e){
e.preventDefault();

refs.galleryList.innerHTML = '';
newFetchPicture.resetPage();
newFetchPicture.query = e.target.elements.searchQuery.value.trim();
e.target.reset();


if (newFetchPicture.query === '') {
  iziToast.warning({
    message: 'Please, fill the main field', 
    position: 'topLeft', 

});
  return;
}

if (newFetchPicture.query !== currentQuery) {
  newFetchPicture.resetPage();
  currentQuery = newFetchPicture.query;
  refs.galleryList.innerHTML = '';

  refs.loadMoreBtn.classList.add('is-hidden')

}

try {
const {hits, totalHits} = await newFetchPicture.fetchImg();

if (hits.length === 0) {

  iziToast.error({
    message: 'Sorry, there are no images matching your search query. Please try again.', 
    position: 'topRight'
    
});

  refs.loadMoreBtn.classList.add('is-hidden');
  return;
}

createMarkup(hits);
refs.loadMoreBtn.classList.remove('is-hidden');

if (totalHits > 1) {
  iziToast.success({
    message: `Hooray! We found ${totalHits} images.`, 
    position: 'topRight'
});

}

const check = Math.ceil(totalHits / newFetchPicture.per_page)

if (newFetchPicture.page === check) {

 iziToast.info({
   message: 'You have reached the end of search results',
   position: 'topRight'
 });
 refs.loadMoreBtn.classList.add('is-hidden');
} 


} 

catch (error) {
  console.error('Error fetching images:', error);
}
}


refs.loadMoreBtn.addEventListener('click', handleLoadMore)

async function handleLoadMore() {
 newFetchPicture.updatePage();

 try{
    const {hits, totalHits} = await newFetchPicture.fetchImg()

      createMarkup(hits);

      const dynamicDiv = document.querySelector('.photo-card');
      const height = dynamicDiv.getBoundingClientRect().height;
        // console.log(height);
      
       window.scrollBy({
       top: 2 * height,
       behavior: 'smooth',
      }); 

    const check = Math.ceil(totalHits / newFetchPicture.per_page)

    if (newFetchPicture.page === check) {

       iziToast.info({
       message: 'You have reached the end of search results',
       position: 'topRight'
 });
 refs.loadMoreBtn.classList.add('is-hidden');
} 

    } catch (error) {
      console.error('Error fetching images:', error);
    }
  
}




function createMarkup( hits ) {


  const markup = hits
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<div class="photo-card">
          <a href="${largeImageURL}" class="photo-link">
            <img class="photo-img" src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item likes">
              <b>Likes</b>
              ${likes}
            </p>
            <p class="info-item views">
              <b>Views</b>
              ${views}
            </p>
            <p class="info-item comments">
              <b>Comments</b>
              ${comments}
            </p>
            <p class="info-item downloads">
              <b>Downloads</b>
              ${downloads}
            </p>
          </div>
        </div>`;
      }
    )
    .join('');

  refs.galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();

  //height of the picture

 

}














