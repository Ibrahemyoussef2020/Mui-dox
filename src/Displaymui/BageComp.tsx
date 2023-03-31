import {Stack,Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
const BageComp = () => {
  return <Badge variant='dot' invisible={false} color='error'><MailIcon/></Badge>        
}

export default BageComp

/*
<Badge color='error' {badgeContent={10000}} dot showZero max={9}>
            <MailIcon />
</Badge>
*/