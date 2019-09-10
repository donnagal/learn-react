import React from 'react';
import ReactDOM from 'react-dom';


function App() {

    const date = new Date()
    // const date = new Date(2019, 12, 20, 17) //6 = 6AM
    const hours = date.getHours()
    let timeOfDay 
    const styles = {
        fontSize: 90
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#FFC107"
        styles.backgroundColor = "#FF5722"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#3F51B5"
        styles.backgroundColor = "#2196F3"
    } else {
        timeOfDay = "night"
        styles.color = "white"
        styles.backgroundColor = "#607D8B"
    }


    return (
      <div className="text-center">
        <h1 style={styles} className="p-32">Good {timeOfDay}</h1>
      </div>
    );
  }


ReactDOM.render(
   <App />, 
    document.getElementById("root")
)