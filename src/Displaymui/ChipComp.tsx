import {useState} from 'react'
import {Stack,Chip} from '@mui/material'
const initChips = [
    {exp:'pure Css',color:'#080',mastery:90,biuld:'sites apps games'},
    {exp:'Sass',color:'#0ff',mastery:75,biuld:'sites'},
    {exp:'Bootstrap',color:'yellow',mastery:60,biuld:'sites'},
    {exp:'Javascript',color:'orange',mastery:70,biuld:'sites apps games'},
    {exp:'Typescript',color:'#6c25e98c',mastery:100,biuld:'sites apps'},
    {exp:'ReactJs',color:'darkCyan',mastery:70,biuld:'sites apps games'},
    {exp:'NextJs',color:'#f00s',mastery:100,biuld:'sites apps'},
]

const ChipComp = ({exp = 'sites'}) => {
    const [chips,setChips] = useState(initChips)
 
    const sitesChip = chips

    const appsChip  = chips.filter(chips => chips.biuld.includes('apps'))

    const gamesChip = chips.filter(chips => chips.biuld.includes('games'))

const ChipsFilter = exp === 'sites' ? sitesChip :
                    exp  === 'apps' ? appsChip  :
                    exp  === 'games'? gamesChip : chips
    /*
    you should review scrollble,centerd,variant  
    
    */
  return (
    <Stack className='connotrightwid' direction='row' flexWrap='wrap' sx={{marginTop:'10px',justifyContent:'space-around',width: 'calc(100% - 50px)'}}>
        {
            ChipsFilter.map(chip =>(
                <Chip
                    key={chip.exp}
                    variant='outlined'
                    label={chip.exp}
                    className='childClicked'
                    sx={{bgcolor:chip.color,
                        minWidth:'100px',
                        maxHeight:'30px',
                        margin:'.5rem'
                    }}
                />
            ))
        }
    </Stack>
  )
}

export default ChipComp