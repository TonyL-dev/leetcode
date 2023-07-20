// Problem link: https://leetcode.com/problems/isomorphic-strings/

function isIsomorphic(s: string, t: string): boolean{
    const indexMap = new Map();
    let newStr = s;
    for (let i = 0; i < s.length; i++){
        // check if the index is not present already
        if (!indexMap.has(i)){
            const currChar = t[i];
            const replaceChar = newStr[i]
            const values = [...indexMap.values()];
            if (!values.includes(currChar)){
                for (let j = i; j < s.length; j++){
                    // if the character we are trying to replace exists
                    if (newStr[j] === replaceChar && !indexMap.has(j)){
                        indexMap.set(j, currChar);
                        newStr = newStr.substring(0, j) + currChar + newStr.substring(j+1);
                    }
                    
                }
            }
        }
    }
    if (indexMap.size !== s.length){
        return false;
    }
    return t === newStr;
}