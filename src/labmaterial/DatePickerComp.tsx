import {useState} from 'react'
import {Stack,TextField} from '@mui/material'
/*import { DatePicker, 
TimePicker,
DateTimePicker
} from '@mui/x-date-pickers'*/

const DatePickerComp = () => {
    const [date,setDate] = useState<Date|null>(null)
    const [time,setTime] = useState<Date|null>(null) 
    const [dateTime,setDateTime] = useState<Date|null>(null)
  
    return (
        <>
   {/* <Stack spacing={2}>
        
        <DatePicker
            label='date picker'
            value={date}
            onChange={(newVal)=>setDate(newVal)}
            renderInput={(props)=><TextField {...props} />}
        />
        <TimePicker 
            label='time picker'
            value={time}
            onChange={(newVal)=> setTime(newVal)}
            renderInput={(props)=> <TextField {...props}/>}
        />
        <DateTimePicker 
            label='date time picker'
            value={dateTime}
            onChange={(newVal)=>setDateTime(newVal)}
            renderInput={(props)=><TextField {...props} />}
        />
    </Stack>*/}
    <div>date packer</div>
    </>
  )
}

export default DatePickerComp