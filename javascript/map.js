

// let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";




const locations = [
  //  windermere
  { lat: 54.380204, lng: -2.934750 },
  // bassenthwaite
  { lat: 54.683802, lng: -3.2271 }
];


let markers = [];
let map;


// The below loads the map to the adventure page
function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 54.456116, lng: -3.069333 }
  });
}



function showListcat4() {
  clearMarkers();

  for (let i = 0; i < locations.length; i++) {
    addMarkerWithTimeout(locations[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(() => {
    markers.push(
      new google.maps.Marker({
        position: { lat: 54.456116, lng: -3.069333 },
        map: map,
        animation: google.maps.Animation.DROP
      })
    );
  }, timeout);
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

