import {useState} from 'react'
import {
    IconButton,
    Stack,
    Alert,
    AlertTitle,
    Typography
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
const AlertComp = () => {
    const open = false;
  return ( 
        <Alert severity='warning' onClose={()=>open === false} sx={{position:"relative",width:'75%',margin:'20px auto'}}>
            <AlertTitle>notic : </AlertTitle>
            <IconButton sx={{position:'absolute',top:'30%',right:'5px'}}><DeleteIcon/></IconButton>
                Plz weviw Alert code source in mui      
        </Alert>
  )
}

export default AlertComp