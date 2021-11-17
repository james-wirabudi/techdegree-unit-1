/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//randomizes color of body
function backgroundColor () {
  let red;
  let green;
  let blue;
  let randomRGB;

  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomRGB = `rgb(${red}, ${green}, ${blue})`;
  //console.log(randomRGB);
  document.body.style.backgroundColor = randomRGB; //https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
}

/*** 
 * `quotes` array 
***/
//Ted Lasso, Squid Game, Marvel, Free Guy, V for Vendetta
const quotes = [
  {
    quote: "If you're comfortable while you're doing it, probably doing it wrong.",
    source: "Ted Lasso",
    citation: "Ted Lasso",
    year: 2020,
    tags: "Sports"
  },
  {
    quote: "I'm good at everything, except the things I can't do.",
    source: "Mi-Nyeo",
    citation: "Squid Game",
    year: 2021,
    tags: "Drama"
  },
  {
    quote: "He may have been your father, boy, but he wasn't your daddy.",
    source: "Yondu Udonta",
    citation: "Guardians of the Galaxy Vol. 2",
    year: 2017
    //, tags: "Action/Sci-fi"
  },
  {
    quote: "Don’t have a good day- have a GREAT day!",
    source: "Guy"
    //, citation: "Free Guy", year: 2021, tags: "Action/Adventure"
  },
  {
    quote: "Beneath this mask there is more than flesh. Beneath this mask there is an idea. And ideas are are bulletproof.",
    source: "V"
    //, citation: "V for Vendetta", year: 2005, tags: "Action/Thriller"
  }
];
//console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  //returns quote object
  return quotes[randomNum];
}
//console.log(getRandomQuote());


/***
 * `printQuote` function
***/
function printQuote() {
  //stores quote object in num
  const num = getRandomQuote();
  //console.log(num);

  let randomQuote = `<p class="quote">${num.quote}</p>
  <p class="source">${num.source}`;

  //concatenates citation if object has citation property 
  if (num.citation) {
    randomQuote += `<span class="citation">${num.citation}</span>`;
  }

  //concatenates year if object has year property 
  if (num.year) {
    randomQuote += `<span class="year">${num.year}</span>`;
  }

  //concatenates tag if object has tag property 
  if (num.tags) {
    randomQuote += `<span class="year">${num.tags}</span>`;
  }

  //closes quote
  randomQuote += `</p>`;

//console.log(randomQuote);
document.getElementById('quote-box').innerHTML = randomQuote ; 
}

//quotes automatically refreshes every 10 seconds
//https://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(() => {
  printQuote(); //prints quotes
  backgroundColor(); //changes background color
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
//randomizes color of body whenever "Show another quote is clicked"
document.getElementById('load-quote').addEventListener("click", backgroundColor, false);


