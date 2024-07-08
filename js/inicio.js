const galleryContainer = document.querySelector('.carrousel');
const ul = document.createElement('ul');
const prev = document.querySelector('.botonAnterior');
const next = document.querySelector('.botonSiguiente');
const liImagen = document.createElement('li');
const img = document.createElement('img');
const divContaminacion = document.getElementById(`divContaminacion`)
const imagenes = ['imgCarrito001', 'imgCarrito002', 'imgCarrito003', 'imgCarrito004', 'imgCarrito005', 'imgCarrito006', 'imgCarrito007', 'imgCarrito008'];
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
divContaminacion.innerHTML=`<h2 class="tituloContaminacion">Sabias que?</h2>
<p class="contenidoContaminacion">La contaminación textil es un problema ambiental significativo que surge de la producción masiva y el consumo desmedido de ropa. La industria textil es una de las más contaminantes del mundo, responsable de una gran parte de las emisiones de gases de efecto invernadero y del uso intensivo de agua. Además, el proceso de fabricación de ropa implica el uso de productos químicos tóxicos que contaminan los ríos y el suelo. La moda rápida, que promueve la compra de prendas baratas y de baja calidad, agrava este problema al generar una enorme cantidad de residuos textiles que terminan en vertederos, contribuyendo a la degradación ambiental.

El reciclaje de ropa surge como una solución viable para mitigar el impacto negativo de la industria textil en el medio ambiente. Este proceso incluye la reutilización de prendas usadas, la transformación de textiles en nuevos productos y la recuperación de fibras para la fabricación de nuevos tejidos. Reciclar ropa no solo reduce la cantidad de residuos que llegan a los vertederos, sino que también disminuye la demanda de recursos naturales y la emisión de contaminantes. Además, fomenta una economía circular en la que los productos se mantienen en uso durante más tiempo, promoviendo prácticas de consumo más sostenibles.

En conclusión, la contaminación textil es un problema urgente que requiere la adopción de medidas responsables tanto por parte de los fabricantes como de los consumidores. El reciclaje de ropa se presenta como una estrategia efectiva para reducir el impacto ambiental de esta industria, promoviendo un modelo de consumo más consciente y sostenible.</p>`

next.addEventListener('click', showNextImage);
prev.addEventListener('click', showPrevImage);

createGallery();
showImage(currentIndex);