'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

 /* var sum = 0

  for (let i = 0; i < num.length; i++) {

    sum += num[i] * Math.pow(2, num.length - 1 - i);
    
  }
  return sum */

  var sum = 0
  var position = 0;
  for (let i = num.length-1; i >= 0; i--) {
    sum += num[i] * Math.pow(2, position)
    position++
    
  }
  return sum

}

function DecimalABinario(num) {
  // tu codigo aca

  var resultado = []
  while(num >= 1) {
    resultado.unshift(num % 2)
    
    num = Math.floor(num / 2)
    
  }
    return resultado.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}