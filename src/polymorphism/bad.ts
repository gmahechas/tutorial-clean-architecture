export type Reader = { read(): string | null };
export type Writer = { write(s: string): void };

export function copy(src: Reader, dst: Writer): void {
  for (let c = src.read(); c !== null; c = src.read()) {
    dst.write(c);
  }
}