import "simplelightbox/dist/simple-lightbox.min.css"
import SimpleLightbox from "simplelightbox"
import { galleryItems } from './gallery-items'

const galler = document.querySelector(".gallery")

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}" data-alt="${description}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`).join("")
}

galler.insertAdjacentHTML('beforeend', createMarkup(galleryItems))

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
})