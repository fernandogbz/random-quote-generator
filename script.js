const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");


// random quote function
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading...";
  // fetching random quotes/data from the API and parsing it into JavaScript object
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
    console.log(result);
    quoteText.innerText = result.content; // Shows quote
    authorName.innerText = result.author; // Shows author
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
  });
}

soundBtn.addEventListener("click", () => {
  // the SpeechSynthesisUtterance is a web speech api that represents a speech request
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the utterance
})

copyBtn.addEventListener("click", () => {
  //copying the quote text on copyBtn click
  // writeText() property writes the specified text string to the system clipboard
  navigator.clipboard.writeText(quoteText.innerText);
})

quoteBtn.addEventListener("click", randomQuote);