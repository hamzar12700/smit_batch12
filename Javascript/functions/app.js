// function name (name){
//     console.log(name);
    
// }
// name("hamza raza");



// function sum (x){
//     console.log( ++x);
    
// }
// sum(3);


// function addition (a,b){
//     sum = a + b;
//     return sum;
// }

// console.log
// (addition(210,90));





// slide 25 - function expression 


// function first (x,y){
//     return x+y;
// }


// let firstNbr = first(210,90);
// let secondNbr = first(250,50);


// function second (a,b){
//     return a - b;
// }


// let newArr = [firstNbr , secondNbr , second(390,90)];


// console.log(newArr);



// ---------- 25 - functions Q#5


// function calculateTotal (subTotal,tax){
//     return subTotal + tax;
// }

// var order1 = calculateTotal(310,90);
// var order2 = calculateTotal(230,82);
// var order3 = calculateTotal(672,86);

// var result = calculateTotal();

// console.log("order1 = ", order1 ,"order2 = ", order2 ,"order3 = ", order3);

// console.log(subTotal);


// ------------- Vowels Check


// let user = prompt("enter your name ??");


function vowels(strc){
    let i =0;
    for(let char of strc){
if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
i++;
}
    
}
console.log(i);

}