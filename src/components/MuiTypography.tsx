import { Typography,Button,Stack,ToggleButton,TextField} from "@mui/material/"
import SendIcon from '@mui/icons-material/Send';
import D from '@mui/icons-material/AttachMoney';
import InputAdornment from "@mui/material/InputAdornment";
import * as I  from "@mui/material/"
const MuiTypography = () => {
  return (
    <div>
        {/*<Typography variant="h1" component='h4'>h1</Typography>
        <hr/>
        <Stack spacing={2} direction='row'>
            <Button variant="text">text</Button>
            <Button variant="contained">contained</Button>
            <Button variant="contained" color="secondary" href="#contained-buttons">
                Link
            </Button>
            <Button variant="outlined" href='#'>outlined</Button>
            <Button variant="outlined" size='large'>outlined</Button>
        </Stack>
        <Stack direction='row'>
            <Button variant="outlined" 
                startIcon={<SendIcon />}>
                send
            </Button>
            <Button variant="outlined" 
                size="small"
                endIcon={<SendIcon />}>
                send
            </Button>
            <Button variant="contained" size="small"
              color="info"  >
                <SendIcon color="success" />
            </Button>
            <I.TextField
                error
                id="standard-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
            />
        </Stack>
        */}
        <Stack direction='row'>
            <I.TextField label='name' variant="outlined" />
            <I.TextField label='name' variant="outlined" />
            <I.TextField 
                label='name'
                variant="standard"
                required
                type='search'
                
            />
            
            <TextField 
                label='start label'
                InputProps={{
                startAdornment:<InputAdornment position='start'>ssd</InputAdornment>
                }} 
            />
            <TextField
                label='label' 
                InputProps={{
                    endAdornment:<InputAdornment position="end">
                        <D/>
                        </InputAdornment>
                }}
            />   
        </Stack>
    </div>
  )
}

export default MuiTypography