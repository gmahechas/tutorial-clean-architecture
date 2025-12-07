import { copy, type Reader as CReader, type Writer as CWriter } from "./bad.js";
import { StringReader, StringWriter, Copier } from "./good.js";
import { Rectangle, Circle, totalArea } from "./excelent.js";

console.log("Bad (C-style polymorphism)");

const srcText = "Hello, polymorphism!";
let readIndex = 0;

const cReader: CReader = {
  read(): string | null {
    const ch = srcText[readIndex] ?? null;
    if (ch === null) return null;
    readIndex += 1;
    return ch;
  },
};

let cOutput = "";
const cWriter: CWriter = {
  write(s: string): void {
    cOutput += s;
  },
};

copy(cReader, cWriter);
console.log("Copied (C-style):", cOutput);

console.log("Good (OO-style polymorphism)");

const reader = new StringReader("Hello, polymorphism!");
const writer = new StringWriter();
const copier = new Copier(reader, writer);

copier.copy();
console.log("Copied (OO-style):", writer.toString());

console.log("Excellent (OO-style polymorphism in practice)");

const shapes = [
  new Rectangle(2, 3),  // área = 6
  new Circle(1),        // área = π
];

console.log("Total area:", totalArea(shapes));

