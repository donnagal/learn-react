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

    const styles = {
        color: "#009688",
        backgroundColor: "#27375d",
        fontSize: 100,
        padding: 200,
    }

    return (
      <div className="text-center m-32">
        <h1 style={styles}>Good {timeOfDay}</h1>
        <p style={{color: "#FF8C00", backgroundColor: "red", marginTop: 100}}>Sample of inline styles</p>
      </div>
    );
  }


ReactDOM.render(
   <App />, 
    document.getElementById("root")
)