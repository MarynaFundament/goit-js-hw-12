const loaderContainer = document.querySelector('.loader')
export function showLoader() {
  loaderContainer.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderContainer.classList.add('is-hidden');
}