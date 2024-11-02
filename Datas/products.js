export function getProduct(productId) {
  let matchingProduct;

    products.forEach((product)=>{
      if (product.id === productId){
        matchingProduct = product;
      }
    });

    return matchingProduct
}


export const products = [{
  id: '135-24-firstimg-19',
  image: 'image/Golden Ring.jpeg',
  name: 'Golden Ring',
  rating: {
    stars: 4.5,
    count: 77
  },
  pricecent: 20020
}, {
  id: '357-46-secondimg-27',
  image: 'image/Black Diamond.jpeg',
  name: 'Black Diamond',
  rating: {
    stars: 5,
    count: 2101
  },
  pricecent: 610072
}, {
  id: '579-68-thirdimg-31',
  image: 'image/Slim-Point Gold Neckles.jpeg',
  name: 'Slim-Point Gold Neckles.jpeg',
  rating: {
    stars: 4,
    count: 89
  },
  pricecent: 25080
},{
  id: '791-80-forthimg-40',
  image: 'image/21 Set Piece Diamond.jpeg',
  name: '21 Set piece Diamond',
  rating: {
    stars: 5,
    count: 90
  },
  pricecent: 2200000
},{
  id: '913-02-fifthimg-56',
  image: 'image/Fine Gold Net WT 1000g.jpeg',
  name: 'Fine Gold Net WT 1000g',
  rating: {
    stars: 3,
    count: 29
  },
  pricecent: 9000010
},{
  id: '246-13-sixthtimg-62',
  image: 'image/The white crystal diamond.jpg',
  name: 'The White Crystal Diamond',
  rating: {
    stars: 4.5,
    count: 80
  },
  pricecent: 30000
},{
  id: '468-35-seventthimg-74',
  image: 'image/The Hour-Glass Diamond Gold Pin.jpeg',
  name: 'The Hour-Glass Diamond Gold Pin',
  rating: {
    stars: 3.5,
    count: 79
  },
  pricecent: 50004
},{
  id: '680-57-eightimg-86',
  image: 'image/Liberian Gold Diamond.jpeg',
  name: 'Liberian Gold Diamond',
  rating: {
    stars: 4.5,
    count: 70
  },
  pricecent: 90440
},{
  id: '086-79-ninthimg-98',
  image: 'image/Mined Diamond Neckles.jpeg',
  name: 'Mined Diamond Neckles',
  rating: {
    stars: 3,
    count: 73
  },
  pricecent: 70220
},{
  id: '864-91-imgtrnth-001',
  image: 'image/Neckles Scottish Diamond.jpeg',
  name: 'Neckles Scottish Diamond',
  rating: {
    stars: 4.5,
    count: 44
  },
  pricecent: 63400
},{
  id: '113-19-11thingimg-101',
  image: 'image/Resolution 12piece Gold Watch.jpeg',
  name: 'Resolution 12piece Gold Watch',
  rating: {
    stars: 2.5,
    count: 7
  },
  pricecent: 85020
},{
  id: '331-132-imgtwelveth-120',
  image: 'image/Brilliance Fine Jewelry CaratDiamond Yellow-Gold.jpeg',
  name: 'Brilliance Fine Jewelry Carat Diamond Yellow Gold',
  rating: {
    stars: 4.5,
    count: 22
  },
  pricecent: 77240
},{
  id: '551-654-fitingimg-0005',
  image: 'image/Black Ring Diamond.jpeg',
  name: 'Black Ring Diamond',
  rating: {
    stars: 4,
    count: 44
  },
  pricecent: 100000
},{
  id: '2234-0012-makllin-5640',
  image: 'image/Crystal Carat Ring.jpeg',
  name: 'Crystal Carat Ring',
  rating: {
    stars: 5,
    count: 801
  },
  pricecent: 66600
},{
  id: '2134-76443=gdrrgb-65',
  image: 'image/Gold Tone Finish Prong Set.jpeg',
  name: 'Gold Tone Finish Prong Set',
  rating: {
    stars: 2,
    count: 435
  },
  pricecent: 92400
},{
  id: '4432-dfgvf-3545h-',
  image: 'image/Egyptian Gold Diamond Set.jpg',
  name: 'Egyptian Gold Diamond Set',
  rating: {
    stars: 5,
    count: 7656
  },
  pricecent: 64500
},{
  id: 'fwf32-4243hhy-6432',
  image: 'image/American Diamond Wrist Set.jpg',
  name: 'American Diamond Wrist Set',
  rating: {
    stars: 3,
    count: 323
  },
  pricecent: 65400
},{
  id: '7766-0eff-54',
  image: 'image/American Diamond Wrist Watch.jpg',
  name: 'American Diamond Wrist Watch',
  rating: {
    stars: 4.5,
    count: 134
  },
  pricecent: 40020
},{
  id: 'dfrgrtgr-56674-gse23',
  image: 'image/Moissanite-two-tone-stainless-steel-rolex-watch-500x500.jpg',
  name: 'Moissanite-two-tone-stainless-steel-rolex-watch-500x500',
  rating: {
    stars: 1.5,
    count: 444
  },
  pricecent: 90020
},{
  id: 'fuk12-oiuh-333-1110',
  image: 'image/Gold Wrist Set-Box.jpeg',
  name: 'Gold Wrist Set-Box',
  rating: {
    stars: 5,
    count: 23
  },
  pricecent: 75000
},{
  id: '32423ewfe0653-43rr32123',
  image: 'image/3 to1-500x500 Gold Wrist Watch.jpg',
  name: '3 to1-500x500 Gold Wrist Watch',
  rating: {
    stars: 3,
    count: 233
  },
  pricecent: 35000
},{
  id: '23wdw309-434-ytr5480-55rere',
  image: 'image/Craft British Gold Set.jpeg',
  name: 'Craft British Gold Set',
  rating: {
    stars: 3.5,
    count: 723
  },
  pricecent: 31000
},{
  id: '213dwr05-8564ew',
  image: 'image/Natural Pure Diamond.jpeg',
  name: 'Natural Pure Diamond',
  rating: {
    stars: 5,
    count: 71223
  },
  pricecent: 416000
},]