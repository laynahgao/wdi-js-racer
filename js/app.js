$('#go').click(function(){
  //check if a character has won the race
  function checkIfComplete(){
    if (isComplet == false){
      isComplet = true;
    }else  {
      place = "second";
    }
  }
  //get the width of the characters
  var charactersWidth = $('#batman').width();
  var charactersWidth = $('#superman').width();
  //get the width of the recetrack
  var raceTrackWidth = $(window).width() -  charactersWidth;
  //generate a random
  var raceTime1 = math.floor((Math.random() * 5000)+ 1);
  var raceTime2 = math.floor((Math.random() * 5000)+ 1);
  //set a flag variable to False by default
  var isComplete = false;
  //set a flag variable to first by default
  var place = "first";
  //animate batman
  $('#batman').animate({
    //move the characters width of the raceTrackWidth
    left: raceTrackWidth

  }, raceTime1, function(){
    //anmation is  Complete
    //run the function
    checkIfComplete();
    //text feedback
    $('#info1 span').text("Finished in" + place + "clocked" + raceTime1 + "seconds");
  });


  //animate superman
  $('#superman').animate({
    //move the characters width of the raceTrackWidth
    left: raceTrackWidth

  }, raceTime2, function(){
    //anmation is  Complete
    //run the function
    checkIfComplete();
    //text feedback
    $('#info2 span').text("Finished in" + place + "clocked" + raceTime2 + "seconds");
  });
    });
    //reset the race
    $('#reset').click(function){
      $('.characters').css('left', '0');
      $('.result span').text();

    }):
