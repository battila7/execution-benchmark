const { builders } = require('ast-types');
const astring = require('astring');

const b = builders;

function generate() {
    const fn = createTestFunction();

    return astring.generate(fn);
}

function generateModule() {
    const fn = createTestFunction();
    const parentModule = createModuleFromFunction(fn)

    return astring.generate(parentModule);
}

function createModuleFromFunction(fn) {
    const moduleId = b.identifier('module');
    const exportsId = b.identifier('exports');

    return b.expressionStatement(
        b.assignmentExpression(
            '=',
            b.memberExpression(moduleId, exportsId),
            fn
        )
    );
}

function createTestFunction() {
    const sumId = b.identifier('sum');
    const dummyNameId = b.identifier('dummy');
    const parameterId = b.identifier('param');

    return b.functionExpression(
        dummyNameId,
        [
            parameterId
        ],
        b.blockStatement([
            b.variableDeclaration(
                'let',
                [
                    b.variableDeclarator(
                        sumId,
                        b.literal(0)
                    )
                ]
            ),
            b.whileStatement(
                b.binaryExpression(
                    '<',
                    sumId,
                    b.literal(1000)
                ),
                b.blockStatement([
                    b.expressionStatement(
                        b.assignmentExpression(
                            '+=',
                            sumId,
                            parameterId
                        )
                    )
                ])
            ),
            b.returnStatement(
                sumId
            )
        ])
    );
}

module.exports = {
    generate,
    generateModule
};