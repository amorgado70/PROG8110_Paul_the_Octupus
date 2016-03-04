// Waits until phone device is ready
$(document).ready(function(){            

    // Check orientation on page load    
    checkOrientation();
    
    // Listen for orientation changes
    window.addEventListener("orientationchange", function() {
        // Announce the new orientation number
        checkOrientation();
	    /* alert(window.orientation); */
    }, false);
    
});

// Checks device orientation and changes display accordingly
    var checkOrientation = function() {
        if (window.orientation == 90) {
/*            $('#foodBox1').show();
            $('#foodBox2').show();
            $('#flagGermany').show();
            $('#flagArgentina').show();
            $('#flagSpain').show();
            $('#flagBrazil').show();
            $('#flagNetherlands').show();
            $('#flagEngland').show();
            $('#flagUruguay').show();
            $( initDragDrop ); */          
            $("#portraitMessage").hide();
            $("#paulEntrance").hide();
            $("#paulLocked").show();
            $("#pageHeader").removeClass("bounceInDown");
        }
        else {
 /*           $('#foodBox1').hide();
            $('#foodBox2').hide();
            $('#flagGermany').hide();
            $('#flagArgentina').hide();
            $('#flagSpain').hide();
            $('#flagBrazil').hide();
            $('#flagNetherlands').hide();
            $('#flagEngland').hide();
            $('#flagUruguay').hide(); */
            $("#paulLocked").hide();
            $("#portraitMessage").show();
            $("#paulEntrance").show();
        }
    }

// Drag and Drop
 
function initDragDrop() {
    /*
  $('#flagGermany').draggable();
  $('#flagArgentina').draggable();
  $('#flagSpain').draggable();
  $('#flagBrazil').draggable();
  $('#flagNetherlands').draggable();
  $('#flagEngland').draggable();
  $('#flagUruguay').draggable();    
  $('#foodBox1').droppable( {
    drop: handleDropEvent
  } );      
  $('#foodBox2').droppable( {
    drop: handleDropEvent
  } );
  */
}
 
function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
}

