import React, { Component } from 'react'

class EditTaskForm extends Component {
    render() {
        const { 
            editDescription, 
            handleDescriptionChange, 
            handleStatusChange,
            handleSubmit,
            reset 
        } = this.props
        
        return (
            <form className='row py-2' onSubmit={handleSubmit}>
                <div className='col-6 d-flex align-items-center'>
                    <input 
                    type='text' 
                    value={editDescription} 
                    onChange={handleDescriptionChange}
                    />
                </div>

                <div className='col-2 d-flex align-items-center'>
                    <select className='form-select' onChange={handleStatusChange}>
                    <option className='bg-danger'value='To do'>To do</option>
                    <option className='bg-warning'value='Doing'>Doing</option>
                    <option className='bg-success'value='Done'>Done</option>
                    </select>
                </div>

                <div className='col-2 d-flex align-items-center'>
                    <button 
                        className='btn btn-outline-danger'
                        onClick={reset}
                    >
                        Annuler
                    </button>
                </div>
                
                <div className='col-2 d-flex align-items-center'>
                    <button 
                        type='submit' 
                        className='btn btn-outline-success'
                    >
                        Valider
                    </button>
                </div>
            </form>
        )
    }
}

export default EditTaskForm