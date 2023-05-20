/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn, ...args) {
	let returnArr = []
	arr.forEach((element, index) => {
		returnArr.push(fn(element, index))
	})
	return returnArr
}
