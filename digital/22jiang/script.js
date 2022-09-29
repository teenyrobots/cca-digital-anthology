/* script for my jquery demo */

$(document).ready(function (){
    
    $('#btn_back').click(function){}
    
    let cycling = 1;
    
    $(".hider").hide();
    
    $("#showImage").click(function(){
        $(".hider").show();
        console.log("the button has been clicked");
    })
    
    $(".dumbborder"),click(function(()){
        $(this).css("border","red solid 5px")
    })
    
    $(".imgchanger").click(function(){
        $(this).attr("src", "thumbs/1.png");
        
    })