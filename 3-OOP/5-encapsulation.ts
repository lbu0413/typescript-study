{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	// encpasulation을 하는 3가지
	// 따로 작성하지 않으면 public으로 설정되어 있다.

	// public
	// private 외부에서 절대 볼 수 없고 접근이 불가능.
	// protected 외부에서는 접근할 수 없지만 클래스를 상속한 자식들은 접근 가능.

	// beans gram per shot과 coffeebeans는 외부에서 접근할 필요가 전혀 없으므로 private으로 만들어준다.
	class CoffeeMaker {
		// class 내부에 멤버변수를 선언할때는 const/let을 붙이지 않아도 된다.
		private static BEANS_GRAM_PER_SHOT: number = 7; // static을 붙이면 class-level로 만들어준다.
		// class-level은 object/instance 마다 생성되지 않는다.
		// class-level 멤버변수를 메소드 내에서 사용할 경우 this대신 class 이름을 앞에 붙여준다.
		private coffeeBeans: number = 0; // static을 붙이지 않으면 instance level

		private constructor(coffeeBeans: number) {
			// instance를 만들때 항상 호출되는 함수
			// python으로 따지면 __init__ 같은 존재라고 봄.
			this.coffeeBeans = coffeeBeans;
		}
		// 함수도 마찬가지로 static을 붙여주면 class-level로 사용이 가능하다.
		// constructor를 거치지 않고 새로운 인스턴스를 만들 수 있다.
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error("value for beans should be greater than zero");
			}
			this.coffeeBeans += beans;
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
	const maker = CoffeeMaker.makeMachine(32);
	// 외부에서 클래스내의 멤버변수를 조작할 수 있으므로 encapsulation이 필요하다.
	// maker.coffeeBeans = -34; // invalid

	maker.fillCoffeeBeans(32);

	class User {
		// private firstName: string;
		// private lastName: string;
		// fullName: string;
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		}
		private internalAge = 4;

		get age(): number {
			return this.internalAge;
		}

		set age(num: number) {
			if (num < 0) {
				throw new Error("you are older than that");
			}
			this.internalAge = num;
		}

		constructor(private firstName: string, private lastName: string) {
			// this.firstName = firstName;
			// this.lastName = lastName;
			// this.fullName = `${firstName} ${lastName}`;
		}
	}

	const user = new User("Steve", "Jobs");
	console.log(user.fullName);
	// 이름변경
	// user.firstName = "Wook";
	// 여전히 Steve Jobs가 출력된다.
	console.log(user.fullName);
	user.age = 6;
	console.log(user.age);
}

// encapsulation
// 외부에서 접근할 수 없는 것들 혹은 내부에서만 접근 가능한 데이터는 무엇인지 결정하고 설정하는 방식.
