// Problem link: https://leetcode.com/problems/running-sum-of-1d-array/

function runningSum(nums: number[]): number[] {
    let runningSum = 0;
    const arr = []
    for (let i = 0; i < nums.length; i++){
        runningSum += nums[i];
        arr.push(runningSum);
    }
    return arr;
};