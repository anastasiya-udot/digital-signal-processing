$(document).ready(function() {
    var ctx1 = document.getElementById("chart1").getContext('2d');
    var ctx2 = document.getElementById("chart2").getContext('2d');
    var ctx3 = document.getElementById("chart3").getContext('2d');
    var ctx4 = document.getElementById("chart4").getContext('2d');


    var colorSet1 = [window.chartColors.red, window.chartColors.blue, window.chartColors.purple];
    var colorSet2 = [window.chartColors.orange, window.chartColors.green, window.chartColors.yellow];

    var variant = new Variant();

    var part1 = new TransformationsWizardPart1(variant);

    part1.initSpectors();

    var chart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Amplitude spector',
                fill: false,
                pointStyle: 'line',
                backgroundColor: colorSet1[0],
                borderColor: colorSet1[0],
                data: part1.spectorA
            }, {
                label: 'Phase spector',
                fill: false,
                pointStyle: 'line',
                backgroundColor: colorSet2[0],
                borderColor: colorSet2[0],
                data: part1.spectorPhi
            }],
            labels: _.range(0, part1.spectorA.length - 1)
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text: 'Spectors'
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

    part1.initInitialSignal();
    part1.recoverSignal();

    var chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Initial Signal',
                fill: false,
                pointStyle: 'line',
                backgroundColor: colorSet1[1],
                borderColor: colorSet1[1],
                data: part1.initialSignal
            }, {
                label: 'Recovered signal',
                fill: false,
                pointStyle: 'line',
                backgroundColor: colorSet2[2],
                borderColor: colorSet2[2],
                data: part1.recoveredSignal
            }],
            labels: _.range(0, part1.recoveredSignal.length - 1)
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text: 'Signals'
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

    var part2 = new TransformationsWizardPart2(variant);
    
    part2.initPolyharmonicalSignal();
    part2.initSpectors();

    var chart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Amplitude spector',
                fill: false,
                pointStyle: 'line',
                backgroundColor: colorSet1[2],
                borderColor: colorSet1[2],
                data: part2.spectorA
            }, {
                label: 'Phase spector',
                fill: false,
                pointStyle: 'line',
                backgroundColor: colorSet2[2],
                borderColor: colorSet2[2],
                data: part2.spectorPhi
            }],
            labels: _.range(0, part2.spectorA.length - 1)
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text: 'Spectors for polyharmonical'
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

    part2.recoverPolyharmonicalSignalWithPhase();
    part2.recoverPolyharmonicalSignalWithoutPhase();

    var chart4 = new Chart(ctx4, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Initial Polyharmonical Signal',
                fill: false,
                pointStyle: 'line',
                backgroundColor: colorSet1[1],
                borderColor: colorSet1[1],
                data: part2.polyHarmonicalSignal
            }, {
                label: 'Recovered signal with phase',
                fill: false,
                pointStyle: 'line',
                backgroundColor: colorSet2[2],
                borderColor: colorSet2[2],
                data: part2.recoveredPolyHarmonicalSignalWithPhase
            }, {
                label: 'Recovered signal without phase',
                fill: false,
                pointStyle: 'line',
                backgroundColor: colorSet2[0],
                borderColor: colorSet2[0],
                data: part2.recoveredPolyHarmonicalSignalWithoutPhase
            }],
            labels: _.range(0, part2.polyHarmonicalSignal.length - 1)
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text: 'Polyharmonical Signals'
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


});