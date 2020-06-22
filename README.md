# formik-dynamic-forms

> A React Library for creating dynamic forms using Formik, Yup validation, Bootstrap

[![NPM](https://img.shields.io/npm/v/formik-dynamic-forms.svg)](https://www.npmjs.com/package/formik-dynamic-forms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save formik-dynamic-forms
```

## Usage

```jsx
import React, { Component } from 'react'

import { DynamicForm } from 'formik-dynamic-forms'
import 'formik-dynamic-forms/dist/index.css'

const Example = () => {
    return <DynamicForm />
}
```

## Porps

|name  |type   |description   |   
|---|---|---|
|schema   |Yup schema   |   |
|feilds   |List of Objects   |Objects properties in the section below   |
|submit   |Function   |you will receive object with form values   |
|initialValues   |Object   |all inputs default values   |
|buttonText   |String   |the submittion button value   |

## Field Object

|name  |type   |description   |   
|---|---|---|
|tag   |String (optional)   |the field tag (ex, input, dropdown .., etc). by default if not provided it is Input Tag ( <Input /> )   |
|label   |String   |   | 
|name   |String   |field name which is the same as yup property, needed for validation   |
|type   |String   |text, email , password ...., etc   |
|placeholder   |String   |   |
|options   |List Of Objects   |dropdown list options, object props (value: string, text: string)    |

## Supported Fields Types
 - plain Input .. <Input />
 - dropdown .. <Select />

## Example (Signup Form)

```jsx
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
      .required('Password confirm is required')
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
    }
  ]

  const onSubmit = (values) => {
    console.log(values)
  }

  const initial = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
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
```

## License

Ollaek © [ollaek](https://github.com/ollaek)
