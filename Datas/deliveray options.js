export const deliveryOptions = [{
  id: '11',
  deliveryDays: 7,
  priceCents: 0
},{
  id:'21',
  deliveryDays: 3,
  priceCents: 2000
},{
  id:'31',
  deliveryDays: 1,
  priceCents: 2500
}]

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

    deliveryOptions.forEach((option)=>{
      if (option.id === deliveryOptionId){
        deliveryOption = option;
      }5
    });

    return deliveryOption || deliveryOptions[0];
}