import { ReactNode, useContext } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled"

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?: string;
}

export const ButtonSave = ({ children, show, bgcolor }: ButtonProps) => {
    const {dataContact} = useContext(ContactContext);

    const cadContact = () => {
        if(dataContact){
            console.log(dataContact.telFixo)
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
