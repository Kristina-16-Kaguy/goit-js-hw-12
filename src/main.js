import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
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
  showLoader();

  try {
    let images = await getImagesByQuery(inputValue, page);
    createGallery(images);
  } catch (error) {
    showError(error.message);
  }
  hideLoader();
});

refs.LoadMoreBtn.addEventListener('click', async () => {
  // page++;
  showLoader();
  try {
    let images = await getImagesByQuery(inputValue, ++page);
    createGallery(images);
  } catch (error) {
    showError(error.message);
  }
  hideLoader();
});
