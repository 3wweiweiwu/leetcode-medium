# Set Matrix Zero

## Intent of the Problem

* Minimize Memory Space Usage use space (O(1))

## Consideration

| Goal                                                                           | Solution                                                                                                                                                      |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Minimize Memory Space Usage to O(m+n)                                          | Use additional array to 0 state for row and column information                                                                                                |
| Minimize Memory Space Usage to O(1)                                            | Use Row and Column Header as marker to mark 0 state for entire row/column                                                                                     |
| Perserve Header Value when it is used as marker                                | We don't care all header value, we only care if top row or column contains 0 at beginning, then mark all cells top row/header 0 at the end even include (0,0) |
| Handle Special Case with (0,0) cause it will have impact on top row and column | We get this value at the beginning, and then mark top row and column toward the endinformatoin                                                                |

## Code

```js
var printMatrix = function (matrix) {
    //print output
    for (let i = 0; i < matrix.length; i++) {

        console.log(matrix[i].toString())

    }
    console.log('---------------')
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let xSize = matrix[0].length
    let ySize = matrix.length
    console.log('original value')
    printMatrix(matrix)

    //check if original point is 0
    let startingPointZero = matrix[0][0] == 0 ? true : false

    //check if top row has 0
    let topRowHas0 = false
    for (let i = 1; i < xSize; i++) {
        if (matrix[0][i] == 0) {
            topRowHas0 = true
            break
        }
    }

    //check if top column has 0
    let topColumHas0 = false
    for (let i = 1; i < ySize; i++) {
        if (matrix[i][0] == 0) {
            topColumHas0 = true
            break
        }
    }


    for (let i = 0; i < ySize; i++) {
        for (let j = 0; j < xSize; j++) {
            //check the top row or column and see if it is being marked as 0



            if (matrix[i][j] == 0) {
                //if current value is 0, mark cell from top row column as 0   

                matrix[0][j] = 0

                matrix[i][0] = 0
            }
        }

    }
    console.log('mark row and column header as zero')
    printMatrix(matrix)

    //if top row has 0, then mark the whole column to be 0
    //the trick is that we want to leave 0,0 otherwise once we mark 0 column to 0
    //the subsequent operation will mark rest rest of rows to 0. That will be inaccurate
    for (let i = 1; i < xSize; i++) {
        if (matrix[0][i] == 0) {
            for (let j = 0; j < ySize; j++) {
                matrix[j][i] = 0
            }
        }
    }
    console.log('mark columns with 0 header as 0')
    printMatrix(matrix)
    // if top column is 0, then mark the whole row to be 0
    // we don't worry about 0,0 because that's the last operation
    for (let i = 1; i < ySize; i++) {
        if (matrix[i][0] == 0) {
            for (let j = 0; j < xSize; j++) {
                matrix[i][j] = 0
            }
        }
    }
    console.log('mark rows with 0 header as 0')
    printMatrix(matrix)

    //handle first row and column except for (0,0)
    if (topColumHas0) {
        for (let i = 0; i < ySize; i++) {
            matrix[i][0] = 0

        }
    }
    console.log('mark top column to 0 if applicable')


    if (topRowHas0) {
        for (let i = 0; i < xSize; i++) {
            matrix[0][i] = 0
        }
    }
    console.log('handle top row to 0 if applicable')

    printMatrix(matrix)
    //handle (0,0)
    if (startingPointZero) {
        for (let i = 0; i < ySize; i++) {
            matrix[i][0] = 0
        }
        for (let i = 0; i < xSize; i++) {
            matrix[0][i] = 0
        }
    }
    console.log('handle top row and column header to 0 if starting point is 0')

    printMatrix(matrix)

};


setZeroes([[1], [0], [3]])
```
