
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
}from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import React, { useState } from 'react';
import { Stack } from '@mui/system';
const classes ={
    menuButton:'menuButton',
    title:'title',   
}
const linksStackStyle ={
    color:'#fff',
    '@media (max-width:500px)':{
        display:'none'
    }
}
const toolbarStyle = {
        display:'flex',
        justifyContent:'space-between'
    }

const typograSix = {color:'#fff',
fontWeight:'900',
fontStyle:'italic'}    

const NavComp = () => {
    const [dispaly,setDesplay] = useState<boolean|false>(false)
    const menuDisplay = dispaly ? 'block' : 'none'
    
    const handleDrop = (e:any)=>{
        setDesplay(display => !display)
    }
  return (
    <AppBar sx={{position:'initial'}}>
        <Toolbar sx={{background:'#064e06',justifyContent:'space-between'}}>
            <Stack direction='row'>
                <IconButton edge='start' size='small' sx={{background:'#0e5c0b',marginRight:'.5rem'}}>
                    <AccountCircleIcon sx={{color:'#1dcd1d'}} />
                </IconButton>
                <Typography variant='h6' component='div'sx={typograSix}>
                    PAGELOGO
                </Typography>
            </Stack>
            <Stack spacing={2} direction='row' sx={linksStackStyle} >
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit'>Githup</Button>
                <Button color='inherit'>Linkedin</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default NavComp

/*

    <>
    <AppBar position="static" sx={{background:'green'}}>
    <Toolbar sx={toolbarStyle}>
        <IconButton title='IconButton' onClick={ handleDrop } 
            edge="start" className={classes.menuButton} sx={{background:'#1da31d'}} aria-label="menu">
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
        News
        </Typography>
        
        <Button color="inherit">Login</Button>
        
    </Toolbar>
    </AppBar>
    <div style={{
        width:'25%',
        minWidth:'200px',
        minHeight:'230px',
        background:'#666',
        padding:'1rem .5rem',
        display:menuDisplay
    }}>
        <ul>
            <li>Home</li> <li>US</li> 
            <li>Refrence</li> <li>Abouts</li>
        </ul>
    </div>
    </>

*/