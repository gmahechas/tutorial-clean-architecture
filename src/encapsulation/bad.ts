export class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x; this.y = y;
  }

  distanceTo(p: Point) {
    const dx = this.x - p.x;
    const dy = this.y - p.y;
    return Math.hypot(dx, dy);
  }
}

