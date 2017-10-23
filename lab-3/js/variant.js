// variant 3
function Variant() {
    const N = 256;
    const pi = Math.PI;

    this.N = N;

    this.testSignal = function(i) {
        return 20 * Math.cos(2 * pi * 10 * i / N); 
    }

    this.amplitudes = [1, 2, 5, 7, 9, 13, 18];
    this.phases = [ pi/6, pi/4, pi/3, pi/2, 3*pi/4, pi];
}
