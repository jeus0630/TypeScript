{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker{
        static BEANS_GRAM_PER_SHOT = 7;
        coffeeBeans = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number):CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }

            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

            return {
                shots,
                hasMilk: false
            }
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);
}