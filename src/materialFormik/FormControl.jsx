import React from 'react'
import { INPUT } from './FieledTypes'
import Input from './formFields/Input'

const FormControl = (props) => {
  const {control} = props
  //console.log(control);
 
 switch(control){
    case INPUT:
     // console.log('INPUT from FormControl');
      
        return <input 
            type={type}
            name={'name'}
            className={'className'}
           // as={as}
            {...props}
        />
    default : console.log('NULL from FormControl'); return <input/> 
  }

}

export default FormControl