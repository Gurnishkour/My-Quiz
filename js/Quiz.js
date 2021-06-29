class Quiz {
  constructor(){
    this.title = createElement('h1')
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
  
    //write code to change the background color here
    
    background("yellow");
    //write code to show a heading for showing the result of Quiz
     
   fill (0);
   textSize(30);
   text("Result Of The Quiz" , 340,50);

    //call getContestantInfo( ) here

    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined

    if(allContestants != undefined){
      var displayAnswers = 230;

    //write code to add a note here

    fill("blue");
    textSize (20);
    text("NOTE : Contestant who answered correctly are highlited in green" , 130,230);

    //write code to highlight contest who answered correctly
    
    for(var plr in allContestants){
      var  correctAnswer = "2"
      if(correctAnswer === allContestants[plr].answer){
        fill("green")
      }
      else{
        fill("red")
      }
      displayAnswers += 30;
      textSize(30);
      text (allContestants [plr].name + ":" + allContestants[plr].answer , 250,displayAnswers);
    }
  }
}

}
