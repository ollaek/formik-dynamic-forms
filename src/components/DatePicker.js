/* eslint-disable prettier/prettier */
import React from 'react'
import { Form, Col } from 'react-bootstrap'
import { useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'

export const DatePickerComponent = ({
  name,
  label,
  placeholder,
  value,
  error,
  handleChange,
  touched
}) => {
  const { setFieldValue } = useFormikContext()

  return (
    <Form.Group as={Col} md='3' controlId={'formInput' + name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        isInvalid={!!error}
        name={name}
        value={(value && new Date(value)) || null}
        touched={touched}
        as={() => (
          <DatePicker
            selected={(value && new Date(value)) || null}
            onChange={(val) => setFieldValue(name, val)}
          />
        )}
      />
      {error && <div style={{color: "red"}}>{error}</div>}
    </Form.Group>
  )
}
