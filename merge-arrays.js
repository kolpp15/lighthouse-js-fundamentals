function merge(arrayOne, arrayTwo){
  for (let i = 0; i < arrayTwo.length; i++){
    arrayOne.push(arrayTwo[i]);
  }
  for (let i = 0; i < arrayOne.length; i++){
    for (let j = i + 1; j < arrayOne.length; j++){
      if (arrayOne[i] > arrayOne[j]){
        let sample = arrayOne[i];
        arrayOne[i] = arrayOne[j];
        arrayOne[j] = sample;
      }
    }
  }
  return arrayOne;
}




console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);

