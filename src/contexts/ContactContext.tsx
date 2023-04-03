import { createContext, ReactNode, useState } from "react";
import { ContactType } from "../types/ContactType";

type ContactContextProps = {
    children: ReactNode
}

interface ContactContextData {
    dataContact: ContactType;
    setId: (value: number) => void;
    setNome: (value: string) => void;
    setSobreNome: (value: string) => void;
    setEmail: (value: string) => void;
    setCelular: (value: string) => void;
    setFixo: (value: string) => void;
    setCategoria: (value: number) => void;
    setSite: (value: string) => void;
    resetDataContext: () => void;
}

const initialValue = {
    dataContact: {
        id: 0,
        nome: "",
        sobrenome: "",
        email: "",
        celular: "",
        fixo:"",
        categoria: 1,
        site: ""
    },
    setId: () => { },
    setNome: () => { },
    setSobreNome: () => { },
    setEmail: () => { },
    setCelular: () => { },
    setFixo: () => { },
    setCategoria: () => { },
    setSite: () => { },
    resetDataContext: () => { },
}
export const ContactContext = createContext<ContactContextData>(initialValue)

export const ContactProvider = ({ children }: ContactContextProps) => {
    const [dataContact, setState] = useState<ContactType>(initialValue.dataContact);

    const setNome = (nome: string) => {
        setState((prevState) => ({ ...prevState, nome }))
    }
    const setSobreNome = (sobrenome: string) => {
        setState((prevState) => ({ ...prevState, sobrenome }))
    }
    const setEmail = (email: string) => {
        setState((prevState) => ({ ...prevState, email }))
    }
    const setSite = (site: string) => {
        setState((prevState) => ({ ...prevState, site }))
    }
    const setCelular = (celular: string) => {
        setState((prevState) => ({ ...prevState, celular }))
    }
    const setFixo = (fixo: string) => {
        setState((prevState) => ({ ...prevState, fixo }))
    }
    const setCategoria = (categoria:number) => {
        setState((prevState) => ({ ...prevState, categoria }))
    }
    const setId = (id: number) => {
        setState((prevState) => ({ ...prevState, id }))
    }
    const resetDataContext = () => {
        setState(initialValue.dataContact);
    }

    const contact: ContactContextData = {
        dataContact,
        setId,
        setNome,
        setSobreNome,
        setEmail,
        setSite,
        setCelular,
        setFixo,
        setCategoria,
        resetDataContext
    }
    return (
        <ContactContext.Provider value={contact}>
            {children}
        </ContactContext.Provider>
    )
}