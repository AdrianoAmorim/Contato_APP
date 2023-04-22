import { createGlobalStyle } from 'styled-components';
import TitilliumWeb from './assets/fonts/TitilliumWeb-SemiBold.ttf'
import  {DefaultTheme}  from './themes/DefaultTheme';


export const GlobalStyles = createGlobalStyle`
@font-face{
    font-family: 'TitilliumWeb';
    src: url(${TitilliumWeb});
}

*{
    font-family: "TitilliumWeb";
}
:root{
    --background: ${DefaultTheme.colors.background};
    --bg-header: ${DefaultTheme.colors.bgHeader};
    --bg-button: ${DefaultTheme.colors.bgButton};
    --bg-danger: ${DefaultTheme.colors.bgDanger};
    --text-button:${DefaultTheme.colors.textButton};
    --bg-card-contact:${DefaultTheme.colors.bgCardContact};
    --text-title: ${DefaultTheme.colors.textTitle};
    --text-primary: ${DefaultTheme.colors.textPrimary};
    --border-input:${DefaultTheme.colors.borderInput};
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