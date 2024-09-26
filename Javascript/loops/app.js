// let restMenu = ['biryani','mandi','beef karhai','chicken tikka'];

// for( i=0 ; i < restMenu.length ; i++){
//   console.log(restMenu[i]);

// }

// ---------- Slide #20 challenge array

// let fruitName = ['mango','apple','graps','pineapple', 42];

// let newfruit = fruitName[0];

// let changeFruit = fruitName [4];
// changeFruit = "orange";

// // console.log(changeFruit);

// // console.log(newfruit);

// console.log(fruitName);

// let newArr = ['karachi','islamabad','faislabad','lahore'];

// for (let i = 0; i < newArr.length; i++) {
// if (newArr[i] == "hyderabad") {
//   console.log("mil gaya");
//   break;
// }
// else{
//   console.log("nahi mila");

// }

// }

// ----------- below condition is wrong

// ----------- this condition is true

// let newArr2 = ['karachi','lahore','peshawar','hyderabad','islamabad'];

// let searcUsre = prompt("ap kaha se ho")

// let flag = false;

// for (let i = 0; i < newArr2.length; i++) {

//   if (searcUsre === "karachi") {
//     flag = true;
//   }
// }

// if (flag) {
//   console.log("saylani ajao");

// } else {
//   console.log("sorry ! apke city me hmari branch nahi ha");

// }

// -------------- Sir Sufyan class code practice

let restMenu = [
  "biryani",
  "korma",
  "karhai",
  "mandi",
  "tikka",
  "zinger burger",
];

let coldDrink = [
  "pepsi",
  "coca-cola",
  "7up",
  "mountain dew",
  "sting",
  "fanta",
  "marinda",
];

let searcUser = prompt("khana kiya khao gy ?");
let itemMilGaya = false;
let coldDrinkmili = false;

for (i = 0; i < restMenu.length; i++) {
  if (searcUser === restMenu[i]) {
    console.log(
      "chote bhai ka order",
      restMenu[i],
      "hai aur wo counter number",
      i,
      "se mile ga"
    );

    itemMilGaya = true;
    let searcColdDrink = prompt("cold drink konsi lake dun");
    for (c = 0; c < coldDrink.length; c++) {
      if (searcColdDrink === coldDrink[i]) {
        console.log(
          "chote bhai ka ",
          restMenu[i],
          " k sath ek ",
          coldDrink[i],
          "bhi lake de jaldi"
        );
      }
    }
      coldDrinkmili = true;
      break;
  }
}

if (itemMilGaya) {
  console.log("order deliver krdiya gaya ha Ustad");
} else {
  console.log(searcUser, " ye desh nahi ha !!! ");
}

if (coldDrinkmili) {
  console.log(" ustad cold drink deliver krdi gayi ha");
} else {
  console.log(searcColdDrink, " ye wali cold drink nahi mila ");
}
