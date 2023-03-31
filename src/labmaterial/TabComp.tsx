import {useState} from 'react'
import{
Tab,
Stack,
Box
} from '@mui/material'
import{
TabContext,
TabList,
TabPanel
} from '@mui/lab'

import ChipComp from '../Displaymui/ChipComp'

const TabComp = () => {
    const [value,setValue] = useState('1')
    const hadleChange = (event:React.SyntheticEvent,newValue:string)=>{
        setValue(newValue)
    }
  return (
    <Stack direction='row' spacing={2}>
        <TabContext value={value} >
            <Box>
                <Box>
                <TabList onChange={hadleChange}
                textColor='secondary'
                indicatorColor='secondary'
                >
                    <Tab label='Web sites' value='1' />
                    <Tab label='Web app' value='2'/>
                    <Tab label='Web games' value='3'/>
                </TabList>
                </Box>
                <TabPanel value='1'><ChipComp exp='sites'/></TabPanel>
                <TabPanel value='2'><ChipComp exp='apps'/></TabPanel>
                <TabPanel value='3'><ChipComp exp='games'/></TabPanel>
                
            </Box>
        </TabContext>
        <br/><br/><br/><br/>
        {value}
    </Stack>
  )
}

export default TabComp