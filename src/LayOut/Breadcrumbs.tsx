import React from 'react'
import{
    Breadcrumbs ,
    Link 
}from '@mui/material'
import  NavigateNextIcon  from '@mui/icons-material/NavigateNext'
const BreadcrumbsNav = () => {
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>} sx={{position:'initial',color:'darkcyan',paddingTop:'10px'}}>
        <Link href='/Home'       underline='hover'color='inherit'>Home</Link>
        <Link href='/Categories' underline='hover'color='inherit'>Categories</Link>
        <Link href='/Accessories' underline='hover'color='inherit'>Accessories</Link>
        <Link href='/Who-Us'      underline='hover'color='inherit'>Who Us</Link>
    </Breadcrumbs>
  )
}

export default BreadcrumbsNav