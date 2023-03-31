import {useState} from 'react'
import {Autocomplete,Stack,TextField} from '@mui/material'

const skillsOptions = ['html 4', 'html 5','css' ,'css 3', 'js' , 'react js' , 'ts' , 'reac ts' , 'next js' , 'next ts' , 'sass']
const skillsTwoMap = skillsOptions.map((skill,index)=>({
    id:index + 1,
    label:skill
}))

const AutoCompeleteToFormik = () => {
    const [skills,setSkills] = useState(null)
    const [skills2,setSkills2] = useState(null)
    console.log(skills);
    console.log(skills2);
  
  return (
    <>
        <Autocomplete 
            value={skills}
            options={skillsOptions}
            renderInput={props=><TextField {...props} label='skills' />}
            onChange={(e,newValue)=> {
                setSkills(newValue)
                console.log(typeof e.target.value);    
            }}
            //freeSolo
        />
        {/*<Autocomplete
            value={skills2}
            options={skillsTwoMap}
            renderInput={props=><TextField {...props} label='skills 2' variant='standard'/>}
            onChange={(e,newValue)=>{
                setSkills2(newValue)
            }}
        />
        <p>hhhh</p>  */}    
    </>
  )
}

export default AutoCompeleteToFormik
