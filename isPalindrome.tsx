// Problem link: https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
    const stringNum = x.toString();

    // only need to check up to half of the number
    for (let i = 0; i <= stringNum.length/2; i++){
        if (stringNum.charAt(i) != stringNum.charAt(stringNum.length - 1 - i)){
            return false;
        }
    }     
    return true;
}
