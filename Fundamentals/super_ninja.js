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
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name) {
        super(name, 200, 10, 10);        
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake();
        console.log('Begin, be bold, and venture to be wise.');
    }
}

// const newNinja = new Ninja('Hayden', 10);
// newNinja.sayName();
// newNinja.showStats();
// newNinja.drinkSake();
// newNinja.showStats();

const newSensei = new Sensei('Master Splinter');
newSensei.sayName();
newSensei.speakWisdom();
newSensei.showStats();