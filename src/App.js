import React, { Component } from 'react'

import Form from './components/Form'
import List from './components/List'
import Filter from './components/Filter'
import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks : [
        {
          description: "faire les courses",
          status: "To do"
        },
        {
          description: "préparer le repas",
          status: "To do"
        },
        {
          description: "arroser les plantes",
          status: "To do"
        }
      ],
      filter: ""
    }

    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.modifyTask = this.modifyTask.bind(this)
    this.setFilter = this.setFilter.bind(this)
  }

  addTask(description) {
    const newTask = {
      description: description,
      status: "To do"
    }

    this.setState({ tasks: [...this.state.tasks, newTask] })
  }
  
  deleteTask(index) {
    const filteredTask = this.state.tasks.filter((task, i) => i !== index)

    this.setState({ tasks: filteredTask })
  }

  modifyTask(index, description, status) {
    const clonedTasks = [...this.state.tasks]

    clonedTasks[index].description = description
    clonedTasks[index].status = status

    this.setState({ tasks: clonedTasks })
    console.log(clonedTasks)
  }

  setFilter(status) {
    this.setState({ filter: status })
  }

  render() {
    const filteredTasks = this.state.tasks.filter(task => {
      return task.status === this.state.filter || this.state.filter === ""
    })

    return (
      <div className='container my-5'>
        <h1 className='mb-5'>Todolist</h1>
            <Form addTask={this.addTask} />
            <Filter setFilter={this.setFilter} />
            <List 
              tasks={filteredTasks}
              deleteTask={this.deleteTask}
              modifyTask={this.modifyTask}
            />
      </div>
    )
  }
}

export default App
