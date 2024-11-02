import {cart, removefromCart, updateDeliveryOption} from '../../Datas/cart.js';
import {products, getProduct} from '../../Datas/products.js';
import { currencyFormat } from '../utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions, getDeliveryOption } from '../../Datas/deliveray options.js';
import { renderPaymentSummary } from './paymentsummary.js';



export function renderOrderSummary() {
  let cartSummaryHtml = '';

  let cartQuantity = 0;

  cart.forEach((cartitem)=>{

    const productId = cartitem.productId;


    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartitem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();

    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');

    const dateString = deliveryDate.format('dddd, MMMM D');


    cartSummaryHtml += 
    `
      <div class="cart-cart js-cart-cart-${matchingProduct.id}">
      
        <div class="delivery-option-date">Delivery Date: ${dateString}</div>

        <div class="check-cart-div">
          <img class="cart-order-image" src="${matchingProduct.image}">
          <div class="check-texts-cart">
            <div class="cart-name">${matchingProduct.name}</div>
            <div class="cart-price">$${currencyFormat(matchingProduct.pricecent)}</div>
            <div class="cart-quan">
              <span class="js-cart-quan">Quantity: ${cartitem.quantity}</span> <span class="delete-span link-primary js-delete-link" data-product-id = "${matchingProduct.id}">Remove</span>
            </div>
          </div>
          <div class="del-time">
            <div>
              <strong>Choose a delivery option:</strong>
            </div>
            ${deliveryOptionsHtml(matchingProduct, cartitem)}
          </div>
        </div>
      </div>
    `;
       
    cartQuantity += cartitem.quantity;

    document.querySelector('.js-head-num')
    .innerHTML = cartQuantity;
  })

  function deliveryOptionsHtml(matchingProduct, cartitem) {
    let html = '';

    deliveryOptions.forEach((deliveryOption)=>{
      const today = dayjs();

      const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');

      const dateString = deliveryDate.format('dddd, MMMM D');

      

      const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${currencyFormat(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id === cartitem.deliveryOptionId;

      html += `
        <div class="delivery-options js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id = "${deliveryOption.id}">
          <input type="radio" ${isChecked ? 'checked' : ''} class="deliver-option-input" name="delivery-option-${matchingProduct.id}">
          <div class="delivery-option-text">
            <div class="delivery-option-date"> ${dateString}</div>
            <div class="delivery-option-price">${priceString} shipping</div>
          </div>
        </div>

      `
    });

    return html;
  }

  document.querySelector('.js-cart-div-sub')
    .innerHTML = cartSummaryHtml;


  document.querySelectorAll('.js-delete-link')
    .forEach((link)=>{
      link.addEventListener('click', ()=>{
        const productId = link.dataset.productId;
        removefromCart(productId);

        const Dbox = document.querySelector(`.js-cart-cart-${productId}`)

        Dbox.remove();

        renderPaymentSummary();
      })
    });

  document.querySelectorAll('.js-delivery-option')
    .forEach((element)=>{
      element.addEventListener('click', ()=>{
        const {productId, deliveryOptionId} = element.dataset;
        updateDeliveryOption(productId, deliveryOptionId);
        renderOrderSummary();
        renderPaymentSummary();
      });
    });
}
