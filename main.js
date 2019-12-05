var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'These are nice and cozy socks.',
    image: './assets/vmSocks-green-onWhite.jpg',
    link: 'https://www.vuemastery.com/',
    inventory: 8,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId : 2234,
        variantColor : "green"
      },
      {
        variantId : 2235,
        variantColor : "blue"
      }
    ],
    sizes : ["S", "M", "L", "XL"]
  }
})
