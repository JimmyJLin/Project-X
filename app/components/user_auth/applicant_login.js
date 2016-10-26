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
