
const locationscat1 = [
  { title: "Armathwaite Hall Hotel & Spa - CA12 4RE", lat: 54.6816834, lng: -3.2364325,description: "Set in a revamped, 11th-century estate bordering Bassenthwaite Lake, this upscale resort is 8 miles from Cockermouth...", image: "<a href='https://www.armathwaite-hall.com/' target='_blank'><img src='images/ARMATHWAITE_hall.jpg'></a>"  },
  { title: "Lakes Lodge - LA23 1AF", lat: 54.3803, lng: -2.9058,description: "Off the A591 at the heart of the Lake District, this quaint, family-run B&B set in a converted 1860s bank is a minute's walk from Windermere...", image: "<a href='http://www.lakes-lodge.co.uk/' target='_blank'><img src='images/Lakeslodge.jpg'></a>"  },
  { title: "Windermere Manor Hotel - LA23 1JF", lat: 54.3836, lng: -2.9177,description: "Set in an 1850s stone manor house, this cozy hotel is a mile from Lake Windermere. It's 7.2 miles from Wray Castle and 9 miles from the Beatrix Potter Museum...", image: "<a href='https://www.windermeremanorhotel.com/' target='_blank'><img src='images/windermere-manor.jpg'></a>"  },
  { title: "Gilpin Hotel & Lake House - LA23 3NE", lat: 54.3548, lng: -2.9090, description: "Set among landscaped gardens in a 1901 Georgian-style country house with an annexe, this upscale hotel is 2.6 miles from...", image: "<a href='https://thegilpin.co.uk/' target='_blank'><img src='images/Gilpin.jpg'></a>"  },
  { title: "The White Lion Hotel - LA22 9DB", lat: 54.4314, lng: -2.9622,description: "Amid shops and eateries along the A591 road, this relaxed pub with rooms is a 14-minute walk from the ruins of the Ambleside Roman Fort and 4 miles from the 19th-century Wray Castle...", image: "<a href='https://www.innkeeperslodge.com/hotels/the-white-lion-hotel-ambleside-cumbria' target='_blank'><img src='images/White lion.jpg'></a>"  },
  { title: "North Lakes Hotel & Spa - CA11 8QT", lat: 54.6546, lng: -2.7584,description: "Adjacent to Wetheriggs Country Park, this casual hotel at the edge of the Lake District is a 10-minute walk from Penrith Castle and...", image: "<a href=https://www.northlakeshotel.co.uk/' target='_blank'><img src='images/North lakes.jpg'></a>"  },
  { title: "Derwentwater Independent Hostel - CA12 5UR", lat: 54.5718, lng: -3.1323, description: "Lakeside 18th-century property offering bunk beds in shared rooms, a communal lounge, and dining...", image: "<a href='http://www.derwentwater.org/' target='_blank'><img src='images/Derwentwater.jpg'></a>"  },
  { title: "Muncaster Castle - CA18 1RQ", lat: 54.3528, lng: -3.3813,description: "Set in the scenic grounds of Muncaster Castle, this cosy B&B is 1.4 miles from Ravenglass and Eskdale Railway station...", image: "<a href='https://www.muncaster.co.uk/' target='_blank'><img src='images/Muncaster.jpg'></a>"  }

];

const locationscat2 = [
  { title: "The Drunken Duck Inn & Restaurant - LA22 0NG", lat: 54.4065763, lng: -3.0086745,description: "Set among the rolling countryside of Lake District National Park, this upscale inn is 3 miles from the A591 road, and 4 miles from the Langdale Hotel and Spa...", image: "<a href='https://drunkenduckinn.co.uk/' target='_blank'><img src='images/drunken-duck.jpg'></a>"},
  { title: "Royal Oak - LA22 9BU", lat: 54.4318, lng: -2.9623, description: "Pooches are welcome at this relaxed spot serving pub fare & Hungarian-style goulash in comfy digs!", image: "<a href='https://www.greeneking-pubs.co.uk/pubs/cumbria/royal-oak/' target='_blank'><img src='images/farmers arms.jpg'></a>"},
  { title: "Dog & Gun - CA12 5BT", lat: 54.6000, lng: -3.1370,description: "Traditional venue with timber beams, offering cask ales and events from quizzes to live sports...", image: "<a href='https://www.greeneking-pubs.co.uk/pubs/cumbria/dog-gun/' target='_blank'><img src='images/DogandGun.jpg'></a>"},
  { title: "Hole in t' Wall - LA23 3DH", lat: 54.3648, lng: -2.9213, description: "The New Hall Inn, also known as the Hole in t'Wall, is the oldest public house in Bowness on Windermere, and is a Grade II listed building...", image: "<a href='https://www.holeintwall.co.uk/' target='_blank'><img src='images/Holeinwall.jpg'></a>"},
  { title: "The Ship Inn - LA23 3HE", lat: 54.4247, lng: -2.9278,description: "Nautically themed pub/restaurant with a comfort food menu, overlooking a marina at the lake's edge...", image: "<a href='https://www.shipinnbowness.com/' target='_blank'><img src='images/Ship.jpg'></a>"},
  { title: "Queens Head Troutbeck - LA23 1PW", lat: 54.3656, lng: -2.9045,description: "Robust food and local ales pulled at a bar made from a 4-poster bed in a 17th-century coaching inn....", image: "<a href='http://www.queensheadtroutbeck.pub/' target='_blank'><img src='images/QueensHead'></a>"},
  { title: "The Flying Pig Pub - LA23 3BZ", lat: 54.4065763, lng: -2.9198,description: "Cozy pub space offering hearty dishes like fish & chips plus local ales...", image: "<a href='http://www.theflyingpigbowness.co.uk/' target='_blank'><img src='images/Pig.jpg'></a>"},
  { title: "Horse & Farrier - CA12 4SQ", lat: 54.6195, lng: -3.0515,description: "At the foot of Blencathra hill in the Lake District National Park, this casual village pub with rooms dates from 1688. It's 2.9 miles from Castlerigg ancient...", image: "<a href='http://www.horseandfarrier.com/' target='_blank'><img src='images/HorseFarrier.jpg'></a>"}
];


