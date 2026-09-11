class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let x=0,y=0;
        for(let i=0;i<nums.length;i++){
            if(nums[x]!==val){
                nums[y] = nums[x];
                y++;
            }
            x++;
        }
        return y;
    }
}
