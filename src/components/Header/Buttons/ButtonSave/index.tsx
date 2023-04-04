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
    const { dataContact, resetDataContext } = useContext(ContactContext);
    const { setLoaderState } = useContext(HeaderContext);
    const navigate = useNavigate();

    const cadContact = async () => {
        setLoaderState(true);
        const validated = validateField(dataContact);
        if (validated) {
            try {
                const data = await saveContact(dataContact);
                if (data.id > 0) {
                    resetDataContext();
                    alert("Cadastrado Com sucesso");
                } else {
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }finally{
                setLoaderState(false);
                navigate('/');
            }
        } else {
            setLoaderState(false);
            alert("Campo Nome e Celular são Obrigatórios!");
        }

    }

    //FAZ A VALIDAÇÃO DOS CAMPOS, SE ESTÃO VAZIOS
    const validateField = (contact: ContactType) => {
        if (contact['nome'] === "" || contact['celular'] === "") {
            return false
        }
        return true
    }

    //VERIFICA QUAL A ACAO QUE O BOTAO IRAR TOMAR (QUAL REQUISIÇÃO CHAMARA)
    const checkActionButton = ()=>{
        if(dataContact.id != 0){
            console.log('estou no editar');
        }else{
            cadContact() ;
        }
    }

    return (
        <>
            {show &&
                <S.Button bgcolor={bgcolor} onClick={checkActionButton}>
                    {children}
                </S.Button>
            }
        </>


    )
}
