let newGame = document.getElementById("new");
let selectDog = document.getElementById("dog");
let selectCat = document.getElementById("cat");
let selectRab = document.getElementById("rab");
let selectSna = document.getElementById("snake");
let selectTur = document.getElementById("turtle");
let getStatus = document.getElementById("check");
let playPet = document.getElementById("play");
let feedPet = document.getElementById("feed");
let drinkPet = document.getElementById("drink");
let sleepPet = document.getElementById("sleep");
let statusBar = document.getElementById("status");
let petDiv = document.getElementById("pet");
let petStats = document.getElementById("stats");
let petName = document.getElementById("petname");
let petHappy = document.getElementById("pethappystatus");
let petHungry = document.getElementById("pethungerstatus");
let petThirsty = document.getElementById("petthirststatus");
let petBored = document.getElementById("petboredstatus");
let petEnergy = document.getElementById("petenergystatus");
let P // on its own = let P = undefined
let img = 0;
selectDog.innerHTML = `<img src="pet3.png">`;
selectCat.innerHTML = `<img src="pet2.png">`;
selectRab.innerHTML = `<img src="pet1.png">`;
selectSna.innerHTML = `<img src="pet4.png">`;
selectTur.innerHTML = `<img src="pet5.png">`;

newGame.addEventListener("click", () => {
    newGame.style.display = "none";
    selectDog.style.display = "block";
    selectCat.style.display = "block";
    selectRab.style.display = "block";
    selectSna.style.display = "block";
    selectTur.style.display = "block";
    petName.style.display = "block";
    petName.textContent = "Choose your pet";
    playPet.style.display = "none";
    petDiv.style.display = "none";
    getStatus.style.display = "none";
    feedPet.style.display = "none";
    drinkPet.style.display = "none";
    sleepPet.style.display = "none";
    petStats.style.display = "none";
    statusBar.textContent = "";
})

selectDog.addEventListener("click", () => {
    img = 3;
    P = new Dog(prompt("What would you like to call your Dog?"));
    selectDog.style.display = "none";
    selectCat.style.display = "none";
    selectRab.style.display = "none";
    selectSna.style.display = "none";
    selectTur.style.display = "none";
    petStats.style.display = "block";
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
    selectDog.style.display = "none";
    selectCat.style.display = "none";
    selectRab.style.display = "none";
    selectSna.style.display = "none";
    selectTur.style.display = "none";
    petStats.style.display = "block";
    getStatus.style.display = "block";
    playPet.style.display = "block";
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
    selectDog.style.display = "none";
    selectCat.style.display = "none";
    selectRab.style.display = "none";
    selectSna.style.display = "none";
    selectTur.style.display = "none";
    petStats.style.display = "block";
    getStatus.style.display = "block";
    playPet.style.display = "block";
    feedPet.style.display = "block";
    drinkPet.style.display = "block";
    sleepPet.style.display = "block";
    statusBar.style.display = "block";
    petDiv.style.display = "block";
    petName.textContent =`Name : ${P.name}`;
    newGame.style.display = "block";
    petDiv.innerHTML = '<img src="pet' + img + '.png">';  
})
selectSna.addEventListener("click", () => {
    img = 4;
    P = new Snake(prompt("What would you like to call your Snake?"));
    selectDog.style.display = "none";
    selectCat.style.display = "none";
    selectRab.style.display = "none";
    selectSna.style.display = "none";
    selectTur.style.display = "none";
    petStats.style.display = "block";
    getStatus.style.display = "block";
    playPet.style.display = "block";
    feedPet.style.display = "block";
    drinkPet.style.display = "block";
    sleepPet.style.display = "block";
    statusBar.style.display = "block";
    petDiv.style.display = "block";
    petName.textContent =`Name : ${P.name}`;
    newGame.style.display = "block";
    petDiv.innerHTML = '<img src="pet' + img + '.png">';  
})
selectTur.addEventListener("click", () => {
    img = 5;
    P = new Turtle(prompt("What would you like to call your Turtle?"));
    playPet.style.display = "block";
    selectDog.style.display = "none";
    selectCat.style.display = "none";
    selectRab.style.display = "none";
    selectSna.style.display = "none";
    selectTur.style.display = "none";
    petStats.style.display = "block";
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

petHappy.value = 50;
petHungry.value = 80;
petThirsty.value = 80;
petBored.value = 10;
petEnergy.value = 100;

playPet.addEventListener("click", () => {
    statusBar.textContent = P.play();
    petHappy.value = petHappy.value + 5;
    petEnergy.value = petEnergy.value - 5;
})  

feedPet.addEventListener("click", () => {
    statusBar.textContent = P.eat();
    petHungry.value = petHungry.value - 5;
})

drinkPet.addEventListener("click", () => {
    statusBar.textContent = P.drink();
    petThirsty.value = petThirsty.value - 5;
})

sleepPet.addEventListener("click", () => {
    statusBar.textContent = P.sleep();
    petEnergy.value = petEnergy.value + 5;
})

getStatus.addEventListener("click", () => {
    statusBar.textContent = P.checkStatus();
})


// setInterval((P.startTimer(), 1000))
// timeAlive.textContent = P.startTimer();
