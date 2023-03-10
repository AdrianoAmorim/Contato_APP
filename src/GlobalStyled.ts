import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
    --background: #ebf5f4;
    --bg-header: #17c179;
    --bg-button: #ff9b37;
    --text-button:#fcfcfc;
    --bg-card-contact:#fcfcfca9;
    --text-title: #fff;
    --text-primary: #282828;
}


body{
    background-color: var(--background);
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

`