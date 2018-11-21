
let BasketData = {
  items: [],
  totalCost: 0,
  addItem: function(id, name, url, albumId){
    let newItem = {id ,name, url, albumId};
    this.items.push(newItem);
  },
  removeItem: function (product){
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].id === product){
        this.items.splice(i, 1);
      }
    }
  }
}


export default BasketData; 