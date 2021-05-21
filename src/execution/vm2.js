const { NodeVM, VMScript } = require('vm2');

const code = require('../codegen/ast').generateModule();

module.exports = function makeIteratorFunction() {
    const runnableScript = new VMScript(code)

    const sandbox = new NodeVM({
        console: 'off',
        eval: false,
        wasm: false,
        require: false,
        argv: [],
        env: [],
    });

    return sandbox.run(runnableScript)
}
