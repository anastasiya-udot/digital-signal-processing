$(document).ready(function() {
    var ctx = document.getElementById("chart3").getContext('2d');

    var angle = 0;
    var f = 2;
    var nArr = _.range(512);

    var chart1 = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'A = 8',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.red,
                borderColor: window.chartColors.red,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(8, n, f, angle );
                })
            }, {
                label: 'A = 3',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.orange,
                borderColor: window.chartColors.orange,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(3, n, f, angle );
                })
            }, {
                label: 'A = 2',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.yellow,
                borderColor: window.chartColors.yellow,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(2, n, f, angle );
                })
            }, {
                label: 'A = 1',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.green,
                borderColor: window.chartColors.green,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(1, n, f, angle );
                })
            }, {
                label: 'A = 4',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.grey,
                borderColor: window.chartColors.grey,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(4, n, f, angle );
                })
            }],
            labels: nArr,
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text:'f = 4, φ = 0'
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