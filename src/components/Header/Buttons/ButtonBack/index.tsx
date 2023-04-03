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
    const {resetDataContext} = useContext(ContactContext);
    const navigate = useNavigate();

    const backHome = ()=>{
        resetDataContext();
        navigate('/');
    }

    return (
        <>
            {show &&
                <S.Button bgcolor={bgcolor} onClick={backHome}>
                    {children}
                </S.Button>
            }
        </>


    )
}
