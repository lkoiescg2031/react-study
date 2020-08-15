import Mod from '../06/ModalContext';
const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = (x) => (a) => multiply(a, x);
const addX = (x) => (a) => add(a, x);

const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

const addFour = addX(4);

const result1 = multiplyThree(3);
const result2 = multiplyFour(3);
const result3 = multiplyX(3)(3);
const result4 = multiplyX(4)(3);

const equation = (a, b, c) => (x) => x * a * b + c;
const formula1 = equation(2, 3, 4);
const result = formula1(10);

const formula2 = (x) => addFour(multiplyThree(multiplyTwo(x)));
//compose
const formula3 = [multiplyTwo, multiplyThree, addFour].reduce(
  (prevFunc, nextFunc) => (value) => nextFunc(prevFunc(value)),
  (x) => x,
);

const compose = (...funcArr) =>
  funcArr.reduce(
    (prevFunc, nextFunc) => (...args) => nextFunc(prevFunc(...args)),
    (x) => x,
  );

function composeFunc() {
  const funcArr = Array.prototype.slice.call(arguments);
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function () {
        const args = Array.prototype.slice.call(arguments);
        return nextFunc(prevFunc.apply(null, args));
      };
    },
    function (value) {
      return value;
    },
  );
}

const formula4 = compose(multiplyTwo, multiplyThree, addFour);

console.log(result);
console.log(formula2(10));
console.log(formula3(10));
console.log(formula4(10));
