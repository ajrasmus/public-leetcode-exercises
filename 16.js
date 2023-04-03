/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let i = 0;
    let triples = [];
    nums.sort((a,b) => a-b);

    while (i < nums.length - 2 && nums[i] < 1) {
        let a = nums[i];
        let sum = -a;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            if (nums[left] + nums[right] < sum) {
                left++;
            } else if (nums[left] + nums[right] > sum) {
                right--;
            } else {
                if (nums[left] != nums[left-1] || nums[right] != nums[right+1]) {
                    triples.push([a, nums[left], nums[right]]);
                }
                left++;
                right--;
            }
        }

        while (nums[i] == a && i < nums.length) {
            i++;
        }
    }

    return triples;
};
