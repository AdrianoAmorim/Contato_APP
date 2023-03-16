import { ReactNode } from "react";
import { ToolbarButton } from "./styled"

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?:string;
}

export const Button = ({ children, show,bgcolor }: ButtonProps) => {

    return (
        <>
            {show &&
                <ToolbarButton bgcolor={bgcolor}>
                    {children}
                </ToolbarButton>
            }
        </>


    )
}
