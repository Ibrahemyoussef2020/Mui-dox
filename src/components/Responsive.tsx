import {Box} from '@mui/material'

const Responsive = ({theme}:any) => {
  return (
    <Box
    sx={{
       width:{
        xs:'100%',
        sm:200,
        md:'100%',
        lg:700,
        xl:100
       },
       height:'500px',
       bgcolor:{
            xs:'secondary.main',
            sm:theme.color.red,
            md:'green',
            lg:'#000',
            xl:'red'
       }
    }}  
    >
    </Box>
  )
}

export default Responsive