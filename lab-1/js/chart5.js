$(document).ready(function() {
    var ctx = document.getElementById("chart5").getContext('2d');

    var nArr = _.range(512);

    var chart1 = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'polyharmonical signal',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.red,
                borderColor: window.chartColors.red,
                data: polyharmonicalSignalLinear(nArr)
            }],
            labels: nArr,
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text:'Polyharmonical signal'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: -5,
                        suggestedMax: 5
                    },
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }]
            }
        }
    });
});