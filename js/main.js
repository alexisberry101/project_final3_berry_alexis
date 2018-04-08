$(document).ready(function() {
    $.backstretch("img/apron.jpg");
    $( '#calendar' ).calendario();
    new Maplace({
    locations: data,
    controls_type: 'list',
    controls_on_map: false
}).Load();

});
var data = [{
        lat: 25.8,
        lon: -80.19,
        title: 'Nancy',
        html: '<h3>Nancy</h3>',
        zoom: 8,
        icon: 'http://www.google.com/mapfiles/markerA.png'
    }
];

//Custom Javascript: To change "location" heading color to orange
document.addEventListener ( 'DOMContentLoaded', function(){
    var heading = document.getElementById( 'location' );
    heading.style.color = "orange";
});

//Custom jQuery: To add a heading to the jQuery Map plugin
$(document).ready (function() {
$( 'form' ).after( '<h2>Map</h2>' );
});
