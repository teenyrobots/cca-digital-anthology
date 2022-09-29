 $(document).ready(function(){
     
    let achordsound = document.getElementById("achordsound");
    let bchordsound = document.getElementById("bchordsound");
    let cchordsound = document.getElementById("cchordsound");
    let dchordsound = document.getElementById("dchordsound");
    let echordsound = document.getElementById("echordsound");
    let fchordsound = document.getElementById("fchordsound");
    let gchordsound = document.getElementById("gchordsound");
    let amchordsound = document.getElementById("amchordsound");
    let bmchordsound = document.getElementById("bmchordsound");
    let cmchordsound = document.getElementById("cmchordsound");
    let dmchordsound = document.getElementById("dmchordsound");
    let emchordsound = document.getElementById("emchordsound");
    let fmchordsound = document.getElementById("fmchordsound");
    let gmchordsound = document.getElementById("gmchordsound");
     
    $("#abutton").click(function(){
        $("#chords").attr("src", "Assets/Achord.png");
        if (achordsound.paused) {
            $(achordsound).prop("currentTime", 0);
            $(achordsound).trigger("play");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(achordsound).prop("currentTime", 0);
            $(achordsound).trigger("play");
      }      
    });
    
    $("#bbutton").click(function(){
        $("#chords").attr("src", "Assets/Bchord.png");
        if (bchordsound.paused) {
            $(bchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("play");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(bchordsound).prop("currentTime", 0);
            $(bchordsound).trigger("play");
      }
    });
        
    $("#cbutton").click(function(){
        $("#chords").attr("src", "Assets/Cchord.png");
        if (cchordsound.paused) {
            $(cchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("play");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(cchordsound).prop("currentTime", 0);
            $(cchordsound).trigger("play");
      }
    });
     
     
    $("#dbutton").click(function(){
        $("#chords").attr("src", "Assets/Dchord.png");
        if (dchordsound.paused) {
            $(dchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("play");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
           $(dchordsound).prop("currentTime", 0);
           $(dchordsound).trigger("play");
      } 
    });
     
    $("#ebutton").click(function(){
        $("#chords").attr("src", "Assets/Echord.png");
        if (echordsound.paused) {
            $(echordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("play");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(echordsound).prop("currentTime", 0);
            $(echordsound).trigger("play");
      }
    });
     
    $("#fbutton").click(function(){
        $("#chords").attr("src", "Assets/Fchord.png");
        if (fchordsound.paused) {
            $(fchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("play");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(fchordsound).prop("currentTime", 0);
            $(fchordsound).trigger("play");
      }
    });  
     
    $("#gbutton").click(function(){
        $("#chords").attr("src", "Assets/Gchord.png");
        if (gchordsound.paused) {
            $(gchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("play");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(gchordsound).prop("currentTime", 0);
            $(gchordsound).trigger("play");
      }
    });
    
    $("#ambutton").click(function(){
        $("#chords").attr("src", "Assets/Amchord.png");
        if (amchordsound.paused) {
            $(amchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("play");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(amchordsound).prop("currentTime", 0);
            $(amchordsound).trigger("play");
      }
    });
    
    $("#bmbutton").click(function(){
        $("#chords").attr("src", "Assets/Bmchord.png");
        if (bmchordsound.paused) {
            $(bmchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("play");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(bmchordsound).prop("currentTime", 0);
            $(bmchordsound).trigger("play");
      }
    });
     
    $("#cmbutton").click(function(){
        $("#chords").attr("src", "Assets/Cmchord.png");
        if (cmchordsound.paused) {
            $(cmchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("play");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(cmchordsound).prop("currentTime", 0);
            $(cmchordsound).trigger("play");
      }
    });
     
    $("#dmbutton").click(function(){
        $("#chords").attr("src", "Assets/Dmchord.png");
        if (dmchordsound.paused) {
            $(dmchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("play");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(dmchordsound).prop("currentTime", 0);
            $(dmchordsound).trigger("play");
      }
    });
     
    $("#embutton").click(function(){
        $("#chords").attr("src", "Assets/Emchord.png");
        if (emchordsound.paused) {
            $(emchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("play");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("pause");
      } else {
            $(emchordsound).prop("currentTime", 0);
            $(emchordsound).trigger("play");
      }
    });
     
    $("#fmbutton").click(function(){
        $("#chords").attr("src", "Assets/Fmchord.png");
        if (fmchordsound.paused) {
            $(fmchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("play");
            $(gmchordsound).trigger("pause");
      } else {
            $(fmchordsound).prop("currentTime", 0);
            $(fmchordsound).trigger("play");
      }
    });  
    $("#gmbutton").click(function(){
        $("#chords").attr("src", "Assets/Gmchord.png");
        if (gmchordsound.paused) {
            $(gmchordsound).prop("currentTime", 0);
            $(achordsound).trigger("pause");
            $(bchordsound).trigger("pause");
            $(cchordsound).trigger("pause");
            $(dchordsound).trigger("pause");
            $(echordsound).trigger("pause");
            $(fchordsound).trigger("pause");
            $(gchordsound).trigger("pause");
            $(amchordsound).trigger("pause");
            $(bmchordsound).trigger("pause");
            $(cmchordsound).trigger("pause");
            $(dmchordsound).trigger("pause");
            $(emchordsound).trigger("pause");
            $(fmchordsound).trigger("pause");
            $(gmchordsound).trigger("play");
      } else {
            $(gmchordsound).prop("currentTime", 0);
            $(gmchordsound).trigger("play");
      }
    });
     
    $(document).ready(function() {
        $(this).keydown(function(event) {
            if (event.which === 65) {
                $("#abutton").click();
            }
        });
    }); 
     
    $(document).ready(function() {
        $(this).keydown(function(event) {
            if (event.which === 66) {
                $("#bbutton").click();
            }
        });
    }); 
     
    $(document).ready(function() {
        $(this).keydown(function(event) {
            if (event.which === 67) {
                $("#cbutton").click();
            }
        });
    });
     
    $(document).ready(function() {
        $(this).keydown(function(event) {
            if (event.which === 68) {
                $("#dbutton").click();
            }
        });
    });
     
    $(document).ready(function() {
        $(this).keydown(function(event) {
            if (event.which === 69) {
                $("#ebutton").click();
            }
        });
    });
     
    $(document).ready(function() {
        $(this).keydown(function(event) {
            if (event.which === 70) {
                $("#fbutton").click();
            }
        });
    });
     
    $(document).ready(function() {
        $(this).keydown(function(event) {
            if (event.which === 71) {
                $("#gbutton").click();
            }
        });
    });
     
    
 });