// JUEGOS XBOX

const carrito = [];

const productos =[
    { id: 1, nombreJuego: "WWE 2K18 XBOX ONE", precio: 1290, stock:0, imagen: '../imagenes/61bzmrruwyl1-27b52b31055b6412a415088783122996-640-0.jpg', },
    { id: 2, nombreJuego: "NBA 2K18 XBOX ONE", precio: 2490, stock:10, imagen: '../imagenes/91kfw1ug9xl-_ac_sl1500_1-f89c187a4d678a4e0b15057674824152-640-0.jpg' },
    { id: 3, nombreJuego: "ASSASSIN'S CREED VALHALLA XBOX ONE", precio: 2990, stock:10, imagen: '../imagenes/ac-valhalla-xbox-one1-cf179de08c4f7c582716056331323488-640-0.jpg' },
    { id: 4, nombreJuego: "FORTNITE XBOX ONE", precio: 5990, stock:0, imagen: '../imagenes/fortnite-the-last-laugh-xbox-one1-5886ba521336ef696716068654823165-640-0.jpg' },
    { id: 5, nombreJuego: "METAL GEAR SOLID V XBOX ONE", precio: 4990, stock:10, imagen: '../imagenes/metal-gear-solid-5-the-phantom-pain-ps4-fisico-play-for-fun-574801-mla20397012334_082015-f-d3ea0fa6c3b35aa98022246f80f23f60-640-0.jpg' },
    { id: 6, nombreJuego: "TOM CLANCY'S RAINBOW SIX XBOX ONE", precio: 2650, stock:10, imagen: '../imagenes/tom-clancys-rainbow-six-siegue-advance-edition-fisico-nuevo-d_nq_np_793454-mla27914085712_082018-f1-88cd253a08d2041ae815965233936862-640-0.jpg' },
    { id: 7, nombreJuego: "PROJECT CARS 2 XBOX ONE", precio: 1550, stock:10, imagen: '../imagenes/xcon2xbo1-xcxcxcxcxcxc-640-0.jpg' },
    { id: 8, nombreJuego: "NEED FOR SPEED XBOX ONE", precio: 3250, stock:10, imagen: '../imagenes/71glihccqpl-_sl1000_-c9e25781cbf87a8df9942f7c6ff87e48-640-0.jpg' },
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
    document.getElementById("listado-xbox").innerHTML = cards;
};

function buscadorDeJuegos() {
    const nombreProductoBuscado = document.getElementById("producto-buscado-xbox").value.toUpperCase().trim();

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