{
	// Typescript의 꽃 Type Alias
	// 원하는 타입을 커스텀으로 지정하는 것.

	type Text = string;
	const name: Text = "wook";
	const address: Text = "korea";

	type Num = number;

	type Student = {
		name: string;
		age: number;
	};
	const student: Student = {
		name: "Wook",
		age: 27,
	};

	// String literal types
	type Name = "name";
	let wookName: Name;
	wookName = "name";

	type JSON = "json";
	const json: JSON = "json";
}
