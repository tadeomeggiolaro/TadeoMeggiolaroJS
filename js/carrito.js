const carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];
const totalCompra = document.getElementById(`total`)

renderCarrito(carrito);

function quitarDelCarrito(prenda) {
    const carrito = JSON.parse(localStorage.getItem(`carrito`));
    let indice = carrito.findIndex((elemento) => elemento.id == prenda.id);
    let objetoDentroDeCarrito = carrito[indice]
    objetoDentroDeCarrito.cantidad = objetoDentroDeCarrito.cantidad - 1
    objetoDentroDeCarrito.cantidad === 0 && carrito.splice(indice, 1)
    
    renderCarrito(carrito)
    
    localStorage.setItem(`carrito`, JSON.stringify(carrito))
}

function renderCarrito(carrito) {
    const carritoSection = carritoVacio()
    carrito.forEach(producto => {
        const article = document.createElement("article")
        article.innerHTML = `<img class="imgShop" src="${producto.imagen}" alt="">
    <div>
        <div>
            <h2>${producto.nombre}</h2><p>${producto.cantidad}</p>
            
            <p>$${producto.precio * producto.cantidad}</p>
        </div>
        <div>
            <button id="${producto.id}" class = "quitFromCart">Quitar del carrito</button>
        </div>
        
    </div>`;
        carritoSection.appendChild(article)
    });
    botonBorrar()
    actualizarTotal()
}
function botonBorrar() {
    const buttonsDelete = document.getElementsByClassName(`quitFromCart`);
    for (const button of buttonsDelete) {
        button.addEventListener('click', (e) => {
            const producto =
                carrito.find(producto =>
                    e.target.id == producto.id);
            quitarDelCarrito(producto);
            actualizarTotal()

        })}

}

function carritoVacio() {
    const carritoSection = document.getElementById("carrito")
    carritoSection.innerHTML = ` `
    return carritoSection
}
const buttonBuy = document.getElementById(`finalizarCompra`)
buttonBuy.addEventListener(`click`, () => {
    Swal.fire({
        icon: "success",
        imageUrl: `/assets/logoPrincipal.png`,
        imageHeight: 200,
        title: "Felicitaciones, en breve recibirá su pedido",
        text: "Gracias por elegirnos",
        timer: 3000,
    });
    localStorage.clear();
    actualizarTotal()
    carritoVacio();
});

function actualizarTotal() {
    const carrito = JSON.parse(localStorage.getItem(`carrito`))||[];
    const totalCalculado = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    totalCompra.innerHTML = `El total es de $${totalCalculado}`;

}

