import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'

const CarEdit = (props) => {
  return (
    <Edit title='New Truck' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='make' />
        <TextInput source='model' />
        <TextInput source='year' />
        <TextInput source='miles' />
        <TextInput source='price' />
        <TextInput multiline source='image' />
      </SimpleForm>
    </Edit>
  )
}

export default CarEdit
