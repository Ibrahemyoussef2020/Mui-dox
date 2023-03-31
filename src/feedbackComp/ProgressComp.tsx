import {useState} from 'react'
import{
CircularProgress,
LinearProgress
} from '@mui/material'
const ProgressComp = () => {
  return (
    <div style={{marginTop:"50PX"}}>
        <CircularProgress  color='success' />
        <CircularProgress variant='determinate'  value={80} color='success' />
        <LinearProgress color='warning' />
    </div>
  )
}

export default ProgressComp