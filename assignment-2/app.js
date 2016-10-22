(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService(){
  var service = this;

  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "apples", quantity: 15 },
    { name: "oranges", quantity: 12 },
    { name: "bananas", quantity: 30 },
    { name: "pears", quantity: 20 },
  ];

  var boughtItems = [];

  service.buyItem = function(itemIndex){
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  }

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
