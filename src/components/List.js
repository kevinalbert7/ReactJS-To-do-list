import React, { Component } from 'react'

import Task from './Task'
import EditTaskForm from './EditTaskForm'

export class List extends Component {
  constructor() {
    super()

    this.state = {
      editIndex: null,
      editDescription: "",
      editStatus: ""
    }

    this.setEditIndex = this.setEditIndex.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.reset = this.reset.bind(this)
  }

  setEditIndex(index) {   
    this.setState({
      editIndex: index,
      editDescription: this.props.tasks[index].description,
      editStatus: this.props.tasks[index].status
    })
  }

  handleDescriptionChange(e) {
    this.setState({ editDescription: e.target.value })
  }

  handleStatusChange(e) {
    this.setState({ editStatus: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { editIndex, editDescription, editStatus } = this.state

    this.props.modifyTask(editIndex, editDescription, editStatus)
    this.reset()
  }

  reset() {
    this.setState({
      editIndex: null,
      editDescription: "",
      editStatus: ""
    })
  }

  render() {
    const { tasks, deleteTask } = this.props
    const { editDescription } = this.state

    return (
      <div className='mt-5'>
        <h2>List</h2>
        <ul className='list-group'>
          {tasks.length === 0 && <p>No tasks yet</p>}
          {tasks.map((task, index )=> {
            return <li key={index} className='list-group-item'>
              {this.state.editIndex !== index ? (
                <Task 
                  task={task} 
                  index={index}
                  deleteTask={deleteTask}
                  setEditIndex={this.setEditIndex}
                />
              ) : (
               <EditTaskForm 
                  editDescription={editDescription}
                  handleDescriptionChange={this.handleDescriptionChange}
                  handleStatusChange={this.handleStatusChange}
                  handleSubmit={this.handleSubmit}
                  reset={this.reset}
               />
              )}
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default List