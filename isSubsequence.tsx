// Problem link: https://leetcode.com/problems/is-subsequence/

function isSubsequence(s: string, t: string): boolean {
    let currIndex = -1
    if (s.length === 0){
        return true;
    }
    for (let i = 0; i < s.length; i++){
        const index = t.indexOf(s[i], currIndex + 1);
        if (index === -1){
            return false;
        }
        if (index > currIndex){
            currIndex = index;
        }
    }
    return true;
};