// Problem: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

function strStr(haystack: string, needle: string): number {
    // the found variable tracks if a possible match was found
    let found = false;
    for(let i = 0; i < haystack.length - needle.length + 1; i+=1){
        found = false;
        // the first character matches, need to check if the rest do
        if (haystack[i] === needle[0]){
            found = true;

            // if one character does not match, then the word was not found and no point in checking the rest of the string
            for (let j = 1; j < needle.length; j++ ){
                if (haystack[i + j] !== needle[j]){
                    found = false;
                    break;
                }
            }
            if (found){
                return i;
            }
        }
    }
    return -1;
};