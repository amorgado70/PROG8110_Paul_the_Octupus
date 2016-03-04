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
            $("#foodBox1").show();
            $("#foodBox2").show();
            $("#flagGermany").show();
            $("#flagArgentina").show();
            $("#flagSpain").show();
            $("#flagBrazil").show();
            $("#flagNetherlands").show();
            $("#flagEngland").show();
            $("#flagUruguay").show();
            $( initDragDrop );         
            $("#portraitMessage").hide();
            $("#paulEntrance").hide();
            $("#restart").show();
            $("#paulArea").show();
            $("#crossX").show();
            $("#cage").addClass("cageIn");
            $("#paulPlace").addClass("paulLocked");
            $("#pageHeader").removeClass("bounceInDown");
        }
        else {
            $("#foodBox1").hide();
            $("#foodBox2").hide();
            $("#flagGermany").hide();
            $("#flagArgentina").hide();
            $("#flagSpain").hide();
            $("#flagBrazil").hide();
            $("#flagNetherlands").hide();
            $("#flagEngland").hide();
            $("#flagUruguay").hide();
            $("#paulArea").hide();            
            $("#crossX").hide();
            $("#restart").hide();
            $("#portraitMessage").show();
            $("#paulEntrance").show();
        }
    }

// Drag and Drop
 
function initDragDrop() {
  $("#flagGermany").draggable();
  $("#flagArgentina").draggable();
  $("#flagSpain").draggable();
  $("#flagBrazil").draggable();
  $("#flagNetherlands").draggable();
  $("#flagEngland").draggable();
  $("#flagUruguay").draggable();    
  $("#foodBox1").droppable( {
    drop: handleDropEvent
  } );      
  $("#foodBox2").droppable( {
    drop: handleDropEvent
  } );
}

var countDrops = 0;
 
function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  /*var droppable = $(this).attr("id");
  alert( 'The square with ID "' + draggable.attr("id") + '" was dropped onto ' + droppable + ' me!');*/
  draggable.css({"top":$(this).css("top")});
  draggable.css({"left":$(this).css("left")});     
  draggable.draggable( 'disable' );
  $(this).text(draggable.attr("id").substring(4,20));
  $(this).droppable( 'disable' );
  countDrops++;
  if (countDrops == 2) {
    startGuessing();
  }
}
    
function startGuessing(){
    $("#cage").removeClass("cageIn");
    $("#cage").addClass("cageOut");
    $("#paulPlace").removeClass("paulLocked");
    $("#paulPlace").addClass("paulGuessing");
    
 }

function paulGuessing(){

}

