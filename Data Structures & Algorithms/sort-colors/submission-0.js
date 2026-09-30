class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let curr = 0;
        let low = 0;
        let high = nums.length - 1;

        while(curr<=high){
            if(nums[curr] == 0){
                [nums[curr],nums[low]] = [nums[low],nums[curr]];
                low++;
                curr++;
            }
            else if(nums[curr] == 2){
                [nums[high],nums[curr]] = [nums[curr],nums[high]];
                high--;
            }
            else{
                curr++;
            }
        }
        return nums
    }
}
