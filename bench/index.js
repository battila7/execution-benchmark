const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

const execution = {
    eval: require('../src/execution/eval')(),
    functionConstructor: require('../src/execution/function-constructor')(),
    isolate: require('../src/execution/isolate')(),
    native: require('../src/execution/native')(),
    rfs: require('../src/execution/require-from-string')(),
    vm2: require('../src/execution/vm2')(),
};

const INCREMENT = 1;

suite
    .add('eval', function testEval() {
        execution.eval(INCREMENT)
    })
    .add('Function constructor', function testFunctionConstructor() {
        execution.functionConstructor(INCREMENT)
    })
    .add('Isolate', function testIsolate() {
        execution.isolate(INCREMENT)
    })
    .add('native', function testNative() {
        execution.native(INCREMENT)
    })
    .add('require-from-string', function testRequireFromString() {
        execution.rfs(INCREMENT);
    })
    .add('vm2', function testVm2() {
        execution.vm2(INCREMENT)
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run()
