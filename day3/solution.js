/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
	let currentVal = init
	return {
		increment() {
			currentVal += 1
			return currentVal
		},
		decrement() {
			currentVal -= 1
			return currentVal
		},
		reset() {
			currentVal = init
			return currentVal
		},
	}
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
