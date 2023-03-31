import {
    BottomNavigation,
    BottomNavigationAction,
    Box
    
}from '@mui/material'

import HomeIcon from '@mui/icons-material/Home'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Label } from '@mui/icons-material'

const BottomNavOptions = [
  {label:'Home',icon:<HomeIcon/>},
  {Label:'LinkedIn',icon:<LinkedInIcon/>},
  {Label:'Github',icon:<GitHubIcon/>}
]

const footerStyle = {
  position:'initial',
  background:'#080',
  '@media(min-width: 500px)':{
    display:'none'
  }
}
const BottomNavComp = () => {
  return (
    <BottomNavigation 
      sx={footerStyle} 
      value={'d'} 
      onChange={()=> 'jj'}
        showLabels 
      >  
      <BottomNavigationAction
        label='Home'
        icon={<HomeIcon/>}
      />
      <BottomNavigationAction
        label='Linkedin'
        icon={<LinkedInIcon/>}
      />
      <BottomNavigationAction
        label='Github'
        icon={<GitHubIcon/>}
      />        
    </BottomNavigation>
  )
}

export default BottomNavComp