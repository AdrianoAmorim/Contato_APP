
import { MagnifyingGlassIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Main } from "../../components/MainComponent";
import { HeaderContext } from "../../contexts/HeaderContext";
import { getContacts } from "../../services/Api";

import * as S from "./styled";

export const Home = () => {
    const { setHeaderState } = useContext(HeaderContext);
    const [dataContacts, setDataContacts] = useState(getContacts());
    const navigate = useNavigate();

    //CONFIGURA OS BOTOES DO HEADER
    const configHeader = {
        btnConfig: true,
        btnSave: false,
        btnDelete: false,
        btnBack: false,
        title: "Contatos"
    };

    //FAZ UM GET PARA PEGAR A LISTA COM TODOS OS CONTATOS CADASTRADOS
    const viewContact = (id:number) => {
        console.log(id)
        navigate(`/editar/${id}`);
    }

    //SETA A CONFIGURACOES DOS BOTOES NO CONTEXT DO HEADER    
    useEffect(() => {
        setHeaderState(configHeader);
    }, [])

    return (
        <Main>
            <S.BoxInpSearch>
                <S.InpSearch type="search" placeholder="Buscar Contatos" />
                <MagnifyingGlassIcon id="iconSearch" color="var(--bg-header)" width={22} height={22} />
            </S.BoxInpSearch>

            <S.BoxCardContacts>
                {
                    dataContacts.contact.map((contato, i) =>
                        <S.CardContacts key={i} onClick={()=> viewContact(contato.id)}>
                            <PersonIcon className="iconContact" color="var(--bg-header)" width={20} height={20} />
                            <S.NameContacts data-id={contato.id}>
                                {contato.nome}
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