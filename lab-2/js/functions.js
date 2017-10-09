function getErrors(phi, N, K) {

    var amplitudeErrors = [];
    var firstFormuleErrors = [];
    var secondFormuleErrors = [];

    for (var M = K; M <= 2 * N; M++) {
        var signalValuesSquaresSum = 0;
        var signalValuesSum = 0;
        var signalValues = [];

        for (var n = 0; n <= M; n++) {
            var harmonicalSignalValue = harmonicalSignalFunction(n, N, phi);
            signalValuesSquaresSum += Math.pow(harmonicalSignalValue, 2);
            signalValuesSum += harmonicalSignalValue;

            signalValues.push(harmonicalSignalValue);
        }

        var amplitude = getAmplitudeByFourier(signalValues);
        amplitudeErrors.push(getAmplitudeError(amplitude));

        var firstFormuleMeanSquare = getMeanSquareByFirstFormule(signalValuesSquaresSum, M);
        firstFormuleErrors.push(getErrorOfMeanSquareExecution(firstFormuleMeanSquare));

        var secondFormuleMeanSquare = getMeanSquareBySecondFormule(signalValuesSquaresSum, signalValuesSum, M);
        secondFormuleErrors.push(getErrorOfMeanSquareExecution(secondFormuleMeanSquare));
    }

    return {
        amplitudeErrors: amplitudeErrors,
        firstFormuleErrors: firstFormuleErrors,
        secondFormuleErrors: secondFormuleErrors
    };
}

function harmonicalSignalFunction(n, N, phi) {
    return Math.sin(2 * Math.PI * n / N + phi);
}


function getAmplitudeByFourier(values) {
    var M = values.length;
    var coefficientFourierA = 0;
    var coefficientFourierB = 0;

    for (var i = 0; i < M; i++) {
        var angle = 2 * Math.PI * i / M;

        coefficientFourierA += values[i] * Math.sin(angle);
        coefficientFourierB += values[i] * Math.cos(angle);
    }
    coefficientFourierA *= 2 / M;
    coefficientFourierB *= 2 / M;

    var powCoeffA = Math.pow(coefficientFourierA, 2);
    var powCoeffB = Math.pow(coefficientFourierB, 2);

    return Math.sqrt(powCoeffA + powCoeffB);
}

function getAmplitudeError(amplitude) {
    return 1 - amplitude;
}

function getMeanSquareByFirstFormule(valuesSquaresSum, M) {
    return Math.sqrt( valuesSquaresSum / ( M + 1 ));
}

function getMeanSquareBySecondFormule(valuesSquaresSum, valuesSum, M) {
    var powValuesSum = Math.pow(valuesSum / (M + 1), 2);

    return Math.sqrt( valuesSquaresSum / ( M + 1 ) - powValuesSum);
}


function getErrorOfMeanSquareExecution(meanSquare) {
    const ERROR_EXECUTION_CONSTANT = 0.707;

    return ERROR_EXECUTION_CONSTANT - meanSquare;
}