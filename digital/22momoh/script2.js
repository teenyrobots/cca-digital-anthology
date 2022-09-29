/* script ana*/

$(document).ready(function(){
    
let themesong = document.getElementById("themesong");
    
    $("#soundcontrol").click(function(){
        if (themesong.paused) {
            $(themesong).trigger("play");
            $("#soundcontrol").attr("src", "assets/bellswings.gif");
        } else {
            $(themesong).trigger("pause");
            $("soundcontrol").attr("src=", "assets/bellswings.gif");
            
        }
    })
    
})