// Fibonacci Sequence - Iterative Solution
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

// Fibonacci Sequence - Recursive Solution
function fibsRec(n, sequence = [0, 1]) {
    // Uncomment the line below to see recursion in action
    console.log("This was printed recursively");

    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    if (sequence.length >= n) {
        return sequence;
    }

    const lastIndex = sequence.length - 1;
    const nextFib = sequence[lastIndex] + sequence[lastIndex - 1];

    return fibsRec(n, [...sequence, nextFib]);
}

// Merge Sort - Recursive Solution
function mergeSort(array) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length <= 1) {
        return array;
    }

    // Divide: split the array in half
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    // Conquer: recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Combine: merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and add the smaller one
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from left array
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Add any remaining elements from right array
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Test Cases
console.log("=== Fibonacci Tests ===");
console.log("fibs(8):", fibs(8));
console.log("fibsRec(8):", fibsRec(8));
console.log("fibs(1):", fibs(1));
console.log("fibsRec(1):", fibsRec(1));
console.log("fibs(0):", fibs(0));
console.log("fibsRec(0):", fibsRec(0));

console.log("\n=== Merge Sort Tests ===");
console.log("mergeSort([3, 2, 1, 13, 8, 5, 0, 1]):", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("mergeSort([105, 79, 100, 110]):", mergeSort([105, 79, 100, 110]));
console.log("mergeSort([]):", mergeSort([]));
console.log("mergeSort([1]):", mergeSort([1]));
console.log("mergeSort([5, 4, 3, 2, 1]):", mergeSort([5, 4, 3, 2, 1]));

// Export functions for use in other files (Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { fibs, fibsRec, mergeSort };
}
