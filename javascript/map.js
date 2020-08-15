// The below loads the map to the adventure page

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        
        center: {
            lat: 54.456116, lng: -3.069333
        },
        zoom: 9
    });

// The below creates the places service
var service = new google.maps.places.PlacesService(map);
var getNextPage = null;
var moreButton = document.getElementById('more');
moreButton.onclick = function() {
  moreButton.disabled = true;
  if (getNextPage) getNextPage();
};

// The below shows details of place (E>G helvellyn for test)

var request = {
    placeId: 'ChIJLT2SN37CfEgR_td6IkpnPB',
    fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
  };
  
  service = new google.maps.places.PlacesService(map);
  service.getDetails(request, callback);
  
  function callback(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMarker(place);
    }
}


    
    // the below places 2 default markers on the map when loaded

      
    // var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    // var locations = [
    //     // bassenthwaite
    //     { lat: 54.683802, lng: -3.2271 },
    //     //  windermere
    //     { lat: 54.380204, lng: -2.934750 }
    // ];
    // var markers = locations.map(function (location, i) {
    //     return new google.maps.Marker({
    //         position: location,
    //         label: labels[i % labels.length]
    //     });
    // });




    // the below pulls the default google marker icon 
  
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
  }




