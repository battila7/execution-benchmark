const code = require('../codegen/hard-wired').generate();

module.exports = function makeIteratorFunction() {
    return new Function('param', code);
}
