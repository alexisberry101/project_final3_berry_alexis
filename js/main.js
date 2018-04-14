$(document).ready(function() {
    $.backstretch("img/apron.jpg");
    $( '#calendar' ).calendario();
    $('#map').usmap({
    // The click action
    click: function(event, data) {
      $('#clicked-state')
        .text('You clicked: '+data.name)
        .parent().effect('highlight', {color: '#C7F464'}, 2000);
    }
  });
});

//Custom Javascript: To change "location" heading color to orange
document.addEventListener ( 'DOMContentLoaded', function(){
    var heading = document.getElementById( 'location' );
    heading.style.color = "orange";
});

//Custom jQuery: To add a heading to the jQuery Map plugin
$(document).ready (function() {
$( '#social' ).after( '<h2>Map</h2>' );
});
