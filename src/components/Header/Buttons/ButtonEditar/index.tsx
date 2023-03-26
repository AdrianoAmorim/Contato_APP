import { ReactNode, useContext } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled"

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?: string;
}

export const ButtonEditar = ({ children, show, bgcolor }: ButtonProps) => {
   
    return (
        <>
            {show &&
                <S.Button bgcolor={bgcolor}>
                    {children}
                </S.Button>
            }
        </>


    )
}
