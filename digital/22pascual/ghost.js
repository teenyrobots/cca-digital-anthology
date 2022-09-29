/*script for ghoul'd brew*/

$(document).ready(function(){
    
    let creepymusic = document.getElementById("creepymusic");
    let scarysound = document.getElementById("scarysound");
    let flashlightclick = document.getElementById("click")
    
    $("#soundcontrol").click(function(){
        if(creepymusic.paused){
            $(creepymusic).trigger("play");   
            $("#soundcontrol").attr("src", "ON.png");
            console.log("the sound should be playing");
        } else {
            $(creepymusic).trigger("pause");
             $("#soundcontrol").attr("src", "OFF.png")
            }
        })
    
        $("#light").click(function(){
            if(click.paused){
              $(click).trigger("play");
            }
        })

    let cycling = 1;

    $("#light").click(function(){
        if (cycling < 4){
            cycling += 1;
            $(this).attr("src", cycling+".jpg");
            $(this).css("max-width","700px");
        } else {
            let ghost = Math.floor((Math.random() * 4) + 1);
            $(this).attr("src", "Ghost"+ghost+".jpg");
            $(scarysound).trigger("play"); 
            console.log(ghost);
            $(this).css("max-width","2000px");
        }
    });

    var waypoint1 = new Waypoint({
      element: document.getElementById('panel7'),
      handler: function() {
        console.log("panel 7 has entered the viewport");
        $("#panel7").attr("src", "Panel7.gif");
      },
      offset: '50%' 
    })

   var waypoint2 = new Waypoint({
      element: document.getElementById('panel10'),
      handler: function() {
        console.log("panel 10 has entered the viewport");
        $("#panel10").attr("src", "Panel10.gif");
      },
      offset: '50%' 
    })

    var waypoint3 = new Waypoint({
      element: document.getElementById('panel12'),
      handler: function() {
        console.log("panel 12 has entered the viewport");
        $("#panel12").attr("src", "Panel12.gif");
      },
      offset: '50%' 
    })
             
      
}); 