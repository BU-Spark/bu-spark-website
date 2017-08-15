$(document).ready(function() {
  
  //Author: Lucas Watson <http://lkwatson.me>
  
  var wordList = ["ignite ideas.","explore projects.","launch projects."];
  var index = 0; //incrementer for Hero text
  var currentWord = "";
  var wordTime = 5000; //How long each word is shown for
  
  function changeWord() {
    index = (index >= wordList.length-1) ? 0 : index+1;
    currentWord = wordList[index];
  }
  
  var lettersShow = 0; //Store how many letters are currently displayed
  var timeElapsed = 0; //How long the current clock loop has gone
  var flipped = false; //Have we completed one typing of the word, and will now delete it
  var letterTime = 80; //how long to show each letter
  
  function clock() {
    timeElapsed = timeElapsed + letterTime;
    if (!flipped) {
      lettersShow = lettersShow + 1;
      flipped = (lettersShow >= currentWord.length)
    }else{
      if ( ((wordTime - timeElapsed)/letterTime) < currentWord.length ) {
        lettersShow = lettersShow - 1;
        
        if (lettersShow == 0) {
          flipped = false;
          timeElapsed = 0;
          changeWord();
        }
      }
    }

    $('#anim-text').text(function(i,t) {
      return currentWord.substr(0,lettersShow);
    })
  }
  
  changeWord(); //Run once

  setInterval(function(){clock()}, letterTime); //clock tick to do each letter type
  
});