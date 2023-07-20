// Problem link: https://leetcode.com/problems/roman-to-integer/description/

function romanToInt(s: string): number {
    let num = 0;

    // go through the different roman representations and convert it to numeric
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'M'){
            num += 1000;
        }
        if(s[i] === 'D'){
            num += 500;
        }

        // if it is a C, then I need to check what the next character is to see if it's a D or M
        if(s[i] === 'C'){
            if(i + 1 < s.length){
                if(s[i+1] === 'D'){
                    num += 400;
                    i += 1;
                    continue;
                    
                }
                if(s[i+1] === 'M'){
                    num += 900;
                    i += 2;
                }
                else{
                num += 100
                }
            }
            else{
            num += 100;
            }
        }
        if(s[i] === 'L'){
            num += 50;
        }

        // if it is a X, then I need to check what the next character is to see if it's a L or C
        if(s[i] === 'X'){
            if(i + 1 < s.length){
                if(s[i+1] === 'L'){
                    num += 40;
                    i += 1;
                    continue;
                    
                }
                if(s[i+1] === 'C'){
                    num += 90;
                    i += 2;
                }
                else{
                num += 10
                }
            }
            else{
            num += 10;
            }
        }
        if(s[i] === 'V'){
            num += 5;
        }

        // if it is an I, then I need to check what the next character is to see if it is a V or X
        if(s[i] === 'I'){
            if(i + 1 < s.length){
                if(s[i+1] === 'V'){
                    num += 4;
                    i += 1;
                    continue;
                    
                }
                if(s[i+1] === 'X'){
                    num += 9;
                    i += 2;
                }
                else{
                num += 1;
                }
            }
            else{
            num += 1;
            }
        }
    }
    return num;
    
};