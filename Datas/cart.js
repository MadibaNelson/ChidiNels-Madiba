export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
  cart = [{
  productId: '331-132-imgtwelveth-120',
  quantity: 2,
  deliveryOptionId: '1'
},{
  productId: '791-80-forthimg-40',
  quantity: 1,
  deliveryOptionId: '2'
}];
}

function saveToStorage () {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function matchingitem(productId) {

  const selectorValue = document.querySelector(`.js-selector-${productId}`);

  const selectedValue = Number(selectorValue.value);

  let matchedItem;

      cart.forEach((item)=>{
        if(productId === item.productId){
          matchedItem = item;
        }
      });

      if(matchedItem){
        matchedItem.quantity += selectedValue;   
      } else {
        cart.push({
          productId:productId,
          quantity: selectedValue,
          deliveryOptionId: '1'
        });
      };

      saveToStorage();
}

export function removefromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem)
    }
  })

  cart = newCart;

  let cartQuantity = 0;
  cart.forEach((item)=>{
    cartQuantity += item.quantity;

  });

  document.querySelector('.js-head-num')
  .innerHTML = cartQuantity;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchedItem;

    cart.forEach((cartitem)=>{
      if(productId === cartitem.productId){
        matchedItem = cartitem;
      }
    });

  matchedItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}
