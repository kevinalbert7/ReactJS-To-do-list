import React, { Component } from 'react'

import Task from './Task'

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

    this.setState({
      editIndex: null,
      editDescription: "",
      editStatus: ""
    })
  }

  render() {
    const { tasks, deleteTask, modifyTask } = this.props
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
                <form className='row py-2' onSubmit={this.handleSubmit}>
                  <div className='col-6 d-flex align-items-center'>
                    <input 
                      type='text' 
                      value={editDescription} 
                      onChange={this.handleDescriptionChange}
                    />
                  </div>

                  <div className='col-2 d-flex align-items-center'>
                    <select className='form-select' onChange={this.handleStatusChange}>
                      {/* <option className='form-select'value={task.status}>{task.status}</option> */}
                      <option className='bg-danger'value='To do'>To do</option>
                      <option className='bg-warning'value='Doing'>Doing</option>
                      <option className='bg-success'value='Done'>Done</option>
                    </select>
                  </div>

                  <div className='col-2 d-flex align-items-center'>
                    <button className='btn btn-outline-danger'>Annuler</button>
                  </div>
                  
                  <div className='col-2 d-flex align-items-center'>
                    <button type='submit' className='btn btn-outline-success'>Valider</button>
                  </div>
                </form>
              )}
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default List