// point.ts
export interface Point {
    distanceTo(other: Point): number;
}

class PointImpl implements Point {
    #x: number;
    #y: number;

    constructor(x: number, y: number) {
        this.#x = x;
        this.#y = y;
    }

    distanceTo(o: Point): number {
        const other = o as PointImpl;
        const dx = this.#x - other.#x;
        const dy = this.#y - other.#y;
        return Math.hypot(dx, dy);
    }
}

export function createPoint(x: number, y: number): Point {
    return new PointImpl(x, y);
}
