/* What will be the output of the below code: */

var productDetails = {
  price: 20.99,
  get_price : function() {
    return this.price;
  }
};

var product = Object.create(productDetails);

product.price = 19.99;

delete product.price;

console.log(product.get_price());  // 20.99