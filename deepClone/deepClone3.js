function getType (obj) {
  var toString = Object.prototype.toString
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }

  return map[toString.call(obj)]
}


function deepClone (data) {
  var type = getType(data), object, i, length;

  if (type === 'array') {
    object = []

    for(i = 0, length = data.length; i < length; i++) {
      object.push(deepClone(data[i]))
    }

  } else if (type === 'object') {
    object = {}

    for(i in data) {
      object[i] = deepClone(data[i])
    }
  } else {
    return data
  }
}

