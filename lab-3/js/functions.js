function TransformationsWizardPart1(variant) {
    this._signal = variant.testSignal;
    let N = variant.N;
    const pi = Math.PI;

    this.initialSignal = [];
    this.recoveredSignal = [];

    this.spectorA = [];
    this.spectorPhi = [];


    this._getHarmonicA = function(j) {
        let sum = 0;

        for (let i = 0; i < N; i++) {
            sum += this._signal(i) * Math.cos(2 * pi * i * j / N);
        }

        return sum * 2 / N;
    };

    this._getHarmonicB = function(j) {
        let sum = 0;
        
        for (let i = 0; i < N; i++) {
            sum += this._signal(i) * Math.sin(2 * pi * i * j / N);
        }

        return sum * 2 / N;
    };

    this._getAmplitudeByFourier = function(harmonicA, harmonicB) {
        let powHarmonicA = Math.pow(harmonicA, 2);
        let powHarmonicB = Math.pow(harmonicB, 2);
    
        return Math.sqrt(powHarmonicA + powHarmonicB);
    };

    this._getPhaseByFourier = function(harmonicA, harmonicB) {
        let result = harmonicB / harmonicA;

        if (harmonicA === 0) {
            result = Infinity;
        }
        return Math.atan(result);
    };

    this.initInitialSignal = function() {
        this.initialSignal = [];

        for (let i = 0; i < N; i++) {
            this.initialSignal.push(this._signal(i));
        }
    };

    this.initSpectors = function() {
        this.spectorA = [];
        this.spectorPhi = [];

        for (let j = 0; j < N; j++) {
            let harmonicA = this._getHarmonicA(j);
            let harmonicB = this._getHarmonicB(j);

            this.spectorA.push(this._getAmplitudeByFourier(harmonicA, harmonicB));

            this.spectorPhi.push(this._getPhaseByFourier(harmonicA, harmonicB));
        }
    };

    this._recoverSignal = function(i) {
        let sum = 0;

        for (let j = 0; j < N /2; j++) {
            sum += this.spectorA[j] * Math.cos(2 * pi * i * j / N - this.spectorPhi[j])
        }

        return sum;
    }

    this.recoverSignal = function() {
        this.recoveredSignal = [];

        for (let i = 0; i < N; i++) {
            this.recoveredSignal.push(this._recoverSignal(i));
        }
    }
}


function TransformationsWizardPart2(variant) {
    this._signal = variant.testSignal;
    let N = variant.N;
    const pi = Math.PI;

    const polyHarmonicalConstant = 30;

    this.polyHarmonicalSignal = [];
    this.recoveredPolyHarmonicalSignalWithPhase = [];
    this.recoveredPolyHarmonicalSignalWithoutPhase = [];

    this.spectorA = [];
    this.spectorPhi = [];

    this._getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this._getPolyHarmonicalSignal = function(i) {
        let sum = 0;
        let amplitudes = variant.amplitudes;
        let phases = variant.phases;

        for (let j = 1; j < polyHarmonicalConstant; j++) {
            let randomA = amplitudes[this._getRandomInt(0, amplitudes.length - 1)];
            let randomPhi = phases[this._getRandomInt(0, phases.length - 1)];
            
            sum += randomA * Math.cos( 2 * pi * j * i / N - randomPhi);
        }

        return sum;
    };

    this.initPolyharmonicalSignal = function() {
        this.polyHarmonicalSignal = [];

        for (let i = 0; i < N / 2; i++) {
            this.polyHarmonicalSignal.push(this._getPolyHarmonicalSignal(i));
        }
    };


    this._getHarmonicA = function(j) {
        let sum = 0;

        for (let i = 0; i < N / 2; i++) {
            sum += this.polyHarmonicalSignal[i] * Math.cos(2 * pi * i * j / N);
        }

        return sum * 2 / N;
    };

    this._getHarmonicB = function(j) {
        let sum = 0;
        
        for (let i = 0; i < N / 2 ; i++) {
            sum += this.polyHarmonicalSignal[i] * Math.sin(2 * pi * i * j / N);
        }

        return sum * 2 / N;
    };

    this._getAmplitudeByFourier = function(harmonicA, harmonicB) {
        let powHarmonicA = Math.pow(harmonicA, 2);
        let powHarmonicB = Math.pow(harmonicB, 2);
    
        return Math.sqrt(powHarmonicA + powHarmonicB);
    };

    this._getPhaseByFourier = function(harmonicA, harmonicB) {
        let result = harmonicB / harmonicA;

        if (harmonicA === 0) {
            result = Infinity;
        }
        return Math.atan(harmonicB / harmonicA);
    };

    this._recoverWithPhase = function(i) {
        let sum = this.spectorA[0] / 2;

        for (let j = 1; j < N / 2; j++) {
            sum += this.spectorA[j] * Math.cos(2 * pi * i * j / N - this.spectorPhi[j]);
        }

        return sum;
    };

    this._recoverWithoutPhase = function(i) {
        let sum = this.spectorA[0] / 2;
        
        for (let j = 1; j < N / 2; j++) {
            sum += this.spectorA[j] * Math.cos(2 * pi * i * j / N);
        }

        return sum;
    };

    this.recoverPolyharmonicalSignalWithPhase = function() {
        this.recoveredPolyHarmonicalSignalWithPhase = [];

        for (let i = 0; i < N; i++) {
            this.recoveredPolyHarmonicalSignalWithPhase.push(this._recoverWithPhase(i));
        }
    };

    this.recoverPolyharmonicalSignalWithoutPhase = function() {
        this.recoveredPolyHarmonicalSignalWithoutPhase = [];
        
        for (let i = 0; i < N; i++) {
            this.recoveredPolyHarmonicalSignalWithoutPhase.push(this._recoverWithoutPhase(i));
        }
    };

    this.initSpectors = function() {
        this.spectorA = [];
        this.spectorPhi = [];

        for (let j = 0; j < N; j++) {
            let harmonicA = this._getHarmonicA(j);
            let harmonicB = this._getHarmonicB(j);

            this.spectorA.push(this._getAmplitudeByFourier(harmonicA, harmonicB));

            this.spectorPhi.push(this._getPhaseByFourier(harmonicA, harmonicB));
        }
    };

}
