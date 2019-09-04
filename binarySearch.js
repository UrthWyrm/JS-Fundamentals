// Given an array of sorted numbers and a value (also a number), return 
// whether the array contains that value. Return the index position of the 
// value if it exists and -1 if it does not exist. 

// Do not sequentially iterate through the array. Take advantage of the fact 
// that the array is sorted and use a 'divide and conquer' technique. Very 
// similar to when we are searching for a word in a dictionary (the book kind) 
// we may: 

// Start our search in the center and determine whether we need to search the 
// back half or the front half. 
// Choose a spot around the center of the half of the array we still need to 
// search.
// From here, determine which quarter of the array we still need to search. 
// In this way our search is very rapidly narrowed until we find out whether 
// the value we are searching for is in the array or not.

this.binarySearch = function(item) {
    this.quicksort();

    var low = 0, 
    high = this.Array.length - 1,
    mid, element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        element = array[mid];
        if (element < item) {
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}