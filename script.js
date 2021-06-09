"use strict"
var skaicius1, skaicius2, skaicius3, skaicius4, suma, sandauga, x, maxSkaicius;

skaicius1 = 3;
skaicius2 = 4;
skaicius3 = 5;
skaicius4 = 6;
suma = skaicius1 + skaicius2 + skaicius3 + skaicius4;
sandauga = skaicius1 * skaicius2 * skaicius3 *skaicius4;
maxSkaicius = Number.MAX_VALUE;

console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);
console.log(skaicius4);
console.log(suma);
console.log(sandauga);
console.log(maxSkaicius);


x = skaicius1;
skaicius1 = skaicius2;
skaicius2 = x; 
skaicius3 = skaicius3 + skaicius4;
skaicius4 = skaicius3 - skaicius4;
skaicius3 = skaicius3 - skaicius4;

alert(skaicius1 + ", " + skaicius2 + ", " + skaicius3 + ", " + skaicius4);


var skaicius5, skaicius6;
skaicius5 = 10;
skaicius6 = 12;
skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;

var rezultatas = document.getElementById("Rezultatas");
rezultatas.innerHTML = skaicius5 + ", " + skaicius6;
