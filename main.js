/*TOGGLE ES MOSTRAR LO DEL HTML*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const aside = document.querySelector('#shoppingCartContainer');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container');

/*--EVENTO QUE ABRE LOS TOGGLE--*/
menuEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
menuHamIcon.addEventListener('click', toggleMobileMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
/*--SE AGREGA SI ESTÁ O NO ESTÁ A TRAVÉS DEL TOGGLE--*/
function toggleDesktopMenu() {
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleCarritoAside() {
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}
/*SE AGRAGARÁN TODOS LOS ELEMENTOS DENTRO DEL ARRAY */
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://m.media-amazon.com/images/I/61wwckqhH6L._AC_SX569_.jpg',
});
productList.push({
    name: 'Celular',
    price: 340,
    image: 'https://m.media-amazon.com/images/I/612GU3UttSL._AC_SX569_.jpg',
});
productList.push({
    name: 'Computadora',
    price: 620,
    image: 'https://m.media-amazon.com/images/I/81wiT0EDVoL._AC_SX679_.jpg',
});
/*--SE CREAN LOS ELEMENTOS POR CATEGORÍAS (esto se hace a través del "createElement"), POR EJEMPLO PRIMERO VA EL DIV & DESPUÉS LA IMG.
ADEMÁS SE AÑADEN NUEVOS ATRIBUTOS QUE REEMPLAZAN A LOS ANTERIORES CON EL "setAttribute" --*/

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card' );
}

function cargarProductos(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        /*SE AGREGAN LOS ELEMENTOS CREADOS CON LA RELACIÓN PADRE - HIJO A TRAVÉS DEL "appendChild" */
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

cargarProductos(productList);