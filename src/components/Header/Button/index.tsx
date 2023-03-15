import { ReactNode } from "react";
import { ToolbarButton } from "./styled"

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgColor?:string;
}

export const Button = ({ children, show,bgColor }: ButtonProps) => {

    return (
        <>
            {show &&
                <ToolbarButton bgColor={bgColor}>
                    {children}
                </ToolbarButton>
            }
        </>


    )
}
