//-------Get writers block in that I dont know what to do first or how things go together. 
//-------I still have a hard time figuring out what functions/methods to use when and where----

//variables
var wins = 0;
var losses = 0;
var compNum = 0;
var userScore = 0;
var total = 0;

// Chooses a new random number at start of new game
  var ranNum = 19 + Math.floor(Math.random() * 102);
  console.log(ranNum);

  //assigns random value for each jewel when clicked
  var purple1 = Math.floor(Math.random() * 12) + 1;
  var green2 = Math.floor(Math.random() * 12) + 1;
  var yellow3 = Math.floor(Math.random() * 12) + 1;
  var red4 = Math.floor(Math.random() * 12) + 1;
  console.log(purple1, green2, yellow3, red4);


  $(".pics").on("click", function () {
    console.log($(this).attr("ranNum"));
  })



// $(document).ready(function()-------------------


// function newGame() {
  // total = 0;
  // $(".paraWin").text(total);
  // compNum = Math.floor(Math.random() * 120) + 19;
  // console.log(compNum);
  // $(".paraRandom").text(compNum);

//   for (var i = 0; i < 4; i++) {
//     crystals[i] = Math.floor(Math.random() * 12) + 1;
//   }
//   console.log(crystals);
// }

// function playGame() {
//   if (total === compNum) {
//     win = win + 1;
//     console.log("wins are " + win);
//   }
    // }










// -------------

// compNum = 0;
// $(".finalScore").text(sum);
// // Computer assigns a random number between 19 and 120 inclusive that the user will try to match
// Var ranNum = Math.floor(Math.random() * 120 + 19);
// console.log(ranNum);
// $(".paraRandom").text(ranNum);


// // Computer assigns different random numbers between 1 and 12 inclusive to each of the crystals 
// for (var i=0; i<4; i++) {
//     crystals[i] = Math.floor(Math.random() * 12 + 1);
// }
// console.log(crystals);


// }
//------------------------


//-------Get writers block in that I dont know what to do first or how things go together. 
//-------I still have a hard time figuring out what functions/methods to use when and where----


  // newGame();
	

		// // listen for clicks on any of the gems by targeting the gem class
		// $(".pics").on("click", function() {
		// 	// each gem has a value attribute of gem1, gem2, gem3, or gem 4
		// 	// use this attribute to identify which gem the user actually clicked
		// 	var pressed = $(this).attr("value");
	  //       console.log(pressed);
	  //       // add the value of the gem to the user's ongoing score tally
	  //       if (pressed == "gem1") {
	  //       	userScore += purple1;
	  //       } else if (pressed == "gem2") {
	  //       	userScore += green2;
	  //       } else if (pressed == "gem3") {
	  //       	userScore += yellow3;
	  //       } else if (pressed == "gem4") {
	  //       	userScore += red4;
	  //       } else {
	  //       	console.log("error");
	  //       }
	  //       // then update the html for the user score
	  //       $(".scoreDiv").html(userScore);
	  //       // call the function to see if user has won or lost
	  //       // hasUserWonOrLost();
		// });
	

	


  // $(".purple1").on("click", function(){
  //   var purple1 = Math.floor(Math.random() * 12 + 1);
  //    console.log(purple1);
  // })
  
  // $(".green2").on("click", function(){
  //   var green2 = Math.floor(Math.random() * 12 + 1);
  //     console.log(green2);
  // })
    
  // $(".yellow3").on("click", function(){
  //   var yellow3 = Math.floor(Math.random() * 12 + 1);
  //     console.log(yellow3);
  // })

  // $(".red4").on("click", function(){
  //   var red4 = Math.floor(Math.random() * 12 + 1);
  //     console.log(red4);
  // })


  //Count numbers and then Log wins and losses
  
  // $(".purple1").on("click", function() {
    //assign a random number and use it throughout game
    // if( )
    // total++;
    // console.log("purple1" + crystals[0] + " Total is " + total);
    // $(".compRandom").text(total);
  // })
  // playgame();

// ------------------------

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



