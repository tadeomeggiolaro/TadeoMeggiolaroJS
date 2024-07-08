const afganistan = { tipo: "buzo", id: "afg", nombre: "Afganistán", talles: ["S", "M", "L"], precio: 30000, imagen: "https://i.pinimg.com/564x/06/70/9b/06709b3af3de53e796bbf78db9e3ea22.jpg" };
const albania = { tipo: "buzo", id: "alb", nombre: "Albania", talles: ["S", "L"], precio: 50000, imagen: "https://i.pinimg.com/736x/36/f6/69/36f669718113b996d282dde165f819ee.jpg" };
const alemania = { tipo: "buzo", id: "deu", nombre: "Alemania", talles: ["S", "M", "L"], precio: 40000, imagen: "https://i.pinimg.com/564x/7e/f5/4c/7ef54c69d75b813b3d375aa2e2f0e9dd.jpg" };
const andorra = { tipo: "buzo", id: "and", nombre: "Andorra", talles: ["S", "M", "L"], precio: 70000, imagen: "https://i.pinimg.com/736x/48/28/57/482857417d93cd5adaf36ffe5ce41c17.jpg" };
const angola = { tipo: "buzo", id: "ago", nombre: "Angola", talles: ["S", "M", "L"], precio: 15000, imagen: "https://i.pinimg.com/736x/c4/81/51/c48151a39dcd5855eaad318ee09dd67d.jpg" };
const antartida = { tipo: "buzo", id: "ata", nombre: "Antártida", talles: ["S", "M", "L"], precio: 90000, imagen: "https://i.pinimg.com/564x/80/b6/1d/80b61dbd1fe0cdc4dde2660ee1616c8c.jpg" };
const antigua = { tipo: "buzo", id: "atg", nombre: "Antigua y Barbuda", talles: ["S", "M", "L"], precio: 150000, imagen: "https://i.pinimg.com/564x/4e/a8/ef/4ea8efcbf8396fc4ab3da18a40675e97.jpg" };
const arabiaSaudita = { tipo: "buzo", id: "sau", nombre: "Arabia Saudita", talles: ["S", "M", "L"], precio: 100000, imagen: "https://i.pinimg.com/564x/02/c8/e2/02c8e2a1a6f3d0e833b7f7da5707ffd8.jpg" };
const argelia = { tipo: "buzo", id: "dza", nombre: "Argelia", talles: ["S", "M", "L"], precio: 110000, imagen: "https://i.pinimg.com/564x/a1/80/68/a18068c079fe1bbce10f5f2aa4b23ceb.jpg" };
const argentina = { tipo: "buzo", id: "arg", nombre: "Argentina", talles: ["S", "M", "L"], precio: 120000, imagen: "https://i.pinimg.com/564x/aa/5e/be/aa5ebef6d06a12309d1221b9cded3436.jpg" };
const armenia = { tipo: "buzo", id: "arm", nombre: "Armenia", talles: ["S", "M", "L"], precio: 100000, imagen: "https://i.pinimg.com/564x/92/13/95/92139560a46421ceba4fa6c02518996b.jpg" };
const aruba = { tipo: "buzo", id: "abw", nombre: "Aruba", talles: ["S", "M", "L"], precio: 100000, imagen: "https://i.pinimg.com/564x/d7/66/77/d76677968aa090994227632730d64c06.jpg" };
const productos = [afganistan, albania, alemania, andorra, angola, antartida, antigua, arabiaSaudita, argelia, argentina, armenia, aruba]

const shopSection = document.getElementById("shop")
productos.forEach(producto => {
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
        <div>
            <select name="" id="" class = "select">
                ${producto.talles.map(talle => `<option class = "select" value="${talle}">${talle}</option>`)}
            </select>
        </div>
    </div>`
    shopSection.appendChild(article)
});

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

const addToCart = document.getElementById("sumarAlCarrito")
const addtToCartButtons = document.getElementsByClassName('addToCart')
for (const button of addtToCartButtons) {
    button.addEventListener('click', (e) => {
        const producto =
            productos.find((producto) =>
                e.target.id == producto.id)
        agregarAlCarrito(producto)
    })
}
