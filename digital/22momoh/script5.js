/* script ana*/

$(document).ready(function(){
    
let magicwand = document.getElementById("magicwand");
    
    $("#soundcontrol").click(function(){
        if (magicwand.paused) {
            $(magicwand).trigger("play");
            $("#soundcontrol").attr("src", "assets/bellswings.gif");
        } else {
            $(magicwand).trigger("pause");
            $("soundcontrol").attr("src=", "assets/bellswings.gif");
            
        }
    })
    
})