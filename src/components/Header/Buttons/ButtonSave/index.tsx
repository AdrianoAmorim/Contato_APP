import { ReactNode, useContext } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled"
import { saveContact } from "../../../../services/Api";
import { ContactType } from "../../../../types/ContactType";
import { HeaderContext } from "../../../../contexts/HeaderContext";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?: string;
}

export const ButtonSave = ({ children, show, bgcolor }: ButtonProps) => {
    const {dataContact,resetDataContext} = useContext(ContactContext);
    const {setLoaderState} = useContext(HeaderContext);
    const navigate = useNavigate();

    const cadContact = async () => {
        setLoaderState(true);
        const validated= validateField(dataContact);
        if(validated){
            const data = await saveContact(dataContact);
            if(data.id > 0){
                resetDataContext();
                alert("Cadastrado Com sucesso");
                setLoaderState(false);
                navigate('/');

            }else{
                console.log(data)
            }
        }else{
            setLoaderState(false);
            alert("Campo Nome e Celular são Obrigatórios!");
        }
        
    }

    //FAZ A VALIDAÇÃO DOS CAMPOS, SE ESTÃO VAZIOS
    const validateField =(contact: ContactType)=>{
        if(contact['nome'] === "" || contact['tel'] === ""){
            return false
        }
        return true
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
