let BasketData = {
  items: [],
  totalCost: 0,
  numberOfItems: 0,
  addItem: function(product) {
    this.items.push(product);
    this.numberOfItems++;
  },
  removeItem: function(product) {

    //remove from basket
    let removeBasketIndex = this.items.findIndex(function(basketProduct){
      return basketProduct.key === product.key;
    });
    this.items.splice(removeBasketIndex, 1);
    console.log(removeBasketIndex);

    //change selected value to false in the window.products files
    let productWindowItem = window.products.find(function(item){
      return item.key === product.key;
    });
    productWindowItem.selected = false;
    console.log(productWindowItem);

    this.numberOfItems--;
  }
};

export default BasketData;
