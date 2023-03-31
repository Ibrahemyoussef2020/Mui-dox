import React from 'react'
import { Grid ,Box} from '@mui/material'
const GridContainer = () => {
  return (
    <>
    <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6} md={3}>
            <Box bgcolor='secondary.dark'>
                iam the grid item 1
            </Box>
        </Grid>
        <Grid item xs={6} md={3}>
           <Box bgcolor='primary.light'>
                iam the grid item 1
            </Box>
        </Grid>
        <Grid item xs={6} md={3} >
            <Box bgcolor='error.light'>
                iam the grid item 1
            </Box>
        </Grid>
        <Grid item xs={6} md={3} >
            <Box bgcolor='info.main'>
                iam the grid item 1
            </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default GridContainer