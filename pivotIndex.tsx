// Problem Link: https://leetcode.com/problems/find-pivot-index/

function returnSumOfArray(nums: number[]): number{
    return nums.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);
}

function pivotIndex(nums: number[]): number {
    let leftSum = 0;
    let rightSum = returnSumOfArray(nums.slice(1));
    if (leftSum === rightSum){
        return 0;
    }
    for (let i = 1; i < nums.length; i++){
        leftSum = returnSumOfArray(nums.slice(0, i));
        rightSum = returnSumOfArray(nums.slice(i+1))
        if (leftSum === rightSum){
            return i;
        }
    }
    return -1;
};