import React from 'react'
import{
    Table,
    TableContainer,
    TableHead,
    TableBody,
   TableRow,
   TableCell
} from '@mui/material'
const TabelComp = () => {
  const emailStyle = {
    padding:'0',
    flexWrap:'wrap',
    wordBreak:'break-all',
    textAlign:'center'
  }
  return (
    <TableContainer sx={{minWidth:'300px'}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{width:'15px',bgcolor:'red'}}>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell sx={emailStyle}>Email</TableCell>
                    <TableCell>Gender</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tabelData.map(user =>(
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.first_name}</TableCell>
                        <TableCell
                        sx={{
                            //maxWidth:'75px',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            flexWrap:'wrap',
                            minHeight:'60px',
                            //overflow:'hidden'
                            wordBreak:'break-all',
                            padding:'0',
                            borderLeft:'1px solid #ccc',
                            borderRight:'1px solid #ccc',
                            borderBottom:'1px solid #ccc'
                        }}
                        >{user.email}</TableCell>
                        <TableCell sx={{padding:'0',flexWrap:'wrap',wordBreak:'break-all'}}>{user.ip_address}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default TabelComp

const tabelData = [{
    "id": 1,
    "first_name": "Mord",
    "last_name": "Rides",
    "email": "mrides0@istockphoto.com",
    "gender": "Male",
    "ip_address": "153.149.26.54"
  }, {
    "id": 2,
    "first_name": "Lauren",
    "last_name": "Kohlerman",
    "email": "lkohlerman1@go.com",
    "gender": "Female",
    "ip_address": "54.127.124.217"
  }, {
    "id": 3,
    "first_name": "Waly",
    "last_name": "Husband",
    "email": "whusband2@unesco.org",
    "gender": "Genderqueer",
    "ip_address": "152.201.99.129"
  }, {
    "id": 4,
    "first_name": "Chester",
    "last_name": "Heardman",
    "email": "cheardman3@dell.com",
    "gender": "Male",
    "ip_address": "221.243.186.130"
  }, {
    "id": 5,
    "first_name": "Arleta",
    "last_name": "Ilchenko",
    "email": "ailchenko4@tamu.edu",
    "gender": "Female",
    "ip_address": "159.155.241.54"
  }, {
    "id": 6,
    "first_name": "Kelcey",
    "last_name": "Hazel",
    "email": "khazel5@unicef.org",
    "gender": "Genderqueer",
    "ip_address": "145.89.208.213"
  }, {
    "id": 7,
    "first_name": "Bevin",
    "last_name": "MacAloren",
    "email": "bmacaloren6@feedburner.com",
    "gender": "Male",
    "ip_address": "57.119.165.249"
  }, {
    "id": 8,
    "first_name": "Gian",
    "last_name": "Cline",
    "email": "gcline7@theatlantic.com",
    "gender": "Male",
    "ip_address": "32.197.194.138"
  }, {
    "id": 9,
    "first_name": "Corene",
    "last_name": "Seegar",
    "email": "cseegar8@canalblog.com",
    "gender": "Female",
    "ip_address": "134.198.43.61"
  }, {
    "id": 10,
    "first_name": "Sofie",
    "last_name": "Gillbard",
    "email": "sgillbard9@purevolume.com",
    "gender": "Female",
    "ip_address": "110.207.146.138"
  }]