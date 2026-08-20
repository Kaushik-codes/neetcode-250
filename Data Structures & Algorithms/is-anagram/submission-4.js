class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = {};
        if (s.length !== t.length) return false;
        for (let i = 0; i < s.length; i++) {
            map[s[i]] = (map[s[i]] || 0) + 1;
        }

        for (let i = 0; i < t.length; i++) {
            if (t[i] in map) {
                map[t[i]]--;
                if (map[t[i]] < 0) {
                    // handle negative count
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    }
}
