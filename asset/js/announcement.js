$(document).ready(function() {
    loadData();
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
const messaging = firebase.messaging();
let database = firebase.database();
let tbody = document.getElementById('tbody');
let titleV = document.getElementById('title');
let descriptionV = document.getElementById('description');
let edittitle = document.getElementById('edittitle');
let editdescription = document.getElementById('editdescription');
let idV = document.getElementById('id');
        




 var announcementcollection = firebase.database().ref("announcement");



// database.ref('announcement').on('value', readdata)
// function readdata(snapshoot){
//     console.log(snapshoot.val());



var dataSet1 = [];
  
const editicon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
const deleteicon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg>';
const notificon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/></svg>';

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
                targets: -1,
                defaultContent: "<div class='wrapper text-center'><div class='btn-group'><button class='btnEdit btn btn-primary' data-toggle='tooltip' title='Editor'>"+editicon+"</button><button class='btnDelete btn btn-danger' data-toggle='tooltip' title='Borrar'>"+deleteicon+"</button><button class='btnNotif btn btn-secondary' data-toggle='tooltip' title='Borrar'>"+notificon+"</button></div></div>"
            }
    ]
});

function loadData() {
    
    b = 1;

    x5 = 0;


    announcementcollection.on('child_added', (datos) => {
        dataSet = [b, datos.key, datos.child("title").val(), datos.child("description").val()]
        b++;
        table.rows.add([dataSet]).draw();
       
            
        
});

}

// function editRow(id){
   
//     database.ref('announcement/' + id).on('value', function(snapshot){
//         edittitle.value = snapshot.val().title;
//         editdescription.value = snapshot.val().description;
//         idV.value = id;
//     });
// }

// function updateData() {
//     let updateData = document.getElementById('updateData')
//     let data = {
//         title: edittitle.value,
//         description: editdescription.value
//     };
//     database.ref('announcement/'+ idV.value).update(data);
//     updateData.setAttribute('data-bs-dismiss', 'modal');
    

// }
$("#myTable").on("click", ".btnEdit", function(){
    filledit = table.row($(this).parents('tr'));
    let fill = $('#myTable').dataTable().fnGetData($(this).closest('tr'));
    let id = fill[1];
    let announcementcity = $(this).closest('tr').find('td:eq(1)').text();
    let announcementdescription = $(this).closest('tr').find('td:eq(2)').text();
    
    
    $('#id').val(id);
   
    $('#edittitle').val(announcementcity);
    $('#editdescription').val(announcementdescription);
    $('#exampleModal').modal('show');
    
    
});

$("#myTable").on("click", ".btnNotif", function(){
    filledit = table.row($(this).parents('tr'));
    let fill = $('#myTable').dataTable().fnGetData($(this).closest('tr'));
    let id = fill[1];
    let announcementcity = $(this).closest('tr').find('td:eq(1)').text();
    let announcementdescription = $(this).closest('tr').find('td:eq(2)').text();
    
    
    $('#id').val(id);
   
    $('#notiftitle').val(announcementcity);
    $('#notifdescription').val(announcementdescription);
    $('#exampleModal2').modal('show');
  
    
    
});

var notifbody;
$("#notifyData").submit(function(e){
    e.preventDefault();
    let pushid = $.trim($('#id').val());
    let pushcity = $.trim($('#edittitle').val());
    let pushdescription = $.trim($('#editdescription').val());
    notifbody = ($.trim($('#notiftitle').val())) + ($.trim($('#notifdescription').val()))
    

    let idFirebase = pushid;
    // // if (idFirebase == ''){
    //     idFirebase = historycollection.push().key;
    // };

    
    id = '';
    $("form").trigger("reset");
    $('#exampleModal2').modal('hide');

    const table1 = $("#myTable").DataTable();

    successNotifAlert();
    sendNotification();



    });


$("#editData").submit(function(e){
    e.preventDefault();
    let pushid = $.trim($('#id').val());
    let pushcity = $.trim($('#edittitle').val());
    let pushdescription = $.trim($('#editdescription').val());
    

    let idFirebase = pushid;
    // // if (idFirebase == ''){
    //     idFirebase = historycollection.push().key;
    // };

    data = {title:pushcity, description:pushdescription };
    actualData = {};
    actualData[`/${idFirebase}`] = data;
    announcementcollection.update(actualData);
    id = '';
    $("form").trigger("reset");
    $('#exampleModal').modal('hide');

    const table1 = $("#myTable").DataTable();

    successEditAlert();

    table1.clear().draw(); 
    

    loadData();


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
            database.ref(`announcement/${id}`).remove()
            Swal.fire('Success', 'record deleted successfully ', 'success')
    
            table1.clear().draw();
            loadData();
            }
        })
    });


    $("#submitData").submit(function(e){
        e.preventDefault();
        let pushid = $.trim($('#aid').val());
        let pushcity = $.trim($('#addtitle').val());
        let pushdescription = $.trim($('#adddescription').val());
    
        let idFirebase = pushid;
        
            idFirebase = announcementcollection.push().key;
      
    
        data = {title:pushcity, description:pushdescription };
        actualData = {};
        actualData[`/${idFirebase}`] = data;
        announcementcollection.update(actualData);
        id = '';
        $("form").trigger("reset");
        $('#exampleModal1').modal('hide');
    
        const table1 = $("#myTable").DataTable();
    
        successAddAlert();
    
        table1.clear().draw(); 
    
        loadData();
    
    
        });

        function sendNotification() {
            fetch("https://fcm.googleapis.com/fcm/send", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
               // "Authorization": "e25f8f243c71d22d6495ad0537a3c466284de981"
                "Authorization": "key=AAAAzQ5X7Jo:APA91bEpfNUiLKhYMo0bbcyjfhQM2XVKOTNtlhUc3WlAnCK8-maYAPqlsOG87bAwYToq1gEByxwChYkokm56UUZ7FXe7yKhQwgtxKY5_W1SPVBy9QHu37G87h3EGrHF31htJMJNJr37V"
              },
              body: JSON.stringify({
                "notification": {
                  "title": "Advisory",
                  "body": notifbody,
                //   "click_action": "https://your-website.com",
                   "icon": "gs://evacuateisad.appspot.com/0jM0BaJShjaBdXhtDaxckPyoI8n2/Profile/image_profile.jpg"
                },
                "to": "fbDx0b0SQASFN4aFRh2Xty:APA91bGODHOJKHzTQLt1WuLJsGGwjCslXh0Ntly1uzsO49WBLRvD6jM7GlBaMBUsG84R3TzWxFBbmycWhWopBJLsG05mK0TL7TgGg47pwqFdi8WNz_ge7CR9qDDnRHo10ziD4f3aZY_Q"
                
              })
            }).then(response => {
              console.log(response);
            }).catch(error => {
              console.log(error);
            });
          }
  
        
    function successEditAlert() {
        Swal.fire("Success", "The record has been updated successfully", "success");
    }
    
    function successAddAlert() {
        Swal.fire("Success", "The record has been added successfully", "success");
    }
    function successNotifAlert() {
        Swal.fire("Success", "The advisory notified the user successfully", "success");
    }