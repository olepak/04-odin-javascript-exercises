const sumAll = function (start, end) {
	let sum = 0;
	if (end > start) {
		for (let j = end; j >= start; j--) {
			sum += j;
		}
	} else
		for (let i = start; i <= end; i++) {
			sum += i;
		}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
