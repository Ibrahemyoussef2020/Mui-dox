import {Grid} from '@mui/material'
import theme from '../components/themes/theme'
import {red} from '../components/themes/theme'   
const DivsWithTheme = () => {
    {console.log(theme)}
    const {danger}= theme.color
    //const
    const {main} = theme.palette.neutral

    const darkGreen = theme.palette.secondary.main
  return (
    <Grid display='flex' width='100%' minHeight='50px' columns={4}
    columnSpacing={4} rowSpacing={2} bgcolor='success'
    className='THEMS'
    >
        <div style={{border:'.1px solid #000',background:red}}>1</div>
        <div style={{border:'.1px solid #000',background:danger}}>2</div>
        <div style={{border:'.1px solid #000',background:darkGreen}}>3</div>
        <div style={{border:'.1px solid #000'}}>4</div>
        <div style={{border:'.1px solid #000'}}>5</div>
        <div style={{border:'.1px solid #000'}}>6</div>
        <div style={{border:'.1px solid #000'}}>7</div>
    </Grid>
  )
}

export default DivsWithTheme