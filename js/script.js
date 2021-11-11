//Start at step 8.

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Ted Lasso, Squid Game, Marvel, Free Guy, V for Vendetta
const quotes = [
  {
    quote: "If you're comfortable while you're doing it, probably doing it wrong.",
    source: "Ted Lasso",
    citation: "Ted Lasso",
    year: 2020
    //add tags:
  },
  {
    quote: "I'm good at everything, except the things I can't do.",
    source: "Mi-Nyeo",
    citation: "Squid Game",
    year: 2021
  },
  {
    quote: "He may have been your father, boy, but he wasn't your daddy.",
    source: "Yondu Udonta",
    citation: "Guardians of the Galaxy Vol. 2",
    year: 2017
  },
  {
    quote: "Don’t have a good day- have a GREAT day!",
    source: "Guy",
    citation: "Free Guy",
    year: 2021
  },
  {
    quote: "Beneath this mask there is more than flesh. Beneath this mask there is an idea. And ideas are are bulletproof.",
    source: "V",
    citation: "V for Vendetta",
    year: 2005
  }
];

console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  //return quotes[randomNum];
  return randomNum;
}
//console.log(getRandomQuote());


/***
 * `printQuote` function
***/


function printQuote() {
  //1. call getRandomQuote
  const num = getRandomQuote();
  //2. use the returned quote to build a string of HTML
  const randomQuote = `<p class="quote">${quotes[num].quote}</p>
                      <p class="source">${quotes[num].source}
                        <span class="citation">${quotes[num].citation}</span>
                        <span class="year">${quotes[num].year}</span>
                      </p>`;
  //3. display that string to display a random quote in the browser
console.log(randomQuote);
}
printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);