import {
Avatar,
AvatarGroup,
Stack
} from '@mui/material'

import HomeIcon from '@mui/icons-material/Home'
import BageComp from './BageComp'
const AvatarComp = () => {
  return (
  <>
    <Stack sx={{alignItems:'center',justifyContent:'center',position:'fixed',top:'75px',right:'10px'}}>
        <Avatar sx={{overflow:'visible' ,width:'35px',height:'35px',background:'#064e06'}}>
          <BageComp />
        </Avatar>
        <Avatar sx={{width:'35px',height:'35px',background:'#064e06'}}>
          <HomeIcon />
        </Avatar>
        <Avatar className='aaa' src='imges/ibrahim.jpg'
          sx={{padding:'2px',
            borderRadius:'50%',
            border:'1px solid #ccc',
            background:'#fff',
            marginLeft:'3px'
        }}
        />
    </Stack>
    <Stack>
      {/*<AvatarGroup>
        <Avatar src='imges/ibrahim.jpg'/>
      </AvatarGroup>*/}
    </Stack>
  </>
  )
}

export default AvatarComp