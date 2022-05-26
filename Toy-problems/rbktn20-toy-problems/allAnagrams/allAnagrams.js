/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function (string) {
  var arr = [];
  var temp; //This is to swap around letter
  var check = false; //This should keep switching to true every time the function enters the loop but eventually when there's no reason to enter it the function will end
  var oldString = string; //Since we're changing the string I made this to check if it's the original... actually I ran out of time and energy now but realized this could be used for the base case potentially.

  for (var i = 0; i < string.length; i++) {
    arr.push(string);
    if (oldString === string) {
      temp = string[i];
      string[i + 1] = string[i];
      string[i] = temp;
      arr.push(string);
      check = true;
    }
  }

  if (check === false) {
    return arr;
  } else return allAnagrams(string);
};
