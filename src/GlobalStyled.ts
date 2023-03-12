import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
    --background: #ebf5f4;
    --bg-header: #17c179;
    --bg-button: #ff9b37;
    --text-button:#fcfcfc;
    --text-title: #fff;
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