'use strict';

// const x = 23; //prettier is used here through setting and default format set as pretter and here we need to follow so opinion of perttier
// if (x === 23) console.log(23);

// const colAge = birth => 2037 - birth;
// console.log(colAge(10));


// //56 

// const calTem = function(temps){
//     let max = temps[0];
//     for(let i=0;i<temps.length;i++){
//         if(temps[i]>max) max = temps[i];
        
//     }
//     console.log(max);
// };

// calTem([3,7,8]);


//project 1.


// console.log(document.querySelector('.message').Text = 'correct number!');

// console.log(document.querySelector('.guess').values=23);
// const secret = Math.trunc(Math.random())*20;
// document.querySelector('.number').textContent.secret;
// console.log();
// console.log(document.querySelector('.number').guess);
// document.querySelector('.check').addEventListener('click',function(){
//     console.log(document.querySelector('.guess').values);


//     if(!guess){
//         document.querySelector('.message').textContent='no number';
//     }
//     else if(guess == secret){
//         console.log(document.querySelector('.message').textContent = 'good');
//     }
//     });


let secret = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

     if(!guess){
        document.querySelector('.message').textContent ='No Number';
     }
     else if(guess === secret){
      document.querySelector('.message').textContent ='correct Number!';
      document.querySelector('.number').textContent = 
secret;
document.querySelector('body').style.backgroundColor='green';
document.querySelector('.number').style.width='30rem';

if(score>highscore){
highscore = score;
document.querySelector('.highscore').textContent = highscore;

}

//when guess is wrong

//
// else if(guess !== secret){
//    if(score>1){
//       document.querySelector('.message').textContent = guess > secret ? 'To high!' : 'Too low!';
//       score--;
//       document.querySelector('.message').textContent ='Too low';
//          score = score -1;//or score--;
//            document.querySelector('.score').textContent =score;
//          }else{
//             document.querySelector('.message').textContent ='you lost the game!';

//
     }
     
     else if(guess>secret){
      if(score>0){
         
        document.querySelector('.message').textContent ='To high';
        score = score -1;//or score--;
        document.querySelector('.score').textContent = score;
      }else{
         document.querySelector('.message').textContent ='you lost the game!';
      }
     }
     else if(guess<secret){
      if(score>0){
         document.querySelector('.message').textContent ='Too low';
      score = score -1;//or score--;
        document.querySelector('.score').textContent =score;
      }else{
         document.querySelector('.message').textContent ='you lost the game!';
      }
      }
      
   }
);

document.querySelector('.again').addEventListener('click',function(){
   score = 20;
   secret = Math.trunc(Math.random()*20)+1;

   document.querySelector('.message').textContent ='Start guessing...';
      document.querySelector('.score').textContent=score;
      document.querySelector('.number').textContent= '?';
  
   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor='#222';
   document.querySelector('.number').style.width='15rem';
});


