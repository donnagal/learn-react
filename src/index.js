import React from 'react';
import ReactDOM from 'react-dom';


function App() {

    const firstName = "Bob"
    const lastName = "Jane"

    return (
      <div>
        <h1>Hello {firstName + " " + lastName} !</h1>
        
        {/* This is ES6 sample */}
        <h1>Hello {`${firstName} ${lastName}`} !</h1>
      </div>
    );
  }


ReactDOM.render(
   <App />, 
    document.getElementById("root")
)