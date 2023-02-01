let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let title= document.querySelector("#main-title") 
  title.innerText = "Hi! My name is DOM Toretto!" 
  console.log(title)
  

  // Part 2
  let body= document.querySelector("body") 
  body.style.backgroundColor = "lightBlue"


  // Part 3
  // Select **DOM's Favorite Things** list and remove the last list item.

  // Part 4


  // Part 5


  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
