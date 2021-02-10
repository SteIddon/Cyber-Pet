let newGame = document.getElementById("new");
let changePet = document.getElementById("change");
let getStatus = document.getElementById("check");
let playPet = document.getElementById("play");
let feedPet = document.getElementById("feed");
let drinkPet = document.getElementById("drink");
let statusBar = document.getElementById("status");
let P = new Dog("Paul")
// newGame.addEventListener("click", () => {

// })

// changePet.addEventListener("click", () => {

// })

playPet.addEventListener("click", () => {
    play();
    getStatus.textContent = `${this.name} is playing`
})  

// feedPet.addEventListener("click", () => {
    
// })

// drinkPet.addEventListener("click", () => {
    
// })

// sleepPet.addEventListener("click", () => {

// })

getStatus.addEventListener("click", () => {
     P.checkStatus();
     console.log(this)
    statusBar.textContent = `NAME: ${P.name}, Happiness: ${P.happiness}, Energy: ${P.energy}, Hunger: ${P.hunger}, Thirst: ${P.thirst}, Boredom: ${P.boredom}`;

})
// P.checkStatus();

console.log(this)