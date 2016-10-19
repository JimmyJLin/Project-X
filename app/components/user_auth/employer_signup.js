import React from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from './../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';


class EmployerSignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      first_name:'',
      last_name:'',
      company_name:'',
      company_address:'',
      company_city:'',
      company_state:'',
      company_zip:'',
      company_description:'',
      company_website:'',
      company_phone_number:'',
      company_size:'',
      company_industry:'',
      company_branch:'',
      company_logo:'',
      errors: {},
      isLoading: false,
      invalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    console.log('isValid',isValid)

    return isValid;
  }

  checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isEmployerUserExists(val).then(res => {
        console.log('this is coming from isuserexist', res)
        let errors = this.state.errors;
        let invalid;
        if (res.data) {
          errors[field] = 'There is user with such ' + field;
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('captures state on submit', this.state)
    // if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });

      this.props.employerSignupRequest(this.state).then(
        () => {
          console.log('you signed up correctly', this.state)
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          this.context.router.push('/login');
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    // }
  }






//
//   handleSubmit: function(e){
//     e.preventDefault();
//
//     const signupInfo = {
//     email: this.refs.email.value,
//     password: this.refs.password.value,
//     type: "applicant"
//     }
//
//   signUpRequest(signupInfo);
//
//   this.refs.createUserForm.reset();
// },

render() {
  const { errors } = this.state;
  return (

          <form onSubmit={this.onSubmit} className="ui form">
          <div className="two fields">
              <div className="field">
              <TextFieldGroup
                error={errors.first_name}
                label="First Name"
                onChange={this.onChange}
                value={this.state.first_name}
                field="first_name"
              />
              </div>
              <div className="field">
              <TextFieldGroup
                error={errors.last_name}
                label="Last Name"
                onChange={this.onChange}
                value={this.state.last_name}
                field="last_name"
              />
              </div>
              </div>
              <div className="field">
                <TextFieldGroup
                  error={errors.email}
                  label="Email"
                  onChange={this.onChange}
                  checkUserExists={this.checkUserExists}
                  value={this.state.email}
                  field="email"
                />
              </div>
              <div className="two fields">
              <div className="field">
                <TextFieldGroup
                  error={errors.password}
                  label="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  field="password"
                  type="password"
                />
              </div>
              <div className="field">
                <TextFieldGroup
                error={errors.passwordConfirmation}
                label="Password Confirmation"
                onChange={this.onChange}
                value={this.state.passwordConfirmation}
                field="passwordConfirmation"
                type="password"
                />
              </div>
              </div>
              <div className="field">
              <TextFieldGroup
                 error={errors.company_name}
                label="Company Name"
                onChange={this.onChange}
                value={this.state.company_name}
                field="company_name"
              />
              </div>
              <div className="field">
              <TextFieldGroup
                error={errors.company_address}
                label="Company Address"
                onChange={this.onChange}
                value={this.state.company_address}
                field="company_address"
              />
              </div>
              <div className="three fields">
              <div className="field">
              <TextFieldGroup
                error={errors.company_city}
                label="City"
                onChange={this.onChange}
                value={this.state.company_city}
                field="company_city"
              />
              </div>
              <div className="field">
              <TextFieldGroup
                error={errors.company_state}
                label="State"
                onChange={this.onChange}
                value={this.state.company_state}
                field="company_state"
              />
              </div>
              <div className="field">
              <TextFieldGroup
                error={errors.company_zip}
                label="Zipcode"
                onChange={this.onChange}
                value={this.state.company_zip}
                field="company_zip"
              />
              </div>
              </div>
              <div className="field">
              <TextFieldGroup
                error={errors.company_website}
                label="website"
                onChange={this.onChange}
                value={this.state.company_website}
                field="company_website"
              />
              </div>

              <button className="ui button" action="submit" disabled={this.state.isLoading || this.state.invalid}>Sign Up
              </button>

            </form>
    )
  }
}


EmployerSignupForm.propTypes = {
  employerSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isEmployerUserExists: React.PropTypes.func.isRequired
}

EmployerSignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default EmployerSignupForm;
