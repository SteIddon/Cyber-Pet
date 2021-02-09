class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = thirst;
        this.hunger = hunger;
        this.bored = bored;
        this.timeAlone = timeAlone;
        this.isPlaying = isPlaying;
    }
    get hunger() {
        return this._hunger;
    }
    get bored() {
        return this._bored;
    }
    get thirst() {
        return this._thirst;
    }
    play() {
        if (this.isPlaying = false & this._bored >=75) {
             return `${this.name} is bored!`
        } else if  (this.isPlaying = false & this._bored < 25) {
            return `${this.name} is tired from all the playing`
        } else if (this.isPlaying = true) {
            return `${this.name} is already playing`
    }}
    eat() {
        if (this._hunger >= 75) {
            return `${this.name} is hungry!`
        } else if (this._hunger < 75 & this._hunger >= 25) {
            return `${this.name} has ate recently`
        } else if (this._hunger < 25) {
            return `${this.name} is full up!`
    }}
    drink() {
        if (this._thirst >= 75) {
            return `${this.name} is thirsty!`
        } else if (this._thirst < 75 & this._thirst >= 25) {
            return `${this.name} has drank recently`
        } else if (this._thirst < 25) {
            return `${this.name}'s thirst is quenched!`
    }}
}
// IF timeAlone increases then also increase bored, hunger & thirst
// bored resets to 0 if isPlaying is changed from false to true
// change isPlaying true/false on button click or keypress
// invoke eat, play, drink on button presses in html/DOM

class Dog extends Animal {
    constructor(name) {
        super(name, thirst, hunger, bored, isPlaying, timeAlone);
    }
    petInfo() {
        return `${this.name} / ${this.hunger} / ${this.isPlaying} / ${this.thirst} / ${this.timeAlone}`;
    }
}
let zola = new Dog ("Zola");
console.log(zola.petInfo(), zola.name);
console.log(zola.petInfo());



// class Bunny extends Animal {

// }



// class Dog extends Animal {

// }




// class Cat extends Animal {

// }