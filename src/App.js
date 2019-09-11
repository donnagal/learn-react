import React from 'react';


class App extends React.Component {
    constructor() {
        super ()
        this.state = {
            count: 0
        }
        this.handledClick = this.handledClick.bind(this)
        this.handledClickRemoved = this.handledClickRemoved.bind(this)
    }

    handledClick() {
        this.setState(prevState => {
            return {
                count: prevState.count +1
            }
        })
    }
    handledClickRemoved() {
        this.setState(prevState => {
            return {
                count: prevState.count -1
            }
        })
    }

    render() {
        return (
            <div className="text-center mt-20">
                <h1 className="text-6xl font-bold">{this.state.count}</h1>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={this.handledClick}> Add
                </button>
 
                <p className="mt-3">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                        onClick={this.handledClickRemoved}> Remove
                  </button>
                </p>

                {/* <ChildComponent count={this.state.count} /> */}
            </div>
            )
        }
    }

export default App