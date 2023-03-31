import React,{useState} from 'react'
import {Box,Switch,FormControlLabel} from '@mui/material'
const MuiSwitch = () => {
   const [switchStatus,setSwitchStatus] = useState(false)
  const handleChangeMode =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSwitchStatus(e.target.checked)
  }
  const mode = {
    color:switchStatus === true ? '#fff' : '#000',
    ground:switchStatus === true ? '#000' : '#fff'
  }
   return (
    <>
    <Box>
        <FormControlLabel
            label='dark mode' 
            control={
                <Switch 
                    checked={switchStatus}
                    onChange={handleChangeMode}
                />
            }
        />    
    </Box>
    <div style={{background:mode.ground,color:mode.color}}>
            <h1>the title head</h1>
            <p>
            JSONPlaceholder is a free online REST API that 
            you can use whenever you need some fake data. 
            It can be in a README on GitHub, 
            for a demo on CodeSandbox, in code examples
             on Stack Overflow
             ...or simply to test things locally.
            </p>
    </div>
    </>
  )
}

export default MuiSwitch