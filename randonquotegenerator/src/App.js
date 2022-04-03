import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [quote, setQuote] = useState("Hello");
  const [author, setAuthor] = useState("World");
  //http://api.quotable.io/random

  useEffect(() => {
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) => {
        setQuote(quote.content)
        setAuthor(quote.author)
        console.log(quote)
      }
    )
  },[])

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) => {
        setQuote(quote.content)
        setAuthor(quote.author)
        console.log(quote)
      }
    )
  }


  return (
    <div className="App">
      <div className='quote'>
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div>
      <br/>
      <button className='btn' onClick={fetchNewQuote}>Gerador New Quote</button>
    </div>
  );
}

export default App;
