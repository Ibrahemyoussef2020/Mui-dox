import {useState} from 'react'
import {
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon
} from '@mui/material'

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
const SpeedDialComp = () => {
  const speedActions = [
    {icon:<SaveIcon/>,title:'save'},
    {icon:<PrintIcon/>,title:'print'},
    {icon:<ShareIcon/>,title:'share'}
  ]
  const [isOpen,setIsOpen] = useState<boolean>(false)
  return (
    <section>
        <SpeedDial
          id='SpeedDial'
          ariaLabel='tools'     
          icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
          //hidden={}
          onOpen={()=>setIsOpen(true)}
          onClose={()=>setIsOpen(false)} 
          sx={{position:'fixed',bottom:'20px',right:'20px'}}>
          {speedActions.map(action =>(
              <SpeedDialAction 
                key={action.title}
                icon={action.icon}
                tooltipTitle={action.title}
              />
          ))}
        </SpeedDial>
    </section>
  )
}

export default SpeedDialComp