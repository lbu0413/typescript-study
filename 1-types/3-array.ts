{
	// Array
	// 배열을 타이핑하는 두가지 방법

	const fruits: string[] = ["apple", "banana"];
	const fruits2: Array<string> = ["apple", "banana"];

	function printArray(fruits: readonly string[]) {}

	// Tuple
	// 서로 다른 타입을 함께 가질 수 있는 배열
	// 엘리는 튜플 사용을 권장하지 않음.
	// 인덱스로 값을 접근하는게 가독성이 떨어지기 때문.

	let student: [string, number];
	student = ["name", 123];
	student[0]; // name
	student[1]; // 123
	const [name, age] = student;
}
