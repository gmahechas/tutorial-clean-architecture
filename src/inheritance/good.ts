export interface Point {
  readonly x: number;
  readonly y: number;

  distanceTo(other: Point): number;
}

/**
 * Clase base que implementa el comportamiento común de cualquier punto.
 * 
 * - Expone solo getters `x`/`y` (no se pueden modificar desde fuera).
 * - Implementa `distanceTo` usando la interfaz `Point` (depende de una abstracción).
 * - Permite que las subclases añadan más información sin duplicar lógica.
 */
export abstract class PointBase implements Point {
  private readonly _x: number;
  private readonly _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  distanceTo(other: Point): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.hypot(dx, dy);
  }
}

/**
 * Ejemplo de herencia "buena":
 *
 * - Extiende de `PointBase` para reutilizar la lógica de `distanceTo`.
 * - Añade un campo `name` que no afecta al contrato de `Point`.
 * - El código de alto nivel puede depender del tipo `Point` en lugar de `NamedPoint`.
 */
export class NamedPoint extends PointBase {
  readonly name: string;

  constructor(name: string, x: number, y: number) {
    super(x, y);
    this.name = name;
  }

  toString(): string {
    return `${this.name}(${this.x}, ${this.y})`;
  }
}


