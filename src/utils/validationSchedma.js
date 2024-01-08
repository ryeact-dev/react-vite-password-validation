import * as yup from 'yup';

const passwordRules =
  /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^(?=.*[-+_!@#$%^&*.,?])^([a-zA-Z0-9]{8,})$/;

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email must not be empty'),
  age: yup
    .string()
    .matches(/^[0-9]+$/, 'age must be a number')
    .required('Age must not be empty'),
  new_password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message: 'requirements not met',
    })
    .required('Password is required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm Password required'),
});
