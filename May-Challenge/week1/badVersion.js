/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let mid = 0;
        let left = 1;
        let right = n;
        while (left < right) {
            mid = Math.floor(left + (right-left) /2);
            if (!isBadVersion(mid)) {
               left = mid + 1; 
            } else {
                right = mid;
            }
        }
        return left;
    };
};