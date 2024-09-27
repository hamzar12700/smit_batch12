let person = {
    name : "hamza raza",
    roll_no : 258256,
    batch : 12,
    campus : "Numaish",
    training_center : "Syalani i.t mass training center",
    mod_1 : ['html','css','bootstrap','responsive'],
    saylani : function (){
        console.log("Hello World");
        
    }
}

console.log(person.name);
console.log(person.mod_1[0]);
person.mod_1[2] = "Tailwind css";
console.log(person.mod_1);
person.saylani();


