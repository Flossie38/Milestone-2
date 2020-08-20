
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
  { title: "Great Langdale Campsite", lat: 54.4430, lng: -3.0987, description: "A relaxed, natural site set in the heart of the Great Langdale Valley. With the towering Langdale Pikes looming above it, Great Langdale Campsite is a particularly dramatic spot to pitch up for...", image: "<a href='https://www.nationaltrust.org.uk/holidays/great-langdale-campsite-lake-district' target='_blank'><img src='images/GLCampsite.jpg'></a>" },
  // Hill of Oaks Caravan & Lodge Park
  { title: "Hill of Oaks Caravan & Lodge Park", lat: 54.300411, lng: -2.947160, description: "A great place to camp in HoO!" },
  //Low Wray Campsite
  { title: "Low Wray Campsite", lat: 54.400810, lng: -2.966060, description: "A great place to camp in Low Wray!" }
];


const locationscat4 = [
  //  Helvellyn
  { title: "Helvellyn", lat: 54.5268, lng: -3.0172, description: "Helvellyn is a mountain in the English Lake District, the highest point of the Helvellyn range, a north–south line of mountains...", image: "<a href='https://www.mudandroutes.com/routes/walking-routes-helvellyn/' target='_blank'><img src='images/Helvellyn.jpg'></a>" },
  // bassenthwaite
  { lat: 54.683802, lng: -3.2271 },
  //scafell pike
  { lat: 54.4542, lng: -3.2116 }
];




// let infoWindow = new google.maps.InfoWindow();


// The below loads the map to the adventure page
function initMap() {
  map = new google.maps.Map(document.getElementById("map"),
    {
      zoom: 9,
      center: { lat: 54.456116, lng: -3.069333 },
      mapTypeId: "terrain"
    });
}

let markers = [];
let map;

function showListcat1() {
  clearMarkers();

  for (let i = 0; i < locationscat1.length; i++) {
    var data = locationscat1[i];
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: data.title
    });
    // push these to the array above so you can clear on click of next button!!!
    markers.push(marker);

    //click event on
    (function (markers, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        //open info window, place description inside an HTML DIV to restrict the size of InfoWindow.
        let infoWindow = new google.maps.InfoWindow();
        infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + "<strong>" + data.title + "</strong>" + data.image + " " + data.description + "</div>");
        infoWindow.open(map, markers);
      });
    })(marker, data);
  }
}


function showListcat2() {
  clearMarkers();

  for (let i = 0; i < locationscat2.length; i++) {
    var data = locationscat2[i];
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: data.title

    });
    // push these to the array above so you can clear on click of next button!!!
    markers.push(marker);

    //click event on
    (function (markers, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        //open info window, place description inside an HTML DIV to restrict the size of InfoWindow.
        let infoWindow = new google.maps.InfoWindow();
        infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + "<strong>" + data.title + "</strong>" + data.image + " " + data.description + "</div>");
        infoWindow.open(map, markers);
      });
    })(marker, data);
  }
}


// function showListcat3() {
//   clearMarkers();

//   for (let i = 0; i < locationscat3.length; i++) {
//     addMarkerWithTimeout(locationscat3[i], i * 200);
//   }
// }

function showListcat3() {
  clearMarkers();

  for (let i = 0; i < locationscat3.length; i++) {
    var data = locationscat3[i];
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: data.title
    });
    // push these to the array above so you can clear on click of next button!!!
    markers.push(marker);

    //click event on
    (function (markers, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        //open info window, place description inside an HTML DIV to restrict the size of InfoWindow.
        let infoWindow = new google.maps.InfoWindow();
        infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + "<strong>" + data.title + "</strong>" + data.image + " " + data.description + "</div>");
        infoWindow.open(map, markers);
      });
    })(marker, data);
  }
}



function showListcat4() {
  clearMarkers();

  for (let i = 0; i < locationscat4.length; i++) {
    var data = locationscat4[i];
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: data.title
    });
    // push these to the array above so you can clear on click of next button!!!
    markers.push(marker);

    //click event on
    (function (markers, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        //open info window, place description inside an HTML DIV to restrict the size of InfoWindow.
        let infoWindow = new google.maps.InfoWindow();
        infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + "<strong>" + data.title + "</strong>" + data.image + " " + data.description + "</div>");
        infoWindow.open(map, markers);
      });
    })(marker, data);
  }
}


function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  };
  markers = [];
}

