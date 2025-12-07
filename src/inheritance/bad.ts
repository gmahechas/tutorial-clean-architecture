export type Point = { x: number; y: number };
export type NamedPoint = Point & { name: string };

export function distance(a: Point, b: Point): number {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
}

