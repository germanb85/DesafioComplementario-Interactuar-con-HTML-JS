// JUEGOS PS4

const carrito = [];

const productos =[
    { id: 1, nombreJuego: "JUST CAUSE 3 PS4", precio: 1290, stock:0, imagen: '../imagenes/1487351435-just-cause-3.jpg', },
    { id: 2, nombreJuego: "MARVEL'S SPIDER-MAN PS4", precio: 2490, stock:10, imagen: '../imagenes/1622859244-marvels-spider-man-miles-morales-ps4.jpg' },
    { id: 3, nombreJuego: "FIFA 22 PS4", precio: 2990, stock:10, imagen: '../imagenes/1626114274-fifa-22-ps4-pre-orden.jpg' },
    { id: 4, nombreJuego: "DEMON SLAYER PS4", precio: 5990, stock:0, imagen: '../imagenes/1626456997-demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-ps4.jpg' },
    { id: 5, nombreJuego: "HORIZON FORBIDDEN WEST PS4", precio: 4990, stock:10, imagen: '../imagenes/1643328265-horizon-forbidden-west-ps4-pre-orden.jpg' },
    { id: 6, nombreJuego: "RESIDENT EVIL VILLAGE PS4", precio: 2650, stock:10, imagen: '../imagenes/1622556819-resident-evil-village-ps4.jpg' },
    { id: 7, nombreJuego: "MORTAL KOMBAT 11 ULTIMATE PS4", precio: 1550, stock:10, imagen: '../imagenes/1605824309-mortal-kombat-11-ultimate-ps4.jpg' },
    { id: 8, nombreJuego: "GRAND THEFT AUTO PS4", precio: 3250, stock:10, imagen: '../imagenes/1634935101-grand-theft-auto-the-trilogy-the-definitive-edition-ps4.jpg' },
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
                <li class="icon"><span onclick="agregarAlCarrito(${elementoDelArray.id})" class="fas fa-shopping-bag"></span></li>
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
    document.getElementById("listado-ps4").innerHTML = cards;
};

function buscadorDeJuegos() {
    const nombreProductoBuscado = document.getElementById("producto-buscado-ps4").value.toUpperCase().trim();

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

