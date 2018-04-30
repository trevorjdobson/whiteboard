'use strict';

function isDiff(obj1,obj2){
  if(Object.keys(obj1).length !== Object.keys(obj2).length){
    return true;
  }
  for(let key in obj1){
    if(!obj2.hasOwnProperty(key)){
      return true;  
    }
    if(obj2.hasOwnProperty(key) && obj1[key] !== obj2[key]){
      return true;
    }
    return false;
  }
}