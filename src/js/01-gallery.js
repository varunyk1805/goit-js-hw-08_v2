import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </div>`
  )
  .join('');

const settingsSimpleLightbox = event => {
  event.preventDefault();

  new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  gallery.removeEventListener('click', settingsSimpleLightbox);
};

gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', settingsSimpleLightbox);
