import { createContext, ReactNode, useState } from "react";

type ContactContextProps = {
    children: ReactNode
}

type ContactType = {
    id?: number,
    nome: string,
    sobrenome: string,
    email: string,
    site: string,
    tel: string,
    categoria: number
}

interface ContactContextData {
    dataContact:ContactType;
    setId: (value: number) => void;
    setNome: (value: string) => void;
    setSobreNome: (value: string) => void;
    setEmail: (value: string) => void;
    setTel: (value: string) => void;
    setCategoria: (value: number) => void;
    setSite: (value: string) => void;
}
export const ContactContext = createContext<ContactContextData>({} as ContactContextData)

export const ContactProvider = ({ children }: ContactContextProps) => {
    const [dataContact,setState] = useState<ContactType>({} as ContactType);

    const setNome = (nome:string)=>{
        setState((prevState)=>({...prevState,nome}))
    }
    const setSobreNome = (sobreNome:string)=>{
        setState((prevState)=>({...prevState,sobreNome}))
    }
    const setEmail = (email:string)=>{
        setState((prevState)=>({...prevState,email}))
    }
    const setSite = (site:string)=>{
        setState((prevState)=>({...prevState,site}))
    }
    const setTel = (tel:string)=>{
        setState((prevState)=>({...prevState,tel}))
    }
    const setCategoria = (categoria:number)=>{
        setState((prevState)=>({...prevState,categoria}))
    }
    const setId = (id:number)=>{
        setState((prevState)=>({...prevState,id}))
    }
    

    const contact: ContactContextData = {
        dataContact,
        setId,
        setNome,
        setSobreNome,
        setEmail,
        setSite,
        setTel,
        setCategoria
    }
    return (
        <ContactContext.Provider value={contact}>
            {children}
        </ContactContext.Provider>
    )
}