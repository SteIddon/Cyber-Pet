class Animal {
    constructor(name) {
        this.name = name;
        this.hunger = 50;
        this.thirst = 50;
        this.boredom = 50;
        this.happiness = 50;
        this.energy = 50;
    }
    eat() {
        if (this.hunger > 5) {
            this.hunger = this.hunger - 5;
            this.boredom = this.boredom - 1;
            this.happiness = this.happiness + 5;
            this.energy = this.energy + 5;
            return `${this.name} ate some food`
        } else {
            return `${this.name} is too full`
        }
    }
    play() {
        if (this.boredom > 4 & this.energy > 4) {
            this.boredom = this.boredom - 5;
            this.thirst = this.thirst + 5;
            this.hunger = this.hunger + 5;
            this.happiness = this.happiness + 5;
            this.energy = this.energy - 5;
            return `${this.name} is playing`
        } else {
            return `${this.name} is tired of playing`
        }
    }
    drink() {
        if (this.thirst > 4) {
            this.thirst = this.thirst - 5;
            this.boredom = this.boredom - 1;
            this.happiness = this.happiness - 5;
            this.energy = this.energy - 1;
            return `${this.name} took a sip of water`
        } else {
            return `${this.name} is quenched!`
            
        }
    }
    sleep() {
        if (this.energy <= 50) {
            this.energy = this.energy + 5;
            this.hunger = this.hunger + 1;
            this.thirst = this.thirst + 1;
            this.boredom = this.boredom + 1;
            this.happiness = this.happiness + 1;
            return `${this.name} went to sleep`
        } else {
            return `${this.name} has had enough rest`
        }
    }
    checkStatus() {
        return `NAME: ${this.name}, Happiness: ${this.happiness}, Energy: ${this.energy}, Hunger: ${this.hunger}, Thirst: ${this.thirst}, Boredom: ${this.boredom}`
    }
    leftAlone() {
        if (this.energy > 4) {
            this.hunger = this.hunger +5;
            this.thirst = this.thirst +5;
            this.boredom = this.boredom +5;
            this.happiness = this.happiness -5;
    }}
}

class Dog extends Animal {
    constructor(name) {
        super(name)
        this.hunger = 50;
        this.thirst = 50;
        this.boredom = 50;
        this.happiness = 50;
        this.energy = 50;
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name)
        this.hunger = 50;
        this.thirst = 50;
        this.boredom = 50;
        this.happiness = 50;
        this.energy = 50;
    }
}
class Rabbit extends Animal {
    constructor(name) {
        super(name)
        this.hunger = 50;
        this.thirst = 50;
        this.boredom = 50;
        this.happiness = 50;
        this.energy = 50;
    }
}
// const Zola = new Dog("Zola");
// const Luna = new Cat("Luna");
// const Hopper = new Rabbit("Hopper");