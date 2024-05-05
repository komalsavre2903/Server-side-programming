function isArraySorted(arr) {
    // Check if the array is empty or has only one element
    if (arr.length <= 1) {
        return true;
    }
    
    // Iterate through the array and check if each element is less than or equal to the next one
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // If any element is greater than the next one, array is not sorted
        }
    }
    
    // If all elements are in sorted order, return true
    return true;
}

// Example usage:
var sortedArray = [1, 2, 3, 4, 5];
var unsortedArray = [7, 2, 4, 1, 5];

console.log("Is sortedArray sorted? " + isArraySorted(sortedArray));
console.log("Is unsortedArray sorted? " + isArraySorted(unsortedArray));
