
$(document).ready(function(){

    let cricketSong = document.getElementById("cricketSound");
    
    $("#soundControl").click(function(){
        
        if (cricketSong.paused) {
            $(cricketSong).trigger("play");
            $("#soundControl").attr("src", "assets/ondark.png");
        } else {
            $(cricketSong).trigger("pause");
            $("#soundControl").attr("src", "assets/offdark.png");
        }
        
        
    })
})
