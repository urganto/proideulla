const parentProjection = { type: 'projection', name: 'Parent Projection' };
const projection = { type: 'projection', name: 'Child Projection' };

function stringify(obj) {
    return JSON.stringify(obj);
}

function generateErrorMessage(parentProjection, projection) {
    return "Layer's shared projection ".concat(stringify(parentProjection), " is overridden by a child projection ").concat(stringify(projection), ".");
}

const errorMessage = generateErrorMessage(parentProjection, projection);
console.log(errorMessage);
