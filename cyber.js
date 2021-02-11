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
            statusBar.textContent = `${P.name} ate some food`
            this.hunger = this.hunger - 5;
            this.boredom = this.boredom - 1;
            this.happiness = this.happiness + 5;
            this.energy = this.energy + 5;
            return this;
        } else {
            statusBar.textContent = `${P.name} is too full`
            return this;
        }
    }
    play() {
        if (this.boredom > 4 & this.energy > 4) {
            statusBar.textContent = `${P.name} is playing`
            this.boredom = this.boredom - 5;
            this.thirst = this.thirst + 5;
            this.hunger = this.hunger + 5;
            this.happiness = this.happiness + 5;
            this.energy = this.energy - 5;
            return this;
        } else {
            statusBar.textContent = `${P.name} is tired of playing`

            return this;
        }
    }
    drink() {
        if (this.thirst > 4) {
            statusBar.textContent = `${P.name} took a sip of water`
            this.thirst = this.thirst - 5;
            this.boredom = this.boredom - 1;
            this.happiness = this.happiness - 5;
            this.energy = this.energy - 1;
            return this;
        } else {
            statusBar.textContent = `${P.name} is quenched!`
            return this;
        }
    }
    sleep() {
        if (this.energy <= 50) {
            statusBar.textContent = `${P.name} went to sleep`
            this.energy = this.energy + 5;
            this.hunger = this.hunger + 1;
            this.thirst = this.thirst + 1;
            this.boredom = this.boredom + 1;
            this.happiness = this.happiness + 1;
            return this;
        } else {
            statusBar.textContent = `${P.name} has had enough rest`
            return this;
        }
    }
    checkStatus() {
        statusBar.textContent = `NAME: ${P.name}, Happiness: ${P.happiness}, Energy: ${P.energy}, Hunger: ${P.hunger}, Thirst: ${P.thirst}, Boredom: ${P.boredom}`
        return this;
    }
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
const Zola = new Dog("Zola");
const Luna = new Cat("Luna");
const Hopper = new Rabbit("Hopper");