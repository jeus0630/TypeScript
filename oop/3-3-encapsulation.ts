{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CafeLatteMachine{

    }

    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT = 7;
        private coffeeBeans = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }

            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void{
            console.log('heating up...');
        }

        private extract(shots: number): CoffeeCup{
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            // if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
            //     throw new Error('Not enough coffee beans!');
            // }
            //
            // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
            //
            // return {
            //     shots,
            //     hasMilk: false
            // }
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

        clean(){
            console.log('cleaning the machine...');
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(32);
    maker.makeCoffee(2);
}