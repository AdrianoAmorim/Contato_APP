import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled"

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?: string;
}

export const ButtonBack = ({ children, show, bgcolor }: ButtonProps) => {
    const {resetData} = useContext(ContactContext);
    const navigate = useNavigate();

    const resetDataContact = ()=>{
        resetData();
        navigate('/')
    }

    return (
        <>
            {show &&
                <S.Button bgcolor={bgcolor} onClick={resetDataContact}>
                    {children}
                </S.Button>
            }
        </>


    )
}
