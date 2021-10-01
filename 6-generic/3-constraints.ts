interface Employee {
	pay(): void;
}

class FullTimeEmployee implements Employee {
	pay() {
		console.log("full time!");
	}
	workFullTime() {}
}

class PartTimeEmployee implements Employee {
	pay() {
		console.log("part time");
	}
	workPartTime() {}
}
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다.
// function payBad(employee: Employee): Employee {
// 	employee.pay();
// 	return employee;
// }

function pay<T extends Employee>(employee: T): T {
	employee.pay();
	return employee;
}

const wook = new FullTimeEmployee();
const bob = new PartTimeEmployee();

wook.workFullTime();
bob.workPartTime();

const wookAfterPay = pay(wook);
const bobAfterPay = pay(bob);

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

const obj = {
	name: "wook",
	age: 28,
};

const obj2 = {
	animal: "cat",
};

console.log(getValue(obj, "name")); // wook
console.log(getValue(obj, "age")); // 28
console.log(getValue(obj2, "animal")); // 28
