let S1 = "regular expression";
let R = /reg/;
let res = R.test(S1);
document.getElementById("demo").innerHTML=res;

let S2 = "i have a pet cat";
let R1 = /dog|cat|fish/;
let res1 = R1.test(S2);
document.getElementById("demo1").innerHTML= res1;

let S3 = "IgNoreCase";
let R3 = /ignorecase/i;
let res3 = R3.test(S3);
document.getElementById("demo2").innerHTML = res3;

let S4 = "Regular Regex";
let R4 = /Regex/;
let res4 = S4.match(R4);
document.getElementById("demo3").innerHTML = res4;

let S5 = "Repeat REPEat";
let R5 = /repeat/gi;
let res5 = S5.match(S5);
document.getElementById("demo4").innerHTML = res5;

let S6 = "hum song";
let S66 = "hug bear";
let R6 = /hu./;
let res6 = R6.test(S6);
let res66 = R6.test(S66);
document.getElementById("demo5").innerHTML = res6;
document.getElementById("demo6").innerHTML = res66;

let S7 = "big";
let S77 = "bug";
let S777 = "bus";
let S7777 = "bog";
let R7 = /[b[i,u]g]/;
let res7 = S7.match(R7);
let res77 = S7777.match(R7);
document.getElementById("demo8").innerHTML = res77
document.getElementById("demo7").innerHTML = res7;

let S8 = "cat";
let S88 = "mat";
let S888 = "sat";
let R8 = /[a-m]at/;
let res8 = S8.match(R8);
let res88 = S888.match(R8);
document.getElementById("demo9").innerHTML = res8 ;
document.getElementById("demo10").innerHTML = res88;

let S9 = "Nikita557788";
let R9 = /[a-z0-9]/gi;
let res9 = S9.match(R9);
document.getElementById("demo11").innerHTML = res9;

let S10 = "Mississippi";
let R10 = /s+/gi;
let res10 = S10.match(R10);
document.getElementById("demo12").innerHTML = res10;






