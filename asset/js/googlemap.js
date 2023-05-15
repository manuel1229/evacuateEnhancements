// let map;
// function initMap(){

//     var options = {
//         center: {lat: 14.6091 , lng:121.0223 },
//         zoom: 11 
//     }

//     let currentMarker = null;
//         map = new google.maps.Map(document.getElementById("map"), options)

//         google.maps.event.addListener(map, "click", (event) => {
//             // Remove the current marker if it exists
//             if (currentMarker) {
//               currentMarker.setMap(null);
//             }
          
//             // Create a new marker object and set its position to the clicked location
//             const marker = new google.maps.Marker({
//               position: event.latLng,
//               map: map,
//             });

//             const lat = event.latLng.lat();
//             const lng = event.latLng.lng();

//             console.log(`Latitude: ${lat}, Longitude: ${lng}`);
          
//             // Set the current marker to the new marker object
//             currentMarker = marker;
//           });      
    
// }






