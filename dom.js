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
let P // on its own = let P = undefined
let img = 0;

newGame.addEventListener("click", () => {
    newGame.style.display = "none";
    selectDog.style.display = "block";
    selectCat.style.display = "block";
    selectRab.style.display = "block";
    petName.style.display = "block";
    petName.textContent = "Choose your pet";
    playPet.style.display = "none";
    petDiv.style.display = "none";
    getStatus.style.display = "none";
    feedPet.style.display = "none";
    drinkPet.style.display = "none";
    sleepPet.style.display = "none";
    statusBar.textContent = "";
    statusBar.style.display = "none";
    setInterval(P.leftAlone(), 1000);
})

selectDog.addEventListener("click", () => {
    img = 3;
    P = new Dog(prompt("What would you like to call your Dog?"));
    selectDog.style.display = "none";
    selectCat.style.display = "none";
    selectRab.style.display = "none";
    playPet.style.display = "block";
    getStatus.style.display = "block";
    feedPet.style.display = "block";
    drinkPet.style.display = "block";
    sleepPet.style.display = "block";
    statusBar.style.display = "block";
    petDiv.style.display = "block";
    petName.textContent =`Name : ${P.name}`;
    newGame.style.display = "block";
    petDiv.innerHTML = '<img src="pet' + img + '.png">';  
})
selectCat.addEventListener("click", () => {
    img = 2;
    P = new Cat(prompt("What would you like to call your Cat?"));
    playPet.style.display = "block";
    selectDog.style.display = "none";
    selectCat.style.display = "none";
    selectRab.style.display = "none";
    getStatus.style.display = "block";
    feedPet.style.display = "block";
    drinkPet.style.display = "block";
    sleepPet.style.display = "block";
    statusBar.style.display = "block";
    petDiv.style.display = "block";
    petName.textContent =`Name : ${P.name}`;
    newGame.style.display = "block";
    petDiv.innerHTML = '<img src="pet' + img + '.png">';  
})
selectRab.addEventListener("click", () => {
    img = 1;
    P = new Rabbit(prompt("What would you like to call your Rabbit?"));
    playPet.style.display = "block";
    selectDog.style.display = "none";
    selectCat.style.display = "none";
    selectRab.style.display = "none";
    getStatus.style.display = "block";
    feedPet.style.display = "block";
    drinkPet.style.display = "block";
    sleepPet.style.display = "block";
    statusBar.style.display = "block";
    petDiv.style.display = "block";
    petName.textContent =`Name : ${P.name}`;
    newGame.style.display = "block";
    petDiv.innerHTML = '<img src="pet' + img + '.png">';  

})


playPet.addEventListener("click", () => {
    statusBar.textContent = P.play();
})  

feedPet.addEventListener("click", () => {
    statusBar.textContent = P.eat();
})

drinkPet.addEventListener("click", () => {
    statusBar.textContent = P.drink();
})

sleepPet.addEventListener("click", () => {
    statusBar.textContent = P.sleep();
})

getStatus.addEventListener("click", () => {
    statusBar.textContent = P.checkStatus();
})