// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import photoCardTpl from '../templates/photo-card.hbs'
console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(photoCardTpl);



const galleryContainer = document.querySelector('.gallery');
const cardsPhotos = createCardsPhotos(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsPhotos);

function createCardsPhotos(photos) {
  return photos
    .map(photoCardTpl).join('');
    
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom' });