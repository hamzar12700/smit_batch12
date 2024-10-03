// const mobileShop = ['Samsung','iphone','realme' , 'Vivo' , 'Google pexel'];
// mobileShop[2]= 'Redmi';
// const searchIndexMobile = +prompt('Enter your Mubile Index Number');

// console.log(mobileShop[searchIndexMobile]);


// Pop and Push Method : 

// const restMenu = ['Biryani','Keema','Korma','Karhai','Nihari'];




 
// -----------Sir Ghous

// let students = ['hamza','awais','ahmed','sahib','ayaan','Mustafa'];

// students[0]= "muhammad hamza"

// students[students.length - 1] = "xyz";
// students[1] = "Awais Abdul Waheed";
// students[2]= "Ahmed Butt King";
// students[3] = "Sahib Gul";
// console.log(students);


// Pop   <--------- delete from last

// let students = ['hamza','awais','ahmed','sahib','ayaan','Mustafa'];
// students.pop();

// console.log(students);

// Push      <----------- add from last

// let students = ['hamza','awais','ahmed','sahib','ayaan','Mustafa'];
// students.push("Qasim");

// console.log(students);


// shift      <----------------- remove from start

// let students = ['hamza','awais','ahmed','sahib','ayaan','Mustafa'];


// students.shift();
// console.log(students);

// Unshift    <--------------- add from start

// let students = ['hamza','awais','ahmed','sahib','ayaan','Mustafa'];

// students.unshift("Muhammad")
// console.log(students);


// ---------------------- SPLICE 

// let students = ['hamza','awais','ahmed','sahib','ayaan','Mustafa'];

// let spliceArr = students.splice(0,2, "Basit" , "Wahid");

// console.log(spliceArr);


// console.log(students);



// ----------------  SLICE 

// let students = ['hamza','awais','ahmed','sahib','ayaan','Mustafa'];

// let copyArr = students.slice(0,3);

// console.log(copyArr);

// console.log(students);



// ------------------------------


// Loop Over an Array

// const restMenu2 = ['Biryani','Keema','Korma','Karhai','Nihari'];

// for (let i = 0; i < restMenu.length; i++) {
// console.log(restMenu[i]);

    
    
// }




// -----------------

let dishes = ['biryani','korma','mandi','beef burger','chicken tikka','malai boti','white karhai','methe chawal']

let coldDrinkStock = ['pepsi','7up','marinda','fanta','dew','coca-cola','sting','red bull'];



let userDish = prompt('khane me kiya lake dun ?');

let colDrinkMili = false;
let itemMila = false;

for(i = 0; i < dishes.length ; i++){
    if(userDish === dishes[i]){
        console.log("chote !! bhai ka item", dishes[i]," lake de joke counter nbr", i , "se mile ga");
        itemMila = true;
        
        let coldDrinkuser = prompt("cold drink me kia leke aao ?");
        for(j = 0 ; j < coldDrinkStock.length ; j++){
      if(coldDrinkuser === coldDrinkStock[j]){
        console.log("chote!! bhai ki cold drink", coldDrinkStock[j],"jaldi lake de");
        colDrinkMili = true
      }
            
        }
break;
    }
}

if (itemMila){
    console.log("ustad !! bhai ka item deliver krdiya ha");
    
}
else{
    console.log("ustad !! item nahi mila");
    
}

if (colDrinkMili){
    console.log("cold drink bhi deliver krdia ha");
    
}
else{
    console.log("cold drink nahi mili");
    
}