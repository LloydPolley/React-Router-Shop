
let BasketData = {
  items: [],
  totalCost: 0,
  numberOfItems: 0,
  addItem: function(json){
    let newItem = {json};
    this.items.push(newItem);
    this.numberOfItems++;
  },
  removeItem: function (product){
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].id === product){
        this.items.splice(i, 1);
      }
    }
    this.numberOfItems--;
  }
}


export default BasketData; 