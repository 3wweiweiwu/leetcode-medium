# Three Sum

## Consideration

| Intent                                          | Solution                                                                           | Note |
| ----------------------------------------------- | ---------------------------------------------------------------------------------- | ---- |
| Naive Solution with High Time Complexity O(n^3) | Three for loop                                                                     | -    |
| Reduce Nested Loop to get O(n^2)                | Using sort and left/right Pointer                                                  |      |
| Get Unique Value Only                           | Use set to hash string of array, toward the end, convert that back to array output |      |

* **Sort the Array**: First, sort the array to make it easier to skip duplicates.
* **Iterate Over the Array**: Use one loop to select the current number, then use two additional pointers to find two other numbers that make the sum zero.
* **Use Two Pointers** for the Other Two Numbers: For each element in the array, use a left pointer starting just after the current element  and a right pointer at the end of the array. Adjust these pointers to find two numbers whose sum is the negative of the current number.
* **Skip Duplicates**: After processing each triplet, skip the duplicates in the array by adjusting the pointers.
* **Use a Set to Store Unique Triplets**: To ensure that only unique triplets are added, you can convert each triplet to a string and add it to a set. At the end, convert these strings back to arrays.

## Code

```js

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    /**@type {number[]} */
    let lsResult = []
    let sortedNums = nums.sort((a, b) => a - b)
    /**@type {Set<string>} */
    let setResult = new Set()
    for (let i = 0; i < nums.length - 2; i++) {
        let firstElement = sortedNums[i]
        let remain = 0 - firstElement

        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            let lNum = sortedNums[l]
            let rNum = sortedNums[r]
            if (lNum + rNum == remain) {

                let currentvalue = [firstElement, lNum, rNum].toString()

                setResult.add(currentvalue)
                l++
                r--
            }
            else if (lNum + rNum > remain) {
                r--
            }
            else if ((lNum + rNum < remain)) {
                l++
            }
        }




    }

    setResult.forEach(item => {
        let tempResult = item.split(",").map(item => Number.parseInt(item))
        lsResult.push(tempResult)
        console.log(item)
    })
    return lsResult
};
let input = [-1, 0, 1, 2, -1, -4]
let result = threeSum(input)
console.log()
```
