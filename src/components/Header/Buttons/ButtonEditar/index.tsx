import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../../../contexts/ContactContext";
import { HeaderContext } from "../../../../contexts/HeaderContext";
import * as S from "./styled"

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?: string;
}

export const ButtonEditar = ({ children, show, bgcolor }: ButtonProps) => {
    const {dataContact} = useContext(ContactContext);
    const {setTitleState} = useContext(HeaderContext);
    const navigate = useNavigate();
    
    const handleEditContact = ()=>{
        setTitleState({title:"EDITAR"})
        navigate(`/editar/${dataContact.id}`)
    }

    return (
        <>
            {show &&
                <S.Button bgcolor={bgcolor} onClick={handleEditContact}>
                    {children}
                </S.Button>
            }
        </>


    )
}
