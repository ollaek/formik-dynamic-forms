import React from 'react'

import { DynamicForm } from 'formik-dynamic-forms'
import * as Yup from 'yup'
import 'formik-dynamic-forms/dist/index.css'

const App = () => {
  const signupValidationSchema = Yup.object().shape({
    name: Yup.string()
      .max(40, 'Please enter no more than 40 characters')
      .required('Please enter your first name'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter an email'),
    password: Yup.string()
      .required('Please enter a password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Please enter password that consist of at least 8 characters, number, special character, capital and small letters'
      ),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirm is required'),
    birthDate: Yup.date().required('Birthday is required')
  })

  const fields = [
    {
      label: 'Username',
      name: 'name',
      type: 'test',
      placeholder: 'please enter your name'
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
      placeholder: 'please enter your email'
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: '********'
    },
    {
      label: 'Confirm Password',
      name: 'passwordConfirm',
      type: 'password',
      placeholder: '********'
    },
    {
      tag: 'dropdown',
      label: 'Gender',
      name: 'gender',
      options: [
        {
          value: 'M',
          text: 'Male'
        },
        {
          value: 'F',
          text: 'Female'
        }
      ]
    },
     {
       tag: 'datepicker',
       label: 'Birth Date',
       name: 'birthDate',
       placeholder: 'pick a date'
     }
  ]

  const onSubmit = (values) => {
    console.log(values)
  }

  const initial = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    birthDate: ''
  }

  return (
    <DynamicForm
      schema={signupValidationSchema}
      submit={onSubmit}
      feilds={fields}
      initialValues={initial}
      buttonText='SignUp'
    />
  )
}

export default App
