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

  if (typeof str !== 'string') return;

  const strArr = str.split('');

  // for (let i = 0; i < strArr.length; i++) {
  //   for (let j = i + 1; j < strArr.length; j++) {
  //     if (strArr[i] === strArr[j]) {
  //       return false;
  //     }
  //   }
  // }

  let strSet = new Set();
  for (let i = 0; i < strArr.length; i++) { //?
    if (strSet.has(strArr[i])) {
      return false;
    }
    strSet.add(strArr[i]);
  }

  return true;
}

//tests
console.log(isUnique('abcdef')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcabc')) // -> false
console.log(isUnique( '1231234' )) // -> false
console.log(isUnique( 1231234 )) // -> undefined not string
