import React,{useState} from 'react'
import {Rating,Stack} from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { log } from 'console';


const MuiRating = () => {
    const [rating,setRating] = useState<number | null>(null)
    const handleChange = (e:React.ChangeEvent<{}>,newRating:number|null)=>{
        setRating(newRating)
        //console.log(e.target.value)
        //console.log(typeof e.target.value);
        console.log(e.target);
        
    }
  return (
    <Stack spacing={4}>
        <Rating 
            value={rating}
            onChange={handleChange}
            precision={0.5}
            icon={<FavoriteOutlinedIcon/>}
            emptyIcon={<FavoriteBorderOutlinedIcon />}
           // highlightSelectedOnly
        />
    </Stack>
  )
}

export default MuiRating