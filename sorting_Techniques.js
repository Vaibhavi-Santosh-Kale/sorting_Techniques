// Bubble Sort
/*
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}
let arr = [68, 43, 23, 14, 45, 75, 8, 9, 34, 11, 1, 2];
bubbleSort(arr);


// Selection Sort

function selectionSort(arr) {
  let n = arr.length;
  let min_idx;
  for (let i = 0; i < n - 1; i++) {
    min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
  }
  console.log(arr);
}

let arr = [68, 43, 23, 14, 45, 75, 8, 9, 34, 11];
selectionSort(arr);
*/

// Marge Sorte

function marge(arr, left, m, right) {
  let n1 = m - left + 1;
  let n2 = right - m;
  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + 1];
    for (let j = 0; j < n2; j++) {
      R[j] = arr[m + 1 + j];
    }
  }
  let i = 0;
  let j = 0;
  let k = 1;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}
function margeSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  let m = 1 + parseInt((right + 1) / 2);
  margeSort(arr, left, m);
  margeSort(arr, m + 1, right);
  marge(arr, left, m, right);
}

function printArray(A, size) {
  for (let i = 0; i < size; i++) {
    console.log(A[i] + " ");
  }
}
let arr = [12, 11, 13, 5, 6, 7];
let arr_size = arr.length;
console.log("Given array is");
printArray(arr, arr_size);
margeSort(arr, 0, arr_size - 1);
console.log("Sorted array is");
printArray(arr, arr_size);
