export function currencyFormat(pricecent) {
  return (Math.round(pricecent) / 100).toFixed(2)
}

export function cartQuantity() {
  let cartQuantity = 0;
    cart.forEach((item)=>{
      cartQuantity += item.quantity;

    });
}