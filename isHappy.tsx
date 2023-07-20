// Problem link: https://leetcode.com/problems/happy-number/

function isHappy(n: number): boolean {
    const numsWeHaveSeen = new Map()

    let replacedNum = n;
    while(true){
        const stringedNum = String(replacedNum);
        let currSum = 0;
        for (let i = 0; i < stringedNum.length; i++){
            currSum += Number(stringedNum[i])**2;
        }
        if (currSum === 1){
            return true;
        }
        replacedNum = currSum;


        if(numsWeHaveSeen.has(replacedNum)){
            return false;
        }

        numsWeHaveSeen.set(currSum, currSum)
    }
};