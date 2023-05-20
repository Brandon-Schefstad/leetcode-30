/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
	let calls = -1
	return function () {
		calls += 1
		return n + calls
	}
}

const counter = createCounter(-2)
console.log(counter()) // 10
console.log(counter()) // 10
