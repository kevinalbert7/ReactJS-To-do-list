import React, { Component } from 'react'

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
              <div className='row py-2'>
                {this.state.editIndex !== index ? (
                  <>
                    <div className='col-6 d-flex align-items-center'>
                      <span>{task.description}</span>
                    </div>

                    <div className='col-2 d-flex align-items-center'>
                      <span>{task.status}</span>
                    </div>

                    <div className='col-2 d-flex align-items-center'>
                      <button 
                        className='btn btn-outline-secondary'
                        onClick={() => this.setEditIndex(index)}
                      >
                        Modifier
                      </button>
                    </div>

                    <div className='col-2 d-flex align-items-center'>
                      <button 
                        className='btn btn-outline-danger'
                        onClick={() => deleteTask(index)}
                      >
                        Supprimer
                      </button>
                    </div>
                  </>
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
                        <option value={task.status}>{task.status}</option>
                        <option value='To do'>To do</option>
                        <option value='Doing'>Doing</option>
                        <option value='Done'>Done</option>
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
              </div>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default List