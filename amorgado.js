// Waits until phone device is ready
$(document).ready(function(){
    
    // Checks device orientation and changes display accordingly
    var checkOrientation = function() {
        if (window.orientation == 90) {
            $("#portraitMessage").hide();
            $("p").css({"color": "black"})
            $("#paul").removeClass("paulEntrance");           
            $("#paul").addClass("paulWaiting");
        }
        else {
            $("#portraitMessage").show();
            $("p").css({"color": "blue"});
            $("#paul").removeClass("paulWaiting");
            $("#paul").addClass("paulEntrance");
        }
    }        
    
    // Listen for orientation changes
    window.addEventListener("orientationchange", function() {
        // Announce the new orientation number
        checkOrientation();
    }, false);    

    // Check orientation on page load    
    checkOrientation();
    
});

