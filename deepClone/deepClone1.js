function deepClone (source) {
  if (typeof source !== 'object') {
    return source
  }

  var result = Array.isArray(source) ? [] : {}
  for(var key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object') {
        result[key] = deepClone(result[key])
      } else {
        result[key] = source[key]
      }
    }
  }

  return result
}