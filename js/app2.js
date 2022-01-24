
function askTheUser(question){
    let answer = prompt(question);
    if(answer==""||answer==null){
        return answer="invalid";
    }
    else if(answer=="yes"||answer=="no"){
        return answer;
    }
    else{
        alert("refrish and insert yes or no")

    }
}
let answer1=askTheUser("are you doing your tasks?");
let answer2=askTheUser("Do you face difficulty in it?");
let answer3=askTheUser("are the task boring?");
let answeraArray=[answer1,answer2,answer3];
for(i=0;i<answeraArray.length;i++){
    console.log(answeraArray[i]);
}