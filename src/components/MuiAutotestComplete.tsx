import React,{useState} from 'react'
import {Stack ,Autocomplete,TextField } from '@mui/material'

type skillOpj = {
    id:number,
    label:string
}
const skillsOptions = ['html 4', 'html 5','css' ,'css 3', 'js' , 'react js' , 'ts' , 'reac ts' , 'next js' , 'next ts' , 'sass']
const skillsTwoMap = skillsOptions.map((skill,index)=>({
    id:index + 1,
    label:skill
}))

const MuiAutoComplete = () => {
    const [skills,setSkills] = useState<string|null>(null)
    const [skills2,setSkills2] = useState<skillOpj|null>(null)
    console.log(skills);
    console.log(skills2);
  
  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete 
            value={skills}
            options={skillsOptions}
            renderInput={props=><TextField {...props} label='skills' />}
            onChange={(e:any,newValue:string|null)=> {
                setSkills(newValue)
                console.log(typeof e.target.value);    
            }}
            //freeSolo
        />
        <Autocomplete
            value={skills2}
            options={skillsTwoMap}
            renderInput={props=><TextField {...props} label='skills 2' variant='standard'/>}
            onChange={(e:any,newValue:skillOpj|null)=>{
                setSkills2(newValue)
            }}
        />
        <p>hhhh</p>      
    </Stack>
  )
}

export default MuiAutoComplete