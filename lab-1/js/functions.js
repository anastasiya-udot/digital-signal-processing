var harmonicalSignal = function(A, n, f, angle) {
    var sinAngle = 2 * Math.PI * f * n / 512 + angle;

    return A * Math.sin(sinAngle);
    
};

var defaultMatrix = [
    {
        A: 3,
        f: 1,
        angle: Math.PI / 4
    },
    {
        A: 3,
        f: 2,
        angle: 3 * Math.PI / 4
    },
    {
        A: 3,
        f: 3,
        angle: 2 * Math.PI / 3
    },
    {
        A: 3,
        f: 4,
        angle: Math.PI / 2
    },
    {
        A: 3,
        f: 5,
        angle: Math.PI / 2
    }
];

var polyharmonicalSignal = function(n, newMatrix) {

    var matrix = newMatrix || defaultMatrix;

    var results = _.map(matrix, function(item) {
        var sinAngle = 2 * Math.PI * item.f * n / 512 + item.angle;

        return item.A * Math.sin(sinAngle);
    });

    return results.reduce(function(a, b) {
        return a + b;
    });
    
};


var polyharmonicalSignalLinear = function(nArr) {
    var matrix = defaultMatrix;
    return _.map(nArr, function(n) {
        var s = polyharmonicalSignal(n, matrix);

        matrix = _.map(matrix, function(item) {
            return {
                A: item.A + item.A * 0.005,
                f: item.f + item.f * 0.005,
                angle: item.angle - item.angle * 0.005
            }
        });

        return s;
    });
};