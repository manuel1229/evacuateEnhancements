// var firebaseConfig = {
//     apiKey: "AIzaSyAexoKQd7Mi6Of7cLSLAH7vq7Ymq2ILZPQ",
//     authDomain: "evacuateisad.firebaseapp.com",
//     databaseURL: "https://evacuateisad-default-rtdb.firebaseio.com",
//     projectId: "evacuateisad",
//     storageBucket: "evacuateisad.appspot.com",
//     messagingSenderId: "880708938906",
//     appId: "1:880708938906:web:be4eaf69a49e0b5d99c323",
//     measurementId: "G-EKMCWF5M2Z"
// };

// firebase.initializeApp(firebaseConfig);
// let database = firebase.database();
// let tbody = document.getElementById('tbody');
// let nameV = document.getElementById('nameC');
// let cityV = document.getElementById('cityC');
// let addressV = document.getElementById('addressC');
// let editname = document.getElementById('editname');
// let editcity = document.getElementById('editcity');
// let editaddress = document.getElementById('editaddress');
// let idV = document.getElementById('id');
        

// // database.ref('announcement').on('value', readdata)
// // function readdata(snapshoot){
// //     console.log(snapshoot.val());
// function clrData(){
//     cityV.value=''
//     nameV.value=''
//     addressV.value=''
    
// }
// function createData(){
    
//     let data = {
//         city: cityV.value,
//         name: nameV.value,
//         address: addressV.value
//     };
//     database.ref('evacsite').push(data);
//     $('#exampleModal1').modal('hide');
//     cityV.value=''
//     nameV.value=''
//     addressV.value=''
// }


//     database.ref('evacsite').on('value', viewdata);
//         function viewdata(snapshot){
//             let table='';
//             let no = 1;
//             snapshot.forEach((data)=> {
//                 table += `
//                 <tr>
//                     <th scope="row">${no}</th>
//                     <td>${data.val().city}</td>
//                     <td>${data.val().name}</td>
//                     <td>${data.val().address}</td>  
//                     <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" 
//                     onclick="editRow('${
//                         data.key
//                     }')">
//                     Update
//                     </button>

//                     <button type="button" class="btn btn-danger" onclick="deleteRow('${data.key}')">Delete
//                     </button>
//                     </td>
                    
//                 </tr>
//             `;     
//             no++;         
//             });
//         tbody.innerHTML = table;
      
// }

// function editRow(id){
   
//     database.ref('evacsite/' + id).on('value', function(snapshot){
//         editcity.value = snapshot.val().city;
//         editname.value = snapshot.val().name;
//         editaddress.value = snapshot.val().address;
//         idV.value = id;
//     });
// }

// function updateData() {
//     let updateData = document.getElementById('updateData')
//     let data = {
//         city: editcity.value,
//         name: editname.value,
//         address: editaddress.value
//     };
//     database.ref('evacsite/'+ idV.value).update(data);
//     $('#exampleModal').modal('hide');
//     // updateData.setAttribute('data-bs-dismiss', 'modal');
    

// }

// function deleteRow(id){
//     database.ref('evacsite/'+ id).remove();
// }

