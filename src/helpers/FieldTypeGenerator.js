/* eslint-disable prettier/prettier */
import React from 'react'
import { InputComponent } from '../components/Input'
import { DropDownComponent } from '../components/DropDown'
import { DatePickerComponent } from '../components/DatePicker'

 const renderInput = (field, value, error, handleChange, touched) => {
  return (
    <InputComponent
      label={field.label}
      type={field.type}
      placeholder={field.placeholder}
      name={field.name}
      value={value}
      handleChange={handleChange}
      error={error}
    />
  )
}

 const renderDropDown = (field, value, error, handleChange, touched) => {
  return (
    <DropDownComponent
      label={field.label}
      name={field.name}
      value={value}
      handleChange={handleChange}
      error={error}
      options={field.options}
    />
  )
}

 const renderDatePicker = (
  field,
  value,
  error,
  handleChange,
  touched
) => {
  return (
    <DatePickerComponent
      label={field.label}
      name={field.name}
      value={value}
      handleChange={handleChange}
      error={error}
      touched={touched}
    />
  )
}


export const renderFeild = (field, value, error, handleChange, touched) => {
  
  if(!field.tag) return renderInput(field, value, error, handleChange, touched);
  
  switch(field.tag){
    case 'dropdown':
      return renderDropDown(field, value, error, handleChange, touched);
    case 'datepicker':
      return renderDatePicker(field, value, error, handleChange, touched);
    default:
      return renderInput(field, value, error, handleChange, touched);
  }
}