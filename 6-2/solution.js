function closest(objArr, k, locObj){
  
  for(let i =0; i < objArr.length; i++){
    let dist = Math.sqrt((objArr[i].x - locObj.x)^2 + (objArr[i].y - locObj.y)^2);
    objArr[i].distance = dist
    objArr[i].tally = 0;
  }
  
  objArr.sort((a, b) => a.distance-b.distance);
  console.log('distances', objArr)
  let closest = [];
  
  for(let j=0; j < k; j++){
    closest.push(objArr[j]);
  }

  for(let x=0; x < closest.length; x++){
    for(let z=0; z<closest.length; z++){
      if(closest[x].label === closest[z].label){
        closest[x].tally++;
      }
    }
  }
  console.log('closest obj', closest)
  
  let majority = closest[0];
  
  for(let a=0; a<closest.length; a++){
    if(closest[a].tally > majority.tally){
      majority = closest[a];
    }
  }
  return majority.label;
}

closest([{x: 10, y: 600, label: "huh"}, {x: 6, y: 7, label: "huh"},{x: 15, y : 70, label: "you"}, {x: 6, y: 5, label: "you"}], 3, {x: 5, y:7});
