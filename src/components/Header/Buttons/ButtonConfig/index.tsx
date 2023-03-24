import { ReactNode, useContext } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled"

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?: string;
}

export const ButtonConfig = ({ children, show, bgcolor }: ButtonProps) => {
    const contact = useContext(ContactContext);

    const cadContact = () => {
        if(contact.dataContact){
            console.log(contact.dataContact)
        }else{
            console.log("vazio")
        }
    }



    return (
        <>
            {show &&
                <S.Button bgcolor={bgcolor} onClick={cadContact}>
                    {children}
                </S.Button>
            }
        </>


    )
}
