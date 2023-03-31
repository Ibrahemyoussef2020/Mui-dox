import {useState} from 'react'

import { Autocomplete,TextField,Chip,Box } from '@mui/material'
const MyAutoComp = () => {
    const fixedDish = [dishes[0]]
    const [dish,setDish] = useState([...fixedDish])
    const handleChange = (e,newOrders)=>{
        setDish([
            ...fixedDish,
            ...newOrders.filter(newOrder => fixedDish.find(f => f.type !== newOrder.type))
        ])
    }
  return (
    <Box>
        <Autocomplete
            sx={{paddingTop:'2.5rem',width:'400px'}}
            multiple 
            value={dish}
            options={dishes}
            onChange={handleChange}
            getOptionLabel={option => option.type !== undefined ? `${option.type} ${option.price}` : 'type your dish' }
            renderTags={(tagValeus,getTagProps)=>
                tagValeus.map((tagValeu,index)=>( 
                    // you must name it index not i or other
                    // if you wont close button work
                <Chip 
                    key={index}
                    label={`${tagValeu.type} ${tagValeu.price}`}
                    {...getTagProps({index})}
                    disabled={fixedDish.indexOf(tagValeu) !== -1}
                />))
            }
            renderInput={props=> <TextField {...props} label='choose your Fav dish'/>}
        />
    </Box>
  )
}

export default MyAutoComp

const dishes = [
    {type:'meat' , price:50},
    {type:'chikken' , price:40},
    {type:'fruites' , price:30},
    {type:'vigetabels' , price:15},
    {type:'burger' , price:20},
    {type:'nomal fish' , price:30},
    {type:'sea food' , price:60},
    {type:'milk' , price:22},
    {type:'ducks' , price:45},
    {type:'geraff' , price:205},
]