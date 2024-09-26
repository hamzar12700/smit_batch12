// var gender = prompt("Enter your gender" , "Male");
// var message = "not provide";

// if (gender === "Male"){
//     message="Hello Sir"
// }
// if (gender === "Female"){
//     message = "Hello Sister"
// }
// alert(message)

// -----------------------

let language = prompt("Enter Your Language");

if (language.toLowerCase() === "javascript") {
  let city = prompt("Enter Your City");
  if (city.toLowerCase() === "karachi") {
    let experience = prompt("Enter Your experience");
    if (experience === "2 years") {
        console.log("congratulation ! you are hired");
        
    } else {
      console.log(
        "ye sirf 2 years experience wlo k liye ha usse kam wlo eligible nahi hongy"
      );
    }
  } else {
    console.log("sirf karachi walo k liye hai");
  }
} else {
  console.log("pehle Javascript sekh kr aao");
}

// ------------------------

// if (false) {
//   console.log("saylani");
// } else {
//   console.log("not provided");
// }

// -------------------------------------------

// let searchName = prompt("Where is saylani ???");

// if (searchName.toLowerCase() === "karachi") {
//   let areaName = prompt("Which area Saylani located ??");
//   if (areaName === "Bahadurabad") {
//     console.log(`${areaName} area is correct`);
//   } else {
//     console.log(`${areaName} is wrong please try agin`);
//   }
// }
//  else {
//   console.log(
//     `you enter city Name ${searchName} which is wrong please try again`
//   );
// }

// -----------------------------------

// let userInput1 = prompt("Where is saylani ??") || "not provided";

// console.log(userInput1);

// ----------------------------------------

// let userInput2 = prompt("Where is saylani ??") || "not provided";

// if (userInput2.toUpperCase() === "karachi") {
//     console.log("correct");

// }
// else{
//     console.log("wrong");

// }

// --------------------------------------
