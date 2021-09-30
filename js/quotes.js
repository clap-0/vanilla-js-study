// 명언과 작가가 저장된 배열
const quotes = [
  {
    quote:
      "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
    author: "Victoria Holt",
  },
  {
    quote:
      "If you want to build a ship, don't drum up people to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote: "Failure is not the falling down, but the staying down.",
    author: "Mary Pickford",
  },
  {
    quote:
      "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
    author: "Charlie Chaplin",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "Don't forget to be happy today to enjoy your life and to eat kimchi.",
    author: "Nicolás Serrano Arévalo",
  },
  {
    quote: "Some People Are Worth Melting For.",
    author: "Olaf",
  },
  {
    quote: "I can do this all day.",
    author: "Captain America",
  },
  {
    quote: "I am Groot.",
    author: "Groot",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
