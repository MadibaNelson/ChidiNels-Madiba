import { cart } from "../../Datas/cart.js";
import { getProduct } from "../../Datas/products.js";
import {  getDeliveryOption } from "../../Datas/deliveray options.js";
import { currencyFormat } from "../utils/money.js";

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem)=>{
    const product = getProduct(cartItem.productId);
    productPriceCents += product.pricecent * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;

  })

  const totalBeforeTax = productPriceCents + shippingPriceCents;

  const taxCents = totalBeforeTax * 0.1;
  const totalCents = totalBeforeTax + taxCents;

  const paymentSummaryHtml = `
    <div class="check-box-tprice1">         
      <div class="order-sum-text">Order Summary</div>
      <div class="sp1">
        <div class="sp">
          <div class="js-payment-cart-quantity">Items (0):</div>
          <div>$${currencyFormat(productPriceCents)}</div>
        </div>
        <div class="sp">
          <div>Shipping & Handling:</div> <div>$${currencyFormat(shippingPriceCents)}</div>
        </div>
      </div>
      <div class="sp2">
        <div class="sp">
          <div>Total before tax:</div><div>$${currencyFormat(totalBeforeTax)}</div>
        </div>
        <div class="sp">Estimated tax (10%):  <div>$${currencyFormat(taxCents)}</div></div>
      </div>
    </div>
    <div class="check-box-tprice2">
      <div class="order-total-text">
        <div>Order total:</div>  
        <div>$${currencyFormat(totalCents)}</div>
      </div>
      <div>
        <button  class="check-box-button">Place your Order</button>
      </div> 
    </div> 
  `
  

  document.querySelector('.js-check-box-tprice')
    .innerHTML = paymentSummaryHtml;

    let cartQuantity = 0;
    cart.forEach((item)=>{
      cartQuantity += item.quantity;

    });

  document.querySelector('.js-payment-cart-quantity')
    .innerHTML = `Items (${cartQuantity})`;
}