# Objects, big O and Performance

### Objects: What are they, when to use them?
1. Key value pairs
2. Unordered
3. Use when you don't need order
4. When you need fast access/insertion/removal/update => **constant time for most cases**
5. searching the entire object is linear time

```javascript
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4]
}

```

### Big O of Objects
* Insertion - O(1)
* Removal - O(1)
* Searching O(N)
* Accessing - O(1)

### Big O of Object Methods
* Object.keys O(N)
* Object.values O(N)
* Object.entries O(N)
* hasOwnProperty - O(1)  boolean return


# Arrays and Performance

### Array benefits
1. Use them specifically if intrensic order is needed
2. This can cost big for insertion and removal in Big O

### Big O of Arrays
* Insertion - depends on where (end/push() is O(1))(unshift/beginning O(N) changes each element)
* Removal - (shift/beginning O(N) changes each element)(end/pop() is O(1))
* Searching - O(N)
* Access - O(1)

### Array Method Performance
* push/pop() - O(1)
* shift/unshift() - O(N)
* concat, splice, slice() - O(N)
* forEach/map/filter/reduce/High Order Functions - O(N)
* sort - O(N * log N)