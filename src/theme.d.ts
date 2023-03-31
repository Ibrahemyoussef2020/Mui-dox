import {ThemeOptions} from '@mui/material/styles'
import React from 'react'

declare module '@mui/material/styles'{
    interface Theme {
        color:{
            danger:string,
            red:string
        }
    }
    interface ThemeOptions {
        color:{
            danger:React.CSSProperties['color'],
            red:React.CSSProperties['color']
        }
    }

    interface Palette {
        neutral:Palette['primary']
    }

    interface PaletteOptions {
       neutral:PaletteOptions['primary']     
    }

    interface PalletteColor {
        black?:string
    }

    interface SimplePaletteColorOptions{
        black?:string 
    }
}