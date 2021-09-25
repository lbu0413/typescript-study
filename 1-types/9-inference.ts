{
	// type inference
	// 타입을 명시하지 않았음에도 타입을 유추하는 것.

	let text = "hello";
	let text2: string = "hello";

	function print(message) {
		console.log(message);
	}

	function print2(message: string) {
		console.log(message);
	}

	function add(x: number, y: number) {
		return x + y;
	}

	const result = add(1, 2);
}
