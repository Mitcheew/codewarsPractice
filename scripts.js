//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, and u as vowels for this Kata.

//The input string will only consist of lower case letters and/or spaces.
function getCount(str = document.getElementById("str").value) {
    var vowelCount = 0;
    console.log(str, str.length)
    for (let i = 0; i < str.length; i++) {
        if (/[aeiou]/.test(str[i])) {
            vowelCount++
        }
    }
    document.getElementById("result").innerHTML = vowelCount;
}
//---------------------------------------------------------------------------------
// Suppose you have 4 numbers: '0', '9', '6', '4' and 3 strings composed with them:

// s1 = "6900690040"
// s2 = "4690606946"
// s3 = "9990494604"
// Compare s1 and s2 to see how many positions they have in common: 0 at index 3, 6 at index 4, 4 at index 8 ie 3 common positions out of ten.

// Compare s1 and s3 to see how many positions they have in common: 9 at index 1, 0 at index 3, 9 at index 5 ie 3 common positions out of ten.

// Compare s2 and s3. We find 2 common positions out of ten.

// So for the 3 strings we have 8 common positions out of 30 ie 0.2666... or 26.666...%

// Given n substrings (n >= 2) in a string s our function pos_average will calculate the average percentage of positions that are the same between the (n * (n-1)) / 2 sets of substrings taken amongst the given n substrings. It can happen that some substrings are duplicate but since their ranks are not the same in s they are considered as different substrings.

// The function returns the percentage formatted as a float with 10 decimals but the result is tested at 1e.-9 (see function assertFuzzy in the tests).

// Example:
// Given string s = "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490" composing a set of n = 10 substrings (hence 45 combinations), pos_average returns 29.2592592593.

// In a set the n substrings will have the same length ( > 0 ).
function posAverage(s = document.getElementById("str").value) {
    // your code
    let common = 0;
    let total = 0;
    s = s.split(', ')
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            for (let k = i + 1; k < s.length; k++) {
                total++
                if (s[k] && s[i][j] === s[k][j]) {
                    common++
                }
            }

        }
    }
    document.getElementById("result").innerHTML = (common / total * 100).toFixed(10);
}

// takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength(array = document.getElementById("arr").value) {
    document.getElementById("result").innerHTML = array.split(', ').sort((a, b) => a.length - b.length).join(', ');

};

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function multiples(number = Number(document.getElementById("str").value)) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    document.getElementById("result").innerHTML = sum;
}

// Given an integral number, determine if it's a square number:

let isSquare = function (n = Number(document.getElementById("str").value)) {
    document.getElementById("result").innerHTML = Math.sqrt(n) % 1 === 0;
    // if ( n % rt === 0 || n === 0){
    // return true;
    // }  else {
    //   return false
    // }
}

//   You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password = document.getElementById("str").value) {
    document.getElementById("result").innerHTML = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[-!$%^&*()_+|~=`\\#{}\[\]:";'<>?,.\/ ]).{6}/g).test(password);

}

// you are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s = document.getElementById("str").value) {
    let mid = (s.length - 1) / 2
    if (mid % 1 === 0) {
        document.getElementById("result").innerHTML = s[mid]
    }
    else {
        mid = Math.floor(mid)
        document.getElementById("result").innerHTML = s[mid] + s[mid + 1]
    }
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num, count = 0) {
    numString = num.toString()
    numArr = numString.split('')
    let sum = 1
    for (let i = 0; i < numArr.length; i++) {
        sum *= Number(numArr[i])
    }
    console.log(sum)
    if (sum > 9) {
        count++
        return persistence(sum, count)
    } else if (numArr.length === 1) {
        return count
    } else {
        count++
        return count
    }
}
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words = document.getElementById("str").value) {
    document.getElementById("result").innerHTML = words.split(' ').sort(function (a, b) {
        return (a.match(/\d/) - (b.match(/\d/)));
    }).join(' ');
    
}