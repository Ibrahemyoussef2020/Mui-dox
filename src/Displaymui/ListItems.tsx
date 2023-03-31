import {List,
ListItem,
ListItemAvatar,
ListItemButton,
ListItemText,
ListItemIcon,
Box,
Badge,
Avatar,
Rating
} from '@mui/material'
import BageComp from './BageComp'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';

const ListItems = [
    {bage:<AccountCircleIcon/>,primary:'Ahmed Yossef',
    secondary:'I think that was awesome i will try again',
    rating:<Rating value={4} sx={{paddingLeft:'70px'}}/>
    },
    {bage:<AccountCircleIcon/>,primary:'Ali Mohammed',
    secondary:'yap not bad as i have suggest never i feel sory',
    rating:<Rating value={5} sx={{paddingLeft:'70px'}}/>
    },
    {bage:<AccountCircleIcon/>,primary:'Mona Saeed',
    secondary:'good page websit and profile page',
    rating:<Rating value={3.5} sx={{paddingLeft:'70px'}} precision={.5}/>
    },
]

const ListItemsComp = () => {
  return (
    <Box className='comments' sx={{bgcolor:'#1bbb1b61',marginTop:'1.2rem',maxWidth:'500PX'}}>
        <List>
            {ListItems.map((item,index) =>(
                <React.Fragment key={index}>
                <ListItemButton>
                    <ListItem disablePadding>
                    <ListItemIcon>
                        <Avatar>
                            <AccountCircleIcon sx={{fontSize:'2rem', width:'100%'}} />
                        </Avatar>
                    </ListItemIcon>         
                    <ListItemText primary={`${item.primary}`}
                        secondary={item.secondary}
                    />
                    </ListItem>
                </ListItemButton>
                {item.rating}
                </React.Fragment>
            ))
            }
        </List>
    </Box>
  )
}

export default ListItemsComp