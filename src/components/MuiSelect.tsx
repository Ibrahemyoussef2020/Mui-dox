import {Box,TextField,MenuItem} from '@mui/material'
import { useState } from 'react'


const MuiSelect = () => {
    const [languge, setLanguge] = useState<string[]>([])
  
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target
        const targetValue = typeof value === 'string' ? value.split(',') : value
        setLanguge(targetValue)     
    }
  return (
    <Box width='350px' style={{padding:'1rem'}}>
        <TextField select label='select languge' 
            value={languge}
            onChange={handleChange}
            fullWidth
            SelectProps={{multiple:true}}
            size='small'
            color='secondary' 
            helperText='plz choose all your languges' 
        >
            <MenuItem  value='html'>Html languge</MenuItem>
            <MenuItem value='css'>Css languge</MenuItem>
            <MenuItem value='js'>Js languge</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect