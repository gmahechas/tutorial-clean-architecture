//bad
import { Point as BadPoint } from './bad.js';
import { Point as AveragePoint } from './average.js';
import { createPoint as GoodPoint } from './good.js';

console.log('Bad');
const badP = new BadPoint(1, 2);
console.log((badP as any).x); // bad bcoz it will work in runtime
const badP2 = new BadPoint(3, 4);
console.log(badP.distanceTo(badP2));

console.log('Average');
const averageP = new AveragePoint(1, 2);
console.log((averageP as any).x); // kinda good, you'll get undefined in runtime
const averageP2 = new AveragePoint(3, 4);
console.log(averageP.distanceTo(averageP2));

console.log('Good');
const goodP = GoodPoint(1,2);
console.log((goodP as any).x); // good, you'll get undefined in runtime
const goodP2 = GoodPoint(3, 4);
console.log(goodP.distanceTo(goodP2));