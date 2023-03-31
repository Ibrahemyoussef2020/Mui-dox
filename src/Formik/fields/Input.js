import {useState} from 'react'
import {ErrorMessage,Field} from 'formik'
import {TextField,Box,Grid} from '@mui/material'
import theme from '../../components/themes/theme'
import {red} from '../../components/themes/theme'
const Input = (props) => {
    const {name,label,as,...rest} = props
    const [islabel,setIsLabel] = useState(label)
  return (
    // WE MUST HAVE ANY TYPE COLOR WITHOUT PALETTE 
    <Grid sx={{padding:'1rem',color:red,
        width:'400px',
        minHeight:'400px',
        display:'flex',
        flexDirection:'column',
        alignItems:'space-around',
        justifyContent:'space-around',
        background:'#eee'
    }}>
        <Box>
            <label htmlFor={name}>{islabel}</label>
            <Field as={TextField} id={name} name={name} {...rest}
              variant='outlined'
              sx={{outline:"none"}}
              fullWidth
              label='Email'
              onClick={()=> setIsLabel(null)}
              color='secondary'
              // WE MUST RIGHT THE COLOR WITHOUT HIS SOURCE TO THEME
            />
            <ErrorMessage name={name} className='error' />
        </Box>

    </Grid>
  )
}

export default Input