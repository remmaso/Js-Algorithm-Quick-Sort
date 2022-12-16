// let arr = [1,2,3];
// let arr2 = [4,5];
// let arr3 = [1]
  
// arr = [...arr,...arr2,...arr3];
// console.log(arr); // [ 1, 2, 3, 4, 5 ]

// changed the original array
// let arr = ['a','b','c'];
// let arr2 = arr;

// arr2.push('d');

// console.log(arr2);
// console.log(arr); // even affected the original array(arr)

// spread operator for copying
// let arr = ['a','b','c'];
// let arr2 = [...arr];

// console.log(arr); // [ 'a', 'b', 'c' ]

// arr2.push('d'); //inserting an element at the end of arr2

// console.log(arr2); // [ 'a', 'b', 'c', 'd' ]
// console.log(arr); // [ 'a', 'b', 'c' ]

// const user1 = {
// 	name: 'Jen',
// 	age: 22
// };

// const clonedUser = { ...user1 };
// console.log(clonedUser);

// const user1 = {
// 	name: 'Jen',
// 	age: 22,
// };

// const user2 = {
// 	name: "Andrew",
// 	location: "Philadelphia"
// };

// const user3 = {
//    name: "Smith",
//    location: "New York City"
// };

// const mergedUsers = {...user1, ...user2, ...user3};
// console.log(mergedUsers)

// Challenge No 02

// const mergeSort = (nums) => {
//     if (nums.length <= 1) return nums;
//     const mid = Math.floor(nums.length / 2);
//     const left = nums.slice(0, mid);
//     const right = nums.slice(mid);
//     const sortedLeft = mergeSort(left);
//     const sortedRight = mergeSort(right);
//     return merge(sortedLeft, sortedRight);
//    };
   
//    const merge = (array1, array2) => {
//     array1.reverse();
//     array2.reverse();
//     const merged = [];
    
//     while (array1.length > 0 && array2.length > 0) {
//      if (array1[array1.length - 1] < array2[array2.length - 1]) {
//       merged.push(array1.pop());
//      } else {
//       merged.push(array2.pop());
//      }
//     }
   
//     merged.push(...array1.reverse());
//     merged.push(...array2.reverse());
   
//     return merged;

// };
// const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
// mergeSort(numbers);

// console.log((mergeSort(numbers)));


// quick sort algo


// Javascript implementation of QuickSort


// A utility function to swap two elements
function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
function partition(arr, low, high) {

	// pivot
	let pivot = arr[high];

	// Index of smaller element and
	// indicates the right position
	// of pivot found so far
	let i = (low - 1);

	for (let j = low; j <= high - 1; j++) {

		// If current element is smaller
		// than the pivot
		if (arr[j] < pivot) {

			// Increment index of
			// smaller element
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return (i + 1);
}

/* The main function that implements QuickSort
		arr[] --> Array to be sorted,
		low --> Starting index,
		high --> Ending index
*/
function quickSort(arr, low, high) {
	if (low < high) {

		// pi is partitioning index, arr[p]
		// is now at right place
		let pi = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

// Function to print an array
function sortArray(arr, size) {
	for (let i = 0; i < size; i++);
};

// Driver Code

let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;
// console.log(arr);
quickSort(arr, 0, n - 1);
sortArray(arr, n);
console.log(arr);
