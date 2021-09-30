{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	abstract class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7; //
		private coffeeBeans: number = 0;

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
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

		protected abstract extract(shots: number): CoffeeCup;

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	class CafeLatteMachine extends CoffeeMachine {
		// overriding
		constructor(coffeeBeans: number, public readonly serialNumber: string) {
			super(coffeeBeans);
		}
		private steamMilk(): void {
			console.log("steaming some milk...");
		}
		protected extract(shots: number): CoffeeCup {
			this.steamMilk();
			return {
				shots,
				hasMilk: true,
			};
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		private sugarIn(): void {
			console.log("adding sugar...");
		}
		protected extract(shots: number): CoffeeCup {
			this.sugarIn();
			return {
				shots,
				hasSugar: true,
			};
		}
	}

	const machines: CoffeeMaker[] = [
		new CafeLatteMachine(16, "1"),
		new SweetCoffeeMaker(16),
	];

	machines.forEach((machine) => {
		console.log("-------------------");
		machine.makeCoffee(1);
	});
}