$(document).ready(function() {




  loadData();
  
  
  firebase.initializeApp(firebaseConfig);
  let database = firebase.database();
  
  var db = firebase.database();
  

  var dataSet = [];
  

  var a = 1;
  
 
  
  
  });
  
  
  
  var firebaseConfig = {
      apiKey: "AIzaSyAexoKQd7Mi6Of7cLSLAH7vq7Ymq2ILZPQ",
      authDomain: "evacuateisad.firebaseapp.com",
      databaseURL: "https://evacuateisad-default-rtdb.firebaseio.com",
      projectId: "evacuateisad",
      storageBucket: "evacuateisad.appspot.com",
      messagingSenderId: "880708938906",
      appId: "1:880708938906:web:be4eaf69a49e0b5d99c323",
      measurementId: "G-EKMCWF5M2Z"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();
  
  
   var historycollection = firebase.database().ref("evacsite");
  
  // var historycollection = db.ref().child("evacsite");
  
  var dataSet1 = [];
  
  const editicon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
  const deleteicon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg>';
  
  var filleliminate;
  var filledit;
  
  
  var table = $('#myTable').DataTable({
      pageLength : 5,
      lengthMenu : [[5, 10, 20, -1], [5, 10, 20, 'All']],
      searching: true,
      data: dataSet1,
      columnDefs: [
              {
                  targets: [1],
                  visible: false,
              },
              {
                  targets: [5],
                  visible: false,
              },
              {
                  targets: [6],
                  visible: false,
              },
              {
                  targets: -1,
                  defaultContent: "<div class='wrapper text-center'><div class='btn-group'><button class='btnEdit btn btn-primary' data-toggle='tooltip' title='Editor'>"+editicon+"</button><button class='btnDelete btn btn-danger' data-toggle='tooltip' title='Borrar'>"+deleteicon+"</button></div></div>"
              }
      ]
  });
  b = 1;
var x5 = 0;
  
  function loadData() {
      

  
    
  
  
      historycollection.on('child_added', (datos) => {
          dataSet = [b, datos.key, datos.child("city").val(), datos.child("name").val(), datos.child("address").val(), datos.child("lat").val(), datos.child("lng").val()]
          b++;
          table.rows.add([dataSet]).draw();
         
         
  })
 x5 = b;
  console.log("dale"+x5);
 
  
addtomobile();
  
  }

  function addtomobile(){
  

 





  // const objectName = "myVariableObjectName"; // Your variable object name here

// Save data to the object with the variable name
// const data = {

// };
// const objectData = {};
// objectData[objectName] = data;
// database.ref(`dates`).set(objectData)
//   .then(() => {
//     console.log("Data saved successfully!");
//   })
//   .catch((error) => {
//     console.error("Error saving data:", error);
//   });


  }
  
  
  
  function successEditAlert() {
      Swal.fire("Success", "The record has been updated successfully", "success");
  }
  
  function successAddAlert() {
      Swal.fire("Success", "The record has been added successfully", "success");
  }
  
  
  var label4modal = document.getElementById("modalLabel");
  
   $("#addButton").on("click", function(){
      // document.getElementById('modalLabel').innerText = 'Your tip has been submitted!';
      // $("#modalLabel").text("your tip has been submitted!");
  
      addcity.value = "Manila"
      addname.value = ''
      addaddress.value = ''
      addlat.value = ''
      addlong.value = ''
      aid.value = ''
  
  });
  
  
  $("#myTable").on("click", ".btnDelete", function() {
      filleliminate = $(this);
      Swal.fire({
          title: 'Are you sure you want to delete this record?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor:'#d33',
          cancelButtonColor: '#3085db',
          confirmButtonText: 'Confirm',
          reverseButtons: true 
  
      }).then((result)=>{
          if (result.value){
  
          const table1 = $("#myTable").DataTable();
          let fill = $('#myTable').dataTable().fnGetData($(this).closest('tr'));
          let id = fill[1];
          database.ref(`evacsite/${id}`).remove()
          Swal.fire('Success', 'record deleted successfully ', 'success')
  
          table1.clear().draw();
          loadData();
          }
      })
      });
  
      $("#editData").submit(function(e){
      e.preventDefault();
      let pushid = $.trim($('#eid').val());
      let pushcity = $.trim($('#editcity').val());
      let pushname = $.trim($('#editname').val());
      let pushaddress = $.trim($('#editaddress').val());

      var pushlat = $.trim($('#editlat').val());
      var pushlong =  $.trim($('#editlong').val());

     
  
      let idFirebase = pushid;
      // // if (idFirebase == ''){
      //     idFirebase = historycollection.push().key;
      // };
  
      data = {city:pushcity, name:pushname, address:pushaddress, lat:parseFloat(pushlat), lng:parseFloat(pushlong)};
      actualData = {};
      actualData[`/${idFirebase}`] = data;
      historycollection.update(actualData);
      id = '';
      $("form").trigger("reset");
      $('#exampleModal').modal('hide');
  
      const table1 = $("#myTable").DataTable();
  
      successEditAlert();
  
      table1.clear().draw(); 
  
      loadData();
  
  
      });
  
  
      $("#submitData").submit(function(e){
          e.preventDefault();
          let pushid = $.trim($('#aid').val());
          let pushcity = $.trim($('#addcity').val());
          let pushname = $.trim($('#addname').val());
          let pushaddress = $.trim($('#addaddress').val());
          let pushlat = $.trim($('#addlat').val());
          let pushlong = $.trim($('#addlong').val());
      
      
          let idFirebase = pushid;
          
              idFirebase = historycollection.push().key;
        
      
          data = {city:pushcity, name:pushname, address:pushaddress, lat:parseFloat(pushlat), lng:parseFloat(pushlong) };
          actualData = {};
          actualData[`/${idFirebase}`] = data;
          historycollection.update(actualData);
          id = '';
          $("form").trigger("reset");
          $('#exampleModal1').modal('hide');

          console.log(idFirebase);
      
          const table1 = $("#myTable").DataTable();
      
          successAddAlert();
      
          table1.clear().draw(); 
      
          loadData();


          var efirebaseRef = firebase.database().ref("evacsite");
          efirebaseRef.once("value", function(snapshot){
          var data = snapshot.val();
          for(let i in data){
             
              x5++;
          }
       
        })
        console.log(x5);

        var customKey = x5;
  
     
        //  let data = {
        //      [customKey]: 12 
        // };
        //  database.ref(`date/lusi`).push(data);
    
    
    
       const dbRef = firebase.database().ref('users/12/Saved Locations');

// Use update() method to add data without overwriting existing data
dbRef.update({
  [customKey]: idFirebase
});
      
          });
  
  
  
      $("#myTable").on("click", ".btnEdit", function(){
          filledit = table.row($(this).parents('tr'));
          let fill = $('#myTable').dataTable().fnGetData($(this).closest('tr'));
          let id = fill[1];
          let evacsitelat = fill[5];
          let evacsitelong = fill[6];
          let evacsitecity = $(this).closest('tr').find('td:eq(1)').text();
          let evacsitename = $(this).closest('tr').find('td:eq(2)').text();
          let evacsiteaddress = $(this).closest('tr').find('td:eq(3)').text();
         
          
          
          
          $('#eid').val(id);
          editcity.value = evacsitecity;
          $('#editname').val(evacsitename);
          editaddress.value = evacsiteaddress;
          $('#editlat').val(evacsitelat);
          $('#editlong').val(evacsitelong);
          $('#exampleModal').modal('show');
          
          
          
          
          
          });


          var map;
          var map1;
      var searchBox;
      var searchBox1;


function initMap() {
 
      var options = {
          center: {lat: 14.6091 , lng:121.0223 },
                  zoom: 11
                 
          }

          let currentMarker = null;

          map = new google.maps.Map(document.getElementById("map"), options)
          map1 = new google.maps.Map(document.getElementById("map1"), options)

searchBox = new google.maps.places.SearchBox(document.getElementById('search-input1'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('search-input1'));

  searchBox1 = new google.maps.places.SearchBox(document.getElementById('search-input2'));
  map1.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('search-input2'));

  map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
  });

  google.maps.event.addListener(map1, "click", (event) => {
                  // Remove the current marker if it exists
                  if (currentMarker) {
                    currentMarker.setMap(null);
                  }
                
                  // Create a new marker object and set its position to the clicked location
                  const marker = new google.maps.Marker({
                    position: event.latLng,
                    map: map1,
                  });
      
                  const lat = event.latLng.lat();
                  const lng = event.latLng.lng();
      
                  console.log(`Latitude: ${lat}, Longitude: ${lng}`);


                  $('#editlat').val(lat);
                  $('#editlong').val(lng);
                
                  // Set the current marker to the new marker object
                  currentMarker = marker;

               
                  var geocoder = new google.maps.Geocoder();
                  var latlng = {lat: lat, lng: lng};
                  geocoder.geocode({'location': latlng}, function(results, status) {
                    if (status === 'OK') {
                      if (results[0]) {
                        
                          $('#editaddress').val(results[0].formatted_address);
                        console.log("pogi");
                      //   addaddress.value = results[0].
                      
                      for (var i = 0; i < results[0].address_components.length; i++) {
                          var component = results[0].address_components[i];
                          if (component.types.indexOf('locality') !== -1) {
                            // Get the city name
                            var city = component.long_name;

                            $('#editcity').val(city);
                            console.log('City: ' + city);
                            break;
                          }
                        }
                     

                       
                      } else {
                        console.log('No results found');
                      }
                    } else {
                      console.log('Geocoder failed due to: ' + status);
                    }
                  });

                 
                
                });     



                google.maps.event.addListener(map, "click", (event) => {
                  // Remove the current marker if it exists
                  if (currentMarker) {
                    currentMarker.setMap(null);
                  }
                
                  // Create a new marker object and set its position to the clicked location
                  const marker = new google.maps.Marker({
                    position: event.latLng,
                    map: map,
                  });
      
                  const lat = event.latLng.lat();
                  const lng = event.latLng.lng();
      
                  console.log(`Latitude: ${lat}, Longitude: ${lng}`);

                  $('#addlat').val(lat);
                  $('#addlong').val(lng);

                  $('#editlat').val(lat);
                  $('#editlong').val(lng);
                
                  // Set the current marker to the new marker object
                  currentMarker = marker;

               
                  var geocoder = new google.maps.Geocoder();
                  var latlng = {lat: lat, lng: lng};
                  geocoder.geocode({'location': latlng}, function(results, status) {
                    if (status === 'OK') {
                      if (results[0]) {
                        
                          $('#addaddress').val(results[0].formatted_address);
                        console.log("pogi");
                      //   addaddress.value = results[0].
                      
                      for (var i = 0; i < results[0].address_components.length; i++) {
                          var component = results[0].address_components[i];
                          if (component.types.indexOf('locality') !== -1) {
                            // Get the city name
                            var city = component.long_name;

                            $('#addcity').val(city);
                            console.log('City: ' + city);
                            break;
                          }
                        }
                     

                       
                      } else {
                        console.log('No results found');
                      }
                    } else {
                      console.log('Geocoder failed due to: ' + status);
                    }
                  });

                 
                
                });     



                
                



  searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
          return;
      }

      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
          if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
          }
          var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          var marker = new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
          });

          if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
          } else {
              bounds.extend(place.geometry.location);
          }
      });
      map.fitBounds(bounds);
  });



  searchBox1.addListener('places_changed', function() {
      var places = searchBox1.getPlaces();

      if (places.length == 0) {
          return;
      }

      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
          if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
          }
          var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          var marker = new google.maps.Marker({
              map: map1,
              icon: icon,
              title: place.name,
              position: place.geometry.location
          });

          if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
          } else {
              bounds.extend(place.geometry.location);
          }
      });
      map1.fitBounds(bounds);
  });
}





