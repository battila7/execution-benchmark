const rfs = require('require-from-string');

const code = require('../codegen/ast').generateModule();

module.exports = function makeTestFunction() {
    return rfs(code);
}
