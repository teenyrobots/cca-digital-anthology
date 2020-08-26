// scripts for my first draft

$(document).ready(function(){

     let beepsoundElement = document.getElementById("beepsound");

    $("#soundcontrol").click(function(){
        if (beepsoundElement.paused) {
            $("#beepsound").trigger("play");
            $("#soundcontrol").attr("src", "assets/2H.gif");
        } else {
            $("#beepsound").trigger("pause");
        }
        $("#hiddencontent2").removeClass("hiding");
    });

    $("#startbutton").click(function(){
        $("#hiddencontent1").removeClass("hiding");
    });

    $(".nobagbutton").click(function(){
        $("#hiddencontent3").removeClass("hiding");
    });

   $(".closer").click(function(){
        $(this).hide();
       $("#hiddencontent0").removeClass("hiding");
   });

   $(".notamember").click(function(){
        $("#hiddencontent4").removeClass("hiding");
    });

    $(".nottoday").click(function(){
        $("#hiddencontent5").removeClass("hiding");
    });

    $("#adAtdoor").click(function(){
        $("#hiddencontent6").removeClass("hiding");
    });

});
