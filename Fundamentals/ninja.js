class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`${this.name}`);
    }
    showStats() {
        this.sayName();
        console.log(`${this.strength}`);
        console.log(`${this.speed}`);
        console.log(`${this.health}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

const newNinja = new Ninja('Hayden', 10);
newNinja.sayName();
newNinja.showStats();
newNinja.drinkSake();
newNinja.showStats();