const afganistan = { tipo: "buzo", id: "afg", nombre: "Afganistán", talles: ["S", "M", "L"], precio: 30000, imagen: "https://i.pinimg.com/564x/a1/80/68/a18068c079fe1bbce10f5f2aa4b23ceb.jpg", stock: 1 };
const albania = { tipo: "buzo", id: "alb", nombre: "Albania", talles: ["S", "L"], precio: 50000, imagen: "https://i.pinimg.com/564x/d7/66/77/d76677968aa090994227632730d64c06.jpg", stock: 1 };
const alemania = { tipo: "buzo", id: "deu", nombre: "Alemania", talles: ["S", "M", "L"], precio: 40000, imagen: "https://i.pinimg.com/564x/7e/f5/4c/7ef54c69d75b813b3d375aa2e2f0e9dd.jpg", stock: 1 };

const productos = [afganistan, albania, alemania]


const shopSection = document.getElementById("shop") //me traigo el elemento de html
productos.forEach(producto => {
    //por cada producto agregar al padre un hijo
    const article = document.createElement("article") // creo un hijo al padre
    article.innerHTML = `<img class="imgShop" src="${producto.imagen}" alt="">
    <div>
        <div>
            <h2>${producto.nombre}</h2>
            <p>$${producto.precio}</p>
        </div>
        <div>
            <button id="${producto.id}" class = "addToCart">Sumar al carrito / add to cart</button>
        </div>
        <div>
            <select name="" id="">
                ${producto.talles.map(talle => `<option value="${talle}">${talle}</option>`)}
            </select>
        </div>
    </div>`

    shopSection.appendChild(article)//agregar un article al padre(shop)
});
//agregar una prenda al carrito
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
}
//encontrar el producto por el id para sumarlo al carrito
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
