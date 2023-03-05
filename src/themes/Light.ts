import {createTheme } from '@mui/material';


export const LightTheme = createTheme({
    palette:{
        primary:{
            main:"#5158bb",
            dark: "#043565",
            light: "#515888",
            contrastText: "#fff"
        },
        secondary:{
            main:"#f26df9",
            dark: "#eb4b98",
            light: "#E9A9EC",
            contrastText: "#494749"
        },
        background:{
            default: "#F1ECF1",
            paper: "#CBCBCB"
        }
    }
});