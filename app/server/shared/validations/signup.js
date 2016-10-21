import Validator from 'validator';
var isEmpty = require('lodash.isempty');

export default function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.name)) {
    errors.name = 'This field is required';
  }
  if (Validator.isNull(data.first_name)) {
    errors.first_name = 'This field is required';
  }

  if (Validator.isNull(data.last_name)) {
    errors.last_name = 'This field is required';
  }

  if (Validator.isNull(data.email)) {
    errors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isNull(data.password)) {
    errors.password = 'This field is required';
  }
  if (Validator.isNull(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required';
  }
  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}
