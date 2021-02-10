class Animal {
    constructor(name) {
        this.name = name;
        this.hunger = 50;
        this.thirst = 50;
        this.boredom = 50;
        this.happiness = 50;
        this.energy = 50;
    }
    eat(){
        if (this.hunger > 5) {
        console.log(this.name, "is enjoying some food")
        this.hunger = this.hunger -5;
        this.boredom = this.boredom -1;
        this.happiness = this.happiness +5;
        this.energy = this.energy +5;
        return this;
        } else {
            console.log(this.name, "is already full")
            return this;
    }}
    play(){
        if (this.boredom > 4 & this.energy > 4){
        console.log(this.name, "is now having fun")
        this.boredom = this.boredom -5;
        this.thirst = this.thirst +5;
        this.hunger = this.hunger +5;
        this.happiness = this.happiness +5;
        this.energy = this.energy -5;
        return this;
        } else {
            console.log(this.name, "is tired from all the playing")
            return this;
    }}
    drink(){
        if (this.thirst > 4){
        console.log(this.name, "has a big drink of water")
        this.thirst = this.thirst -5;
        this.boredom = this.boredom -1;
        this.happiness = this.happiness -5;
        this.energy = this.energy -1;
        return this;
    } else {
        console.log(this.name, "is quenched!")
        return this;
    }}
    sleep(){
        if (this.energy <= 50){
        console.log(this.name, "went to sleep")
        this.energy = this.energy +5;
        this.hunger = this.hunger +1;
        this.thirst = this.thirst +1;
        this.boredom = this.boredom +1;
        this.happiness = this.happiness +1;
        return this;
        } else {
            console.log(this.name, "has had enough rest")
            return this;
    }}
    checkStatus(){
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
Zola.play().checkStatus().eat().checkStatus().drink().checkStatus().sleep().checkStatus()
Luna.play().checkStatus().eat().checkStatus().drink().checkStatus().sleep().checkStatus()
Hopper.play().checkStatus().eat().checkStatus().drink().checkStatus().sleep().checkStatus()



// class Animal {
//     constructor(name) {
//         this._name = name;
//         this._thirst = thirst;
//         this._hunger = hunger;
//         this._bored = bored;
//         this._timeAlone = timeAlone;
//         this._isPlaying = isPlaying;
//     }
//     get hunger(){
//         return this._hunger;
//     }
//     get bored(){
//         return this._bored;
//     }
//     get thirst(){
//         return this._thirst;
//     }
//     play() {
//         if (this._isPlaying = false & this._bored >=75) {
//              return `${this._name} is bored!`
//         } else if  (this._isPlaying = false & this._bored < 25) {
//             return `${this._name} is tired from all the playing`
//         } else if (this._isPlaying = true) {
//             return `${this._name} is already playing`
//     }}
//     eat() {
//         if (this._hunger >= 75) {
//             return `${this._name} is hungry!`
//         } else if (this._hunger < 75 & this._hunger >= 25) {
//             return `${this._name} has ate recently`
//         } else if (this._hunger < 25) {
//             return `${this._name} is full up!`
//     }}
//     drink() {
//         if (this._thirst >= 75) {
//             return `${this._name} is thirsty!`
//         } else if (this._thirst < 75 & this._thirst >= 25) {
//             return `${this._name} has drank recently`
//         } else if (this._thirst < 25) {
//             return `${this._name}'s thirst is quenched!`
//     }}
// }
// class Dog extends Animal {
//     constructor(name) {
//         super(name, thirst, hunger, bored, isPlaying, timeAlone)
//         console.log(Dog.name)
//     }
// }

// new Dog("Zola")
// console.log(Dog.name);

// IF timeAlone increases then also increase bored, hunger & thirst
// bored resets to 0 if isPlaying is changed from false to true
// change isPlaying true/false on button click or keypress
// invoke eat, play, drink on button presses in html/DOM

// console.log(Animal);

// class SubClass1 extends Animal {
//     constructor(name) {
//         console.log(SubClass1.name);
//         super(name);
//         return{};
//     }
// }
// new SubClass1(Zola);


//     constructor(name) {
//         super(name, thirst, hunger, bored, isPlaying, timeAlone);
//     }
//     petInfo() {
//         return `${this.name} / ${this.hunger} / ${this.isPlaying} / ${this.thirst} / ${this.timeAlone}`;
//     }
// }
// let zola = new Dog ("Zola");
// console.log(zola.petInfo(), zola.name);
// console.log(zola.petInfo());



// class Bunny extends Animal {

// }



// class Dog extends Animal {

// }




// class Cat extends Animal {

// }