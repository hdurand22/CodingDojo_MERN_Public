class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class UnitCard extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        target.resilience -= this.power;
    }
}

class EffectCard extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof UnitCard) {
            if (this.stat === "resilience") {
                target.resilience += this.magnitude;
            }
            if (this.stat === "power") {
                target.power += this.magnitude;
            }
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }
}

// Unit Cards
const redBeltNinja = new UnitCard("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new UnitCard("Black Belt Ninja", 4, 5, 4);

// Effect Cards
const hardAlgorithm = new EffectCard("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new EffectCard("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new EffectCard("Pair Programming", 3, "increase target's power by 2", "power", 2);

// SCENARIO
// Turn 1
const newRedBelt = new UnitCard("Red Belt Ninja", 3, 3, 4);
hardAlgorithm.play(newRedBelt);

// Turn 2
const newBlackBelt = new UnitCard("Black Belt Ninja", 4, 5, 4);
unhandledPromiseRejection.play(newRedBelt);

// Turn 3
pairProgramming.play(newRedBelt);
newRedBelt.attack(newBlackBelt);
