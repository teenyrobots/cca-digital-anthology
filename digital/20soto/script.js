$(document).ready(function(){
    //declare variable for soundclip
    let downfallElement =  document.getElementById("music1");
    let officeElement =  document.getElementById("music2");
    let stablesElement =  document.getElementById("music3");
    let studyElement = document.getElementById("music4");
    
    //turning the sound on and off on click
    $("#soundControl1").click(function(){
       if (downfallElement.paused) {
           $("#music1").trigger("play");
           $("#soundControl1").attr("src", "assets/speakerOn.png");
                $("#music2").trigger("pause");
                $("#soundControl2").attr("src", "assets/speakerOff.png");
                $("#music3").trigger("pause");
                $("#soundControl3").attr("src", "assets/speakerOff.png");
                $("#music4").trigger("pause");
                $("#soundControl4").attr("src", "assets/speakerOff.png"); 
       } else {
           $("#music1").trigger("pause");
           $("#soundControl1").attr("src", "assets/speakerOff.png"); 
       }
    });
    
        $("#soundControl2").click(function(){
       if (officeElement.paused) {
           $("#music2").trigger("play");
           $("#soundControl2").attr("src", "assets/speakerOn.png");
                $("#music1").trigger("pause");
                $("#soundControl1").attr("src", "assets/speakerOff.png");
                $("#music3").trigger("pause");
                $("#soundControl3").attr("src", "assets/speakerOff.png");
                $("#music4").trigger("pause");
                $("#soundControl4").attr("src", "assets/speakerOff.png"); 
       } else {
           $("#music2").trigger("pause");
           $("#soundControl2").attr("src", "assets/speakerOff.png"); 
       }
    });
    
        $("#soundControl3").click(function(){
       if (stablesElement.paused) {
            $("#music3").trigger("play");
            $("#soundControl3").attr("src", "assets/speakerOn.png");
                $("#music1").trigger("pause");
                $("#soundControl1").attr("src", "assets/speakerOff.png");
                $("#music2").trigger("pause");
                $("#soundControl2").attr("src", "assets/speakerOff.png");
                $("#music4").trigger("pause");
                $("#soundControl4").attr("src", "assets/speakerOff.png"); 
       } else {
           $("#music3").trigger("pause");
           $("#soundControl3").attr("src", "assets/speakerOff.png"); 
       }
    });

        $("#soundControl4").click(function(){
       if (studyElement.paused) {
            $("#music4").trigger("play");
            $("#soundControl4").attr("src", "assets/speakerOn.png");
                $("#music1").trigger("pause");
                $("#soundControl1").attr("src", "assets/speakerOff.png");
                $("#music2").trigger("pause");
                $("#soundControl2").attr("src", "assets/speakerOff.png");
                $("#music3").trigger("pause");
                $("#soundControl3").attr("src", "assets/speakerOff.png"); 
       } else {
           $("#music4").trigger("pause");
           $("#soundControl4").attr("src", "assets/speakerOff.png"); 
       }
    });
    
});