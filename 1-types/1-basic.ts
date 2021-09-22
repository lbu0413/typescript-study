{
	/*
	 * Javascript types
	-------------------------
	 * Primitive: number, string, boolean, bigInt, symbol, null, undefined
	 * Object: function, array, ....
	 */

	// number
	const num: number = -6;
	// string
	const str: string = "hello";
	// boolean
	const bool: boolean = false;

	// undefined
	// 값이 있는지 없는지 결정되지 않음.
	let age: number | undefined;
	age = undefined;
	age = 1;

	// null
	// 값이 없다고 정해짐
	let person: string | null;

	// undefined ex)
	function find(): number | undefined {
		return undefined;
	}

	// unknown
	// 어떤 데이터 타입든 담을 수 있음, 가능하면 쓰지 않는 것이 좋다.
	let notSure: unknown = 0;
	notSure = "he";
	notSure = true;

	// any
	// unknown과 같이 어떤 데이터 타입이든 담을 수 있다.
	// 마찬가지로 가능하면 쓰지 않는 것이 좋다.
	let anything: any = 0;
	anything = "hello";
	anything = false;

	// void
	// 함수에서 아무것도 리턴하지 않을 때 void 라는 타입을 사용
	function print(): void {
		console.log("hello");
		return;
	}

	// never
	// 함수에서 절대로 리턴되지 않는 경우를 명시하기 위해 사용
	// void와 같지만 뉘앙스가 다르다.
	function throwError(message: string): never {
		// (message) -> server(log);
		throw new Error(message);
	}

	// object
	// object 타입은 primitive 타입을 제외한 모든 타입을 전달할 수 있다.
	// 가능하면 구체적으로 타입을 명시하는 것이 좋기에, 쓰지 않는다.
	let obj: object;
	function acceptSomeObject(obj: object) {}
	acceptSomeObject({ name: "wook" });
	acceptSomeObject({ animal: "cat" });
}
