import React, { Component } from 'react'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this)
  }

  addTask(description, status) {
    // console.log(description, status)
    const newTask = {
      description: description,
      status: status
    }
    this.setState({tasks: [newTask, ...this.state.tasks]})
  }

  render() {
    console.log(this.state.tasks)

    return (
      <div className='container mt-4'>
        <div className='row mt-4 d-flex justify-content-center'>
            <Form 
              addtask={this.addTask}
            />
        </div>
      </div>
    )
  }
}

export default App
