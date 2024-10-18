# Group Anagram

## Solution

| Challenge                     | Solution                                                          | Note                                      |
| ----------------------------- | ----------------------------------------------------------------- | ----------------------------------------- |
| Naive Solution                | All possible mutation of each words, save them into dictionary    | time complexity (O(n^n))                  |
| What's Anagram by Definition? | Anagrams are two words consists of equal sets of characters       |                                           |
| How to use this character     | Sort the string at first, use sorted string as key for dictionary | The time complexity for sort() is kLog(k) |

## Code

```js
/**

* @param {string[]} strs
* @return {string[][]}
 */
var groupAnagrams = function (strs) {
    /**@type {Object.<string,Array<string>>}*/
    let dictResult = {}
    for (let i = 0; i < strs.length; i++) {
        let item = strs[i]
        //create hash for each element by it
        let sortedWord = item.split("").sort().join()
        if (dictResult[sortedWord] == null) {
            dictResult[sortedWord] = []
        }
        dictResult[sortedWord].push(item)
    }

    //convert dict to array output
    let lsResult = []
    Object.keys(dictResult).forEach(key => {
        lsResult.push(dictResult[key])
        console.log(dictResult[key].toString())
    })

    return lsResult
};
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams(strs))
//console.log('s1a'.split("").sort().join(''))
```
