import React from 'react'
import Input from './fields/Input'
import { INPUT, RADIO, SELECT } from './FormikTypes'

const FormikControl = (props) => {
  const {control,...rest} = props
  switch(control){
    case INPUT: return <Input {...rest} />
    case RADIO:
    case SELECT:
    default : return null        
  }
}

export default FormikControl