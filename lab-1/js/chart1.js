$(document).ready(function() {
    var ctx = document.getElementById("chart1").getContext('2d');

    var A = 8;
    var f = 4
    var nArr = _.range(512);

    var chart1 = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'φ = π / 6',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.red,
                borderColor: window.chartColors.red,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(A, n, f, Math.PI / 6 );
                })
            }, {
                label: 'φ = π / 3',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.orange,
                borderColor: window.chartColors.orange,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(A, n, f, Math.PI / 3 );
                })
            }, {
                label: 'φ = 2π / 3',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.yellow,
                borderColor: window.chartColors.yellow,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(A, n, f, 2 * Math.PI / 3 );
                })
            }, {
                label: 'φ = π / 4',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.green,
                borderColor: window.chartColors.green,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(A, n, f, Math.PI / 4 );
                })
            }, {
                label: 'φ = 0',
                fill: false,
                pointStyle: 'line',
                backgroundColor: window.chartColors.grey,
                borderColor: window.chartColors.grey,
                data: _.map(nArr, function(n) {
                    return harmonicalSignal(A, n, f, 0 );
                })
            }],
            labels: nArr,
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text:'A = 5, f = 4'
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