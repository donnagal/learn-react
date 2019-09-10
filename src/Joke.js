import React from 'react';


function Joke(props) {
  return (
    <div className="w-full lg:w-1/5 px-2 mb-2">
      <div className="bg-gray-800 text-teal-300 p-5 rounded-lg">
      {/* style={{display: !props.joke.question && "none" }} */}
        <h3 className="text-2xl mb-5" style={{display: props.joke.question ? "block" : "none" }}>
          <span className="text-white">Q: </span>{props.joke.question}
        </h3>
        <p style={{fontSize: props.joke.question ? "auto" : "1.3rem" }}>
          <span className="text-white" style={{display: !props.joke.question && "none" }}>A: </span>{props.joke.punchline}
          </p>
      </div>
    </div>
  );
}

export default Joke;
