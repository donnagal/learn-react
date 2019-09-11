import React from 'react';

function handledMouseOver() {
    console.log("Hoova at meh")
}

function handledClick() {
    console.log("Het meh")
}

function App () {
    return (
        <div className="text-center mt-20">
            <h1>Hello World</h1>
            <img className="mx-auto p-5" src="https://www.fillmurray.com/200/100"
            onMouseOver={handledMouseOver} />
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                onClick={handledClick}>Button
            </button>
        </div>
    )
}

export default App