function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Example usage:
var val1 = 42;
var val2 = "Hello";
var val3 = NaN;
var val4 = undefined;

console.log("Is val1 a number? " + isNumber(val1));
console.log("Is val2 a number? " + isNumber(val2));
console.log("Is val3 a number? " + isNumber(val3));
console.log("Is val4 a number? " + isNumber(val4));
