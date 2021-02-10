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
            console.log(this.name, "is enjoying some food")
            this.hunger = this.hunger - 5;
            this.boredom = this.boredom - 1;
            this.happiness = this.happiness + 5;
            this.energy = this.energy + 5;
            return this;
        } else {
            console.log(this.name, "is already full")
            return this;
        }
    }
    play() {
        if (this.boredom > 4 & this.energy > 4) {
            console.log(this.name, "is now playing and having fun!")
            this.boredom = this.boredom - 5;
            this.thirst = this.thirst + 5;
            this.hunger = this.hunger + 5;
            this.happiness = this.happiness + 5;
            this.energy = this.energy - 5;
            return this;
        } else {
            console.log(this.name, "is tired from all the playing")
            return this;
        }
    }
    drink() {
        if (this.thirst > 4) {
            console.log(this.name, "has a big drink of water")
            this.thirst = this.thirst - 5;
            this.boredom = this.boredom - 1;
            this.happiness = this.happiness - 5;
            this.energy = this.energy - 1;
            return this;
        } else {
            console.log(this.name, "is quenched!")
            return this;
        }
    }
    sleep() {
        if (this.energy <= 50) {
            console.log(this.name, "went to sleep")
            this.energy = this.energy + 5;
            this.hunger = this.hunger + 1;
            this.thirst = this.thirst + 1;
            this.boredom = this.boredom + 1;
            this.happiness = this.happiness + 1;
            return this;
        } else {
            console.log(this.name, "has had enough rest")
            return this;
        }
    }
    checkStatus() {
        console.log("NAME:", this.name, "Happiness:", this.happiness, "Energy:", this.energy, "Hunger:", this.hunger, "Thirst:", this.thirst, "Boredom:", this.boredom)
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

Zola.play().sleep().eat().checkStatus().play();