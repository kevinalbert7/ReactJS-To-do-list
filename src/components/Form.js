import React, { Component } from 'react'

export class Form extends Component {
    constructor() {
        super()

        this.state = {
            task: ""
        }

        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTaskDescriptionChange(e) {
        this.setState({ task: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({ task: "" })
        this.props.addTask(this.state.task)
    }

  render() {
    const { task }= this.state

    return (
            <form 
                className='row'
                onSubmit={this.handleSubmit}    
            >
                <div className='col-8'>
                    <input 
                        type="text" 
                        className="form-control col-8" 
                        placeholder='Task description'
                        id="inputList" 
                        onChange={this.handleTaskDescriptionChange}
                        value={task}
                    />
                </div>
                <div className='col-4'>
                    <button type="submit" className="btn btn-primary">Add to the list</button>
                </div>
            </form>
    )
  }
}

export default Form