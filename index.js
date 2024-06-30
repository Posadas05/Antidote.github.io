var product1 = document.getElementaryById("product1")
var qty1 = document.getElementaryById("qty1")
var price1 = document.getElementaryById("price1")

var product2 = document.getElementaryById("product2")
var qty2 = document.getElementaryById("qty2")
var price2 = document.getElementaryById("price2")

var carts = document.getElementaryById("carts")
var total = document.getElementaryById("total")
var cash = document.getElementaryById("cash")
var change = document.getElementaryById("change")

function addOrder(){
  carts.textContent=""
  if (parseFloat(qty1.value) > 0){
    var order= qty1.value.toString() + ' pc/s × '+ price1.textContent + '------'+ product1.textContent + '------ Php' + (parseFloat(qty1.value)*parseFloat(price1.textConten 
    //carts.textContent += carts.value.toString() + "\n";
    carts.textContent += order
  }
  if (parseFloat(qty1.value) > 0){
    var order= qty1.value.toString() + ' pc/s × '+ price1.textContent + '------'+ product1.textContent + '------ Php' + (parseFloat(qty1.value)*parseFloat(price1.textConten 
    //carts.textContent += carts.value.toString() + "\n";
    carts.textContent += order
  }
  }
qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
