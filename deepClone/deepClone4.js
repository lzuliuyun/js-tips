//该版本不能处理function以及基础类型的RegExp Date，因为在一开始，未区分这几个类型。
//对于属于array，object的类型，则其属性为RegExp Date的正常，因为已经知道当前的类型，所以，是直接赋值的
//简言之，外层未做基本类型的细致判断，内层做了隔离判断
var util = (function() {
  var type = {};
  ['Null', 'Undefined', 'Number', 'Boolean', 'String', 'Date', 'Function', 'RegExp', 'Array', 'Object'].forEach(function(item) {
    type['[object ' + item + ']'] = item.toLowerCase()
  });

  function getType (obj) {
    return type[Object.prototype.toString.call(obj)]
  }

  return {
    getType: getType
  }
})()

function deepCopy (source) {
   //如果obj不是对象，那么直接返回值就可以了 注意typeof null === 'object'
  if (source === null || (typeof source !== 'object' && util.getType(source) !== 'function')) {
    return source
  }

  //function 处理
  if (util.getType(source) === 'function') {
    return new Function('return ' + source.toString())()
  }

  var key, target = util.getType(source) === 'array' ? [] : {}, value, type

  for(key in source) {
    value = source[key]
    type = util.getType(value)

    //处理循环引用
    if (value === source) {
      continue
    }

    if (type === 'array' || type === 'object') {
      target[key] = deepCopy(value)
    } else if (type === 'function') {
      target[key] = new Function('return ' + value.toString())()
    } else {
      target[key] = value
    }
  }

  return target
}

var value1 = {
    address: 'china', 
    code: 111111, 
    click: function() {console.log('click')}, 
    name: null, 
    age: undefined, 
    find: /china*/, 
    birthdate: new Date, 
    rich: false, 
    family: {
      father: 'china', 
      once: function() {console.log('once')}
    },
    skills: [
      null,
      undefined,
      /china*/,
      new Date(),
      function() {
        console.log('skills')
      }
    ]
  },
  value2 = [/china*/, new Date(), 'china', null, undefined, false, value1],
  value3 = null,
  value4 = undefined,
  value5 = /china/
  value6 = new Date
  value7 = function () {
    console.log('value5')
  }

console.log(deepCopy(value5))
console.log(deepCopy(value6))

for (var i = 1 ; i < 8; i++) {
  console.log(deepCopy(eval('value' + i)))
}