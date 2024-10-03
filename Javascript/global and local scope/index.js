// // var name = "hamza";

// // name = "awais";


// // function ghar1(){
// //     name = "ahmed";
// //     console.log("hamare pass ek chief ha " , name); // yhn change hoga var ki wjh se
    
// // }

// // ghar1();



// // let name2 = "hamza";
// // name2 = "awais";

// // function ghar2 (){
// //    let name2="ahmed";
// // console.log(name2);  // yahn ahmed aye ga q k let se declare ha

// // }

// // ghar2();  //                          ---->>   ahmed
// // console.log(name2); //                ----->>  awais



// // ----------- scope level and mini hoisting



// function one (){
//     const username = "hamza raza";

//     function two (){
//         const website = "youtube";
//         console.log(username);
//     }
//     // console.log(website);
//     // two();
// }

// // one();







// if (true){
//     const username = "hamzaraza";
//     if(username === "hamzaraza"){
//         const website = "youtube";
//         console.log(username + website);
        
//     }
//     console.log(website);
    
// }
// console.log(username);











// var name = "mustafa";


// name = "hamza";


// function g1(){
// //   var  name ="sahib";
//     console.log(name);
    
// }
// g1();
// console.log(name);

















// let first = "hamza";

// let second = first;

// second = "sahib;"




let g1 = {
    name :"hamza",
    batch :'2203c',
    center : "aptech garden",
}

let g2 = {...g1} ; 

g2.name ="sahib";
console.log(g1);

console.log(g2);
