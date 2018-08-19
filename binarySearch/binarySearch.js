function binarySearch(array, low, high, target) {
  if (low > high) return -1;

  var mid = Math.floor((low + high) / 2);
  if (array[mid] > target) {
    return binarySearch(array, low, mid - 1, target);
  } else if (array[mid] < target) {
    return binarySearch(array, mid + 1, high, target)
  } else {
    return mid;
  }
}

function bsearchWithoutRecursion(array, target) {
  var low = 0;
  var high = array.length - 1;
  while(low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (array[mid] > target) {
      high = mid - 1;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

function sort(arr) {
  var temp;
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

var data = sort([1,2,34335,12143,4545,5,454,54,545,645,645,650]);
console.log(data);
console.log(bsearchWithoutRecursion(data, 5));
console.log(binarySearch(data, 0, data.length, 5));