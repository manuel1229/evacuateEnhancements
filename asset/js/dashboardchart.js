        var config = {
    apiKey: "AIzaSyAexoKQd7Mi6Of7cLSLAH7vq7Ymq2ILZPQ",
    authDomain: "evacuateisad.firebaseapp.com",
    databaseURL: "https://evacuateisad-default-rtdb.firebaseio.com",
    projectId: "evacuateisad",
    storageBucket: "evacuateisad.appspot.com",
    messagingSenderId: "880708938906",
    appId: "1:880708938906:web:be4eaf69a49e0b5d99c323",
    measurementId: "G-EKMCWF5M2Z"
        };
    
       
        var x2, x3 = 0;
        var x4 = 0;
        

        firebase.initializeApp(config);
    
        var firebaseRef = firebase.database().ref("Users");
        firebaseRef.once("value", function(snapshot){
        var data = snapshot.val();
        for(let i in data){
            console.log(data[i]);
            x4++;
        }
        console.log(x4);
        // document.getElementById("testing").innerHTML=`${x4}`;
        document.getElementById("testing").innerHTML=`${x4}`;
        });
    
        var getData = firebase.database().ref("Users");
        var x5 = 0;
        
        getData.on('child_added', (data) => {
            console.log(data.val().try);
                  x5+=(data.val().try);
                  console.log(x5);
                    // document.getElementById("testing").innerHTML=`${x5}`;
            
        });


            //first code for getting count
    //     var firebaseRef = firebase.database().ref("evacsite");
    //     firebaseRef.once("value", function(snapshot){
    //     var data = snapshot.val();
    //     for(let i in data){
    //         console.log(data[i]);
    //         x3++;
    //   }
         
    //     // document.getElementById("testing").innerHTML=`${x4}`;
    //     document.getElementById("evacuationsites").innerHTML=`${x3}`;
    //     });



        // const collectionRef = firebase.database().ref("evacsite");

        // // Get the count of documents in the collection
        // collectionRef.get().then(querySnapshot => {
        // const count = querySnapshot.size;
        // console.log('Document count: ', count);
        // });


        var database = firebase.database();
    
        var ref = database.ref("evacsite");
        ref.once("value", function(snapshot) {
          console.log(snapshot.numChildren());
          console.log("lusidjslkfhsklfhnsdjkfdlnf");
          var a = (snapshot.numChildren());
          document.getElementById("evacuationsites").innerHTML=`${a}`;
        });


    //piechart
    var dataRefsite = database.ref("evacsite");
    var checklocsiteTag = "Taguig";
    var checklocsiteCal = "Caloocan";
    var checklocsiteMan = "Manila";
    var checklocsiteMar = "Marikina";
    var checklocsiteLas = "Las Piñas";
    var checklocsiteMun = "Muntinlupa";
    var checklocsiteVal = "Valenzuela";
    var checklocsitePas = "Pasay";
    var checklocsiteNav = "Navotas";
    var checklocsitePar = "Parañaque";
    var checklocsiteMan = "Mandaluyong";
    var checklocsiteSan = "San Juan";
    var checklocsiteQue = "Quezon City";

    // Read the data once
    dataRefsite.once("value", function(snapshot) {
    // Keep track of the number of matching children
    var countTag = 0;
    var countCal = 0;
    var countMan = 0;
    var countMar = 0;
    var countLas = 0;
    var countMun = 0;
    var countVal = 0;
    var countPas = 0;
    var countNav = 0;
    var countPar = 0;
    var countMan = 0;
    var countSan = 0;
    var countQue = 0;
    
    // Iterate through the children of the snapshot
    snapshot.forEach(function(childSnapshot) {
      // Get the value of the child
      var childValue = childSnapshot.val().city;
  
      // Check if the value matches
      if (childValue === checklocsiteTag) {
        countTag++;
      }

      if (childValue === checklocsiteCal) {
        countCal++;
      }

      if (childValue === checklocsiteMar) {
        countMar++;
      }

      if (childValue === checklocsiteMan) {
        countMan++;
      }
      if (childValue === checklocsiteLas) {
        countLas++;
      }

      if (childValue === checklocsiteMun) {
        countMun++;
      }
      if (childValue === checklocsiteVal) {
        countVal++;
      }

      if (childValue === checklocsitePas) {
        countPas++;
      }
      if (childValue === checklocsiteNav) {
        countNav++;
      }

      if (childValue === checklocsitePar) {
        countPar++;
      }

      if (childValue === checklocsiteMan) {
        countMan++;
      }

      if (childValue === checklocsiteSan) {
        countSan++;
      }

      if (childValue === checklocsiteQue) {
        countQue++;
      }
    });


    // snapshot.forEach(function(childSnapshot) {
    //     // Get the value of the child
    //     var childValue = childSnapshot.val().city;
    
    //     // Check if the value matches
    //     if (childValue === checklocsiteCal) {
    //       countCal++;
    //     }
    //   });
            
   
    // Log the count



    document.getElementById("piechart").innerHTML=`<canvas id="ppiechart" ></canvas>` ;
    var ctxx = document.getElementById("ppiechart").getContext('2d');
    var ppiechart = new Chart(ctxx,{

        type: 'pie',
        data: {
            datasets: [{
                data: [countTag, countCal, countMan, countMar, countLas, countMun, countVal, countPas, countNav, countPar, countMan, countSan, countQue],
                backgroundColor: [
                    '#FCC2FC',
                    '#C9F4AA',
                    '#4E6E81',
                    '#865DFF',
                    '#FDD36A',
                    '#3A98B9',
                    '#4D455D',
                    '#FFB84C',
                    '#C92C6D',
                    '#FF8B13',
                    '#9DC08B',
                    '#443C68',
                    '#B2A4FF'

                ],
                borderWidth : 3
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Taguig',
                'Caloocan',
                'Manila',
                'Marikina',
                'Las Piñas',
                'Muntinlupa',
                'Valenzuela',
                'Pasig',
                'Navotas',
                'Parañaque',
                'Mandaluyong',
                'San Juan',
                'Quezon City'

                
            ],
           
        },
        options: {
            animation: {
                duration:500
            },
            responsive: true,
            legend:{
                position:'bottom'
            }
           
        }
    });
    });



    
   //try date
   const startDate = new Date('01/01/2022').getTime()/1000;
   const endDate = new Date('12/31/2022').getTime()/1000;
   var dateRefsite = database.ref("dates");
   dateRefsite.once("value", function(snapshot) {
      // Keep track of the number of matching children
      var countdate = 0;
   
      
      // Iterate through the children of the snapshot
      snapshot.forEach(function(childSnapshot) {
        // Get the value of the child
        var childValue = new Date (childSnapshot.val().timestamp).getTime()/1000;
    
        // Check if the value matches
        if (childValue >= startDate && childValue <= endDate) {
          countdate++;
        }
      });
  
  console.log("tinesting ko sana gumana kdfngdfnd " + countdate);
     
      });





    
    
    
    
    function read(){
        firebase.database().ref("budgetapp/budget").child("budget").on("value",function
        (value){
            document.getElementById("budget").innerHTML=`${value.val()}`;  
            x2=value.val();
    
            document.getElementById("chart").innerHTML=`<canvas id="myChart"></canvas>` ;
    
            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Lusi", "Borat"],
                    datasets: [{
                        label: 'titeng borat',
                        data: [x2, x3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(255,99,132,1)'
                            
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
            document.getElementById("total").innerHTML=`${x2-x3}`;
        });
     
        firebase.database().ref("budgetapp/expenses").child("expenses").on("value",function
        (value){
            document.getElementById("expenses").innerHTML=`${value.val()}`;  
            x3=value.val();
    
            document.getElementById("chart").innerHTML=`<canvas id="myChart"></canvas>` ;
    
            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Lusi", "Borat"],
                    datasets: [{
                        label: 'titeng borat',
                        data: [x2, x3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(255,99,132,1)'
                            
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
            document.getElementById("total").innerHTML=`${x2-x3}`;
            
        });   



        var ctx = document.getElementById("mybarChart").getContext('2d');
var mybarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '#',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 101, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        },{
            label: '#',
            data: [10, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



        
        
    
    
    
    
    }
    