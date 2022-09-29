/* script for my jquery demo */

$(document).ready(function(){
    
    var waypoint = new Waypoint({
        element: document.getElementById('fallers1'),
        handler: function() {
            $("#fallers1").css("position", "fixed");
            $("#fallers1").css("top", "50vh");
            $("#fallers1").css("left", "45vw");
            console.log("the fallers are in the viewport");
        },
        offset: "50%"
        
    });
    


    
//    var waypoint2 = new Waypoint({
//        element: document.getElementById('fallers2'),
//        handler: function() {
//            $("#fallers2").css("position", "fixed");
//            $("#fallers2").css("top", "50vh");
//            $("#fallers2").css("left", "45vw");
//            console.log("the fallers are in the viewport");
//        },
//        offset: "50%"
//    });
});


