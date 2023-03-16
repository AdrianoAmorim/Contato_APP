import { ReactNode } from "react";
import * as S from "./styled"

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?:string;
}

export const Button = ({ children, show,bgcolor }: ButtonProps) => {

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
