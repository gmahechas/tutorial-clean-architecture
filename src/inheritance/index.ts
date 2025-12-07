import { distance, type NamedPoint as BadNamedPoint } from "./bad.js";
import { NamedPoint as GoodNamedPoint } from "./good.js";

console.log('Bad');
const origin: BadNamedPoint = { x: 0, y: 0, name: "origin" };
const upperRight: BadNamedPoint = { x: 1, y: 1, name: "upperRight" };

console.log(distance(origin, upperRight));


console.log('Good');

const goodOrigin = new GoodNamedPoint("origin", 0, 0);
const goodUpperRight = new GoodNamedPoint("upperRight", 1, 1);

console.log(goodOrigin.toString(), "->", goodUpperRight.toString());
console.log(goodOrigin.distanceTo(goodUpperRight));
