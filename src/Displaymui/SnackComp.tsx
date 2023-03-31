import {useState,forwardRef} from 'react'
import {
Snackbar,
Button,
Alert,
AlertProps,
} from '@mui/material'

const SnackbarAlert = forwardRef<HTMLDivElement,AlertProps>(
   function SnackbarAlertChild(props,ref){
    return <Alert ref={ref} {...props} />
   }
)



const SnackComp = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    /*
    <>
    <Button onClick={()=>setIsOpen(isOpen=> !isOpen)}>show snack</Button>
    <div style={{position:'fixed',top:'20px',
        background:'red',
        padding:'10px',
        display: isOpen ? 'block' : 'none',
        }}>
    <Snackbar 
        message='you have pass 5 degrees now'
        autoHideDuration={5000}
        open={isOpen} 
        sx={{position:'initial'}}
    />
    </div>
    </>
    */
   <Snackbar open={true}>
    <SnackbarAlert  severity='warning'>
            submited
    </SnackbarAlert>
   </Snackbar>
  )
}

export default SnackComp