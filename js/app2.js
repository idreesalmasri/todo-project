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