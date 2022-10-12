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
        this.setState({task: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.addTask(this.state.task)
    }

  render() {
  

    return (
        <form 
            className='col-8'
            onSubmit={() => this.handleSubmit}    
        >
            <label htmlFor="inputList" className="form-label mb-4">To do List</label>
            <input 
                type="text" 
                className="form-control mb-4" 
                id="inputList" a
                ria-describedby="emailHelp"
                onChange={this.handleTaskDescriptionChange}
            />
            <button type="submit" className="btn btn-primary">Ajouter à la liste</button>
        </form>
    )
  }
}

export default Form