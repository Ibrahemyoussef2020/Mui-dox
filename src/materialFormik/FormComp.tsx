import React from 'react'
import {Formik,Form,} from 'formik'
import { INPUT } from './FieledTypes'
import FormControl from './FormControl.jsx'
import Control from './Control'
const FormComp:React.FC<{}>=(FormControl:any)=> {
  
    interface MyFormValues {
        firstName: string;
    }
    const initialValues: MyFormValues = { firstName: '' };

   /* const validtation = (values:any)=>{
        const errors = {}
        if (!values.firstName) {
            errors.firstName = 'required'
        }
        return errors
    }*/

    return (
     <div> form
        <Formik
        initialValues={initialValues}

        onSubmit={(values, actions) => {
            console.log('sub');    
          }}
        >
        {formik=>{
            console.log(formik)
            
      return  <Form>
            <Control control='input'/>
            <Control control='field'/>
            <input value='submit' type='submit' />
        </Form>
        }}
    </Formik>
     </div>
  )
}

export default FormComp