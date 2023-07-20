// Problem Link: https://leetcode.com/problems/sqrtx/

function mySqrt(x: number): number {
    for (let i = 0; i <= x; i++){
        if (i * i === x){
            return i;
        }
        if (i * i > x){
            return i - 1;
        }
    }
    return 0;
};