const code = require('../codegen/hard-wired').generateNoReturn();

module.exports = function makeIteratorFunction() {
    return function iterator(param) {
        eval(code)
    }
}
