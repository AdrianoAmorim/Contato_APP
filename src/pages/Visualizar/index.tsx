import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Main } from "../../components/MainComponent";
import { ContactContext } from "../../contexts/ContactContext";
import { HeaderContext } from "../../contexts/HeaderContext";
import { getContact } from "../../services/Api";
import { ContactType } from "../../types/ContactType";
import * as S from "./styled";
import ReactLoading from "react-loading";


export const Visualizar = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState<ContactType>({} as ContactType);
    const [nomeCategoria, setNomeCategoria] = useState("");
    const { setHeaderState, setTitleState, loaderState, setLoaderState } = useContext(HeaderContext);
    const { setId, setNome, setSobreNome, setCelular, setFixo, setSite, setEmail, setCategoria } = useContext(ContactContext);
    const configHeader = {
        btnConfig: false, btnSave: false, btnDelete: true, btnBack: true, btnEditar: true, title: "Visualizar"
    };

    //INSERE na primeira montagem do component os botoes do header e o contato selecionado da tela Home
    useEffect(() => {
        setHeaderState(configHeader);
        setTitleState({ title: "VIZUALIZAR" })
        if (id) {
            getContactSelected(id);
        }
    }, []);

    //PEGA AS INFORMACOES DO CONTATO SELECIONADO E SETA NA STATE LOCAL E NO CONTEXT
    const getContactSelected = async (id: string) => {
        setLoaderState(true);

        try {
            const response = await getContact(parseInt(id));

            if(response.id > 0){
                setContact(response);
                setId(contact.id);
                setNome(contact.nome);
                setSobreNome(contact.sobrenome);
                setCelular(contact.celular);
                setFixo(contact.fixo);
                setEmail(contact.email);
                setSite(contact.site);
                setCategoria(response.categoria.id);
                setNomeCategoria(response.categoria.nome);
                
            }else{
                alert("Ops! Houve Algum Erro ao Buscar os dados deste Contato!");
                navigate("/");
            }

        } catch (error) {
            console.log(error)
        }finally{
            setLoaderState(false);
        }


    }
    return (
        <Main>

            {loaderState ? <ReactLoading className="paddingLoad" type="spinningBubbles" height='50px' width='50px' color="var(--bg-button)" /> :

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
                            <span className="item">{contact.celular}</span>
                            <span className="item">{contact.fixo}</span>
                            <span className="item">{contact.email}</span>
                            <span className="item">{contact.site}</span>
                            <span className="item">{nomeCategoria}</span>
                        </div>
                    </S.BoxInfo>
                </S.BoxInfoContact>
            }


        </Main>
    )
}