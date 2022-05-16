// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(SimpleLightbox);

const galleryContainer = document.querySelector('.gallery');
const cardsPhotos = createCardsPhotos(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsPhotos.join(''));

function createCardsPhotos(photos) {
    return photos
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
  <a class="gallery__link" 
  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
            
    })
    
}
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom' });