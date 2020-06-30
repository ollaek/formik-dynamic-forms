/* eslint-disable prettier/prettier */
import React from 'react'
import { Form, Col } from 'react-bootstrap'

export const DropDownComponent = ({
  name,
  label,
  value,
  handleChange,
  error,
  options,
  touched
}) => {
  return (
    <Form.Group as={Col} md='3' controlId={'formInput' + name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as='select'
        size='lg'
        custom
        name={name}
        value={value}
        onChange={handleChange}
        isInvalid={!!error}
        touched={touched}
      >
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          )
        })}
      </Form.Control>
      {error && <div style={{color: "red"}}>{error}</div>}
    </Form.Group>
  )
}
