import { createContext, ReactNode, useState } from "react";

//CRIACAO DA PROPS PARA RECEBER OS COMPONENTES FILHOS
type ContextProps = {
    children: ReactNode
}
type TitleType = {
    title: string
}
//O TYPE PARA OS Buttons DO HEADER
type HeaderType = {
    btnConfig: boolean,
    btnSave: boolean,
    btnEditar: boolean,
    btnDelete: boolean,
    btnBack: boolean,
}

//Crio o Context de dados do meu STATE 
interface HeaderContextData {
    headerState: HeaderType;
    titleState:TitleType;
    loaderState:boolean;
    setHeaderState: (value: HeaderType) => void;
    setTitleState: (value:TitleType)=> void;
    setLoaderState:(value:boolean)=>void;
}
//VALORES INICIAIS DO MEU STATE
const initialValue = {
    headerState: {
        btnConfig: false,
        btnSave: false,
        btnEditar: false,
        btnDelete: false,
        btnBack: false,
    },
    titleState: {
        title:""
    },
    loaderState: false,
    setTitleState:()=>{},
    setHeaderState: () => {},
    setLoaderState:()=>{}
}

//AQUI CRIAMOS O CONTEXTO  EM SIM PASSANDO OS VALORES INICIAIS Q QUEREMOS DISPONIBILIZAR ( E TIPAMOS O CONTEXT COM O TYPE CRIADO)
export const HeaderContext = createContext<HeaderContextData>(initialValue);

//AQUI CRIAMOS O COMPONENT PROVEDOR DOS DADOS PARA OS FILHOS Q IRAO ACESSAR
export const HeaderProvider = ({ children }: ContextProps) => {
    const [headerState, setHeaderState] = useState<HeaderType>(initialValue.headerState);
    const [titleState,setTitleState] = useState<TitleType>(initialValue.titleState);
    const [loaderState,setLoaderState] = useState(initialValue.loaderState);

    return (
        <HeaderContext.Provider value={{ headerState, setHeaderState,titleState,setTitleState,loaderState,setLoaderState}}>
            {children}
        </HeaderContext.Provider>
    );
}