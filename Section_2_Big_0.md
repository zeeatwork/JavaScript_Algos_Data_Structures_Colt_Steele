# Big O Notation!!!

#### *This section includes some math*

### Objectives
1. Define Big O
2. Define time and space complexity
3. Define logorithm
4. Why do we need them
5. Simplify Big O Expressions

##### Section 1: Motivate the need for big O Notation
1. Big O is a system that allows us to analyze/classify/compare code solutions by efficiency
  * Generalized labels/grades for comparison
  * Allows a objective discussion of tradeoffs (time, cost, etc.)
  * Helps to debug slow code by pinpointing inefficient points.

##### Timing our Code
```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i  <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(6)); //21

const newAddUp = n => n * (n + 1) / 2;

console.log(newAddUp(6)); //21
```
**What does *'better'* mean?**
1. faster?
  * built-in timing functions (performance.now())
2. memory intensive?
3. readable?

```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i  <= n; i++) {
    total += i;
  }
  return total;
}
let t1 = performance.now();
addUpTo(1000000000);
let t2 = perfomance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);  //execution time from window opening until completion
//Time Elapsed: 0.8092799999994459 seconds.
//operations bounded by an multiple of n O(n)

function addUpToSecond(n) {
  return n * (n + 1) / 2;
} //Always 3 operations O(1)
let t1 = performance.now();
newAddUp(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);


console.log(newAddUp(6));
```

**The Problem with time**
1. varies by machine
2. varies with each run on the *same* machine
3. for fast algorithms, speed measurements may not be precise enough


**If not time, then what?**
1. count the number of simple operations
  * math operations (multipl, division, addition, subtration, assigments)
  * *number of iterations in a loop*
  * increments increase operations exponentially!
2. Big O study the trend of your algo (as n grows...)  
  * [Performance Tracker](https://rithmschool.github.io/function-timer-demo/)


  **What is Big-o?**
  1. Formalized fuzzy counting
    * Broad trends
  2. Relationship between input size and runtime in broad trends
  #### Formal Definition
  O(f(n)) :   the number of simple operations the computer has to do is eventually less than the contanti times f(n), as n increases
* Big O is worse case scenario
  * f(n) linear: (f(n) = n)
    * as n scales the runtime scales- flat line
  * f(n) quadratic: (f(n) = n*n)
    * as n grows, the runtime squares
  * f(n) constant: (f(n) = 1)
    * runtime is constant/ no impact
  * f(n) other(?): ????


### Example UpAndDown
```javascript
function countUpAndDown(n) {
  console.log("Going Up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
   console.log("At the top! \nGoing down...");
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
  console.log("Back down. Bye");
}