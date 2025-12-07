export interface Reader {
    read(): string | null;
}

export interface Writer {
    write(s: string): void;
}

/**
 * Implementación concreta de Reader que lee carácter por carácter
 * desde un string inmutable.
 */
export class StringReader implements Reader {
    private index = 0;

    constructor(private readonly source: string) { }

    read(): string | null {
        if (this.index >= this.source.length) return null;
        const ch = this.source[this.index];
        this.index += 1;
        return ch ?? null;
    }
}

/**
 * Implementación concreta de Writer que acumula los caracteres
 * en memoria y los expone con toString().
 */
export class StringWriter implements Writer {
    private readonly buffer: string[] = [];

    write(s: string): void {
        this.buffer.push(s);
    }

    toString(): string {
        return this.buffer.join("");
    }
}

/**
 * Política de alto nivel que depende SOLO de abstracciones (Reader/Writer).
 * 
 * Esto demuestra polimorfismo puro: cualquier implementación que respete
 * Reader/Writer puede ser usada aquí sin cambiar este código.
 */
export class Copier {
    constructor(
        private readonly src: Reader,
        private readonly dst: Writer,
    ) { }

    copy(): void {
        for (let c = this.src.read(); c !== null; c = this.src.read()) {
            this.dst.write(c);
        }
    }
}


