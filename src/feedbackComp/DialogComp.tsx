import {useState} from 'react'
import{
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@mui/material'
const DialogComp = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    <Button onClick={()=> setIsOpen(true)}>open</Button>
     <Dialog open={isOpen}>
        <DialogTitle>the submit status</DialogTitle>
        <DialogContent>
        the submit has done
        </DialogContent>
        <DialogActions>
        <Button onClick={()=> setIsOpen(false)}>close</Button>
        </DialogActions>
     </Dialog>
    </>
  )
}

export default DialogComp