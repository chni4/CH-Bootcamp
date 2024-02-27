const liste: number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
let lW : number [] = liste.sort((b ,a) => b - a);
let Z : number[] = liste.map(zahl => zahl * zahl);
let gz : number [] = liste.map(zahl => zahl + zahl);
liste.sort((a, b) => a - b);
liste.splice(0, 2);
liste.filter((a) => a%4 !==0)
liste.splice(-4);
console.log(lW);
console.log(Z);
console.log(gz);
console.log(liste);

let summe : number [] = liste.map((a, b) => a + b);
console.log(summe);
