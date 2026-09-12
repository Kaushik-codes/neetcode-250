class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // Moore's Voting Algorithm
        let map = {};
        map["candidate"] = nums[0];
        map["count"] = 1;
        for (let i = 1; i < nums.length; i++) {
            if(nums[i]===map["candidate"]){
                map["count"]++;
            } else{
                if(map["count"]>0){
                    map["count"]--;
                }else{
                    map["candidate"]=nums[i];
                    map["count"]++;
                }
            }
        }
        return map["candidate"];
    }
}
