// Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
function reversArray(array){
   for(let i=0;i<array.length/2;i++){
    let temp = array[i];
    array[i]= array[array.length-1-i];
    array[array.length-i-1]=temp
   }
   return array
}

console.log(reversArray([1,2,34,24,25]))