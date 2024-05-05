function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Return the index if the target element is found
        }
    }
    return -1; // Return -1 if the target element is not found in the array
}

// Example usage:
const arr = [4, 2, 8, 5, 1, 6];
const target = 5;
const index = linearSearch(arr, target);
if (index !== -1) {
    console.log(`The first index of ${target} in the array is: ${index}`);
} else {
    console.log(`${target} is not found in the array.`);
}
