function add (a, b) {
	return (a + b);
}

function subtract (a, b) {
	return (a - b);
}

function sum (array) {
	return array.reduce((current, total) => total + current, 0);
}

function multiply (array) {
	return array.length
	? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	if (a===0) {
		return 1;
	}
	return a * factorial (a-1);
}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}