import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'


function CarList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='make' />
        <TextField source='model' />
        <TextField source='year' />
        <TextField source='miles' />
        <TextField source='price' />
        <TextField source='image' />
        <EditButton basePath='/trucks' />
        <DeleteButton basePath='/trucks' />
      </Datagrid>
    </List>
  )
}

export default CarList
