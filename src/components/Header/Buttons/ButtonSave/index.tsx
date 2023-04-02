import { ReactNode, useContext } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled"
import { saveContact } from "../../../../services/Api";

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?: string;
}

export const ButtonSave = ({ children, show, bgcolor }: ButtonProps) => {
    const {dataContact} = useContext(ContactContext);

    const cadContact = () => {
      const data = saveContact(dataContact);
      console.log(data)
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
