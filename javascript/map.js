
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
  { lat: 54.5268, lng: -3.0172 },
  // bassenthwaite
  { lat: 54.683802, lng: -3.2271 },
  //scafell pike
  { lat: 54.4542, lng: -3.2116 }
];


let markers = [];
let map;
let infoWindow = new google.maps.InfoWindow();


// The below loads the map to the adventure page
function initMap() {
  map = new google.maps.Map(document.getElementById("map"),
    {
      zoom: 9,
      center: { lat: 54.456116, lng: -3.069333 },
      mapTypeId: "terrain"
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
      animation: google.maps.Animation.none,
      title: data.title
    });

    //click event on
    (function (markers, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        //open info wondow, place description inside an HTML DIV to restrict the size of InfoWindow.
        let infoWindow = new google.maps.InfoWindow();
        infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + "<strong>"+ data.title + "</strong>" + data.image + " " + data.description + "</div>");
        infoWindow.open(map, markers);
      });
    })(marker, data);
  }
}



function showListcat4() {
  clearMarkers();

  for (let i = 0; i < locationscat4.length; i++) {
    addMarkerWithTimeout(locationscat4[i], i * 200);
  }
}



// function addMarkerWithTimeout(position, timeout) {
//   window.setTimeout(() => {
//     markers.push(
//       new google.maps.Marker({
//         position: position,
//         map: map,
//         animation: google.maps.Animation.DROP
//       })
//     );
//   }, timeout);
// }


function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}




// <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
// <script type="text/javascript">
//     var markers = [
//     {
//         "title": 'Aksa Beach',
//         "lat": '19.1759668',
//         "lng": '72.79504659999998',
//         "description": 'Aksa Beach is a popular beach and a vacation spot in Aksa village at Malad, Mumbai.'
//     },
//     {
//         "title": 'Juhu Beach',
//         "lat": '19.0883595',
//         "lng": '72.82652380000002',
//         "description": 'Juhu Beach is one of favourite tourist attractions situated in Mumbai.'
//     },
//     {
//         "title": 'Girgaum Beach',
//         "lat": '18.9542149',
//         "lng": '72.81203529999993',
//         "description": 'Girgaum Beach commonly known as just Chaupati is one of the most famous public beaches in Mumbai.'
//     },
//     {
//         "title": 'Jijamata Udyan',
//         "lat": '18.979006',
//         "lng": '72.83388300000001',
//         "description": 'Jijamata Udyan is situated near Byculla station is famous as Mumbai (Bombay) Zoo.'
//     },
//     {
//         "title": 'Sanjay Gandhi National Park',
//         "lat": '19.2147067',
//         "lng": '72.91062020000004',
//         "description": 'Sanjay Gandhi National Park is a large protected area in the northern part of Mumbai city.'
//     }
//     ];
//     window.onload = function () {
//         LoadMap();
//     }
//     function LoadMap() {
//         var mapOptions = {
//             center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
//             zoom: 10,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);

//         //Create and open InfoWindow.
//         var infoWindow = new google.maps.InfoWindow();

//         for (var i = 0; i < markers.length; i++) {
//             var data = markers[i];
//             var myLatlng = new google.maps.LatLng(data.lat, data.lng);
//             var marker = new google.maps.Marker({
//                 position: myLatlng,
//                 map: map,
//                 title: data.title
//             });

//             //Attach click event to the marker.
//             (function (marker, data) {
//                 google.maps.event.addListener(marker, "click", function (e) {
//                     //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
//                     infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + "</div>");
//                     infoWindow.open(map, marker);
//                 });
//             })(marker, data);
//         }
//     }
// </script>
// <div id="dvMap" style="width: 300px; height: 400px">
// </div> 