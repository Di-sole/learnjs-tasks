function pow(x, n) {
	return x ** n;
}

let x = prompt('x?');
let n = prompt('n?', 'только целые значения от 1');
alert(pow(x, n));