/* Scripts for JQuery Demo */

$(document).ready(function(){

    let gsound = document.getElementById("gsound");
    let csound = document.getElementById("csound");
    let esound = document.getElementById("esound");
    let asound = document.getElementById("asound");
    
    $("#tunerbutton").hover(
        function(){$(this).css("opacity", "100%");}
     ,  function(){$(this).css("opacity", "0%");}
    );
    
    $(".chordbutton").hover(
        function(){$(this).css("opacity", "100%");}
     ,  function(){$(this).css("opacity", "0%");}
    );
    
    $(".bridgebutton").hover(
        function(){$(this).css("opacity", "100%");}
     ,  function(){$(this).css("opacity", "0%");}
    );
     
    $("#Gplaybutton").click(function(){
        if (gsound.paused) {
            $(gsound).prop("currentTime", 0);
            $(gsound).trigger("play");
            $(csound).trigger("pause");
            $(esound).trigger("pause");
            $(asound).trigger("pause");
      } else {
            $(gsound).prop("currentTime", 0);
            $(gsound).trigger("play");
        }
    });
    
    $("#Cplaybutton").click(function(){
        if (csound.paused) {
            $(csound).prop("currentTime", 0);
            $(csound).trigger("play");
            $(gsound).trigger("pause");
            $(esound).trigger("pause");
            $(asound).trigger("pause");
      } else {
            $(csound).prop("currentTime", 0);
            $(csound).trigger("play");
        }
    });
    
    $("#Eplaybutton").click(function(){
        if (esound.paused) {
            $(esound).prop("currentTime", 0);
            $(esound).trigger("play");
            $(gsound).trigger("pause");
            $(csound).trigger("pause");
            $(asound).trigger("pause");
      } else {
            $(esound).prop("currentTime", 0);
            $(esound).trigger("play");
        }
    });
    
    $("#Aplaybutton").click(function(){
        if (asound.paused) {
            $(asound).prop("currentTime", 0);
            $(asound).trigger("play");
            $(gsound).trigger("pause");
            $(csound).trigger("pause");
            $(esound).trigger("pause");
      } else {
            $(asound).prop("currentTime", 0);
            $(asound).trigger("play");
        }
    });
    
    /*$("#playbutton").click(function(){
        if (gsound.paused) {
            $(gsound).prop("currentTime", 0);
            $(gsound).trigger("play");
            $("#playbutton").attr("src", "Assets/soundon.png");
        } else {
            $(gsound).trigger("pause");
            $("#playbutton").attr("src", "Assets/soundoff.png");
        }
    });
    */

});

document.getElementById("tunerbutton").hover(
        function(){this.css("src", "Assets/tunerbutton.png");}
     ,  function(){this.css("src", "Assets/tunerbutton2.png");}
    );
