// Code your solutions in this file
function writeCards(names, events){
  const thanksCards = [];
  for (let i = 0; i < names.length; i++) {
    thanksCards.push("Thank you, " + names[i] + ", for the wonderful " + events  + " gift!");
  }
  return thanksCards;
}



function countdown() {
  let intger = true;
  while (keepWorking) {
    chooseSeedLocation();
    plantSeed();
    waterSeed();
    keepWorking = checkForMoreSeeds();
  }
}
