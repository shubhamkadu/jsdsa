// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}



// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; e.g.,
// factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1

function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
 }


// Write a function called productOfArray which takes in an array of numbers and
// returns the product of them all.

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}


// Write a function called recursiveRange which accepts a number and adds up all the
// numbers from 0 to the number passed to the function

function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
 }



// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and
// where every number thereafter is equal to the sum of the previous two numbers

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}



// Write a recursive function called reverse which accepts a string and returns
//  a new string in reverse.

function reverse(str){
  if(str.length<=1) return str
  return reverse(str.slice(1)) + str[0]
}


// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalidrome(str){
    if(str.length === 1) return true
    if(str.length ===2) return str[0] === str[1]
    if(str[0] === str.slice(-1)) return isPalidrome(str.slice(1,-1))
    return false
}

// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false

function someRecursive(arr,oddNum){
    if(arr.length ===0) return false
    if(oddNum(arr[0])) return true
    function oddNum(arr){
        return arr[0]%2
    }
    console.log(arr[0])
    return someRecursive(arr.slice(1),oddNum)
}

// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened

// test cases 

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }



// Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array. 

function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }
  

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers 
// in an object which may contain nested objects 


var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10


 //solution

  function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}


// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.


// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
  }


//  Write a function called stringifyNumbers which takes in an object and finds all of
// the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!


//   stringifyNumbers Solution


/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
  
  function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }


  
  
  // Write a function called collectStrings which accepts an object and
  // returns an array of all the values in the object that have a typeof string
  
  //   collectStrings Solution: Helper Method Recursion Version
  
  function collectStrings(obj) {
      var stringsArr = [];
   
      function gatherStrings(o) {
          for(var key in o) {
              if(typeof o[key] === 'string') {
                  stringsArr.push(o[key]);
              }
              else if(typeof o[key] === 'object') {
                  return gatherStrings(o[key]);
              }
          }
      }
   
      gatherStrings(obj);
   
      return stringsArr;
  }
//   collectStrings Solution: Pure Recursion Version
  
  function collectStrings(obj) {
      var stringsArr = [];
      for(var key in obj) {
          if(typeof obj[key] === 'string') {
              stringsArr.push(obj[key]);
          }
          else if(typeof obj[key] === 'object') {
              stringsArr = stringsArr.concat(collectStrings(obj[key]));
          }
      }
   
      return stringsArr;
      
  }








