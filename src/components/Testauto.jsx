import {useState} from 'react'
import { 
Autocomplete,
TextField,
Chip,
Box } from '@mui/material'

const Testauto = () => {
    const fixedDish = [dishesList[2]]
    const [dishes,setDishes] = useState([...fixedDish])
    
    console.log(dishes)
    console.log(fixedDish);

    const handleChange = (e,newOrders)=>{
        setDishes([
            ...fixedDish,
            ...newOrders.filter(order=>(
                fixedDish.find(fixed => fixed.type !== order.type)
            ))
        ])
        
    }

  return (
    <Box sx={{marginTop:'2rem'}}>
        <Autocomplete
            multiple
            value={dishes}
            options={dishesList}
            onChange={handleChange}
            getOptionLabel={label => label.type !== undefined ? `${label.type} ${label.price}` : 'enter order'}
            /*renderTags={(tagValues,getProps)=>{
                tagValues.map((dish,index)=> <Chip 
                    key={index}
                    label={dish=> dish.type !== undefined ? `${dish.type} ${dish.price}`: 'choose your dish'}
                    {...getProps({index})}
                    disabled={fixedDish.indexOf(dish)!== -1}
                />)
            }}*/
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
            renderInput={props => <TextField {...props} label='the food menu'/>}
        />
    </Box>
  )

}
export default Testauto

const dishesList = [
    {type:'meat' , price:50},
    {type:'chikken' , price:40},
    {type:'salad' , price:0},
    {type:'fruites' , price:30},
    {type:'vigetabels' , price:15},
    {type:'burger' , price:20},
    {type:'nomal fish' , price:30},
    {type:'sea food' , price:60},
    {type:'milk' , price:22},
    {type:'ducks' , price:45},
    {type:'geraff' , price:205},
]