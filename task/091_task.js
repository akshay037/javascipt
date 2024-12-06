// JavaScript Program to Check If a Variable is of Function Type

function testVariable(variable) {

    if (variable instanceof Function) {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function () {
    console.log('hello')
};

testVariable(count);
testVariable(x);