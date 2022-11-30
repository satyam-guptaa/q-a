function printNewArray(arr, cb) {
  arr.push(100);
  cb(arr);
}

printNewArray([1, 2, 90], (array) => console.log(array));
