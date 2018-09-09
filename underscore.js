(function() {
  // var root = this;
  var root =
    (typeof self === "object" && self.self === self && self) || //浏览器 webworker
    (typeof global === "object" && global.global === global && global) || //node 环境
    this || //安全沙箱
    {}; //微信小程序

  // 建立一个实例对象 并挂载了_wrapper属性
  var _ = function(obj) {
    if (!(this instanceof _)) return new _(obj);
    this._wrappered = obj;
  };

  // 需判断DOM 节点id 为 exports 的元素
  if (typeof exports != "undefined" && !exports.nodeType) {
    if (typeof module != "undefined" && !module.nodeType && module.exports) {
      exports = module.exports = _; // 同步引用 exports 是 module.exports 的一个引用
    }

    exports._ = _;
  } else {
    root._ = _;
  }

  var ArrayProto = Array.prototype;
  var push = ArrayProto.push;
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

  _.VERSION = "0.1";

  var isArrayLike = function(collection) {
    var length = collection.length;
    return (
      typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX
    );
  };

  _.each = function(obj, callback) {
    var length,
      i = 0;

    if (isArrayLike(obj)) {
      length = obj.length;
      for (; i < length; i++) {
        if (callback.call(obj[i], obj[i], i) === false) {
          break;
        }
      }
    } else {
      for (i in obj) {
        if (callback.call(obj[i], obj[i], i) === false) {
          break;
        }
      }
    }

    return obj;
  };

  _.isFunction = function(obj) {
    return typeof obj == "function" || false;
  };

  _.functions = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }

    return names.sort();
  };

  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  _.push = function() {
    return push.apply(ArrayProto.shift.apply(arguments), arguments);
  }

  _.shift = function() {
    return ArrayProto.shift.apply(arguments);
  }

  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = (_[name] = obj[name]);
      _.prototype[name] = function() {
        var args = [this._wrappered];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
  };

  // 在mixin复制方法
  _.mixin(_);

  _.prototype.value = function() {
    return this._wrappered;
  };
})();


var arr = _.chain([1, 2, 3]).push(4).shift().value();
console.log(arr) // [2, 3, 4]