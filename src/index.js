import React from 'react';
import ReactDOM from 'react-dom';


function App() {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay 

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
      <div className="text-center m-32">
        <h1 className="font-semibold lg:text-5xl tracking-wide">Good {timeOfDay}</h1>
      </div>
    );
  }


ReactDOM.render(
   <App />, 
    document.getElementById("root")
)