const locationscat3 = [

  { title: "Great Langdale Campsite - LA22 9JU", lat: 54.4430, lng: -3.0987, description: "A relaxed, natural site set in the heart of the Great Langdale Valley. With the towering Langdale Pikes looming above it, Great Langdale Campsite is a particularly dramatic spot to pitch up for...", image: "<a href='https://www.nationaltrust.org.uk/holidays/great-langdale-campsite-lake-district' target='_blank'><img src='images/GLCampsite.jpg'></a>" },
  { title: "Hill of Oaks Caravan & Lodge Park - LA12 8NR", lat: 54.300411, lng: -2.947160, description: "Hill of Oaks is a dog friendly park on the shores of Lake Windermere welcoming touring caravans, motor homes and...", image: "<a href='https://www.hillofoaks.co.uk/' target='_blank'><img src='images/HOO.jpg'></a>" },
  { title: "Castlerigg Hall Caravan - Camping - Glamping Park - CA12 4TE", lat: 54.5889, lng: -3.1066, description: "Campground and RV park in a countryside setting with scenic views & small timber huts for rent...", image: "<a href='http://www.castlerigg.co.uk/' target='_blank'><img src='images/Castleriggglamping.jpg'></a>" },
  { title: "Keswick Camping and Caravanning Club - CA12 5EP", lat: 54.6008, lng: -3.1505, description: "If you’re planning to explore the northern Lakes, our Keswick camping site on the shores of Derwentwater is hard to beat as a base for your explorations..", image: "<a href='https://www.campingandcaravanningclub.co.uk/campsites/uk/cumbria/keswick/keswick' target='_blank'><img src='images/KeswickCCC.jpg'></a>"},
  { title: "Park Foot Holiday Park - CA10 2NA", lat: 54.5904, lng: -2.8230, description: "We are a family friendly holiday park. We welcome bookings from families and couples looking to enjoy the wonders of the Lake District...", image: "<a href='https://parkfootullswater.co.uk/' target='_blank'><img src='images/Parkfoot.jpg'></a>"},
  { title: "Eskdale Campsite - CA19 1TH", lat: 54.4245, lng: -3.2085, description: "A tranquil base for walkers and outdoor lovers in the heart of the Lakes, perfect for exploring the region’s stunning crags, woods and waterfalls..", image: "<a href='https://www.nationaltrust.org.uk/holidays/eskdale-campsite-lake-district/' target='_blank'><img src='images/Eskdalecamping.jpg'></a>"},
  { title: "Harbour Lights Campsite - LA18 4NG", lat: 54.2006, lng: -3.2855, description: "onveniently located for exploring the Lake District National Park yet only 50 yards from dog-friendly beach at Haverigg, our site offers a good mix of camping facilitates for...", image: "<a href='http://www.harbourlightscampsite.co.uk/' target='_blank'><img src='images/harbourlights.jpg'></a>"},
  { title: "Low Wray Campsite", lat: 54.400810, lng: -2.966060, description: "Nestled on the western shoreline of Lake Windermere...", image: "<a href='https://www.nationaltrust.org.uk/holidays/low-wray-campsite-lake-district' target='_blank'><img src='images/low-wray-safari-tent.jpg'></a>"}
];


const locationscat4 = [
  //  Helvellyn
  { title: "Helvellyn - CA12, UK", lat: 54.5268, lng: -3.0172, description: "Helvellyn is a mountain in the English Lake District, the highest point of the Helvellyn range, a north–south line of mountains...", image: "<a href='https://www.mudandroutes.com/routes/walking-routes-helvellyn/' target='_blank'><img src='images/Helvellyn.jpg'></a>" },
  // bassenthwaite
  { lat: 54.683802, lng: -3.2271 },
  //scafell pike
  { lat: 54.4542, lng: -3.2116 }
];




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

