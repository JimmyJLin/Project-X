import React from 'react';
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
      errorsState: false,
      isLoading: false,
      invalid: false,
      loadingModal: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  componentDidMount(){
    localStorage.setItem('isAuthen', 'no');
    localStorage.setItem('error', "");
    localStorage.setItem('loadingModal', "no");

    // console.log("Modal loading ---------", this.state.loadingModal)
    // localStorage.setItem('type', "none");

    // check if current user is employer
    if(localStorage.type == "employer"){
      // console.log("YESSSSSSSS from inside componentDidMount")
      this.state.loadingModal = false
      this.setState({
        loadingModal: false
      })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hideModal(){
    $('.ui.small.modal.employer.signup').modal('hide')
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    console.log('isValid',isValid)

    return isValid;
  }

  // function to check if user exists
  checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isEmployerUserExists(val).then(res => {
        // console.log('this is coming from isuserexist', res)
        let errors = this.state.errors;
        let invalid;
        let loadingModal = this.state.loadingModal;
        if (res.data) {
          errors[field] = 'There is user with such ' + field;
          invalid = true;
          loadingModal = true;
        } else {
          errors[field] = '';
          invalid = false;
          loadingModal = false;
        }
        this.setState({ errors, invalid, loadingModal });
      });
    }
  }

  // function to handle submit
  onSubmit(e) {
    e.preventDefault();
      // console.log('captures state on submit', this.state)

      this.setState({ errorsState: false, isLoading: false, loadingModal: true });

      // console.log("After submit loadingModal state ----", this.state.loadingModal)

      // employer signup post
      this.props.employerSignupRequest(this.state).then(
        () => {
          // console.log('you signed up correctly', this.state)

          this.setState({
            loadingModal: false
          })

          this.hideModal();

          this.context.router.push('/employer_login');
        },
        (err) => this.setState({ errorsState: true, isLoading: false, loadingModal: false })
      );

    // this.hideModal()
    window.setTimeout(modalPopup, 33000)

    // function to handle modalPopup
    function modalPopup(){
      // console.log("-------- Running setTimeout ----------")
      if(localStorage.error == "error" && localStorage.isAuthen == "no" && localStorage.type == "none"){

        $('.ui.small.modal.employer.signup').modal('show')

        this.setState({
          loadingModal: false
        })

      }

      if(localStorage.type == "employer") {
        // console.log("hide")

        $('.ui.small.modal.employer.signup').modal('hide')

        this.setState({
          loadingModal: false
        })

      }

    }

  }


render() {
  const { errors } = this.state;

    let authEror;

    // handling authentication error message
    if(this.state.errorsState == true){
      console.log("ERROR")
      authEror = <div id="login_error_texts">Sorry, either your email or password was invalid. Please double-check your email or password.</div>
    } else {
    }

    // spinner starts
    let spinner
    if (this.state.loadingModal == true) {
      // console.log("Spinner this.state.loadingModal -----", this.state.loadingModal)
      spinner = <div className="ui segment">
                  <div id="spinner" className="ui active dimmer">
                    <div className="ui massive text loader"> Loading ...</div>
                  </div>
                </div>

    } else {
      // console.log("Spinner this.state.loadingModal", this.state.loadingModal)
      spinner = <div></div>
    }
    // spinner starts

  return (

          <form id="employer_signup_form" onSubmit={this.onSubmit} className="ui form">

          {/* Spinner Starts */}
            {spinner}
          {/* Spinner Ends */}

          <h1>Employer Signup</h1>

          <br/>
          <div className=" ui divider"></div>
          <br/>

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


EmployerSignupForm.propTypes = {
  employerSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isEmployerUserExists: React.PropTypes.func.isRequired
}

EmployerSignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default EmployerSignupForm;
