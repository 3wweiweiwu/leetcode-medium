# Longest Substring Without Repeating Characters

## Thought Process

| Intent                                                      | Solution                                                                                                                             | Note                   |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| Consequtive String within 1d array                          | Moving Window, left and right boundry, move R Pointer                                                                                | -                      |
| Non-repeating                                               | Map, store first occurance of each char                                                                                              | -                      |
| When we hit duplicate character, what need to be considered | 1. Map, 2. L and R Pointer                                                                                                           |                        |
| Hit Duplicate - R                                           | Continue to move right to explore new string                                                                                         |                        |
| Hit Duplicate - L                                           | Move to last occurance of duplication+1 because we know for sure it's not a duplicate otherwise it has been moved already            |                        |
| Hit Duplicate - Dict                                        | Remove all prior char before L pointer to keep dictionary clean otherwise it would contained unapperaed char form current str        | Time Complexity O(n^2) |
| How to reduce complexity from O(n^2) to O(n)?               | When hit duplicate, check if prior occurance is not within L,R boundry, it's a false alarm. This search against dictionary to delete | Time Complexity O(n^2) |

## Code

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maximumLength = 0
    let map = new Map()
    let l = 0
    for (let r = 0; r < s.length; r++) {
        let currentChar = s[r]
        if (!map.has(currentChar) || map.get(currentChar) < l) {
            // we have a new character that is not within map
            map.set(currentChar, r)
            let currentLength = r - l + 1
            maximumLength = Math.max(currentLength, maximumLength)
        }
        else {
            // we have a new character that is within map
            let lastIndex = map.get(currentChar)
            l = lastIndex + 1
            map.set(currentChar, r)

        }
        
        console.log(Array.from(map.keys()))
    }
    return maximumLength

};
let s = "pwwkew"
// s = "bbbbb"
console.log(lengthOfLongestSubstring(s))

//substring, start point, end with length
//console.log('s123'.substring(0, 4))
```
