import React from 'react';


class App extends React.Component {
    constructor() {
        super ()
        this.state = {
            count: 0
        }
        this.handledClick = this.handledClick.bind(this)
    }

    handledClick() {
        this.setState({ count: 1})
    }

    render() {
        return (
            <div className="text-center mt-20">
                <h1 className="text-6xl font-bold">{this.state.count}</h1>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={this.handledClick}> Change
                </button>
            </div>
            )
        }
    }

export default App