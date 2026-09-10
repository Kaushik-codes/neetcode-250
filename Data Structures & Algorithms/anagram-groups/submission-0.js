class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = new Map();
        for(let i=0;i<strs.length;i++){
            let word = strs[i].split("").sort().join("");
            if(!hash.has(word)){
                hash.set(word,[]);
            }
            hash.get(word).push(strs[i]);
        }
    return [...hash.values()];
    }
}
