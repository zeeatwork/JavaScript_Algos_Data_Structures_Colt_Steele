function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}
var hundredArray = range(1, 100); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

hundredArray.splice(40, 1);

const findMissingNumber = (array) => {
  let isNumberMissing = true;
  let numberCount = 1;
  while (isNumberMissing) {
    //console.log("indexOf", array.indexOf(numberCount));
    if (array.indexOf(numberCount) >= 0) {
      numberCount++;
     // console.log("number count", numberCount);
    } else {
        return numberCount;
        isNumberMissing = false;
    }
  
  }
}

console.log("our final answer", findMissingNumber(hundredArray));

//BIG O RESULT: O(N)  SEARCHING AN ARRAY