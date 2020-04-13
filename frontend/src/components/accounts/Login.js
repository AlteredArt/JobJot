// login functionality everything should be good here
// state is username password
// on submit calls login which comes from actions auth
// on change handles state chabge
// mapping state to props
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

// this is the login class component state is username and password
export class Login extends Component {
// state
  state = {
    username: '',
    password: ''
  };

// this handles the on submit of the login button
  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username,
    this.state.password);
  };

// this handles the on change of the login button
  onChange = e => this.setState({ [e.target.name]: e.target.value });

// render
// if the user isnt authenticated redirect to the home page
  render() {
 if (this.props.isAuthenticated) {
   return <Redirect to="/" />;
 }
 const { username, password } = this.state;
 return (
   <div className="col-md-6 m-auto">
     <div className="card card-body mt-5">
       <h2 className="text-center">LOGIN</h2>
       <form onSubmit={this.onSubmit}>

         <div className="form-group">
           <label>Username</label>
           <input
             type="text"
             className="form-control"
             name="username"
             onChange={this.onChange}
             value={username}
           />
         </div>

         <div className="form-group">
           <label>Password</label>
           <input
             type="password"
             className="form-control"
             name="password"
             onChange={this.onChange}
             value={password}
           />
         </div>

         <div className="form-group">
           <button type="submit" className="btn btn-primary">
             Login
           </button>
         </div>

         <p>
           Don't have an account? Please Reigster. <Link to="/register">Register</Link>
         </p>

       </form>
     </div>
   </div>
 );
}
}

// map state to props
const mapStateToProps = (state) => ({
isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
