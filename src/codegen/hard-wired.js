const code = `
let sum = 0;

while (sum < 1000) {
    sum += param;
}

return sum;
`;

const codeNoReturn = `
var sum = 0;

while (sum < 1000) {
    sum += param;
}

sum;
`;

const codeEsModule = `
    export default function iterate(param) {
        let sum = 0;

        while (sum < 1000) {
            sum += param;
        }

        return sum;
    }
`;

function generate() {
    return code;
}

function generateNoReturn() {
    return codeNoReturn;
}

function generateEsModule() {
    return codeEsModule;
}

module.exports = {
    generate,
    generateNoReturn,
    generateEsModule
};
