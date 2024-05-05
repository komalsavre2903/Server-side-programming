function sortStringAlphabetically(str) {
    // Convert the string to an array of characters
    var charArray = str.split('');
    
    // Sort the array of characters alphabetically
    charArray.sort();
    
    // Convert the sorted array back to a string
    var sortedStr = charArray.join('');
    
    return sortedStr;
}

// Example usage:
var inputString = "hello";
var sortedString = sortStringAlphabetically(inputString);
console.log("Original string: " + inputString);
console.log("Sorted string: " + sortedString);
