/*script for my jquery demo */


$(document).ready(function(){
    
    
    
    let cycling = 1;
    
    
    $(".hider").hide();
    
    $("#showImage").click(function(){
        $(".hider").show();
        console.log("the button has been clicked");
    })
    $(".dumBorder").click(function(){
        $(this).css("border", "red solid 5px");
    })
    
    $(".imgChanger").click(function(){
        $(this).attr("src", "assets/1.jpg");
    })
    
    $("#cycle").click(function(){
        console.log("you clicked the cycler");
        if (cycling < 4){
            cycling += 1;
            $(this).attr("src", "assets/"+cycling+".jpg")
        } else {
            cycling = 1;
            $(this).attr("src", "assets/"+cycling+".jpg");
        }
    })
    
    var waypoint = new Waypoint({
  element: document.getElementById('cycle'),
  handler: function() {
    $("#cycle").css("border", "red solid 5px");
  }
})
    let larkSong = document.getElementById("larksound");
    
    $("#soundControl").click(function(){
        if(larkSong.paused){
            $(larkSong).trigger("play");
            $("#soundControl").attr("src", "assets/on.png");
        }else {
            $(larkSong).trigger("pause");
            $("#soundControl").attr("src", "assets/off.png");
        }
    })
    
})