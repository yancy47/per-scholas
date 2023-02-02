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
  let title = document.querySelector("#main-title") 
  title.innerText = "Hi! My name is DOM Toretto!" 
  console.log(title)
  

  // Part 2
  let body= document.querySelector("body") 
  body.style.backgroundColor = "lightBlue"


  // Part 3
  let favoriteThings = document.getElementById("favorite-things");
  let listItem = document.getElementsByTagName("li")[5]
  listItem.innerHTML = ""
  listItem.textContent = ""
  console.dir(favoriteThings)
  // favoriteThings.removeChild(favoriteThings.lastElementChild);
 

  // Part 4
  let elements = document.querySelectorAll(".special-title")
  console.dir(elements)
  console.log('looping with forEach...')
  elements.forEach(element => { 
  element.style.fontSize = "2rem";
  });
 
  // Part 5
  let pastRaces = document.getElementById("past-races")
  let listItem1 = document.getElementsByTagName("li")[3]
  listItem1.innerHTML = ""
  listItem1.textContent = ""
  listItem1.innerText = ""
  console.dir(pastRaces)
 

  // Part 6
  // function function1() {
  let ul = document.getElementById("past-races")
  let listItem2 = document.createElement("li")
  listItem2.innerHTML = "Havana"
  listItem2.textContent = "Havana"
  ul.appendChild(listItem2)


  // Part 7
  // create a new div and class to it
  let div = document.createElement("div")
  div.classList.add("blog-post")

  // get the parent div element with it's class and append the new div to it 
  let div1 = document.querySelector(".main")
  div1.appendChild(div)
  console.dir(div1)

  // create a new h2 element with inner HTML and text content 
  let h2 = document.createElement("h2")
  h2.innerHTML = "Havana"
  h2.textContent = "Havana"

  // create a new p element with inner HTML and text content 
  let p = document.createElement("p")
  p.innerHTML = "I was literally on fire!"
  p.textContent= "I was literally on fire!"

  // get the newly created div and append h and p to it
  let blogPost = document.querySelector(".blog-post")
  div.appendChild.h2
  div.appendChild.p

  // Part 8
  let quoteTitle = document.querySelector("#quote-title")
  quoteTitle.addEventListener('click', function(evt) {
    document.querySelector("#quote-title").innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    console.log(evt.target)
  });
  // Part 9




});
