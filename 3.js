function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Choose a pivot element
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue; // Skip the pivot element
        }
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements smaller than the pivot go to the left array
        } else {
            right.push(arr[i]); // Elements greater than or equal to the pivot go to the right array
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort the left and right arrays
}

// Example usage:
const arr = [7, 2, 1, 6, 8, 5, 3, 4];
const sortedArr = quickSort(arr);
console.log("Sorted array:", sortedArr);
