import React from 'react'
import {
    ImageList,
    ImageListItem,
    ImageListItemBar
} from '@mui/material'
const ImgList = () => {
  return (
    <ImageList sx={{
        display:'flex',
        flexWrap:'wrap'
    }}>
        {
            imges.map(img =>{
              return  <ImageListItem key={img.title} >
                    <img src={imges[0].img} alt={imges[0].title} 
                    style={{
                        minHeight:'100px',
                        minWidth  : '100px',
                        maxHeight:'200px',
                        maxWidth:'100%'
                    }}
                    />
                    <ImageListItemBar title={img.title} />
                </ImageListItem>
            })
        }
    </ImageList>
  )
}

export default ImgList

const imges = [
    {
        title:'han1',   
        img:"https://v4.mui.com/static/images/image-list/burgers.jpg"
    },
    {
        title:'han2',
        img:"https://v4.mui.com/static/images/image-list/burgers.jpg"
    },
    {
        title:'han3',
        img:"https://v4.mui.com/static/images/image-list/burgers.jpg"
    }
]