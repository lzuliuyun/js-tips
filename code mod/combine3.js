function Person(name) {
  var o = new Object();
  o.name = name;

  o.getName = function () {
    console.log(this.name)
  }

  return o;
}

