function loadPerBMICategoryBarChart(month_label,data) {

    var barData = {
        labels: month_label,
        datasets: data
    };

    var barOptions = {
        responsive: true
    };


    var ctx2 = document.getElementById("barChart").getContext("2d");
    if(window.bar != undefined) window.bar.destroy(); 
    window.bar = new Chart(ctx2, {type: 'bar', data: barData, options:barOptions});
}


function loadPerBMICategoryLineChart(month_label,data){
    var lineData = {
        labels: month_label,
        datasets: data,
        fill: false
    };

    var lineOptions = {
        responsive: true
    };


    var ctx = document.getElementById("lineChart1").getContext("2d");
    if(window.line1 != undefined) window.line1.destroy();
    window.line1 = new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});
}


function loadDoughnutChart(male,female){

    var doughnutMaleData = male;


    var doughnutMaleOptions = {
        responsive: true
    };


    var ctx4 = document.getElementById("doughnutMaleChart").getContext("2d");
    if(window.doughnut1 != undefined) window.doughnut1.destroy();
    window.doughnut1 = new Chart(ctx4, {type: 'doughnut', data: doughnutMaleData, options:doughnutMaleOptions});



    var doughnutFemaleData = female;


    var doughnutFemaleOptions = {
        responsive: true
    };


    var ctx4 = document.getElementById("doughnutFemaleChart").getContext("2d");
    if(window.doughnut2 != undefined) window.doughnut2.destroy();
    window.doughnut2 = new Chart(ctx4, {type: 'doughnut', data: doughnutFemaleData, options:doughnutFemaleOptions});
}



function loadBMICategoryPerAgeLineChart(labels,data){

    var lineData = {
        labels: labels,
        datasets: data,
        fill: false
    };

    var lineOptions = {
        responsive: true
    };


    var ctx = document.getElementById("lineChart").getContext("2d");
    if(window.line != undefined) window.line.destroy();
    window.line = new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});
}


function loadPercentageChart1(labels,result){
    if(labels.length == 1){
        if(result[0] < 50){
            var backgroundColor = 'rgba(255,161,181,0.5)';
            var borderColor = "rgba(255,161,181,0.7)";
            var pointBackgroundColor = "rgba(255,161,181,1)";

        } else if(result[0] == 100){
            backgroundColor = 'rgba(26,179,148,0.5)';
            borderColor = 'rgba(26,179,148,0.7)';
            pointBackgroundColor =  'rgba(26,179,148,0.1)';

        } else {
            backgroundColor = 'rgba(255,204,51,0.5)';
            borderColor = 'rgba(255,204,51,0.7)';
            pointBackgroundColor = 'rgba(255,204,51,0.1)';
        }
    } else {
        backgroundColor = 'rgba(255,161,181,0.5)';
        borderColor = "rgba(255,161,181,0.7)";
        pointBackgroundColor = "rgba(255,161,181,1)";
    }

    var barData = {
        labels: labels,
        datasets: [
            {
                label: "% Completed",
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                pointBackgroundColor: pointBackgroundColor,
                pointBorderColor: "#fff",
                data: result
            }
        ]
    };

    var barOptions = {
        responsive: true
    };

    var ctx2 = document.getElementById("percentageChart1").getContext("2d");
    new Chart(ctx2, {type: 'horizontalBar', data: barData, options:barOptions});

    // var bars = myObjBar.datasets[0][data[0]].bars; alert(bars);
    // for(i=0;i<bars.length;i++){
    //    var color="green";
    //    //You can check for bars[i].value and put your conditions here
    //    if(bars[i].value<3){
    //     color="red";
    //    }
    //    else if(bars[i].value<5){
    //     color="orange"
       
    //    }
    //    else if(bars[i].value<8){
    //     color="yellow"
    //    }
    //    else{
    //     color="green"
    //    }
       
    //    bars[i].fillColor = color;

    // }
    // myObjBar.update(); //update the cahrt
}

function loadPercentageChart2(labels,result){
    var barData = {
        labels: labels,
        datasets: [
            {
                label: "% Completed",
                backgroundColor: 'rgba(26,179,148,0.5)',
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: result
            }
        ]
    };

    var barOptions = {
        responsive: true
    };

    var ctx2 = document.getElementById("percentageChart2").getContext("2d");
    new Chart(ctx2, {type: 'horizontalBar', data: barData, options:barOptions});
}
    
function loadPercentageChart3(labels,result){
    var barData = {
        labels: labels,
        datasets: [
            {
                label: "% Completed",
                backgroundColor: 'rgba(255,197,140,0.5)',
                borderColor: "rgba(255,197,140,0.7)",
                pointBackgroundColor: "rgba(255,197,140,1)",
                pointBorderColor: "#fff",
                data: result
            }
        ]
    };

    var barOptions = {
        responsive: true
    };

    var ctx2 = document.getElementById("percentageChart3").getContext("2d");
    new Chart(ctx2, {type: 'horizontalBar', data: barData, options:barOptions});
}
    
function loadPercentageChart4(labels,result){
    var barData = {
        labels: labels,
        datasets: [
            {
                label: "% Completed",
                backgroundColor: 'rgba(134,199,243,0.5)',
                borderColor: "rgba(134,199,243,0.7)",
                pointBackgroundColor: "rgba(134,199,243,1)",
                pointBorderColor: "#fff",
                data: result
            }
        ]
    };

    var barOptions = {
        responsive: true
    };

    var ctx2 = document.getElementById("percentageChart4").getContext("2d");
    new Chart(ctx2, {type: 'horizontalBar', data: barData, options:barOptions});
}
    
function loadPercentageChart5(labels,result){
    var barData = {
        labels: labels,
        datasets: [
            {
                label: "% Completed",
                backgroundColor: 'rgba(203,178,255,0.5)',
                borderColor: "rgba(203,178,255,0.7)",
                pointBackgroundColor: "rgba(203,178,255,1)",
                pointBorderColor: "#fff",
                data: result
            }
        ]
    };

    var barOptions = {
        responsive: true
    };

    var ctx2 = document.getElementById("percentageChart5").getContext("2d");
    new Chart(ctx2, {type: 'horizontalBar', data: barData, options:barOptions});
}
    
function loadPercentageChart6(labels,result){
    var barData = {
        labels: labels,
        datasets: [
            {
                label: "% Completed",
                backgroundColor: 'rgba(201,203,207,0.5)',
                borderColor: "rgba(201,203,207,0.7)",
                pointBackgroundColor: "rgba(201,203,207,1)",
                pointBorderColor: "#fff",
                data: result
            }
        ]
    };

    var barOptions = {
        responsive: true
    };

    var ctx2 = document.getElementById("percentageChart6").getContext("2d");
    new Chart(ctx2, {type: 'horizontalBar', data: barData, options:barOptions});
}

    


    

    

    

    

    

    
