/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn, ...args) {
	let returnArr = []
	arr.forEach((element, fn, args) => {
		if (fn(element, args)) {
			returnArr.push(element)
		}
	})
	return returnArr
}
