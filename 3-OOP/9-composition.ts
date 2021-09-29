{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7; //
		private coffeeBeans: number = 0;

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans);
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error("value for beans should be greater than zero");
			}
			this.coffeeBeans += beans;
		}

		clean() {
			console.log("cleaning the machine...");
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
		}
		private preheat(): void {
			console.log("heating up....");
		}

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots....`);
			return {
				shots,
				hasMilk: false,
			};
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	// 싸구려 우유 거품기
	class CheapMilkSteamer {
		private steamMilk(): void {
			console.log("steaming some milk...");
		}
		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	// 설탕 제조기
	class AutomaticSugarMixer {
		private getSugar() {
			console.log("Getting some sugar from jar");
			return true;
		}
		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();
			return {
				...cup,
				hasSugar: sugar,
			};
		}
	}

	class CafeLatteMachine extends CoffeeMachine {
		// overriding
		constructor(
			coffeeBeans: number,
			public readonly serialNumber: string,
			private milkFrother: CheapMilkSteamer
		) {
			super(coffeeBeans);
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.milkFrother.makeMilk(coffee);
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		constructor(private beans: number, private sugar: AutomaticSugarMixer) {
			super(beans);
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.sugar.addSugar(coffee);
		}
	}

	// Favor Composition over Inheritance
	// Composition: 구성 요소들

	class SweetCafeLatteMachine extends CoffeeMachine {
		constructor(
			private beans: number,
			private milk: CheapMilkSteamer,
			private sugar: AutomaticSugarMixer
		) {
			super(beans);
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			const sugarAdded = this.sugar.addSugar(coffee);
			return this.milk.makeMilk(sugarAdded);
		}
	}

	const machines: CoffeeMaker[] = [new CoffeeMachine(16)];

	machines.forEach((machine) => {
		console.log("-------------------");
		machine.makeCoffee(1);
	});
}
