import React from 'react'
import {Admin, Resource, ListGuesser} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import CarList from './CarList'
import CarCreate from './CarCreate'
import CarEdit from './CarEdit'

const dataProvider = restProvider('http://localhost:3000')

function Administrator() {
  return (
      <Admin dataProvider={dataProvider}>
        <Resource name="trucks" list={CarList} create={CarCreate} edit={CarEdit}/>
      </Admin>
  )
}

export default Administrator
