import { ReactNode, useContext } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled"

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?: string;
}

export const ButtonDelete = ({ children, show, bgcolor }: ButtonProps) => {
    const contact = useContext(ContactContext);

    const cadContact = () => {
      console.log(contact.dataContact.id);
      console.log(contact.dataContact.nome);
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
