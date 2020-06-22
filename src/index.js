import React from 'react'
import { Formik } from 'formik'
import { Form, Button } from 'react-bootstrap'
import { renderInput, renderDropDown } from './helpers/FieldTypeGenerator'

import 'bootstrap/dist/css/bootstrap.min.css'

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
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {feilds &&
            feilds.map((field) => {
              return (
                <Form.Row key={field.name}>
                  {field.tag
                    ? field.tag === 'dropdown'
                      ? renderDropDown(
                          field,
                          values[field.name],
                          errors[field.name],
                          handleChange,
                          handleBlur,
                          touched[field.name]
                        )
                      : null
                    : renderInput(
                        field,
                        values[field.name],
                        errors[field.name],
                        handleChange,
                        handleBlur,
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
