var myQuestions =[
    {
        question: "What is  10/2?",
        id:1,
		answers:["3", "5", "9"],

		correctAnswer: 'b'
	},
	{
        question: "What is 30/3?",
        id:2,
		answers:["3", "15", "10"],
		correctAnswer: 'c'
    },
    {
        question:"what is 0/10" ,
        id:3,
        answers: ["0","12","3"],
        correctAnswer: 'a'
    }


];


var num=document.getElementById('question-num')
num.innerHTML=myQuestions[0].id

var quest=document.getElementById('question-content');
quest.innerHTML=myQuestions[0].question;


                            
var answers = document.getElementById("answers");     

for(i=0; i<myQuestions[0].answers.length; i++){
answers.insertAdjacentHTML('beforeend', '<li><input type="radio" name="radAnswer">' + myQuestions[0].answers[i] + '</li>');
};


    






var next=document.getElementById('next')
var question_index=0;


next.onclick=function(){
if(question_index<myQuestions.length -1){
    question_index++   
    num.innerHTML=myQuestions[question_index].id

}
    
};


var prev=document.getElementById('prev')

prev.onclick=function(){
    
    if(question_index>0){
        question_index--
        num.innerHTML=myQuestions[question_index].id
    }
}








