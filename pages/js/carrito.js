const carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];

renderCarrito(carrito);



function quitarDelCarrito(prenda) {
    const carrito = JSON.parse(localStorage.getItem(`carrito`));
    let indice = carrito.findIndex((elemento) => elemento.id == prenda.id);
    let objetoDentroDeCarrito = carrito[indice]
    objetoDentroDeCarrito.cantidad = objetoDentroDeCarrito.cantidad - 1
    if (objetoDentroDeCarrito.cantidad == 0) {
        carrito.splice(indice, 1)

    }
    renderCarrito(carrito)
    

    localStorage.setItem(`carrito`, JSON.stringify(carrito))

}

function renderCarrito(carrito) {
    const carritoSection = document.getElementById("carrito")
    carritoSection.innerHTML = ` `

    carrito.forEach(producto => {
        const article = document.createElement("article")
        article.innerHTML = `<img class="imgShop" src="${producto.imagen}" alt="">
    <div>
        <div>
            <h2>${producto.nombre}</h2>
            <p>$${producto.precio * producto.cantidad}</p>
        </div>
        <div>
            <button id="${producto.id}" class = "quitFromCart">Quitar del carrito</button>
        </div>
        
    </div>`;
        carritoSection.appendChild(article)
    });
    botonBorrar()
}
function botonBorrar() {
    const buttonsDelete = document.getElementsByClassName(`quitFromCart`);
    for (const button of buttonsDelete) {
        button.addEventListener('click', (e) => {
            const producto =
                carrito.find(producto =>
                    e.target.id == producto.id);
            quitarDelCarrito(producto);
        })
    }
    
}

