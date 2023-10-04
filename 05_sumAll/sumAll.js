const sumAll = function (start, end) {
	let sum = 0;
	if (start > end) {
		for (let j = start; j >= end; j--) {
			sum += j;
		}
	} else if (
		typeof start !== "number" ||
		typeof end !== "number" ||
		start < 0 ||
		end < 0
	) {
		return "ERROR";
	} else
		for (let i = start; i <= end; i++) {
			sum += i;
		}
	return sum;
};
console.log(sumAll(10, 1));

// Do not edit below this line
module.exports = sumAll;
