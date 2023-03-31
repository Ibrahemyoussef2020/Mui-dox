
import {
Drawer,
Box,
Typography
} from '@mui/material'

const DrawerComp = () => {
  return (
   <Drawer open={true} anchor='left' sx={{width:'25%', minWidth:'250px',background:"yellow"}}>
    <Box bgcolor='inherit'>
    <div style={{background:'inherit'}} title='jjjjj'>jfkjk</div>
    </Box>
   </Drawer>
  )
}

export default DrawerComp


/*
    <Box   bgcolor='green' minHeight='100%' width='100%'>
        <ul style={{
    width:'100%',
    minHeight:'100%',
    textAlign:'center' ,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    backgroundColor:'red',
    color:'#fff'
}} >
                <li color='inherit'style={{background:'#000'}}>Fetchers</li>
                <li color='inherit'style={{background:'#fff'}}>About</li>
                <li color='inherit'style={{background:'#000'}}>Home</li>
                <li color='inherit'style={{background:'#fff'}}>Pages</li>
        </ul> 
        </Box> 
        
        const ulistStyle = {
    width:'100%',
    height:'100%',
    textAlign:'center' ,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    backgroundColor:'red',
    color:'#fff'
}



*/