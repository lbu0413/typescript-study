{
	// // Javascript
	// function jsAdd(num1, num2) {
	// 	return num1 + num2;
	// }

	// // Typescript
	// function tsAdd(num1: number, num2: number): number {
	// 	return num1 + num2;
	// }

	// // Javascript
	// function jsFetchNum(id) {
	// 	// code...
	// 	// code..
	// 	// code..
	// 	return new Promise((resolve, reject) => {
	// 		resolve(100);
	// 	});
	// }

	// // Typescript
	// function tsFetchNum(id: string): Promise<number> {
	// 	// code...
	// 	// code..
	// 	// code..
	// 	return new Promise((resolve, reject) => {
	// 		resolve(100);
	// 	});
	// }

	// Javascript => Typescript

	// optional parameter
	// parameter 옆에 ?(물음표)를 붙여주면 전달해도 되고 전달하지 않아도 되는 것을 명시.

	function printName(firstName: string, lastName?: string) {
		console.log(firstName);
		console.log(lastName);
	}
	printName("Steve", "Jobs");
	printName("Wook"); // 물음표를 붙이지 않으면 parameter를 하나만 넘겨서 에러가 생긴다.

	// default parameter
	// 파라미터에 아무것도 전달하지 않았을 때, 에러를 방지하기 위해 사용
	function printMessage(message: string = "default message") {
		console.log(message);
	}
	printMessage();

	// rest parameter
	function addNumbers(...numbers: number[]): number {
		return numbers.reduce((a, b) => a + b);
	}
	console.log(addNumbers(1, 2));
	console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));
	console.log(addNumbers(1, 10));
}
