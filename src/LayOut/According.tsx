import {useState} from 'react'
import {
Accordion,
AccordionSummary,
AccordionDetails,
Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const According = () => {
    const [expanded, setExpanded] = useState<string|false>(false)

    const handleChange = (isExpanded:boolean,sum:string)=> {
        setExpanded(isExpanded?sum:false)
    }
    
  return (
    <>
    <Accordion 
    expanded={expanded === 'sum1'}
    onChange={(e,isExpanded)=>handleChange(isExpanded,'sum1')}
    >
        <AccordionSummary 
            id='sum1' aria-controls='sum1' 
            expandIcon={<ExpandMoreIcon />}>
            <Typography
                variant='h4' className='no-click' color='info.light'
            >
                learn more from us 
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='h5' component='p'>
            The Typography component uses the variantMapping 
            property to associate a UI variant with a semantic 
            element. It is important to realize that the style of 
            atypographyis independent from the semantic 
            underlying element.
            </Typography>
        </AccordionDetails>
    </Accordion>
    
    <Accordion 
        expanded={expanded === 'sum2'}
        onChange={(e,isExpanded)=>handleChange(isExpanded,'sum2')}
        >
        <AccordionSummary id='sum2' aria-controls='sum2' 
            expandIcon={<ExpandMoreIcon />}>
            <Typography
                variant='h4' className='no-click' color='info.light'
            >
                learn more from us 
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant='h5' component='p'>
            The Typography component uses the variantMapping 
            property to associate a UI variant with a semantic 
            element. It is important to realize that the style of 
            atypographyis independent from the semantic 
            underlying element.
            </Typography>
        </AccordionDetails>
    </Accordion>
    </>
  )
}

export default According