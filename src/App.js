import React from 'react';

class App extends React.Component {

    constructor() {
        super()
        this.state = { name: "Bob", age: 50 }
    }

    render() {
    return (
            <div>
                <p>{this.state.name} </p>
                <p>{this.state.age} years old</p>
            </div>
        )
    }
}

export default App