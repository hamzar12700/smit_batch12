// -------- Q 1 --------------------

// let cityName = prompt("Enter Your City Name");

// if (cityName.toLowerCase() === "karachi") {
//     console.log(`Welcome to city of lights`);
// } else {
//     alert(`Please enter your city name`);
// }


// ---------   Q 2 -----------


// let gender = prompt("Enter your gender");

// if (gender.toLowerCase() === "male") {
//     alert(`Good Morning Sir`);
    
// } else if (gender.toLowerCase() === "female"){
//     alert(`Good Morning Maam`);
    
// }else{
//     alert(`Enter Your Gender___!!!`);
    
// }



// -------------- Q 3 -------------


// let colorName = prompt("Enter your color name");


// if (colorName.toLowerCase() === "red") {
//     alert(`Must Stop `)
// } else if(colorName.toLowerCase() === "yellow"){
//     alert(`Ready to move `)
// } else if (colorName.toLowerCase() === "green"){
//     alert(`Move now `)
// }else {
//     alert(`Please enter your traffic color`)
// }



// ---------------- Q 4 ----------------


// let fuelNum = +prompt(`Enter Your Fuel Num`);


// if (fuelNum >= 0.25) {
//     alert(`Your fuel is perfect !! lets go for a drive`)
// } else {
//     alert(`Please refill the fuel in your car`);
// }



// --------- Q 5 -----------

// a.  << ------------------
// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }

//  .b    << ------------------

// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// }
// else{
//     console.log("error b++ ");
    
// }

//   .c    << ---------------------

// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// }else{
//     console.log(`error in c++`);
// }
// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true");         << --- if if will execute 
// }

// .d       << --------------------- 

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 

//   e.    << -------------------

// if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }


//  f.   << ------------- 

// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     }

// --------------- Q 6 ---------------


let studentPercent = +prompt("Enter Your Percentage")



 if (studentPercent > 80 && studentPercent < 100 ) {
    alert(`Congratulations !! Your Grade is A++`);
} else if (studentPercent > 70 && studentPercent <= 80){
    alert(`Congrats !! Your Grade is A`)
}else if (studentPercent > 60 && studentPercent <= 70 ){
    alert(`Your Grade is B`);
}
else if (studentPercent > 50 && studentPercent <= 60 ){
    alert(`Your Grade is C`);
}
else if (studentPercent > 40 && studentPercent < 50 ){
    alert(`Your Grade is D`);
}
else if (studentPercent < 40 ){
    alert(`Sorry !! You are failed Your Percent less than 40`);
} 
else if (studentPercent >= 100 ){
    alert(`Enter Valid Percentage in under 100`);
} 

else {
    alert(`Enter Corect Percentage`);
}


