
// You should implement your task here.

function mySort(array) {
    let result = array;
    let buffer =0;
    for (let i = 0; i < result.length; i++) {
      if (result[i]>result[i+1]) {
        buffer = result[i];
        result[i] = result[i+1];
        result[i+1] = buffer;
      }
    }
    return result;
}

module.exports = function towelSort (matrix) {
    if (!matrix || matrix === []) return [];
      let result = new Array;
      let arr = new Array;
      for (let i = 0; i < matrix.length; i++) {
          if (i % 2 === 0) {
            arr.push(mySort(matrix[i]));
          } else {
            arr.push(mySort(matrix[i]).reverse());
          }
      }
  
      for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
          }
      }
  
    return result;
  }
  

    
  
