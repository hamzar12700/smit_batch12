var a = 4 ;
var b = 3;

//       3     4     3    4      3
var c = --b + --a - ++b + a++ - --a;
//      2   +  3  -  3   + 3   -  3 ;


console.log(c);



// -------------------------


var x = 10;

document.write(`Result:`)
document.write("<br/>")
document.write(`The Value of a is ${x++}`)

document.write("<br/><br/> --------------------- <br/> <br/>")

document.write(`The value of ++a is : ${x}`)
document.write("<br/>")
document.write(`Now The value of a is : ${x}`)

document.write("<br/><br/> --------------------- <br/> <br/>")

document.write(`The value of a++ is : ${x++}`)
document.write("<br/>")
document.write(`Now The value of a is : ${x}`)

document.write("<br/><br/> --------------------- <br/> <br/>")

document.write(`The value of --a is : ${--x}`)
document.write("<br/>")
document.write(`Now The value of a is : ${x}`)

document.write("<br/><br/> --------------------- <br/> <br/>")

document.write(`The value of --a is : ${x--}`)
document.write("<br/>")
document.write(`Now The value of a is : ${x}`)




// ----------- QUESTION - 2 --------------------


var w = 2;
var q = 1;

// var result = --w - --q + ++w + q--;
//           1   - 0   + 2 + 0


// console.log(result);

// ------
console.log("question 2");

--w;
console.log(w);

var t = --w - --q;
//       1  - 0
console.log(t);

var p = --w - --q + ++q;
//      1   -  0  + 0
console.log(p);

var s = --w - --q + ++q + q--;
//      1   -  0  +  1  + 1 
console.log(s);






