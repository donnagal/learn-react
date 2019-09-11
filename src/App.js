import React from 'react';

class App extends React.Component {

    constructor() {
        super()
        this.state = { isLoggedIn: true }
    }

    render() {
        let wordDisplay
        if (this.state.isLoggedIn) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }

    return (
            <div className="mt-10">
                <p className="text-lg text-center">You are currently 
                <strong> logged {wordDisplay}</strong>
                </p>
            </div>
        )
    }
}

export default App