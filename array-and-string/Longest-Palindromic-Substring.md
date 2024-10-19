# Longest Palindromic Substring

## Consideration Process

| Problem                                                   | Solution                                                                                                    | Note                                                                         |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| How to check if string is Palindromic                     | There is a center, it's either 1 char or 2 char, if we expand 1 char left and right, it should be identical |                                                                              |
| What's easiest way to check if substring is a palindromic | Consecutive String - Moving Window. From Longest to Shorted                                                 | O(n^3)                                                                       |
| How to simplify that further                              | Based on palindromic character, expand from center                                                          | O(n^2) Don't use substring to get center. Use index to create string manualy |

## Code

```js
/**
 * Check if string is palindrome
 * @param {string} s 
 */
var isStringPalindrome = function (s) {
    let l = 0
    let r = s.length - 1
    while (l <= r) {
        if (s[l] == s[r]) {
            l++
            r--
        }
        else {
            return false
        }

    }
    return true

}
/**
 * 
 * @param {string} s 
 * @param {number} l 
 * @param {number} m 
 * @param {number} r 
 */
var checkStrPalindromeByExpansion = function (s, l, currentStr, r) {
    let maximumStr = ''
    while (l >= 0 && r <= s.length && s[l] == s[r]) {
        l--
        r++
        if (currentStr.length > maximumStr.length) {
            maximumStr = currentStr
        }
        currentStr = s[l] + currentStr + s[r]
    }
    return maximumStr

}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maximumStr = ''
    let currentStr = ''
    let l = 0
    let r = 0
    for (let i = 0; i < s.length; i++) {
        //single character as middle point
        let currentMax = checkStrPalindromeByExpansion(s, i, s[i], i)
        if (currentMax.length > maximumStr.length) {
            maximumStr = currentMax
        }
        //two char as middle point
        currentMax = checkStrPalindromeByExpansion(s, i - 1, s[i - 1] + s[i], i)
        if (currentMax.length > maximumStr.length) {
            maximumStr = currentMax
        }
    }
    return maximumStr
};
```
