// Problem Link: https://leetcode.com/problems/power-of-three/

function isPowerOfThree(n: number): boolean {
    const power = Math.log(n) / Math.log(3)
    const remainder = Math.abs(power - Math.round(power))
    return remainder <= 0.00000000001
};