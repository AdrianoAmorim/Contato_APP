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
    const { setHeaderState,setTitleState } = useContext(HeaderContext);
    const { setId, setNome, setSobreNome, setTel,setTelFixo, setSite, setEmail, setCategoria,dataContact } = useContext(ContactContext);
    const configHeader = {
        btnConfig: false, btnSave: false, btnDelete: true, btnBack: true, btnEditar: true, title: "Visualizar"
    };

    //INSERE na primeira montagem do component os botoes do header e o contato selecionado da tela Home
    useEffect(() => {
        setHeaderState(configHeader);
        
        setTitleState({title:"VIZUALIZAR"})
        if(id){
            getContactSelected(id);
        }
    }, []);

    //PEGA AS INFORMACOES DO CONTATO SELECIONADO E SETA NA STATE LOCAL E NO CONTEXT
    const getContactSelected =  (id: string) => {
        const contact:ContactType =  getContact(parseInt(id));
        setContact(contact);
        setId(contact.id);
        setNome(contact.nome);
        setSobreNome(contact.sobrenome);
        setTel(contact.tel);
        setTelFixo(contact.telFixo);
        setEmail(contact.email);
        setSite(contact.site);
        setCategoria(contact.categoria);
    }
console.log(dataContact.telFixo)
    return (
        <Main>
            <S.BoxInfoContact>
                <S.BoxName>
                    <h1>{contact.nome} {contact.sobrenome}</h1>
                </S.BoxName>
                <S.BoxInfo>
                    <div className="boxTitleItens">
                        <span className="labelItem">Celular:</span>
                        <span className="labelItem">Fixo:</span>
                        <span className="labelItem">Email: </span>
                        <span className="labelItem">Site: </span>
                        <span className="labelItem">Categoria: </span>
                    </div>
                    <div className="boxItens">
                        <span className="item">{contact.tel}</span>
                        <span className="item">{contact.telFixo}</span>
                        <span className="item">{contact.email}</span>
                        <span className="item">{contact.site}</span>
                        <span className="item">{contact.categoria}</span>
                    </div>
                </S.BoxInfo>
            </S.BoxInfoContact>
        </Main>
    )
}