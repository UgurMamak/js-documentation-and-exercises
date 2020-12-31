

//soruların yapısını tutan constructor
let Question=function(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.checkAnswer=function(answer){
    return this.answer===answer
}



let Quiz=function(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0;
}

Quiz.prototype.getQuestion=function(){
    return this.questions[this.questionIndex];
}

//sorunun bitip bitmediğini kontrol etmek için
Quiz.prototype.isFinish=function(){
    return this.questions.length=== this.questionIndex;
}

//cevaplama işleminin kontrolü
Quiz.prototype.guess=function(answer){
  var question=this.getQuestion();

  if(question.checkAnswer(answer)){
    this.score++; //doğru cevaplarsa puan alacak.
  }
  this.questionIndex++; //bir sonraki soruya geçmek için
}

var q1=new Question("Soru1 değeri",["js","c#","asp","react"],"asp");
var q2=new Question("Soru2 değeri",["js","c#","asp","react"],"asp");
var q3=new Question("Soru3 değeri",["js","c#","asp","react"],"asp");
var q4=new Question("Soru4 değeri",["js","c#","asp","react"],"asp");
var questions=[q1,q2,q3,q4];



var quiz=new Quiz(questions);//sorular yüklenir
loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }
    else{
        var question=quiz.getQuestion(); //sıradaki soru getirilir.
        var choices=question.choices;
       
        document.querySelector("#question")
        .textContent=question.text;

       

        //şıklar yazılır.
        for (let index = 0; index <choices.length; index++) {
           var element=document.querySelector("#choice"+index);
           element.innerHTML=choices[index];
           guess("btn"+index,choices[index]);
        }

        showProgress();


        console.log(question.choices);
    }
}

function guess(id,guess){
    var btn=document.getElementById(id);
    btn.onclick=function(){
        console.log(guess)
        quiz.guess(guess);
        loadQuestion();
    }

}
function showScore(){
    var html=`<h2>Scoree</h2><h4>${quiz.score}</h4>`
    document.querySelector(".card-body").innerHTML=html;


}

function showProgress(){
    var totalNumber=quiz.questions.length;
    var questionNumber=quiz.questionIndex+1;

    document.querySelector("#progress").innerHTML="Question"+questionNumber
    + "of"+ + totalNumber

}
//-----------


