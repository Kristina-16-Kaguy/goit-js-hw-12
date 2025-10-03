import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showError(message) {
  iziToast.error({
    message: message,
    position: 'topRight',
  });
}

export function showInfo(message) {
  iziToast.info({
    message: message,
    position: 'topRight',
  });
}
