const convertToCelsius = function (F) {
	return Math.floor((F - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (C) {
	return Math.floor((C * (9 / 5) + 32) * 10) / 10;
};
console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
