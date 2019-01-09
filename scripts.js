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
    array = array.split(', ')
    array = array.sort((a, b) => a.length - b.length)
    array = array.join(', ')
    document.getElementById("result").innerHTML = array;

};