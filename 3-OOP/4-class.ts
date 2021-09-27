{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	class CoffeeMaker {
		// class 내부에 멤버변수를 선언할때는 const/let을 붙이지 않아도 된다.
		static BEANS_GRAM_PER_SHOT: number = 7; // static을 붙이면 class-level로 만들어준다.
		// class-level은 object/instance 마다 생성되지 않는다.
		// class-level 멤버변수를 메소드 내에서 사용할 경우 this대신 class 이름을 앞에 붙여준다.
		coffeeBeans: number = 0; // static을 붙이지 않으면 instance level

		constructor(coffeeBeans: number) {
			// instance를 만들때 항상 호출되는 함수
			// python으로 따지면 __init__ 같은 존재라고 봄.
			this.coffeeBeans = coffeeBeans;
		}
		// 함수도 마찬가지로 static을 붙여주면 class-level로 사용이 가능하다.
		// constructor를 거치지 않고 새로운 인스턴스를 만들 수 있다.
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		makeCoffee(shots: number): CoffeeCup {
			// class 메소드안에서 멤버변수를 접근할때는 this를 붙여준다.
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
			return {
				shots, // key와 value가 동일하다면 통일해서 하나로 쓰면 된다.
				hasMilk: false,
			};
		}
	}
	const maker = new CoffeeMaker(32);
	console.log(maker);
	const maker2 = new CoffeeMaker(14);
	console.log(maker2);

	const maker3 = CoffeeMaker.makeMachine(3);
	console.log(maker3);
}
