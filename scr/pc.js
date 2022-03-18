// JUEGOS PC

const carrito = [];

const productos =[
    { id: 1, nombreJuego: "INJUSTICE 2 (LEGENDARY EDITION) PC", precio: 1290, stock:0, imagen: '../imagenes/1629588993-injustice-2-legendary-edition-steam-key-global.jpg', },
    { id: 2, nombreJuego: "GRAND THEFT AUTO V PC", precio: 2490, stock:10, imagen: '../imagenes/1629589010-grand-theft-auto-v-premium-online-edition-rockstar-games-launcher-key-global.jpg' },
    { id: 3, nombreJuego: "FIFA 20 PC", precio: 2990, stock:10, imagen: '../imagenes/1629589022-fifa-20-origin-clave-global.jpg' },
    { id: 4, nombreJuego: "MORTAL KOMBAT 11 PC", precio: 5990, stock:0, imagen: '../imagenes/1629589047-mortal-kombat-11-steam-key-global.jpg' },
    { id: 5, nombreJuego: "HELLO NEIGHBOR PC", precio: 4990, stock:10, imagen: '../imagenes/1637359439-hello-neighbor-pc.jpg' },
    { id: 6, nombreJuego: "FALL GUYS PC", precio: 2650, stock:10, imagen: '../imagenes/1637360187-fall-guys-pc.jpg' },
    { id: 7, nombreJuego: "DAYS GONE PC", precio: 1550, stock:10, imagen: '../imagenes/1637361485-days-gone-pc.jpg' },
    { id: 8, nombreJuego: "THE WITCHER 3 PC", precio: 3250, stock:10, imagen: '../imagenes/1637361723-the-witcher-3-wild-hunt-goty-pc.jpg' },
    ];

generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
        <div class="product"> <img src="${elementoDelArray.imagen}">
            <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                <li class="icon mx-3"><span class="far fa-heart"></span></li>
                <li class="icon"><span onclick="agregarAlCarrito(${elementoDelArray.id})"class="fas fa-shopping-bag"></span></li>
            </ul>
        </div>
        <div class="tag bg-red">${(elementoDelArray.stock > 0) ? 'STOCK DISPONIBLE' : 'SIN STOCK'}</div>
        <div class="title pt-4 pb-1">${elementoDelArray.nombreJuego}</div>
        <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span
                class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
        </div>
        <div class="price">$${elementoDelArray.precio}</div>
    </div>`
    });
    mostrarCardsEnElHTML(acumuladorDeCards)
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-pc").innerHTML = cards;
};

function buscadorDeJuegos() {
    const nombreProductoBuscado = document.getElementById("producto-buscado-pc").value.toUpperCase().trim();

    const productosEncontrados = productos.filter((producto) => {
        return producto.nombreJuego.toUpperCase().match(nombreProductoBuscado);
    });
    generarCards(productosEncontrados);
}

// CARRITO DE COMPRAS

const agregarAlCarrito = (productoId) => {
    const productoAgregado = productos.find(producto => producto.id === productoId);
    carrito.push(productoAgregado);
    document.getElementById("contidadProductos").innerHTML = carrito.length;
};