import React from 'react';
import classnames from 'classnames';
import validateInput from './../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';


class ApplicantSignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      name:'',
      last_name:'',
      type:'applicant',
      errors: {},
      errorsState: false,
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

  closeModal(){
    $('.ui.small.modal.applicant.signup').modal('hide')
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
      this.props.isUserExists(val).then(res => {
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
      this.setState({ errorsState: false, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          console.log('you signed up correctly', this.state)
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          this.context.router.push('/login');
        },
        (err) => this.setState({ errorsState: true, isLoading: false })
      );
    // }
    console.log("this.state.errorsState", this.state.errorsState)
    if (this.state.errors == true){
      console.log("closing")
    } else {
      this.closeModal();
      console.log("NOOOOOOO")

    }

  }


render() {
  const { errors } = this.state;

  let authEror;

  if(this.state.errorsState == true){
    console.log("ERROR")
    authEror = <div id="login_error_texts">Sorry, either your email or password was invalid. Please double-check your email or password.</div>
  } else {
  }

  return (


          <form onSubmit={this.onSubmit} className="ui form">
              <h1>Applicant Signup</h1>

              <br/>
              <div className=" ui divider"></div>
              <br/>

              <div className="field">

              <TextFieldGroup
                error={errors.name}
                label="First Name"
                onChange={this.onChange}
                value={this.state.name}
                field="name"
              />

              <TextFieldGroup
                error={errors.last_name}
                label="Last Name"
                onChange={this.onChange}
                value={this.state.last_name}
                field="last_name"
              />

                <TextFieldGroup
                  error={errors.email}
                  label="Email"
                  onChange={this.onChange}
                  checkUserExists={this.checkUserExists}
                  value={this.state.email}
                  field="email"
                />

              </div>
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

              <br/>
              <div className="inline field required">
                <input type="checkbox" tabIndex="0" className="hidden" required/>
                <label>You agree to the AtlasCV Terms and Conditions</label>
              </div>
              <br/>
              {authEror}
              <button className="ui button small" action="submit" disabled={this.state.isLoading || this.state.invalid}>Sign Up
              </button>

            </form>
    )
  }
}


ApplicantSignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

ApplicantSignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ApplicantSignupForm;
