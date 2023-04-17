import { useContext, useEffect } from "react";
import { Main } from "../../components/MainComponent"
import { HeaderContext } from "../../contexts/HeaderContext";
import * as S from "./styled"

export const Configuracao = ()=>{
    const {headerState,setHeaderState,titleState,setTitleState}  = useContext(HeaderContext);

    const configHeader = {
        btnConfig: false,
        btnSave: false,
        btnDelete: false,
        btnBack: true,
        btnEditar: false,
      };

    useEffect(()=>{
        setHeaderState(configHeader);
        setTitleState({title:"Configuraçoes"});
    },[])
    return(

        <Main>
            <S.BoxDarkTheme>
                Ativar Modo Dark
                <S.CheckDarkMode/>
                <span className="checkBox"></span>
            </S.BoxDarkTheme>

        </Main>

    )
}