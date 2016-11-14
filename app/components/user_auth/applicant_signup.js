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

    console.log("Modal loading ---------", this.state.loadingModal)
    // localStorage.setItem('type', "none");

    if(localStorage.type == "applicants"){
      console.log("YESSSSSSSS from inside componentDidMount")
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

  changeLoadingModalState(){
    console.log("changeLoadingModalState ------", this.state.loadingModal)
    this.state.loadingModal = false
    this.setState({
      loadingModal: false
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('captures state on submit', this.state)
      this.setState({ errorsState: false, isLoading: false, loadingModal: true });

      this.props.userSignupRequest(this.state).then(
        (res) => {
          console.log('you signed up correctly', this.state)

          this.setState({
            loadingModal: false
          })

          this.hideModal();

          this.context.router.push('/login');
        },
        (err) => this.setState({ errorsState: true, isLoading: false, loadingModal: false })
      );

      // this.hideModal()
      window.setTimeout(modalPopup, 33000)


      function modalPopup(){
        console.log("-------- Running setTimeout ----------")
        if(localStorage.error == "error" && localStorage.isAuthen == "no" && localStorage.type == "none"){

          $('.ui.small.modal.applicant.signup').modal('show')

          this.setState({
            loadingModal: false
          })

        }

        if(localStorage.type == "applicant") {
          console.log("hide")
          //
          // this.state.loadingModal = false
          // this.setState({
          //   loadingModal: false
          // })

          $('.ui.small.modal.applicant.signup').modal('hide')

          this.setState({
            loadingModal: false
          })
        }

      }

  }


render() {
  const { errors } = this.state;

  let authEror;

  if(this.state.errorsState == true){
    console.log("error logs for not able to log in")
    authEror = <div id="login_error_texts">Sorry, either your email or password was invalid. Please double-check your email or password.</div>
  } else {
  }

  // spinner starts
  let spinner
  if (this.state.loadingModal == true) {
    console.log("this.state.isLoading -----", this.state.loadingModal)
    spinner = <div className="ui segment">
                <div id="spinner" className="ui active dimmer">
                  <div className="ui massive text loader"> Loading ...</div>
                </div>
              </div>

  } else {
    console.log("this.state.isLoading", this.state.loadingModal)
    spinner = <div></div>
  }
  // spinner starts

  return (


          <form onSubmit={this.onSubmit} className="ui form">

              {/* Spinner Starts */}
                {spinner}
              {/* Spinner Ends */}

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
