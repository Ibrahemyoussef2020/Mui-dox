import {
Stack,
Skeleton
} from '@mui/material'

const SkeletonComp = () => {
  return (
    <Stack>
        {/*<Skeleton variant='text'/>
        <Skeleton variant='rectangular' 
        width='200px' height='200px' 
  sx={{bgcolor:'red'}} animation='wave' />*/}
    
        <Skeleton variant='circular' 
        width='200px' height='200px' 
        sx={{background: '-webkit-linear-gradient(left, transparent 0%,#0ff 50%,transparent 100%)'
    }} animation='wave' />
    
    </Stack>
  )
}

export default SkeletonComp