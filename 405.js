// let guy = {
//     fname:"Danjuma",
//     age:"10",

// }


// // console.log(guy["age"])
// let greeting;
// if (guy.age>=18) {greeting = "Hi guy, you are old enough"}
// else {greeting = "Hi guy, sorry but you are not old enough"};
//    console.log(greeting);


function check(name,age){
   if (age>=18){return "HI " + name + ", you are old enough."}
   else {return "HI " + name + ", sorry, but you are not old enough."}
}

console.log(check("Adam",12));