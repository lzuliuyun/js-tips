function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var base = Math.floor(arr.length / 2);
  var baseEle = arr.splice(base, 1)[0];
  var left =[], right = [];

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] < baseEle) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([baseEle], quickSort(right));
}


console.log(quickSort([1,2,7,9,1,0,11,22,66338,9,2,354354455,56756,756,765,756,76775475,4245]));