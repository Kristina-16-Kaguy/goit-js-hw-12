import axios from 'axios';
import { showError, showInfo } from './iziToastHelper.js';

const API_KEY = '52515106-cf2fe0ed90e49660ada5f5535';
const BASE_URL = 'https://pixabay.com/api/';
const per_page = 15;

export async function getImagesByQuery(query, page) {
  try {
    let response = await axios.get(BASE_URL, getParams(query, page));
    const images = response.data.hits;
    const totalHits = response.data.totalHits;

    if (!images || !images.length) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return { images: [], isLastPage: true };
    }

    if (isLastPage(totalHits, page)) {
      showInfo("We're sorry, but you've reached the end of search results");
      return { images: images, isLastPage: true };
    } else {
      return { images: images, isLastPage: false };
    }
  } catch (error) {
    showError(error.message);
    return { images: [], isLastPage: true };
  }
}

function getParams(query, page) {
  return {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: per_page,
      page: page,
    },
  };
}

function isLastPage(totalHits, page) {
  let totalPages = Math.ceil(totalHits / per_page);
  return page >= totalPages;
}
