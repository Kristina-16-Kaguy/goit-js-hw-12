import axios from 'axios';
import { showError } from './iziToastHelper.js';

const API_KEY = '52515106-cf2fe0ed90e49660ada5f5535';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    let response = await axios.get(BASE_URL, getParams(query));
    const images = response.data.hits;
    if (!images || !images.length) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return [];
    }
    return images;
  } catch (error) {
    showError(error.message);
    return [];
  }
}

function getParams(query) {
  return {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    },
  };
}
