/* Get all elements with class="close" */
var closebtns = document.getElementsByClassName("close");
var closebtns = document.getElementsByClassName("header-span");
var i;

/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.style.display = 'none';
})};

// Google Maps
  function initMap() {
    var location = {lat: 47.498700, lng: 8.727290};
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
      mapTypeId: 'roadmap',
      // HIER BEGINNEN CUSTOM STYLES
      styles: [
        
        {elementType: 'geometry', stylers: [{color: '#18181A'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: "poi",
          elementType: "business",
          stylers: [
            { visibility: "off" }
          ]
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d595f63'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#DAA520'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#F7F7F7'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        }, 
        
        // STRASSENNAMEFARBE
        {elementType: "labels.text.fill", stylers: [{color: '#18181A'}]},
        {elementType: "labels.text.stroke", stylers: [{color: '#d1a740'}]},

        {featureType: "transit.line", stylers: [{color: '#fffeff'}]},

        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
    var marker = new google.maps.Marker({position: location, map: map});
  }
  
  
  