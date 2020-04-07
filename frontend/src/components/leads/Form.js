import React, { Component } from 'react'
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };


// static propTypes = {
//   addLead: PropTypes.func.isRequired};

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({
      name: "",
      email: "",
      message: ""
    });
    console.log("submit");
  };

  render () {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h3>Jot down your Job!</h3>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label>Name</label>
              <input
                className='form-control'
                type="text"
                name='name'
                onChange={this.onChange}
                value={name}
                />
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input
                className='form-control'
                type="email"
                name='email'
                onChange={this.onChange}
                value={email}
                />
            </div>
            <div className='form-group'>
              <label>Jot your Job out!</label>
              <textarea
                className='form-control'
                type="text"
                name='message'
                onChange={this.onChange}
                value={message}
                />
            </div>
            <div className='form-group'>
              <button type='submit' className="btn btn-primary">
                Add to your list of jobs!
              </button>
            </div>
          </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addLead: (lead) => addLead(lead)(dispatch)
});

export default connect(null,  mapDispatchToProps )(Form);
