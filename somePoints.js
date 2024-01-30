// console.log('server file is running');
// // ****Array****💥
// const names=["bhashkar","shivam","yash"];
// names.push("aryan");
// console.log(names);
// console.log(names[2]);

// // **💥Objects***
// const person={
//     name:"john",
//     age:23,
//     isStudent:true,
//     hobbies:["reading","travling",'painting']//array

// };
// console.log(person);
// console.log(person.age);

// //**💥Filter function */

// const ages=[23,45,20,30];
// const result=ages.filter(checkAge);
// function checkAge(ages){
//     return ages<=30;
// }
// console.log(result);

////💥How take Input by prompt*******
// var prompt=require('prompt-sync')();
// const age=prompt("please enter your age:");
// if(age<18){
//     console.log("You get a 20% discount");
// }else{
//     console.log('Wow!! 🤩 You get a 40% senior discount');
// }

//** function 💥TYPE-1 */

// function add(a,b){
//     return a+b;
// }

// //TYPE-2 

// var add =function(a,b){
//     return a+b;
// }
// //TYPE-3
// var add= (a,b)=>{return a+b}; //OR var add= (a,b)=>a+b;

// var result =add(2,11);
// console.log(result);

// //TYPE- 4

// (function(){
//     console.log('shesh is added');
// })();// atomatic called by ();

// /*****DAY-2 */

// //USE OF 💥"CALLBACK" Function METHOD-1

// function callback(){
//     console.log("now adding is successfuly completed");
// }
// var add= function(a,b,AnotherFunc){
//     var result=a+b;
//     console.log('result is :' +result);// main function work complete
//     callback();
// }
// add(556565,6545,callback);

// //METHOD-2 CALLBACK
// var add= function(a,b,prince){
//     var result=a+b;
//     console.log('result is :' +result);// main function work complete
//     prince();
// }
// add(155,21,()=> console.log("add complete"));



// //********CLLBACK FUNCTION********BY Anuj✳💥
// const calculate =(a,b,operation)=>{
//     return operation(a,b); 
// }
// //METHOD-1
// var addition=calculate(3,4,function(num1,num2){
//     return num1+num2;
// });
// console.log(addition);

// //METHOD-2
// const subtraction =(p,q)=>p-q;
// const subresult =calculate(8,3,subtraction);
// console.log(subresult);

// //METHOD-3
// function multiply(a,b){
//     return a*b;
// }
// var result =calculate(2,5,multiply);
// console.log(result);

// //*****FILE SYSTEM AND OS Module💥 */
// var fs =require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user.username);
// fs.appendFile('greeting.txt', ' hiii ' + user.username + '!\n',()=>{
//     console.log('file is created');
// });

// console.log(os);
// console.log(fs);//

//// *****💥how to EMPORT FILE */
// const notes=require('./notes.js')


// var age =notes.age;
// console.log(age);

// var result=notes.addNumber(age+18,10);
// console.log('result is now '+result);

// //****💥LODASH library */
// var _=require('lodash');
// var data=['person','person',1,1,22,555,2,'name','age','21'];
// var filter=_.uniq(data);
// console.log(filter);
// console.log(_.isString('bhashakr'));

// console.log(_.isArguments());

// //***DAY-3 *****💥
// //JSON TO OBJECT 
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject); 
// // // OBJECT to JSON
// const objectToConvert = { name: "Alice", age: 25 };
// const jsonStringified = JSON.stringify(objectToConvert);
// console.log(jsonStringified);













