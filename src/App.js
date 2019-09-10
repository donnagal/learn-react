import React from 'react';
import Joke from './Joke';

function App() {
  return (
  <div className="px-10 py-10">
    <div className="lg:flex flex-wrap -mx-2">
      <Joke 
        joke={{
          punchline: "It's hard to explain puns to kleptomaniacs because they always take things literally ", 
        }}
      />

       <Joke 
        joke={{
          question: "What's the best thing about Switzerland?", 
          punchline: "I don't know, but the flag us a big plus!", 
        }}
      />

    <Joke 
        joke={{
          question: "question 003", 
          punchline: "punchline 003", 
        }}
      />

       <Joke 
        joke={{
          question: "question 004", 
          punchline: "punchline 004", 
        }}
      />

     <Joke 
        joke={{
          question: "question 005", 
          punchline: "punchline 005", 
        }}
      />

    </div>
  </div>
  );
}

export default App;
