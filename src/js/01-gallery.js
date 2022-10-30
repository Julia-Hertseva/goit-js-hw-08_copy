import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const renderGallery = galleryItems.reduce((acc, { preview, original, description }) => {
    return acc + `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      alt="${description}"/>
  </a>`}, "");

console.log(renderGallery);

const picture = document.querySelector(`.gallery`);
picture.insertAdjacentHTML('beforeend', renderGallery)


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom"
});