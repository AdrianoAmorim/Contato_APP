import React, { createContext, ReactNode, useState } from "react";

//CRIACAO DA PROPS PARA RECEBER OS COMPONENTES FILHOS
type ContextProps = {
    children: ReactNode
}
//O TYPE PARA OS Buttons DO HEADER
type HeaderType = {
    btnConfig: boolean,
    btnSave: boolean,
    btnDelete: boolean,
    btnBack: boolean,
    title: string
}

//Crio o Context de dados do meu STATE 
interface HeaderContextData {
    headerState: HeaderType;
    setHeaderState: (value: HeaderType) => void
}
//VALORES INICIAIS DO MEU STATE
const initialValue = {
    headerState: {
        btnConfig: false,
        btnSave: false,
        btnDelete: false,
        btnBack: false,
        title:"Contatos"
    },
    setHeaderState: () => { }

}

//AQUI CRIAMOS O CONTEXTO  EM SIM PASSANDO OS VALORES INICIAIS Q QUEREMOS DISPONIBILIZAR ( E TIPAMOS O CONTEXT COM O TYPE CRIADO)
export const HeaderContext = createContext<HeaderContextData>(initialValue);

//AQUI CRIAMOS O COMPONENT PROVEDOR DOS DADOS PARA OS FILHOS Q IRAO ACESSAR
export const ContextProvider = ({ children }: ContextProps) => {
    const [headerState, setHeaderState] = useState<HeaderType>(initialValue.headerState);


    return (
        <HeaderContext.Provider value={{ headerState, setHeaderState }}>
            {children}
        </HeaderContext.Provider>
    );
}