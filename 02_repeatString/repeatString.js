const repeatString = function (string, num) {
	let output = "";
	let error = "ERROR";
	if (num < 0) {
		return error;
	}
	if (num == 0) {
		return output;
	}
	for (let i = 0; i < num; i++) {
		output += string;
	}
	return output;
};

// Do not edit below this line
module.exports = repeatString;
