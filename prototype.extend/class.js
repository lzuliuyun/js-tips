function Parent() {
  this.data = [{a: 1}, {b:2}];
  this.data2 = [{a: 1}, {b:2}];
  this.demo = {
    value: 1
  }
}

Parent.prototype.temp = [{a: 0}, 2, 3];
Parent.prototype.temp2 = 2;
Parent.prototype.data = 1;
Parent.prototype.demo2 = {
  value: 2
};


var p = new Parent();
console.log(p.data);
console.log(p.temp);
p.temp[0].a = 2;
p.temp2 = 3;

// 注意此修改方式  点号是在p实例对象增加了一个demo2的属性，而不是原型上的引用
// js语言精粹
// https://www.zhihu.com/question/53394256
p.demo2 = {
  value: 4
};

p.constructor.prototype.demo2 = {
  value: 5
}
console.log(p.temp);
console.log(Parent.prototype.temp);
console.log(p.temp2);
console.log(Parent.prototype.temp2);
console.log(p.demo2);
console.log(Parent.prototype.demo2);