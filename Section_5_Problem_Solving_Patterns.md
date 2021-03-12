## Focus on Improving your Approach 
# Master Common Patterns!!

###  Common Patterns:
* Frequency Counter
* Multiple Pointer
* Sliding Window
* Divide and Conquer

#### Frequency Counter
1. Use an object or set to collect values and value frequencies
2. Can help to avoid nested loops and (O(N 2) operations with arrays/strings)

Example problem:  write a function called same which accepts two arrays.  The function should return true if every value in the arry has it's corresponding value squared in the second array.

same ([1 , 2, 3], [4, 1, 9]) output TRUE
normal approach: check array length, then use nested loops to search for squared values, then use splice to remove 'found' values. return boolean value based on condition.  *The result is quadratic time*

Updates: 
```javascript
const same = () => {
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for(let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2))
  }
}
```

```javascript
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exist, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //cant find letter or letter is zero, then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1;
    }
  }
  return true
}