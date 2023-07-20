// Problem link: https://leetcode.com/problems/excel-sheet-column-number/

function convertCharToNumber(str: string){
    return str.charCodeAt(0) - 96
}
// translate a character to it's ASCII? 
function titleToNumber(columnTitle: string): number {
    const lowercase = columnTitle.toLowerCase();
    let exponent = 1;
    // find number of 
    let sum = convertCharToNumber(lowercase[lowercase.length - 1]);
    for(let i = columnTitle.length - 2; i >= 0; i-=1){
        sum += (26 ** exponent) * convertCharToNumber(lowercase[i])

        exponent += 1
    }
    return sum;
};

// A = 1
// AB = 1 * 26 + 2
// ZY = 26 * 26 + 25
// ZZY = 26 * 26 + 26 * 26 + 25