$(document).ready(function(){
    
    let cycling = 1;
    
    $("#cycler").click(function(){
        console.log("Cycler has been clicked");
        if (cycling < 4) {
            cycling += 1;
            $(this).attr("src", "Assets/"+cycling+".png");
        }   else {
            cycling= 1;
            $(this).attr("src", "Assets/"+cycling+".png");
            }
    })
})