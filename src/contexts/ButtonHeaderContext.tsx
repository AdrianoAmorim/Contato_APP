import React, { createContext, ReactNode, useState } from "react";

//CRIACAO DA PROPS PARA RECEBER OS COMPONENTES FILHOS
type ContextProps = {
    children: ReactNode
}
//O TYPE PARA OS NOSSOS DADOS 
type ButtonsType = {
        btnConfig: boolean,
        btnSave: boolean,
        btnDelete: boolean,
        btnBack: boolean
}

//Crio o Context de dados do meu STATE 
interface ButtonsContextData {
    buttonsState: ButtonsType;
    setButtonsState: (value:ButtonsType)=> void
}

//VALORES INICIAIS DO MEU STATE
const initialValue = {
    buttonsState:{
        btnConfig: true,
        btnSave: false,
        btnDelete: false,
        btnBack: false
    },
    setButtonsState: ()=>{}
}

//AQUI CRIAMOS O CONTEXTO  EM SIM PASSANDO OS VALORES INICIAIS Q QUEREMOS DISPONIBILIZAR ( E TIPAMOS O CONTEXT COM O TYPE CRIADO)
export const ButtonHeaderContext = createContext<ButtonsContextData>(initialValue);

//AQUI CRIAMOS O COMPONENT PROVEDOR DOS DADOS PARA OS FILHOS Q IRAO ACESSAR
export const ContextProvider = ({ children }: ContextProps) => {
    const [buttonsState,setButtonsState] = useState<ButtonsType>(initialValue.buttonsState)

    return (
        <ButtonHeaderContext.Provider value={{buttonsState,setButtonsState}}>
            {children}
        </ButtonHeaderContext.Provider>
    );
}