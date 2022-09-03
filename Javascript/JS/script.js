let playerChoice;
let playerWin;
let playerScore = 0
let pcScore = 0
let i = 0;

function gameRound(){
   
        document.getElementById('btnRock').onmouseenter = function(){
            img = document.getElementById('playerChoice');
            img.src ="img/landslide.png";
            document.getElementById('Rock').play();
    



    }
        document.getElementById('btnPaper').onmouseenter = function(){
            img = document.getElementById('playerChoice');
            img.src ="img/new-document.png";
            document.getElementById('paper').play()



    }
        document.getElementById('btnScissors').onmouseenter = function(){
            img = document.getElementById('playerChoice');
            img.src ="img/scissors.png";
            document.getElementById('Scissors').play()



    }

    document.getElementById('btnRock').onmouseleave = function(){
            img.src="";


    } 
    document.getElementById('btnPaper').onmouseleave = function(){
            img.src="";


    } 
    document.getElementById('btnScissors').onmouseleave = function(){
            img.src="";


    } 

        $(".btn").click(function(){
        
            var computerImg = document.getElementById('computerChoice');
            playerChoice=$(this).val();
            computerChoice = Math.floor(Math.random()*3);
            console.log(computerChoice);
        
            if (playerChoice == 0 && computerChoice == 1){
                
                playerWin=0;
                pcScore += 1;


        }
            if (playerChoice == 1 && computerChoice == 2){
                pcScore += 1;
                playerWin=0;


    }
            if (playerChoice == 2 && computerChoice == 0){
                pcScore += 1;
                playerWin=0;


    }
        if (computerChoice == 0 && playerChoice == 1){
            playerScore += 1;
            playerWin=1;


    }
        if (computerChoice == 1 && playerChoice == 2){
            playerScore += 1;
            playerWin=1;


    }
        if (computerChoice == 2 && playerChoice == 0){
            playerScore += 1;
            playerWin=1;


    }
        if(computerChoice == playerChoice){
            playerWin = 2;

    }
        if(computerChoice == 0){
            computerImg.src="img/landslide.png";    

    }
        if(computerChoice == 1){
            computerImg.src="img/new-document.png";    

    }
        if(computerChoice == 2){
            computerImg.src="img/scissors.png";    

    }
        if(playerWin==1){
            $("body").css("background-color","green");
            $("#result").html("You Won");

    }
        if(playerWin == 0){
            $("body").css("background-color","red");
            $("#result").html("You Lost")
    }
        if(playerWin==2){
            $("body").css("background-color","orange");
            $("#result").html("You Are Draw");
    }

    i+=1;
    console.log(i);
        if(i>=5){
                    if(playerScore > pcScore){
                        document.getElementById('result').innerHTML = "Game Over! You Win! " + playerScore +" - "+ pcScore;
                        document.getElementById('gameContainer').innerHTML ="";
                        $("body").css("background-color","green");

                    }
                    if(pcScore > playerScore){
                        document.getElementById('result').innerHTML = "Game Over! You Lose! " + playerScore +" - "+ pcScore;
                        document.getElementById('gameContainer').innerHTML ="";
                        $("body").css("background-color","red");
                    }
                    if(pcScore == playerScore){
                        document.getElementById('result').innerHTML = "Game Over! You Are Draw! " + playerScore +" - "+ pcScore;
                        document.getElementById('gameContainer').innerHTML ="";
                        $("body").css("background-color","orange");

                    }


        }



    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("pcScore").innerHTML = pcScore;
        

        
        })
    }



gameRound();