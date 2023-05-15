firebase.database().ref().child("announcement").orderByChild("title").equalTo("Signal #1").once("value", function (snapshot){
snapshot.forEach(function(childSnapshot){
     
    var cellNum = childSnapshot.val().CellNum;
    var id = childSnapshot.child("id").val();
    var title = childSnapshot.child("title").val();
    var description = childSnapshot.child("description").val();

    $("#table_body1").append('<tr><td>' + id + '</td><td>' + title + '</td><td>' + description + '</td></tr>');
});

});

