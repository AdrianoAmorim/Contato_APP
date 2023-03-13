import { ReactNode } from "react";
import { ToolbarButton } from "./styled"

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
}

export const Button = ({ children, show =false }: ButtonProps) => {

    return (
        <>
            {show &&
                <ToolbarButton>
                    {children}
                </ToolbarButton>
            }
        </>


    )
}
