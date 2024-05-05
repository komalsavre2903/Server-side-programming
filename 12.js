function isRegExp(value) {
    return value instanceof RegExp;
}

// Example usage:
var regex1 = /hello/;
var regex2 = new RegExp('\\d+');
var str = "world";

console.log("Is regex1 a RegExp? " + isRegExp(regex1));
console.log("Is regex2 a RegExp? " + isRegExp(regex2));
console.log("Is str a RegExp? " + isRegExp(str));
