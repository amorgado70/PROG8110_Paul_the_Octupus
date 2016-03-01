// Listen for orientation changes
window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    alert(window.orientation);
}, false);

$(document).ready(function(){        
    $("button").click(function(){
        $("h1, h2, p, portraitEntranceMessage").toggleClass("blue");
    });
    // Announce the new orientation number
    alert(window.orientation);    
});

