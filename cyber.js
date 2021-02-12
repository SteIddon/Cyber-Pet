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
        this.hunger--;
            return `${this.name} ate some food`
        } else {
            return `${this.name} is too full`
        }
    }
    play() {
        if (this.boredom > 5) {
        this.boredom --;
        this.happiness ++;
            return `${this.name} is playing`
        } else {
            return `${this.name} is tired of playing`
        }
    }
    drink() {
        if (this.thirst > 5) {
            this.thirst --;
            return `${this.name} took a sip of water`
        } else {
            return `${this.name} is quenched!`
        }
    }
    sleep() {
        if (this.energy < 95) {
            this.energy ++;
            return `${this.name} went to sleep`
        } else {
            return `${this.name} has had enough rest`
        }
    }
    checkStatus() {
        return `NAME: ${this.name} || Happiness: ${this.happiness} || Energy: ${this.energy} || Hunger: ${this.hunger} || Thirst: ${this.thirst} || Boredom: ${this.boredom}`
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
        this.time = 0;
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
class Snake extends Animal {
    constructor(name) {
        super(name)
        this.hunger = 50;
        this.thirst = 50;
        this.boredom = 50;
        this.happiness = 50;
        this.energy = 50;
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
    }
}

    // startTimer() {
    //     if (this.time >= 100) {
    //         this.time = this.time -10;
    //         this.energy = this.energy -5;
    //         this.hunger = this.hunger +5;
    //         this.thirst = this.thirst +5;
    //         this.boredom = this.boredom +5;
    //         this.happiness = this.happiness -5;
    //         console.log("loop");
    //         return `${this.name} is bored`
    //     } else if (this.time < 100) {
            
    //         return `${this.name} has been alive for ${this.time} seconds`
    //     }}
    // }

