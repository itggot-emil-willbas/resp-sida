$(document).ready(function(){
    
    $('#hamburgermeny,#hamburgerkryss').click(function(e){
        console.log("You clicked" + e);
        $('.mobilnav').toggleClass('open');
    })
})