/*TOGGLE ES MOSTRAR LO DEL HTML*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

/*--EVENTO QUE ABRE LOS TOGGLE--*/
menuEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    /*--SE AGREGA SI ESTÁ O NO ESTÁ A TRAVÉS DEL TOGGLE--*/
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() { 
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
function toggleCarritoAside() { 
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive'); 
    desktopMenu.classList.add('inactive');
}

/*SE AGRAGARÁN TODOS LOS ELEMENTOS DENTRO DEL ARRAY */
const productList = [];

productList.push ({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push ({
    name: 'Celular',
    price: 340,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push ({
    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
/*--SE CREAN LOS ELEMENTOS POR CATEGORÍAS (esto se hace a través del "createElement"), POR EJEMPLO PRIMERO VA EL DIV & DESPUÉS LA IMG.
ADEMÁS SE AÑADEN NUEVOS ATRIBUTOS QUE REEMPLAZAN A LOS ANTERIORES CON EL "setAttribute" --*/

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card' );
    }
    const img = document.createElement('img');
    function cargarProductos(arr) {

        for (product of arr) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
        
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