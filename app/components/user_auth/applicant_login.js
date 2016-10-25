import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from './../../server/shared/validations/login';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';



class ApplicantLoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      type:'applicant',
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }


  onSubmit(e) {
    console.log('login this.state before validate', this.state)
      e.preventDefault();

      console.log('login this.state', this.state)
      this.setState({ errors: {}, isLoading: true });

      this.props.login(this.state).then(
        (res) => {
          this.context.router.push('/applicant_profile')
        },
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );

      this.closeModal();
  }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    closeModal(){
      $('.ui.small.modal.applicant.login').modal('hide')
    }

  render() {
    const { errors, email, password, isLoading } = this.state;
    const { isAuthenticated } = this.props.auth;

    return (

      <form className="ui form" onSubmit={this.onSubmit}>
        <h1>Applicant Login</h1>

        { errors.form && <div className="alert">{errors.form}</div> }

        <div className="field">
        <TextFieldGroup
          field="email"
          label="Email"
          value={email}
          error={errors.email}
          onChange={this.onChange}
        />
        </div>
        <div className="field">
        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />
        </div>
        <button id="applicant_login_submit_button" className="ui button ok" disabled={isLoading}>Login
        </button>
      </form>
    );
  }
}



  ApplicantLoginForm.propTypes = {
    auth: React.PropTypes.object.isRequired,
    login: React.PropTypes.func.isRequired
    }

  ApplicantLoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  export default connect(mapStateToProps, { login })(ApplicantLoginForm);










// import React, { Component } from 'react';
// import { Link } from 'react-router';
// import {browserHistory} from 'react-router';
// import $ from 'jquery'; // requires jQuery for AJAX request
// import { connect } from 'react-redux';
//
//
//
// export default class Applicant_login extends Component {
//
//   constructor(props) {
//   super(props);
//
//     this.state = { // sets initial states
//       email : '',
//       password : '',
//       error : '',
//     }
//   }
//
//  render() {
//    return (
//
//         <div>
//           <div className="ui small modal applicant login">
//             <i className="close icon"></i>
//             <div className="header">
//               Applicant Login
//             </div>
//
//             <div id="loginForm">
//
//               <form onSubmit={this.handleSubmit.bind(this)} className="ui form">
//                 <div className="field">
//                   <label>Email</label>
//                   <input
//                     value={this.state.email}
//                     onChange={event => this.onEmailChange(event.target.value)}
//                     type="email"
//                     placeholder="email"/>
//                 </div>
//                 <div className="field">
//                   <label>Password</label>
//                   <input
//                   value={this.state.password}
//                   onChange={event => this.onPasswordChange(event.target.value)}
//                   type="password"
//                   placeholder="password"/>
//                 </div>
//
//                 <a href="/applicant_profile">
//                   <button className="ui button" type="submit">Sign In</button>
//                 </a>
//
//               </form>
//
//               <br/>
//
//               <p>Not a member yet ... <a id="applicant_signup_button">Sign Up</a> </p>
//
//             </div>
//           </div>
//
//         </div>
//
//     )
//   }
//
//   onEmailChange(email) {
//     this.setState({email}); // updates username state
//   }
//
//   onPasswordChange(password) {
//   this.setState({password}); // updates password state
//  }
//
//   handleSubmit(event) {
//    event.preventDefault()
//    let error = 'Oops, please check your email or password';
//
//    if (this.state.email == '' || this.state.password == '') { // checks for real email/password
//      this.setState({error:error})
//    }
//
//    const userInfo = {
//      email:this.state.email,
//      password: this.state.password,
//    }
//    $.post('/api/auth/login', userInfo)
//      .done((data) => {
//        console.log(data)
//        if (data.agent == 'error') { // if username/password doesn't match
//        this.setState({error:error})
//      } else {
//        localStorage.token = data.token; // saves token to local storage
//        browserHistory.push('/'); // redirects to home
//        console.log('You are signed in')
//        window.location.assign("/applicant_profile")
//      }
//      })
//      .error((error) => {
//        console.error('sign in action is failed', error);
//      })
//
//   }
//
//
// };
