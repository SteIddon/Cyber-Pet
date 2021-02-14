class Animal {
    constructor(name) {
        this.name = name;
        this.hunger = 50;
        this.thirst = 50;
        this.boredom = 50;
        this.happiness = 50;
        this.energy = 50;
        this.seconds = 0;
    }
    eat() {
        if (this.hunger > 5) {
        this.hunger - 5;
        this.seconds = 0;
            return `${this.name} ate some food`
        } else {
            return `${this.name} is too full`
        }
    }
    play() {
        if (this.boredom > 5) {
        this.boredom - 5;
        this.happiness + 5;
        this.seconds = 0;
            return `${this.name} is playing`
        } else {
            return `${this.name} is tired of playing`
        }
    }
    drink() {
        if (this.thirst > 5) {
            this.thirst - 5;
            this.seconds = 0;
            return `${this.name} took a sip of water`
        } else {
            return `${this.name} is quenched!`
        }
    }
    sleep() {
        if (this.energy < 95) {
            this.energy + 5;
            this.seconds = 0;
            return `${this.name} went to sleep`
        } else {
            return `${this.name} has had enough rest`
        }
    }
    checkStatus() {
        return `${this.name} has been left alone for ${this.seconds} seconds`
        }
    }
    function incrementSeconds() {
            P.seconds += 1;
            getTime.innerText = `${P.name} has been left alone for ${P.seconds} seconds. ${P.name} becomes sad if you don't keep playing with them`;
        }


class Dog extends Animal {
    constructor(name) {
        super(name)
        this.hunger = 50;
        this.thirst = 50;
        this.boredom = 50;
        this.happiness = 50;
        this.energy = 50;
        this.seconds = 0;
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
        this.seconds = 0;
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
        this.seconds = 0;
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name)
        this.hunger = 50;
        this.thirst = 50;
        this.boredom = 50;
        this.happiness = 50;
        this.energy = 50;
        this.seconds = 0;
    }
}
class Turtle extends Animal {
    constructor(name) {
        super(name)
        this.hunger = 50;
        this.thirst = 50;
        this.boredom = 50;
        this.happiness = 50;
        this.energy = 50;
        this.seconds = 0;
    }
}

