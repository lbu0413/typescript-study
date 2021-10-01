console.log(this);

function simpleFunc() {
	console.log(this);
}
simpleFunc();
console.clear();

class Counter {
	count = 0;
	increase = () => {
		console.log(this);
	};
}

const counter = new Counter();
counter.increase();

const caller = counter.increase.bind(counter); // undefined
caller();

// const나 let으로 변수를 선언하면 window 객체에 등록되지 않는다.

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run();

class Cat {
	meow = "meow";
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const leon = new Cat("leon", "5");
console.log(leon);
