import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import {INPUT} from './FormikTypes'
import AutoCompeleteToFormik from './fields/AutoCompelete' 
function validateEmail(value) {
    let error;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address yahbal';
    }
    return error;
  }
// we can connect the validate and validationSchema
const FormikContainer = () => {
    const initialValues = {email:''}
    const validationSchema = Yup.object({
        email:Yup.string().required('required')
    })
    const onSubmit = (values , helper)=> {
        console.log('submited',values)
        helper.resetForm() 
    }
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
        {formik=>(
            <Form style={{background:"red"}}>
                <FormikControl
                    validate={validateEmail}
                    control={INPUT}
                    type='email'
                    label='Email'
                    name='email'
                />
                <AutoCompeleteToFormik />
                <button type='submit'>
                     submit
                </button>    
            </Form>
        )}
    </Formik>
  )
}

export default FormikContainer