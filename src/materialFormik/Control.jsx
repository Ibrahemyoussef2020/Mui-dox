import {TextField} from '@mui/material'

const Control = (props)=>{
    const {control} = props
    switch(control){
        case 'input' : return <input placeholder="input"/>
        case 'field' : return <TextField   label="Outlined" variant="filled" color="secondary" />

        default : return null
    }
}

export default Control