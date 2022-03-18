// JUEGOS PS5

const carrito = [];

const productos =[
    { id: 1, nombreJuego: "FIFA 21 PS5", precio: 1290, stock:0, imagen: '../imagenes/1606595217-fifa-21-ps5.jpg', },
    { id: 2, nombreJuego: "RESIDENT EVIL 3 PS5", precio: 2490, stock:10, imagen: '../imagenes/1619052457-resident-evil-3-ps5.jpg' },
    { id: 3, nombreJuego: "PES 2021 PS5", precio: 2990, stock:10, imagen: '../imagenes/1619053073-pes-2021-ps5.jpg' },
    { id: 4, nombreJuego: "THE LAST OF US PART II PS5", precio: 5990, stock:0, imagen: '../imagenes/1623456613-the-last-of-us-part-ii.jpg' },
    { id: 5, nombreJuego: "RED DEAD REDEMPTION 2 PS54", precio: 4990, stock:10, imagen: '../imagenes/1625862730-red-dead-redemption-2-ps5.jpg' },
    { id: 6, nombreJuego: "CALL OF DUTY WWII PS5", precio: 2650, stock:10, imagen: '../imagenes/1625863311-call-of-duty-wwii-gold-edition-full-espanol-ps5.jpg' },
    { id: 7, nombreJuego: "WWE 2K20 PS5", precio: 1550, stock:10, imagen: '../imagenes/1625865691-wwe-2k20-ps5.jpg' },
    { id: 8, nombreJuego: "HORIZON ZERO DAWN PS5", precio: 3250, stock:10, imagen: '../imagenes/1635463935-horizon-zero-dawn-complete-edition-ps5.jpg' },
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
    document.getElementById("listado-ps5").innerHTML = cards;
};

function buscadorDeJuegos() {
    const nombreProductoBuscado = document.getElementById("producto-buscado-ps5").value.toUpperCase().trim();

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
