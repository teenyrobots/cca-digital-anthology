var glower = $('#mainContainer');

window.setInterval(function() {  
    glower.toggleClass('active');
}, 7000);

setTimeout(function(){
    document.getElementById('breathe').style.display = "block";
}, 7000);