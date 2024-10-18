function rle(n) {
    let result = []

    for (let currentDigit of n) {
        if (result.length == 0 || result[result.length - 1][0] != currentDigit) {
            result.push([currentDigit, 1])
        }
        else {
            result[result.length - 1][1]++
        }
    }


    // construct new number based on list
    let fin = ''
    for (let item of result) {
        fin += item[1].toString() + item[0].toString()
    }
    return fin
}

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {

    let current = '1'
    if (n == 1) return current
    for (let i = 0; i < n - 1; i++) {
        current = rle(current)
        console.log(current)
    }
    return current.toString()

};
// rle(31131211131221)
countAndSay(10)