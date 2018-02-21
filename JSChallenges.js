/*
Write a JavaScript function that generates all combinations of a string.
Example string: 'dog'
Expected Output: d,o,do,g,dg,og,dog
*/

function combinator(s) {
  list_of_strings = new Array();
  for (i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      list_of_strings.push(s.slice(i, j));
    }
  }
  return list_of_strings;
}

document.write(combinator("dog"));

/*
 Write a script function that returns a passed string with
 letters in alphabetical order.
 */

function alphabet_order(str) {
  return str.split('').sort().join('');
}
console.log(alphabet_order("knickknack"));

/*
Write a script that accepts a string as a parameter and converts the
first letter of each word of the string in upper case.
*/
function uppercase(str) {
  var array1 = str.split(' ');
  var newarray1 = [];

  for (var x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("These thousand tricky tongue twisters trip thrillingly off the tongue."));

/*
Write a script that accepts a string as a parameter and find the
longest word within the string.
*/
function find_longest_word(str) {
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for (var x = 1; x < array1.length; x++) {
    if (result.length < array1[x].length) {
      result = array1[x];
    }
  }
  return result;
}
console.log(find_longest_word('If a dog chews shoes, whose shoes does he choose?'));

/*
Write a script that accepts a string as a parameter and counts the number of vowels
within the string.
*/
function vowel_count(str1) {
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;

  for (var x = 0; x < str1.length; x++) {
    if (vowel_list.indexOf(str1[x]) !== -1) {
      vcount += 1;
    }

  }
  return vcount;
}
console.log(vowel_count("Four fine fresh fish for you"));

/*
Write a JavaScript function which will take an array of numbers and find the
second lowest and second greatest numbers, respectively.
*/
function Second_Greatest_Lowest(arr_num) {
  arr_num.sort(function(x, y) {
    return x - y;
  });
  var uniqa = [arr_num[0]];
  var result = [];

  for (var j = 1; j < arr_num.length; j++) {
    if (arr_num[j - 1] !== arr_num[j]) {
      uniqa.push(arr_num[j]);
    }
  }
  result.push(uniqa[1], uniqa[uniqa.length - 2]);
  return result.join(',');
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));

/*
Write a JavaScriptscript to get the number of occurrences of each letter in specified string
*/
function Char_Counts(str1) {
  var uchars = {};
  str1.replace(/\S/g, function(l) {
    uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);
  });
  return uchars;
}
console.log(Char_Counts("Three thin thinkers thinking thick thoughtful thoughts."));

/*
Write a function that accepts two integers and displays the larger.
*/
var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
} else
if (parseInt(num2, 10) > parseInt(num1, 10)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
} else {
  console.log("The values " + num1 + " and " + num2 + " are equal.");
}

/*
Write a JavaScript program to construct the following pattern, using a nested for loop.
*/
var x, y, chr;
for (x = 1; x <= 6; x++) {
  for (y = 1; y < x; y++) {
    chr = chr + ("$");
  }
  console.log(chr);
  chr = '';
}

/*
Write a script to check whether a string is blank or not.
*/
is_Blank = function(input) {
  if (input.length === 0)
    return true;
  else
    return false;
}
console.log(is_Blank(''));
console.log(is_Blank('456'));

/*
Write a script to split a string and convert it into an array of words.
*/
string_to_array = function(str) {
  return str.trim().split(" ");
};
console.log(string_to_array("Good Job!"));

/*
 Write a script to remove specified number of characters from a string.
 */
truncate_string = function(str1, length) {

  if ((str1.constructor === String) && (length > 0)) {
    return str1.slice(0, length);
  }
};
console.log(truncate_string("That was a mistake", 8));

/*Write a simple script to join all elements of a given array into a string.*/
myVeg = ["Squash", "Tomatoes", "Beans", "Pumpkin"];
console.log(myVeg.toString());
console.log(myVeg.join(''));

/*
Write a script to sort the items of an array.
*/
var arr1 = [-4, -9, 4, 7, 12, 8, 0, -2];
var arr2 = [];
var min = arr1[0];
var pos;
max = arr1[0];
for (i = 0; i < arr1.length; i++) {
  if (max < arr1[i]) max = arr1[i];
}

for (var i = 0; i < arr1.length; i++) {
  for (var j = 0; j < arr1.length; j++) {
    if (arr1[j] != "x") {
      if (min > arr1[j]) {
        min = arr1[j];
        pos = j;
      }
    }
  }
  arr2[i] = min;
  arr1[pos] = "x";
  min = max;
}
console.log(arr2);

/*
Write a script to shuffle an array.
*/
function shuffle(arra1) {
  var ctr = arra1.length,
    temp, index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

/*

*/
function _keys(obj) {
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj)
    if (_.has(obj, key)) keys.push(key);
  return keys;
}

function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}
console.log(_keys({
  pink: "#ff0872",
  blue: "#0883ff",
  orange: "#ff8308"
}));