import React from 'react'
import ToDoItem from './ToDoItem'
import todosData from './todosData'

class App extends React.Component {

    constructor() {
        super()
        this.state = { 
          todos: todosData,
         }
    }

    render() {

   const todoComponents = this.state.todos.map(item => <ToDoItem key={item.id} item={item}/>)
    return (
        <div className="container mx-auto m-10 py-10 bg-gray-900">
            {todoComponents}
        </div>
        )
    }
}

export default App