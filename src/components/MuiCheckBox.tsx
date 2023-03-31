import { useState } from 'react'
import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel } from '@mui/material'

import BookmarkBorder from '@mui/icons-material/BookmarkBorder' 
import BookmarkIcon from '@mui/icons-material/Bookmark'




const MuiCheckBox = () => {
   const [languges,setLanguges] = useState<String[]>([])
   const [helperColor,setHelperColor] = useState('red')
  console.log({languges});
  
   const handleChange = (e:any)=>{
        if(!languges.find(l => l === e.target.value)){        
            setLanguges([...languges,e.target.value])
            setHelperColor(e.target.parentElement.title)  
        }else{
           
            setLanguges(languges.filter(languge => languge !== e.target.value)) 
        } 
        console.log(e.target.parentElement?.title);    
  }
 const returnCheckBox = <FormGroup>
    <FormLabel>select your languges</FormLabel>
        <FormControlLabel 
            value='Html'
            label='Html'
            control={
                <Checkbox 
                    title='orange'
                    checked={languges.includes('Html')}
                    onChange={handleChange}
                    icon={<BookmarkBorder color='warning'/>}
                    checkedIcon={<BookmarkIcon color='warning'/>}
                />
            }
        />
        <FormControlLabel 
            value='Css'
            label='Css'
            control={
                <Checkbox
                    title='#080' 
                    checked={languges.includes('Css')}
                    onChange={handleChange}
                    icon={<BookmarkBorder color='success'/>}
                    checkedIcon={<BookmarkIcon color='success'/>}
                />
            }
        />
        <FormControlLabel 
            value='Javascript'
            label='Javascript'
            control={
                <Checkbox
                    title='#00f' 
                    checked={languges.includes('Javascript')}
                    onChange={handleChange}
                    icon={<BookmarkBorder color='info'/>}
                    checkedIcon={<BookmarkIcon color='info'/>}
                />
            }
        />
    <FormHelperText>
        <span style={{color: helperColor}}>
            you shuld be perfect
        </span>
    </FormHelperText>
  </FormGroup>
  return returnCheckBox  
}

export default MuiCheckBox