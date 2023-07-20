// Problem link: https://leetcode.com/problems/add-digits/description/

function addDigits(num: number): number {
    if (num < 10){
        return num;
    }
    else{
        let sum = 0
        const stringNum = num.toString();
        for (let i = 0; i < stringNum.length; i++){
            sum += Number(stringNum.charAt(i));
        }
        return addDigits(sum)
    }
};