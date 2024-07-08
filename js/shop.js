let productos = []
fetch(`../js/productos.json`).then(r => r.json()).then(p => {
    const shopSection = document.getElementById("shop")
    p.forEach(producto => {
        const article = document.createElement("article")
        article.innerHTML = `<img class="imgShop"  src="${producto.imagen}" alt="">
        <div>
            <div>
                <h2>${producto.nombre}</h2>
                <p>$${producto.precio}</p>
            </div>
            <div>
                <button id="${producto.id}" class = "addToCart">Sumar al carrito / add to cart</button>
            </div>
        </div>`
        shopSection.appendChild(article)

    });
    const addtToCartButtons = document.getElementsByClassName('addToCart')
    for (const button of addtToCartButtons) {
        button.addEventListener('click', (e) => {
            const producto =
                p.find((producto) =>
                    e.target.id == producto.id)
            agregarAlCarrito(producto)
        })
    }
})
console.log(productos)



function agregarAlCarrito(prenda) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []
    let indice = carrito.findIndex((elemento) => elemento.id == prenda.id)
    if (indice == -1) {
        prenda.cantidad = 1
        carrito.push(prenda)
    }
    else if (indice != -1) {
        let objetoDentroDeCarrito = carrito[indice]
        objetoDentroDeCarrito.cantidad = objetoDentroDeCarrito.cantidad + 1
    }
    localStorage.setItem(`carrito`, JSON.stringify(carrito))
    Toastify({
        text: "Articulo agregado",
        duration: 1500,
        destination: "../pages/carrito.html",
        newWindow: true,
        gravity: "top",
        position: "left",
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(to right, rgba(118,141,123), rgba(230, 226, 206, 0.479))',
            color: '#000000',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px'

        },
        onClick: function () { } // Callback after click
    }).showToast();

}


console.log(productos)