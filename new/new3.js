var util = (function () {      
  function objectFactory() {
    var funCollection1 = arguments[0];
    var funCollection2 = arguments[1];

    return function () {        
      for (name1 in funCollection1) {
          this[name1] = funCollection1[name1];
      }
      for (name2 in funCollection2) {
          this.constructor.prototype[name2] = funCollection2[name2];
      }
    }
  }

  return {
    objectFactory: objectFactory
  }
})()

//定义构造函数
var Methods =  util.objectFactory({
checkName: function() {
  console.log("checkName func");
}
}, {
checkEmail: function() {
  console.log("checkEmail func");
}
});