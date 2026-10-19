import defaulter, { generateRandomNumberLessThanHundred, greet } from "./modules/export.js";
import * as N from "./modules/export-two.js"
import {print_Alpha, print_Beta, print_Omega} from "./modules/exporter/index.js"

console.log("Hello World -> Node.js")

let num = generateRandomNumberLessThanHundred();

console.log(defaulter())
console.log(generateRandomNumberLessThanHundred())
console.log(greet())

console.log(N.export_add(10, 10))
console.log(N.export_sub(10, 10))