import { createGlobalStyle } from 'styled-components';
import TitilliumWeb from './assets/fonts/TitilliumWeb-SemiBold.ttf'

export const GlobalStyles = createGlobalStyle`
@font-face{
    font-family: 'TitilliumWeb';
    src: url(${TitilliumWeb});
}

*{
    font-family: "TitilliumWeb";
}
:root{
    --background: #ebf5f4;
    --bg-header: #408080;
    --bg-button: #ff9b37;
    --bg-danger: #ff2828;
    --text-button:#fcfcfc;
    --bg-card-contact:#fcfcfca9;
    --text-title: #fff;
    --text-primary: #282828;
    --border-input:#408080;
}


body{
    background-color: var(--background);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    
}
//ANIMACOES GLOBAIS
.openModalAnimation{
    animation: openModalAnimation .2s ease-in-out forwards;
}
.listContactAnimation{
    animation: listContactAnimation .3s ease-in  forwards;
}
.fadeIn{
    animation: fadeIn .3s ease-in-out forwards;
}

@keyframes fadeIn{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
@keyframes openModalAnimation{
    from{
      opacity: 0;
      transform: scale(0);
    }
    to{
      opacity:1;
      transform:scale(1);
    }
 }

 @keyframes listContactAnimation {
    from{
        opacity: 0;
        transform: translateX(-800px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
 }
`