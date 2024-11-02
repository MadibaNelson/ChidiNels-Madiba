import {cart, matchingitem} from "../Datas/cart.js";
import {products} from "../Datas/products.js";
import {currencyFormat} from "./utils/money.js";
 
let productsHtml = '';

products.forEach((product) => {
  productsHtml += `
  <div class="products">
    <img class="products-img" src="${product.image}">
    <div class="product-texts">
      <div class="product-name">
      ${product.name} 
      </div>
      <div class="product-rating">
        <img class="star-img" src="image/${((product.rating.stars)*10)+'.png'}">
        <div class="product-count">
          ${product.rating.count}
        </div>
      </div>
      
      <div class="product-price">
        $${currencyFormat(product.pricecent)}
      </div>
      <div class="select-sec">
        <select class="js-selector-${product.id}">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
        <div class="favorites"><img class="fav-img" src="image/Fav image.png"></div>
      </div>
    </div>
    <div class="inter-button">
      <button class="add-button js-add-to-cart"
      data-product-id="${product.id}">
        <div class="js-added-${product.id}"></div>
        Add to Cart
      </button>
    </div>
  </div>`;
})

document.querySelector('.js-products-container').innerHTML = productsHtml

const html =`
<div class="menu-bar">
  <div class="home-button">Home</div>
  <div class="cat-button">Categories</div>
  <div class="fav-button">Favourites</div>
  <div class="help-button">Help</div>
  <div class="log-out">Log-out</div>
</div>`;

let menu = false;

document.querySelector('.js-menu-button').addEventListener('click', ()=>{
  if(!menu){
    document.querySelector('.js-menu-bar')
      .innerHTML = html;
    menu = true;
  } else if(menu = true){
    document.querySelector('.js-menu-bar')
      .innerHTML = '';
    menu = false;
  }
})

document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>{
    button.addEventListener('click', ()=>{
      const productId = button.dataset.productId;

      matchingitem(productId);

      let cartQuantity = 0;
      cart.forEach((item)=>{
        cartQuantity += item.quantity;
      });
  
          
      document.querySelector('.js-cart-num').innerHTML = cartQuantity;

      document.querySelector(`.js-added-${productId}`).innerHTML = '<div class="added-display">Added &#10003</div>';
      setTimeout(()=>{
        document.querySelector(`.js-added-${productId}`).innerHTML = '';
      }, 1500)
    })
  });


let cartQuantity = 0;
cart.forEach((item)=>{
  cartQuantity += item.quantity;
});
      
document.querySelector('.js-cart-num').innerHTML = cartQuantity;

