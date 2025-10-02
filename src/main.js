import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions.js';
import { refs } from './js/refs.js';
import { showError } from './js/iziToastHelper.js';

refs.form.addEventListener('submit', async event => {
  event.preventDefault();
  const inputValue = event.target.elements['search-text'].value.trim();

  if (!inputValue) return;
  clearGallery();
  showLoader();

  try {
    let images = await getImagesByQuery(inputValue);
    createGallery(images);
  } catch (error) {
    showError(error.message);
  }
  hideLoader();
});
