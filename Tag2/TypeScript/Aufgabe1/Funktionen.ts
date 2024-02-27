
let zArray: number[] = [1, 2, 3, 4, 5];
let Z = zArray.map(zahl => zahl * 2);


let WArray: string[] = ["Kuan", "Löthe", "Flaschenhals-verbidnugsunterbruch", "JavaKara", "Code"];
let lW = WArray.filter(wort => wort.length > 5);


let zArray2: number[] = [10, 20, 30, 40, 50];
let summe = zArray2.reduce((akkumulator, aktuelleZahl) => akkumulator + aktuelleZahl, 0);


let zArray3: number[] = [5, 8, 10, 12, 1];
let G10 = zArray3.some(zahl => zahl > 10);


console.log(Z);
console.log(lW);
console.log(summe);
console.log(G10);
