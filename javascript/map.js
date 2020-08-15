
const locationscat1 = [
  //  Armathwaite Hall Hotel & Spa
  { lat: 54.6816834, lng: -3.2364325 }
 
];

const locationscat2 = [
  //  The Drunken Duck Inn & Restaurant
  { lat: 54.4065763, lng: -3.0086745 }
 
];


const locationscat3 = [
  //  Great Langdale Campsite
  { lat: 54.4430, lng: -3.0987 },
  // Hill of Oaks Caravan & Lodge Park
  { lat: 54.300411, lng: -2.947160 },
  //Low Wray Campsite
  {lat: 54.400810, lng: -2.966060 }
];


const locationscat4 = [
  //  Helvellyn
  { lat: 54.5268, lng: -3.0172 },
  // bassenthwaite
  { lat: 54.683802, lng: -3.2271 },
  //scafell pike
  {lat: 54.4542, lng: -3.2116 }
];


let markers = [];
let map;
// let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// The below loads the map to the adventure page
function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 54.456116, lng: -3.069333 }
  });
}


function showListcat1() {
  clearMarkers();

  for (let i = 0; i < locationscat1.length; i++) {
    addMarkerWithTimeout(locationscat1[i], i * 200);
  }
}


function showListcat2() {
  clearMarkers();

  for (let i = 0; i < locationscat2.length; i++) {
    addMarkerWithTimeout(locationscat2[i], i * 200);
  }
}

function showListcat3() {
  clearMarkers();

  for (let i = 0; i < locationscat3.length; i++) {
    addMarkerWithTimeout(locationscat3[i], i * 200);
  }
}

function showListcat4() {
  clearMarkers();

  for (let i = 0; i < locationscat4.length; i++) {
    addMarkerWithTimeout(locationscat4[i], i * 200);
  }
}



function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(() => {
    markers.push(
      new google.maps.Marker({
        position: position,
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

