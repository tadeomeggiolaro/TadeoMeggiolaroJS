const galleryContainer = document.querySelector('.carrousel');
const ul = document.createElement('ul');
const prev = document.querySelector('.botonAnterior');
const next = document.querySelector('.botonSiguiente');
const liImagen = document.createElement('li');
const img = document.createElement('img');
const imagenes = ['imgCarrito001', 'imgCarrito002', 'imgCarrito003', 'imgCarrito004', 'imgCarrito005', 'imgCarrito006', 'imgCarrito007', 'imgCarrito008', 'imgCarrito009'];
let currentIndex = 0;

function createGallery() {
    imagenes.forEach((img, index) => {
        const li = document.createElement('li');
        const image = document.createElement('img');
        image.src = `assets/${img}.jpg`;
        image.alt = `img ${index + 1}`;
        li.appendChild(image);
        if (index === 0) {
            li.classList.add('active');
        }
        galleryContainer.appendChild(li);
    });
}

function showImage(index) {
    const galleryItems = document.querySelectorAll('.carrousel li');
    galleryItems.forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % imagenes.length;
    showImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    showImage(currentIndex);
}

next.addEventListener('click', showNextImage);
prev.addEventListener('click', showPrevImage);

createGallery();
showImage(currentIndex);