/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
	let returnVal = init
	nums.forEach((element) => {
		returnVal = fn(returnVal, element)
	})
	return returnVal
}
