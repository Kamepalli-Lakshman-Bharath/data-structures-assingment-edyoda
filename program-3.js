// Write a program to check if two strings are a rotation of each other?
function isArrayRotation(arr1, arr2) {
  if (arr1.length === arr2.length) {
    arr1 = arr1.join("") + arr1.join("");
    console.log(arr1);
    arr2 = arr2.join("");
    console.log(arr2);
    if (arr1.includes(arr2)) {
      return true;
    }
    return false;
  }
  return false;
}
console.log(isArrayRotation([1, 2, 3, 4, 5], [2,3,4,5,1]));
