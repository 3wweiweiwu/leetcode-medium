# Increasing Triplet Sequence

## Solution

| Problem                            | Solution                                                                            | Note         |
| ---------------------------------- | ----------------------------------------------------------------------------------- | ------------ |
| What's the Nautre of This problem? | N(1)<N(2)<N(3) Exists with Sequential Fashion                                       |              |
| Solution                           | Let's start a greedy                                                                |              |
| How to implement greedy?           | From left to rightn1 must be smallest, n2 must be 2nd smalleest, n3 must be biggest | n1= Infinity |

## Code

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let a = Infinity
    let b = Infinity

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (a > n) {
            a = n
        }
        else if (b > n && a < n) {
            b = n
        }
        else if (a < b && b < n) {
            console.log(a, b, n)
            return true
        }
    }
    return false
};
```
