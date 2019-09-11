// Code your solutions in this file
function writeCards(names, events){
  const thanksCards = [];
  for (let i = 0; i < names.length; i++) {
    thanksCards.push("Thank you, " + names[i] + ", for the wonderful " + events  + " gift!");
  }
  return thanksCards;
}

function countdown(num)
{
    while (num >= 0)
    {
        console.log(num--);
    }
}
