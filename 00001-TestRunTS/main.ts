function iterateAndModify(array : Array<number>, lambda : (array : Array<number>, index : number) => void) : void {
	for (let index = 0; index < array.length; index++) {
		lambda(array, index);
	}
}

function main() {
	let arrayOfNumbers: Array<number> = [0, 1, 2, 3, 4, 5, 10.5];

	let square = (array : Array<number>, index : number) :  void => {
		array[index] = array[index] * array[index]; 
	};

	iterateAndModify(arrayOfNumbers, square);

	console.log(arrayOfNumbers);
}

main();
