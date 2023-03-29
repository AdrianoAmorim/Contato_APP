
import { MagnifyingGlassIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Main } from "../../components/MainComponent";
import { HeaderContext } from "../../contexts/HeaderContext";
import { getContacts } from "../../services/Api";
import { ContactType } from "../../types/ContactType";
import * as S from "./styled";

export const Home = () => {
    const { setHeaderState,setTitleState } = useContext(HeaderContext);
    const [dataContacts, setDataContacts] = useState<ContactType[]>(getContacts());
    const navigate = useNavigate();

    //CONFIGURA OS BOTOES DO HEADER
    const configHeader = {
        btnConfig: true,
        btnSave: false,
        btnDelete: false,
        btnBack: false,
        btnEditar:false,
    };

    //CHAMA A TELA DE VISUALIZACAO DO CONTATO PASSANDO O ID DO CONTATO SELECIONADO PELO PARAMETRO uRL
    const viewContact = (id:number) => {
        navigate(`/visualizar/${id}`);
    }

    //SETA A CONFIGURACOES DOS BOTOES NO CONTEXT DO HEADER    
    useEffect(() => {
        setHeaderState(configHeader);
        setTitleState({title:"CONTATOS"});
    }, [])

    return (
        <Main>
            <S.BoxInpSearch>
                <S.InpSearch type="search" placeholder="Buscar Contatos" />
                <MagnifyingGlassIcon id="iconSearch" color="var(--bg-header)" width={22} height={22} />
            </S.BoxInpSearch>

            <S.BoxCardContacts>
                {
                    dataContacts.map((contact, i) =>
                    
                        <S.CardContacts key={i} onClick={()=> viewContact(contact.id)}>
                            <PersonIcon className="iconContact" color="var(--bg-header)" width={20} height={20} />
                            <S.NameContacts>
                                {contact.nome}
                            </S.NameContacts>
                        </S.CardContacts>

                    )
                }
            </S.BoxCardContacts>

            <Link to={`/cadastrar`}>
                <S.BtnCadastrar>
                    <PlusIcon width={20} height={20} color="#FFF" />
                </S.BtnCadastrar>
            </Link>
        </Main>
    )
}