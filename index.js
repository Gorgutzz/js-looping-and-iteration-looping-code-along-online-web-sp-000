// Code your solutions in this file
function writeCards(names, events){
  const thankdCards = [];
  for (let i = 0; i < names.length; i++) {
    thankdCards.push("Thank you, " + names[i] + ", for the wonderful " + events  + " gift!");
  }
  return thankdCards;
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
