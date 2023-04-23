import {
  MagnifyingGlassIcon,
  PersonIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { useContext, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";
import { Main } from "../../components/MainComponent";
import { HeaderContext } from "../../contexts/HeaderContext";
import { getAllContacts, getContactsFind } from "../../services/Api";
import { ContactHomeType } from "../../types/ContactType";
import * as S from "./styled";
import { ErrorData } from "../ErrorData";
import { Modal } from "../../components/Modal";

export const Home = () => {
  const { setHeaderState, setTitleState, setLoaderState, loaderState } =
    useContext(HeaderContext);
  const [allContacts, setAllContacts] = useState<ContactHomeType[]>([]);
  const [textErrorData, setTextErrorData] = useState("");
  const [openModalState, setOpenModalState] = useState(false);
  const [textContentModalState, setContentModalState] = useState("");
  const [modalErrorState, setModalErrorState] = useState(false);
  const [titleModalState, setTitleModalState] = useState("");
  const [nomeFind, setNomeFind] = useState("");
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
    getDataContacts();
  }, []);


  //funcao para sair da tela de Dados Nao encontrado
  const exitErrorData = ()=>{
    getDataContacts();
    setNomeFind("");
    
  }
  //FUNCAO DO OK DO MODAL
  const confirmModal = () => {
    setOpenModalState(false);
  };

  //CUSTOMIZA O MODAL E ABRE ELE
  const customizeModal = (
    title: string,
    textContent: string,
    typeErrorModal?: boolean
  ) => {
    setContentModalState(textContent);
    setTitleModalState(title);
    if (typeErrorModal) {
      setModalErrorState(true);
    } else {
      setModalErrorState(false);
    }

    setOpenModalState(true);
  };

  //FAZ A REQUIZIÇÃO DE TODOS OS CONTATOS CADASTRADOS
  const getDataContacts = async () => {
    setLoaderState(true);
    try {
      const response = await getAllContacts();
      if (response.aviso) {
        setTextErrorData(response.msg);
        setAllContacts([]);
        setLoaderState(false);
      } else {
        validateAllContacts(response);
      }
    } catch (error) {
      console.log(error);
      customizeModal("ERRO","Erro de Comunicação com o servidor! Tente Novamente Mais Tarde.",true)
    }
  };
  //CHAMA A TELA DE VISUALIZACAO DO CONTATO PASSANDO O ID DO CONTATO SELECIONADO PELO PARAMETRO uRL
  const viewContact = (id: number) => {
    navigate(`/visualizar/${id}`);
  };

  //VALIDAR COM OS TRATAMENTOS DE ERROS
  const validateAllContacts = (res: ContactHomeType[] | any) => {
    if (res.response && res.response.data) {
      if (res.response.data.error) {
        customizeModal(
          "ERROR",
          `Error: ${res.response.data.msg}`,
          true
        );
      }
    } else {
      setAllContacts(res);
      setLoaderState(false);
    }
  };

  //REALIZA A BUSCA POR CONTATOS NO INPUT DE BUSCA
  const getDataContactFind = async (nome: string) => {
    if (nome.trim()) {
      setLoaderState(true);
      try {
        const response = await getContactsFind(nome);
        if (response.aviso) {
          setAllContacts([]);
          setTextErrorData(response.msg);
          setLoaderState(false);
        } else {
          validateAllContacts(response);
        }
      } catch (error) {
        console.log(error);
        customizeModal(
          "ERROR",
          "Erro de Comunicação com o servidor! Tente Novamente Mais Tarde.",
          true
        );
      }
    }
  };

//REALIZA A BUSCA POR CONTATOS NO INPUT BUSCA, AO PRESSIONAR A TECLA ENTER
  const getDataContactFindKeyDown = (
    nome: string,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (nome.trim()) {
      if (e.key === "Enter") {
        getDataContactFind(nome);
      }
    }
  };

  return (
    <Main>
      <Modal
        isOpen={openModalState}
        onConfirm={confirmModal}
        typeErrorModal={modalErrorState}
        titleModal={titleModalState}
        textContentModal={textContentModalState}
      />
      {loaderState ? (
        <ReactLoading
          className="paddingLoad"
          type="spinningBubbles"
          height="50px"
          width="50px"
          color="var(--bg-button)"
        />
      ) : (
        <>
          {allContacts.length > 0 ? (
            <>
              <S.BoxInpSearch className="fadeIn">
                <S.InpSearch
                  type="search"
                  placeholder="Buscar Contatos"
                  value={nomeFind}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNomeFind(e.target.value)
                  }
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                    getDataContactFindKeyDown(nomeFind, e)
                  }
                />
                <MagnifyingGlassIcon
                  id="iconSearch"
                  color="var(--bg-header)"
                  width={22}
                  height={22}
                  onClick={() => getDataContactFind(nomeFind)}
                />
              </S.BoxInpSearch>
              <S.BoxCardContacts>
                {allContacts.map((contact, i) => (
                  <S.CardContacts
                    key={i}
                    onClick={() => viewContact(contact.id)}
                    className="listContactAnimation"
                  >
                    <PersonIcon
                      className="iconContact"
                      color="var(--bg-header)"
                      width={20}
                      height={20}
                    />
                    <S.NameContacts>{contact.nome}</S.NameContacts>
                  </S.CardContacts>
                ))}
              </S.BoxCardContacts>
            </>
          ) : (
            <ErrorData
              textError={textErrorData}
              textLinkExit="CONSULTAR NOVAMENTE"
              exitError={exitErrorData}
            />
          )}
        </>
      )}

      <Link to={`/cadastrar`}>
        <S.BtnCadastrar>
          <PlusIcon width={20} height={20} color="#FFF" />
        </S.BtnCadastrar>
      </Link>
    </Main>
  );
};
