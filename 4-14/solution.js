'use strict';

function highestProduct(arr){
  if(arr.length === 2){
    return arr[0] * arr[1];
  }
  let highest = 0;
  let sHighest = 0;
  let lowest = 0;
  let sLowest = 0;
  for(let value of arr){
    if(value >= highest){
      sHighest = highest;
      highest = value;
    } else if(value >= sHighest){
      sHighest = value;
    }
    if(value <= lowest){
      sLowest = lowest;
      lowest = value;
    } else if(value <= sLowest){
      sLowest = value;
    }
  }
  let productOne = highest * sHighest;
  let productTwo = lowest * sLowest;
  if(productOne > productTwo){
    return productOne;
  }
  return productTwo;
};

console.log('[1,2,3,4]', highestProduct([1, 2, 3, 4]));
console.log('[1,2,-10,-20]', highestProduct([1, 2, -10, -20]));
console.log('[1,2,-10,4]', highestProduct([1, 2, -10, 4]));
console.log('[10,20,-10,-20]', highestProduct([10, 20, -10, -20]));