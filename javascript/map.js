function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        
        center: {
            lat: 54.456116, lng: -3.069333
        },
        zoom: 8
    });
  
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    var locations = [
        // bassenthwaite
        { lat: 54.683802, lng: -3.2271 },
        //  windermere
        { lat: 54.380204, lng: -2.934750 }
    ];
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
  
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
  }

//   This 

//   var service = new google.maps.places.PlacesService(map);
//   var getNextPage = null;
//   var moreButton = document.getElementById('more');
//   moreButton.onclick = function() {
//     moreButton.disabled = true;
//     if (getNextPage) getNextPage();
//   };
  