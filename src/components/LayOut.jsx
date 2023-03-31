import React, { useEffect, useState,useRef } from 'react'
import {AppBar,Toolbar,
Typography ,InputBase,Badge,
AccountCircle,Box,Stack, TextField, InputAdornment 
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
//import  {AccountCircleIcon} from '@mui/icons-material/AccountCircle'
import  ContactMailIcon from '@mui/icons-material/ContactMail'
import  SearchIcon from '@mui/icons-material/Search'
import { border, padding } from '@mui/system';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { updateNonNullChain } from 'typescript';




const LayOut = ({theme}) => {
    const bodyRef = useRef(null)
    const [border,setBorder] = useState(true)
    const {red,danger} = theme.color

    const containerStyle = {   
            background:red,
            boder: `1px solid ${danger}`,
            width:'200px',
            height:'200px',
            paddingTop:'50px' 
    }

    const fieldRef = useRef(null)
    
console.log(border);

    useEffect(()=>{
        const handleBorder = (e)=>{
            if(e.path[0].tagName !== 'INPUT'){
                setBorder(true)
            }else{
                setBorder(false)
            }
        }

        document.body.addEventListener("click",handleBorder)

        return ()=>(
            document.body.removeEventListener("click",handleBorder)
        ) 
    })            
    
        
       //document.addEventListener("DOMContentLoaded",handleBorder)

    return(
        <Box sx={containerStyle} >
            <TextField
                ref={fieldRef}
                className='btn1'
                sx={{
                    //border:'.5px dashed #fff',
                    //outline:'none',
                    outline: border === true ? '.3px solid green' : 'none',
                    borderRadius:'1px',
                    boxSizing:'border-box'
                }}
                label='laaaabel'
                variant="outlined"
                InputProps={{
                    endAdornment:<InputAdornment position='end'>
                        <SearchIcon />
                    </InputAdornment>
                }}     
            />
            <button className='btn1'>
                iam button
            </button>
        </Box>
    )
  
}

export default LayOut