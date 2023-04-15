import { ReactNode, useContext } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled"
import { deleteContact } from "../../../../services/Api";
import { HeaderContext } from "../../../../contexts/HeaderContext";
import { useNavigate, useParams } from "react-router-dom";

interface ButtonProps {
    children: ReactNode;
    show?: boolean;
    bgcolor?: string;
}

export const ButtonDelete = ({ children, show, bgcolor }: ButtonProps) => {
    const {dataContact,resetDataContext} = useContext(ContactContext);
    const {setLoaderState,loaderState}  = useContext(HeaderContext);
    const navigate = useNavigate();

    const delContact = async (id:number) => {
        setLoaderState(true);
        try {
            const response = await deleteContact(id);
            if(response.id > 0){
                alert("Contato deletado com Sucesso");
                setLoaderState(false);
                resetDataContext();
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
        
    }



    return (
        <>
        
            {show &&
                <S.Button bgcolor={bgcolor} onClick={()=> delContact(dataContact.id)}>
                    {children}
                </S.Button>
            }
        </>


    )
}
