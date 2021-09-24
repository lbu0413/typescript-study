{
	// Intersection Types: &
	// Union Type이 OR 이었다면, Intersection Type은 & 이다.

	type Student = {
		name: string;
		score: number;
	};

	type Worker = {
		employeeId: number;
		work: () => void;
	};

	function internWork(person: Student & Worker) {
		// 인턴은 학생이자 동시에 employee이기 때문에
		// Student와 Worker 두 타입에 동시에 접근이 가능하다.
		console.log(person.name, person.employeeId, person.work);
	}
	internWork({
		name: "Wook",
		score: 1,
		employeeId: 413,
		work: () => {},
	});
}
