let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    
  });
}

window.initMap = initMap;

map = new google.maps.Map({ draggable : false });

mapOptions: {
    disableDefaultUI : true,
    clickableIcons: false,
    gestureHandling: 'none',
    draggableCursor: 'arrow' //use the arrow default pointer ;)
    scrollwheel: false,
  }
