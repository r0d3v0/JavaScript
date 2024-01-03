function CoffeeMachine(water,milk,coffe) {
    this.water = water;
    this.milk = milk;
    this.coffe = coffe;

    this.makeSmallCoffee = function () {
        console.log("Готуємо маленьку чашку кави");
        this.water -= 10;
        this.milk -= 10;
        this.coffe -= 10;
    };
    this.makeMediumCoffee = function () {
        console.log("Готуємо середню чашку кави");
        this.water -= 20;
        this.milk -= 20;
        this.coffe -= 15;
    };
    this.makeLargeCoffee = function () {
        console.log('Готуємо велику чашку кави');
        this.water -= 30;
        this.milk -= 25;
        this.coffe -= 20;
    };
    console.log(`Молока є - ${this.milk} л`);
    console.log(`Води є - ${this.water} л`);
    console.log(`Кави є - ${this.coffe} г`);
}
let admin = new CoffeeMachine(1000,1000,1000)



