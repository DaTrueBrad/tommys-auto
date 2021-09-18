import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const CarCreate = (props) => {
  return (
    <Create title='New Truck' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='make' />
        <TextInput source='model' />
        <TextInput source='year' />
        <TextInput source='miles' />
        <TextInput source='price' />
        <TextInput multiline source='image' />
      </SimpleForm>
    </Create>
  )
}

export default CarCreate
