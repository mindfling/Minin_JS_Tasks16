'use strict';

/*
### Уникальность всех символов в строке
Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
*/

function isUnique(str) {

  if (typeof str !== 'string') {
    return;
  }

  const strArr =  [];
  for (let i = 0, len = str.length; i < len; i++) {
    strArr.push(str[i]);
  }

  for (let i = 0; i < strArr.length; i++) {
    for (let j = i + 1; j < strArr.length; j++) {
      if (strArr[i] === strArr[j]) {
        return false;
      }
    }
  }

  return true;
}

//tests
console.log(isUnique('abcdef')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcAde123')) // -> false
console.log(isUnique( '1234987' )) // -> false
console.log(isUnique( '1234981' )) // -> false
console.log(isUnique( 1234987 )) // -> false
