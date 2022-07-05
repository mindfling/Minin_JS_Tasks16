'use strict';

/*
### Плоский массив
Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.

**Input**: Array
**Output**: Array
function flatten(array) {
  // todo
}
console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
*/


// * функция получает на входе многомерный массив
// * возвращает плоский двумерный массив

let flattenArray = [];
let countIteration = 0;

function flatten(arr) {
  
  //деструктуризация массива с помощью рекурсии
  if (Array.isArray(arr)) {
    arr.forEach( elem => {
      console.log('countIteration: ', countIteration++, elem);
      flatten(elem);
    });

    return flattenArray;
  } else {
    console.log('this is simple elem', arr);
    //добав простой элем в плоский масс
    flattenArray.push( arr );
    console.log('result: ', flattenArray);
    return arr;
  }

  return 0;
}

//simple test
console.log( flatten([[[[12]], [[234, ['a']]], [1]], [2, 3]]) );
console.log('my   = ', flattenArray);
//use flat
console.log('flat = ', [[12, 234, 'a', [1]], [2, 3]].flat(Infinity) );