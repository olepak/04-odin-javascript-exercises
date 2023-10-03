const removeFromArray = function (array, ...restValue) {
	let output = array.filter((element) => {
		return !restValue.includes(element);
	});
	return output;
};

console.log(removeFromArray([1, 2, 3, 4], 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
