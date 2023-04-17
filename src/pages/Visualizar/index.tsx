import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const {
    setId,
    setNome,
    setSobreNome,
    setCelular,
    setFixo,
    setSite,
    setEmail,
    setCategoria,
  } = useContext(ContactContext);
  const configHeader = {
    btnConfig: false,
    btnSave: false,
    btnDelete: true,
    btnBack: true,
    btnEditar: true
  };

  useEffect(() => {
    setHeaderState(configHeader);
    setTitleState({ title: "VIZUALIZAR" });
    setLoaderState(true);
    if (id) {
      getContactSelected(id);
    }
  }, []);

  //BUSCA O CONTATO SELECIONADO NA TELA HOME - PELO ID
  const getContactSelected = async (id: string) => {
    try {
      const response = await getContact(parseInt(id));

      if (response.id > 0) {
        setContact(response);

        setId(response.id);
        setNome(response.nome);
        setSobreNome(response.sobrenome);
        setCelular(response.celular);
        setFixo(response.fixo);
        setEmail(response.email);
        setSite(response.site);
        setCategoria(response.categoria.id);
        setNomeCategoria(response.categoria.nome);
      setLoaderState(false);
      } else {
        alert("Ops! Houve Algum Erro ao Buscar os dados deste Contato!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Main>
      {loaderState ? (
        <ReactLoading
          className="paddingLoad"
          type="spinningBubbles"
          height="50px"
          width="50px"
          color="var(--bg-button)"
        />
      ) : (
        <S.BoxInfoContact className="fadeIn">
          <S.BoxName>
            <h1>
              {contact.nome} {contact.sobrenome}
            </h1>
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
      )}
    </Main>
  );
};
