class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static hello() {
    console.log('hello world');
  }

  toString() {
    return "x=" + this.x + ", y=" + this.y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }

  toString() {
    return "color=" + this.color + "," + super.toString();
  }
}

let cp = new ColorPoint(1, 2, "blue");
console.log(cp.toString());

ColorPoint.hello()

console.log(Object.getPrototypeOf(ColorPoint).name);
