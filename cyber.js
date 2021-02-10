class Animal {
    constructor(name) {
        this.name = name;
        this.hungry = true;
        this.thirsty = true;
        this.bored = true;
    }
    eat(){
        if (this.hungry === true) {
        console.log(this.name, "is now enjoying some food")
        this.hungry = false;
        } else {
            console.log(this.name, "is already full")
        }
    }
    play(){
        if (this.bored === true){
        console.log(this.name, "is now having fun")
        this.bored = false;
        } else {
            console.log(this.name, "is tired from all the playing")
        }
    }
    drink(){
        if (this.thirsty === true){
        console.log(this.name, "Has a big drink of water")
        this.thirsty = false;
    } else {
        console.log(this.name, "'s thirst is already quenched!")
    }}
    updateStatus(){
        if (this.thirsty === false, this.bored === false, this.hungry === false){
            this.thirsty = true, this.bored = true, this.hungry = true;
            console.log("status' changed to true");
        }
    }
}
let zola = new Animal("Zola");
console.log(zola.drink());
console.log(zola.drink());
console.log(zola.eat());
console.log(zola.eat());
console.log(zola.play());
console.log(zola.play());
console.log(zola.updateStatus());
console.log(zola.drink());
console.log(zola.drink());
console.log(zola.eat());
console.log(zola.eat());
console.log(zola.play());
console.log(zola.play());











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