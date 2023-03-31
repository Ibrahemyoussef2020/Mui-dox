import {createTheme,colors} from "@mui/material/"


const theme = createTheme({
    color:{
      danger:'cyan',
      red : 'red'
    },
    palette:{
      secondary:{
        main:colors.orange[500],
      },
      neutral:{
        main:'#080',
        contrastText:'#fff'
      },
    },
  })

  export const {red} = theme.color

  export default theme