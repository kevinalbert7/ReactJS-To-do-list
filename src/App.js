import React, { Component } from 'react'

import Form from './components/Form'
import List from './components/List'
import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    // this.changeTask = this.changeTask.bind(this)
  }

  addTask(description, status) {
    const newTask = {
      description: description,
      status: "To do"
    }

    this.setState({tasks: [...this.state.tasks, newTask]})
  }

  
  deleteTask(index) {
    const filteredTask = this.state.tasks.filter((task, i) => i !== index)
    console.log(filteredTask)
    this.setState({tasks: filteredTask})
  }

  // changeTask(index) {
  //   const filteredTask = this.state.tasks.filter((task, i) => i === index)

  //   this.setState({tasks: filteredTask})
  // }

  render() {
    return (
      <div className='container my-5'>
        <h1 className='mb-5'>Todolist</h1>
            <Form 
              addTask={this.addTask}
            />
            <List 
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              onChangeClick={this.changeTask}
            />
      </div>
    )
  }
}

export default App
