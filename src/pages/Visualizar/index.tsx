import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Main } from "../../components/MainComponent";
import { ContactContext } from "../../contexts/ContactContext";
import { HeaderContext } from "../../contexts/HeaderContext";
import { getContact } from "../../services/Api";
import { ContactType } from "../../types/ContactType";
import * as S from "./styled";


export const Visualizar = () => {
    const { id } = useParams();
    const [contact, setContact] = useState<ContactType>({} as ContactType);
    const { setHeaderState } = useContext(HeaderContext);
    const { setId, setNome, setSobreNome, setTel, setSite, setEmail, setCategoria,dataContact } = useContext(ContactContext);
    const configHeader = {
        btnConfig: false, btnSave: false, btnDelete: true, btnBack: true, btnEditar: true, title: "Visualizar"
    };

    //Seta na primeira montagem do component os botoes do header e o contato selecionado da tela Home
    useEffect(() => {
        setHeaderState(configHeader);
        if(id){
            getContactSelected(id);
        }
    }, []);

    useEffect(() => {
        setId(contact.id);
        setNome(contact.nome);
        setSobreNome(contact.sobrenome);
        setTel(contact.tel);
        setEmail(contact.email);
        setSite(contact.site);
        setCategoria(contact.categoria);
        
        console.log(dataContact)
    }, [contact.categoria]);

    const getContactSelected =  (id: string) => {
        const cont =  getContact(parseInt(id))
        console.log(cont)
        setContact(cont); 
        
    }

    return (
        <Main>
            <S.BoxInfoContact>
                <S.BoxName>
                    <h1>{contact.nome} {contact.sobrenome}</h1>
                </S.BoxName>
                <S.BoxInfo>
                    <div className="boxTitleItens">
                        <span className="labelItem">Telefone:</span>
                        <span className="labelItem">Email: </span>
                        <span className="labelItem">Site: </span>
                        <span className="labelItem">Categoria: </span>
                    </div>
                    <div className="boxItens">
                        <span className="item">{contact.tel}</span>
                        <span className="item">{contact.email}</span>
                        <span className="item">{contact.site}</span>
                        <span className="item">{contact.categoria}</span>
                    </div>
                </S.BoxInfo>
            </S.BoxInfoContact>
        </Main>
    )
}