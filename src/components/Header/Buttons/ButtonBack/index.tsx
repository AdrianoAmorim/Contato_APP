import { ReactNode, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled"

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?: string;
}

export const ButtonBack = ({ children, show, bgcolor }: ButtonProps) => {
    const navigate = useNavigate();

    return (
        <>
            {show &&
                <S.Button bgcolor={bgcolor} onClick={()=> navigate('/')}>
                    {children}
                </S.Button>
            }
        </>


    )
}
