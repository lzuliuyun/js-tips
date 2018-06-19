function Parent() { 
    this.names = ['1', '2']
}

function Child() {
  Parent.call(this)
}

var child1 = new Child();
child1.names.push('3');
console.log(child1.names);

var child2 = new Child();
console.log(child2.names);