const ivm = require('isolated-vm');

const code = require('../codegen/hard-wired').generateEsModule()

module.exports = function makeIteratorFunction() {
    const isolate = new ivm.Isolate()
    const context = isolate.createContextSync();

    const module = isolate.compileModuleSync(code);

    module.instantiateSync(context, () => void 0);
    module.evaluateSync();

    return module.namespace.getSync('default');
}
