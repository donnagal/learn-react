import React from 'react';

class App extends React.Component {

    constructor() {
        super()
        this.state = { answer: "Hell yeah" }
    }

    render() {
    return (
            <div>
                <h1>Is state important to know? {this.state.answer} </h1>
                {/* <ChildComponemnt anwser={this.state.answer}/> */}
            </div>
        )
    }
}

export default App