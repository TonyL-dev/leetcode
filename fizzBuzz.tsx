// Problem Link: https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n: number): string[] {
    const arr:string[] = [];

    for (let i = 1; i <= n; i+=1){
        if(i % 5 === 0 && i % 3 === 0){
            arr.push('FizzBuzz');
        }
        else if(i % 5 === 0){
            arr.push('Buzz')
        }
        else if(i % 3 === 0){
            arr.push('Fizz')
        }
        else{
            arr.push(i.toString())
        }
    }
    return arr;
};