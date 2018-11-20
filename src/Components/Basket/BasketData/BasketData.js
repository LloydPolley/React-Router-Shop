
let BasketData = {
  items: [],
  totalCost: 0,
  addItem: function(id, name, url, albumId){
    let newItem = {id ,name, url, albumId};
    this.items.push(newItem);
  },
  removeItem: function (name){


    var index = 1;
    this.items.splice(index, 1);
  }
}


export default BasketData;