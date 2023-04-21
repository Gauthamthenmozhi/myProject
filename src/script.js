const text = document.querySelector(".quote");
const con = document.querySelector("body");
const author = document.querySelector(".author");
const nextBtn = document.querySelector(".next");
const tweetBtn = document.querySelector(".twitter-share-button");
const getQuote = async () => {
  const res = await fetch("https://type.fit/api/quotes");
  const quotes = await res.json();
  const num = Math.floor(Math.random() * quotes.length);
  const item = quotes[num];
  const quote = item.text;
  const authorName = item.author;
  const Setcolor = "#" + Math.random().toString(12).slice(2, 8);

  con.style.background = Setcolor;
  text.style.color = Setcolor;
  author.style.color = Setcolor;
  nextBtn.style.color = Setcolor;
  tweetBtn.style.color = Setcolor;
  text.innerText = quote;
  author.innerText = authorName;
  tweetBtn.href = `https://twitter.com/compose/tweet?hashtags=quotes&text=${quote}-${authorName}`;
};
nextBtn.addEventListener("click", getQuote);
getQuote();
 