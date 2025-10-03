import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  scrollBy,
} from './js/render-functions.js';
import { refs } from './js/refs.js';
import { showError } from './js/iziToastHelper.js';

let page = 1;
let inputValue;

refs.form.addEventListener('submit', async event => {
  event.preventDefault();
  inputValue = event.target.elements['search-text'].value.trim();
  if (!inputValue) return;
  clearGallery();
  hideLoadMoreButton();
  page = 1;
  showLoader();

  try {
    let { images, isLastPage } = await getImagesByQuery(inputValue, ++page);
    createGallery(images);
    if (!isLastPage) {
      showLoadMoreButton();
    }
  } catch (error) {
    showError(error.message);
  }
  hideLoader();
});

refs.LoadMoreBtn.addEventListener('click', async () => {
  // page++;
  hideLoadMoreButton();
  showLoader();

  try {
    let { images, isLastPage } = await getImagesByQuery(inputValue, ++page);
    createGallery(images);
    if (!isLastPage) {
      showLoadMoreButton();
    }
  } catch (error) {
    showError(error.message);
  }
  hideLoader();
});
