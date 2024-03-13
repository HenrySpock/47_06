/** product: calculate the product of an array of numbers. */

function product(nums) {
// identify base cases 
if (nums.length === 0) {return 1}
if (nums.length === 1) {return nums[0]}

// reduce the problem - say an array [2,3,4]: multipley 2 * [3, 4]; multiply 2 * 3 * [4]
return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
// identify base cases 
if (words.length === 0) {throw new Error('Empty array.')}
if (words.length === 1) {return words[0].length}

//Recursion
return Math.max(words[0].length, longest(words.slice(1)))
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
// identify base cases 
if (str.length === 0) {return 0}
if (str.length <= 2 && str.length > 0) {return str[0]}

// Recursive call:
return str[0] + everyOther(str.slice(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
// identify base cases 
if (str.length === 0 || str.length === 1) {return true;}

// recursive call
return str[0] === str[str.length-1] && isPalindrome(str.slice(1, -1))
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
// identify base cases 
if (arr.length === 0) {return -1;}
if (arr[0] === val) {return 0} // if val is first index in array
if (arr[arr.length-1] === val) {return arr.length -1;} // if val is last index in array
// Recursive call on teh subarray, excluding the last element
let indexInRestOfArray = findIndex(arr.slice(1, -1), val);

// Recursive call
return  indexInRestOfArray === -1 ? -1 : 1 + indexInRestOfArray;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
// identify base cases
if (str.length <= 1) return {str}

return str[str.length -1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArr = []

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      stringsArr = stringsArr.concat(gatherStrings(obj[key]));
    }
  }

  return stringsArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

  //Helper function for recursive binary search
  function search(left, right) {
    // Base case: value not found
    if (left > right) {
      return -1;
    }

    // Calculate the middle index
    let mid = Math.floor((left + right) /2);

    // Check if the middle element is the target value
    if (arr[mid] === val) {
      return mid;
    }

    // If the value is less than the middle element, search left half
    if (arr[mid] > val) {
      return search(left, mid -1);
    }

    // If the value is greater than the middle element, search right half
    return search(mid +1, right);
  }

  // Initial call to the helper function setting left and right
  return search(0, arr.length -1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
