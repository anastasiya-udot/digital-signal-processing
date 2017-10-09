$(document).ready(function() {
    var ctx1 = document.getElementById("chart1").getContext('2d');
    var ctx2 = document.getElementById("chart2").getContext('2d');

    var colorSet1 = [window.chartColors.red, window.chartColors.blue, window.chartColors.purple];
    var colorSet2 = [window.chartColors.orange, window.chartColors.green, window.chartColors.yellow];

    const N = 1024;
    const K = 3 * N / 4;
    const phi1 = 0;
    const phi2 = Math.PI / 4;

    drawChart(ctx1, phi1, colorSet1);
    drawChart(ctx2, phi2, colorSet2);

    function drawChart(ctx, phi, colorsSet) {
        var errors = getErrors(phi, N, K);
        var display = 'N = ' + N + ', K = ' + K;
        
        phi ? (display += ', φ =  π / 4') : (display += ', φ = 0');
        
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Amplitude errors',
                    fill: false,
                    pointStyle: 'line',
                    backgroundColor: colorsSet[0],
                    borderColor: colorsSet[0],
                    data: errors.amplitudeErrors
                }, {
                    label: 'Errors by the first mean square formule',
                    fill: false,
                    pointStyle: 'line',
                    backgroundColor: colorsSet[1],
                    borderColor: colorsSet[1],
                    data: errors.firstFormuleErrors
                }, {
                    label: 'Errors by the second mean square formule',
                    fill: false,
                    pointStyle: 'line',
                    backgroundColor: colorsSet[2],
                    borderColor: colorsSet[2],
                    data: errors.secondFormuleErrors
                }],
                labels: _.range(K, 2 * N)
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text: display
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true
                        }
                    }]
                }
            }
        });
    }

});