
import { MagnifyingGlassIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { useContext, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";
import { Main } from "../../components/MainComponent";
import { HeaderContext } from "../../contexts/HeaderContext";
import { getAllContacts } from "../../services/Api";
import { ContactHomeType } from "../../types/ContactType";
import * as S from "./styled";

export const Home = () => {
    const { setHeaderState, setTitleState, setLoaderState, loaderState } = useContext(HeaderContext);
    const [allContacts, setAllContacts] = useState<ContactHomeType[]>([]);
    const navigate = useNavigate();

    //CONFIGURA OS BOTOES DO HEADER
    const configHeader = {
        btnConfig: true,
        btnSave: false,
        btnDelete: false,
        btnBack: false,
        btnEditar: false,
    };

    //SETA A CONFIGURACOES DOS BOTOES NO CONTEXT DO HEADER    
    useEffect(() => {
        setHeaderState(configHeader);
        setTitleState({ title: "CONTATOS" });
        setLoaderState(true);
        getDataContacts();
    }, [])

    //FAZ A REQUIZIÇÃO DE TODOS OS CONTATOS CADASTRADOS
    const getDataContacts = async () => {
        try {
            const response = await getAllContacts();
            validateAllContacts(response);
        } catch (error) {
            console.log(error);
            alert("Erro de Comunicação com o servidor! Tente Novamente Mais Tarde.");
        }
    }
    //CHAMA A TELA DE VISUALIZACAO DO CONTATO PASSANDO O ID DO CONTATO SELECIONADO PELO PARAMETRO uRL
    const viewContact = (id: number) => {
        navigate(`/visualizar/${id}`);
    }

    //VALIDAR COM OS TRATAMENTOS DE ERROS
    const validateAllContacts = (res: ContactHomeType[] | any) => {
    
        if (res.response && res.response.data) {
            if(res.response.data.error){
                alert(`Error: ${res.response.data.msg}`)
            }
        }else{
            setLoaderState(false);
            setAllContacts(res);
        }

    }

    return (
        <Main>
            <S.BoxInpSearch>
                <S.InpSearch type="search" placeholder="Buscar Contatos" />
                <MagnifyingGlassIcon id="iconSearch" color="var(--bg-header)" width={22} height={22} />
            </S.BoxInpSearch>


            {loaderState ? <ReactLoading className="paddingLoad" type="spinningBubbles" height='50px' width='50px' color="var(--bg-button)" /> :
                <S.BoxCardContacts>
                    {
                      allContacts.map((contact, i) =>
                            <S.CardContacts key={i} onClick={() => viewContact(contact.id)}>
                                <PersonIcon className="iconContact" color="var(--bg-header)" width={20} height={20} />
                                <S.NameContacts>
                                    {contact.nome}
                                </S.NameContacts>
                            </S.CardContacts>
                        )
                       
                    }
                </S.BoxCardContacts>
            }

            <Link to={`/cadastrar`}>
                <S.BtnCadastrar>
                    <PlusIcon width={20} height={20} color="#FFF" />
                </S.BtnCadastrar>
            </Link>
        </Main>
    )
}