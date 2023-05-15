$(document).ready(function() {




loadData();



firebase.initializeApp(firebaseConfig);
let database = firebase.database();
// let tbody = document.getElementById('tbody');
// let dateV = document.getElementById('dateC');
// let calamityV = document.getElementById('calamityC');
// let cityV = document.getElementById('cityC');
// let descriptionV = document.getElementById('descriptionC');
// let editcalamity = document.getElementById('editcalamity');
// let editcity = document.getElementById('editcity');
// let editdescription = document.getElementById('editdescription');
// let editdate = document.getElementById('dateE');
// let idV = document.getElementById('id');

var db = firebase.database();



// $(document).ready(function(){
//     $('.dataTables-example').DataTable({
//         pageLength: 10,
//         responsive: true,
//         dom: '<"html5buttons"B>lTfgitp',
//         buttons: [
          
//         ]

//     });
// });


var dataSet = [];

// $(document).ready(function() {
//     var table = $('#myTable').DataTable({
//         searching: true,
//         data: [],
//         columns: [
//             { title: '#' },
//             { title: 'City' },
//             { title: 'Calamity' },
//             { title: 'Date' },
//             { title: 'Description'},
//             { 
//                 title: 'Action',
//                 render: function(data, type, row) {
//                   return '<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editRow('${ data.key}')"> Update </button>';
//                 }
//               }
//         ]
//     });

//     // Fetch data from Firebase
//     database.ref('histories').once('value', function(snapshot) {
//         var data = [];
//         var a = 0;

//         snapshot.forEach(function(childSnapshot) {
//             var childData = childSnapshot.val();
//             a++;
//             var b = a; 
//             data.push([b,childData.city, childData.calamity, childData.date, childData.description]);
//         });

//         // Populate the DataTable with the fetched data
//         table.clear().rows.add(data).draw();
//     });
// });

// var historycollection = db.ref().child("histories"); 



    

    // Fetch data from Firebase
    // database.ref('histories').once('value', function(snapshot) {
    //     var data = [];
    //     var a = 0;

    //     snapshot.forEach(function(childSnapshot) {
    //         var childData = childSnapshot.val();
    //         a++;
    //         var b = a; 
    //         data.push([b,childData.city, childData.calamity, childData.date, childData.description]);
    //     });

    //     // Populate the DataTable with the fetched data
    //     table.clear().rows.add(data).draw();
    // });



        

// database.ref('announcement').on('value', readdata)
// function readdata(snapshoot){
//     console.log(snapshoot.val());





// function clrData(){
//     cityV.value=''
//     calamityV.value=''
//     descriptionV.value=''
//     dateV.value=''
    
// }
// function createData(){
    
//     let data = {
//         city: cityV.value,
//         calamity: calamityV.value,
//         description: descriptionV.value,
//         date: dateV.value
//     };
//     database.ref('histories').push(data);
//     $('#exampleModal1').modal('hide');
//     cityV.value=''
//     calamityV.value=''
//     descriptionV.value=''
//     dateV.value=''
// }


//     database.ref('histories').on('value', viewdata);
//         function viewdata(snapshot){
//             let table='';
//             let no = 1;
//             snapshot.forEach((data)=> {
//                 table += `
//                 <tr>
//                     <th scope="row">${no}</th>
//                     <td>${data.val().city}</td>
//                     <td>${data.val().calamity}</td>
//                     <td>${data.val().date}</td>
//                     <td class="text-wrap">${data.val().description}</td>  
//                     <td style="vertical-align:middle;text-align:center;"><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" 
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
var a = 1;

// historycollection.on("child_added", datos =>{
   
//     dataSet = [a, datos.key, datos.child("city").val(), datos.child("calamity").val(), datos.child("date").val(), datos.child("description").val()]
//     a++;
//     table.rows.add([dataSet]).draw();

    

// });

historycollection.on("child_changed", datos =>{
   
    // dataSet = [a, datos.key, datos.child("city").val(), datos.child("calamity").val(), datos.child("date").val(), datos.child("description").val()]
    // table.row(filledit).data(dataSet).draw();

    // dataSet = [a, datos.key, datos.child("city").val(), datos.child("calamity").val(), datos.child("date").val(), datos.child("description").val()]
    // a++;
    table.row(filledit).data(dataSet).draw();

});

historycollection.on("child_removed", datos =>{
        table.row(filleliminate.parents('tr')).remove().draw();
});


// database.ref('histories').on('value', viewdata);
// function viewdata(snapshot){
//     let table='';
//     let no = 1;
//     snapshot.forEach((data)=> {
//         table += `
//         <tr>
//             <th scope="row">${no}</th>
//             <td>${data.val().city}</td>
//             <td>${data.val().calamity}</td>
//             <td>${data.val().date}</td>
//             <td class="text-wrap">${data.val().description}</td>  
//             <td style="vertical-align:middle;text-align:center;"><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" 
//             onclick="editRow('${
//                 data.key
//             }')">
//             Update
//             </button>

//             <button type="button" class="btn btn-danger" onclick="deleteRow('${data.key}')">Delete
//             </button>
//             </td>

//         </tr>
//     `;     
//     no++;         
//     });
// tbody.innerHTML = table;

// }



// function editRow(id){
   
//     database.ref('histories/' + id).on('value', function(snapshot){
//         editcity.value = snapshot.val().city;
//         editcalamity.value = snapshot.val().calamity;
//         editdescription.value = snapshot.val().description;
//         editdate.value = snapshot.val().date;
//         idV.value = id;
//     });
// }

// function updateData() {
//     let updateData = document.getElementById('updateData')
//     let data = {
//         city: editcity.value,
//         calamity: editcalamity.value,
//         description: editdescription.value,
//         date: editdate.value
//     };
//     database.ref('histories/'+ idV.value).update(data);
//     $('#exampleModal').modal('hide');
//     // updateData.setAttribute('data-bs-dismiss', 'modal');
    

// }

// function deleteRow(id){
//     database.ref('histories/'+ id).remove();
// }




   


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


 var historycollection = firebase.database().ref("histories");

// var historycollection = db.ref().child("histories");

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
                targets: -1,
                defaultContent: "<div class='wrapper text-center'><div class='btn-group'><button class='btnEdit btn btn-primary' data-toggle='tooltip' title='Editor'>"+editicon+"</button><button class='btnDelete btn btn-danger' data-toggle='tooltip' title='Borrar'>"+deleteicon+"</button></div></div>"
            }
    ]
});


    

