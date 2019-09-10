import React from 'react';


function Joke(props) {
  return (
    <div className="w-full lg:w-1/5 px-2 mb-2">
      <div className="bg-gray-800 text-teal-300 p-5 rounded-lg">
        <h3 className="text-2xl"><span className="text-white">Q: </span>{props.joke.question}</h3>
        <p className="mt-5"><span className="text-white">A: </span>{props.joke.punchline}</p>
      </div>
    </div>
  );
}

export default Joke;
