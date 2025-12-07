export interface Shape {
  /**
   * Devuelve el área de la figura.
   * Cada implementación proporciona su propia fórmula.
   */
  area(): number;
}

export class Rectangle implements Shape {
  constructor(
    public readonly width: number,
    public readonly height: number,
  ) {}

  area(): number {
    return this.width * this.height;
  }
}

export class Circle implements Shape {
  constructor(public readonly radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

/**
 * Ejemplo "excelente" de polimorfismo:
 *
 * - La función de alto nivel depende solo de la abstracción Shape.
 * - Para agregar una nueva figura (Triangle, Polygon, etc.) NO se modifica esta función.
 * - Cumple con Open/Closed: abierto a extensión, cerrado a modificación.
 */
export function totalArea(shapes: readonly Shape[]): number {
  return shapes.reduce((sum, shape) => sum + shape.area(), 0);
}