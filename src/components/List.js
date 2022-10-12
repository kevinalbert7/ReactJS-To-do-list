import React, { Component } from 'react'

export class List extends Component {
  render() {
    console.log("props de list =>", this.props)
    const { tasks, onClick } = this.props

    return (
      <div className='mt-4'>
        <h2>List</h2>
        <ul className='row list-group mb-3'>
            {tasks.map(task => {
                return <li className='col-8 d-flex justify-content-between list-group-item'>
                    {task.description}{task.status}
                        <button 
                            type='button'
                            className='btn btn-outline-danger'
                            onClick={() => onClick(task)}
                        >
                            Modifier
                        </button> 
                        <button 
                            type='button'
                            className='btn btn-outline-success'
                            // onClick={() => onClick(task)}
                        >
                            Supprimer
                        </button> 
                    </li>
            })}

        </ul>
      </div>
    )
  }
}

export default List