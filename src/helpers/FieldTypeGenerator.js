/* eslint-disable prettier/prettier */
import React from 'react'
import { InputComponent } from '../components/Input'
import { DropDownComponent } from '../components/DropDown'

export const renderInput = (field, value, error, handleChange, touched) => {
   return <InputComponent
    label={field.label}
    type={field.type}
    placeholder={field.placeholder}
    name={field.name}
    value={value}
    handleChange={handleChange}
    error={error}
  />
}

export const renderDropDown = (field, value, error, handleChange, touched) => {
    return <DropDownComponent
     label={field.label}
     name={field.name}
     value={value}
     handleChange={handleChange}
     error={error}
     options={field.options}
   />
 }