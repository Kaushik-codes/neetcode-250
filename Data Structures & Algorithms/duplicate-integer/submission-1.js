class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashMap = {};
        for(let i=0;i<nums.length;i++){
            if(hashMap[nums[i]]){
                return true
            }
            // The key is the number you're looking for. The value can be anything.
            hashMap[nums[i]] = true;
        }
        return false
    }
}
