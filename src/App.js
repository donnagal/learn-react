import React from 'react'
import Joke from './Joke'
import jokesData from './jokesData'

function App() {

  const jokeComponents = jokesData.map(joke => <Joke key ={joke.id} question={joke.question} punchline={joke.punchline} />)


  return (
  <div className="px-10 py-10">
    <div className="lg:flex flex-wrap -mx-2">
       {jokeComponents}
    </div>
  </div>
  );
}

export default App;
