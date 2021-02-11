let newGame = document.getElementById("new");
let selectDog = document.getElementById("dog");
let selectCat = document.getElementById("cat");
let selectRab = document.getElementById("rab");
let getStatus = document.getElementById("check");
let playPet = document.getElementById("play");
let feedPet = document.getElementById("feed");
let drinkPet = document.getElementById("drink");
let sleepPet = document.getElementById("sleep");
let statusBar = document.getElementById("status");
let petDiv = document.getElementById("pet");
let petName = document.getElementById("petname");

newGame.addEventListener("click", () => {
    selectDog.style.display = "block";
    selectCat.style.display = "block";
    selectRab.style.display = "block";
})

selectDog.addEventListener("click", () => {
    selectDog.style.display = "none";
    selectCat.style.display = "none";
    selectRab.style.display = "none";
    petName.style.display = "block";
    getStatus.style.display = "block";
    feedPet.style.display = "block";
    drinkPet.style.display = "block";
    sleepPet.style.display = "block";
    statusBar.style.display = "block";
    petDiv.style.display = "block";
    petName.style.display = "block";
})
selectCat.addEventListener("click", () => {
    selectDog.style.display = "none";
    selectCat.style.display = "none";
    selectRab.style.display = "none";
    getStatus.style.display = "block";
    feedPet.style.display = "block";
    drinkPet.style.display = "block";
    sleepPet.style.display = "block";
    statusBar.style.display = "block";
    petDiv.style.display = "block";
    petName.style.display = "block";

})
selectRab.addEventListener("click", () => {
    selectDog.style.display = "none";
    selectCat.style.display = "none";
    selectRab.style.display = "none";
    getStatus.style.display = "block";
    feedPet.style.display = "block";
    drinkPet.style.display = "block";
    sleepPet.style.display = "block";
    statusBar.style.display = "block";
    petDiv.style.display = "block";
    petName.style.display = "block";

})


playPet.addEventListener("click", () => {
    P.play();
})  

feedPet.addEventListener("click", () => {
    P.eat();
})

drinkPet.addEventListener("click", () => {
    P.drink();
})

sleepPet.addEventListener("click", () => {
    P.sleep();
})

getStatus.addEventListener("click", () => {
     P.checkStatus();
})