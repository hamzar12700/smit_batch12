// var a = 4 ;
// var b = 3;

// //       3     4     3    4      3
// var c = --b + --a - ++b + a++ - --a;
// //      2   +  3  -  3   + 3   -  3 ;


// console.log(c);



// // -------------------------


// var x = 10;

// document.write(`Result:`)
// document.write("<br/>")
// document.write(`The Value of a is ${x++}`)

// document.write("<br/><br/> --------------------- <br/> <br/>")

// document.write(`The value of ++a is : ${x}`)
// document.write("<br/>")
// document.write(`Now The value of a is : ${x}`)

// document.write("<br/><br/> --------------------- <br/> <br/>")

// document.write(`The value of a++ is : ${x++}`)
// document.write("<br/>")
// document.write(`Now The value of a is : ${x}`)

// document.write("<br/><br/> --------------------- <br/> <br/>")

// document.write(`The value of --a is : ${--x}`)
// document.write("<br/>")
// document.write(`Now The value of a is : ${x}`)

// document.write("<br/><br/> --------------------- <br/> <br/>")

// document.write(`The value of --a is : ${x--}`)
// document.write("<br/>")
// document.write(`Now The value of a is : ${x}`)




// ----------- QUESTION - 2 --------------------


// var w = 2;
// var q = 1;

// var result = --w - --q + ++w + q--;
//           1   - 0   + 2 + 0


// console.log(result);

// ------
// console.log("question 2");

// --w;
// console.log(w);

// var t = --w - --q;
// //       1  - 0
// console.log(t);

// var p = --w - --q + ++q;
// //      1   -  0  + 0
// console.log(p);

// var s = --w - --q + ++q + q--;
// //      1   -  0  +  1  + 1 
// console.log(s);

// ------------------ question 3 

// let name = prompt("what is your name");

// document.write(`Your Name is ${name}`)


// ------------------------ QUESTION 5 -----------------------

// Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.


// let takeInput = +prompt("Enter Your Number","5")

// document.write(`The value is multply == ${takeInput *1} `);
// document.write("<br/>")
// document.write(`The value is multply == ${takeInput *2} `);
// document.write("<br/>")
// document.write(`The value is multply == ${takeInput *3} `);
// document.write("<br/>")
// document.write(`The value is multply == ${takeInput *4} `);
// document.write("<br/>")
// document.write(`The value is multply == ${takeInput *5} `);
// document.write("<br/>")
// document.write(`The value is multply == ${takeInput *6} `);
// document.write("<br/>")
// document.write(`The value is multply == ${takeInput *7} `);
// document.write("<br/>")
// document.write(`The value is multply == ${takeInput *8} `);
// document.write("<br/>")
// document.write(`The value is multply == ${takeInput *9} `);
// document.write("<br/>")
// document.write(`The value is multply == ${takeInput *10} `);
// document.write("<br/>")



// ------------ Question 6


let subject1 =  prompt("your subject name 1 ??");
let asksubject1 = prompt("subject 1 number ??");

let subject2 =  prompt("your subject name 2 ??");
let asksubject2 = prompt("subject 2 number ??");

let subject3 = prompt("your subject name 3 ??");
let asksubject3 = prompt("subject 3 number ??");


let totalMarks = 100; 


let percent1 = asksubject1/totalMarks*100;
let percent2 = asksubject2/totalMarks*100;
let percent3 = asksubject3/totalMarks*100;


document.write("<b>Subjects  ,  Total Marks  ,  Obtained Marks   , Percentage </b> ");
document.write(`</br>`)

document.write(`${subject1} &nbsp &nbsp &nbsp &nbsp ${totalMarks} &nbsp &nbsp &nbsp &nbsp , ${asksubject1} &nbsp &nbsp &nbsp ${percent1}%`);
document.write("</br>");
document.write(`${subject2} &nbsp &nbsp &nbsp &nbsp ${totalMarks} &nbsp &nbsp &nbsp &nbsp , ${asksubject2} &nbsp &nbsp &nbsp ${percent2}%`);
document.write("</br>");

document.write(`${subject3} &nbsp &nbsp &nbsp &nbsp ${totalMarks} &nbsp &nbsp &nbsp &nbsp , ${asksubject3} &nbsp &nbsp &nbsp ${percent3}%`);


// var subject2 = prompt("Enter your second  subject name");
// var subject3 = prompt("Enter your third  subject name");



// var totalMarks = 100;

// var obtainedMarks1 = prompt("Enter your first subject obtained marks");
// var obtainedMarks2 = prompt("Enter your second subject obtained marks");
// var obtainedMarks3 = prompt("Enter your third subject obtained marks");

// var percentage1 = obtainedMarks1/totalMarks*100;
// var percentage2 = obtainedMarks2/totalMarks*100;
// var percentage3 = obtainedMarks3/totalMarks*100;

// // document.write(`<b>Subject &nbsp Total Mraks &nbsp Obtained Mraks &nbsp Percentage</b><br>`);

// document.write("<pre><b>Subject    Total Mraks    Obtained Mraks    Percentage</b></pre>");

// // document.write(<pre>"subject1" + "totalMarks" + "obtainedMarks1" + "percentage1" </pre>);

// document.write(`${subject1} &nbsp &nbsp &nbsp &nbsp${totalMarks} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${obtainedMarks1} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${percentage1}% <br>`);


// document.write(`${subject2} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${totalMarks} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${obtainedMarks2} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp ${percentage2}% <br>`);


// document.write(`${subject3} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp${totalMarks} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${obtainedMarks3} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${percentage3}% <br>`);

// var totalMarks1 = totalMarks + totalMarks + totalMarks;