import React, { Component } from 'react'

export class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  render () {
    return (
      <div className="card card-body mt-4 mb-4">
        <h3>Jot down your Job!</h3>
          <form>
            <div className='form-group'>
              <label>Name</label>
              <input
                className='form-control'
                type="text"
                name='name'
                />
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input
                className='form-control'
                type="email"
                name='email'
                />
            </div>
            <div className='form-group'>
              <label>Jot your Job out!</label>
              <input
                className='form-control'
                type="text"
                name='message'
                />
            </div>
            <div className='form-group'>
              <button type='submit' className="btn btn-primary">
                Add to your list of jobs!
              </button>
            </div>
          </form>
      </div>
    )
  }
}

export default Form
