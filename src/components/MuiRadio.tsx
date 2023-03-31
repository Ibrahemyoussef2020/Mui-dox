import React, {useState} from 'react'
import{
Box,   
FormGroup,
FormControl,
FormLabel,
FormControlLabel,
Radio,
RadioGroup,
FormHelperText
} from '@mui/material'

import BookmarkBorderIcon  from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon  from '@mui/icons-material/Bookmark'

const MuiRadio = ({theme} : any) => {
    const {red} = theme.color
    console.log(red);
    
    const [experience,setExperience] = useState('')
    const [helperColor,setHelperColor] = useState('')
    
    const handleChange = (e:any)=>{
        setExperience(e.target.value)
        setHelperColor(e.target.id)
        //console.log(e.target.id)     
    }
    
  return (
    <Box>
        <FormGroup>
            <FormLabel>select your experience</FormLabel>
                <RadioGroup 
                    value={experience}
                    onChange={(e)=>handleChange(e)}
                >
                    <FormControlLabel 
                        value='1-3'
                        label='1-3'                      
                        control={<Radio size='small'
                                    color='warning'
                                    id='orange'
                                    icon={<BookmarkBorderIcon/>}
                                    checkedIcon={<BookmarkIcon />}
                                  />}
                    />
                    <FormControlLabel 
                        value='4-6'
                        label='4-6'
                        control={<Radio size='small'
                                    color='info'
                                    id='#00f'
                                    icon={<BookmarkBorderIcon/>}
                                    checkedIcon={<BookmarkIcon />}
                                  />}
                                  
                    />
                    <FormControlLabel 
                        value='7-10'
                        label='7-10'
                        control={<Radio 
                                    size='small'
                                    color='error'                           
                                    id='#f00'
                                    icon={<BookmarkBorderIcon/>}
                                    checkedIcon={<BookmarkIcon />}
                                  />}
                    />
                </RadioGroup>
                <div>
                    <small style={{color:helperColor}}>
                    the enterview will selected depondding on your exp
                    </small>
                </div>
        </FormGroup>
    </Box>
  )
}

export default MuiRadio