var array = [1, 1, 'a', 1, '1', '1'];

function unique(array) {
  var res = [];

  for(var i = 0, len = array.length; i < len; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res [j]) {
        break;
      }
    }

    if (j === resLen) {
      res.push(array[i]);
    }
  }

  return res;
}


function uniqueByIndexOf(array) {
  var res = [];
  for(var i = 0, len = array.length; i < len; i++) {
    if (res.indexOf(array[i]) === -1) {
      res.push(array[i]);
    }
  }

  return res;
}


// function uniqueBySort(array) {
//   var res = [];
//   //copy a data
//   var sortedArray = array.concat().sort();

//   for(var i = sortedArray.length -1; i > 0; i--) {
//     if (sortedArray[i] !== sortedArray[i - 1]) {
//       res.push(sortedArray[i]);

//       if (i === 1) {
//         res.push(sortedArray[0]);
//       }
//     } else if (i === 1) {
//       res.push(sortedArray[0]);
//     }
//   }

//   return res;
// }

function uniqueBySort(array) {
  var res = [];
  //copy a data

  if (array.length <= 1) return array;

  var sortedArray = array.concat().sort();
  res.push(sortedArray[0]);
  for(var i = 1, len = sortedArray.length; i < len; i ++) {
    if (sortedArray[i] !== sortedArray[i - 1]) {
      res.push(sortedArray[i])
    }
  }

  return res;
}


console.log(unique(array));
console.log(uniqueByIndexOf(array));
console.log(uniqueBySort(array));