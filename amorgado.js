// Waits until phone device is ready
$(document).ready(function(){
    
    // Checks device orientation and changes display accordingly
    var checkOrientation = function() {
        if (window.orientation == 90) {
            $('#makeMeDroppable1').show();
            $('#makeMeDroppable2').show();
            $('#makeMeDraggable').show();
            $( initDragDrop );            
            $("#portraitMessage").hide();
            $("#paulLocked").show();
            $("p").css({"color": "black"})
            $("#paul").removeClass("paulEntrance");           
            /*$("#paul").addClass("paulGuessing");*/
        }
        else {
            $('#makeMeDroppable1').hide();
            $('#makeMeDroppable2').hide();
            $('#makeMeDraggable').hide();
            $("#portraitMessage").show();
            $("#paulLocked").hide();
            $("p").css({"color": "blue"});
            $("#paul").removeClass("paulGuessing");
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

// Drag and Drop
 
function initDragDrop() {
  $('#makeMeDraggable').draggable();
  $('#makeMeDroppable').droppable( {
    drop: handleDropEvent
  } );
}
 
function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
}

