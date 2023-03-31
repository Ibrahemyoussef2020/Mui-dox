import {Box,Paper} from '@mui/material'
import {
Masonry
} from '@mui/lab'

const heights = [
    150,220,100,140,50,120,200,180,200
]

const MasonryComp = () => {
  return (
    <Box>
        <Masonry spacing={2} columns={3}>
            {heights.map((height,index) =>(
                <Paper
                key={index}
                sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'space-between',
                    border:'1px solid #000',
                    height
                }}
                >
                    {index + 1}
                </Paper>
            ))
                
            }
        </Masonry>
    </Box>
  )
}

export default MasonryComp