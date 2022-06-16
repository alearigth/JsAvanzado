"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) {
    return array;
  }
  let pivot = array.shift();
  let left = [];
  let right = [];

  while (array.length) {
    let element = array.shift();

    if (element > pivot) {
      right.push(element);
    } else {
      left.push(element);
    }
  }

  return quickSort(left).concat(pivot).concat(quickSort(right));
}

let resultante = quickSort([1, 2, 7, 9, 10, 22, 4]);
console.log(resultante);

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let half = Math.floor(array.length / 2);

  if (array.length <= 1) {
    return array;
  }

  let left = array.splice(0, half);
  let right = array;

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return arr.concat(left).concat(right);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
