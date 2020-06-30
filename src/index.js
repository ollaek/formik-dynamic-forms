import React from 'react'
import { Formik } from 'formik'
import { Form, Button } from 'react-bootstrap'
import { renderFeild } from './helpers/FieldTypeGenerator'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import './styles.module.css'

export const DynamicForm = ({
  schema,
  submit,
  feilds,
  initialValues,
  buttonText
}) => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={submit}
      initialValues={initialValues}
    >
      {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {feilds &&
            feilds.map((field) => {
              return (
                <Form.Row key={field.name}>
                  {renderFeild(
                    field,
                    values[field.name],
                    errors[field.name],
                    handleChange,
                    touched[field.name]
                  )}
                </Form.Row>
              )
            })}
          <Button type='submit'>{buttonText}</Button>
        </Form>
      )}
    </Formik>
  )
}
