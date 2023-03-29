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
    setTel: (value: string) => void;
    setCategoria: (value: number) => void;
    setSite: (value: string) => void;
    resetData: () => void;
}

const initialValue = {
    dataContact: {
        id: 0,
        nome: "",
        sobrenome: "",
        email: "",
        tel: "",
        categoria: 0,
        site: ""
    },
    setId: () => { },
    setNome: () => { },
    setSobreNome: () => { },
    setEmail: () => { },
    setTel: () => { },
    setCategoria: () => { },
    setSite: () => { },
    resetData: () => { },
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
    const setTel = (tel: string) => {
        setState((prevState) => ({ ...prevState, tel }))
    }
    const setCategoria = (categoria: number) => {
        setState((prevState) => ({ ...prevState, categoria }))
    }
    const setId = (id: number) => {
        setState((prevState) => ({ ...prevState, id }))
    }
    const resetData = () => {
        setState(initialValue.dataContact);
    }

    const contact: ContactContextData = {
        dataContact,
        setId,
        setNome,
        setSobreNome,
        setEmail,
        setSite,
        setTel,
        setCategoria,
        resetData
    }
    return (
        <ContactContext.Provider value={contact}>
            {children}
        </ContactContext.Provider>
    )
}