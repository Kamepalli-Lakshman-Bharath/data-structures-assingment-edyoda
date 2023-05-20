// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
function sumPairs(num, arr) {
  arr = [...new Set(arr)];
  let outPutArr = [];
  arr.forEach((element) => {
    arr.forEach((element1) => {
      if (element1 + element === num) {
        outPutArr.push([element, element1]);
      }
    });
  });
  return outPutArr;
}
console.log(sumPairs(7,[1,6,7,0,5,2]))

// let arr = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2]
// // function to find the pairs input1 is the num and input2 is an array
// function arrayPairsOfNum(input1,input2){
// let output = []
// input2= [...new Set(input2)]
//  input2.forEach(element => {
//     for(let i=0;i<input2.length;i++){
//        if(input2[i]+element===input1){
//         let arr = [element,input2[i]]
//         output.push(arr)
//        }
//      }

//  });return output;
// }
// console.log(arrayPairsOfNum(7,arr)) // 1,6 2,5
