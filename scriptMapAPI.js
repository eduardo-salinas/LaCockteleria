function iniciarMap() {
  var coord = { lat: -35.5956145, lng: -58.4431949 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}
