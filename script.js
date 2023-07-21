const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button");

// random quote function
function randomQuote() {
  // fetching random quotes/data from the API and parsing it into JavaScript object
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
    console.log(result)
  });
}

quoteBtn.addEventListener("click", randomQuote);