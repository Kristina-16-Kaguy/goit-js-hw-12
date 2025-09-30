import axios from 'axios';
import { showError } from './iziToastHelper.js';

const API_KEY = '52515106-cf2fe0ed90e49660ada5f5535';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, getParams(query))
    .then(response => {
      const images = response.data.hits;

      if (!images || !images.length) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }

      return images;
    })
    .catch(error => {
      showError(error.message);
      return [];
    });
}

function getParams(query) {
  return {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 9,
    },
  };
}
