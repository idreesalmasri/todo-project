console.log("iam alive;")
// var firstName= prompt ("insert your name");

// var g =prompt ("your gender is : male or female");
// var age = prompt("insert your age");
// if (age <=0){
//     alert ("wrong age input");
// }
// // var welcoming = confirm ("do you want to skip welcoming message");
// if(g.toLowerCase() === "male"){
//     var m ="Mr";
// }
// else if (g.toLowerCase() ==="female"){
//     var m="Ms";
// }
// else {
//     var m="";
// }
// if (!welcoming){
//     var message = "welcome " +m +" "+ firstName ;
    // alert (message);
// }
alert("In the following questions, answer yes or no in lowercase");
let answer1 ="";
let answer2 ="";
let answer3 ="";
answer1=prompt("are you doing your tasks?");
answer2=prompt("Do you face difficulty in it?");
answer3=prompt("are the task boring?");
if(answer1==""||answer1==null){
    answer1="invalid";
}
if(answer2==""||answer2==null){
    answer2="invalid";
}
if(answer3==""||answer3==null){
    answer3="invalid";
}
let answeraArray=[answer1,answer2,answer3];
for(i=0;i<answeraArray.length;i++){
    console.log(answeraArray[i]);
}