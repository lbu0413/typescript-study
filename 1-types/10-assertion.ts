{
	// Type Assertions
	// type assertion을 사용하는건 권장되지는 않음.

	function jsStrFunc(): any {
		return "hello";
	}

	const result = jsStrFunc();
	console.log((result as string).length);
	console.log((<string>result).length);

	// ERROR
	const wrong: any = 5;
	console.log((wrong as Array<number>).push(1));

	function findNumbers(): number[] | undefined {
		return undefined;
	}
	const numbers = findNumbers();
	numbers!.push(2);
}
