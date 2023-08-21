const removeFromArray = function (array, value1) {
	let output = array.filter((element) => {
		return element !== value1;
	});
	return output;
};

// Do not edit below this line
module.exports = removeFromArray;
