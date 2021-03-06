import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from './../../server/shared/validations/login';
import { connect } from 'react-redux';
import { login_employer } from '../../actions/authActions';
import { Link } from 'react-router'

class Employment_loginModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: false,
      type:'employer',
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

  componentDidMount(){
    localStorage.setItem('isAuthen', 'no');
    localStorage.setItem('error', "");
  }

  // handle employer login modal
  onSubmit(e) {
    // console.log('login this.state before validate', this.state)
      e.preventDefault();

      // this.setState({ errors: false, isLoading: false });
      this.props.login_employer(this.state).then(
        (res) => this.context.router.push('/employer_profile'),
        (err) => this.setState({errors: true, isLoading: false }),
      )

      this.hideModal()

      window.setTimeout(employerModalPopup, 500)

      function employerModalPopup(){

        if(localStorage.error == "Unauthorized" && localStorage.isAuthen == "no"){
          console.log("show")
          $('.ui.small.modal.employer.login').modal('show')
        }

        if(localStorage.type == "employer") {
          console.log("hide")
          $('.ui.small.modal.employer.login').modal('hide')
        }

      }


  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hideModal(e){
    $('.ui.small.modal.employer.login').modal('hide')
  }

  showModal(e){
    $('.ui.small.modal.employer.login').modal('show')
  }

  render() {
    const { errors, email, password, isLoading } = this.state;
    const { isAuthenticated } = this.props.auth;

    let authEror;

    // handing authentication message
    if(this.state.errors == true){
      authEror = <div id="login_error_texts">Sorry, either your email or password was incorrect. Please double-check your email or password.</div>
    } else {

    }

    // console.log("errors before submit -->", this.state.errors)
    // console.log("authenticated before submit --->", this.state.authenticated)

    return (
    <div>
      <div className="ui small modal employer login">
        <i className="close icon"></i>
        <div className="header">
          Employer Login
        </div>

        <div id="loginForm">

          <form className="ui form" onSubmit={this.onSubmit}>
            <h1>Employer Login</h1>

            <br/>
            <div className=" ui divider"></div>
            <br/>

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
            {authEror}
            <button className="ui button small" disabled={isLoading}>Login
            </button>
            <br/><br/>
          </form>

          <br/>

          <p>Not a member yet ... <Link id="employer_profile_signup_button"><span id="signup">Sign Up</span></Link> </p>

        </div>

      </div>

    </div>
    );
  }
}

Employment_loginModal.propTypes = {
  auth: React.PropTypes.object.isRequired,
  login_employer: React.PropTypes.func.isRequired
  }

Employment_loginModal.contextTypes = {
  router: React.PropTypes.object.isRequired
}
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { login_employer })(Employment_loginModal);
