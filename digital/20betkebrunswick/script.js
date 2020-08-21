//Script for my jquery demo

$(document).ready(function(){

$('form').keypress(function(event) { 
    return event.keyCode != 13;
}); 
    
    
    function doSomeMath(x) {
        y = Math.pow(8,x);
        return y;
  }

  $("#submitButton1").click(function(){
      // get the value the user entered
      let submitValue = Number(document.getElementById("number1").value);

      // here's what happens when we click the submit button:
      if (isNaN(submitValue)) {

        // the first part of this function checks to see if the reader entered a number or "NaN" which is "Not a Number"
        $("#theAnswer1").text("Enter a number! Try again.");

      } else {
          
        // run the function where we did all our math!
        // store the result of that math in a variable called "newValue"
        let newValue = Math.round(doSomeMath(submitValue)*1000)/1000;
          
        if (0.0001 < newValue && newValue < 218614) {
            $("#theAnswer1").text(newValue+"     ***TOO SMALL***");
        } else if (newValue > 218614){
            $("#theAnswer1").text(newValue+"     ***TOO BIG***");
        } else if (newValue === 218614){
            $("#theAnswer1").text(newValue+"  YOU GOT IT");
        } else if (newValue < 0.0001){
            $("#theAnswer1").text(" Very close to zero. ***TOO SMALL***");
        }

        // show the answer in the appropriate area on the page
//        $("#theAnswer1").text(newValue);

        // hide the submit button so they can't do more stuff (this is optional)
//        $("#submitButton").hide();

      }

  });
    
    let clickClackElement = document.getElementById("clickClack");
    
    $("#sound1").click(function(){
        if(clickClackElement.paused) {
            $("#clickClack").trigger("play");
        }
    });
    
    let swoopDeLoopElement = document.getElementById("swoopDeLoop");
    
    $("#sound2").click(function(){
        if(swoopDeLoopElement.paused) {
            $("#swoopDeLoop").trigger("play");
        }
    });
    
    let wooHooElement = document.getElementById("wooHoo");
    
    $("#sound3").click(function(){
        if(wooHooElement.paused) {
            $("#wooHoo").trigger("play");
        }
    });
    
    let swoopDeLoopElement2 = document.getElementById("swoopDeLoop2");
    
    $("#sound4").click(function(){
        if(swoopDeLoopElement2.paused) {
            $("#swoopDeLoop2").trigger("play");
        }
    });
    
    
//    Math function number 2
    
    
    function doMath2(x,y) {
    let z = Math.log(y)/Math.log(x);
    return z;
  }

  $("#submitButton2").click(function(){
      // get the value the user entered
      let log1 = Number(document.getElementById("number2").value);
      let log2 = Number(document.getElementById("number3").value);
      // here's what happens when we click the submit button:
      if (isNaN(log1) || isNaN(log2)) {

        // the first part of this function checks to see if the reader entered a number or "NaN" which is "Not a Number"
        $("#theAnswer2").text("We can only do logs with numbers! Try again.");

      } else if (log2 < 0 || log1 < 0) { 
        $("#theAnswer2").text("We can't take the log of a negative. Try again.");
      } else if (log2 === 0 || log1 === 0) { 
        $("#theAnswer2").text("Log of 0 is undefined. Try again.");
      } else if (log1 === 1) { 
        $("#theAnswer2").text("Log base 1 is undefined. Try again.");
      } else {

        // run the function where we did all our math!
        // store the result of that math in a variable called "newValue"
        let newValue = Math.round(doMath2(log1, log2)*10000)/10000;

        // show the answer in the appropriate area on the page
        $("#theAnswer2").text(newValue);
        $("#base").text(log1); 
        $("#exponent").text(newValue);
        $("#answer").text(log2);
      }

  });
    
   
    function doMath3(x,y,z) {
    let q = Math.log(z/x)/Math.log(1-(y/100));
    return q;
  }

  $("#submitButton3").click(function(){
      // get the value the user entered
      let policeBudget = Number(document.getElementById("policeBudget").value);
      let defundingRate = Number(document.getElementById("defundingRate").value);
      let futureBudget = Number(document.getElementById("futureBudget").value);
      // here's what happens when we click the submit button:
      if (isNaN(policeBudget) || isNaN(defundingRate) || isNaN(futureBudget)) {

        // the first part of this function checks to see if the reader entered a number or "NaN" which is "Not a Number"
        $("#numberOfYears").text("We can only do logs with numbers! Try again.");

      } else if (policeBudget < 0 || defundingRate < 0 || futureBudget < 0) { 
        $("#numberOfYears").text("Use a positive number. Try again.");
      } else {
        if (futureBudget === 0) { 
            futureBudget =0.01;
        };
        console.log(futureBudget);
        // run the function where we did all our math!
        // store the result of that math in a variable called "newValue"
        let newValue = Math.round(doMath3(policeBudget, defundingRate, futureBudget)*10000)/10000;
          
        $("#numberOfYears").empty();

        // show the answer in the appropriate area on the page
        $("#numberOfYears").append("<p>"+newValue+" years<p>");
      }

  });
    
    $(function() {
        var moveLeft = 10;
        var moveDown = 10;

        $('img.trigger1').hover(function(e) {
            $('div#pop-up1').show();
     //.css('top', e.pageY + moveDown)
     //.css('left', e.pageX + moveLeft)
     //.appendTo('body');
        }, function() {
            $('div#pop-up1').hide();
        });

        $('img.trigger1').mousemove(function(e) {
            $("div#pop-up1").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
        });
        
    });
    
    $(function() {
        var moveLeft = 10;
        var moveDown = 10;

        $('img.trigger2').hover(function(e) {
            $('div#pop-up2').show();
     //.css('top', e.pageY + moveDown)
     //.css('left', e.pageX + moveLeft)
     //.appendTo('body');
        }, function() {
            $('div#pop-up2').hide();
        });

        $('img.trigger2').mousemove(function(e) {
            $("div#pop-up2").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
        });
        
    });
    
    $(function() {
        var moveLeft = 10;
        var moveDown = 10;

        $('img.trigger3').hover(function(e) {
            $('div#pop-up3').show();
     //.css('top', e.pageY + moveDown)
     //.css('left', e.pageX + moveLeft)
     //.appendTo('body');
        }, function() {
            $('div#pop-up3').hide();
        });

        $('img.trigger3').mousemove(function(e) {
            $("div#pop-up3").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
        });
        
    });
    
    $(function() {
        var moveLeft = 10;
        var moveDown = 10;

        $('img.trigger4').hover(function(e) {
            $('div#pop-up4').show();
     //.css('top', e.pageY + moveDown)
     //.css('left', e.pageX + moveLeft)
     //.appendTo('body');
        }, function() {
            $('div#pop-up4').hide();
        });

        $('img.trigger4').mousemove(function(e) {
            $("div#pop-up4").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
        });
        
    });
    
});
    