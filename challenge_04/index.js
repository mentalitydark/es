var _a;
var inputNumber01 = document.querySelector('input#number01');
var inputNumber02 = document.querySelector('input#number02');
var spanResult = document.querySelector('span#result');
var operations = {
    sum: function (a, b) { return a + b; },
    subtraction: function (a, b) { return a - b; },
    multiplication: function (a, b) { return a * b; },
    division: function (a, b) { return a / b; },
    rest: function (a, b) { return a % b; },
};
var buttons = Object.keys(operations).map(function (operation) { return document.querySelector("button#".concat(operation)); });
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var target = event.target;
        if (!target || !spanResult || !inputNumber01 || !inputNumber02)
            return;
        if (inputNumber01.type !== 'number' || inputNumber02.type !== 'number') {
            alert('Você modificou o tipo de algum input.');
            window.location.reload();
            return;
        }
        if (invalidInput(inputNumber01) || invalidInput(inputNumber02))
            return;
        var number01 = transformToNumber(inputNumber01.value);
        var number02 = transformToNumber(inputNumber02.value);
        var result = operations[target.id](number01, number02);
        console.log({ result: result, number01: number01, number02: number02 });
        spanResult.innerText = String(result);
        if (number02 === 0 && ['division', 'rest'].includes(target.id))
            spanResult.innerText = 'Divided by zero';
    });
});
function invalidInput(element) {
    return element.validity.badInput;
}
function transformToNumber(text) {
    return parseFloat(text) || 0;
}
(_a = document.querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) { return event.preventDefault(); });
