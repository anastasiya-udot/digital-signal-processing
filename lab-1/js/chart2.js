$(document).ready(function() {
    var ctx = document.getElementById("chart2").getContext('2d');

    var A = 4;
    var angle = 0;
    var nArr = _.range(512);

    var chart1 = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'f = 8',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.red,
                borderColor: window.chartColors.red,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(A, n, 8, angle );
                })
            }, {
                label: 'f = 1',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.orange,
                borderColor: window.chartColors.orange,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(A, n, 1, angle );
                })
            }, {
                label: 'f = 5',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.yellow,
                borderColor: window.chartColors.yellow,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(A, n, 5, angle );
                })
            }, {
                label: 'f = 4',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.green,
                borderColor: window.chartColors.green,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(A, n, 4, angle );
                })
            }, {
                label: 'f = 9',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.grey,
                borderColor: window.chartColors.grey,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(A, n, 9, angle );
                })
            }],
            labels: nArr,
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text:'A = 4, φ = 0'
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