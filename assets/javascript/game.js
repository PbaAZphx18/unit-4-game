

// $(document).ready(function()-------------------

//variables
var win = 0;
var loss = 0;
var compNum = 1;
var score = 0;
var ranNum1 = [0,0,0,0];
var min = 19;
var max = 120;


// Chooses a new random number 
  var ranNum = Math.floor(Math.random() * 120 + 19);
  console.log(ranNum);


  //assign vrandom alue for each jewel

  $(".purple1").on("click", function(){
    var purple1 = Math.floor(Math.random() * 12 + 1);
     console.log(purple1);
  })
  
  $(".green2").on("click", function(){
    var green2 = Math.floor(Math.random() * 12 + 1);
      console.log(green2);
  })
    
  $(".yellow3").on("click", function(){
    var yellow3 = Math.floor(Math.random() * 12 + 1);
      console.log(yellow3);
  })

  $(".red4").on("click", function(){
    var red4 = Math.floor(Math.random() * 12 + 1);
      console.log(red4);
  })






// $( document ).ready(function newGame() {

// var min = 19;
// var max = 120;

// var compNum = Math.floor(Math.random() * (max - min +1)) + min;
// console.log(compNum);
// }




// var score = 0;
//         $(".finalScore").text(score);

// function newGame() {
//   compNum = Math.floor(Math.random() * 120) + 19;
//   console.log(compNum);
//   $(".paraRandom").text(compNum);

//   for (var i=0; i<4; i++) {
//     ranNum[i] = Math.floor(Math.random() * 12) + 1;
//     console.log(ranNum);
// }

// }




//onClick for all jewels
// $("purple1").on("click", function(){
//   console.log("");
// })

// for(var i = 0; i < ; i++) {
// console.log(i);
//}

// var ranNum = word[Math.floor(Math.random() * word.length)];




// ---------------------------

// var wins = 0;
// var losses = 0;
// var sum = 0;
// var matchNum = 1;
// // note: in crystal array [0] is amethyst, [1] is blue, [2] is quartz, [3] is ruby 
// var crystalNum = [0, 0, 0, 0];

// function startNewGame() {
//   // reset sum to 0 and display 0 for user
//   sum = 0;
//   $("#sum").text(sum);
//   // Computer assigns a random number between 19 and 120 inclusive that the user will try to match
//   matchNum = Math.floor(Math.random() * 102) + 19;
//   console.log(matchNum);
//   $("#number-to-match").text(matchNum);

//   // Computer assigns different random numbers between 1 and 12 inclusive to each of the crystals 
//   for (var i = 0; i < 4; i++) {
//     crystalNum[i] = Math.floor(Math.random() * 12) + 1;
//   }
//   console.log(crystalNum);

// }
