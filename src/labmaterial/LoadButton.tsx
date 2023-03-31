import {useState,useEffect} from 'react'
import {Stack} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'
const LoadButton = () => {
    const [isLoading , setIsLoading] = useState(true)

    
        setTimeout(()=>setIsLoading(false),5000)
   
  return (
    <Stack direction='row' spacing={2}>
        <LoadingButton
        variant='outlined' 
        loading={isLoading}
        loadingIndicator='Loading...'
        loadingPosition='start'
        startIcon={<SaveIcon/>}
        sx={{padding:'2px 8xp'}}
        >
            load button
        </LoadingButton>
    </Stack>
  )
}

export default LoadButton