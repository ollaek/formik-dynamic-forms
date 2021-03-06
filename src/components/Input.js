/* eslint-disable prettier/prettier */
import React from 'react'
import { Form, Col } from 'react-bootstrap'

export const InputComponent = ({
  name,
  label,
  type,
  placeholder,
  value,
  handleChange,
  error,
  touched,
}) => {
  return (
    <Form.Group as={Col} md='3' controlId={'formInput' + name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        isInvalid={!!error}
        touched={touched}
      />
      {error && <div style={{color: "red"}}>{error}</div>}
    </Form.Group>
  )
}
