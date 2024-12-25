
        //creating An object
        /*const score={
            wins:0,
            losses:0,
            ties:0
            };
            
            if(!score){
                score={
                    wins:0, 
                    losses:0,
                    ties:0
                    };
                    }
                    //its is updated with or operator
                    */
                   
                   //Accesing items from the Local Storage iff null initilize
                   let score=JSON.parse(localStorage.getItem('score')) || {
                    wins:0,
                    losses:0,
                    ties:0
                 };//Sringdata --> objectdata || creating new object


                
                 
             
                /* document.querySelector('.js_score')
                 .innerHTML=`wins:${score.wins}, losses:${score.losses},ties: ${score.ties}`;*/
                 Local_storage_updateScore();


     let computerMove='';
     function computerMove1()
     { 
         const random=Math.random();
         if(random<1/3)
         {
             computerMove='rock';
         }
         else if(random >=1/3 && random< 2/3)
         {
             computerMove='paper';
         }
         else{
             computerMove='scissors';
         }
         //calling Another function
         
     }

     function myMove(mySelection)
     {
         computerMove1();
         let result='';
         if(mySelection==='scissors')
         { 
             if(computerMove==='rock')
             {
                 result='lose';
             }
             else if (computerMove==='paper') {
                 result='win';
             } else {
                 result='tie';  
             } 
         }
         else if(mySelection==='paper')
         {
             if(computerMove==='rock')
             {
                 result='win';
             }
             else if (computerMove==='paper') {
                 result='tie';
             } else {
                 result='lose';    
             }
         }
         else{
             if(computerMove==='rock')
             {
                 result='tie';
             }
             else if (computerMove==='paper') {
                 result='lose';
             } else {
                 result='win';       
             }
         }

         if(result==='win')
             score.wins+=1;
         else if(result==='lose')
             score.losses+=1;
         else
             score.ties+=1;

         //Saving intems into an local Storage.
         let stingdata=JSON.stringify(score);//convert data to strings because json only accept string data
         localStorage.setItem('score',stingdata);

         /*
             document.querySelector('.js_score')
             .innerHTML=`wins:${score.wins}, losses:${score.losses},ties: ${score.ties}`;
         */
         Local_storage_updateScore();


         //dom code to display js_result and js_movies
         document.querySelector('.js_result').innerHTML=`you ${result}`;
         document.getElementById('moves')
         .innerHTML=`
         You
         <img  class="emoji" src="images/${mySelection}-emoji.png">
         <img  class="emoji" src="images/${computerMove}-emoji.png">
         computer.`
     }
    function Local_storage_updateScore()
     {
         document.querySelector('.js_score')
         .innerHTML=`wins:${score.wins}, losses:${score.losses},ties: ${score.ties}`;
     }