function loadData() {
    
    b = 1;

    x5 = 0;


    historycollection.on('child_added', (datos) => {
        dataSet = [b, datos.key, datos.child("city").val(), datos.child("calamity").val(), datos.child("date").val(), datos.child("description").val()]
        b++;
        table.rows.add([dataSet]).draw();
       
            
        
});

}



function successEditAlert() {
    Swal.fire("Success", "The record has been updated successfully", "success");
}

function successAddAlert() {
    Swal.fire("Success", "The record has been added successfully", "success");
}


var label4modal = document.getElementById("modalLabel");

 function addData(){
    document.getElementById('modalLabel').innerText = 'Your tip has been submitted!';
    $("#modalLabel").text("your tip has been submitted!");

    editcity.value = "Manila"
    editcalamity.value = "Typhoon"
    editdescription.value = ''
    editdate.value = ''
    id.value = ''

};


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
        database.ref(`histories/${id}`).remove()
        Swal.fire('Success', 'record deleted successfully ', 'success')

        table1.clear().draw();
        loadData();
        }
    })
    });

    $("#editData").submit(function(e){
    e.preventDefault();
    let pushid = $.trim($('#id').val());
    let pushcity = $.trim($('#editcity').val());
    let pushcalamity = $.trim($('#editcalamity').val());
    let pushdate = $.trim($('#editdate').val());
    let pushdescription = $.trim($('#editdescription').val());

    let idFirebase = pushid;
    // // if (idFirebase == ''){
    //     idFirebase = historycollection.push().key;
    // };

    data = {city:pushcity, calamity:pushcalamity, date:pushdate, description:pushdescription };
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
        let pushcalamity = $.trim($('#addcalamity').val());
        let pushdate = $.trim($('#adddate').val());
        let pushdescription = $.trim($('#adddescription').val());
    
        let idFirebase = pushid;
        
            idFirebase = historycollection.push().key;
      
    
        data = {city:pushcity, calamity:pushcalamity, date:pushdate, description:pushdescription };
        actualData = {};
        actualData[`/${idFirebase}`] = data;
        historycollection.update(actualData);
        id = '';
        $("form").trigger("reset");
        $('#exampleModal1').modal('hide');
    
        const table1 = $("#myTable").DataTable();
    
        successAddAlert();
    
        table1.clear().draw(); 
    
        loadData();
    
    
        });



    $("#myTable").on("click", ".btnEdit", function(){
        filledit = table.row($(this).parents('tr'));
        let fill = $('#myTable').dataTable().fnGetData($(this).closest('tr'));
        let id = fill[1];
        let historycity = $(this).closest('tr').find('td:eq(1)').text();
        let historycalamity = $(this).closest('tr').find('td:eq(2)').text();
        let historydate = $(this).closest('tr').find('td:eq(3)').text();
        let historydescription = $(this).closest('tr').find('td:eq(4)').text();
        
        
        
        $('#id').val(id);
        editcity.value = historycity;
        $('#editcalamity').val(historycalamity);
        editdate.value = historydate;
        $('#editdescription').val(historydescription);
        $('#exampleModal').modal('show');
        
        
        
        
        
        });

   
