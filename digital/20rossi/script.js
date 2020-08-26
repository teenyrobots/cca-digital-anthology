// scripts for my final project

$(document).ready(function(){
    
  let soundWindElement = document.getElementById("soundWind");
    
    $("#wind").click(function(){
        if (soundWindElement.paused) {
            $("#soundWind").trigger("play");
        } else {
            $("#soundWind").trigger("pause");
        }
     });
   
    let nestFlapElement = document.getElementById("soundNest");
    
    $("#nestFlap").click(function(){
        if (nestFlapElement.paused) {
            $("#soundNest").trigger("play");
            $(".imgChanger").attr("src", "Assets/2-featherFlapNest.gif");
        } else {
            $("#soundNest").trigger("pause");
        }
     });
    
    let descentFeatherElement = document.getElementById("soundFlap2");
    
    $("#descentFeather").click(function(){
        if (descentFeatherElement.paused) {
            $("#soundFlap2").trigger("play");
            $(".descent").attr("src", "Assets/3-pigeonFlapDescent.gif");
        } else {
            $("#soundFlap2").trigger("pause");
        }
     });
    
    
    $(".hiderMochaText").hide();
    
    $(".featherMochaButton").click(function(){
        $(".hiderMochaText").show();
    });
    
    let pigeonCooElement = document.getElementById("soundCoo");
    
    $("#coo").click(function(){
        if (pigeonCooElement.paused) {
            $("#soundCoo").trigger("play");
        } else {
            $("#soundCoo").trigger("pause");
        }
     });
    
    $(".imgChanger").click(function(){
        $(this).attr("src", "Assets/2-featherFlapNest.gif");
    });
    
    $(".descent").click(function(){
        $(this).attr("src", "Assets/3-pigeonFlapDescent.gif");
    });
    
    
    $(".garbageFeather").click(function(){
        $("#garbageLand").attr("src", "Assets/5-garbageLandUpdated.gif");
    });

   
    let featherCupElement = document.getElementById("soundFlap2");
    
    $(".featherCup").click(function(){
        if (featherCupElement.paused) {
            $("#soundFlap2").trigger("play");
            $("#cup").attr("src", "Assets/7-cupThrowUpdated.gif");
        } else {
            $("#soundFlap2").trigger("pause");
        }
     });
    
  
    
    
    let soundWind2Element = document.getElementById("soundWind2");
    
    $("#overhead").click(function(){
        if (soundWind2Element.paused) {
            $("#soundWind2").trigger("play");
        } else {
            $("#soundWind2").trigger("pause");
        }
     });
    
    let soundParkElement = document.getElementById("soundPark");
    
    $("#crowd").click(function(){
        if (soundParkElement.paused) {
            $("#soundPark").trigger("play");
        } else {
            $("#soundPark").trigger("pause");
        }
     });
    
    let soundRustleElement = document.getElementById("soundRustle");
    
    $("#rustle").click(function(){
        if (soundRustleElement.paused) {
            $("#soundRustle").trigger("play");
        } else {
            $("#soundRustle").trigger("pause");
        }
        });
    
    
    let featherShooElement = document.getElementById("soundNest");
    
    $("#featherShoo").click(function(){
        if (featherShooElement.paused) {
            $(".shoo").attr("src", "Assets/11-shoo2.gif");
            $("#soundNest").trigger("play");
        } else {
            $("#soundNest").trigger("pause");
        }
     });
    
    
    $(".bridgeLand").click(function(){
        $("#bridge").attr("src", "Assets/12-bridgeLand2.gif");
    });
    
    
    
    
    let flyAwayElement = document.getElementById("soundFlap2");
    
    $("#flyAway").click(function(){
        if (flyAwayElement.paused) {
            $("#soundFlap2").trigger("play");
        } else {
            $("#soundFlap2").trigger("pause");
        }
        });
    
    
    
    
    });