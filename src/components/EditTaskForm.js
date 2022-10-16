import React, { Component } from 'react'

class EditTaskForm extends Component {
    render() {
        return (
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
        )
    }
}

export default EditTaskForm