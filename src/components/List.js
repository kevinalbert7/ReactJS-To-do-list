import React, { Component } from 'react'

export class List extends Component {
  render() {
    console.log("props de list =>", this.props)
    const { tasks, deleteTask, onChangeClick, setTask } = this.props

    return (
      <div className='mt-4'>
        <h2>List</h2>
        <ul className='row list-group mb-3'>
          {tasks.length === 0 && <p>No tasks yet</p>}
          {tasks.map((task, index )=> {
            return <li key={task.id} className='col-8 d-flex justify-content-between list-group-item'>
              {/* {setTask} ? (
                <input type='text' /> 
                <select>
                  <option value="To do">To do</option>
                  <option value="Doing">Doing</option>
                  <option value="Done">Done</option>
                </select>
                <button 
                  type='button'
                  className='btn btn-outline-success mx-1'
                  onClick={() => onChangeClick(task)}
                >
                  Valider
                </button>
              ) : ( */}
                <div className='row py-2'>
                  <div className='col-6 d-flex align-items-center'>
                    {task.description}
                  </div>
                </div>
                <div className='row py-2'>
                  <div className='col-6 d-flex align-items-center'>
                    {task.status}
                  </div>
                </div>
                <div>
                  {/* <button 
                    type='button'
                    className='btn btn-outline-secondary mx-1'
                    onClick={() => onChangeClick(task)}
                  >
                    Modifier
                  </button>  */}
                  <button 
                    type='button'
                    className='btn btn-outline-danger mx-1'
                    onClick={() => deleteTask(task)}
                  >
                    Supprimer
                  </button> 
                </div>
              {/* )  */}
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default List