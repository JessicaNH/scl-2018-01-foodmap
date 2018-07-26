// Initialize and add the map
function initMap() {
  // The location of Uluru
  var santiagoDeChile = {lat: -33.449495, lng: -70.670096};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center:santiagoDeChile });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: santiagoDeChile, map: map});
}