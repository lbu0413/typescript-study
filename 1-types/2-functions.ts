{
	// Javascript
	function jsAdd(num1, num2) {
		return num1 + num2;
	}

	// Typescript
	function tsAdd(num1: number, num2: number): number {
		return num1 + num2;
	}

	// Javascript
	function jsFetchNum(id) {
		// code...
		// code..
		// code..
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	}

	// Typescript
	function tsFetchNum(id: string): Promise<number> {
		// code...
		// code..
		// code..
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	}
}
