// Problem link: https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
    let dict = {}
    let majorityElement = Math.floor(nums.length / 2);

    for (let i = 0; i <= nums.length; i+=1){
        if (nums[i] in dict){
            dict[nums[i]] = dict[nums[i]] + 1
            // as soon as the number is present more than half, return
            if (dict[nums[i]] > majorityElement){
                return nums[i]
            }
        }
        else{
            dict[nums[i]] = 1
        }
    }
    return nums[0]
};