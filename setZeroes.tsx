// Problem Link: https://leetcode.com/problems/set-matrix-zeroes/description/

/**
 Do not return anything, modify matrix in-place instead.
 */
 // need some way to change the columns above 
 function setZeroes(matrix: number[][]): void {
    const columns = {}
    let rows: number[] = []
    // A row of 0's
    const zeros = Array(matrix[0].length).fill(0)

    // tracks whether a 0 was found in a row, that way after the row was checked 
    let foundRow = false;

    // go through rows and cols
    for(let row = 0; row < matrix.length; row+=1){
        for(let col = 0; col < matrix[row].length; col+=1){
            // if we found a 0 in a row, track which row and col it was
            if (matrix[row][col] === 0){
                rows.push(row);
                columns[col] = col;
                foundRow = true;
            }
            if (col in columns){
                matrix[row][col] = 0;
            }
        }
        if(foundRow){
            matrix[row] = zeros
            foundRow = false;
        }
    }

    //now check for 0's that are found not in the first row, meaning the column values above aren't 0 yet
    if(rows.length !== 0){
        for(let i = 0; i < rows[rows.length - 1]; i+=1){
            // change to 0 and columns
            Object.keys(columns).forEach(element => matrix[i][element] = 0)
        }
    }
};