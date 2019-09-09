/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {

    let ans = []

    for(let i = 0;i < numbers.length; i++){

        let num_1 = numbers[i]

        for(let j = 0;j < numbers.length; j++){

            let num_2 = numbers[j]

            if(num_1 + num_2 == target && i !== j){
                ans.push(i+1)
                ans.push(j+1)
                return ans
            }

        }
    }
    
};

let numbers = [2, 7, 11, 15],
    target = 9

console.log(twoSum(numbers,target))