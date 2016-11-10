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
      errors: false,
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
      this.setState({ errors: false, isLoading: false });

      this.props.login(this.state).then(
        (res) => this.context.router.push('/applicant_profile'),
        (err) => this.setState({ errors: true, isLoading: false })
      );

      console.log("error", this.state.error)

      if (this.state.errors == false){
      } else {
        this.closeModal();
      }

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
    let authEror;

    if(this.state.errors == true){
      console.log("ERROR")
      authEror = <div id="login_error_texts">Sorry, either your email or password was incorrect. Please double-check your email or password.</div>
    } else {

    }

    console.log("line 77 - this.state.errors", this.state.errors)
    return (

      <form className="ui form" onSubmit={this.onSubmit}>

        <h1>Applicant Login</h1>

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
        <button id="applicant_login_submit_button" className="ui button small" disabled={isLoading}>Login
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
