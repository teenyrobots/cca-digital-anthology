/* script ana*/

$(document).ready(function(){
    
let riversound = document.getElementById("riversound");
    
    $("#soundcontrol").click(function(){
        if (riversound.paused) {
            $(riversound).trigger("play");
            $("#soundcontrol").attr("src", "assets/bellswings.gif");
        } else {
            $(themesong).trigger("pause");
            $("soundcontrol").attr("src=", "assets/bellswings.gif");
            
        }
    })
    
})