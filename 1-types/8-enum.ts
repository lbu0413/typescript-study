{
	// Enum
	// 여러가지의 관련된 상수 값들을 한 곳에 모아서 정리를 도와주는 타입.
	// 자바스크립트에서는 존재하지 않는 타입이다.

	// Javascript
	const MAX_NUM = 6;
	const MAX_STUDENTS_PER_CLASS = 10;

	// 서로 연관되어 있지만 묶을 수 있는 타입이 자바스크립트에는 존재하지 않는다.
	const MONDAY = 0;
	const TUESDAY = 1;
	const WEDNESDAY = 2;

	const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
	const dayOfToday = DAYS_ENUM.MONDAY;

	// Typescript
	// enum Type은 저절로 번호를 0부터 부여해준다.
	// 만약 0부터 시작하는것이 싫다면 임의로 시작 번호를 정해줄 수도 있다.
	// 번호 뿐만 아니라 문자열을 값으로 정해줄 수도 있다.

	// 타입스크립트에서 enum은 가능한한 쓰지 않는 것이 좋다는게 엘리의 견해.
	// enum 대신 union으로 대체할 수 있다.

	// union
	type DaysUnion = "Monday" | "Tuesday" | "Wednesday";

	enum Days {
		Monday = 1, // 0
		Tuesday, // 1
		Wednesday, // 2
		Thursday,
		Friday,
		Saturday,
		Sunday,
	}
	console.log(Days.Monday);
	const day = Days.Saturday;
	console.log(day);
}
