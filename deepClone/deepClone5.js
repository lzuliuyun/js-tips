//总结：
//所谓复制，就是区分基本类型栈复制和堆引用类型的复制，对于基本类型，则直接返回，对于引用类型则依次递归到基本类型为止
//对于引用类型，需要注意Function Array Object的复制即可

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
  //function 处理
  var type = util.getType(source);

  if (type === 'function') {
    return new Function('return ' + source.toString())()
  } else if (type === 'array' || type === 'object') {
    var key, target = type === 'array' ? [] : {}, value, tempType;

    for(key in source) {
      value = source[key]
      tempType = util.getType(value)

      //处理循环引用
      if (value === source) {
        continue
      }

      target[key] = deepCopy(value)

      //也可以不用再递归，直接进行分支运行，减少递归内存占用
      // if (tempType === 'array' || tempType === 'object') {
      //   target[key] = deepCopy(value)
      // } else if (tempType === 'function') {
      //   target[key] = new Function('return ' + value.toString())()
      // } else {
      //   target[key] = value
      // }
    }

    return target
  } else {
    return source
  }
}

//以下是测试代码
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

for (var i = 1 ; i < 8; i++) {
  console.log(deepCopy(eval('value' + i)))
}