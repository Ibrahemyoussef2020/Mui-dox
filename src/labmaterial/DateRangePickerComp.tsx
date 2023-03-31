import {useState} from 'react'
import{
    Stack,
    Box,
    TextField
} from '@mui/material'
/*import{
    DateRangePicker,
    DateRange
}from '@mui/x-date-pickers-pro' */
const DateRangePickerComp = () => {
    //const [date,setDate] = useState<DateRange<Date>>([null,null])
  return (
    <Stack direction='row'>
       { /*<DateRangePicker
            label='range'
            startText='from'
            endText='to'
            value={date}
            onChange={(newVal:DateRange<Date> )=>{setDate(newVal)}}
            renderInput={(firstVal:any,lastVal:any)=>(
                <>
                <TextField {...firstVal} />
                <TextField {...lastVal}/>
                </>
            )}
        />*/}
        DateRangePicker
    </Stack>
  )
}

export default DateRangePickerComp