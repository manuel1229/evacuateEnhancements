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
    
    
     var historycollection = firebase.database().ref("Users");
    
    // var historycollection = db.ref().child("Users");
    
    var dataSet1 = [];
    
    const editicon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
    const deleteicon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg>';
    const viewicon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>';
    
    const updateRole = "Swap Role"

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
                     defaultContent: "<div class='wrapper text-center'><div class='btn-group'><button class='btnRole btn btn-warning' data-toggle='tooltip' title='View'>"+viewicon+"</button><button class='btnRole btn btn-primary' data-toggle='tooltip' title='Update'>"+editicon+"</button><button class='btnDelete btn btn-danger' data-toggle='tooltip' title='Remove'>"+deleteicon+"</button></div></div>"
                    //    defaultContent: "<div class='wrapper text-center'><div class='btn-group'><button class='btnRole btn btn-primary' data-toggle='tooltip' title='Editor'>"+updateRole+"</button></div></div>"
                }
        ]
    });
        
    
    function loadData() {
        
        b = 1;
    
        x5 = 0;
    
    
        historycollection.on('child_added', (datos) => {
            dataSet = [b, datos.key, datos.child("email").val(), datos.child("username").val(), datos.child("role").val()]
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
    
    
    $("#myTable").on("click", ".btnRole", function() {

        let rolecheck = $(this).closest('tr').find('td:eq(3)').text();

        var roleuser = "user"

        

        if(rolecheck === roleuser){
           

            filleliminate = $(this);
            Swal.fire({
                title: 'Are you sure you want to switch this role to admin?',
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
                let pushrole = "admin"
                // database.ref(`Users/${id}`).remove()
                // Swal.fire('Success', 'record deleted successfully ', 'success')
        
                

                let data = {
                            
                            role: pushrole
                        };
                        database.ref('Users/'+ id).update(data);
                        Swal.fire('Success', 'Role switched to admin successfully ', 'success')
            
                }
                const table1 = $("#myTable").DataTable();
                table1.clear().draw();
                loadData();
            })
        }
        else{
            filleliminate = $(this);
            Swal.fire({
                title: 'Are you sure you want to switch this role to user?',
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
                    let pushrole = "user"
                    // database.ref(`Users/${id}`).remove()
                    // Swal.fire('Success', 'record deleted successfully ', 'success')
            
                    
    
                    let data = {
                                
                                role: pushrole
                            };
                            database.ref('Users/'+ id).update(data);
                            Swal.fire('Success', 'Role switched to user successfully ', 'success')
                
                    }
                    const table1 = $("#myTable").DataTable();

                    table1.clear().draw();
                    loadData();            })
        }
       
        });