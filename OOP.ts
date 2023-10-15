class Point {
  x: number = 0;
  y: number = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const p = new Point(20, 10);
p.x = 10;
//

console.log(p.x, p.y);
