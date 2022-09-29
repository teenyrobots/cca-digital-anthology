/* script for my jquery demo*/

$(document).ready(function(){
    
let bubblesound = document.getElementById("bubblesound");
    
    $("#soundcontrol").click(function(){
        if (bubblesound.paused) {
            $(bubblesound).trigger("play");
            $("#soundcontrol").attr("src", "assets/bellswings.gif");
        } else {
            $(bubblesound).trigger("pause");
            $("soundcontrol").attr("src=", "assets/bellswings.gif");
            
        }
    })
    
})