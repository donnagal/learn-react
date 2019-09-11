import React from 'react'
import ToDoItem from './ToDoItem'
import todosData from './todosData'

class App extends React.Component {

    constructor() {
        super()
        this.state = { 
          todos: todosData,
         }
         this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {

   const todoComponents = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
        <div className="container mx-auto m-10 py-10 bg-gray-900">
            {todoComponents}
        </div>
        )
    }
}

export default App