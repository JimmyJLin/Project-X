import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from './../../server/shared/validations/login';
import { connect } from 'react-redux';
import { login_employer } from '../../actions/authActions';


class EmploymentLoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
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


  onSubmit(e) {
    e.preventDefault();
    console.log('login this.state vefore validate', this.state)

    // if (this.isValid()) {
      console.log('login this.state', this.state)
      this.setState({ errors: {}, isLoading: true });
      this.props.login_employer(this.state).then(
        (res) => this.context.router.push('/employer_profile'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
      this.closeModal();
    // }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  closeModal(){
    $('.ui.small.modal.employer.login').modal('hide')
  }

  render() {
    const { errors, email, password, isLoading } = this.state;
    const { isAuthenticated } = this.props.auth;

    return (

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
        <button className="ui button small" disabled={isLoading}>Login
        </button>
        <br/><br/>
      </form>
    );
  }
}


  EmploymentLoginForm.propTypes = {
    auth: React.PropTypes.object.isRequired,
    login_employer: React.PropTypes.func.isRequired
  }

  EmploymentLoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  export default connect(mapStateToProps, { login_employer })(EmploymentLoginForm);
